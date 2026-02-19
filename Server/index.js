const express = require("express");
const viewRouter = require("./routes/views.routes");

const app = express();

// set template engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.json());

// views
app.use(viewRouter);

app.get("/", (req, res, next) => {
  res.json("Hello, World!!");
});
const PORT = process.env.PORT ?? 8080;
app.listen(PORT, "localhost", () => {
  console.log("App listening on http://localhost:" + PORT);
});
