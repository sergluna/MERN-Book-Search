const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        users: [User]
        user(username: String!): User
        me: User
    }

    type Mutation {
        login(email String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SavedBookInput): User
        removeBook(bookId: String!): User
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Book {
        _id: ID
        authors: String
        description: String
        title: String
        image: String
        link: string
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;