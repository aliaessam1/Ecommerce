import mongoose from "mongoose";

export const dbConn = () => {
  mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

};
