//https://developer.microsoft.com/en-us/graph/docs/overview/overview
var authContext = null;
var config = null;

$(document).ready(function () {
    // Assign variables
    var params = {
        // Domain of Azure AD tenant
        azureAD: "integrations.at",
        // ClientId of Azure AD application principal
        clientId: "4e60c128-a813-4031-bd99-cf4327cce885",
        // Name of SharePoint tenant
        sharePointTenant: "integrationsonline",
        // Endpoints you like to call
        endPoints: {
            graphApiUri: "https://graph.microsoft.com",
            sharePointUri: "https://integrationsonline.sharepoint.com"
        }
    }

    // Create config and get AuthenticationContext
    config = {
        tenant: params.azureAD,
        clientId: params.clientId,
        postLogoutRedirectUri: window.location.origin,
        endpoints: params.endPoints,
        cacheLocation: "localStorage"
    };

    authContext = new AuthenticationContext(config);

    var isCallback = authContext.isCallback(window.location.hash);
    authContext.handleWindowCallback();

    if (isCallback && !authContext.getLoginError()) {
        window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
    }

    var user = authContext.getCachedUser();
    if (!user) {
        authContext.login();
    }
});

function signOut() {
    authContext.logOut();
    window.location.href = "http://localhost:5000";
}

function readFromGraph() {
    if (authContext != null) {
        $("#pResult").show();
        // OneDrive
        authContext.acquireToken(config.endpoints.graphApiUri, function (error, token) {
            if (error || !token) {
                console.log("ADAL error occurred: " + error);
                return;
            }
            else {
                var uri = config.endpoints.graphApiUri + "/v1.0/me/drive/recent";

                $.ajax({
                    type: "GET",
                    url: uri,
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }).done(function (response) {
                    var items = response.value.slice(0, 9);
                    console.log("Successfully fetched Recent Top Ten Documents:");
                    console.log(items);
                    $("#OneDrive").empty();
                    items.forEach(function (item) {
                        $("#OneDrive").append("<li>" + moment(item.remoteItem.lastModifiedDateTime).format("MMM Do YY") + ", " + item.remoteItem.name + "</li>");
                    });
                }).fail(function () {
                    console.log("Fetching files from OneDrive failed.");
                });
            }
        });
        // Events
        authContext.acquireToken(config.endpoints.graphApiUri, function (error, token) {
            if (error || !token) {
                console.log("ADAL error occurred: " + error);
                return;
            }
            else {
                var uri = config.endpoints.graphApiUri + "/v1.0/me/calendar/events";

                $.ajax({
                    type: "GET",
                    url: uri,
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }).done(function (response) {
                    var items = response.value;
                    console.log("Successfully fetched Events:");
                    console.log(items);
                    $("#Events").empty();
                    items.forEach(function (item) {
                        $("#Events").append("<li>" + moment(item.start.dateTime).format("MMM Do YY") + ", " + item.subject + "</li>");
                    });
                }).fail(function (err) {
                    console.log("Fetching files from OneDrive failed.");
                    console.log(err);
                });
            }
        });
        // Contacts
        authContext.acquireToken(config.endpoints.graphApiUri, function (error, token) {
            if (error || !token) {
                console.log("ADAL error occurred: " + error);
                return;
            }
            else {
                var uri = config.endpoints.graphApiUri + "/v1.0/me/contacts";

                $.ajax({
                    type: "GET",
                    url: uri,
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }).done(function (response) {
                    var items = response.value;
                    console.log("Successfully fetched Contacts:");
                    console.log(items);
                    $("#Contacts").empty();
                    items.forEach(function (item) {
                        $("#Contacts").append("<li>" + item.displayName + "</li>");
                    });
                }).fail(function (err) {
                    console.log("Fetching Contacts failed.");
                    console.log(err);
                });
            }
        });
        // SharePoint
        authContext.acquireToken(config.endpoints.sharePointUri, function (error, token) {
            if (error || !token) {
                console.log("ADAL error occurred: " + error);
                return;
            }
            else {
                var uri = config.endpoints.sharePointUri + "/_api/web/lists";
                $.ajax({
                    type: "GET",
                    url: uri,
                    headers: {
                        "Authorization": "Bearer " + token,
                        "accept": "application/json;odata=verbose"
                    }
                }).done(function (response) {
                    console.log("Successfully fetched list from SharePoint.");
                    var items = response.d.results;
                    $("#SharePoint").empty();
                    for (var i = 0; i < items.length; i++) {
                        console.log(items[i].Title);
                        $("#SharePoint").append("<li>" + items[i].Title + "</li>");
                    }
                }).fail(function (err) {
                    console.log("Fetching files from SharePoint failed.");
                    console.log(err);
                });
            }
        });
    }
}

function creatEvent() {
    $("#pResult").empty();
    if (authContext != null) {
        $("#pResult").show();
        authContext.acquireToken(config.endpoints.graphApiUri,
            function(error, token) {
                if (error || !token) {
                    console.log("ADAL error occurred: " + error);
                    return;
                } else {

                    var uri = config.endpoints.graphApiUri + "/v1.0/me/calendar/events";
                    var dt = new Date();
                    var evt = {
                        "Subject": "A Graph Event",
                        "Body": {
                            "ContentType": "HTML",
                            "Content": "I think it will meet our requirements!"
                        },
                        "Start": {
                            "DateTime": "2017-10-13T00:00:00",
                            "TimeZone": "UTC"
                        },
                        "End": {
                            "DateTime": "2017-10-13T01:00:00",
                            "TimeZone": "UTC"
                        }
                    }

                    $.ajax({
                        type: "POST",
                        data: JSON.stringify(evt),
                        url: uri,
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": "Bearer " + token
                        }
                    }).done(function(response) {
                        console.log("sucess creating event");
                        console.log(response);
                    }).fail(function(err) {
                        console.log("faild creating event");
                        console.log(err);
                    });
                }
            });
    }
}
