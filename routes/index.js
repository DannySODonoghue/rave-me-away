const { Router } = require('express')
const router = Router()

const CDN = 'https://cdn.turbo360.co/projects/rma-ttlu89/public'

router.get('/', (req, res, next) => {
  res.render('index', {
    CDN,
    image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/hero-image-1.avif",
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
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/injury.jpeg"
      },
      {
        tab: 2,
        prob: "Inefficient Current Technology",
        expansion: `“We use walkie-talkies, paper maps, lightsabers to move a crowd, and sometimes a radio… it once took me and my crew an hour to respond to and eventually find one person in distress at EDC Las Vegas, simply because we had to comb our way through the crowd with lightsabers" -Insomniac Ground Team Member`,
        style: "20%",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/old-tech.jpeg"
      },
      {
        tab: 3,
        prob: "What Needs To Be Done",
        expansion: "We will solve this problem by providing the staff and festival owners with the proper equipment to do their jobs most efficiently, while giving festival goers a sense of security and peace of mind",
        style: "25%",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/solution.png"
      }
    ],
    solution_heading: "Introducing the Rave Me Away Wristband and Application",
    solution_expansion: `A consumer friendly and familiar concept, the RaveMeAway Wristband is a wearable device that tracks the users location and can act as a "panic button" for concert/festival goers during events The RMA Wristband provides ease of use with no additional hoops to jump through, like being required to pull out a phone in a large crowd. Upgraded from the industry standard "non-Active" RFID chips, RMA Wristbands are powered by Active RFID Bluetooth chips and are designed to only track a user's location while they are inside the festival grounds. The RaveMeAway Application combines our technology with RTK geo-mapping to provide a readable 3D map for staff and consumers to see and locate themselves in real time while inside the event grounds`,
    solution_benefits: [
      {
        title: "Increased Safety for Attendees",
        body: "Cuts down on response time for Paramedic teams, accurately locates users in need, and provides support to individuals in distress",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/safety.png"
      },
      {
        title: "Valuable Marketing Data",
        body: "Provides valuable user data for tracking individuals with opt-in policy",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/marketing-black.png"
      },
      {
        title: "Lower Financial Risk",
        body: "Decreases insurance liability for event owners and operators",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/risk.png"
      },
      {
        title: "Learn More",
        body: "Click here to learn more about Rave Me Away's solution",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/learn-more-black.png",
        link: "how-it-works",
        learn_more: "yes"

      }
    ],
    articles: [
      {
        title: "Case Study with Saxa Labs",
        author: "Daniel O'Donoghue",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/casestudy.webp",
        link: ""
      },
      {
        title: "EDM.com Feature",
        author: "Cameron Sunkel",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/edmarticleimage.jpeg",
        link: "https://edm.com/gear-tech/innovative-festival-wristbands-life-saving-rfid-technology-rave-me-away"
      },
      {
        title: "Georgetown University Case Study",
        author: "Georgetown University Library",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/gtown-cs.webp",
        link: "https://library.georgetown.edu/news/maker-hub-invention-boosts-festival-safety"
      }
    ]
  })
});

router.get('/about', (req, res, next) => {
  res.render('about', 
  {
    CDN,
    title: "About Us",
    team: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/team.avif",
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
    team_members: [
      {
        name: "Charles Hinnant",
        title: "CEO & Founder",
        blurb: "",
        photo: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/chheadshot.png",
        github: "",
        twitter: "",
        linkedin: ""
      },
      {
        name: "Ryan Meehan",
        title: "Software Engineer Intern (Frontend)",
        blurb: "",
        photo: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/rmheadshot.png",
        github: "",
        twitter: "",
        linkedin: ""
      },
      {
        name: "Will Schmitz",
        title: "Software Engineer Intern (Frontend)",
        blurb: "",
        photo: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/wsheadshot.png",
        github: "",
        twitter: "",
        linkedin: ""
      },
      {
        name: "Daniel O'Donoghue",
        title: "Software Engineer Intern (Backend)",
        blurb: "",
        photo: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/doheadshot.jpeg",
        github: "",
        twitter: "",
        linkedin: ""
      },
      {
        name: "Chengxin Wu",
        title: "Software Engineer Intern (Backend)",
        blurb: "",
        photo: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/cwheadshot.png",
        github: "",
        twitter: "",
        linkedin: ""
      },
      {
        name: "Patricia Schenfield",
        title: "Financial and Business Intern",
        blurb: "",
        photo: "",
        github: "",
        twitter: "",
        linkedin: ""
      },
      {
        name: "Sergio Rodriguez Cifuentes",
        title: "Project Manager Intern",
        blurb: "",
        photo: "",
        github: "",
        twitter: "",
        linkedin: ""
      },
      {
        name: "Angeline Caamano",
        title: "Marketing Intern",
        blurb: "",
        photo: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/acheadshot.png",
        github: "",
        twitter: "",
        linkedin: ""
      }
    ]
  })
});

