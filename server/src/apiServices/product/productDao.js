const Product = require('./model');

const ProductRepository = {
    findAll: async () => {
        return await Product.find();
    },
    save: async (params) => {
        const newProduct = new Product({...params})
        return await newProduct.save()
    },
    get: async (id) => {
        return await Product.findById(id);
    },
    update: async (id, params) => {
        await Product.findByIdAndUpdate(id,{...params})
        return Product.findById(id);
    },
    delete: async (id) => {
        Product.findByIdAndDelete(id)
        return await Product.findByIdAndDelete(id)
    }
}

module.exports = ProductRepository;
