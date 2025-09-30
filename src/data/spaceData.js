// src/data/spaceData.js

const spaceData = {
  "Solar System": {
    subtopics: {
      Sun: {
        title: "☀️ Sun",
        image: "https://solarsystem.nasa.gov/system/stellar_items/image_files/2_sun_480x320.jpg",
        definition: `The Sun is a massive ball of hot gases at the center of our Solar System. It provides light, heat, and energy essential for life on Earth. It is mostly made of hydrogen and helium and has been shining for around 4.5 billion years. The Sun’s gravity keeps all the planets in orbit.`,
        facts: [
          "The Sun accounts for 99.8% of the Solar System's mass.",
          "Sunlight takes about 8 minutes to reach Earth.",
          "It is a yellow dwarf star."
        ],
        quiz: [
          { q: "What is the Sun mostly made of?", options: ["Iron", "Hydrogen & Helium", "Carbon"], answer: "Hydrogen & Helium" },
          { q: "How old is the Sun?", options: ["1 billion years", "4.5 billion years", "100 million years"], answer: "4.5 billion years" },
          { q: "How long does sunlight take to reach Earth?", options: ["8 minutes", "1 hour", "8 seconds"], answer: "8 minqutes" },
          { q: "What type of star is the Sun?", options: ["Blue Giant", "Yellow Star", "Red Dwarf"], answer: "Yellow Star" },
          { q: "What percentage of Solar System mass is the Sun?", options: ["50%", "75%", "99.8%"], answer: "99.8%" }
        ]
      },

      Mercury: {
        title: "☿ Mercury",
        image: "https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png",
        definition: `Mercury is the closest planet to the Sun and the smallest in our Solar System. It has almost no atmosphere, so temperatures swing from very hot in daytime to extremely cold at night. A year on Mercury is just 88 Earth days.`,
        facts: [
          "Mercury has no moons.",
          "It completes its orbit faster than any other planet.",
          "Surface temperatures range from -173°C to 427°C."
        ],
        quiz: [
          { q: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth"], answer: "Mercury" },
          { q: "How many moons does Mercury have?", options: ["0", "1", "2"], answer: "0" },
          { q: "How long is a year on Mercury?", options: ["88 days", "365 days", "200 days"], answer: "88 days" },
          { q: "Does Mercury have an atmosphere?", options: ["Yes", "No"], answer: "No" },
          { q: "What is Mercury’s size compared to?", options: ["The Moon", "Earth", "Jupiter"], answer: "The Moon" }
        ]
      },

      Venus: {
        title: "♀️ Venus",
        image: "https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png",
        definition: `Venus is the second planet from the Sun and is the hottest planet because of its thick atmosphere full of carbon dioxide that traps heat. It is often called Earth’s twin because it is similar in size and structure.`,
        facts: [
          "Venus rotates backward compared to most planets.",
          "A day on Venus is longer than its year.",
          "It is hotter than Mercury even though it is farther from the Sun."
        ],
        quiz: [
          { q: "Which planet is called Earth’s twin?", options: ["Mars", "Venus", "Jupiter"], answer: "Venus" },
          { q: "Why is Venus hotter than Mercury?", options: ["Closer to Sun", "Thick atmosphere", "More volcanoes"], answer: "Thick atmosphere" },
          { q: "How many moons does Venus have?", options: ["0", "1", "2"], answer: "0" },
          { q: "What is longer on Venus?", options: ["Day", "Year"], answer: "Day" },
          { q: "What direction does Venus rotate?", options: ["Forward", "Backward"], answer: "Backward" }
        ]
      },

      Earth: {
        title: "🌍 Earth",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
        definition: `Earth is the third planet from the Sun and the only known planet to support life. It has air, water, and suitable temperature. It rotates once every 24 hours and takes 365 days to orbit the Sun.`,
        facts: [
          "71% of Earth is covered with water.",
          "It has one natural satellite, the Moon.",
          "Earth’s magnetic field protects life from harmful solar radiation."
        ],
        quiz: [
          { q: "Which planet is known as the Blue Planet?", options: ["Earth", "Neptune", "Venus"], answer: "Earth" },
          { q: "How many natural satellites does Earth have?", options: ["0", "1", "2"], answer: "1" },
          { q: "What percentage of Earth is water?", options: ["50%", "71%", "90%"], answer: "71%" },
          { q: "How many hours are in a day on Earth?", options: ["12", "24", "48"], answer: "24" },
          { q: "What protects Earth from solar radiation?", options: ["Magnetosphere", "Clouds", "Mountains"], answer: "Magnetosphere" }
        ]
      },

      Mars: {
        title: "♂️ Mars",
        image: "https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png",
        definition: `Mars is the fourth planet from the Sun, called the Red Planet because of its reddish surface due to iron oxide. Scientists study Mars for signs of past water and possible future colonization.`,
        facts: [
          "Mars has two moons: Phobos and Deimos.",
          "It has the largest volcano in the Solar System, Olympus Mons.",
          "Mars once had flowing water."
        ],
        quiz: [
          { q: "Which planet is called the Red Planet?", options: ["Earth", "Mars", "Venus"], answer: "Mars" },
          { q: "How many moons does Mars have?", options: ["0", "1", "2"], answer: "2" },
          { q: "What is the name of Mars’ largest volcano?", options: ["Mount Everest", "Olympus Mons", "Mauna Kea"], answer: "Olympus Mons" },
          { q: "Did Mars once have water?", options: ["Yes", "No"], answer: "Yes" },
          { q: "Which rover landed on Mars in 2021?", options: ["Curiosity", "Perseverance", "Spirit"], answer: "Perseverance" }
        ]
      },

      Jupiter: {
        title: "♃ Jupiter",
        image: "https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png",
        definition: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant made mostly of hydrogen and helium. It has a giant storm called the Great Red Spot and dozens of moons.`,
        facts: [
          "Jupiter has 95 known moons.",
          "It is 318 times more massive than Earth.",
          "Its Great Red Spot is a storm larger than Earth."
        ],
        quiz: [
          { q: "Which planet is the largest in the Solar System?", options: ["Saturn", "Jupiter", "Neptune"], answer: "Jupiter" },
          { q: "What is Jupiter mostly made of?", options: ["Hydrogen & Helium", "Carbon", "Oxygen"], answer: "Hydrogen & Helium" },
          { q: "What is the name of Jupiter's giant storm?", options: ["Great White Spot", "Great Red Spot", "Big Eye"], answer: "Great Red Spot" },
          { q: "How many moons does Jupiter have?", options: ["79", "95", "67"], answer: "95" },
          { q: "Which planet is known as a Gas Giant?", options: ["Mars", "Jupiter", "Venus"], answer: "Jupiter" }
        ]
      },

      Saturn: {
        title: "♄ Saturn",
        image: "https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png",
        definition: `Saturn is the sixth planet from the Sun, famous for its beautiful rings made of ice and rock. It is a gas giant composed mainly of hydrogen and helium.`,
        facts: [
          "Saturn has at least 83 moons.",
          "Its rings are over 280,000 km wide.",
          "It is the least dense planet; it could float in water."
        ],
        quiz: [
          { q: "Which planet is famous for its rings?", options: ["Saturn", "Jupiter", "Uranus"], answer: "Saturn" },
          { q: "What is Saturn mostly made of?", options: ["Hydrogen & Helium", "Nitrogen", "Oxygen"], answer: "Hydrogen & Helium" },
          { q: "How many moons does Saturn have?", options: ["50", "83", "95"], answer: "83" },
          { q: "Can Saturn float in water?", options: ["Yes", "No"], answer: "Yes" },
          { q: "Which planet is a Gas Giant?", options: ["Saturn", "Mars", "Earth"], answer: "Saturn" }
        ]
      },

      Uranus: {
        title: "♅ Uranus",
        image: "https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png",
        definition: `Uranus is the seventh planet from the Sun. It is an ice giant with a blue-green color due to methane gas. Unlike other planets, it rotates on its side.`,
        facts: [
          "Uranus has 27 known moons.",
          "It rotates on its side, almost perpendicular to its orbit.",
          "It takes 84 Earth years to orbit the Sun."
        ],
        quiz: [
          { q: "Which planet rotates on its side?", options: ["Uranus", "Neptune", "Saturn"], answer: "Uranus" },
          { q: "What gives Uranus its blue-green color?", options: ["Water", "Methane", "Oxygen"], answer: "Methane" },
          { q: "How many moons does Uranus have?", options: ["27", "14", "30"], answer: "27" },
          { q: "How long does Uranus take to orbit the Sun?", options: ["84 years", "100 years", "50 years"], answer: "84 years" },
          { q: "Is Uranus a Gas or Ice Giant?", options: ["Gas Giant", "Ice Giant"], answer: "Ice Giant" }
        ]
      },

      Neptune: {
        title: "♆ Neptune",
        image: "https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png",
        definition: `Neptune is the eighth and farthest known planet from the Sun. It is an ice giant with strong winds and storms. It appears blue due to methane in its atmosphere.`,
        facts: [
          "Neptune has 14 known moons.",
          "It has the fastest winds in the Solar System.",
          "Discovered in 1846 by Johann Galle."
        ],
        quiz: [
          { q: "Which planet is the farthest from the Sun?", options: ["Uranus", "Neptune", "Pluto"], answer: "Neptune" },
          { q: "Why does Neptune appear blue?", options: ["Oxygen", "Methane", "Water"], answer: "Methane" },
          { q: "How many moons does Neptune have?", options: ["14", "10", "27"], answer: "14" },
          { q: "When was Neptune discovered?", options: ["1846", "1900", "1781"], answer: "1846" },
          { q: "Which planet has the fastest winds?", options: ["Neptune", "Jupiter", "Saturn"], answer: "Neptune" }
        ]
      },
      // Add these under Solar System -> subtopics

"Earth's Moon": {
  title: "🌕 Earth's Moon",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
  definition: `Earth's Moon is the fifth-largest natural satellite in the Solar System. It affects tides on Earth and has phases based on its orbit around our planet. Humans first landed on the Moon in 1969 during Apollo 11.`,
  facts: [
    "The Moon is about 384,400 km away from Earth.",
    "It has no atmosphere, so temperatures vary widely.",
    "Apollo missions brought back Moon rocks to Earth."
  ],
  quiz: [
    { q: "When did humans first land on the Moon?", options: ["1969", "1959", "1972"], answer: "1969" },
    { q: "How far is the Moon from Earth?", options: ["150,000 km", "384,400 km", "500,000 km"], answer: "384,400 km" },
    { q: "Does the Moon have an atmosphere?", options: ["Yes", "No"], answer: "No" },
    { q: "What effect does the Moon have on Earth?", options: ["Tides", "Weather", "Earthquakes"], answer: "Tides" },
    { q: "Which Apollo mission first landed humans on the Moon?", options: ["Apollo 11", "Apollo 13", "Apollo 8"], answer: "Apollo 11" }
  ]
},

"Phobos & Deimos": {
  title: "Phobos & Deimos (Mars Moons)",
  image: "https://solarsystem.nasa.gov/system/feature_items/images/13_phobos.jpg",
  definition: `Phobos and Deimos are the two small, irregularly shaped moons of Mars. Phobos is slowly spiraling towards Mars, and Deimos orbits farther away. They are believed to be captured asteroids.`,
  facts: [
    "Phobos orbits Mars three times a day.",
    "Deimos takes about 30 hours to orbit Mars.",
    "Both moons are irregular in shape and very small."
  ],
  quiz: [
    { q: "Which planet do Phobos and Deimos orbit?", options: ["Earth", "Mars", "Jupiter"], answer: "Mars" },
    { q: "Which moon orbits Mars faster?", options: ["Phobos", "Deimos"], answer: "Phobos" },
    { q: "What are Phobos and Deimos believed to be?", options: ["Captured asteroids", "Planets", "Comets"], answer: "Captured asteroids" },
    { q: "How many moons does Mars have?", options: ["1", "2", "3"], answer: "2" },
    { q: "Are Phobos & Deimos spherical?", options: ["Yes", "No"], answer: "No" }
  ]
},

"Europa": {
  title: "Europa (Jupiter Moon)",
  image: "https://solarsystem.nasa.gov/system/feature_items/images/4_europa.png",
  definition: `Europa is one of Jupiter's largest moons and is covered with ice. Scientists believe there is a subsurface ocean under the ice, which could potentially harbor life.`,
  facts: [
    "Europa is slightly smaller than Earth's Moon.",
    "Its surface is mostly ice with cracks and ridges.",
    "It may have a liquid ocean beneath the ice."
  ],
  quiz: [
    { q: "Which planet does Europa orbit?", options: ["Jupiter", "Saturn", "Mars"], answer: "Jupiter" },
    { q: "What covers Europa's surface?", options: ["Rock", "Ice", "Sand"], answer: "Ice" },
    { q: "Could Europa have life?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Is Europa larger than Earth's Moon?", options: ["Yes", "No"], answer: "No" },
    { q: "What is beneath Europa’s ice?", options: ["Lava", "Ocean", "Desert"], answer: "Ocean" }
  ]
},

"Io": {
  title: "Io (Jupiter Moon)",
  image: "https://solarsystem.nasa.gov/system/feature_items/images/5_io.png",
  definition: `Io is the most volcanically active body in the Solar System. Its surface is dotted with hundreds of volcanoes, some erupting lava fountains dozens of kilometers high.`,
  facts: [
    "Io’s volcanoes are powered by tidal heating from Jupiter.",
    "It has colorful surface due to sulfur compounds.",
    "Io has no atmosphere to speak of."
  ],
  quiz: [
    { q: "Which planet does Io orbit?", options: ["Jupiter", "Saturn", "Mars"], answer: "Jupiter" },
    { q: "What is Io famous for?", options: ["Volcanic activity", "Ice", "Mountains"], answer: "Volcanic activity" },
    { q: "Why are Io’s volcanoes active?", options: ["Solar heat", "Tidal heating", "Atmospheric pressure"], answer: "Tidal heating" },
    { q: "Does Io have an atmosphere?", options: ["Yes", "No"], answer: "No" },
    { q: "What gives Io its colorful surface?", options: ["Iron", "Sulfur compounds", "Water"], answer: "Sulfur compounds" }
  ]
},

"Ganymede": {
  title: "Ganymede (Jupiter Moon)",
  image: "https://solarsystem.nasa.gov/system/feature_items/images/6_ganymede.png",
  definition: `Ganymede is the largest moon in the Solar System and even bigger than Mercury. It has a magnetic field, ice-covered surface, and possibly a subsurface ocean.`,
  facts: [
    "Ganymede is larger than Mercury.",
    "It has its own magnetic field.",
    "It may contain a subsurface ocean."
  ],
  quiz: [
    { q: "Which planet does Ganymede orbit?", options: ["Jupiter", "Saturn", "Mars"], answer: "Jupiter" },
    { q: "Is Ganymede bigger than Mercury?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Does Ganymede have a magnetic field?", options: ["Yes", "No"], answer: "Yes" },
    { q: "What covers Ganymede’s surface?", options: ["Ice", "Lava", "Sand"], answer: "Ice" },
    { q: "Could Ganymede have a subsurface ocean?", options: ["Yes", "No"], answer: "Yes" }
  ]
},

"Callisto": {
  title: "Callisto (Jupiter Moon)",
  image: "https://solarsystem.nasa.gov/system/feature_items/images/7_callisto.png",
  definition: `Callisto is the second-largest moon of Jupiter. Its surface is heavily cratered and very old. It may also have a subsurface ocean beneath its icy crust.`,
  facts: [
    "Callisto has a very ancient surface with many impact craters.",
    "It is less geologically active than other Galilean moons.",
    "It may have a liquid ocean under the ice."
  ],
  quiz: [
    { q: "Which planet does Callisto orbit?", options: ["Jupiter", "Saturn", "Mars"], answer: "Jupiter" },
    { q: "What is Callisto's surface like?", options: ["Smooth", "Heavily cratered", "Volcanic"], answer: "Heavily cratered" },
    { q: "Is Callisto geologically active?", options: ["Yes", "No"], answer: "No" },
    { q: "Could Callisto have an ocean under ice?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Which moon is larger: Ganymede or Callisto?", options: ["Ganymede", "Callisto"], answer: "Ganymede" }
  ]
},

"Titan": {
  title: "Titan (Saturn Moon)",
  image: "https://solarsystem.nasa.gov/system/feature_items/images/8_titan.png",
  definition: `Titan is Saturn’s largest moon and has a thick nitrogen-rich atmosphere. It has lakes and rivers of liquid methane and ethane on its surface.`,
  facts: [
    "Titan is larger than Mercury.",
    "It has a dense atmosphere, mostly nitrogen.",
    "There are liquid methane lakes on the surface."
  ],
  quiz: [
    { q: "Which planet does Titan orbit?", options: ["Saturn", "Jupiter", "Mars"], answer: "Saturn" },
    { q: "What is Titan’s atmosphere mostly made of?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: "Nitrogen" },
    { q: "Does Titan have liquid on its surface?", options: ["Yes, methane", "No", "Yes, water"], answer: "Yes, methane" },
    { q: "Is Titan larger than Mercury?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Has Titan been visited by a spacecraft?", options: ["Yes", "No"], answer: "Yes" }
  ]
},

"Enceladus": {
  title: "Enceladus (Saturn Moon)",
  image: "https://solarsystem.nasa.gov/system/feature_items/images/9_enceladus.png",
  definition: `Enceladus is a small icy moon of Saturn. It has geysers that eject water and ice into space, suggesting a subsurface ocean that could potentially harbor life.`,
  facts: [
    "Enceladus is relatively small but very reflective.",
    "It has water-ice geysers from its south pole.",
    "It may have a subsurface ocean."
  ],
  quiz: [
    { q: "Which planet does Enceladus orbit?", options: ["Saturn", "Jupiter", "Mars"], answer: "Saturn" },
    { q: "What does Enceladus eject?", options: ["Lava", "Water & ice", "Gas"], answer: "Water & ice" },
    { q: "Could Enceladus have life?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Is Enceladus large or small?", options: ["Large", "Small"], answer: "Small" },
    { q: "What covers Enceladus’ surface?", options: ["Ice", "Rock", "Sand"], answer: "Ice" }
  ]
},

"Triton": {
  title: "Triton (Neptune Moon)",
  image: "https://solarsystem.nasa.gov/system/feature_items/images/31_triton.png",
  definition: `Triton is Neptune’s largest moon and has a retrograde orbit, meaning it orbits Neptune backward. It has geysers, a thin atmosphere, and a very cold surface.`,
  facts: [
    "Triton has nitrogen geysers.",
    "Its orbit is retrograde around Neptune.",
    "Surface temperature is around -235°C."
  ],
  quiz: [
    { q: "Which planet does Triton orbit?", options: ["Neptune", "Uranus", "Saturn"], answer: "Neptune" },
    { q: "Does Triton orbit normally or retrograde?", options: ["Normally", "Retrograde"], answer: "Retrograde" },
    { q: "What type of geysers does Triton have?", options: ["Water", "Nitrogen", "Lava"], answer: "Nitrogen" },
    { q: "Is Triton hot or cold?", options: ["Hot", "Very cold"], answer: "Very cold" },
    { q: "Is Triton Neptune’s largest moon?", options: ["Yes", "No"], answer: "Yes" }
  ]
},
// Add these under Solar System -> subtopics

  Asteroids: {
  title: "Asteroids & Asteroid Belt",
  image: "https://solarsystem.nasa.gov/system/feature_items/images/18_asteroid-belt.jpg",
  definition: `Asteroids are rocky objects that orbit the Sun, mostly found between Mars and Jupiter in the Asteroid Belt. They vary in size from tiny rocks to hundreds of kilometers across.`,
  facts: [
    "The Asteroid Belt contains millions of asteroids.",
    "Ceres, the largest object in the belt, is a dwarf planet.",
    "Some asteroids pass close to Earth, called Near-Earth Objects."
  ],
  quiz: [
    { q: "Where is the Asteroid Belt located?", options: ["Between Mars & Jupiter", "Between Earth & Mars", "Beyond Neptune"], answer: "Between Mars & Jupiter" },
    { q: "What is the largest asteroid/dwarf planet in the belt?", options: ["Vesta", "Ceres", "Pallas"], answer: "Ceres" },
    { q: "Can asteroids come near Earth?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Are all asteroids the same size?", options: ["Yes", "No"], answer: "No" },
    { q: "What are asteroids made of?", options: ["Rock & metal", "Ice only", "Gas"], answer: "Rock & metal" }
  ]
},

Comets: {
  title: "Comets",
  image: "https://solarsystem.nasa.gov/system/feature_items/images/25_hale-bopp.jpg",
  definition: `Comets are icy bodies that orbit the Sun. When they approach the Sun, heat causes ice and dust to form a glowing coma and a tail that points away from the Sun.`,
  facts: [
    "Comets are often called 'dirty snowballs'.",
    "Halley's Comet is visible from Earth every 76 years.",
    "Comet tails always point away from the Sun."
  ],
  quiz: [
    { q: "What are comets made of?", options: ["Ice & dust", "Rock", "Gas only"], answer: "Ice & dust" },
    { q: "What forms the comet's tail?", options: ["Solar heat & wind", "Gravity", "Atmosphere"], answer: "Solar heat & wind" },
    { q: "How often does Halley's Comet appear?", options: ["76 years", "100 years", "50 years"], answer: "76 years" },
    { q: "Do comet tails always point towards the Sun?", options: ["Yes", "No"], answer: "No" },
    { q: "Comets are sometimes called what?", options: ["Ice planets", "Dirty snowballs", "Shooting stars"], answer: "Dirty snowballs" }
  ]
},

Meteors: {
  title: "Meteors, Meteorites & Meteoroids",
  image: "https://solarsystem.nasa.gov/system/feature_items/images/12_meteor-shower.jpg",
  definition: `Meteoroids are small rocky or metallic bodies in space. When they enter Earth's atmosphere, they burn up and appear as a shooting star, called a meteor. If they reach Earth’s surface, they are meteorites.`,
  facts: [
    "Meteor showers occur when Earth passes through debris from comets.",
    "Meteoroids can be very small or several meters wide.",
    "Meteorites give clues about the early Solar System."
  ],
  quiz: [
    { q: "What is a meteoroid in space?", options: ["Large planet", "Small rock/metal", "Gas cloud"], answer: "Small rock/metal" },
    { q: "What is a meteor?", options: ["Space rock in orbit", "Burning rock entering atmosphere", "Comet tail"], answer: "Burning rock entering atmosphere" },
    { q: "What is a meteorite?", options: ["Burning in sky", "Rock on Earth", "Comet fragment"], answer: "Rock on Earth" },
    { q: "When do meteor showers occur?", options: ["During full moon", "When Earth passes comet debris", "Every day"], answer: "When Earth passes comet debris" },
    { q: "Do meteoroids vary in size?", options: ["Yes", "No"], answer: "Yes" }
  ]
},

"Kuiper Belt & Oort Cloud": {
  title: "Kuiper Belt & Oort Cloud",
  image: "https://solarsystem.nasa.gov/system/feature_items/images/17_kbo.jpg",
  definition: `The Kuiper Belt is a region beyond Neptune filled with icy bodies, including dwarf planets like Pluto. The Oort Cloud is a distant spherical shell of icy objects, believed to be the source of long-period comets.`,
  facts: [
    "Pluto, Haumea, and Makemake are Kuiper Belt objects.",
    "The Oort Cloud may extend up to 100,000 AU from the Sun.",
    "Both regions contain remnants from Solar System formation."
  ],
  quiz: [
    { q: "Where is the Kuiper Belt?", options: ["Beyond Neptune", "Between Mars & Jupiter", "Near Earth"], answer: "Beyond Neptune" },
    { q: "Which dwarf planet is in the Kuiper Belt?", options: ["Ceres", "Pluto", "Earth"], answer: "Pluto" },
    { q: "What is the Oort Cloud?", options: ["Asteroid belt", "Distant icy region", "Planetary ring"], answer: "Distant icy region" },
    { q: "Do Kuiper Belt & Oort Cloud contain Solar System remnants?", options: ["Yes", "No"], answer: "Yes" },
    { q: "Which region is farther from the Sun?", options: ["Kuiper Belt", "Oort Cloud"], answer: "Oort Cloud" }
  ]
}


      // Add Dwarf Planets, Major Moons, Asteroids, Comets, Kuiper Belt, Oort Cloud in same format if needed
    }
  },
  // Stars main topic
Stars: {
  title: "✨ Stars",
  subtopics: {
    "Formation of Stars": {
      title: "Formation of Stars (Nebula → Protostar → Main Sequence)",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Eagle_nebula_pillars.jpg",
      definition: `Stars begin their life in giant clouds of gas and dust called nebulae. Gravity pulls the material together, forming a protostar. When nuclear fusion begins, the star enters the main sequence phase, shining for billions of years.`,
      facts: [
        "The Sun is in its main sequence stage.",
        "Nebulae are often called 'stellar nurseries'.",
        "Protostars can take millions of years to form."
      ],
      quiz: [
        { q: "Where do stars form?", options: ["Nebulae", "Black holes", "Asteroids"], answer: "Nebulae" },
        { q: "What is a protostar?", options: ["Dying star", "Forming star", "Planet"], answer: "Forming star" },
        { q: "What process powers stars?", options: ["Nuclear fusion", "Combustion", "Gravity"], answer: "Nuclear fusion" },
        { q: "Which phase is the Sun in?", options: ["Main sequence", "Red giant", "White dwarf"], answer: "Main sequence" },
        { q: "How long can star formation take?", options: ["Years", "Millions of years", "Days"], answer: "Millions of years" }
      ]
    },

    "Types of Stars": {
      title: "Types of Stars",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Star_types.png",
      definition: `Stars come in many types based on size, color, and temperature. The smallest are red dwarfs, while the largest are blue giants. Our Sun is a yellow star.`,
      facts: [
        "Red dwarfs are the most common stars in the galaxy.",
        "Blue stars are the hottest, while red stars are the coolest.",
        "White dwarfs are dead stars, the remains of smaller stars."
      ],
      quiz: [
        { q: "What type of star is the Sun?", options: ["Blue giant", "Red dwarf", "Yellow star"], answer: "Yellow star" },
        { q: "Which stars are hottest?", options: ["Blue", "Red", "Yellow"], answer: "Blue" },
        { q: "Which stars are the most common?", options: ["Red dwarfs", "Blue giants", "Yellow stars"], answer: "Red dwarfs" },
        { q: "What are white dwarfs?", options: ["Dead stars", "Young stars", "Massive stars"], answer: "Dead stars" },
        { q: "Which stars live the longest?", options: ["Red dwarfs", "Blue giants", "Supernova stars"], answer: "Red dwarfs" }
      ]
    },

    "Life Cycle of Stars": {
      title: "Life Cycle of Stars",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Star_Life_Cycle_Chart.png",
      definition: `Stars go through stages depending on their size. Small stars like the Sun become red giants and then white dwarfs. Massive stars become supernovae and may form neutron stars or black holes.`,
      facts: [
        "The Sun will eventually become a red giant.",
        "Supernovae create elements like gold and iron.",
        "Black holes form from the death of very massive stars."
      ],
      quiz: [
        { q: "What will the Sun become at the end of its life?", options: ["Neutron star", "Red giant then white dwarf", "Black hole"], answer: "Red giant then white dwarf" },
        { q: "What is a supernova?", options: ["Birth of a star", "Explosion of a star", "Cold star"], answer: "Explosion of a star" },
        { q: "What do massive stars form after death?", options: ["Neutron stars/Black holes", "Comets", "Asteroids"], answer: "Neutron stars/Black holes" },
        { q: "What elements are formed in supernovae?", options: ["Gold & iron", "Oxygen & hydrogen", "Helium only"], answer: "Gold & iron" },
        { q: "Do all stars end the same way?", options: ["Yes", "No"], answer: "No" }
      ]
    },
    
  }
}

};

export default spaceData;