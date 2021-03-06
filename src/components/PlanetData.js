const planetData = [
  //  The Planet Data is passed to Main.js and down further [main.js is inside the main   folder], For Futher Details Please Check the Architecture
  //////////////////////////////////////////////////////////////////////////////////
  //////// Mercury

  {
    planetName: "mercury",
    overviewImg: "assets/planet-mercury.svg",
    overviewTxt: `Mercury is the smallest planet in the Solar System and the closest
                   to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
                   shortest of all the Sun's planets. Mercury is one of four
                   terrestrial planets in the Solar System, and is a rocky body like  Earth`,
    overViewHref: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    internalImg: "assets/planet-mercury-internal.svg",
    internalTxt: `Mercury appears to have a solid silicate crust and mantle overlying 
                  a solid,iron sulfide outer core layer,a deeper liquid core layer, and a solid inner core. he planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density. `,
    internalHref:
      "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
    surfaceImg: "assets/planet-mercury.svg",
    surfaceImgExtra: "assets/geology-mercury.png",
    surfaceTxt: `Mercury's surface is similar in appearance to that of the Moon,showing
                 extensive mare-like plains and heavy cratering, indicating that it has been
                 geologically inactive for billions of years. It is more heterogeneous than
                 either Mars's or the Moon’s`,
    surfaceHref:
      "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
    rotationTime: "58.6 Days",
    revolutionTime: "87.97 Days",
    radius: "2,439.7 KM",
    averageTemp: "430°c",
  },

  //////////////////////////////////////////////////////////////////////////////////
  //////// Venus

  {
    planetName: "venus",
    overviewImg: "assets/planet-venus.svg",
    overviewTxt: `Venus is the second planet from the Sun. It is named after the 
                  Roman goddess of love and beauty. As the brightest natural object 
                  in Earth's night sky after the Moon, Venus can cast shadows and 
                  can be, on rare occasions, visible to the naked eye in broad daylight.`,
    overViewHref: "https://en.wikipedia.org/wiki/Venus",
    internalImg: "assets/planet-venus-internal.svg",
    internalTxt: `The similarity in size and density between Venus and Earth suggests 
                  they share a similar internal structure: a core, mantle, and crust. 
                  Like that of Earth, Venusian core is most likely at least partially 
                  liquid because the two planets have been cooling at about the same rate. `,
    internalHref: "https://en.wikipedia.org/wiki/Venus#Internal_structure",
    surfaceImg: "assets/planet-venus.svg",
    surfaceImgExtra: "assets/geology-venus.png",
    surfaceTxt: `Much of the Venusian surface appears to have been shaped by  volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.`,
    surfaceHref: " https://en.wikipedia.org/wiki/Venus#Surface_geology ",
    rotationTime: "243 Days",
    revolutionTime: " 224.7  Days",
    radius: "6,051.8 KM",
    averageTemp: "471°c",
  },

  //////////////////////////////////////////////////////////////////////////////////
  //////// Earth

  {
    planetName: "earth",
    overviewImg: "assets/planet-earth.svg",
    overviewTxt: `Third planet from the Sun and the only known planet to harbor life. 
                  About 29.2% of Earth's surface is land with remaining 70.8% is 
                  covered with water. Earth's distance from the Sun, physical properties 
                  and geological history have allowed life to evolve and thrive..`,
    overViewHref: "https://en.wikipedia.org/wiki/earth",
    internalImg: "assets/planet-earth-internal.svg",
    internalTxt: `Earth's interior, like that of the other terrestrial planets, is divided 
                   into layers by their chemical or physical (rheological) properties. The 
                   outer layer is a chemically distinct silicate solid crust, which is 
                   underlain by a highly viscous solid mantle.
  `,
    internalHref: "https://en.wikipedia.org/wiki/earth#Internal_structure",
    surfaceImg: "assets/planet-earth.svg",
    surfaceImgExtra: "assets/geology-earth.png",
    surfaceTxt: ` The total surface area of Earth is about 510 million km2. The continental  crust consists of lower density material such as the igneous rocks granite  and andesite. Less common is basalt, a denser volcanic rock that is the 
    primary constituent of the ocean floors.`,
    surfaceHref: " https://en.wikipedia.org/wiki/earth#Surface_geology ",
    rotationTime: "0.99Days",
    revolutionTime: "365 Days",
    radius: " 6,371 KM",
    averageTemp: "16°c",
  },

  //////////////////////////////////////////////////////////////////////////////////
  //////// Mars

  {
    planetName: "mars",
    overviewImg: "assets/planet-mars.svg",
    overviewTxt: `Mars is the fourth planet from the Sun and the second-smallest planet 
                  in the Solar System, being larger than only Mercury. In English, Mars 
                  carries the name of the Roman god of war and is often referred to as 
                  the "Red Planet".`,
    overViewHref: "https://en.wikipedia.org/wiki/mars",
    internalImg: "assets/planet-mars-internal.svg",
    internalTxt: ` Like Earth, Mars has differentiated into a dense metallic core overlaid 
                    by less dense materials. Scientists initially determined that the core 
                    is at least partially liquid. Current models of its interior imply a 
                    core consisting primarily of iron and nickel with about 16–17% sulfur.
  `,
    internalHref: "https://en.wikipedia.org/wiki/mars#Internal_structure",
    surfaceImg: "assets/planet-mars.svg",
    surfaceImgExtra: "assets/geology-mars.png",
    surfaceTxt: `Mars is a terrestrial planet whose surface consists ofminerals containing 
    silicon and oxygen, metals, and other elements that typically make up rock. 
    The surface is primarily composed of tholeiitic basalt, although parts are 
    more silica-rich than typical basalt.`,
    surfaceHref: " https://en.wikipedia.org/wiki/mars#Surface_geology ",
    rotationTime: "1.03 Days",
    revolutionTime: "1.88 Days",
    radius: " 3,389.5 KM",
    averageTemp: "-28°c",
  },

  //////////////////////////////////////////////////////////////////////////////////
  //////// Jupitar

  {
    planetName: "jupiter",
    overviewImg: "assets/planet-jupiter.svg",
    overviewTxt: `  Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other 
    planets in the Solar System combined, but less than one-thousandth the mass 
    of the Sun..`,
    overViewHref: "https://en.wikipedia.org/wiki/jupiter",
    internalImg: "assets/planet-jupiter-internal.svg",
    internalTxt: ` When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of 
    about ten Earth masses a few million years after Jupiter's formation, which 
    would have disrupted an originally solid Jovian core.
  `,
    internalHref: "https://en.wikipedia.org/wiki/jupiter#Internal_structure",
    surfaceImg: "assets/planet-jupiter.svg",
    surfaceImgExtra: "assets/geology-jupiter.png",
    surfaceTxt: `The best known feature of Jupiter is the Great Red Spot, a persistent 
    anticyclonic storm located 22° south of the equator. It is known to have 
    existed since at least 1831, and possibly since 1665.`,
    surfaceHref: " https://en.wikipedia.org/wiki/jupiter#Surface_geology ",
    rotationTime: "9.93 Hours",
    revolutionTime: "11.86 Years",
    radius: "69,911 KM",
    averageTemp: "-108°c",
  },

  //////////////////////////////////////////////////////////////////////////////////
  //////// Satrun

  {
    planetName: "saturn",
    overviewImg: "assets/planet-saturn.svg",
    overviewTxt: `  Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about 
    nine and a half times that of Earth. It only has one-eighth the average 
    density of Earth.`,
    overViewHref: "https://en.wikipedia.org/wiki/saturn",
    internalImg: "assets/planet-saturn-internal.svg",
    internalTxt: `  Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid 
    when the density is above 0.01 g/cm3, which is reached at a radius 
    containing 99.9% of Saturn's mass.
  `,
    internalHref: "https://en.wikipedia.org/wiki/saturn#Internal_structure",
    surfaceImg: "assets/planet-saturn.svg",
    surfaceImgExtra: "assets/geology-saturn.png",
    surfaceTxt: `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25%  helium by volume. The planet's most famous feature is its prominent ring 
    system, which is composed mostly of ice particles with a smaller amount 
    of rocky debris and dust. 
  `,
    surfaceHref: " https://en.wikipedia.org/wiki/saturn#Surface_geology ",
    rotationTime: "  10.8 Hours",
    revolutionTime: "29.46 Years",
    radius: "58,232 KM",
    averageTemp: " -138°c",
  },

  //////////////////////////////////////////////////////////////////////////////////
  //////// Uranus

  {
    planetName: "uranus",
    overviewImg: "assets/planet-uranus.svg",
    overviewTxt: ` Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary 
    mass in the Solar System.`,
    overViewHref: "https://en.wikipedia.org/wiki/uranus",
    internalImg: "assets/planet-uranus-internal.svg",
    internalTxt: ` The standard model of Uranus's structure is that it consists of three layers: a  rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and  an outer gaseous hydrogen/helium envelope. The core is relatively small, with a  mass of only 0.55 Earth masses.
  `,
    internalHref: "https://en.wikipedia.org/wiki/uranus#Internal_structure",
    surfaceImg: "assets/planet-uranus.svg",
    surfaceImgExtra: "assets/geology-uranus.png",
    surfaceTxt: ` The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.
  `,
    surfaceHref: " https://en.wikipedia.org/wiki/uranus#Surface_geology ",
    rotationTime: "17.2 Hours",
    revolutionTime: "84 Years",
    radius: "  25,362 KM",
    averageTemp: "-195°c",
  },

  //////////////////////////////////////////////////////////////////////////////////
  //////// Neptune
  {
    planetName: "neptune",
    overviewImg: "assets/planet-neptune.svg",
    overviewTxt: `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet,  and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`,
    overViewHref: "https://en.wikipedia.org/wiki/neptune",
    internalImg: "assets/planet-neptune-internal.svg",
    internalTxt: `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5%  to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.
  `,
    internalHref: "https://en.wikipedia.org/wiki/neptune#Internal_structure",
    surfaceImg: "assets/planet-neptune.svg",
    surfaceImgExtra: "assets/geology-neptune.png",
    surfaceTxt: ` Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also  present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in  the red and infrared portion of the spectrum.
  `,
    surfaceHref: " https://en.wikipedia.org/wiki/neptune#Surface_geology ",
    rotationTime: "16.08 Hours",
    revolutionTime: "164.79 Years",
    radius: "24,622 KM",
    averageTemp: "-201°c",
  },
];

export default planetData;
