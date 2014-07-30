function AreaCtrl($scope) {

  $scope.areasNationwide = {
    "name": "Nationwide",
    "branches": [{
        "name": "Human Nature",
        "text": "Our super pro-Philippines, pro-poor, pro-environment partner",
        "link": "http://humanheartnature.com/buy/find-a-store"
      },{
        "name": "Chicken Charlie",
        "text": "Must. Absolutely. Try. That Signature Burger.",
        "link": "http://chickencharlie.com.ph/branches/"
      },{
        "name": "Bo's Coffee",
        "text": "Your homegrown brew.",
        "link": "http://www.boscoffee.com/"
      },{
        "name": "FamilyMart",
        "text": "Pilot branches - Ortigas (Linden, Regency, Eton Emerald), Eastwood, BGC, McKinley Hill Science Hub, Glorietta 3, UP Town Center, and UP TechnoHub.",
        "link": "https://www.facebook.com/familymartph?fref=ts"
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
        "name": "Café Bonjour, Total Gas Station (Cebu)",
        "text": "Drop by Café Bonjour and say \"Hello\" to Bayani Brew while you load up on Total Gas!",
        "link": "http://www.totaloil.com.ph/service-stations/shop-services/cafe-bonjour.html"
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
        "name": "Cucina Andare (Glorietta Park)",
        "text": "Open Fri to Sun nights! Cool food trucks transport you anywhere your stomach hankers for with their culinary creativity (disclaimer: the trucks do not actually move)",
        "link": "http://www.ourawesomeplanet.com/awesome/2012/11/cucina-andare-the-first-food-truck-market-opens-in-glorietta-park.html ",
      },{
        "name": "Juju Eats (Pasong Tamo Extension)",
        "text": "A new spin on salad. Eating this healthy has never been this yummy.",
        "link": "https://www.facebook.com/JujuEats "
      },{
        "name": "Fairmont Hotel",
        "text": "Naks, ang sosy.",
        "link": "http://www.fairmont.com/makati/ "
      },{
        "name": "Anton Guerrero (+63917-884-4111)",
        "text": "Reseller of everything hard to find. But first you have to find him.",
        "link": ""
      },{
        "name": "Rockwell Power Plant Mall (P1 Concourse Level)",
        "text": "",
        "link": ""
      },{
        "name": "Ganso Shabuway (Greenbelt 5 and Power Plant Mall)",
        "text": "",
        "link": "https://www.facebook.com/GansoShabuwayPH"
      },{
        "name": "Bayani Wholesale Distribution (624-8593)",
        "text": "For orders in bulk.",
        "link": "http://bayanidistribution.com/"
      },{
        "name": "Mesa Filipino Moderne (Greenbelt 5 and Power Plant Mall)",
        "text": "Head to Mesa for a taste of all-Filipino goodness! A perfect match for Bayani Brew!",
        "link": "https://www.facebook.com/pages/Mesa-Filipino-Moderne-Restaurant/497882890249472?ref=ts&fref=ts"
      },{
        "name": "Landmark",
        "text": "",
        "link": ""
      }]
    },{
      "name": "The Fort/BGC",
      "branches": [{
        "name": "Slice",
        "text": "Choco yema, choco stirrer, mochamisu, and oh look, BAYANI BREW! Head to Slice on High St and try the new addition to their menu!",
        "link": "http://www.facebook.com/SliceHighSt"
      },{
        "name": "Wrong Ramen",
        "text": "Seems odd isn’t it? But pairing BB with this rebellious Jap fusion food makes it oh soooo right!",
        "link": "https://www.facebook.com/WrongRamen"
      },{
        "name": "Casa Marcos",
        "text": "Old meets the new brew. Have gambas, steak ala pobre, or maybe the sopa de mariscos. Such well-loved Spanish dishes pair up real nicely with Bayani Brew. Si? Si!",
        "link": "http://www.facebook.com/casamarcos"
      },{
        "name": "Manos Nail Lounge",
        "text": "Yes, Bayani Brew is best enjoyed while having a foot spa. And with pink nail polish to boot.",
        "link": "http://www.facebook.com/ManosNailLounge"
      },{
        "name": "Midnight Mercato",
        "text": "Your ultimate go-to for your midnight munchies on late night Fridays/Saturdays or right after stalking the Azkals/Younghusbands during soccer practice (what? They don’t play there?)",
        "link": "https://www.facebook.com/midnightmercato"
      },{
        "name": "Sunshine Kitchen",
        "text": "Artisanal Pizzas + Salads + Soups + Meals",
        "link": "https://www.facebook.com/sunshinekitchen.resto"
      },{
        "name": "Trattoria Poggio Antico (Tuscany, Upper Mckinley Road, Mckinley Hill)",
        "text": "",
        "link": "https://www.facebook.com/pages/Trattoria-Poggio-Antico/243179545808945"
      },{
        "name": "Mesa Filipino Moderne (SM Aura Premier)",
        "text": "Head to Mesa for a taste of all-Filipino goodness! A perfect match for Bayani Brew!",
        "link": "https://www.facebook.com/pages/Mesa-Filipino-Moderne-Restaurant/497882890249472?ref=ts&fref=ts"
      },{
        "name": "Burgers and Brewskies",
        "text": "Not your ordinary burger joint. It's where awesome, creative burgers meet craft beers (and Bayani Brew!), with unique sides & tasty chicken wings to boot.",
        "link": "https://www.facebook.com/BBBurgersAndBrewskies88"
      },{
        "name": "The Globe Tower (8th Flr Dining Hall and Conference Rooms)",
        "text": "Thanks to our Bayani Bros at Globe for supporting local social enterprises! Globe -- truly bridging communities!",
        "link": "http://www.philstar.com/modern-living/2013/08/17/1098311/building-signals-future"
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
        "name": "ElarZ (Speaker Perez and soon other kiosks)",
        "text" : "After pigging out on the pambansang lechon, drinking copious amounts of Bayani Brew ensures your cholesterol stays low.",
        "link": "http://elarzlechon.com/"
      },{
        "name": "Elorde Boxing Gym (Katipunan Ave & Don Antonio Ave)",
        "text" : "After that knock-out punch, nothing’s better than gulping down an ice-cold Bayani Brew.",
        "link": "http://www.elordeboxinggym.com/ "
      },{
        "name": "Mario’s (Tomas Morato)",
        "text" : "It’s the longest running resto on the block. Dine there and you’ll find out why.",
        "link": "http://www.marios.com.ph/"
      },{
        "name": "Mezza Norte Trinoma",
        "text" : "Ultimate eats at the North every Friday, Sat and Sunday!",
        "link": "http://www.ourawesomeplanet.com/awesome/2013/05/mezza-norte-at-trinoma-thank-you-for-the-support-for-the-successful-big-move-to-trinoma.html"
      },{
        "name": "Nomama (Scout Tuason)",
        "text" : "Not your mama’s ramen also serves not your ordinary iced tea.",
        "link": "http://www.facebook.com/nomamaramen"
      },{
        "name": "The Appraisery (Cubao X)",
        "text" : "Great concept! Vintage fashion meets yummy food. And while snacking and shopping, have a nice chit-chat with the store owner/bartender.",
        "link": "http://www.theappraisery.com/"
      },{
        "name": "Adarna Food and Culture (Kalayaan Ave)",
        "text" : "Serves historical and heirloom cuisine. A mini-museum and home to cultural and art events like the Tertulia!",
        "link": "https://www.facebook.com/pages/Adarna-Food-and-Culture-Restaurant/42990250925"
      },{
        "name": "Gayuma ni Maria (V. Luna Extension, Sikatuna)",
        "text" : "The ORIGINAL bewitchingly gastronomic restaurant gayuma.",
        "link": "https://www.facebook.com/pages/Gayuma-Ni-Maria/148108488537188"
      },{
        "name": "Edsel Ramirez (Katipunan, 0917-525-5487)",
        "text" : "",
        "link": ""
      },{
        "name": "Be Good Store (ELJ Bldg, ABS-CBN Loop)",
        "text" : "Ms. Bernadette Sembrano's passion project. Choose Goodness.",
        "link": ""
      },{
        "name": "Landmark (Trinoma)",
        "text": "",
        "link": ""
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
        "name": "Kristina's Premium Inutak (SM Megamall)",
        "text" : "This Taguig delicacy goes well with our homegrown brews!",
        "link": "https://www.facebook.com/KristinasInutakPremium"
      },{
        "name": "S&R Shaw",
        "text": "For that membership shopping and treasure hunt experience in one.",
        "link": "http://www.snrshopping.com/location/shaw.html"
      }]
    },{
      "name": "Ortigas/Pasig",
      "branches": [{
        "name": "Yellow Halo (Strata 100, Ortigas)",
        "text" : "Head to this haven at the Wellness Alliance for some guilt-free dining! Then try pole dancing at the nearby Polecats Manila studio while you're at it.",
        "link": "https://www.facebook.com/YellowHaloGuiltFreeKitchen"
      },{
        "name": " Q Bistro (The Malayan Plaza, Opal cor. Topaz Road)",
        "text" : "Because everyone deserves a delightful meal.",
        "link": "http://www.qbistro.net/"
      }]
    },{
      "name": "San Juan",
      "branches": [{
        "name": "Greenhills Cinemas (Promenade and Theater Mall)",
        "text" : "",
        "link": ""
      },{
        "name": "Quirky Bacon (Wilson St.)",
        "text" : "Chef Sharwin Tee of Lifestyle Network's Curiosity Got the Chef serves up his signature quirky take on your favorite comfort food. The QB proudly supports Filipino artisanal makers and their products.",
        "link": "https://www.facebook.com/qbresto"
      },{
        "name": "Pukka Chow (67A Washington St.)",
        "text" : "For bits of edible education.",
        "link": "https://www.facebook.com/pukkachow"
      },{
        "name": "Urban Pantry (Greenhills Promenade 3)",
        "text" : "There's something new in your neighborhood!",
        "link": "https://www.facebook.com/urbanpantryPH"
      }]
    },{
      "name": "Marikina",
      "branches": [{
        "name": "The Frap Bar",
        "text": "Rumor has it the Fraps are just as good, if not better than, the iced tea.",
        "link": "http://thefrapbar.weebly.com/ "
      },{
        "name": "Bayani Wholesale Distribution (624-8593)",
        "text": "For orders in bulk.",
        "link": "http://bayanidistribution.com/"
      },{
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
        "name": "S&R Alabang",
        "text": "For that membership shopping and treasure hunt experience in one.",
        "link": "http://www.snrshopping.com/location/alabang.html"
      },{
        "name": "Human Nature Alabang",
        "text": "",
        "link": "https://www.facebook.com/hn.alabang"
      }]
    },{
      "name": "Kapitolyo",
      "branches": [{
        "name": "CAB Café",
        "text" : "Negrenses Unite!",
        "link": "https://www.facebook.com/pages/CAB-Cafe/198661923489794"
      },{
        "name": "Edgy Veggy",
        "text" : "Being vegetarian can be this exciting and delicious!",
        "link": "http://www.facebook.com/EdgyVeggy"
      },{
        "name": "Nomama Capitol Commons",
        "text" : "Not your mama’s ramen also serves not your ordinary iced tea.",
        "link": "https://www.facebook.com/photo.php?fbid=779587008724481&set=a.270613106288543.87447.268437836506070&type=1&theater"
      }]
    },{
      "name": "Manila",
      "branches": [{
        "name": "Mabuhay Restop (Luneta)",
        "text" : "Travel. Cafe. Museum. Experience the Philippines.",
        "link": "http://www.facebook.com/MabuhayRestop"
      },{
        "name": "The Manila Collectible Co.",
        "text" : "A one-stop-shop that offers the best of Philippine products.",
        "link": "https://www.facebook.com/manilacollectible"
      }]
    },{
      "name": "Parañaque",
      "branches": [{
        "name": "Pito and Mita (BF Homes, Paranaque)",
        "text" : "A casual, sit-down restaurant that caters to people of all ages.",
        "link": "https://www.facebook.com/PitoAndMita"
      }]
    }
  ];
}