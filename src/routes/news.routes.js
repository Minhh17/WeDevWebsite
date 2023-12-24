const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController'); // la doi tuong nen viet thuong, class moi viet hoa chu cai dau

// newsController.index;

router.get('/', newsController.index);  // boc tach ro rang controller va vs model


module.exports = router;