import pkg from "mongoose";
const { Schema, model } = pkg;

const authorSchema = new Schema({
  title: String,
  slug: String,
  biography: String,
});

export default model("Author", authorSchema);
