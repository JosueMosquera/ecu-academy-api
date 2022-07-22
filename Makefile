build-dev:
	@ docker build -f devops/Dockerfile -t back-academy:latest .

deploy:
	@ docker stack deploy -c devops/stack.yml academy-api
rm:
	@ docker stack rm academy-api