const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

const ads = [{ title: "Hello, world (again)!" }];

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Warped to planet ${PORT}`);
});
