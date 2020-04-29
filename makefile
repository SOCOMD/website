.PHONY: run
run:
	@docker run -p 9000:8080 socomd-website:latest;
	@echo "Website Available on: http://localhost:9000";
.PHONY: build
build: 
	docker build -f dockerfile -t socomd-website:latest .
.PHONY: run-website
run-website:
	@cd website; \
	npm run-script start;

run-backend:
	@set -e; cd website; \
	echo "Building Website"; \
	npm run-script build 1> /dev/null;
	@set -e; cd backend; \
	rm -rf ./content;
	cp -r ../website/build/ ./content/; \
	echo "Running Go Service"; \
	go run -v main.go; \
