//Install express server
const express = require('express');
const path = require('path'); 
var enforce = require('express-sslify');

const app = express();

// Heroku automagically gives us SSL
// Lets write some middleware to redirect us
// let env = process.env.NODE_ENV || 'development';

// let forceSSL = (req, res, next) => {
//   if (req.headers['x-forwarded-proto'] !== 'https') {
//     return res.redirect(['https://', req.get('Host'), req.url].join(''));
//   }
//   return next();
// };

// if (env === 'production') {
//   app.use(forceSSL);
// }
 app.use(enforce.HTTPS({ trustProtoHeader: true }));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/linkedinlocaldakar'));

app.get('/*', function(req,res) {
    
    
res.sendFile(path.join(__dirname+'/dist/linkedinlocaldakar/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);