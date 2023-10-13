const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
  res.render('index', {
    image: "/images/hero-image-1.avif",
    nav_tabs: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "How it works",
        link: "how-it-works"
      },
      {
        name: "About us",
        link: "about"
      },
      {
        name: "Articles",
        link: ""
      }
    ],
    company_name: "Rave Me Away",
    hero_slogan: "Eliminating safety and liability concerns for event goers and event owners alike by giving peace of mind",
    problems: [
      {
        tab: 1,
        prob: `Serious Crowd Injury and Fatalities at Outdoor Music Festivals`,
        expansion: `"Worldwide, nearly 70,000 people suffered significant injury and 232 people died at approximately 300 outdoor music concerts held over a 10-year period"`,
        style: "30%",
        image: "/images/injury.jpeg"
      },
      {
        tab: 2,
        prob: "Inefficient Current Technology",
        expansion: `“We use walkie-talkies, paper maps, lightsabers to move a crowd, and sometimes a radio… it once took me and my crew an hour to respond to and eventually find one person in distress at EDC Las Vegas, simply because we had to comb our way through the crowd with lightsabers" -Insomniac Ground Team Member`,
        style: "20%",
        image: "/images/old-tech.jpeg"
      },
      {
        tab: 3,
        prob: "What Needs To Be Done",
        expansion: "We will solve this problem by providing the staff and festival owners with the proper equipment to do their jobs most efficiently, while giving festival goers a sense of security and peace of mind",
        style: "25%",
        image: "/images/solution.png"
      }
    ],
    solution_heading: "Introducing the Rave Me Away Wristband and Application",
    solution_expansion: `A consumer friendly and familiar concept, the RaveMeAway Wristband is a wearable device that tracks the users location and can act as a "panic button" for concert/festival goers during events The RMA Wristband provides ease of use with no additional hoops to jump through, like being required to pull out a phone in a large crowd. Upgraded from the industry standard "non-Active" RFID chips, RMA Wristbands are powered by Active RFID Bluetooth chips and are designed to only track a user's location while they are inside the festival grounds. The RaveMeAway Application combines our technology with RTK geo-mapping to provide a readable 3D map for staff and consumers to see and locate themselves in real time while inside the event grounds`,
    solution_benefits: [
      {
        title: "Increased Safety for Attendees",
        body: "Cuts down on response time for Paramedic teams, accurately locates users in need, and provides support to individuals in distress",
        image: "/images/safety.png"
      },
      {
        title: "Valuable Marketing Data",
        body: "Provides valuable user data for tracking individuals with opt-in policy",
        image: "/images/marketing-black.png"
      },
      {
        title: "Lower Financial Risk",
        body: "Decreases insurance liability for event owners and operators",
        image: "/images/risk.png"
      },
      {
        title: "Learn More",
        body: "Click here to learn more about Rave Me Away's solution",
        image: "/images/learn-more-black.png",
        link: "about",
        learn_more: "yes"

      }
    ],
    articles: [
      {
        title: "Case Study with Saxa Labs",
        author: "Daniel O'Donoghue",
        image: "/images/casestudy.webp",
        link: ""
      },
      {
        title: "EDM.com Feature",
        author: "Cameron Sunkel",
        image: "/images/edmarticleimage.jpeg",
        link: "https://edm.com/gear-tech/innovative-festival-wristbands-life-saving-rfid-technology-rave-me-away"
      },
      {
        title: "Georgetown University Case Study",
        author: "Georgetown University Library",
        image: "/images/gtown-cs.webp",
        link: "https://library.georgetown.edu/news/maker-hub-invention-boosts-festival-safety"
      }
    ]
  })
});

router.get('/about', (req, res, next) => {
  res.render('about', 
  {
    variable: "hello world"
  })
});

router.get('/how-it-works', (req, res, next) => {
  res.render('how-it-works', {
    nav_tabs: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "How it works",
        link: "how-it-works"
      },
      {
        name: "About us",
        link: "about"
      },
      {
        name: "Articles",
        link: ""
      }
    ],
    how_it_works_title: "",
  })
});

