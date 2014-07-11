#!/bin/sh
SITE_DIR =  "https://github.com/Spaceinvaderz/webhooks"
REPO = "https://github.com/Spaceinvaderz/webhooks"
POST_DEPLOY = ""
cd $SITE_DIR
git pull $REPO
bower install
npm install 
$POST_DEPLOY

