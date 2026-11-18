// -------------------------------------------------------------
// Copyright 2023 The Radius Authors.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ------------------------------------------------------------.
import path from 'path';
import { readdir, stat } from 'fs/promises';
import fs from 'fs';

export interface ILogger {
  out: (data: string) => void;
  err: (data: string) => void;
}

export const defaultLogger: ILogger = {
  out: data => process.stdout.write(data),
  err: data => process.stderr.write(data),
}

export async function findRecursive(basePath: string, filter: (name: string) => boolean): Promise<string[]> {
  let results: string[] = [];

  for (const subPathName of await readdir(basePath)) {
    const subPath = path.resolve(`${basePath}/${subPathName}`);

    const fileStat = await stat(subPath);
    if (fileStat.isDirectory()) {
      const pathResults = await findRecursive(subPath, filter);
      results = results.concat(pathResults);
      continue;
    }

    if (!fileStat.isFile()) {
      continue;
    }

    if (!filter(subPath)) {
      continue;
    }

    results.push(subPath);
  }

  return results;
}

export function logOut(logger: ILogger, line: string) {
  logger.out(`${line}\n`);
}
const namespaceFolderPattern = /^aws\.[a-z0-9]+$/;

// removeStaleNamespaces deletes the namespace folders under awsDir, such as
// aws.iotevents, that are not in keep, so a namespace whose types AWS removed
// leaves the output and the index. Other files and folders are left alone.
// Returns the names of the folders it removed.
export function removeStaleNamespaces(awsDir: string, keep: Set<string>): string[] {
  if (!fs.existsSync(awsDir)) {
    return [];
  }

  const removed: string[] = [];
  for (const entry of fs.readdirSync(awsDir, { withFileTypes: true })) {
    if (entry.isDirectory() && namespaceFolderPattern.test(entry.name) && !keep.has(entry.name)) {
      fs.rmSync(path.join(awsDir, entry.name), { recursive: true, force: true });
      removed.push(entry.name);
    }
  }
  return removed.sort();
}
