import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan'
import router from './router';

import path from 'path';
import fs from 'fs';

console.log('#[Uploaind the env file.]');

const PORT = 3500;
const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
console.log('#[Setting the body parser is done.]');

app.use('/api', router);
app.get('/test/api', (req, res) => res.send({
  result: 'd'
}))
console.log('#[Uploading the router for the API.]');

// app.use('/', express.static(__dirname + '/../../client/build'));
console.log('#[Setting the static files is done.]');

// page router
let indexPage = "";
let nextPage = "";
  
// fs.readFile(path.resolve(__dirname, '../../client/build/index.html'), 'utf8', function(err, data){
//     indexPage = data;
// });

// fs.readFile(path.resolve(__dirname, '../../next/build/index.html'), 'utf8', function(err, data){
//   nextPage = data;
// });

// app.get('/', (req, res) => res.end(indexPage))
// app.get('/nextPage', (req, res) => res.end(nextPage))

console.log('laskjdflkajsdf')
const server = app.listen(PORT, () =>
    console.log(`-- HTTP Server running on ${PORT}`)
);