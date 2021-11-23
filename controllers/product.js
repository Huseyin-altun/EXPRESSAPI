const Product = require('../models/product')

createProduct = (req, res) => {
    

    if (!req.body) {
        return res.status(400).json({
            code: 1,
            msg: 'Bir ürün bulunamadı',
         
        })
    }

    const product = new Product(req.body)

    if (!product) {
        return res.status(400).json({ code: 1, msg: err })
    }

    product
        .save()
        .then(() => {
            return res.status(201).json({
                code: 0,
                id: product._id,
                msg: 'Veri tabanına kaydedildi',
            })
        })
        .catch(error => {
            return res.status(400).json({
                code,
                message: 'Veritabanına kaydedilmedi',
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
                .json({ code: 1, msg: `Veritabanında yok` })
        }
        return res.status(200).json({ code: 0, data: product })
    }).catch(err => console.log(err))
}

module.exports = {
    createProduct,
    getProducts,

}