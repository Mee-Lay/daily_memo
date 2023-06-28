help:
	@echo "make [command]"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-30s\033[0m %s\n", $$1, $$2}'

s: ## npm start
	npm start

i: ## npm install
	npm install

lang: ## output lang
	python3 lang_reader.py