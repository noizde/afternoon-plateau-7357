function AreaCtrl($scope) {

  $scope.areasNationwide = {
    "name": "Nationwide",
    "branches": [{
        "name": "Human Nature",
        "text": "Our super pro-Philippines, pro-poor, pro-environment partner",
        "link": "http://humanheartnature.com/buy/find-a-store"
      },{
        "name": "Bo's Coffee",
        "text": "Your homegrown brew.",
        "link": "http://www.boscoffee.com/"
      },{
        "name": "FamilyMart",
        "text": "If the line for #unliTwirl is too long, you know what else you can buy from there.",
        "link": "https://www.facebook.com/familymartph?fref=ts"
      },{
        "name": "Rustan's Supermarket",
        "text": "Where shopping for food (and Bayani Brew) is a pleasure!",
        "link": "http://www.rustansfresh.com"
      },{
        "name": "Marketplace by Rustan's (Rockwell Power Plant and Boni High St. BGC)",
        "text": "A more upscale Rustan's?!? 'Nuff said.",
        "link": "http://www.rustansfresh.com"
      },{
        "name": "Robinsons Selections",
        "text": "Healthier days start here.",
        "link": "https://www.facebook.com/RobinsonsSelections"
      }
    ]
  }

  $scope.areasLuzon = {
    "name": "Luzon",
    "branches": [{
        "name": "Amanpulo Resort (Palawan)",
        "text": "Yes, our bottles have been to places we haven't set foot on ourselves. We should offer door-to-door delivery to them soon.",
        "link": "https://www.facebook.com/AmanpuloOfficial"
      },{
        "name": "Hill Station (Baguio)",
        "text": "Recognized as one of the best restos in Asia by the international Miele Guide. Twice. ‘nuff said.",
        "link": "https://www.facebook.com/pages/Hill-Station/113667221977545"
      },{
        "name": "Hungry Ant (Baguio)",
        "text": "Go to the cafe where the sweet tooth leads you",
        "link": ""
      },{
        "name": "Starpines (Baguio)",
        "text": "",
        "link": "https://www.facebook.com/pages/Starpines-Minimart/203657109674477"
      },{
        "name": "GK Enchanted Farm (Bulacan)",
        "text": "But of course! An incubator of social enterprises.",
        "link": "http://www.facebook.com/Gkenchantedfarm"
      },{
        "name": "Circle Hostel (La Union and Zambales)",
        "text": "Budget-friendly. Check. Eco-friendly. Check. Artsy/Adventurous Sanctuary. Check. Cool friendly people. Check. Then why go anywhere else when the surf’s up?",
        "link": "http://www.facebook.com/thecirclehostel"
      },{
        "name": "Café Antonio (Los Baños)",
        "text": "A culinary indulgence smack in the birthplace of our national hero. The Doc would be proud their serving his favourite brew.",
        "link": "http://www.facebook.com/pages/Cafe-Antonio/123163690283"
      },{
        "name": "Namee Sunico (Alabang, Makati, Pampanga. +63917-564-0647)",
        "text": "",
        "link": ""
      },{
        "name": "Natz Mendoza (Antipolo, Rizal, +63917-845-8957)",
        "text": "",
        "link": ""
      },{
        "name": "Captains's Sweet Galley (Dasmarinas, Cavite)",
        "text": "Cakes, ice cream, and more!!! :) The first cupcake bar and gourmet cakes in Dasmariñas, Cavite.",
        "link": "https://www.facebook.com/captainssweetgalleyoftreats?fref=ts"
      },{
        "name": "Brewfort CAFE (Viewfort Event Venue Governor's Drive, Brgy Cabilang Baybay, Carmona, Cavite)",
        "text": "",
        "link": "https://www.facebook.com/pages/Brewfort-CAFE/340342329418574"
      },{
        "name": "CAFÉ+ (Maharlika Hi-Way, Plaridel, Bulacan)",
        "text": "Best coffee and dessert place this side of town!",
        "link": "https://www.facebook.com/CAFEplusCBD"
      },{
        "name": "Everybody's Cafe (San Fernando, Pampanga)",
        "text": "Home of Authentic Kapampangan Cuisine",
        "link": "https://www.facebook.com/everybodyscafepampanga"
      },{
        "name": "S&R Pampanga",
        "text": "For that membership shopping and treasure hunt experience in one.",
        "link": "http://www.snrshopping.com/location/pampanga.html"
      }
    ]
  }


  $scope.areasVisayas = {
    "name": "Visayas",
    "branches": [{
        "name": "Bo's Coffee",
        "text": "Your homegrown brew.",
        "link": "http://www.boscoffee.com/"
      },{
        "name": "Titos Resto & Grill (Boracay)",
        "text": "Eat here if you want your Bayani Brew with the best sunset view!",
        "link": "http://www.facebook.com/Titos.RestoGrill"
      },{
        "name": "Café Bob’s (Bacolod)",
        "text": "Aside from our brews, we heard they also serve Bacolod craft beer too.",
        "link": "https://www.facebook.com/pages/Caf%C3%A9-Bobs-Lacson/208198005873440"
      },{
        "name": "The Chillage (Cebu)",
        "text": "“Shop. Eat. Play.” is what they say. Just a super chill joint to check out when in the city.",
        "link": "https://www.facebook.com/the.chillage.cebu"
      },{
        "name": "The Henry Hotel (Cebu)",
        "text": "Fun. Funky. Fabulous.",
        "link": "http://www.thehenryhotel.com/home/ "
      },{
        "name": "Cebu Reseller (0917-364-1246)",
        "link": "ingkosbayanibrew@gmail.com"
      }
    ]
  }

  $scope.areasMindanao = {
    "name": "Mindanao",
    "branches": [{
        "name": "Human Nature Cagayan de Oro (Arch. Hayes St.)",
        "text": "",
        "link": "https://humanheartnature.com/buy/find-a-store"
      },{
        "name": "Human Nature Davao (A. Loyola St., Bo Obrero)",
        "text": "",
        "link": "https://humanheartnature.com/buy/find-a-store"
      },{
        "name": "Human Nature Zamboanga (Almonte St.)",
        "text": "",
        "link": "https://www.facebook.com/HNZamboanga"
      }
    ]
  }

  $scope.areasMetro = [
    {
      "name": "General", 
      "branches": [{
        "name": "Taste Central (delivers within Metro Manila via https://tastecentral.com)",
        "text": "Some call them snobs. They say they're more like Tastemakers -- actually a happy, people-pleasing bunch obsessed about one thing: Good Taste.",
        "link": "https://tastecentral.com"
      }]
    },{
      "name": "Makati", 
      "branches": [{
        "name": "Commune (Dela Costa St)",
        "text": "A coffee commune. Tune in for their happy hours too. Or better yet, just order iced tea anytime!",
        "link": "https://www.facebook.com/CommunePH"
      },{
        "name": "Juju Eats (Pasong Tamo Extension)",
        "text": "A new spin on salad. Eating this healthy has never been this yummy.",
        "link": "https://www.facebook.com/JujuEats "
      },{
        "name": "Bo's Coffee",
        "text" : "Your homegrown brew.",
        "link": "http://www.boscoffee.com/"
      },{
        "name": "Phobobo, Hole in the Wall (Century City Mall)",
        "text": "",
        "link": "http://www.facebook.com/holeinthewallPH"
      },{
        "name": "Wasabi Warriors (Century City Mall)",
        "text": "",
        "link": "http://www.facebook.com/WasabiWarriorsPH"
      },{
        "name": "La Lola Churreria (Rockwell)",
        "text": "Hola!",
        "link": "http://www.facebook.com/pages/La-Lola-Churreria-Uptown-Center"
      },{
        "name": "The Kismet Café & Wellness Market (P. Burgos St. corner Kalayaan Ave.)",
        "text": "",
        "link": "http://www.facebook.com/kismet108"
      },{
        "name": "Ganso Shabuway (Greenbelt 5 and Power Plant Mall)",
        "text": "",
        "link": "https://www.facebook.com/GansoShabuwayPH"
      },{
        "name": "Rockwell Power Plant Mall (Marketplace by Rustan’s and P1 Concourse Level)",
        "text": "",
        "link": ""
      },{
        "name": "Landmark",
        "text": "",
        "link": ""
      }]
    },{
      "name": "The Fort/BGC",
      "branches": [{
        "name": "Wrong Ramen",
        "text": "Seems odd isn’t it? But pairing BB with this rebellious Jap fusion food makes it oh soooo right!",
        "link": "https://www.facebook.com/WrongRamen"
      },{
        "name": "Burgers and Brewskies",
        "text": "Not your ordinary burger joint. It's where awesome, creative burgers meet craft beers (and Bayani Brew!), with unique sides & tasty chicken wings to boot.",
        "link": "https://www.facebook.com/BBBurgersAndBrewskies88"
      },{
        "name": "La Lola Churreria (Serendra and SM Aura)",
        "text": "Hola!",
        "link": "http://www.facebook.com/pages/La-Lola-Churreria-Uptown-Center"
      },{
        "name": "Manos Nail Lounge",
        "text": "Yes, Bayani Brew is best enjoyed while having a foot spa. And with pink nail polish to boot.",
        "link": "http://www.facebook.com/ManosNailLounge"
      },{
        "name": "Midnight Mercato",
        "text": "Your ultimate go-to for your midnight munchies on late night Fridays/Saturdays or right after stalking the Azkals/Younghusbands during soccer practice (what? They don’t play there?)",
        "link": "https://www.facebook.com/midnightmercato"
      },{
        "name": "Slice",
        "text": "Choco yema, choco stirrer, mochamisu, and oh look, BAYANI BREW! Head to Slice on High St and try the new addition to their menu!",
        "link": "http://www.facebook.com/SliceHighSt"
      },{
        "name": "Trattoria Poggio Antico (Tuscany, Upper Mckinley Road, Mckinley Hill)",
        "text": "",
        "link": "https://www.facebook.com/pages/Trattoria-Poggio-Antico/243179545808945"
      },{
        "name": "Wasabi Warriors (Serendra)",
        "text": "",
        "link": "http://www.facebook.com/WasabiWarriorsPH"
      },{
        "name": "Gold's Gym (Bonifacio High St.)",
        "text": "",
        "link": "http://www.facebook.com/WasabiWarriorsPH"
      },{
        "name": "Bo's Coffee (Bonifacio High St.)",
        "text" : "Your homegrown brew.",
        "link": "http://www.boscoffee.com/"
      },{
        "name": "BHS Cinema (Potato Cornder and Nuts About Candy, Central Square, Bonifacio High St.)",
        "text" : "",
        "link": ""
      },{
        "name": "The Globe Tower (8th Flr Dining Hall and Conference Rooms)",
        "text": "Thanks to our Bayani Bros at Globe for supporting local social enterprises! Globe -- truly bridging communities!",
        "link": "http://www.philstar.com/modern-living/2013/08/17/1098311/building-signals-future"
      },{
        "name": "Marketplace by Rustan's (Central Square, Bonifacio High St.)",
        "text": "",
        "link": ""
      },{
        "name": "S&R Fort",
        "text": "For that membership shopping and treasure hunt experience in one.",
        "link": "http://www.snrshopping.com"
      }]
    },{
      "name": "Quezon City",
      "branches": [{
        "name": "GK Enchanted Farm Cafe (Commonwealth)",
        "text" : "The watering hole for social entrepreneurs. Then visit the Human Nature flagship store downstairs.",
        "link": "http://www.facebook.com/EnchantedFarmCafe"
      },{
        "name": "Gayuma ni Maria (V. Luna Extension, Sikatuna)",
        "text" : "The ORIGINAL bewitchingly gastronomic restaurant gayuma.",
        "link": "https://www.facebook.com/pages/Gayuma-Ni-Maria/148108488537188"
      },{
        "name": "Café MITHI (Maginhawa St.)",
        "text" : "",
        "link": "http://www.facebook.com/MITHIMaginhawa"
      },{
        "name": "La Lola Churreria (Serendra and SM Aura)",
        "text" : "Hola!",
        "link": "http://www.facebook.com/pages/La-Lola-Churreria-Uptown-Center"
      },{
        "name": "The Clean Plate by Twist (UP Town Center and TriNoma)",
        "text" : "",
        "link": "http://www.facebook.com/pages/The-Clean-Plate-by-Twist"
      },{
        "name": "Islands Pasalubong (Katipunan Ext.)",
        "text" : "",
        "link": "http://www.facebook.com/islandspasalubongkatipunan"
      },{
        "name": "Gold's Gym (Acropolis)",
        "text" : "",
        "link": "http://www.facebook.com/GoldsGymPH"
      },{
        "name": "Be Good Store (ELJ Bldg, ABS-CBN Loop)",
        "text" : "Ms. Bernadette Sembrano's passion project. Choose Goodness.",
        "link": ""
      },{
        "name": "Landmark (Trinoma)",
        "text": "",
        "link": ""
      },{
        "name": "S&R Congressional",
        "text": "For that membership shopping and treasure hunt experience in one.",
        "link": "http://www.snrshopping.com/location/congressional.html"
      }]
    },{
      "name": "Mandaluyong",
      "branches": [{
        "name": "Ganso Shabuway (Shangrli-La Plaza)",
        "text" : "",
        "link": "https://www.facebook.com/GansoShabuwayPH"
      },{
        "name": "Bo's Coffee (SM Megamall)",
        "text" : "Your homegrown brew.",
        "link": "http://www.boscoffee.com/"
      },{
        "name": "S&R Shaw",
        "text": "For that membership shopping and treasure hunt experience in one.",
        "link": "http://www.snrshopping.com/location/shaw.html"
      }]
    },{
      "name": "Ortigas/Pasig",
      "branches": [{
        "name": "Co.lab (Brixton St., Kapitolyo)",
        "text": "a coworking space created to spark collaborative fusion among like-minded individuals.",
        "link": "http://colab.ph"
      },{
        "name": "CAB Café",
        "text" : "Negrenses Unite!",
        "link": "https://www.facebook.com/pages/CAB-Cafe/198661923489794"
      },{
        "name": "Burgers and Brewskies (Capitol Commons)",
        "text" : "",
        "link": "http://www.facebook.com/BBBurgersAndBrewskies88"
      },{
        "name": "I am Kim",
        "text" : "",
        "link": "http://www.facebook.com/I-Am-Kim-1406533722976645"
      },{
        "name": "Yoga + (The Podium)",
        "text" : "",
        "link": ""
      },{
        "name": "Subspace Coffee",
        "text": "Purple reigns! We recommend Subspace Coffee's Purple Potato Latte too!",
        "link": "http://www.facebook.com/subspace.coffee"
      },{
        "name": "FamilyMart",
        "text": "If the line for #unliTwirl is too long, you know what else you can buy from there.",
        "link": "https://www.facebook.com/familymartph?fref=ts"
      },{
        "name": "Pioneer Center",
        "text" : "",
        "link": ""
      }]
    },{
      "name": "San Juan",
      "branches": [{
        "name": "Greenhills Cinemas (Promenade and Theater Mall)",
        "text" : "",
        "link": ""
      },{
        "name": "UniMart",
        "text" : "",
        "link": ""
      }]
    },{
      "name": "Marikina",
      "branches": [{
        "name": "Cafe Lidia",
        "text": "Truly one of Marikina's best kept secrets!",
        "link": "http://www.cafe-lidia.com/"
      }]
    },{
      "name": "Pasay City",
      "branches": [{
        "name": "Bo's Coffee (NAIA Terminal 1 and NAIA Terminal 3)",
        "text": "Your homegrown brew.",
        "link": "http://www.boscoffee.com/"
      },{
        "name": "Espressamente Illy (SM Mall of Asia and NAIA Terminal 3)",
        "text": "One last sip of Bayani Brew before you take your flight!",
        "link": "http://www.illy.com/wps/wcm/connect/en/home"
      }]
    },{
      "name": "Alabang",
      "branches": [{
        "name": "Bo's Coffee (Molito Complex)",
        "text": "Your homegrown brew.",
        "link": "http://www.boscoffee.com/"
      },{
        "name": "Ganso Shabuway (Alabang Town Center)",
        "text": "",
        "link": "https://www.facebook.com/GansoShabuwayPH"
      },{
        "name": "Human Nature Alabang",
        "text": "",
        "link": "https://www.facebook.com/hn.alabang"
      },{
        "name": "The Farm Organics",
        "text": "",
        "link": "http://www.facebook.com/TheFarmResto"
      },{
        "name": "S&R Alabang",
        "text": "For that membership shopping and treasure hunt experience in one.",
        "link": "http://www.snrshopping.com/location/alabang.html"
      }]
    },{
      "name": "Manila",
      "branches": [{
        "name": "Bambike Ecotours",
        "text" : "We heard the owner's a #mowdel. Go on a Bambike tour and you might see him too!",
        "link": "http://www.facebook.com/BambikeEcotours"
      },{
        "name": "Mabuhay Restop (Luneta)",
        "text" : "Travel. Cafe. Museum. Experience the Philippines.",
        "link": "http://www.facebook.com/MabuhayRestop"
      },{
        "name": "The Manila Collectible Co.",
        "text" : "A one-stop-shop that offers the best of Philippine products.",
        "link": "https://www.facebook.com/manilacollectible"
      },{
        "name": "Café Laya (Taft Ave.)",
        "text" : "",
        "link": ""
      }]
    },{
      "name": "Parañaque",
      "branches": [{
        "name": "Pito and Mita (BF Homes, Paranaque)",
        "text" : "A casual, sit-down restaurant that caters to people of all ages.",
        "link": "https://www.facebook.com/PitoAndMita"
      },{
        "name": "FamilyMart",
        "link": "https://www.facebook.com/familymartph?fref=ts"
      }]
    }
  ];
}