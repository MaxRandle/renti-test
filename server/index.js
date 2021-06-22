import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import path from "path";
import { fileURLToPath } from "url";

// schema
import graphQlSchema from "./graphql/schema.js";

// resolvers
import * as resolvers from "./graphql/resolvers.js";

// .env
import dotenv from "dotenv";
dotenv.config();

// constants
const __prod__ = process.env.NODE_ENV === "production";
const PORT = 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// middleware
app.use(cors());
app.use(cors());
app.use(json());

// serve staic html
app.use(express.static(path.join(__dirname, "../build")));

// graphql endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: {
      ...resolvers,
    },
    graphiql: true,
    // graphiql: !__prod__,
  })
);

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

// database connect >> server start
mongoose
  .connect("mongodb://mongo:27017/docker-node-mongo", { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log("server listening over port", PORT));
  })
  .catch((err) => console.log(err));
