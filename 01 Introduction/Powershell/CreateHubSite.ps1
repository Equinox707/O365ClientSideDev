$tenant = "integrationsonline"
$adminUrl = "https://$tenant-admin.sharepoint.com"
$hubUrlFragment = "learning"
$hubSiteUrl = "https://$tenant.sharepoint.com/sites/$hubUrlFragment"

$user = "alexander.pajer@integrations.at"

Connect-PnPOnline -Url $adminUrl 

# The designated hub
New-PnPSite -Type TeamSite -title "Learning" -alias "learning" -Description "Main site for learning"

# A site to be integrated

New-PnPSite -Type TeamSite -title "Sample TS" -alias "samplets" -Description "A site to be integrated in the hub"

Connect-SPOService -Url $adminUrl

Register-SPOHubSite -Site $hubSiteUrl

Set-SPOHubSite -Identity $hubSiteUrl -LogoUrl $hubSiteUrl"/SiteAssets/learning.png" -Description "Main site for learning"

Grant-SPOHubSiteRights -Identity $hubSiteUrl -Principals $user -Rights Join

Add-SPOHubSiteAssociation -Site https://$tenant.sharepoint.com/sites/samplets -HubSite https://$tenant.sharepoint.com/sites/$hubUrlFragment 


## Site Types: TeamSite | CommunicationSite