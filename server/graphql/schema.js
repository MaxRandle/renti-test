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
        title: String!
        bigraphy: String!
        books: [Book!]!
    }

    type RootQuery {
        books(ids: [String!]): [Book!]!
        authors(ids: [String!]): [Author!]!
    }

    type RootMutation {
        createBook: Book!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }

`);

export default schema;
