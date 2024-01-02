const express = require('express');
const router = express.Router();
const studentController = require('../app/controllers/StudentController'); // la doi tuong nen viet thuong, class moi viet hoa chu cai dau

router.get('/', studentController.index);  // boc tach ro rang controller va vs model
router.get('/getData', studentController.getDataFromDB); 
router.get('/create', studentController.create);  

module.exports = router;
