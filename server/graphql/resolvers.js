import DataLoader from "dataloader";
import Author from "../models/authorModel.js";
import Book from "../models/bookModel.js";

// resolvers

export const books = async (args, req) => {
  const books = await Book.find();
  return books.map((book) => enrichBook(book));
};

export const authors = async (args, req) => {
  const authors = await Author.find();
  return authors.map((book) => enrichAuthor(book));
};

// populates links with documents

const enrichBook = (book) => ({
  ...book._doc,
  author: () => authorLoader.load(book.author),
});

const enrichAuthor = (author) => ({
  ...author._doc,
  books: () => bookLoader.loadMany(author.books.map((id) => id.toString())),
});

// batch loaders

const bookLoader = new DataLoader(async (ids) => {
  const books = await Book.find({ _id: { $in: ids } });
  books.sort(
    (a, b) => ids.indexOf(a._id.toString()) - ids.indexOf(b._id.toString())
  );
  return books.map(enrichBook);
});

const authorLoader = new DataLoader(async (ids) => {
  const authors = await Author.find({ _id: { $in: ids } });
  authors.sort(
    (a, b) => ids.indexOf(a._id.toString()) - ids.indexOf(b._id.toString())
  );
  return authors.map(enrichBook);
});
