const productDao = require('./productDao')

module.exports = {
    async findProducts(req, res) {
        try {
            return res.status(200).jsonp(await productDao.findAll())
        } catch (err) {
            return res.status(400).jsonp({message: "Hay un error en la consulta", error: err})
        }
    },
    async getProduct(req, res) {
        try {
            return res.status(200).jsonp(await productDao.get(req.params.id))
        } catch (err) {
            return res.status(400).jsonp({message: "Hay un error en la consulta", error: err})
        }
    },
    async saveProduct(req, res) {
        try {
            return res.status(202).jsonp(await productDao.save(req.body))
        } catch (err) {
            return res.status(400).jsonp({message: "Hay un error en la consulta", error: err})
        }
    },
    async updateProduct(req, res) {
        try {
            const response = await productDao.update(req.params.id, req.body);
            return await res.status(200).jsonp({data: response, message: 'The product has been updated successfully'})
        } catch (err) {
            return res.status(400).jsonp({message: "Hay un error en la consulta", error: err})
        }
    },
    async deleteProduct(req, res) {
        try {
            await productDao.delete(req.params.id)
            return await res.status(200).jsonp({data: {}, message: 'The product has been deleted successfully'})
        } catch (err) {
            return res.status(400).jsonp({message: "Hay un error en la consulta", error: err})
        }
    },
}

