const express = require("express")
const router = express.Router()
const {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct
    } = require('../controllers/product')


router.route("/").post(createProduct).get(getAllProducts)
router.route("/:id").patch(updateProduct).get(getSingleProduct).delete(deleteProduct);

module.exports = router