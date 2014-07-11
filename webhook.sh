#!/bin/sh
cd /sites/concierge
#npm stop
git pull git@github.com:ConciergeStory/concierge.git
#npm install --production
bower install
npm install 
#npm start > /dev/null &
#service nginx restart

