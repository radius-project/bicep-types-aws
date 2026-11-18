import fs from "fs";
import os from "os";
import path from "path";
import { afterEach, describe, expect, test } from '@jest/globals';
import { removeStaleNamespaces } from "./utils";

describe('removeStaleNamespaces', () => {
    let root: string

    afterEach(() => fs.rmSync(root, { recursive: true, force: true }))

    function setup(entries: string[]): string {
        root = fs.mkdtempSync(path.join(os.tmpdir(), 'stale-namespaces-'))
        const awsDir = path.join(root, 'aws')
        for (const entry of entries) {
            const full = path.join(awsDir, entry)
            fs.mkdirSync(path.dirname(full), { recursive: true })
            fs.writeFileSync(full, '{}')
        }
        return awsDir
    }

    test('removes namespace folders that were not generated', () => {
        const awsDir = setup(['aws.ec2/default/types.json', 'aws.iotevents/default/types.json', 'aws.opsworkscm/default/types.md'])

        expect(removeStaleNamespaces(awsDir, new Set(['aws.ec2']))).toEqual(['aws.iotevents', 'aws.opsworkscm'])
        expect(fs.readdirSync(awsDir)).toEqual(['aws.ec2'])
        expect(fs.existsSync(path.join(awsDir, 'aws.ec2/default/types.json'))).toBe(true)
    })

    test('leaves files and folders that are not namespaces', () => {
        const awsDir = setup(['aws.ec2/default/types.json', 'notes.md', 'other/file.json', 'aws.iotevents.json'])

        expect(removeStaleNamespaces(awsDir, new Set(['aws.ec2']))).toEqual([])
        expect(fs.readdirSync(awsDir).sort()).toEqual(['aws.ec2', 'aws.iotevents.json', 'notes.md', 'other'])
    })

    test('does nothing when the folder does not exist', () => {
        setup([])

        expect(removeStaleNamespaces(path.join(root, 'missing'), new Set())).toEqual([])
    })
})
