if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) 
{
    Add-PSSnapin "Microsoft.SharePoint.PowerShell"
}

$appTitle = "SPProviderHosted"
$Username = "spdom\administrator"
$AdminPassword = Read-Host -Prompt "Enter a Password" -AsSecureString

$url = "http://sp2016/"

$ctx = New-Object Microsoft.SharePoint.Client.ClientContext("$url")

$ctx.Credentials = New-Object Microsoft.SharePoint.Client.SharePointOnlineCredentials($Username, $AdminPassword)

$AppPrincipals = Get-MsolServicePrincipal | Where-Object {$_.DisplayName -eq $appTitle} 

foreach ($Principal in $AppPrincipals) {

    $AppPrincipalID = $Principal.AppPrincipalId
    Remove-MsolServicePrincipal -AppPrincipalId $AppPrincipalID
}