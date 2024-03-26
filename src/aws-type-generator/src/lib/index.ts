// import os from 'os';
// import path from 'path';
// import { readdir, stat, rmdir, mkdir, rm, writeFile, readFile, copyFile } from 'fs/promises';
// import { groupBy, keys, orderBy, sortBy, Dictionary } from 'lodash';
// import { TypeBaseKind } from './types';

// interface TypeIndex {
//     Resources: Dictionary<TypeIndexEntry>;
//   }
  
//   interface TypeIndexEntry {
//     RelativePath: string;
//     Index: number;
//   }

// export async function buildTypeIndex(baseDir: string) {
//     const indexContent = await buildIndex(baseDir);

//     await writeFile(
//         `${baseDir}/index.json`,
//         JSON.stringify(indexContent, null, 0));

//     await writeFile(
//         `${baseDir}/index.md`,
//         generateIndexMarkdown(indexContent));
// }

// function generateIndexMarkdown(index: TypeIndex) {
//     let markdown = '# Bicep Types\n';
  
//     const byProvider = groupBy(keys(index.Resources), x => x.split('/')[0].toLowerCase());
//     for (const namespace of sortBy(keys(byProvider), x => x.toLowerCase())) {
//       markdown += `## ${namespace}\n`;
  
//       const byResourceType = groupBy(byProvider[namespace], x => x.split('@')[0].toLowerCase());
//       for (const resourceType of sortBy(keys(byResourceType), x => x.toLowerCase())) {
//         markdown += `### ${resourceType}\n`;
  
//         for (const typeString of sortBy(byResourceType[resourceType], x => x.toLowerCase())) {
//           const version = typeString.split('@')[1];
//           const jsonPath = index.Resources[typeString].RelativePath;
//           const anchor = `resource-${typeString.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`
  
//           markdown += `* [${version}](${path.dirname(jsonPath)}/types.md#${anchor})\n`;
//         }
  
//         markdown += '\n';
//       }
//     }
  
//     return markdown;
//   }

// async function buildIndex(baseDir: string): Promise<TypeIndex> {
//     const typeFiles = await findRecursive(baseDir, filePath => {
//         return path.basename(filePath) === 'types.json';
//     });

//     const resourceTypes = new Set<string>();
//     const typeDictionary: Dictionary<TypeIndexEntry> = {};

//     // Use a consistent sort order so that file system differences don't generate changes
//     for (const typeFilePath of orderBy(typeFiles, f => f.toLowerCase(), 'asc')) {
//         const content = await readFile(typeFilePath, { encoding: 'utf8' });

//         const types = JSON.parse(content) as any[];
//         for (const type of types) {
//             const resource = type[TypeBaseKind.ResourceType];
//             if (!resource) {
//                 continue;
//             }

//             if (resourceTypes.has(resource.Name.toLowerCase())) {
//                 console.warn(`WARNING: Found duplicate type \"${resource.Name}\"`);
//                 continue;
//             }
//             resourceTypes.add(resource.Name.toLowerCase());

//             typeDictionary[resource.Name] = {
//                 RelativePath: path.relative(baseDir, typeFilePath),
//                 Index: types.indexOf(type),
//             };
//         }
//     }

//     return {
//         Resources: typeDictionary,
//     }
// }

// async function copyRecursive(sourceBasePath: string, destinationBasePath: string): Promise<void> {
//     for (const filePath of await findRecursive(sourceBasePath, _ => true)) {
//       const destinationPath = path.join(destinationBasePath, path.relative(sourceBasePath, filePath));
  
//       await mkdir(path.dirname(destinationPath), { recursive: true });
//       await copyFile(filePath, destinationPath);
//     }
//   }
  
//   async function findRecursive(basePath: string, filter: (name: string) => boolean): Promise<string[]> {
//     let results: string[] = [];
  
//     for (const subPathName of await readdir(basePath)) {
//       const subPath = path.resolve(`${basePath}/${subPathName}`);
  
//       const fileStat = await stat(subPath);
//       if (fileStat.isDirectory()) {
//         const pathResults = await findRecursive(subPath, filter);
//         results = results.concat(pathResults);
//         continue;
//       }
  
//       if (!fileStat.isFile()) {
//         continue;
//       }
  
//       if (!filter(subPath)) {
//         continue;
//       }
  
//       results.push(subPath);
//     }
  
//     return results;
//   }