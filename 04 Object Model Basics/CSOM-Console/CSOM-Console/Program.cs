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
            var user = "administrator@spdom.local";
            var pwd = "Pa$$w0rd";

            //Using Credential Cache
            using (var context = new ClientContext(url))
            {
                var credentials = CredentialCache.DefaultNetworkCredentials;
                context.Credentials = credentials;
                context.Load(context.Web, web => web.Title);
                context.ExecuteQuery();
                Console.WriteLine("Your site title is: " + context.Web.Title);
            }


            //Using Explicit Credential - taken from Console.ReadLine in Real World
            using (var context = new ClientContext(url))
            {
                context.Credentials = new SharePointOnlineCredentials(user, pwd.ToSecureString());
                context.Load(context.Web, web => web.Title);
                context.ExecuteQuery();
                Console.WriteLine("Your site title is: " + context.Web.Title);
            }

        }
    }
}
