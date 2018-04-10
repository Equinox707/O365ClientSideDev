Add-PSSnapin "Microsoft.SharePoint.PowerShell"

$appTitle = "SPProviderHosted"

$Username=”sp\administrator“

$AdminPassword=Read-Host -Prompt “Enter a Password” -AsSecureString

$Url=”http://sp2016/” 

$ctx=New-Object Microsoft.SharePoint.Client.ClientContext(“$Url”)

$ctx.Credentials = New-Object Microsoft.SharePoint.Client.SharePointOnlineCredentials($Username, $AdminPassword)

$AppPrincipals = Get-MsolServicePrincipal | ? {$_.DisplayName -eq $appTitle} 

foreach($Principal in $AppPrincipals){

$AppPrincipalID = $Principal.AppPrincipalId

Remove-MsolServicePrincipal -AppPrincipalId $AppPrincipalID

}