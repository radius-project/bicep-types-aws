# ------------------------------------------------------------
# Copyright 2023 The Radius Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# ------------------------------------------------------------

import os
import sys
import json

LIMITATIONS_URL = "https://github.com/radius-project/bicep-types-aws/blob/main/docs/reference/limitations.md"


def generate_reference_table(base_directory, output_filename):
    with open(output_filename, "w") as output_file:
        output_file.write("| Resource Type | Notes |\n")
        output_file.write("| ------------- | ----- |\n")

        filepaths = os.listdir(base_directory)
        filepaths.sort()

        for filepath in filepaths:
            with open(f"{base_directory}/{filepath}", "r") as input_file:
                data = json.load(input_file)
                resource_type = data["type"]
                resource_schema = data["schema"]
                handlers = resource_schema.get("handlers", {})
                # Same rules as the downloader: a read-only type has a read
                # handler but no create handler, and a create-and-delete-only
                # type has a create handler but no update handler.
                is_read_only = "read" in handlers and "create" not in handlers
                is_create_and_delete_only = "create" in handlers and "update" not in handlers

                notes = []
                if is_read_only:
                    notes.append(f"This resource type is read-only. Reference it with `existing`. See [here]({LIMITATIONS_URL}#read-only-resource-types) for more information.")
                if is_create_and_delete_only:
                    notes.append(f"This resource type can only be created and deleted. See [here]({LIMITATIONS_URL}#create-and-delete-only-resource-types) for more information.")
                notes_output = " ".join(notes)

                aws_resource_type = resource_type.split("::")[1].lower()
                resource_api_version = "default"
                resource_link = f"https://github.com/radius-project/bicep-types-aws/blob/main/artifacts/bicep/aws/aws.{aws_resource_type}/{resource_api_version}/types.md"

                output_file.write(
                    f"| **[{resource_type}]({resource_link})** | {notes_output} |\n"
                )


def main():
    if len(sys.argv) != 3:
        print("Usage: generate_reference_docs.py <base_directory> <output_filename>")
        sys.exit(1)

    base_directory = sys.argv[1]
    output_filename = sys.argv[2]

    generate_reference_table(base_directory, output_filename)


if __name__ == "__main__":
    main()
