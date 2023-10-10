const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
  res.render('index', {
    company_name: "Rave Me Away",
    hero_slogan: "Eliminating safety and liability concerns for event goers and event owners alike by giving peace of mind",
    problems: [
      {
        tab: 1,
        prob: `Serious Crowd Injury and Fatalities at Outdoor Music Festivals`,
        expansion: `"Worldwide, nearly 70,000 people suffered significant injury and 232 people died at approximately 300 outdoor music concerts held over a 10-year period"`
      },
      {
        tab: 2,
        prob: "Inefficient Current Technology",
        expansion: `“We use walkie-talkies, paper maps, lightsabers to move a crowd, and sometimes a radio… it once took me and my crew an hour to respond to and eventually find one person in distress at EDC Las Vegas, simply because we had to comb our way through the crowd with lightsabers" -Insomniac Ground Team Member`
      },
      {
        tab: 3,
        prob: "The solution",
        expansion: "We will solve this problem by providing the staff and festival owners with the proper equipment to do their jobs most efficiently, while giving festival goers a sense of security and peace of mind"
      }
    ]
  })
});

router.get('/about', (req, res, next) => {
  res.render('about', {})
});

module.exports = router
