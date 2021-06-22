# server test

## rebuild image and container

`docker container rm rentinodecon -f`

`docker image rm rentinodeimg`

`docker build -t rentinodeimg .`

`docker run -d -p 5000:5000 --name rentinodecon rentinodeimg:latest`

## ssh into container

`docker exec -it rentinodecon bash`

## view container logs

`docker logs rentinodecon`
