import pkg from "mongoose";
const { Schema, model } = pkg;

const authorSchema = new Schema({
  title: { type: String, required: true },
  slug: String,
  biography: String,
});

export default model("Author", authorSchema);
