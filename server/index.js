import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan'
import router from './router';
import graphqlHTTP from 'express-graphql';
import {makeExecutableSchema} from 'graphql-tools'
import graphql from 'graphql';
import path from 'path';
import fs from 'fs';

console.log('#[Uploaind the env file.]');

const PORT = 3500;
const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
console.log('#[Setting the body parser is done.]');

app.use('/api', router);

app.get('/get', (req, res) => res.send({
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

const typeDefs = `
  type geo{
    lat:Float,
    lng:Float
  }
  type company{
    name:String
    catchPhrase:String
    bs:String
  }
  type address{
    street:String
    suite:String
    city:String
    zipcode:String
    geo:geo
  }
  type user{
    id:Int
    name:String
    username:String
    email:String
    address:address
    phone:String
    website:String
    company:company
  }
  type Query{
    user(id:Int!, name: String!):user
    allUser:[user]
  }
`;
const resolvers = {
  Query: {
    user(_, { id, name }) {


      console.log('asldkfjalksdjflakjsdf')
      console.log(`${_}`)
      console.log('1234132412341234')
      console.log(`${id}`)
      console.log('zxcvzxcvzxcvzxcv')
      console.log(`${name}`)

      return {
        name: 'a'
      }
    },
    allUser() {
      return [{
        name: 'a'
      }];
    }
  }
};

const schema = makeExecutableSchema({ //typeDefs와 resolvers를 결합해서 하나의 스키마로 만들어 줍니다. 이때 중복되는 Type의 경우에는 한번만 실행됩니다.
  typeDefs,
  resolvers
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const server = app.listen(PORT, () =>
    console.log(`-- HTTP Server running on ${PORT}`)
);