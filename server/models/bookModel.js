import pkg from "mongoose";
const { Schema, model } = pkg;

const bookSchema = new Schema({
  title: String,
  author_slug: String,
  overview: String,
  synopsis: String,
});

export default model("Book", bookSchema);
