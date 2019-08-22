const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const childProcess = require('child_process');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3001);

app.get('/', function (req, res) {
    res.redirect('https://www.infovaz.com')
})

app.post('/hook/alpha', function (req, res) {
    
    var repository = req.body.repository
    var branch = req.body.ref
    var sender = req.body.sender
    var app_name = repository.name

    if(branch.indexOf('master') > -1 && sender.login === 'fvaz1906'){
        childProcess.exec('cd /var/www/sistemas/' + app_name + ' && git pull && npm update');
        return res.status(200).send('OK');
    }

})
