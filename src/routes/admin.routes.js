const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController'); // la doi tuong nen viet thuong, class moi viet hoa chu cai dau

// newsController.index;

router.get('/', adminController.index);  // boc tach ro rang controller va vs model

module.exports = router;