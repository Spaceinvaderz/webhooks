// Listen on port 8181
var port = 8181
var branch = 'master' 
var gith = require('gith').create( port );
// Import execFile, to run our bash script
var execFile = require('child_process').execFile;
console.log('Webhook process is running on port' + port);

gith({
	"repo": "Spaceinvaderz/webhooks"
}).on( 'all' , function( payload ) {
	if(payload.branch === branch)
	{
            // Exec a shell script
            //execFile(script, function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'exec complete' );
            //});
	}
console.log('err');
});

