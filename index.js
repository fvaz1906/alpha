const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000)

app.get('/', function (req, res) {
    console.log('boraaaaaa')
    res.send('hook')
})

app.post('/hook/alpha', function (req, res) {
    
    console.log( req.body )

    // if(branch.indexOf('master') > -1 && sender.login === 'fvaz1906'){
    //     childProcess.exec('cd /var/www && ./deploy.sh', function(err, stdout, stderr){
    //         if (err) {
    //             console.error(err);
    //             return res.send(500);
    //         }
    //         res.send(200);
    //     });
    // }

})