import mongoose from "mongoose";
import slugify from "slugify";

const { Schema } = mongoose;

const categorySchema = new Schema(
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
    image: String,
  },
  { timestamps: true }
);

categorySchema.pre("save", function (next) {
  this.slug = slugify(this.title);
  next();
});

categorySchema.pre("findOneAndUpdate", function (next) {
  this._update.slug = slugify(this._update.title);
  next();
});

const categoryModel = mongoose.model("category", categorySchema);

export default categoryModel;
