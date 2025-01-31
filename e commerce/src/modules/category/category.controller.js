import categoryModel from "../../../db/models/category.model.js";
import { catchAsyncError } from "../../utils/error.js";

const addCategory = catchAsyncError(async (req, res) => {
  req.body.image=req.file.filename
  let newCategory = new categoryModel(req.body);
  //Can use the id before saving in database
  let addedCategory = await newCategory.save();
  res.json({ message: "Category Added Succesfully", addedCategory });
});

const getAllCategory = catchAsyncError(async (req, res) => {
  let allCategory = await categoryModel.find();
  res.json({ message: "All Categories", allCategory });
});

const getOneCategory = catchAsyncError(async (req, res) => {
  let category = await categoryModel.findById(req.params.id);
  if (!category) return res.status(404).json({ message: "Category Not Found" });

  res.json({ message: "Category Found Successfully", category });
});

const updateCategory = catchAsyncError(async (req, res) => {
  let updatedCategory = await categoryModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!updatedCategory)
    return res.status(404).json({ message: "Category Not Found!" });
  return res.json({
    message: "Category Updated Successfully",
    updatedCategory,
  });
});

const deleteCategory = catchAsyncError(async (req, res) => {
  let deletedCategory = await categoryModel.findByIdAndDelete(req.params.id);
  if (!deletedCategory)
    return res.status(404).json({ message: "Category Not Found!" });
  return res.json({
    message: "Category Deleted Successfully",
    deletedCategory,
  });
});

export {
  addCategory,
  getAllCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
};