router.get('/version', (req, res, next) => {
  let queryVersion = req.query.version;
  let image = "";
  if (queryVersion === '1'){
    image = "/images/hero-image-1.avif";
  } 
  else if (queryVersion === '2'){
    image = "/images/hero-image-2.avif";
  }
  else if (queryVersion === '3') {
    image = "/images/hero-image-3.avif";
  }
  else {
    image = "/images/hero-image-1.avif";
  }
  console.log(image);
  res.render('index', {
    image: image,
    nav_tabs: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "How it works",
        link: "how-it-works"
      },
      {
        name: "About us",
        link: "about"
      },
      {
        name: "Articles",
        link: ""
      }
    ],
    company_name: "Rave Me Away",
    hero_slogan: "Eliminating safety and liability concerns for event goers and event owners alike by giving peace of mind",
    problems: [
      {
        tab: 1,
        prob: `Serious Crowd Injury and Fatalities at Outdoor Music Festivals`,
        expansion: `"Worldwide, nearly 70,000 people suffered significant injury and 232 people died at approximately 300 outdoor music concerts held over a 10-year period"`,
        style: "30%",
        image: "/images/injury.jpeg"
      },
      {
        tab: 2,
        prob: "Inefficient Current Technology",
        expansion: `“We use walkie-talkies, paper maps, lightsabers to move a crowd, and sometimes a radio… it once took me and my crew an hour to respond to and eventually find one person in distress at EDC Las Vegas, simply because we had to comb our way through the crowd with lightsabers" -Insomniac Ground Team Member`,
        style: "20%",
        image: "/images/old-tech.jpeg"
      },
      {
        tab: 3,
        prob: "What Needs To Be Done",
        expansion: "We will solve this problem by providing the staff and festival owners with the proper equipment to do their jobs most efficiently, while giving festival goers a sense of security and peace of mind",
        style: "25%",
        image: "/images/solution.png"
      }
    ],
    solution_heading: "Introducing the Rave Me Away Wristband and Application",
    solution_expansion: `A consumer friendly and familiar concept, the RaveMeAway Wristband is a wearable device that tracks the users location and can act as a "panic button" for concert/festival goers during events The RMA Wristband provides ease of use with no additional hoops to jump through, like being required to pull out a phone in a large crowd. Upgraded from the industry standard "non-Active" RFID chips, RMA Wristbands are powered by Active RFID Bluetooth chips and are designed to only track a user's location while they are inside the festival grounds. The RaveMeAway Application combines our technology with RTK geo-mapping to provide a readable 3D map for staff and consumers to see and locate themselves in real time while inside the event grounds`,
    solution_benefits: [
      {
        title: "Increased Safety for Attendees",
        body: "Cuts down on response time for Paramedic teams, accurately locates users in need, and provides support to individuals in distress",
        image: "/images/safety.png"
      },
      {
        title: "Valuable Marketing Data",
        body: "Provides valuable user data for tracking individuals with opt-in policy",
        image: "/images/marketing-black.png"
      },
      {
        title: "Lower Financial Risk",
        body: "Decreases insurance liability for event owners and operators",
        image: "/images/risk.png"
      },
      {
        title: "Learn More",
        body: "Click here to learn more about Rave Me Away's solution",
        image: "/images/learn-more-black.png",
        link: "about",
        learn_more: "yes"

      }
    ],
    articles: [
      {
        title: "Case Study with Saxa Labs",
        author: "Daniel O'Donoghue",
        image: "/images/casestudy.webp",
        link: ""
      },
      {
        title: "EDM.com Feature",
        author: "Cameron Sunkel",
        image: "/images/edmarticleimage.jpeg",
        link: "https://edm.com/gear-tech/innovative-festival-wristbands-life-saving-rfid-technology-rave-me-away"
      },
      {
        title: "Georgetown University Case Study",
        author: "Georgetown University Library",
        image: "/images/gtown-cs.webp",
        link: "https://library.georgetown.edu/news/maker-hub-invention-boosts-festival-safety"
      }
    ]
  })
});

module.exports = router
