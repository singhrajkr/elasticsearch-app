const app = require('express')(),
port = process.env.PORT || 7777,
morgan = require('morgan'),
bodyParser = require('body-parser')
// Override any environment variables that have already been set on your machine with values from your .env file.
require('dotenv').config({ override: true, debug: true });    
process.env['NODE_ENV'] = 'QA_HQ';    
console.log(process.argv[2]);
// const mysql = require('./app/mysql');

app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Set Node Style Routes
var router = require('./app/routes');
//OR app.use(require('./app/routes'));
app.use(router);


//Start The Server
app.listen(port,function(){
    console.log(`App is Listening on http://localhost:${port}`);
})