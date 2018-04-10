Import-Module Microsoft.Online.SharePoint.PowerShell -DisableNameChecking

$adminUPN = "alexander.pajer@integrations.at"
$orgName = "integrationsonline"
$timeZone = 4 #Get-PnPTimeZoneId
$tenantAdminUrl = "https://" + $orgName  + "-admin.sharepoint.com"
$templateURL = “https://integrationsonline.sharepoint.com/sites/pnptemplatexx”
$copyURL = “https://integrationsonline.sharepoint.com/sites/pnptemplateCopy”

Connect-SPOnline -Url $tenantAdminUrl

New-PnPTenantSite -Title “PnP Template Site Collection”-Url $templateURL -Owner $adminUPN -Lcid 1033 -Template “STS#0” -TimeZone $timeZone -StorageQuota 20 
Disconnect-SPOnline

exit

# Remove deleted Site from Recycle bin
Import-Module Microsoft.Online.SharePoint.PowerShell -DisableNameChecking

$adminUPN = "alexander.pajer@integrations.at"
$userCredential = Get-Credential -UserName $adminUPN 
Connect-SPOService -Url "https://integrationsonline-admin.sharepoint.com" -Credential $userCredential
Remove-SPODeletedSite -Identity $templateURL