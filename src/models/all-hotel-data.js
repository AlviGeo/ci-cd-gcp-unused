const data = [
  {
    id: 1,
    namaHotel: "Hotel Indonesia Kempinski",
    rating: "4.7",
    kota: "Jakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "An 11-minute walk from Sudirman train station, this ritzy hotel is 2.1 km from the National Museum of Indonesia and 4 km from Istiqlal Mosque.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl:
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },

  {
    id: 2,
    namaHotel: "Hotel Tentrem",
    rating: "4.8",
    kota: "Yogyakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Among shops and restaurants, this lavish hotel is 2.9 km from the markets on buzzy Jalan Malioboro, and 5 km from Keraton Ngayogyakarta Hadiningrat palace.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://www.berjayahotel.com/sites/default/files/colombo_30.jpg",
  },
  {
    id: 3,
    namaHotel: "Hard Rock Hotel",
    rating: "4.6",
    kota: "Bali",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Across the street from the beach, this music-themed resort hotel with indigenous architecture is 2 km from the shops at Jalan Legian and 7 km from Waterbom Bali.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },

  {
    id: 4,
    namaHotel: "The Trans Luxury Hotel",
    rating: "4.7",
    kota: "Bandung",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Across the street from the Trans Studio Mall Bandung, this polished hotel is 2 km from Cikudapateuh train station and 4 km from dining and shopping along lively Braga Street.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl:
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },

  {
    id: 5,
    namaHotel: "JW Marriott",
    rating: "4.7",
    kota: "Surabaya",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "This high-end modern hotel is 2 km from the Heroes Monument and 19 km from Juanda International Airport.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl:
      "https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
  },

  {
    id: 6,
    namaHotel: "ASTON Bogor Hotel & Resort",
    rating: "4.7",
    kota: "Bogor",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "This colorful, upscale hotel on landscaped gardens is a 9-minute walk from The Jungle Water Adventure park, and 6 km from Istana Bogor presidential palace and Kebun Raya Bogor botanical gardens.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },

  {
    id: 7,
    namaHotel: "Hotel Tugu",
    rating: "4.6",
    kota: "Malang",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Set in the old town, this striking hotel in a luxe building is a 3-minute walk from the Museum Malang Tempo Doeloe and a 5-minute walk from Malang train station.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://www.berjayahotel.com/sites/default/files/colombo_30.jpg",
  },

  {
    id: 8,
    namaHotel: "DoubleTree by Hilton",
    rating: "4.6",
    kota: "Jakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "A 6-minute walk from Cikini train station, this contemporary hotel in the central business district is 3.9 km from the National Monument and 4.4 km from Istiqlal Mosque.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT90yVIjxa3A1HhmKs22RLDR5FZhn0soOTFr-P1-_fDKeiQ0BKWJ5NTfLsjRexYgmoKRFo&usqp=CAU",
  },

  {
    id: 9,
    namaHotel: "Hotel Indonesia Kempinski",
    rating: "4.7",
    kota: "Jakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "An 11-minute walk from Sudirman train station, this ritzy hotel is 2.1 km from the National Museum of Indonesia and 4 km from Istiqlal Mosque.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl:
      "https://images.unsplash.com/photo-1616064959886-a500e5c38e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBuaWdodHxlbnwwfHwwfHw%3D&w=1000&q=80",
  },

  {
    id: 10,
    namaHotel: "Hotel Tentrem",
    rating: "4.8",
    kota: "Yogyakarta",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Among shops and restaurants, this lavish hotel is 2.9 km from the markets on buzzy Jalan Malioboro, and 5 km from Keraton Ngayogyakarta Hadiningrat palace.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl:
      "https://www.corbettresorts.co.in/pics/1000x680/PackageImage_26_141.jpg",
  },

  {
    id: 11,
    namaHotel: "Hard Rock Hotel",
    rating: "4.6",
    kota: "Bali",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Across the street from the beach, this music-themed resort hotel with indigenous architecture is 2 km from the shops at Jalan Legian and 7 km from Waterbom Bali.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdB8VcD6RM2GEhIqXAyQq3p1owhU58EkRuLVFA23khwTL5KqDktZm_uqTaXulJze4thI&usqp=CAU",
  },

  {
    id: 12,
    namaHotel: "The Trans Luxury Hotel",
    rating: "4.7",
    kota: "Bandung",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Across the street from the Trans Studio Mall Bandung, this polished hotel is 2 km from Cikudapateuh train station and 4 km from dining and shopping along lively Braga Street.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },

  {
    id: 13,
    namaHotel: "JW Marriott",
    rating: "4.7",
    kota: "Surabaya",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "This high-end modern hotel is 2 km from the Heroes Monument and 19 km from Juanda International Airport.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYKwvayKzDlZWXivmtJsnfr1baPpUuCsAxNrP-umxSknmJbsHgskfEFMLgJCyJ14CLAQ&usqp=CAU",
  },

  {
    id: 14,
    namaHotel: "ASTON Bogor Hotel & Resort",
    rating: "4.7",
    kota: "Bogor",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "This colorful, upscale hotel on landscaped gardens is a 9-minute walk from The Jungle Water Adventure park, and 6 km from Istana Bogor presidential palace and Kebun Raya Bogor botanical gardens.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl:
      "https://www.berjayahotel.com/sites/default/files/Berjaya%20Colombo%20Hotel%20Garden%20Bar_0.jpg",
  },

  {
    id: 15,
    namaHotel: "Hotel Tugu",
    rating: "4.6",
    kota: "Malang",
    priceRange: "Rp 199.999 - Rp 594.285",
    description:
      "Set in the old town, this striking hotel in a luxe building is a 3-minute walk from the Museum Malang Tempo Doeloe and a 5-minute walk from Malang train station.",
    latitude: -6.2,
    longitude: 106.816666,
    imageUrl: "https://source.unsplash.com/random/900×700/?hotel",
  },
];

module.exports = data;
