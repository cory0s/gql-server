// import dependencies
require('dotenv');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const app = express();

// imports
const PORT = process.env.PORT || 4000;
const schema = require('./schema/schema.js');

// connect to mongoDB instance
mongoose.connect('mongodb+srv://cory:12345@cluster0-2ljdf.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,    
}));


// start server
app.listen(PORT, () =>
    console.log(`Server running on ${PORT}`)
);