var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(
    '441434217863-rfauhp4qgkhrpikfmv0fp51ac333eul8.apps.googleusercontent.com',
    'GbCbMAVvQWthHWP9OZkIkvJ8',
    'https://sandboxnz.appxysplatform.com/prod1/designer/pageEdit.jsp?view=main&pageId=364389394'
);

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
    'https://www.googleapis.com/auth/drive.metadata.readonly'
];

exports.getUrl = function() {
    var url = oauth2Client.generateAuthUrl({
        scope: scopes
    });
    console.log(url);
}