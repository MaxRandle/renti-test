import { buildSchema } from "graphql";

const schema = buildSchema(`

    type Book {
        title_slug: String
        title: String
        author_slug: String
        overview: String
        synopsis: String
        author: Author
        subjects: String
    }

    type Author {
        title: String
        slug: String
        biography: String
        books: [Book!]!
    }

    type RootQuery {
        books(slug: String): [Book!]!
        authors(slug: String): [Author!]!
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
