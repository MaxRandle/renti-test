# compose test

## rebuild network

`docker-compose down`

`docker-compose up -d --build`

## import data into database

`docker exec renti-test_mongo_1 "mongoimport --type csv -d docker-node-mongo -c books --headerline --drop data/import/book.csv"`

`docker exec renti-test_mongo_1 "mongoimport --type csv -d docker-node-mongo -c authors --headerline --drop data/import/author.csv"`

## ssh into containers

`docker exec -it renti-test_node_1 bash`

`docker exec -it renti-test_mongo_1 bash`
