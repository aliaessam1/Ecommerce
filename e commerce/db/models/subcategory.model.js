import mongoose from "mongoose";
import slugify from "slugify";

const { Schema } = mongoose;

const subcategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 200,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      minLength: 3,
      maxLength: 200,
      trim: true,
      unique: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
  },
  { timestamps: true }
);

subcategorySchema.pre("save", function (next) {
  this.slug = slugify(this.title);
  next();
});

subcategorySchema.pre("updateOne", function (next) {
  this._update.slug = slugify(this._update.title);
  next();
});

const subcategoryModel = mongoose.model("category", subcategorySchema);

export default subcategoryModel;
