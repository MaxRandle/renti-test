# setup

`docker-compose up -d --build`

`docker exec renti-test_mongo_1 "mongoimport --type csv -d docker-node-mongo -c books --headerline --drop data/import/book.csv"`

`docker exec renti-test_mongo_1 "mongoimport --type csv -d docker-node-mongo -c authors --headerline --drop data/import/author.csv"`

# testing

## rebuild network

`docker-compose down`

`docker-compose up -d --build`

## import data into database

`docker exec renti-test_mongo_1 "mongoimport --type csv -d docker-node-mongo -c books --headerline --drop data/import/book.csv"`

`docker exec renti-test_mongo_1 "mongoimport --type csv -d docker-node-mongo -c authors --headerline --drop data/import/author.csv"`

## ssh into containers

`docker exec -it renti-test_node_1 bash`

`docker exec -it renti-test_mongo_1 bash`

## test FE

`docker build -t rentifeimg .`

`docker run -d -p 3000:80 --name rentifecon rentifeimg:latest`
