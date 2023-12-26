const express = require('express');
const router = express.Router();
const studentController = require('../app/controllers/StudentController'); // la doi tuong nen viet thuong, class moi viet hoa chu cai dau

router.get('/', studentController.index);  // boc tach ro rang controller va vs model
router.get('/getData', studentController.getDataFromDB);  // boc tach ro rang controller va vs model

router.get('/seeData', (req, res) => {

    let data = studentController.getDataFromDB;
    console.log(data);
    res.render('student', {data: data});
    
});

module.exports = router;
