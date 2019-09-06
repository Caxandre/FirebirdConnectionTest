
## About the project

Simple backend application created with Node JS, Express and database Firebird. Lets you test the firebird connection in versions 2.5 and 3.0.

## Installation

The following steps will help install and run FirebirdConnectionTest on your local computer. Make sure database instances are active:

1. git clone https://github.com/Caxandre/FirebirdConnectionTest

2. Install all project dependencies with npm install or yarn install

3. Start the development server with npm dev or yarn dev.

## How it works

Send a POST request to one of the two routes, each of one corresponding to a different connector.

POST Example -> http://localhost:3333/firebirdDriver or http://localhost:3333/firebird

Windows host: example path to firebird file	-> "database": C:/firebird/DB/exemple.fdb"...
Linux host: example path to firebird file -> "database": "/opt/firebird/DB/exemple.fdb"

JSON Example ->

```json
{ 
  "database": { 
    "host": "127.0.0.1", 
	  "database": "C:/firebird/DB/exemple.fdb", 
	  "user": "FIREBIRD_USER", 
	  "password": "FIREBIRD_PASS", 
	}, 
	"queryDB": "select * from FIREBIRD_TABLE", 
	"params": ["Connection Test"] 
}
```
## Packages

Express - [https://github.com/expressjs/express]

Firebird - [https://github.com/xdenser/node-firebird-libfbclient]

Node-Firebird-Drivers - [https://github.com/asfernandes/node-firebird-drivers]

## Contact

Carlos Perrout - [Github](https://github.com/Caxandre) - **carlosperrout@gmail.com.br**