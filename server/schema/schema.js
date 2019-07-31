const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data
let dumbData = [
    { name: '1Q84', genre: 'Fantasy', id: '1' },
    { name: 'Jungle Book', genre: 'Classic', id: '2' },
    { name: 'Eragon', genre: 'Fantasy', id: '3' }
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLString}, },
            resolve(parent, args){
                //code to get data from DB
                return _.find(dumbData, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
