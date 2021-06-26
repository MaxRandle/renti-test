import { buildSchema } from "graphql";

const schema = buildSchema(`

    type Book {
        title: String
        author_slug: String
        overview: String
        synopsis: String
        author: Author
    }

    type Author {
        title: String
        slug: String
        biography: String
        books: [Book!]!
    }

    type RootQuery {
        books(ids: [String!]): [Book!]!
        authors(ids: [String!]): [Author!]!
        test: Author!
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
