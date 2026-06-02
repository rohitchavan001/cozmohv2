const INITIAL_TEMPLATES = [
  {
    "id": 1,
    "name": "Clean Home Service",
    "thumbnail": "screenshots/1.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/cleaning-v1/?ref=rea-plugin-backend-templates",
    "tags": "cleaning,home",
    "category": "Home Decor"
  },
  {
    "id": 2,
    "name": "Online Course",
    "thumbnail": "screenshots/2.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/online-course-v1/",
    "tags": "course,education",
    "category": "Education / Training"
  },
  {
    "id": 3,
    "name": "Landing Page Investment Platform",
    "thumbnail": "screenshots/3.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/landing-page-investment-platform-v1/?ref=rea-plugin-backend-templates",
    "tags": "landing,page,Investment,platform",
    "category": "Finance"
  },
  {
    "id": 4,
    "name": "Fashion",
    "thumbnail": "screenshots/4.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/shop-wooshop-v2/?ref=rea-plugin-backend-templates",
    "tags": "fashion,shop",
    "category": "Retail"
  },
  {
    "id": 5,
    "name": "Landing page business",
    "thumbnail": "screenshots/5.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/landing-page-digital-product-v1/?ref=rea-plugin-backend-templates",
    "tags": "landing,page,business",
    "category": ""
  },
  {
    "id": 6,
    "name": "Finance",
    "thumbnail": "screenshots/6.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/financial-services-v1/",
    "tags": "finance,services",
    "category": "Finance"
  },
  {
    "id": 7,
    "name": "Restaurant",
    "thumbnail": "screenshots/7.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/restaurant-v1/",
    "tags": "restaurant,food",
    "category": ""
  },
  {
    "id": 8,
    "name": "Lawyer",
    "thumbnail": "screenshots/8.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/lawyer-v1/?ref=rea-plugin-backend-templates",
    "tags": "lawyer,legal",
    "category": "Consultancy"
  },
  {
    "id": 9,
    "name": "Personal Portfolio",
    "thumbnail": "screenshots/9.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/one-page-v2/?ref=rea-plugin-backend-templates",
    "tags": "portfolio,onepage",
    "category": "Portfolio"
  },
  {
    "id": 10,
    "name": "Car Repair",
    "thumbnail": "screenshots/10.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/car-repair-v1/?ref=rea-plugin-backend-templates",
    "tags": "car,repair",
    "category": ""
  },
  {
    "id": 11,
    "name": "Fitness Gym",
    "thumbnail": "screenshots/11.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/fitness-gym-v1/?ref=rea-plugin-backend-templates",
    "tags": "fitness,gym",
    "category": "Health"
  },
  {
    "id": 12,
    "name": "Dental Doctor",
    "thumbnail": "screenshots/12.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/dental-v1/?ref=rea-plugin-backend-templates",
    "tags": "doctor,dental",
    "category": "Health"
  },
  {
    "id": 13,
    "name": "Consultant One",
    "thumbnail": "screenshots/13.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/construction-v3/",
    "tags": "consultant,construction",
    "category": "Consultancy"
  },
  {
    "id": 14,
    "name": "Cyber Security",
    "thumbnail": "screenshots/14.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/cybersecurity-v1/",
    "tags": "cyber,security",
    "category": "IT Services"
  },
  {
    "id": 15,
    "name": "Pizza Restaurant",
    "thumbnail": "screenshots/15.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/pizza-v1/",
    "tags": "pizza,restaurant",
    "category": ""
  },
  {
    "id": 16,
    "name": "Fashion",
    "thumbnail": "screenshots/16.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/fashion-v3/",
    "tags": "fashion",
    "category": "Retail"
  },
  {
    "id": 17,
    "name": "Pet Shop",
    "thumbnail": "screenshots/17.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/pet-shop-v1/",
    "tags": "pet,shop",
    "category": "Retail"
  },
  {
    "id": 18,
    "name": "Digital Marketing",
    "thumbnail": "screenshots/18.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/digital-marketing-agency-v4/",
    "tags": "digital,marketing",
    "category": "Digital Marketing"
  },
  {
    "id": 19,
    "name": "Digital Marketing",
    "thumbnail": "screenshots/19.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/digital-marketing-agency-v2/",
    "tags": "digital,marketing",
    "category": "Digital Marketing"
  },
  {
    "id": 20,
    "name": "Medical Doctor",
    "thumbnail": "screenshots/20.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/medical-v1/",
    "tags": "medical,doctor",
    "category": "Health"
  },
  {
    "id": 21,
    "name": "news magazine",
    "thumbnail": "screenshots/21.jpg",
    "templateLink": "https://news-magazine-x-free.wp-royal-themes.com/demo/?ref=rea-plugin-backend-templates",
    "tags": "news,magazine",
    "category": ""
  },
  {
    "id": 22,
    "name": "Landing pages business",
    "thumbnail": "screenshots/22.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/landing-page-business-v2/?ref=rea-plugin-backend-templates",
    "tags": "landing,pages,business",
    "category": ""
  },
  {
    "id": 23,
    "name": "Graphics nature",
    "thumbnail": "screenshots/23.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/graphic-nature-v1/?ref=rea-plugin-backend-templates",
    "tags": "graphics,nature",
    "category": ""
  },
  {
    "id": 24,
    "name": "Landing pages business",
    "thumbnail": "screenshots/24.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/landing-page-business-v1/?ref=rea-plugin-backend-templates",
    "tags": "landing,pages,business",
    "category": ""
  },
  {
    "id": 25,
    "name": "Landing pages business",
    "thumbnail": "screenshots/25.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/landing-page-business-v3/?ref=rea-plugin-backend-templates",
    "tags": "landing,pages,business",
    "category": ""
  },
  {
    "id": 26,
    "name": "personal blog",
    "thumbnail": "screenshots/26.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/personal-blog-v4/?ref=rea-plugin-backend-templates",
    "tags": "personal,blog",
    "category": ""
  },
  {
    "id": 27,
    "name": "yoga",
    "thumbnail": "screenshots/27.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/yoga-v2/?ref=rea-plugin-backend-templates",
    "tags": "yoga",
    "category": "Health"
  },
  {
    "id": 28,
    "name": "nature",
    "thumbnail": "screenshots/28.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/nature-v1/?ref=rea-plugin-backend-templates",
    "tags": "nature",
    "category": ""
  },
  {
    "id": 29,
    "name": "nature",
    "thumbnail": "screenshots/29.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/nature-v2/?ref=rea-plugin-backend-templates",
    "tags": "nature",
    "category": ""
  },
  {
    "id": 30,
    "name": "personal blog",
    "thumbnail": "screenshots/30.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/personal-blog-v3/?ref=rea-plugin-backend-templates",
    "tags": "personal,blog",
    "category": ""
  },
  {
    "id": 31,
    "name": "nutritionist",
    "thumbnail": "screenshots/31.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/nutritionist-v1/?ref=rea-plugin-backend-templates",
    "tags": "nutritionist",
    "category": ""
  },
  {
    "id": 32,
    "name": "digital lagency",
    "thumbnail": "screenshots/32.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/digitalagency-v3/?ref=rea-plugin-backend-templates",
    "tags": "digital,lagency",
    "category": "Digital Marketing"
  },
  {
    "id": 33,
    "name": "wooshop",
    "thumbnail": "screenshots/33.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/wooshop-v1/?ref=rea-plugin-backend-templates",
    "tags": "wooshop",
    "category": "Retail"
  },
  {
    "id": 34,
    "name": "wooshop",
    "thumbnail": "screenshots/34.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/wooshop-v2/?ref=rea-plugin-backend-templates",
    "tags": "wooshop",
    "category": "Retail"
  },
  {
    "id": 35,
    "name": "Developer portfolio",
    "thumbnail": "screenshots/35.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/developer-portfolio-v1/?ref=rea-plugin-backend-templates",
    "tags": "developer,portfolio",
    "category": "Portfolio"
  },
  {
    "id": 36,
    "name": "personal blog",
    "thumbnail": "screenshots/36.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/personal-blog-v2/?ref=rea-plugin-backend-templates",
    "tags": "personal,blog",
    "category": ""
  },
  {
    "id": 37,
    "name": "it tech",
    "thumbnail": "screenshots/37.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/ittech-v1/?ref=rea-plugin-backend-templates",
    "tags": "it,tech",
    "category": "IT Services"
  },
  {
    "id": 38,
    "name": "one page",
    "thumbnail": "screenshots/38.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/one-page-v2/",
    "tags": "one,page",
    "category": ""
  },
  {
    "id": 39,
    "name": "new year",
    "thumbnail": "screenshots/39.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/newyear-v1/?ref=rea-plugin-backend-templates",
    "tags": "new,year",
    "category": ""
  },
  {
    "id": 40,
    "name": "travel",
    "thumbnail": "screenshots/40.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/travel-v3/?ref=rea-plugin-backend-templates",
    "tags": "travel",
    "category": "Travel"
  },
  {
    "id": 41,
    "name": "digital marketing",
    "thumbnail": "screenshots/41.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/digital-marketing-v1/?ref=rea-plugin-backend-templates",
    "tags": "digital,marketing",
    "category": "Digital Marketing"
  },
  {
    "id": 42,
    "name": "school",
    "thumbnail": "screenshots/42.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/school-v1/?ref=rea-plugin-backend-templates",
    "tags": "school",
    "category": "Education / Training"
  },
  {
    "id": 43,
    "name": "car wash",
    "thumbnail": "screenshots/43.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/carwash-v1/?ref=rea-plugin-backend-templates",
    "tags": "car,wash",
    "category": ""
  },
  {
    "id": 44,
    "name": "day care service",
    "thumbnail": "screenshots/44.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/day-care-service-v1/?ref=rea-plugin-backend-templates",
    "tags": "day,care,service",
    "category": ""
  },
  {
    "id": 45,
    "name": "token",
    "thumbnail": "screenshots/45.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/token-v1/?ref=rea-plugin-backend-templates",
    "tags": "token",
    "category": ""
  },
  {
    "id": 46,
    "name": "landing page ebook",
    "thumbnail": "screenshots/46.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/landing-page-ebook-v1/?ref=rea-plugin-backend-templates",
    "tags": "landing,page,ebook",
    "category": ""
  },
  {
    "id": 47,
    "name": "amazon landing page",
    "thumbnail": "screenshots/47.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/amazon-landing-page-v1/?ref=rea-plugin-backend-templates",
    "tags": "amazon,landing,page",
    "category": ""
  },
  {
    "id": 48,
    "name": "landing page saas",
    "thumbnail": "screenshots/48.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/landing-page-saas-v1/?ref=rea-plugin-backend-templates",
    "tags": "landing,page,saas",
    "category": "IT Services"
  },
  {
    "id": 49,
    "name": "landing page startup",
    "thumbnail": "screenshots/49.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/landing-page-startup-v1/?ref=rea-plugin-backend-templates",
    "tags": "landing,page,startup",
    "category": ""
  },
  {
    "id": 50,
    "name": "landing page moblie app",
    "thumbnail": "screenshots/50.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/landing-page-mobileapp-v1/?ref=rea-plugin-backend-templates",
    "tags": "landing,page,moblie,app",
    "category": "IT Services"
  },
  {
    "id": 51,
    "name": "travel blog",
    "thumbnail": "screenshots/51.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/travel-blog-v1/?ref=rea-plugin-backend-templates",
    "tags": "travel,blog",
    "category": "Travel"
  },
  {
    "id": 52,
    "name": "portfolio",
    "thumbnail": "screenshots/52.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/portfolio-v2/?ref=rea-plugin-backend-templates",
    "tags": "portfolio",
    "category": "Portfolio"
  },
  {
    "id": 53,
    "name": "portfolio",
    "thumbnail": "screenshots/53.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/portfolio-v1/?ref=rea-plugin-backend-templates",
    "tags": "portfolio",
    "category": "Portfolio"
  },
  {
    "id": 54,
    "name": "ico landing page",
    "thumbnail": "screenshots/54.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/ico-landing-page-v1/?ref=rea-plugin-backend-templates",
    "tags": "ico,landing,page",
    "category": ""
  },
  {
    "id": 55,
    "name": "pet care",
    "thumbnail": "screenshots/55.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/pet-care-v1/?ref=rea-plugin-backend-templates",
    "tags": "pet,care",
    "category": ""
  },
  {
    "id": 56,
    "name": "christmas",
    "thumbnail": "screenshots/56.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/christmas-v1/?ref=rea-plugin-backend-templates",
    "tags": "christmas",
    "category": ""
  },
  {
    "id": 57,
    "name": "yoga",
    "thumbnail": "screenshots/57.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/yoga-v1/?ref=rea-plugin-backend-templates",
    "tags": "yoga",
    "category": "Health"
  },
  {
    "id": 58,
    "name": "travel",
    "thumbnail": "screenshots/58.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/travel-v1/?ref=rea-plugin-backend-templates",
    "tags": "travel",
    "category": "Travel"
  },
  {
    "id": 59,
    "name": "music band",
    "thumbnail": "screenshots/59.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/music-band-v1/?ref=rea-plugin-backend-templates",
    "tags": "music,band",
    "category": ""
  },
  {
    "id": 60,
    "name": "coming soon pack",
    "thumbnail": "screenshots/60.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/coming-soon-pack-v1/?ref=rea-plugin-backend-templates",
    "tags": "coming,soon,pack",
    "category": ""
  },
  {
    "id": 61,
    "name": "cryptocurrency",
    "thumbnail": "screenshots/61.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/cryptocurrency-v1/?ref=rea-plugin-backend-templates",
    "tags": "cryptocurrency",
    "category": "Finance"
  },
  {
    "id": 62,
    "name": "skin care",
    "thumbnail": "screenshots/62.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/skincare-v1/?ref=rea-plugin-backend-templates",
    "tags": "skin,care",
    "category": ""
  },
  {
    "id": 63,
    "name": "nail salon",
    "thumbnail": "screenshots/63.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/nail-salon-v1/?ref=rea-plugin-backend-templates",
    "tags": "nail,salon",
    "category": ""
  },
  {
    "id": 64,
    "name": "digital agency",
    "thumbnail": "screenshots/64.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/digitalagency-v1/?ref=rea-plugin-backend-templates",
    "tags": "digital,agency",
    "category": "Digital Marketing"
  },
  {
    "id": 65,
    "name": "plumbing",
    "thumbnail": "screenshots/65.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/plumbing-v1/?ref=rea-plugin-backend-templates",
    "tags": "plumbing",
    "category": ""
  },
  {
    "id": 66,
    "name": "home care",
    "thumbnail": "screenshots/66.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/home-care-v1/?ref=rea-plugin-backend-templates",
    "tags": "home,care",
    "category": "Home Decor"
  },
  {
    "id": 67,
    "name": "designer bio",
    "thumbnail": "screenshots/67.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/designer-bio-v1/?ref=rea-plugin-backend-templates",
    "tags": "designer,bio",
    "category": ""
  },
  {
    "id": 68,
    "name": "digital agency",
    "thumbnail": "screenshots/68.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/digitalagency-v2/?ref=rea-plugin-backend-templates",
    "tags": "digital,agency",
    "category": "Digital Marketing"
  },
  {
    "id": 69,
    "name": "real state consultant",
    "thumbnail": "screenshots/69.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/real-estate-consultant-v1/?ref=rea-plugin-backend-templates",
    "tags": "real,state,consultant",
    "category": "Consultancy"
  },
  {
    "id": 70,
    "name": "dance studio",
    "thumbnail": "screenshots/70.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/dance-studio-v1/?ref=rea-plugin-backend-templates",
    "tags": "dance,studio",
    "category": "Media Production"
  },
  {
    "id": 71,
    "name": "fintech",
    "thumbnail": "screenshots/71.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/fintech-v1/?ref=rea-plugin-backend-templates",
    "tags": "fintech",
    "category": "IT Services"
  },
  {
    "id": 72,
    "name": "drone",
    "thumbnail": "screenshots/72.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/drone-v1/?ref=rea-plugin-backend-templates",
    "tags": "drone",
    "category": ""
  },
  {
    "id": 73,
    "name": "barbershop",
    "thumbnail": "screenshots/73.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/barbershop-v1/?ref=rea-plugin-backend-templates",
    "tags": "barbershop",
    "category": "Retail"
  },
  {
    "id": 74,
    "name": "construction",
    "thumbnail": "screenshots/74.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/construction-v1/?ref=rea-plugin-backend-templates",
    "tags": "construction",
    "category": ""
  },
  {
    "id": 75,
    "name": "it tech",
    "thumbnail": "screenshots/75.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/ittech-v2/?ref=rea-plugin-backend-templates",
    "tags": "it,tech",
    "category": "IT Services"
  },
  {
    "id": 76,
    "name": "ai matrix",
    "thumbnail": "screenshots/76.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/aimatrix-v1/?ref=rea-plugin-backend-templates",
    "tags": "ai,matrix",
    "category": ""
  },
  {
    "id": 77,
    "name": "wine bar",
    "thumbnail": "screenshots/77.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/winebar-v1/?ref=rea-plugin-backend-templates",
    "tags": "wine,bar",
    "category": ""
  },
  {
    "id": 78,
    "name": "wedding",
    "thumbnail": "screenshots/78.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/wedding-v1/?ref=rea-plugin-backend-templates",
    "tags": "wedding",
    "category": ""
  },
  {
    "id": 79,
    "name": "church",
    "thumbnail": "screenshots/79.jpg",
    "templateLink": "https://demosites.royal-elementor-addons.com/church-v1/?ref=rea-plugin-backend-templates",
    "tags": "church",
    "category": ""
  },
  {
    "id": 80,
    "name": "codespot",
    "thumbnail": "screenshots/80.jpg",
    "templateLink": "https://startersites.io/blocksy/codespot/",
    "tags": "codespot",
    "category": ""
  },
  {
    "id": 81,
    "name": "consultant",
    "thumbnail": "screenshots/81.jpg",
    "templateLink": "https://startersites.io/blocksy/consultant/",
    "tags": "consultant",
    "category": "Consultancy"
  },
  {
    "id": 82,
    "name": "smile dent",
    "thumbnail": "screenshots/82.jpg",
    "templateLink": "https://startersites.io/blocksy/smile-dent/",
    "tags": "smile,dent",
    "category": ""
  },
  {
    "id": 83,
    "name": "photo studio",
    "thumbnail": "screenshots/83.jpg",
    "templateLink": "https://startersites.io/blocksy/photo-studio/",
    "tags": "photo,studio",
    "category": "Media Production"
  },
  {
    "id": 84,
    "name": "restaurant",
    "thumbnail": "screenshots/84.jpg",
    "templateLink": "https://startersites.io/blocksy/restaurant/",
    "tags": "restaurant",
    "category": ""
  },
  {
    "id": 85,
    "name": "wood shop",
    "thumbnail": "screenshots/85.jpg",
    "templateLink": "https://startersites.io/blocksy/wood/",
    "tags": "wood,shop",
    "category": "Retail"
  },
  {
    "id": 86,
    "name": "renovation",
    "thumbnail": "screenshots/86.jpg",
    "templateLink": "https://startersites.io/blocksy/renovation/",
    "tags": "renovation",
    "category": ""
  },
  {
    "id": 87,
    "name": "beverr",
    "thumbnail": "screenshots/87.jpg",
    "templateLink": "https://startersites.io/blocksy/beverr/",
    "tags": "beverr",
    "category": ""
  },
  {
    "id": 88,
    "name": "catering",
    "thumbnail": "screenshots/88.jpg",
    "templateLink": "https://startersites.io/blocksy/catering/",
    "tags": "catering",
    "category": ""
  },
  {
    "id": 89,
    "name": "barber shop",
    "thumbnail": "screenshots/89.jpg",
    "templateLink": "https://startersites.io/blocksy/barber-shop/",
    "tags": "barber,shop",
    "category": "Retail"
  },
  {
    "id": 90,
    "name": "biz consult",
    "thumbnail": "screenshots/90.jpg",
    "templateLink": "https://startersites.io/blocksy/bizconsult/",
    "tags": "biz,consult",
    "category": "Consultancy"
  },
  {
    "id": 91,
    "name": "gadgets",
    "thumbnail": "screenshots/91.jpg",
    "templateLink": "https://startersites.io/blocksy/gadgets/",
    "tags": "gadgets",
    "category": ""
  },
  {
    "id": 92,
    "name": "home decor",
    "thumbnail": "screenshots/92.jpg",
    "templateLink": "https://startersites.io/blocksy/home-decor/",
    "tags": "home,decor",
    "category": "Home Decor"
  },
  {
    "id": 93,
    "name": "cleaning service",
    "thumbnail": "screenshots/93.jpg",
    "templateLink": "https://startersites.io/blocksy/cleaning-service/",
    "tags": "cleaning,service",
    "category": ""
  },
  {
    "id": 94,
    "name": "car service",
    "thumbnail": "screenshots/94.jpg",
    "templateLink": "https://startersites.io/blocksy/car-service/",
    "tags": "car,service",
    "category": ""
  },
  {
    "id": 95,
    "name": "floreo",
    "thumbnail": "screenshots/95.jpg",
    "templateLink": "https://startersites.io/blocksy/floreo/",
    "tags": "floreo",
    "category": ""
  },
  {
    "id": 96,
    "name": "garderobe",
    "thumbnail": "screenshots/96.jpg",
    "templateLink": "https://startersites.io/blocksy/garderobe/",
    "tags": "garderobe",
    "category": ""
  },
  {
    "id": 97,
    "name": "petsy",
    "thumbnail": "screenshots/97.jpg",
    "templateLink": "https://startersites.io/blocksy/petsy/",
    "tags": "petsy",
    "category": ""
  },
  {
    "id": 98,
    "name": "justice",
    "thumbnail": "screenshots/98.jpg",
    "templateLink": "https://startersites.io/blocksy/justice/",
    "tags": "justice",
    "category": ""
  },
  {
    "id": 99,
    "name": "wedding",
    "thumbnail": "screenshots/99.jpg",
    "templateLink": "https://startersites.io/blocksy/wedding/",
    "tags": "wedding",
    "category": ""
  },
  {
    "id": 100,
    "name": "web agency",
    "thumbnail": "screenshots/100.jpg",
    "templateLink": "https://startersites.io/blocksy/web-agency/",
    "tags": "web,agency",
    "category": "IT Services"
  },
  {
    "id": 101,
    "name": "persona",
    "thumbnail": "screenshots/101.jpg",
    "templateLink": "https://startersites.io/blocksy/persona/",
    "tags": "persona",
    "category": ""
  },
  {
    "id": 102,
    "name": "yogi",
    "thumbnail": "screenshots/102.jpg",
    "templateLink": "https://startersites.io/blocksy/yogi/",
    "tags": "yogi",
    "category": ""
  },
  {
    "id": 103,
    "name": "homi",
    "thumbnail": "screenshots/103.jpg",
    "templateLink": "https://startersites.io/blocksy/homi/",
    "tags": "homi",
    "category": ""
  },
  {
    "id": 104,
    "name": "tasty",
    "thumbnail": "screenshots/104.jpg",
    "templateLink": "https://startersites.io/blocksy/tasty/",
    "tags": "tasty",
    "category": ""
  },
  {
    "id": 105,
    "name": "business",
    "thumbnail": "screenshots/105.jpg",
    "templateLink": "https://startersites.io/blocksy/business/",
    "tags": "business",
    "category": ""
  },
  {
    "id": 106,
    "name": "product reviews",
    "thumbnail": "screenshots/106.jpg",
    "templateLink": "https://startersites.io/blocksy/product-reviews/",
    "tags": "product,reviews",
    "category": ""
  },
  {
    "id": 107,
    "name": "charity",
    "thumbnail": "screenshots/107.jpg",
    "templateLink": "https://startersites.io/blocksy/charity/",
    "tags": "charity",
    "category": ""
  },
  {
    "id": 108,
    "name": "travel",
    "thumbnail": "screenshots/108.jpg",
    "templateLink": "https://startersites.io/blocksy/travel/",
    "tags": "travel",
    "category": "Travel"
  },
  {
    "id": 109,
    "name": "app",
    "thumbnail": "screenshots/109.jpg",
    "templateLink": "https://startersites.io/blocksy/app/",
    "tags": "app",
    "category": "IT Services"
  },
  {
    "id": 110,
    "name": "modern shop",
    "thumbnail": "screenshots/110.jpg",
    "templateLink": "https://startersites.io/blocksy/modern-shop/",
    "tags": "modern,shop",
    "category": "Retail"
  },
  {
    "id": 111,
    "name": "blog",
    "thumbnail": "screenshots/111.jpg",
    "templateLink": "https://startersites.io/blocksy/blog/",
    "tags": "blog",
    "category": ""
  },
  {
    "id": 112,
    "name": "love nature",
    "thumbnail": "screenshots/112.jpg",
    "templateLink": "https://websitedemos.net/love-nature-02/?customize=template",
    "tags": "love,nature",
    "category": ""
  },
  {
    "id": 113,
    "name": "travel outdoor adventure",
    "thumbnail": "screenshots/113.jpg",
    "templateLink": "https://websitedemos.net/outdoor-adventure-02/?customize=template",
    "tags": "travel,outdoor,adventure",
    "category": "Travel"
  },
  {
    "id": 114,
    "name": "wellness coach",
    "thumbnail": "screenshots/114.jpg",
    "templateLink": "https://websitedemos.net/wellness-coach-02/?customize=template",
    "tags": "wellness,coach",
    "category": "Health"
  },
  {
    "id": 115,
    "name": "earth",
    "thumbnail": "screenshots/115.jpg",
    "templateLink": "https://websitedemos.net/earth-02/?customize=template",
    "tags": "earth",
    "category": "Travel"
  },
  {
    "id": 116,
    "name": "Agency",
    "thumbnail": "screenshots/116.jpg",
    "templateLink": "https://websitedemos.net/agency-02/?customize=template",
    "tags": "agency",
    "category": "IT Services"
  },
  {
    "id": 117,
    "name": "tech news",
    "thumbnail": "screenshots/117.jpg",
    "templateLink": "https://websitedemos.net/tech-news-04/?customize=template",
    "tags": "tech,news",
    "category": "Media Production"
  },
  {
    "id": 118,
    "name": "personal portfolio",
    "thumbnail": "screenshots/118.jpg",
    "templateLink": "https://websitedemos.net/personal-portfolio-02/?customize=template",
    "tags": "personal,portfolio",
    "category": "IT Services"
  },
  {
    "id": 119,
    "name": "construction campany",
    "thumbnail": "screenshots/119.jpg",
    "templateLink": "https://websitedemos.net/construction-company-02/?customize=template",
    "tags": "construction,campany",
    "category": "Real Estate"
  },
  {
    "id": 120,
    "name": "mountain",
    "thumbnail": "screenshots/120.jpg",
    "templateLink": "https://websitedemos.net/mountain-02/?customize=template",
    "tags": "mountain",
    "category": ""
  },
  {
    "id": 121,
    "name": "blog",
    "thumbnail": "screenshots/121.jpg",
    "templateLink": "https://websitedemos.net/creative-blog-02/?customize=template",
    "tags": "blog",
    "category": ""
  },
  {
    "id": 122,
    "name": "day care",
    "thumbnail": "screenshots/122.jpg",
    "templateLink": "https://websitedemos.net/daycare-02/?customize=template",
    "tags": "day,care",
    "category": ""
  },
  {
    "id": 123,
    "name": "travel",
    "thumbnail": "screenshots/123.jpg",
    "templateLink": "https://websitedemos.net/joanthomas-traveller-index-bio-02/?customize=template",
    "tags": "travel",
    "category": "Travel"
  },
  {
    "id": 124,
    "name": "travel",
    "thumbnail": "screenshots/124.jpg",
    "templateLink": "https://websitedemos.net/emilysmith-traveller-index-bio-02/?customize=template",
    "tags": "travel",
    "category": "Travel"
  },
  {
    "id": 125,
    "name": "home decor",
    "thumbnail": "screenshots/125.jpg",
    "templateLink": "https://websitedemos.net/archmasters-architecture-02/?customize=template",
    "tags": "home,decor",
    "category": "Home Decor"
  },
  {
    "id": 126,
    "name": "lotus spa",
    "thumbnail": "screenshots/126.jpg",
    "templateLink": "https://websitedemos.net/lotus-spa-02/?customize=template",
    "tags": "lotus,spa",
    "category": ""
  },
  {
    "id": 127,
    "name": "artitest",
    "thumbnail": "screenshots/127.jpg",
    "templateLink": "https://websitedemos.net/artist-multipurpose-02/?customize=template",
    "tags": "artitest",
    "category": ""
  },
  {
    "id": 128,
    "name": "travel",
    "thumbnail": "screenshots/128.jpg",
    "templateLink": "https://websitedemos.net/ursulajones-traveller-index-bio-02/?customize=template#",
    "tags": "travel",
    "category": "Travel"
  },
  {
    "id": 129,
    "name": "cafe library",
    "thumbnail": "screenshots/129.jpg",
    "templateLink": "https://websitedemos.net/cafe-library-02/?customize=template",
    "tags": "cafe,library",
    "category": ""
  },
  {
    "id": 130,
    "name": "party planner",
    "thumbnail": "screenshots/130.jpg",
    "templateLink": "https://websitedemos.net/party-planner-02/?customize=template",
    "tags": "party,planner",
    "category": "Media Production"
  },
  {
    "id": 131,
    "name": "guitarist",
    "thumbnail": "screenshots/131.jpg",
    "templateLink": "https://websitedemos.net/guitarist-02/?customize=template",
    "tags": "guitarist",
    "category": ""
  },
  {
    "id": 132,
    "name": "designer",
    "thumbnail": "screenshots/132.jpg",
    "templateLink": "https://websitedemos.net/alexandrina-designer-bio-02/?customize=template",
    "tags": "designer",
    "category": ""
  },
  {
    "id": 133,
    "name": "earth store",
    "thumbnail": "screenshots/133.jpg",
    "templateLink": "https://websitedemos.net/earth-store-02/?customize=template",
    "tags": "earth,store",
    "category": ""
  },
  {
    "id": 134,
    "name": "gardening landscape",
    "thumbnail": "screenshots/134.jpg",
    "templateLink": "https://websitedemos.net/gardening-and-landscape-02/?customize=template",
    "tags": "gardening,landscape",
    "category": ""
  },
  {
    "id": 135,
    "name": "portfolio",
    "thumbnail": "screenshots/135.jpg",
    "templateLink": "https://websitedemos.net/visual-artist-portfolio-02/?customize=template",
    "tags": "portfolio",
    "category": ""
  },
  {
    "id": 136,
    "name": "designer portfolio",
    "thumbnail": "screenshots/136.jpg",
    "templateLink": "https://websitedemos.net/web-designer-portfolio-02/?customize=template",
    "tags": "designer,portfolio",
    "category": ""
  },
  {
    "id": 137,
    "name": "bakery",
    "thumbnail": "screenshots/137.jpg",
    "templateLink": "https://websitedemos.net/bakery-index-bio-02/?customize=template",
    "tags": "bakery",
    "category": ""
  },
  {
    "id": 138,
    "name": "tutor",
    "thumbnail": "screenshots/138.jpg",
    "templateLink": "https://websitedemos.net/language-tutors-02/?customize=template",
    "tags": "tutor",
    "category": "Education / Training"
  },
  {
    "id": 139,
    "name": "hope",
    "thumbnail": "screenshots/139.jpg",
    "templateLink": "https://websitedemos.net/hope-02/?customize=template",
    "tags": "hope",
    "category": ""
  },
  {
    "id": 140,
    "name": "locksmith",
    "thumbnail": "screenshots/140.jpg",
    "templateLink": "https://websitedemos.net/locksmith-02/?customize=template",
    "tags": "locksmith",
    "category": ""
  },
  {
    "id": 141,
    "name": "Academy",
    "thumbnail": "screenshots/141.jpg",
    "templateLink": "https://websitedemos.net/learndash-academy-02/?customize=template",
    "tags": "academy",
    "category": "Education / Training"
  },
  {
    "id": 142,
    "name": "designer bio",
    "thumbnail": "screenshots/142.jpg",
    "templateLink": "https://websitedemos.net/adham-hoffman-designer-bio-02/?customize=template",
    "tags": "designer,bio",
    "category": ""
  },
  {
    "id": 143,
    "name": "health coach",
    "thumbnail": "screenshots/143.jpg",
    "templateLink": "https://websitedemos.net/online-health-coach-02/?customize=template",
    "tags": "health,coach",
    "category": "Health"
  },
  {
    "id": 144,
    "name": "galatic",
    "thumbnail": "screenshots/144.jpg",
    "templateLink": "https://websitedemos.net/galatic-02/?customize=template",
    "tags": "galatic",
    "category": ""
  },
  {
    "id": 145,
    "name": "roofing agency",
    "thumbnail": "screenshots/145.jpg",
    "templateLink": "https://websitedemos.net/roofing-agency-02/?customize=template",
    "tags": "roofing,agency",
    "category": ""
  },
  {
    "id": 146,
    "name": "heating technician",
    "thumbnail": "screenshots/146.jpg",
    "templateLink": "https://websitedemos.net/heating-and-ac-technician-02/?customize=template",
    "tags": "heating,technician",
    "category": ""
  },
  {
    "id": 147,
    "name": "coffee house",
    "thumbnail": "screenshots/147.jpg",
    "templateLink": "https://websitedemos.net/coffee-house-02/?customize=template",
    "tags": "coffee,house",
    "category": ""
  },
  {
    "id": 148,
    "name": "real state ",
    "thumbnail": "screenshots/148.jpg",
    "templateLink": "https://websitedemos.net/real-estate-consultant-02/?customize=template",
    "tags": "real,state,",
    "category": "Consultancy"
  },
  {
    "id": 149,
    "name": "restaurant",
    "thumbnail": "screenshots/149.jpg",
    "templateLink": "https://websitedemos.net/deli-restaurant-02/?customize=template",
    "tags": "restaurant",
    "category": ""
  },
  {
    "id": 150,
    "name": "covid prevention",
    "thumbnail": "screenshots/150.jpg",
    "templateLink": "https://websitedemos.net/covid-prevention-02/?customize=template",
    "tags": "covid,prevention",
    "category": ""
  },
  {
    "id": 151,
    "name": "flute artist",
    "thumbnail": "screenshots/151.jpg",
    "templateLink": "https://websitedemos.net/flute-artist-02/?customize=template",
    "tags": "flute,artist",
    "category": ""
  },
  {
    "id": 152,
    "name": "wedding invitation",
    "thumbnail": "screenshots/152.jpg",
    "templateLink": "https://websitedemos.net/wedding-invitation-02/?customize=template",
    "tags": "wedding,invitation",
    "category": ""
  },
  {
    "id": 153,
    "name": "learn baking",
    "thumbnail": "screenshots/153.jpg",
    "templateLink": "https://websitedemos.net/learn-baking-02/?customize=template",
    "tags": "learn,baking",
    "category": ""
  },
  {
    "id": 154,
    "name": "security services",
    "thumbnail": "screenshots/154.jpg",
    "templateLink": "https://websitedemos.net/security-services-02/?customize=template",
    "tags": "security,services",
    "category": ""
  },
  {
    "id": 155,
    "name": "local business",
    "thumbnail": "screenshots/155.jpg",
    "templateLink": "https://websitedemos.net/local-business-02/?customize=template",
    "tags": "local,business",
    "category": ""
  },
  {
    "id": 156,
    "name": "steak house",
    "thumbnail": "screenshots/156.jpg",
    "templateLink": "https://websitedemos.net/steak-house-02/?customize=template",
    "tags": "steak,house",
    "category": ""
  },
  {
    "id": 157,
    "name": "generic",
    "thumbnail": "screenshots/157.jpg",
    "templateLink": "https://websitedemos.net/generic-02/?customize=template",
    "tags": "generic",
    "category": ""
  },
  {
    "id": 158,
    "name": "digital agency",
    "thumbnail": "screenshots/158.jpg",
    "templateLink": "https://websitedemos.net/digital-agency-02/?customize=template",
    "tags": "digital,agency",
    "category": ""
  },
  {
    "id": 159,
    "name": "business consulting",
    "thumbnail": "screenshots/159.jpg",
    "templateLink": "https://websitedemos.net/business-consulting-02/?customize=template",
    "tags": "business,consulting",
    "category": "Consultancy"
  },
  {
    "id": 160,
    "name": "public speaker",
    "thumbnail": "screenshots/160.jpg",
    "templateLink": "https://websitedemos.net/public-speaker-02/?customize=template",
    "tags": "public,speaker",
    "category": ""
  },
  {
    "id": 161,
    "name": "freelance trader",
    "thumbnail": "screenshots/161.jpg",
    "templateLink": "https://websitedemos.net/freelance-trader-02/?customize=template",
    "tags": "freelance,trader",
    "category": ""
  },
  {
    "id": 162,
    "name": "freelance trader",
    "thumbnail": "screenshots/162.jpg",
    "templateLink": "https://websitedemos.net/freelance-trader-02/?customize=template",
    "tags": "freelance,trader",
    "category": ""
  },
  {
    "id": 163,
    "name": "realationship coach",
    "thumbnail": "screenshots/163.jpg",
    "templateLink": "https://websitedemos.net/relationship-coach-02/?customize=template",
    "tags": "realationship,coach",
    "category": ""
  },
  {
    "id": 164,
    "name": "creative podcaster",
    "thumbnail": "screenshots/164.jpg",
    "templateLink": "https://websitedemos.net/creative-podcaster-02/?customize=template",
    "tags": "creative,podcaster",
    "category": ""
  },
  {
    "id": 165,
    "name": "vlooger",
    "thumbnail": "screenshots/165.jpg",
    "templateLink": "https://websitedemos.net/vlogger-02/?customize=template",
    "tags": "vlooger",
    "category": ""
  },
  {
    "id": 166,
    "name": "tech startup",
    "thumbnail": "screenshots/166.jpg",
    "templateLink": "https://websitedemos.net/tech-startup-02/?customize=template",
    "tags": "tech,startup",
    "category": ""
  },
  {
    "id": 167,
    "name": "digital marketing",
    "thumbnail": "screenshots/167.jpg",
    "templateLink": "https://websitedemos.net/learn-digital-marketing-02/?customize=template",
    "tags": "digital,marketing",
    "category": "Digital Marketing"
  },
  {
    "id": 168,
    "name": "webinar",
    "thumbnail": "screenshots/168.jpg",
    "templateLink": "https://websitedemos.net/webinar-02/?customize=template",
    "tags": "webinar",
    "category": ""
  },
  {
    "id": 169,
    "name": "marketing agency",
    "thumbnail": "screenshots/169.jpg",
    "templateLink": "https://websitedemos.net/marketing-agency-02/?customize=template",
    "tags": "marketing,agency",
    "category": ""
  },
  {
    "id": 170,
    "name": "lawyer",
    "thumbnail": "screenshots/170.jpg",
    "templateLink": "https://websitedemos.net/injury-accident-lawyer-02/?customize=template",
    "tags": "lawyer",
    "category": ""
  },
  {
    "id": 171,
    "name": "artist",
    "thumbnail": "screenshots/171.jpg",
    "templateLink": "https://websitedemos.net/calligraphy-artist-02/?customize=template",
    "tags": "artist",
    "category": ""
  },
  {
    "id": 172,
    "name": "theatre artist",
    "thumbnail": "screenshots/172.jpg",
    "templateLink": "https://websitedemos.net/theatre-artist-02/?customize=template",
    "tags": "theatre,artist",
    "category": ""
  },
  {
    "id": 173,
    "name": "musical instrument",
    "thumbnail": "screenshots/173.jpg",
    "templateLink": "https://websitedemos.net/musical-instrument-maker-02/?customize=template",
    "tags": "musical,instrument",
    "category": "Media Production"
  },
  {
    "id": 174,
    "name": "life coach ",
    "thumbnail": "screenshots/174.jpg",
    "templateLink": "https://websitedemos.net/life-coach-sara-john/?customize=template",
    "tags": "life,coach,",
    "category": ""
  },
  {
    "id": 175,
    "name": "childcare blog",
    "thumbnail": "screenshots/175.jpg",
    "templateLink": "https://websitedemos.net/childcare-blog-02/?customize=template",
    "tags": "childcare,blog",
    "category": ""
  },
  {
    "id": 176,
    "name": "Roofing services",
    "thumbnail": "screenshots/176.jpg",
    "templateLink": "https://websitedemos.net/roofing-services-02/?customize=template",
    "tags": "roofing,services",
    "category": ""
  },
  {
    "id": 177,
    "name": "pharmaceutical",
    "thumbnail": "screenshots/177.jpg",
    "templateLink": "https://websitedemos.net/pharmaceutical-02/?customize=template",
    "tags": "pharmaceutical",
    "category": "Health"
  },
  {
    "id": 178,
    "name": "family lawyer",
    "thumbnail": "screenshots/178.jpg",
    "templateLink": "https://websitedemos.net/family-lawyer-02/?customize=template",
    "tags": "family,lawyer",
    "category": ""
  },
  {
    "id": 179,
    "name": "voiceover artist",
    "thumbnail": "screenshots/179.jpg",
    "templateLink": "https://websitedemos.net/voiceover-artist-02/?customize=template",
    "tags": "voiceover,artist",
    "category": ""
  },
  {
    "id": 180,
    "name": "diagnostics lab",
    "thumbnail": "screenshots/180.jpg",
    "templateLink": "https://websitedemos.net/diagnostics-lab-02/?customize=template",
    "tags": "diagnostics,lab",
    "category": ""
  },
  {
    "id": 181,
    "name": "piano tutor",
    "thumbnail": "screenshots/181.jpg",
    "templateLink": "https://websitedemos.net/piano-tutor-02/?customize=template",
    "tags": "piano,tutor",
    "category": ""
  },
  {
    "id": 182,
    "name": "women empowerment",
    "thumbnail": "screenshots/182.jpg",
    "templateLink": "https://websitedemos.net/women-empowerment-02/?customize=template",
    "tags": "women,empowerment",
    "category": ""
  },
  {
    "id": 183,
    "name": "musician",
    "thumbnail": "screenshots/183.jpg",
    "templateLink": "https://websitedemos.net/musician-02/?customize=template",
    "tags": "musician",
    "category": "Media Production"
  },
  {
    "id": 184,
    "name": "learn oil painting",
    "thumbnail": "screenshots/184.jpg",
    "templateLink": "https://websitedemos.net/learn-oil-painting-02/?customize=template",
    "tags": "learn,oil,painting",
    "category": "Education / Training"
  },
  {
    "id": 185,
    "name": "elderly care",
    "thumbnail": "screenshots/185.jpg",
    "templateLink": "https://websitedemos.net/elderly-care-02/?customize=template",
    "tags": "elderly,care",
    "category": "Health"
  },
  {
    "id": 186,
    "name": "portfolio",
    "thumbnail": "screenshots/186.jpg",
    "templateLink": "https://websitedemos.net/portfolio-02/?customize=template",
    "tags": "portfolio",
    "category": "Portfolio"
  },
  {
    "id": 187,
    "name": "Coffee Shop",
    "thumbnail": "screenshots/187.jpg",
    "templateLink": "https://websitedemos.net/coffee-shop-02/?customize=template",
    "tags": "coffee,shop",
    "category": "Restaurant & Cafe"
  },
  {
    "id": 188,
    "name": "Horticulture",
    "thumbnail": "screenshots/188.jpg",
    "templateLink": "https://websitedemos.net/horticulture-02/?customize=template",
    "tags": "horticulture,agriculture,nature",
    "category": "Agriculture & Nature"
  },
  {
    "id": 189,
    "name": "School",
    "thumbnail": "screenshots/189.jpg",
    "templateLink": "https://websitedemos.net/school-02/?customize=template",
    "tags": "school,education",
    "category": "Education"
  },
  {
    "id": 190,
    "name": "BBQ Restaurant",
    "thumbnail": "screenshots/190.jpg",
    "templateLink": "https://websitedemos.net/bbq-restaurant-02/?customize=template",
    "tags": "bbq,restaurant",
    "category": "Restaurant & Cafe"
  },
  {
    "id": 191,
    "name": "Yoga Instructor",
    "thumbnail": "screenshots/191.jpg",
    "templateLink": "https://websitedemos.net/yoga-instructor-02/?customize=template",
    "tags": "yoga,instructor",
    "category": "Health & Wellness"
  },
  {
    "id": 192,
    "name": "Nutritionist",
    "thumbnail": "screenshots/192.jpg",
    "templateLink": "https://websitedemos.net/nutritionist-02/?customize=template",
    "tags": "nutritionist,health",
    "category": "Health & Wellness"
  },
  {
    "id": 193,
    "name": "Fitness Trainer",
    "thumbnail": "screenshots/193.jpg",
    "templateLink": "https://websitedemos.net/fitness-trainer-02/?customize=template",
    "tags": "fitness,trainer",
    "category": "Health & Wellness"
  },
  {
    "id": 194,
    "name": "Accountant",
    "thumbnail": "screenshots/194.jpg",
    "templateLink": "https://websitedemos.net/accountant-02/?customize=template",
    "tags": "accountant,business",
    "category": "Business & Finance"
  },
  {
    "id": 195,
    "name": "Animal Welfare",
    "thumbnail": "screenshots/195.jpg",
    "templateLink": "https://websitedemos.net/animal-welfare-02/?customize=template",
    "tags": "animal,welfare",
    "category": "NGO & Charity"
  },
  {
    "id": 196,
    "name": "Restaurant BBQ",
    "thumbnail": "screenshots/196.jpg",
    "templateLink": "https://websitedemos.net/restaurant-bbq-02/?customize=template",
    "tags": "restaurant,bbq",
    "category": "Restaurant & Cafe"
  },
  {
    "id": 197,
    "name": "Dentist",
    "thumbnail": "screenshots/197.jpg",
    "templateLink": "https://websitedemos.net/dentist-02/?customize=template",
    "tags": "dentist,health",
    "category": "Health & Wellness"
  },
  {
    "id": 198,
    "name": "Pet Sitting",
    "thumbnail": "screenshots/198.jpg",
    "templateLink": "https://websitedemos.net/pet-sitting-02/?customize=template",
    "tags": "pet,sitting,animals",
    "category": "Pets & Animals"
  },
  {
    "id": 199,
    "name": "Professional Services",
    "thumbnail": "screenshots/199.jpg",
    "templateLink": "https://websitedemos.net/professional-services-02/?customize=template",
    "tags": "professional,services",
    "category": "Business & Services"
  },
  {
    "id": 200,
    "name": "Windows & Doors",
    "thumbnail": "screenshots/200.jpg",
    "templateLink": "https://websitedemos.net/windows-and-doors-02/?customize=template",
    "tags": "windows,doors,construction",
    "category": "Construction & Industrial"
  },
  {
    "id": 201,
    "name": "Health Wellness",
    "thumbnail": "screenshots/201.jpg",
    "templateLink": "https://websitedemos.net/health-wellness-02/?customize=template",
    "tags": "health,wellness",
    "category": "Health & Wellness"
  },
  {
    "id": 202,
    "name": "Chartered Accountant",
    "thumbnail": "screenshots/202.jpg",
    "templateLink": "https://websitedemos.net/chartered-accountant-02/?customize=template",
    "tags": "chartered,accountant",
    "category": "Business & Finance"
  },
  {
    "id": 203,
    "name": "Real Estate",
    "thumbnail": "screenshots/203.jpg",
    "templateLink": "https://websitedemos.net/real-estate-02/?customize=template",
    "tags": "real,estate",
    "category": "Business & Finance"
  },
  {
    "id": 204,
    "name": "Stylist",
    "thumbnail": "screenshots/204.jpg",
    "templateLink": "https://websitedemos.net/stylist-02/?customize=template",
    "tags": "stylist,fashion",
    "category": "Fashion & Lifestyle"
  },
  {
    "id": 205,
    "name": "Car Wash",
    "thumbnail": "screenshots/205.jpg",
    "templateLink": "https://websitedemos.net/car-wash-02/?customize=template",
    "tags": "car,wash",
    "category": "Local Services"
  },
  {
    "id": 206,
    "name": "Travel & Tourism",
    "thumbnail": "screenshots/206.jpg",
    "templateLink": "https://websitedemos.net/travel-and-tourism-02/?customize=template",
    "tags": "travel,tourism",
    "category": "Travel & Hotel"
  },
  {
    "id": 207,
    "name": "Event",
    "thumbnail": "screenshots/207.jpg",
    "templateLink": "https://websitedemos.net/event-02/?customize=template",
    "tags": "event,events",
    "category": "Events"
  },
  {
    "id": 208,
    "name": "Garden Maintenance",
    "thumbnail": "screenshots/208.jpg",
    "templateLink": "https://websitedemos.net/garden-maintenance-02/?customize=template",
    "tags": "garden,maintenance",
    "category": "Agriculture & Nature"
  },
  {
    "id": 209,
    "name": "Serenity Spa",
    "thumbnail": "screenshots/209.jpg",
    "templateLink": "https://websitedemos.net/serenity-spa-02/?customize=template",
    "tags": "serenity,spa",
    "category": "Health & Wellness"
  },
  {
    "id": 210,
    "name": "Interior Designer",
    "thumbnail": "screenshots/210.jpg",
    "templateLink": "https://websitedemos.net/interior-designer-02/?customize=template",
    "tags": "interior,designer",
    "category": "Business & Services"
  },
  {
    "id": 211,
    "name": "Content Marketing",
    "thumbnail": "screenshots/211.jpg",
    "templateLink": "https://websitedemos.net/content-marketing-02/?customize=template",
    "tags": "content,marketing",
    "category": "Digital Marketing"
  },
  {
    "id": 212,
    "name": "Barber Shop",
    "thumbnail": "screenshots/212.jpg",
    "templateLink": "https://websitedemos.net/barber-shop-02/?customize=template",
    "tags": "barber,shop",
    "category": "Fashion & Lifestyle"
  },
  {
    "id": 213,
    "name": "Plumber",
    "thumbnail": "screenshots/213.jpg",
    "templateLink": "https://websitedemos.net/plumber-02/?customize=template",
    "tags": "plumber,services",
    "category": "Local Services"
  },
  {
    "id": 214,
    "name": "Communities",
    "thumbnail": "screenshots/214.jpg",
    "templateLink": "https://websitedemos.net/communities-02/?customize=template",
    "tags": "communities,social",
    "category": "Community & Social"
  },
  {
    "id": 215,
    "name": "Sierra Nature",
    "thumbnail": "screenshots/215.jpg",
    "templateLink": "https://websitedemos.net/sierra-nature-02/?customize=template",
    "tags": "sierra,nature,corporate",
    "category": "Industry & Corporate"
  },
  {
    "id": 216,
    "name": "Sierra Industry",
    "thumbnail": "screenshots/216.jpg",
    "templateLink": "https://websitedemos.net/sierra-industry-02/?customize=template",
    "tags": "sierra,industry",
    "category": "Industry & Corporate"
  },
  {
    "id": 217,
    "name": "Italian Restaurant",
    "thumbnail": "screenshots/217.jpg",
    "templateLink": "https://websitedemos.net/italian-restaurant-02/?customize=template",
    "tags": "italian,restaurant",
    "category": "Restaurant & Cafe"
  },
  {
    "id": 218,
    "name": "Interior Firm",
    "thumbnail": "screenshots/218.jpg",
    "templateLink": "https://websitedemos.net/interior-firm-02/?customize=template",
    "tags": "interior,firm",
    "category": "Business & Services"
  },
  {
    "id": 219,
    "name": "AC Technician",
    "thumbnail": "screenshots/219.jpg",
    "templateLink": "https://websitedemos.net/ac-technician-02/?customize=template",
    "tags": "ac,technician",
    "category": "Local Services"
  },
  {
    "id": 220,
    "name": "Charity",
    "thumbnail": "screenshots/220.jpg",
    "templateLink": "https://websitedemos.net/charity-02/?customize=template",
    "tags": "charity,ngo",
    "category": "NGO & Charity"
  },
  {
    "id": 221,
    "name": "Conference Event",
    "thumbnail": "screenshots/221.jpg",
    "templateLink": "https://websitedemos.net/conference-event-02/?customize=template",
    "tags": "conference,event",
    "category": "Events"
  },
  {
    "id": 222,
    "name": "Coach",
    "thumbnail": "screenshots/222.jpg",
    "templateLink": "https://websitedemos.net/coach-02/?customize=template",
    "tags": "coach,education",
    "category": "Education & Coaching"
  },
  {
    "id": 223,
    "name": "Motivational Speaker",
    "thumbnail": "screenshots/223.jpg",
    "templateLink": "https://websitedemos.net/motivational-speaker-02/?customize=template",
    "tags": "motivational,speaker",
    "category": "Education & Coaching"
  },
  {
    "id": 224,
    "name": "Travel Diary",
    "thumbnail": "screenshots/224.jpg",
    "templateLink": "https://websitedemos.net/wanderlust-travel-diary-04/?customize=template",
    "tags": "travel,diary,blog",
    "category": "Blog & Personal"
  },
  {
    "id": 225,
    "name": "Fashion Lifestyle",
    "thumbnail": "screenshots/225.jpg",
    "templateLink": "https://websitedemos.net/fashion-lifestyle-02/?customize=template",
    "tags": "fashion,lifestyle",
    "category": "Fashion & Lifestyle"
  },
  {
    "id": 226,
    "name": "Artist",
    "thumbnail": "screenshots/226.jpg",
    "templateLink": "https://websitedemos.net/artist-02/?customize=template",
    "tags": "artist,portfolio",
    "category": "Creative & Portfolio"
  },
  {
    "id": 227,
    "name": "Car Repair",
    "thumbnail": "screenshots/227.jpg",
    "templateLink": "https://websitedemos.net/car-repair-02/?customize=template",
    "tags": "car,repair",
    "category": "Local Services"
  },
  {
    "id": 228,
    "name": "Gardener",
    "thumbnail": "screenshots/228.jpg",
    "templateLink": "https://websitedemos.net/gardener-02/?customize=template",
    "tags": "gardener,nature",
    "category": "Agriculture & Nature"
  },
  {
    "id": 229,
    "name": "Construction",
    "thumbnail": "screenshots/229.jpg",
    "templateLink": "https://websitedemos.net/construction-02/?customize=template",
    "tags": "construction,industrial",
    "category": "Construction & Industrial"
  },
  {
    "id": 230,
    "name": "Co-working Space",
    "thumbnail": "screenshots/230.jpg",
    "templateLink": "https://websitedemos.net/co-working-space-02/?customize=template",
    "tags": "co-working,space",
    "category": "Business & Services"
  },
  {
    "id": 231,
    "name": "Wedding",
    "thumbnail": "screenshots/231.jpg",
    "templateLink": "https://websitedemos.net/wedding-02/?customize=template",
    "tags": "wedding,events",
    "category": "Events"
  },
  {
    "id": 232,
    "name": "Law",
    "thumbnail": "screenshots/232.jpg",
    "templateLink": "https://websitedemos.net/law-02/?customize=template",
    "tags": "law,legal",
    "category": "Legal Services"
  },
  {
    "id": 233,
    "name": "Electrician",
    "thumbnail": "screenshots/233.jpg",
    "templateLink": "https://websitedemos.net/electrician-02/?customize=template",
    "tags": "electrician,local",
    "category": "Local Services"
  },
  {
    "id": 234,
    "name": "Dental",
    "thumbnail": "screenshots/234.jpg",
    "templateLink": "https://websitedemos.net/dental-02/?customize=template",
    "tags": "dental,health",
    "category": "Health & Wellness"
  },
  {
    "id": 235,
    "name": "Makeup Artist",
    "thumbnail": "screenshots/235.jpg",
    "templateLink": "https://websitedemos.net/makeup-artist-02/?customize=template",
    "tags": "makeup,artist",
    "category": "Fashion & Lifestyle"
  },
  {
    "id": 236,
    "name": "Cleaner",
    "thumbnail": "screenshots/236.jpg",
    "templateLink": "https://websitedemos.net/cleaner-02/?customize=template",
    "tags": "cleaner,local",
    "category": "Local Services"
  },
  {
    "id": 237,
    "name": "Hotel",
    "thumbnail": "screenshots/237.jpg",
    "templateLink": "https://websitedemos.net/hotel-02/?customize=template",
    "tags": "hotel,travel",
    "category": "Travel & Hotel"
  },
  {
    "id": 238,
    "name": "Finance Pro",
    "thumbnail": "screenshots/238.jpg",
    "templateLink": "https://stripe.com",
    "tags": "finance,pro",
    "category": "Finance"
  }
];
