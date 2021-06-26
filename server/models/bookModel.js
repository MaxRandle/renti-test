import pkg from "mongoose";
const { Schema, model } = pkg;

const bookSchema = new Schema({
  title_slug: String,
  title: String,
  author_slug: String,
  overview: String,
  synopsis: String,
  subjects: String,
});

export default model("Book", bookSchema);
