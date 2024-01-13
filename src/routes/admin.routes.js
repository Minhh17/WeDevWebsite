const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController'); // la doi tuong nen viet thuong, class moi viet hoa chu cai dau

// newsController.index;

router.get('/', adminController.index);  // boc tach ro rang controller va vs model
router.get('/createStudent', adminController.createStudent);
router.post('/save', adminController.save);
router.get('/getData', adminController.getDataFromDB);
// router.get('/edit/:id', adminController.edit);
// router.post('/update/:id', adminController.update);
// router.post('/delete/:id', adminController.delete);

module.exports = router;