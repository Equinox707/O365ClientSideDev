if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) 
{
    Add-PSSnapin "Microsoft.SharePoint.PowerShell"
}

$siteUrl = "http://sp2016";
$appName = "ProviderHostedNG4";
$certPath = "D:\Classes\O365ClientSideDev\00 Ressources\SPSignCert.cer";
$issuerId = "2054477a-4e5b-4caa-9492-6eaf1683bdff";

$publicCertPath = $certPath;
$certificate = Get-PfxCertificate $publicCertPath ;
$web = Get-SPWeb $siteUrl; 
$realm = Get-SPAuthenticationRealm -ServiceContext $web.Site;
$fullAppIdentifier = $issuerId + '@' + $realm;
New-SPTrustedSecurityTokenIssuer -Name $appName -Certificate $certificate -RegisteredIssuerName $fullAppIdentifier -IsTrustBroker;

#Turn off https
$serviceConfig = Get-SPSecurityTokenServiceConfig 
$serviceConfig.AllowOAuthOverHttp = $true 
$serviceConfig.Update()

exit;

#Remove
$issuerName = "ProviderHostedNG4";
Remove-SPTrustedSecurityTokenIssuer -Identity $issuerName -Confirm:$false

exit 
#List
Get-SPTrustedSecurityTokenIssuer