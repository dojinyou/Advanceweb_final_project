var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('project');
});

router.get('/:projID', function (req, res, next) {
	res.render('projectDetail');
});
module.exports = router;
