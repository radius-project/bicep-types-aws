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


def generate_reference_table(base_directory, output_filename):
    with open(output_filename, "w") as output_file:
        output_file.write("| Resource Type | Primary Identifier(s) | Notes |\n")
        output_file.write("| ------------- | --------------------- | ----- |\n")

        filepaths = os.listdir(base_directory)

        for filepath in filepaths:
            with open(f"{base_directory}/{filepath}", "r") as input_file:
                data = json.load(input_file)
                resource_type = data["type"]
                resource_schema = data["schema"]
                primary_identifiers = resource_schema["primaryIdentifier"]
                is_nonidempotent = False
                for primary_identifier in primary_identifiers:
                    if "readOnlyProperties" in resource_schema:
                        property_list = resource_schema["readOnlyProperties"]
                        if primary_identifier in property_list:
                            is_nonidempotent = True

                primary_identifiers_output = ", ".join(primary_identifiers)
                notes_output = ""
                if is_nonidempotent:
                    notes_output = "\u26a0 This resource type is non-idempotent. It may not be fully supported by Radius."

                output_file.write(
                    f"| {resource_type} | {primary_identifiers_output} | {notes_output} |\n"
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
