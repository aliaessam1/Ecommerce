import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 3,
      maxLength: 200,
      unique: true,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      minLength: 3,
      maxLength: 200,
      unique: true,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      minLength: 3,
      maxLength: 10000,
      required: true,
      trim: true,
    },

    stock: {
      type: Number,
      min: 0,
      required: true,
    },

    price: {
      type: Number,
      min: 1,
      required: true,
    },
    discountPrice: {
      type: Number,
      min: 1,
      validate: {
        validator: function (value) {
          return value <= this.price;
        },
        message: "Discounted Price is Incorrect",
      },
    },

    coverImg: {
      imageId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "image",
      },
    },

    features: [
      {
        key: String,
        value: String,
      },
    ],

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },

    images: [
      {
        imageId: { type: mongoose.Schema.Types.ObjectId, ref: "image" },
      },
    ],
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);

export default productModel;
