const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
  res.render('index', {
    company_name: "Rave Me Away",
    hero_slogan: "Eliminating safety and liability concerns for event goers and event owners alike by giving peace of mind",
    hero_image: "",
  })
})

router.get('/about', (req, res, next) => {
  res.render('about', {})
});

module.exports = router
