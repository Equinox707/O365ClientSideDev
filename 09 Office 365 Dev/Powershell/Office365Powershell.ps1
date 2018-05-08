Set-ExecutionPolicy Bypass
$credential = Get-Credential
Import-Module MsOnline
#Connect to =365
Connect-MsolService -Credential $credential
#Connect to SharePoint Online
Import-Module Microsoft.Online.SharePoint.PowerShell -DisableNameChecking 
Connect-SPOService -Url https://integrationsonline-admin.sharepoint.com -credential $credential
#Skype for Business

#Exchange Online
$exchangeSession = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri "https://outlook.office365.com/powershell-liveid/" -Credential $credential -Authentication "Basic" -AllowRedirection
Import-PSSession $exchangeSession -DisableNameChecking
#Security & Compliance Center
$ccSession = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://ps.compliance.protection.outlook.com/powershell-liveid/ -Credential $credential -Authentication Basic -AllowRedirection
Import-PSSession $ccSession -Prefix cc

$siteurl = https://integrationsonline.sharepoint.com/sites/spdevtest/

#Connect to a site in your tennant
Connect-SPOnline -url $siteurl -Credentials $credential

#Get all lists
Get-SPOList

#Create a new list
New-SPOList -Title "SPOPowershellSample" -Template DocumentLibrary -Url "PSSample"


#Disconnect
#Remove-PSSession $sfboSession ; Remove-PSSession $exchangeSession ; Remove-PSSession $ccSession ; Disconnect-SPOService