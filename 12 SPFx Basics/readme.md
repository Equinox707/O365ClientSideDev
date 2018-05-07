## Update to latest version

Add to package.json scripts section

"update-spfx": "npm install @microsoft/sp-client-base@latest @microsoft/sp-client-preview@latest --save & npm install @microsoft/sp-build-web@latest @microsoft/sp-module-interfaces@latest @microsoft/sp-webpart-workbench@latest --save-dev & npm prune & npm dedupe & gulp nuke & gulp"

use:

npm run update-spfx

## Labs

[Setup Environment](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment)

[Getting Started](https://dev.office.com/sharepoint/docs/spfx/web-parts/get-started/build-a-hello-world-web-part)

