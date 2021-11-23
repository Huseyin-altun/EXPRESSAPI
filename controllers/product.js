const Product = require('../models/product')

createProduct = async(req, res) => {
    

    if (!req.body) {
        return res.status(400).json({
            code: 1,
            msg: 'false',
         
        })
    }

    const product = new Product(req.body)

    if (!product) {
        return res.status(400).json({ code: 1, msg: msg })
    }

    await  product
        .save()
        .then(() => {
            return res.status(201).json({
                code: 0,
                msg: 'sucess',
              data:product
               
            })
        })
        .catch(error => {
            return res.status(400).json({
                code,
                message: 'false',
            })
        })
}



getProducts = async (req, res) => {
    await Product.find({}, (err, product) => {
        if (err) {
            return res.status(400).json({ code: 1, msg: msg })
        }
        if (!product.length) {
            return res
                .status(404)
                .json({ code: 1, msg: `false` })
        }
        return res.status(200).json({ code: 0, msg:'sucess',data: product })
    }).catch(err => console.log(err))
}

module.exports = {
    createProduct,
    getProducts,

}