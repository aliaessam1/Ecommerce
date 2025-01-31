import express from "express";
import { dbConn } from "./db/conn.js";
import { allRoutes } from "./src/modules/routes.js";
const app = express();

app.listen(3000, () => console.log(`Example app listening on port 3000!`));

app.use(express.json());

dbConn();

allRoutes(app);

app.use("*", (req, res, next) => {
  next(new appError(req.originalUrl + "Not Found", 404));
});

app.use((err, req, res, next) => {
  const { message, statusCode } = err;
  res.status(statusCode || 500).json({ message });
});
