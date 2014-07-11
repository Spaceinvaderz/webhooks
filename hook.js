// Listen on port 8181
var gith = require('gith').create(8181);
// Import execFile, to run our bash script
var execFile = require('child_process').execFile;
console.log('Running');
gith({
	repo: 'ConciergeStory/concierge'
}).on('all', function(payload) {
	console.log('before if');
	if(payload.branch === 'master')
	{
            // Exec a shell script
            execFile('./test.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'exec complete' );
            });
	}
console.log('err');
});

