var express = require('express');

const { add_mark, view_mark, single_student, update_mark, delete_mark, min_student, max_student, pass_student, fail_student, atct_student, search_student } = require('../controller');
var router = express.Router();

var cors = require('cors');
const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true    
    optionSuccessStatus:200
}
router.use(cors());

/* GET home page. */
router.post('/',add_mark);
router.get('/all',view_mark);
router.get('/single/:id',single_student);
router.post('/:id',update_mark);
router.delete('/delete/:id',delete_mark);
router.get('/min',min_student);
router.get('/max',max_student);
router.get('/pass',pass_student);
router.get('/fail',fail_student);
router.get('/atct',atct_student);
router.get('/search/:key',search_student);

module.exports = router;
