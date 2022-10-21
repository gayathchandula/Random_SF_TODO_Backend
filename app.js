const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const dbConfig = require("./config");

const { create } = require("./functions/create");
const { getAll, getAllPaginated } = require("./functions/get");
const { update } = require("./functions/update");
const { deleteById } = require("./functions/delete");

const app = express();
app.use(cors());

//middleware
app.use(express.json());

//configure mongoose
mongoose.connect(
  dbConfig.url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.post("/api/create", create);
app.get("/api/getAll", getAll);
app.get("/api/getAllPaginated", getAllPaginated);
app.put("/api/update", update);
app.delete("/api/delete/:id", deleteById);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
