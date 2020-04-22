# RudimentaryLathe.org TiddlyWiki built via node.js

To run, cd into directory and...

`tiddlywiki ./ --listen`

This makes the wiki available and editable locally via https://127.0.0.1:8080.

Or better yet, use `forever`...

`forever start --spinSleepTime 10000 /usr/local/bin/tiddlywiki /Users/jbaty/pub/rudimentarylathe-node --listen`


I still publish it as a static HTML file using the `Makefile`...

`make deploy`

This ends up running the tiddlywiki command for generating the entire wiki to an index.html file...

`tiddlywiki --rendertiddler $$:/plugins/tiddlywiki/tiddlyweb/save/offline index.html text/plain`

Note that Makefiles escape the dollar sign by doubling it, hence the `$$/plugins...` thing.
