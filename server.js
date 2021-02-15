let express = require('express')
const { graphqlHTTP } = require('express-graphql');
let {buildSchema} = require('graphql')

let schema = buildSchema(`
    type Query {
        message: String
    },
`)

let root = {
    message: ()=> 'Hello world'
}

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, ()=> {
    console.log('Listening on localhost:4000/graphql')
})
