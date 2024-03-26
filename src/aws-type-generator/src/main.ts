import yargs from 'yargs/yargs';
import path from "path";
import fs from "fs";
import { writeTypesJson } from "bicep-types";
import { writeMarkdown } from "bicep-types";
import { SchemaRecord } from "./schemarecord";
import { convertSchemaRecordToTypes } from "./convert";
import { copyRecursive, executeSynchronous, getLogger, lowerCaseCompare, logErr, logOut, ILogger, defaultLogger, executeCmd, findRecursive } from './utils';
import { mkdir, rm, writeFile, readFile } from 'fs/promises';
import { TypeFile, buildIndex, readTypesJson, writeIndexJson, writeIndexMarkdown } from 'bicep-types'; 

const parser = yargs(process.argv.slice(2)).options({
    input: { type: 'string', demandOption: true },
    output: { type: 'string', demandOption: true },
}).argv;

interface Args {
    input: string
    output: string
}

async function main() {
    const argv: Args = await parser

    try {
        argv.input = path.resolve(argv.input)
        argv.output = path.resolve(argv.output)

        console.info(`reading directory ${argv.input}`)
        const start = Date.now();

        const files = fs.readdirSync(argv.input);

        const inputs = files.filter(file => file.endsWith('.json')).map(function (file: string) {
            const rawdata = fs.readFileSync(path.resolve(argv.input, file), { encoding: 'utf8' });
            const record: SchemaRecord = JSON.parse(rawdata);
            const parts = record.type.split('::')

            return { namespace: `${parts[0]}.${parts[1]}`, record: record };
        })

        const groupedByNamespace = groupBy(inputs, d => d.namespace, d => d.record)
        const definitions = Object.entries(groupedByNamespace).map(([namespace, records]) => {
            return { namespace: namespace, apiVersion: 'default', types: convertSchemaRecordToTypes(records), };
        });

        console.info(`writing output to ${argv.output}`)

        Object.entries(definitions).forEach(([_, definition]) => {
            console.log(`writing ${definition.namespace}`)
            const outFolder = path.resolve(argv.output, `aws/${definition.namespace}/${definition.apiVersion}`.toLowerCase());
            fs.mkdirSync(outFolder, { recursive: true })

            // write types.json
            fs.writeFileSync(`${outFolder}/types.json`, writeTypesJson(definition.types))

            // writer types.md
            fs.writeFileSync(`${outFolder}/types.md`, writeMarkdown(definition.types, `${definition.namespace} @ ${definition.apiVersion}`))
        })

        await buildTypeIndex(defaultLogger, argv.output)

        console.info(`generator took ${Date.now() - start}ms`);
    } catch (err) {
        console.error("An error was encountered while handling a request:", err);
        throw err;
    }
}

const groupBy = <T, K extends keyof any, V>(list: T[], getKey: (item: T) => K, getValue: (item: T) => V) =>
    list.reduce((previous, currentItem) => {
        const group = getKey(currentItem);
        if (!previous[group]) previous[group] = [];
        previous[group].push(getValue(currentItem));
        return previous;
    }, {} as Record<K, V[]>);

async function buildTypeIndex(logger: ILogger, baseDir: string) {
  const typesPaths = await findRecursive(baseDir, filePath => {
    return path.basename(filePath) === 'types.json';
  });

  const typeFiles: TypeFile[] = [];
  for (const typePath of typesPaths) {
    const content = await readFile(typePath, { encoding: 'utf8' });
    typeFiles.push({
      relativePath: path.relative(baseDir, typePath),
      types: readTypesJson(content),
    });
  }
  const indexContent = await buildIndex(typeFiles,  log => logOut(logger, log));

  await writeFile(`${baseDir}/index.json`, writeIndexJson(indexContent));
  await writeFile(`${baseDir}/index.md`, writeIndexMarkdown(indexContent));
}

main()