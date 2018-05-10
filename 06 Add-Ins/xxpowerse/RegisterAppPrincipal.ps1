Add-PSSnapin "Microsoft.SharePoint.PowerShell"
  
 # set intialization values for new app principal
  
 $appDisplayName = "SPProviderHosted"
  
 $clientID = "d3e99cd6-4d75-459b-beb0-622afff0c37a"
  
 $targetSiteUrl = "http://sp2016/"
  
 $targetSite = Get-SPSite $targetSiteUrl
  
 $realm = Get-SPAuthenticationRealm -ServiceContext $targetSite
  
 $fullAppPrincipalIdentifier = $clientID + '@' + $realm

 Write-Host $fullAppPrincipalIdentifier
  
 Write-Host "Registering new app principal"
  
 $registeredAppPrincipal = Register-SPAppPrincipal -NameIdentifier $fullAppPrincipalIdentifier -Site $targetSite.RootWeb -DisplayName $AppDisplayName 
  
 $registeredAppPrincipal | select * | Format-List | Out-File -FilePath "AppRegistration.txt"
  
 Write-Host "Registration Completed"

 # Check at: http://sp2016/_layouts/15/appprincipals.aspx


# Useful CmdLets
#
# $ ap = Get-SPAppPrincipal -Site http://sp2016 -NameIdentifier d3e99cd6-4d75-459b-beb0-622afff0c37a@12f8c99c-65d7-4b04-9413-409b9d6ba020
