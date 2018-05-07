using MVCAppGraph.Helpers;
using System;
using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System.Net.Http;
using System.Net;
using Newtonsoft.Json.Linq;

namespace MVCAppGraph.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public async Task<ActionResult> SignIn()
        {
            var authContext = new AuthenticationContext(SettingsHelper.AzureADAuthority);

            // The url in our app that Azure should redirect to after successful signin
            Uri redirectUri = new Uri(Url.Action("Authorize", "Home", null, Request.Url.Scheme));

            // Generate the parameterized URL for Azure signin
            Uri authUri = await authContext.GetAuthorizationRequestUrlAsync(SettingsHelper.MicrosoftGraphResource, SettingsHelper.ClientId, redirectUri, UserIdentifier.AnyUser, null);

            // Redirect the browser to the Azure signin page
            return Redirect(authUri.ToString());
        }

        public async Task<ActionResult> Authorize()
        {
            string authCode = Request.Params["code"];

            AuthenticationContext authContext = new AuthenticationContext(SettingsHelper.AzureADAuthority);

            Uri redirectUri = new Uri(Url.Action("Authorize", "Home", null, Request.Url.Scheme));

            // Use client ID and secret to establish app identity
            ClientCredential credential = new ClientCredential(SettingsHelper.ClientId, SettingsHelper.ClientSecret);

            try
            {
                //Get the token
                var authResult = await authContext.AcquireTokenByAuthorizationCodeAsync(authCode, redirectUri, credential, SettingsHelper.MicrosoftGraphResource);

                // Save the token in the session
                Session["access_token"] = authResult.AccessToken;

                return Redirect(Url.Action("Inbox", "Home", null, Request.Url.Scheme));
            }
            catch (AdalException ex)
            {
                return Content(string.Format("ERROR retrieving token: {0}", ex.Message));
            }
        }

        public async Task<ActionResult> Inbox()
        {
            string token = (string)Session["access_token"];
            if (string.IsNullOrEmpty(token))
            {
                ViewBag.Message = "Please Login";

                return Content("Test");
            }

            try
            {
                
                using (var client = new HttpClient())
                {
                    using (var request = new HttpRequestMessage(HttpMethod.Get, SettingsHelper.MicrosoftGraphResource + "v1.0/me/messages"))
                    {
                        request.Headers.Add("Authorization", "Bearer " + token);
                        request.Headers.Add("Accept", "application/json;odata.metadata=minimal");

                        using (var response = client.SendAsync(request).Result)
                        {
                            if (response.StatusCode == HttpStatusCode.OK)
                            {
                                var json = JObject.Parse(response.Content.ReadAsStringAsync().Result);

                                JArray messages = (JArray)json["value"];

                                var msgHtml = "<table><tr><th>Subject</th><th>From</th></tr>";
                                foreach (var message in messages)
                                {
                                    if (message["from"]==null)
                                    {
                                        msgHtml += "<tr><td>" + message["subject"] + "</td><td>&nbsp;</td></tr>";
                                    }
                                    else
                                    {
                                        msgHtml += "<tr><td>" + message["subject"] + "</td><td>" + message["from"]["emailAddress"]["name"] + "</td></tr>";
                                    }
                                }

                                msgHtml += "</table>";
                                ViewBag.JsonResponse = msgHtml;

                                
                            }
                        }
                    }
                }
                return View();
            }
            catch(AdalException ex)
            {
                return Content(string.Format("ERROR retrieving messages: {0}", ex.Message));
            }
        }
    }
}