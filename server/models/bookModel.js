import pkg from "mongoose";
const { Schema, model } = pkg;

const bookSchema = new Schema({
  title: { type: String, required: true },
  overview: String,
  synopsis: String,
  recipes: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
});

export default model("book", bookSchema);
