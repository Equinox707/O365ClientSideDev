using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint.Client;

namespace CSOM_Console
{
    class Program
    {
        static void Main(string[] args)
        {
            var url = "http://sp2016/";
            var spourl = "https://integrationsonline.sharepoint.com/sites/training";
            var user = "alexander.pajer@integrations.at";
            
            var pwd = SecureStringExtensions.GetConsolePassword();
                        

            //Using Credential Cache - use for SP2013, SP2016
            using (var context = new ClientContext(url))
            {
                var credentials = CredentialCache.DefaultNetworkCredentials;
                context.Credentials = credentials;
                context.Load(context.Web, web => web.Title);
                context.ExecuteQuery();
                Console.WriteLine("Your site title is: " + context.Web.Title);
            }


            //Using Explicit Credential - use for SPO
            using (var context = new ClientContext(spourl))
            {
                context.Credentials = new SharePointOnlineCredentials(user, pwd.ToSecureString());
                context.Load(context.Web, web => web.Title);
                context.ExecuteQuery();
                Console.WriteLine("Your site title is: " + context.Web.Title);
            }

        }
    }
}
