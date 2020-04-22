PUBLIC_DIR=output/
SERVER_HOST=server.baty.net
SERVER_DIR=/home/jbaty/apps/rudimentarylathe/public_html
TARGET=AWS



deploy: build
	@echo "\033[0;32mDeploying updates to $(TARGET)...\033[0m"
	rsync -v -rz --checksum --delete --no-perms ~/pub/rudimentarylathe-node/files $(SERVER_HOST):$(SERVER_DIR)
	rsync -v -rz --checksum --delete --no-perms ~/pub/rudimentarylathe-node/output/index.html $(SERVER_HOST):$(SERVER_DIR)


build: clean
	@echo "\033[0;32mBuilding site...\033[0m"
	tiddlywiki --rendertiddler $$:/plugins/tiddlywiki/tiddlyweb/save/offline index.html text/plain

commit:
	@echo "\033[0;32mAdding changes\033[0m"
	git add -A
	git commit -m "Build site `date`"

push:
	@echo "\033[0;32mPushing repo\033[0m"
	git push origin master

clean:
	rm -rf $(PUBLIC_DIR)

.FORCE:

