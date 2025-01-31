import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        productName: {
          type: String,
          required: true,
        },
        quantityInCart: {
          type: Number,
          required: true,
          min:1
        },
      },
    ],
  },
  { timestamps: true }
);

const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;
