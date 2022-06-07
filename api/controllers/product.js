const Product = require("../models/product")
const {StatusCodes} = require("http-status-codes")

const createProduct = async (req,res) => {
    console.log("request body is ",req.body)
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({ product })
}

const getAllProducts = async (req,res)=>{
    const products = await Product.find({}).sort('createdAt')
    res.status(StatusCodes.OK).json({ products, count: products.length })
}

const getSingleProduct = async (req,res)=>{
    const {
        params: { id: productId },
      } = req
      const product = await Product.findOne({
        _id: productId,
      })
      if (!product) {
        throw new NotFoundError(`No product with id ${productId}`)
      }
      res.status(StatusCodes.OK).json({ product })

}

const deleteProduct = async (req,res) => {
    const {
        params: { id: productId },
      } = req
    
      const product = await Product.findByIdAndRemove({
        _id: productId,
      })
      if (!product) {
        throw new NotFoundError(`No product with id ${productId}`)
      }
      res.status(StatusCodes.OK).send()
}

const updateProduct = async (req,res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(StatusCodes.OK).json(updatedProduct);
      } catch (err) {
        throw new CustomErrorAPI(err)
      }

}


module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct
}