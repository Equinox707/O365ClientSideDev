$(function () {

    var config = {
        instance: 'https://login.microsoftonline.com/',
        tenant: 'integrationsonline.onmicrosoft.com',
        clientId: '4e60c128-a813-4031-bd99-cf4327cce885',
        postLogoutRedirectUri: window.location.origin,
        endpoints:{
            'graph': 'https://graph.microsoft.com'
        },
        cacheLocation: 'localStorage' 
    }
    var authContext = new AuthenticationContext(config);

    $("#signInLink").click(function () {
        authContext.login();
    });
    $("#signOutLink").click(function () {
        authContext.logOut();
    });

    //save tokens if this is a return from AAD
    authContext.handleWindowCallback();

    var user = authContext.getCachedUser();
    if (user) {  

        $("#loginMessage").text("Welcome, " + user.userName);
        $("#signInLink").hide();
        $("#signOutLink").show();

        authContext.acquireToken(config.endpoints.graph, function (error, token) {

            if (error || !token) {
                $("#status").text('ADAL Error Occurred: ' + error);
                return;
            }

            var qry = 'https://graph.microsoft.com/v1.0/me/events';
            $.ajax({
                type: 'GET',
                url: qry,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).done(function (data) {
                $("#status").append('Query successful - see console for result');
                console.log(data);
            }).fail(function (err) {
                $("#status").append('Error calling REST endpoint: ' + err.statusText);
            }).always(function () {
            });
        });
    }
    //error logging in
    else if (authContext.getLoginError()) { 
        $("#signInLink").show();
        $("#signOutLink").hide();
        $("#loginMessage").text(authContext.getLoginError());
    }
    //not logged in
    else {                                                                      
        $("#signInLink").show();
        $("#signOutLink").hide();
        $("#loginMessage").text("You are not logged in.");
    }
});