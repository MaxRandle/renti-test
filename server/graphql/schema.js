import { buildSchema } from "graphql";

const schema = buildSchema(`

    type Book {
        _id: ID!
        title: String!
        overview: String
        synopsis: String
        author: Author!
    }

    type Author {
        _id: ID!
        name: String!
        bigraphy: String!
        books: [Book!]!
    }

    type RootQuery {
        books: [Book!]!
        authors: [Author!]!
    }

    type RootMutation 

    schema {
        query: RootQuery
        mutation: RootMutation
    }

`);

export default schema;
