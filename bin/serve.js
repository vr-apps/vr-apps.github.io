const SSL_PRIVKEY_PATH = process.env.SSL_PRIVKEY_PATH || '/home/enovikov11/local-ssl/privkey.pem',
    SSL_FULLCHAIN_PATH = process.env.SSL_FULLCHAIN_PATH || '/home/enovikov11/local-ssl/fullchain.pem',
    HTTPS_DOMAIN = process.env.HTTPS_DOMAIN || 'local.enovikov11.ru',

    express = require('express'), https = require('https'), fs = require('fs'), path = require('path'),

    app = express(), server = https.createServer({
        key: fs.readFileSync(SSL_PRIVKEY_PATH, 'utf-8'),
        cert: fs.readFileSync(SSL_FULLCHAIN_PATH, 'utf-8')
    }, app);

app.use('/vr-apps-catalog', express.static(path.join(__dirname, '../../vr-apps-catalog')));
app.use('/three.js', express.static(path.join(__dirname, '../../three.js')));
app.use('/', express.static(path.join(__dirname, '../build')));

server.listen(443);
console.log(`Listening https://${HTTPS_DOMAIN}`);
