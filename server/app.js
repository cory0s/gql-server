require('dotenv');
const PORT = process.env.PORT || 3000;
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,    
}));

app.listen(PORT, () =>
    console.log(`Server running on ${PORT}`)
);