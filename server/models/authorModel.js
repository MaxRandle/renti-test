import pkg from "mongoose";
const { Schema, model } = pkg;

const authorSchema = new Schema({
  name: { type: String, required: true },
  biography: String,
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

export default model("author", authorSchema);
