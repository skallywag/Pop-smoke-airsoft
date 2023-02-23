import express, { Application } from "express";
import userServiceRoutes from "./routes/userService.routes";
import db from "./models";
import cors from "cors";

var corsOptions = {
  origin: "http://localhost:5173",
};
const app: Application = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(db);

// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err: any) => {
//     console.log("Failed to sync db: " + err.message);
//   });

userServiceRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;
