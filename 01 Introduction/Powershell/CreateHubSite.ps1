$adminUrl = "https://integrationsonline-admin.sharepoint.com"
$hubSiteUrl = "https://integrationsonline.sharepoint.com/sites/learning"
$user = "alexander.pajer@integrations.at"

Connect-PnPOnline -Url $adminUrl 

New-PnPSite -Type TeamSite -title "Learning" -alias "learning" -Description "Main site for learning"

#Add-PnPFile -Path ".\learning.png" -Folder "SiteAssets"

Connect-SPOService -Url $adminUrl

Register-SPOHubSite -Site $hubSiteUrl

Set-SPOHubSite -Identity $hubSiteUrl -LogoUrl $hubSiteUrl"/SiteAssets/learning.png" -Description "Main site for learning"

Grant-SPOHubSiteRights -Identity $hubSiteUrl -Principals $user -Rights Join

Add-SPOHubSiteAssociation -Site https://integrationsonline.sharepoint.com/sites/training -HubSite https://integrationsonline.sharepoint.com/sites/learning 


## Site Types: TeamSite | CommunicationSite