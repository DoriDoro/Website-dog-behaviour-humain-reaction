const express = require('express');
const router  = express.Router();

/* GET nav-bar -- home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/about', (req, res, next) => {
  res.render('about');
});

router.get('/basics', (req, res, next) => {
  res.render('basics', {nav_basic: true});
});

router.get('/contact', (req, res, next) => {
  res.render('contact');
});


/* GET nav-basic */
router.get('/walk', (req, res, next) => {
  res. render('walk');
})


module.exports = router;
