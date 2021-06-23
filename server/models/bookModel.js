import pkg from "mongoose";
const { Schema, model } = pkg;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author_id: String,
  overview: String,
  synopsis: String,
});

export default model("Book", bookSchema);
