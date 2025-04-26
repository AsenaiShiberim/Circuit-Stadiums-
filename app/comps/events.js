const events = [
  {
    "id": "sports-001",
    "title": "Cricket World Cup Final 2011",
    "category": "Cricket",
    "date": "2011-04-02",
    "location": {
      "lat": 18.9388,
      "lng": 72.8258
    },
    "description": "India defeated Sri Lanka in the Cricket World Cup Final held at Wankhede Stadium in Mumbai.",
    "link": "https://en.wikipedia.org/wiki/2011_Cricket_World_Cup_Final"
  },
  {
    "id": "tech-001",
    "title": "First SMS Message Sent",
    "category": "Mobile Technology",
    "date": "1992-12-03",
    "location": {
      "lat": 51.5072,
      "lng": -0.1276
    },
    "description": "The first text message, saying 'Merry Christmas', was sent in the UK by Neil Papworth.",
    "link": "https://en.wikipedia.org/wiki/SMS"
  },
  {
    "id": "sports-002",
    "title": "Tokyo Summer Olympics Opening Ceremony",
    "category": "Olympics",
    "date": "2021-07-23",
    "location": {
      "lat": 35.6895,
      "lng": 139.6917
    },
    "description": "Tokyo hosted the Summer Olympics in 2021 after a one-year COVID delay, with no public spectators.",
    "link": "https://en.wikipedia.org/wiki/2020_Summer_Olympics"
  },
  {
    "id": "tech-002",
    "title": "Samsung Galaxy S Debut",
    "category": "Mobile Technology",
    "date": "2010-06-04",
    "location": {
      "lat": 37.5665,
      "lng": 126.9780
    },
    "description": "Samsung launched the Galaxy S, kicking off its globally dominant smartphone series.",
    "link": "https://en.wikipedia.org/wiki/Samsung_Galaxy_S"
  },
  {
    "id": "sports-003",
    "title": "Brazil Wins 2002 World Cup",
    "category": "Soccer",
    "date": "2002-06-30",
    "location": {
      "lat": 35.1796,
      "lng": 129.0756
    },
    "description": "Brazil claimed its fifth FIFA World Cup title by beating Germany in Yokohama, Japan.",
    "link": "https://en.wikipedia.org/wiki/2002_FIFA_World_Cup_Final"
  },
  {
    "id": "tech-003",
    "title": "Launch of Ubuntu OS",
    "category": "Open Source",
    "date": "2004-10-20",
    "location": {
      "lat": -33.9249,
      "lng": 18.4241
    },
    "description": "Ubuntu, the popular open-source Linux OS, was launched in Cape Town, South Africa.",
    "link": "https://en.wikipedia.org/wiki/Ubuntu"
  },
  {
    "id": "sports-004",
    "title": "Rafael Nadal Wins 14th French Open",
    "category": "Tennis",
    "date": "2022-06-05",
    "location": {
      "lat": 48.8470,
      "lng": 2.2496
    },
    "description": "Nadal claimed his record 14th Roland-Garros title at Stade Roland Garros in Paris.",
    "link": "https://en.wikipedia.org/wiki/2022_French_Open_%E2%80%93_Men%27s_singles"
  },
  {
    "id": "tech-004",
    "title": "Tesla Gigafactory Shanghai Opens",
    "category": "Electric Vehicles",
    "date": "2019-12-30",
    "location": {
      "lat": 31.2304,
      "lng": 121.4737
    },
    "description": "Tesla began production in its Shanghai Gigafactory, the first outside the U.S.",
    "link": "https://en.wikipedia.org/wiki/Gigafactory_Shanghai"
  },
  {
    "id": "sports-005",
    "title": "Tour de France First Stage 2023",
    "category": "Cycling",
    "date": "2023-07-01",
    "location": {
      "lat": 43.2630,
      "lng": -2.9350
    },
    "description": "The 2023 Tour de France began in Bilbao, Spain, with intense mountain challenges.",
    "link": "https://en.wikipedia.org/wiki/2023_Tour_de_France"
  },
  {
    "id": "tech-005",
    "title": "First Bitcoin Transaction",
    "category": "Cryptocurrency",
    "date": "2010-05-22",
    "location": {
      "lat": 28.5383,
      "lng": -81.3792
    },
    "description": "Laszlo Hanyecz made the first real-world Bitcoin transaction by buying 2 pizzas for 10,000 BTC.",
    "link": "https://en.wikipedia.org/wiki/Bitcoin#History"
  },
  {
    "id": "sports-006-unique",
    "title": "Usain Bolt Breaks 100m World Record",
    "category": "Athletics",
    "date": "2009-08-16",
    "location": {
      "lat": 52.5200,
      "lng": 13.4050
    },
    "description": "Usain Bolt set a new 100m world record of 9.58 seconds at the World Championships in Berlin.",
    "link": "https://en.wikipedia.org/wiki/Usain_Bolt"
  },
  {
    "id": "sports-007",
    "title": "Michael Phelps Wins 8 Gold Medals",
    "category": "Swimming",
    "date": "2008-08-17",
    "location": {
      "lat": 39.9042,
      "lng": 116.4074
    },
    "description": "Michael Phelps won 8 gold medals at the Beijing Olympics, setting a record for the most golds in a single Games.",
    "link": "https://en.wikipedia.org/wiki/Michael_Phelps"
  },
  {
    "id": "sports-008",
    "title": "Leicester City Wins Premier League",
    "category": "Soccer",
    "date": "2016-05-02",
    "location": {
      "lat": 52.6369,
      "lng": -1.1398
    },
    "description": "Leicester City defied 5000-1 odds to win the English Premier League title.",
    "link": "https://en.wikipedia.org/wiki/2015%E2%80%9316_Leicester_City_F.C._season"
  },
  {
    "id": "sports-009",
    "title": "Serena Williams Completes Career Grand Slam",
    "category": "Tennis",
    "date": "2003-07-05",
    "location": {
      "lat": 51.4344,
      "lng": -0.2140
    },
    "description": "Serena Williams completed her career Grand Slam by winning Wimbledon.",
    "link": "https://en.wikipedia.org/wiki/Serena_Williams"
  },
  {
    "id": "sports-010-unique",
    "title": "Chicago Cubs Win World Series After 108 Years",
    "category": "Baseball",
    "date": "2016-11-02",
    "location": {
      "lat": 41.9484,
      "lng": -87.6553
    },
    "description": "The Chicago Cubs won the World Series, ending a 108-year championship drought.",
    "link": "https://en.wikipedia.org/wiki/2016_World_Series"
  },
  {
    "id": "tech-006",
    "title": "Launch of the World Wide Web",
    "category": "Internet",
    "date": "1991-08-06",
    "location": {
      "lat": 46.2333,
      "lng": 6.0550
    },
    "description": "Tim Berners-Lee launched the first website, marking the birth of the World Wide Web.",
    "link": "https://en.wikipedia.org/wiki/Tim_Berners-Lee"
  },
  {
    "id": "tech-007",
    "title": "IBM's Deep Blue Defeats Garry Kasparov",
    "category": "Artificial Intelligence",
    "date": "1997-05-11",
    "location": {
      "lat": 40.7128,
      "lng": -74.0060
    },
    "description": "IBM's Deep Blue became the first computer to defeat a world chess champion in a match.",
    "link": "https://en.wikipedia.org/wiki/Deep_Blue_(chess_computer)"
  },
  {
    "id": "tech-008",
    "title": "Introduction of the iPhone",
    "category": "Mobile Technology",
    "date": "2007-01-09",
    "location": {
      "lat": 37.7749,
      "lng": -122.4194
    },
    "description": "Apple introduced the iPhone, revolutionizing the smartphone industry.",
    "link": "https://en.wikipedia.org/wiki/IPhone"
  },
  {
    "id": "tech-009",
    "title": "First Human Genome Sequenced",
    "category": "Biotechnology",
    "date": "2003-04-14",
    "location": {
      "lat": 38.9072,
      "lng": -77.0369
    },
    "description": "The Human Genome Project successfully completed the sequencing of the human genome.",
    "link": "https://en.wikipedia.org/wiki/Human_Genome_Project"
  },
  {
    "id": "tech-010",
    "title": "Launch of ChatGPT",
    "category": "Artificial Intelligence",
    "date": "2022-11-30",
    "location": {
      "lat": 37.7749,
      "lng": -122.4194
    },
    "description": "OpenAI launched ChatGPT, a conversational AI model that gained widespread popularity.",
    "link": "https://en.wikipedia.org/wiki/ChatGPT"
  }, {
    "id": "sports-011",
    "title": "Argentina Wins 2022 FIFA World Cup",
    "category": "Soccer",
    "date": "2022-12-18",
    "location": {
      "lat": 25.2637,
      "lng": 51.4881
    },
    "description": "Argentina defeated France in a dramatic penalty shootout to win the 2022 FIFA World Cup in Qatar.",
    "link": "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_final"
  },
  {
    "id": "sports-012",
    "title": "Super Bowl LV",
    "category": "American Football",
    "date": "2021-02-07",
    "location": {
      "lat": 27.9759,
      "lng": -82.5033
    },
    "description": "The Tampa Bay Buccaneers defeated the Kansas City Chiefs, with Tom Brady earning his 7th Super Bowl ring.",
    "link": "https://en.wikipedia.org/wiki/Super_Bowl_LV"
  },
  {
    "id": "sports-013",
    "title": "Usain Bolt's 100m World Record",
    "category": "Athletics",
    "date": "2009-08-16",
    "location": {
      "lat": 52.5200,
      "lng": 13.4050
    },
    "description": "Usain Bolt set a new world record of 9.58 seconds in the 100m final at the World Championships in Berlin.",
    "link": "https://en.wikipedia.org/wiki/Usain_Bolt"
  },
  {
    "id": "sports-014",
    "title": "Chicago Cubs Win World Series 2016",
    "category": "Baseball",
    "date": "2016-11-02",
    "location": {
      "lat": 41.9484,
      "lng": -87.6553
    },
    "description": "The Chicago Cubs won their first World Series in 108 years by defeating the Cleveland Indians.",
    "link": "https://en.wikipedia.org/wiki/2016_World_Series"
  },
  {
    "id": "sports-015",
    "title": "Floyd Mayweather vs. Conor McGregor Fight",
    "category": "Boxing",
    "date": "2017-08-26",
    "location": {
      "lat": 36.1028,
      "lng": -115.1745
    },
    "description": "Mayweather came out of retirement to defeat UFC champion McGregor in a high-profile boxing match.",
    "link": "https://en.wikipedia.org/wiki/Floyd_Mayweather_Jr._vs._Conor_McGregor"
  },
  {
    "id": "tech-011",
    "title": "Apple Introduces the M1 Chip",
    "category": "Computing",
    "date": "2020-11-10",
    "location": {
      "lat": 37.3349,
      "lng": -122.0090
    },
    "description": "Apple unveiled its first ARM-based M1 chip, beginning a new era of Mac performance and efficiency.",
    "link": "https://en.wikipedia.org/wiki/Apple_M1"
  },
  {
    "id": "tech-012-unique",
    "title": "OpenAI Releases ChatGPT",
    "category": "Artificial Intelligence",
    "date": "2022-11-30",
    "location": {
      "lat": 37.7749,
      "lng": -122.4194
    },
    "description": "OpenAI released ChatGPT, a conversational AI model that rapidly gained global popularity.",
    "link": "https://en.wikipedia.org/wiki/ChatGPT"
  },
  {
    "id": "tech-013",
    "title": "Facebook Acquires Instagram",
    "category": "Social Media",
    "date": "2012-04-09",
    "location": {
      "lat": 37.4848,
      "lng": -122.1484
    },
    "description": "Facebook announced the acquisition of photo-sharing app Instagram for $1 billion.",
    "link": "https://en.wikipedia.org/wiki/Instagram"
  },
  {
    "id": "tech-014",
    "title": "Launch of Windows 95",
    "category": "Computing",
    "date": "1995-08-24",
    "location": {
      "lat": 47.6426,
      "lng": -122.1391
    },
    "description": "Microsoft released Windows 95, introducing the Start Menu and revolutionizing personal computing.",
    "link": "https://en.wikipedia.org/wiki/Windows_95"
  },
  {
    "id": "tech-015",
    "title": "Google Buys YouTube",
    "category": "Internet",
    "date": "2006-11-13",
    "location": {
      "lat": 37.4220,
      "lng": -122.0841
    },
    "description": "Google completed its $1.65 billion acquisition of YouTube, the leading online video platform.",
    "link": "https://en.wikipedia.org/wiki/YouTube"
  }
];


export default events;