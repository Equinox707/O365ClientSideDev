using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace MVCAppGraph.Helpers
{
    public class SettingsHelper
    {
        public static string ClientId
        {
            get { return ConfigurationManager.AppSettings["ida:ClientID"]; }
        }

        public static string ClientSecret
        {
            get { return ConfigurationManager.AppSettings["ida:ClientSecret"]; }
        }

        public static string AzureADAuthority
        {
            get { return "https://login.microsoftonline.com/common"; }
        }

        public static string MicrosoftGraphResource
        {
            get { return "https://graph.microsoft.com/"; }
        }
    }
}