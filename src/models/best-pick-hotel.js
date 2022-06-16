const bestPickdata = [
  {
    id: 1,
    namaHotel: "Plataran Komodo Resort & Spa",
    rating: "4.7",
    kota: "East Nusa Tenggara",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "Amid tropical gardens on tranquil Waicecu Beach, this upscale hotel with views of the Flores Sea lies less than 1 km from the town of Labuan Bajo and 7 km from Komodo Airport.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://www.plataran.com/plataran-komodo/wp-content/uploads/sites/2/2020/03/Deluxe-Garden-Villa_1.jpg",
  },
  {
    id: 2,
    namaHotel: "Padma Resort Ubud",
    rating: "4.7",
    kota: "Bali",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "Set in terraced gardens overlooking a bamboo forest, this upscale resort is 21 km from the Ubud Monkey Forest.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/f8/1c/13/padma-resort-ubud.jpg?w=900&h=-1&s=1",
  },
  {
    id: 3,
    namaHotel: "Whiz Prime Hotel Hasanuddin Makasar",
    rating: "4.7",
    kota: "North Sulawesi",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "Less than 1 km from Fort Rotterdam, this straightforward hotel with a quirky, contemporary exterior is a 4-minute walk from a bus stop and 2 km from Losari Beach.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://origin.pegipegi.com/jalan/images/pict1L/Y0/Y903770/Y903770023.jpg",
  },
  {
    id: 4,
    namaHotel: "Natra Bintan",
    rating: "4.7",
    kota: "Riau Islands",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "Surrounded by mangroves, this upscale hotel along a 6-hectare lagoon is 3 km from Laguna Bintan Golf Club and 7 km from Lagoi Bay Lantern Park.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://pix10.agoda.net/hotelImages/7545668/0/129b0976921c96e12fa1e1787c3931ac.jpg?ca=28&ce=0&s=1024x768",
  },
  {
    id: 5,
    namaHotel: "Double Six Luxury Hotel",
    rating: "4.7",
    kota: "Bali",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "This palatial luxury hotel, set in the upmarket Seminyak district, is a minute's walk from the beach, and 1.9 km from the shops in Seminyak.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9d/e1/3e/double-six-luxury-hotel.jpg?w=900&h=-1&s=1",
  },
  {
    id: 6,
    namaHotel: "DoubleTree by Hilton",
    rating: "4.7",
    kota: "Jakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "A 6-minute walk from Cikini train station, this contemporary hotel in the central business district is 3.9 km from the National Monument and 4.4 km from Istiqlal Mosque",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/44/95/4495900_v1.jpeg",
  },
  {
    id: 7,
    namaHotel: "The Trans Luxury Hotel",
    rating: "4.7",
    kota: "Bandung",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "Across the street from the Trans Studio Mall Bandung, this polished hotel is 2 km from Cikudapateuh train station and 4 km from dining and shopping along lively Braga Street",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://img.beritasatu.com/cache/beritasatu/910x580-2/1479097083.jpg",
  },
  {
    id: 8,
    namaHotel: "ASTON Kupang Hotel & Convention Center",
    rating: "4.5",
    kota: "Kupang",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "Overlooking the Savu Sea, this understated hotel is 5 km from Kupang Waterpark and 7 km from the white-sand Lasiana Beach.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/45/d2/a7/astonkupang-gallery.jpg?w=900&h=-1&s=1",
  },
  {
    id: 9,
    namaHotel: "Jambuluwuk Thamrin Hotel",
    rating: "4.7",
    kota: "Jakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "An 11-minute walk from Bundaran HI Parent MRT station, this refined hotel amid eateries and shops is 2 km from the National Museum of Indonesia and 3 km from the National Monument.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://origin.pegipegi.com/jalan/images/pict1L/Y4/Y979704/Y979704004.jpg",
  },
  {
    id: 10,
    namaHotel: "InterContinental Bandung Dago Pakar, an IHG Hotel",
    rating: "4.6",
    kota: "Bandung",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "A 12-minute walk from Mountain View Golf Club, this upscale hotel on the outskirts of Bandung is 4 km from Djuanda Forest Park and 10 km from Bandung train station.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://digital.ihg.com/is/image/ihg/intercontinental-bandung-4030880967-2x1?fit=fit,1&wid=2400&hei=1200&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0",
  },
  {
    id: 11,
    namaHotel: "JHL Solitaire Gading Serpong",
    rating: "4.7",
    kota: "Banten",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "Across the road from a university, this luxurious hotel with a striking exterior is 3 km from the Gading Raya Padang Golf and Club, and 30 km from the Soekarno-Hatta International Airport.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://pix10.agoda.net/hotelImages/5493630/-1/971c73bc6645fb0aaf0d116b99733f84.jpg?ca=7&ce=1&s=1024x768",
  },
  {
    id: 12,
    namaHotel: "Hotel Fairmont Jakarta",
    rating: "4.7",
    kota: "Jakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "A 12-minute walk from the designer shops of Plaza Senayan, this luxury hotel in the business district is 8 km from the National Museum of Indonesia.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/305174123.jpg?k=bfd91517209ce527ddba30b74151a27a6fa8e3b336ece97bad807a7ebc721b02&o=",
  },
  {
    id: 13,
    namaHotel: "Plataran Bromo",
    rating: "4.7",
    kota: "East Java",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "Set in the wooded highlands with views of the surrounding mountains and farmland, this refined hotel is 6 km from the entrance to Bromo Tengger Semeru National Park and 38 km from Abdul Rachman Saleh Airport.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/15/77/b7/41/exterior.jpg",
  },
  {
    id: 14,
    namaHotel: "Bisma Eight Hotel",
    rating: "4.7",
    kota: "Bali",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "Surrounded by jungle, this upscale boutique hotel is 1 km from the Puri Lukisan Museum, 6 km from Ubud Monkey Forest and 11 km from the Tegenungan Waterfall.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://images.squarespace-cdn.com/content/v1/558bd0f6e4b0d78cd28a63d7/1575468341990-SG4TJ6UX2JSPBGBBCNGU/01+copy.jpg",
  },
  {
    id: 15,
    namaHotel: "Same Hotel Kendari",
    rating: "4.3",
    kota: "Sulauwesi Tenggara",
    priceRange: "Rp 199.999 - Rp 594.285",
    description: "Along a tree-lined street, this unfussy conference hotel is 3 km from Taman Walikota Kendari, a park featuring walking paths.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20015898-f1f268d46855092c0f484dfd315828b3.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit",
  },
];

module.exports = bestPickdata;