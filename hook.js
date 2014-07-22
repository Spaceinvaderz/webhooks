var mysecret = 'myhashsecret';
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

//console.log('Hook server started at port %s', port);
//console.log('Press CTRL+C to close sever');

handler.on('error', function (err) {
//    console.err('Error:', err.message);
});

handler.on('release', function (event) {
//    console.log('Received a push event for %s to %s',
//        event.payload.repository.name,
//       event.payload.ref);
    console.log (event.payload);
        // Exec a shell script
        execFile(script, function(error, stdout, stderr) {
        // Log success in some manner
//        console.log( 'exec complete' );
        
     
     });
    
});

//handler.on('issues', function (event) {
//    console.log('Received an issue event for % action=%s: #%d %s',
//    event.payload.repository.name,
//    event.payload.action,
//    event.payload.issue.number,
//    event.payload.issue.title);
//});
//
