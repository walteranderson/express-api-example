# Express API Example

This is an example application using ExpressJS and MongoDB. It also includes boilerplate for user authentication and authorization using JWT.

## Development

```
$ npm install
$ cp env.example .env # fill out the missing environment variables
$ mongod # start mongoDB in a separate process
$ npm start
```

## Production

```
$ mongod
$ npm run build
$ npm run prod
```
