const express = require('express')
const app = express()

app.listen(3000)

app.get('/', function (req, res) {
    console.log('tes')
    res.send('hook')
})

app.post('/hook/alpha', function (req, res) {
    
    // var sender = req.body.sender;
    // var branch = req.body.ref;

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