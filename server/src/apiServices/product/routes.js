const express = require('express')
const router = express.Router();
const controller = require('./controller')

router.get('/', controller.findProducts );
router.post('/create', controller.saveProduct );
router.put('/update/:id', controller.updateProduct );
router.delete('/delete/:id', controller.deleteProduct );

module.exports = router;