router.get('/how-it-works', (req, res, next) => {
  res.render('how-it-works', {
    CDN,
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
    how_it_works_title: "How It Works",
    how_it_works_desc: "Join us on this journey as we unveil the future of festival safety and reveal how, together, we can ensure that music festivals are not just memorable but, above all, safe",
    image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/mapping.jpeg",
    section1: "RaveMeAway Wristband Technology",
    section1_desc: "The Rave Me Away wristband utilizes bluetooth capabilities power by two-way RFID chips embedded in the wristband that are connected to 'Gateways' located around the geo-mapped event area.",
    section1_desc2: "These 'Gateways' act as a radar for all the active RMA wristbands at the event. The wristbands themselves are an upgraded version from the industry standard one-way RFID while still offering industry standard features including credit-card payments and use as a ticket to scan in and out of the event.",
    wristband: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/wristband.png",
    application: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/application.avif",
    section2_title: "Usage",
    section2_desc: "The data from the consumers wearing the RMA wristbands will be tracked by our 'Gateways' and sent to our UI hub powered by AWS and co-mingled with our user applications where attendees and event staff can monitor themselves and respond to risk assessment situations.",
    section3_title: "The RaveMeAway Saas Platform",
    section3_desc: "Clients have the ability to select annual subscription packages along with the number of events and which locations they'd like to use the product. The platform provides live event calendars and mapping of venue locations. The wristbands themselves are synced to exact permieters and made ready for consumer purchase via venue ticket sales process. There is a 6-month lead time requirement which enables event ownders to optimize their utility for both staff and resources. This guarantees crowds are not oversold and people are not sneaking in increasing safety for equipment, products, staff, and most importantly the attendees.",
    section4_title: "The RaveMeAway Application",
    section4_desc: "The RMA application will allow both clients and event users to look at a digital map of the event location that RMA has geo-mapped. Users will be able to see themselves via their wristbands on this digital map and any of their friends wristbands as well as festival locations and events. For Clients the RMA Application will coincide with the “panic button” feature for paramedics to be altered and respond to. In addition the RMA Application will also serve as a backend SAAS Platform to increase tracking, safety, and productivity.",
    value: "Value",
    values: [
      {
        item: "Cuts down on response time, accurately locates, and provides support to individuals in distress"
      },
      {
        item: "Prevents avoidable loss of life"
      },
      {
        item: "Provides valuable user data for tacking individuals with opt-in policy"
      },
      {
        item: "Decreases insurance liability for event owners for future events"
      }
    ]
  })
});

router.get('/version', (req, res, next) => {
  let queryVersion = req.query.version;
  let image = "";
  if (queryVersion === '1'){
    image = "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/hero-image-1.avif";
  } 
  else if (queryVersion === '2'){
    image = "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/hero-image-2.avif";
  }
  else if (queryVersion === '3') {
    image = "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/hero-image-3.avif";
  }
  else {
    image = "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/hero-image-1.avif";
  }
  console.log(image);
  res.render('index', {
    CDN,
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
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/injury.jpeg"
      },
      {
        tab: 2,
        prob: "Inefficient Current Technology",
        expansion: `“We use walkie-talkies, paper maps, lightsabers to move a crowd, and sometimes a radio… it once took me and my crew an hour to respond to and eventually find one person in distress at EDC Las Vegas, simply because we had to comb our way through the crowd with lightsabers" -Insomniac Ground Team Member`,
        style: "20%",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/old-tech.jpeg"
      },
      {
        tab: 3,
        prob: "What Needs To Be Done",
        expansion: "We will solve this problem by providing the staff and festival owners with the proper equipment to do their jobs most efficiently, while giving festival goers a sense of security and peace of mind",
        style: "25%",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/solution.png"
      }
    ],
    solution_heading: "Introducing the Rave Me Away Wristband and Application",
    solution_expansion: `A consumer friendly and familiar concept, the RaveMeAway Wristband is a wearable device that tracks the users location and can act as a "panic button" for concert/festival goers during events The RMA Wristband provides ease of use with no additional hoops to jump through, like being required to pull out a phone in a large crowd. Upgraded from the industry standard "non-Active" RFID chips, RMA Wristbands are powered by Active RFID Bluetooth chips and are designed to only track a user's location while they are inside the festival grounds. The RaveMeAway Application combines our technology with RTK geo-mapping to provide a readable 3D map for staff and consumers to see and locate themselves in real time while inside the event grounds`,
    solution_benefits: [
      {
        title: "Increased Safety for Attendees",
        body: "Cuts down on response time for Paramedic teams, accurately locates users in need, and provides support to individuals in distress",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/safety.png"
      },
      {
        title: "Valuable Marketing Data",
        body: "Provides valuable user data for tracking individuals with opt-in policy",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/marketing-black.png"
      },
      {
        title: "Lower Financial Risk",
        body: "Decreases insurance liability for event owners and operators",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/risk.png"
      },
      {
        title: "Learn More",
        body: "Click here to learn more about Rave Me Away's solution",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/learn-more-black.png",
        link: "about",
        learn_more: "yes"

      }
    ],
    articles: [
      {
        title: "Case Study with Saxa Labs",
        author: "Daniel O'Donoghue",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/casestudy.webp",
        link: ""
      },
      {
        title: "EDM.com Feature",
        author: "Cameron Sunkel",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/edmarticleimage.jpeg",
        link: "https://edm.com/gear-tech/innovative-festival-wristbands-life-saving-rfid-technology-rave-me-away"
      },
      {
        title: "Georgetown University Case Study",
        author: "Georgetown University Library",
        image: "https://cdn.turbo360.co/projects/rma-ttlu89/public/images/gtown-cs.webp",
        link: "https://library.georgetown.edu/news/maker-hub-invention-boosts-festival-safety"
      }
    ]
  })
});

module.exports = router
