const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const childProcess = require('child_process');

const fs = require('fs')
const https = require('https')

const privateKey  = fs.readFileSync('/etc/ssl/private/key.pem', 'utf8');
const certificate = fs.readFileSync('/etc/ssl/certs/cert.pem', 'utf8');

const credentials = {key: privateKey, cert: certificate};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(3000);

app.get('/', function (req, res) {
    res.send('.... OK ....')
})

app.post('/hook/alpha', function (req, res) {
    
    var repository = req.body.repository
    var branch = req.body.ref
    var sender = req.body.sender
    var app_name = repository.name

    if(branch.indexOf('master') > -1 && sender.login === 'fvaz1906'){
        childProcess.exec('cd /var/www/sistemas/' + app_name + ' && git pull && npm update', function(err, stdout, stderr) {
            if (err) {
                console.error(err)
                return res.sendStatus(500)
            }
            return res.sendStatus(200)
        })
    }

})