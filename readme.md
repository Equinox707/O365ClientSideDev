# Office 365 Dev Tenant

[Setup & Register Office 365 Dev Tenant](https://portal.microsoftonline.com/Signup/MainSignUp.aspx?OfferId=6881A1CB-F4EB-4db3-9F18-388898DAF510&DL=DEVELOPERPACK)

# Github Essentials

Init Git: `git init`

Add files to Git: `git add .`

Commit files: `git commit -m "Your message"` 

Adding Remotes: `git remote add origin https://github.com/try-git/try_git.git`

Pull / Push from / to repository: `git pull / git push` 

List Branches: `git branch -a` 

Create a new Branch: `git checkout -b [name_of_your_new_branch]`

Push new Branch to remote: `git push origin [name_of_your_new_branch]`

Switch to Branch: `git checkout [name_of_your_branch]`

Merge Branch: `git merge [branch_to_merge]`

# Using VS Code

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

# Markdown

[Markdown Cheatsheet Intro](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
