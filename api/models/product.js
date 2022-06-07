const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "product name must be provided"],unique: true },
    price: { type: Number, required: [true, "product price must be provided"] },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 4.5,
    },

    description: {
      type: String,
      required: [true, "Description must be provided"],
    },
    inStock: { type: Boolean, default: true },
    color: { type: Array },
    images: { type: Array, required: true },
    categories: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
