import express from "express";
import categoryRoute from "./category/category.routes.js";

export const allRoutes = (app) => {
  app.use('/category',categoryRoute);

};
