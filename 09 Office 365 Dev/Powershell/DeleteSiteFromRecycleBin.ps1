$orgName="integrationseu";
$site = "http://integrationseu-public.sharepoint.com";

Connect-SPOService -Url https://$orgName-admin.sharepoint.com;
Remove-SPODeletedSite -Identity $site -Confirm:$false
