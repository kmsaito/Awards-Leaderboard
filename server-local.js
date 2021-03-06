var https = require('https');
var selfSigned = require('openssl-self-signed-certificate');

var app = require('./server');
app.enable('trust proxy');

var httpsPort = process.env.HTTPS_PORT || 3434;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // Required for self signing cert.
var options = {
    key: selfSigned.key,
    cert: selfSigned.cert
};

https.createServer(options, app).listen(httpsPort);
console.log(`HTTPS started on port ${httpsPort}`);