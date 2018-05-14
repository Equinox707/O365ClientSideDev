Import-Module MsOnline

$credential = Get-Credential
$siteurl = "https://integrationsonline.sharepoint.com/sites/ClientDev"

#Connect to a site in your tennant
Connect-SPOnline -url $siteurl -Credentials $credential

#Get all lists
Get-SPOList

#Create a new list
New-SPOList -Title "SPOPowershellSample" -Template DocumentLibrary -Url "PSSample"

#Disconnect
#Remove-PSSession $sfboSession ; Remove-PSSession $exchangeSession ; Remove-PSSession $ccSession ; Disconnect-SPOService