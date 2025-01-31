import mongoose from "mongoose";

const { Schema } = mongoose;

const brandSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "image",
    },
  },
  { timestamps: true }
);

const brandModel = mongoose.model("brand", brandSchema);

export default brandModel;
