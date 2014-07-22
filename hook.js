var mysecret = 'hooking999hooks';
var port = 8181;
var http = require('http');
var script = './test.sh';
var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/webhook', secret: mysecret });
var execFile = require('child_process').execFile;

http.createServer(function (req, res) {
    handler(req, res, function (err){ 
      res.statusCode = 404;
      res.end('no such location');
    });

}).listen(port);

console.log('Hookers! Hookers! Hookers! Hook server started at port %s', port);
console.log('Press CTRL+C to close sever');

handler.on('error', function (err) {
    console.err('Error:', err.message);
});


var domagic = function (script){
    execFile(script, function(error, stdout, stderr) {
            if (stderr){
                console.error( stderr );
            }
            else{
                // Log success in some manner
                console.log( 'exec complete' );
                console.log( stdout );
            }
    });
}



handler.on('pull_request', function (event) {
    console.log('Received a pull_request event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
        console.log (event.payload);
        
        // Exec a shell script
        domagic(script);
});   


handler.on('deployment', function (event) {
    console.log('Received deployment event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
        console.log (event.payload);

        
        // Exec a shell script
        domagic(script);
    
});


handler.on('release', function (event) {
    console.log('Received release event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
        console.log (event.payload);

        
        // Exec a shell script
        domagic(script);
    
});




//handler.on('issues', function (event) {
//    console.log('Received an issue event for % action=%s: #%d %s',
//    event.payload.repository.name,
//    event.payload.action,
//    event.payload.issue.number,
//    event.payload.issue.title);
//});
