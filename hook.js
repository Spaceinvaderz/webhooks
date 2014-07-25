var mysecret = 'hooking999hooks';
var port = 8181;
var http = require('http');
var script = './deploy.sh';
var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/webhook', secret: mysecret });
var execFile = require('child_process').execFile;

http.createServer(function (req, res) {
    handler(req, res, function (err){ 
      res.statusCode = 404;
      res.end('no such location');
    });

}).listen(port);

console.log('Hook server started at port %s', port);
console.log('Press CTRL+C to close sever');

handler.on('error', function (err) {
    console.error('Error:', err.message);
});


var domagic = function (script){
    execFile(script, function(error, stdout, stderr) {
            if (stderr){
                console.error( stderr );
            }
            else{
                // Log success in some manner
                console.log( stdout );
                console.log( 'Deploy script exec complete' );
            }
    });
}

handler.on('release', function (event) {
    console.log('Received release event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
        
        if (event.payload.action == 'published'){

            // Exec a shell script
            domagic(script);
            console.log ('Deploy sequence finished')
        }
});
