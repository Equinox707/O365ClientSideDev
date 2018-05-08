# SPFx

## Update to latest version

Add to package.json scripts section

"update-spfx": "npm install @microsoft/sp-client-base@latest @microsoft/sp-client-preview@latest --save & npm install @microsoft/sp-build-web@latest @microsoft/sp-module-interfaces@latest @microsoft/sp-webpart-workbench@latest --save-dev & npm prune & npm dedupe & gulp nuke & gulp"

use:

npm run update-spfx

## Labs

[Setup Environment](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment)

[Getting Started](https://dev.office.com/sharepoint/docs/spfx/web-parts/get-started/build-a-hello-world-web-part)


# VS Code

## VS Code Tips & Tricks 

https://github.com/Microsoft/vscode-tips-and-tricks

## Manage VS Code Extensions

#### Dump to File
```
code --list-extensions > d:\extensions.txt
```

#### Import using PowerShell - ie. importExtensions.ps1
```
foreach($line in Get-Content d:\extensions.txt) {
    code --install-extension $line
}
```
## My VS Code Settings

```
{
    "workbench.startupEditor": "none",
    "git.confirmSync": false,
    "git.enableSmartCommit": true,
    "git.autofetch": true,
    "window.zoomLevel": 1,
    "problems.autoReveal": false,
    "workbench.editor.enablePreview": false,
    "editor.wordWrap": "on",
    "editor.minimap.enabled": false,
    "problems.decorations.enabled": false,
    "explorer.confirmDelete": false,
    "window.restoreWindows": "none"
}
```