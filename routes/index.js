var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', text: '见我加载更多', more: '/home'});
});
router.get('/home', (req, res, next) => {
    res.render('home', {title: 'home', toLink: '/users'})
})
module.exports = router;
