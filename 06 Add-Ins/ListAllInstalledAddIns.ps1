Add-PsSnapin Microsoft.SharePoint.PowerShell
Clear-Host
$webApp = Get-SPWebApplication "http://sp2016"
foreach($site in $webApp.Sites)
{
    Write-Host $web.Url -BackgroundColor DarkGreen
    foreach($web in $site.AllWebs)
    {
        $appInstance = Get-SPAppInstance -Web $web.Url | select Title,Appwebfullurl,Id
        if($appInstance -ne $null)
        {     
	   $appInfo = $appInstance.Title + " - " + $appInstance.Appwebfullurl     
           Write-Host $appInfo
        }
    }
}