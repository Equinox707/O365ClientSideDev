Import-Module MsOnline

$tenant = "integrationsonline"

$credential = Get-Credential
$siteurl = "https://$tenant.sharepoint.com/sites/ClientDev"

#Connect to a site in your tennant
Connect-SPOnline -url $siteurl -Credentials $credential

$web = Get-SPOWeb

#Get all lists
Get-SPOList -web $web

#Create a new list
New-SPOList -Title "SPOPowershellSample" -Template DocumentLibrary -Url "PSSample"

#Disconnect
#Remove-PSSession $sfboSession ; Remove-PSSession $exchangeSession ; Remove-PSSession $ccSession ; Disconnect-SPOService