import DataLoader from "dataloader";
import Author from "../models/authorModel.js";
import Book from "../models/bookModel.js";

// resolvers

export const books = async (args, req) => {
  const { slug } = args;
  if (slug) {
    const books = await Book.find({ title_slug: slug });
    return books.map((book) => enrichBook(book));
  } else {
    const books = await Book.find();
    return books.map((book) => enrichBook(book));
  }
};

export const authors = async (args, req) => {
  const { slug } = args;
  if (slug) {
    const authors = await Author.find({ slug: slug });
    return authors.map((author) => enrichAuthor(author));
  } else {
    const authors = await Author.find();
    return authors.map((author) => enrichAuthor(author));
  }
};

// populates links with documents

const enrichBook = (book) => ({
  ...book._doc,
  author: () => findAuthorByBook(book),
});

const enrichAuthor = (author) => ({
  ...author._doc,
  books: () => findBooksByAuthor(author),
});

// loaders

const findAuthorByBook = async (book) => {
  console.log(book.author_slug);
  const author = await Author.findOne({ slug: book.author_slug });
  return author && enrichAuthor(author);
};

const findBooksByAuthor = async (author) => {
  console.log(author.slug);
  const books = await Book.find({ author_slug: author.slug });
  return books.map(enrichBook);
};
