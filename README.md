# Clinical Quality Language (CQL) for VSCode

Adds syntax highlighting, semantic (error) highlighting, and local execution for the HL7 Clinical Quality Language (CQL) to VS Code

## Quick Start

The [cqframework.cql](https://marketplace.visualstudio.com/items?itemName=cqframework.cql) extension has been published to the VS Code Marketplace, so the installation is simple. Just search for "Clinical Quality Language" in the marketplace and install the extension. It'll be activated once you open a .cql file.

This extension requires Java to be installed. It'll prompt you to install Java if required.

## More About the Clinical Quality Language

The Clinical Quality Language (CQL) is a domain specific language for expressing
electronic clinical quality measures (eCQM) and clinical decision support rules
(CDS) in an author-friendly computable format. Find out more about CQL:

* [CQL Specification](http://cql.hl7.org)
* [CQL Stream on FHIR Zulip Chat](https://chat.fhir.org/#narrow/stream/179220-cql)
* [clinical_quality_language on GitHub](https://github.com/cqframework/clinical_quality_language)
* [Clinical Quality Expression Language at HL7](http://www.hl7.org/special/Committees/projman/searchableProjectIndex.cfm?action=view&ProjectNumber=1108)
* [Clinical Quality Framework (CQF)](https://confluence.hl7.org/display/CQIWC/Clinical+Quality+Framework)

## Getting Help

Bugs and feature requests can be filed with [Github Issues](https://github.com/cqframework/vscode-cql/issues).

The implementers are active on the official FHIR [Zulip chat for CQL](https://chat.fhir.org/#narrow/stream/179220-cql).

Inquires for commercial support can be directed to [info@alphora.com](info@alphora.com).

## Related Projects

* [atom_cql_support](https://github.com/cqframework/atom_cql_support) - CQL Support for the Atom editor.
* [cql-language-server](https://github.com/DBCG/cql-language-server) - The Java and Language Server Protocol based server that powers this extension.
* [cql-translator](https://github.com/cqframework/clinical_quality_language/tree/master/Src/java/cql-to-elm) - The ELM generation component used in this project.
* [cql-engine](https://github.com/DBCG/cql_engine) - The Java CQL runtime environment used in the extension.

## Local Plugin Development

Install `npm`

Run `npm install` from the root

Run `npm run watch` from the root

Run the `debug` launch from VS Code

## Acknowledgements

This plugin is a reimplementation of much of the functionality in the [atom_cql_support](https://github.com/cqframework/atom_cql_support) plugin for the Atom editor. Additionally, the Red Hat [vscode-java](https://github.com/redhat-developer/vscode-java) plugin was referenced extensively in developing this plugin.

## License

Copyright 2019+ Dynamic Content Group, LLC (dba Alphora)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
