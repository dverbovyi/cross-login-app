# cross-login-app
Test Login app using third-party API (Facebook) and buit-in Loopback User Model

*Technologies used: Loopback NodeJS Framework, Angular 2, TypeScript, Webpack*



## Setup

### Server
**install deps**
***in root folder run:***

	npm i
  
**start server**

	npm start
  
API available on [http://localhost:8080/explorer]()

### Client
	cd client

**install deps**

	npm i
	
**To build client sources run**

	npm run build:dev
	//or
	npm run build:prod
	
**To start webpack dev-server with livereload configuration**

    npm start

or

    npm run devserver

The application is available on [http://localhost:4000]().	

If you want to start without livereload detection you can run app in `watch` mode with specified configuration:

    npm run watch:dev
    //or
    npm run watch:prod

The app is available on server host [http://localhost:8080]().
