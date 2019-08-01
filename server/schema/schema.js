//import graphql package
const graphql = require('graphql');
const _ = require('lodash');

//Grab GraphQL Objects
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID, GraphQLList } = graphql;

//dummy data
let dumbBooks = [
    { name: '1Q84', genre: 'Fantasy', id: '1', authorId: '1' },
    { name: 'Jungle Book', genre: 'Classic', id: '2', authorId: '2' },
    { name: 'Eragon', genre: 'Fantasy', id: '3', authorId: '3' },
    { name: 'Birds', genre: 'Fantasy', id: '3', authorId: '1' }
]

let dumbAuthors = [
    { name: 'Murakami', age: 44, id: '1' },
    { name: 'Hemingway', age: 75, id: '2' },
    { name: 'Steinbeck', age: 85, id: '3' }
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: { 
            type: AuthorType, 
            resolve(parent, args){
                return _.find(dumbAuthors, { id: parent.authorId })
            },
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return _.filter(dumbBooks, { authorId: parent.id })
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLID}, },
            resolve(parent, args){
                //code to get data from DB
                return _.find(dumbBooks, { id: args.id });
            }
        },
        author: {
            type: AuthorType,
            args: { id: {type: GraphQLID}, },
            resolve(parent, args){
                return _.find(dumbAuthors, { id: args.id });
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return dumbBooks;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            args(parent, args){
                return dumbAuthors;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
