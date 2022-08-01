build-dev:
	@ docker build -f devops/Dockerfile -t academy-back:latest .

deploy:
	@ docker stack deploy -c devops/stack.yml academy-api
rm:
	@ docker stack rm academy-api
volume:
	@ docker volume create academy_data