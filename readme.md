Simple angular2 + babel es6 + webpack starter

To run you need to have installed globally:
npm install -g webpack lite-server

Then hit:
npm install

Then:
webpack-dev-server -d --content-base dev/

TODO:
- make task that copy index.html from src to dev
- attach this task into npm run develop
- attach less or sass style compiler
- figure out html templates in angular2
- make build task that minifies js, html etc
- configure unit tests
- configure e2e tests