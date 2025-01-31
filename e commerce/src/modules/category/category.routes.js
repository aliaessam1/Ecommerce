import express from "express";
import {
  addCategory,
  getAllCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
} from "./category.controller.js";
import {
  addCategorySchema,
  getByIdSchema,
  updateCategorySchema,
} from "./category.validations.js";
import validate from "../../middlewares/validation.middleware.js";
import { uploadSingle } from "../../utils/fileUpload.js";

const categoryRoute = express.Router();

categoryRoute
  .route("/")
  .post(uploadSingle("image"), validate(addCategorySchema), addCategory)
  .get(getAllCategory);
categoryRoute
  .route("/:id")
  .get(validate(getByIdSchema), getOneCategory)
  .patch(validate(updateCategorySchema), updateCategory)
  .delete(validate(getByIdSchema), deleteCategory);

export default categoryRoute;
