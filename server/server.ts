import express, { Application } from "express";
import userRoutes from "./routes/userService.routes";
import cors from "cors";

var corsOptions = {
  origin: "http://localhost:5173",
};
const app: Application = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const db = require("./models/index");
// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err: any) => {
//     console.log("Failed to sync db: " + err.message);
//   });

// require("./routes/userService.routes")(app);

userRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;
