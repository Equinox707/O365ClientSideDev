if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) 
{
    Add-PSSnapin "Microsoft.SharePoint.PowerShell"
}

# Make sure you have created the SecurityTokenIssuer using CreateSecurityTokenIssuer.ps1
# Run only one or delete bevore creating

$site = "http://sp2016"
$appName = "ProviderHostedAddIn"
$issuerId = "2ffbee9b-3a1f-4d7e-b673-866ffa549d27"
$appFile = "D:\Classes\O365ClientSideDev\06 Add-Ins\ProviderHostedAddIn\ProviderHostedAddIn\bin\Debug\app.publish\1.0.0.0\ProviderHostedAddIn.app"

$web = Get-SPWeb -Identity $site
$realm = Get-SPAuthenticationRealm -ServiceContext $web.Site;
$appIdentifier = $issuerId  + '@' + $realm;

# Register the App with given IssuerId /ClientId
$appPrincipal = Register-SPAppPrincipal -DisplayName $appName -NameIdentifier $appIdentifier -Site $web 

$app = Import-SPAppPackage -Path $appFile -Site $site -Source ObjectModel -Confirm:$false 	

# Install the App
Install-SPApp -Web $site -Identity $app

Set-SPAppPrincipalPermission -Site $web -AppPrincipal $appPrincipal -Scope SiteCollection -Right FullControl

Write-Host "App published"

exit

# List App Principals
$Url = "http://sp2016"
$web = Get-SPWeb -Identity $Url
$realm = Get-SPAuthenticationRealm -ServiceContext $web.Site;
$appIdentifier = $issuerId  + '@' + $realm;
Get-SPAppPrincipal -NameIdentifier $appIdentifier -Site $Url

exit