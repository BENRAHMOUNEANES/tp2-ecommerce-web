export const CATEGORIES = [
  {
    id: "smartphones",
    name: "Smartphones",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "ordinateurs",
    name: "Ordinateurs",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "audio",
    name: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "montres",
    name: "Montres connectées",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "gaming",
    name: "Gaming",
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "accessoires",
    name: "Accessoires",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80"
  }
];

export const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Smartphones",
    price: 999.00,
    oldPrice: 1180.00,
    discount: "-15%",
    description: "Châssis en titane de qualité aérospatiale, puce A17 Pro ultra-puissante et système photo professionnel avancé.",
    rating: 5.0,
    reviews: 124,
    stock: 12,
    badge: "Populaire",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "MacBook Air M2",
    category: "Ordinateurs",
    price: 1299.00,
    oldPrice: 1449.00,
    discount: "-10%",
    description: "Écran Liquid Retina 13,6 pouces, autonomie impressionnante jusqu'à 18 heures et performances M2 exceptionnelles.",
    rating: 5.0,
    reviews: 98,
    stock: 8,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "AirPods Pro",
    category: "Audio",
    price: 649.00,
    oldPrice: 810.00,
    discount: "-20%",
    description: "Réduction active du bruit 2x plus efficace, Audio spatial personnalisé avec suivi dynamique des mouvements de la tête.",
    rating: 5.0,
    reviews: 76,
    stock: 18,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 6",
    category: "Montres connectées",
    price: 699.00,
    oldPrice: 790.00,
    discount: "-12%",
    description: "Suivi avancé du sommeil et de la composition corporelle, écran saphir résistant et lunette rotative intuitive.",
    rating: 5.0,
    reviews: 63,
    stock: 14,
    badge: null,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 849.00,
    oldPrice: 999.00,
    discount: "-15%",
    description: "Leader incontesté de la réduction de bruit avec deux processeurs et huit microphones pour une immersion totale.",
    rating: 5.0,
    reviews: 84,
    stock: 9,
    badge: "Top Choix",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Manette Sans Fil Xbox Series",
    category: "Gaming",
    price: 220.00,
    oldPrice: 245.00,
    discount: "-10%",
    description: "Surface texturée ergonomique, croix multidirectionnelle hybride et bouton de partage dédié sur PC et console.",
    rating: 4.9,
    reviews: 110,
    stock: 22,
    badge: null,
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Chargeur Rapide GaN 100W",
    category: "Accessoires",
    price: 149.00,
    oldPrice: 199.00,
    discount: "-25%",
    description: "Technologie Gallium Nitride ultra-compacte avec 3x USB-C et 1x USB-A pour recharger 4 appareils simultanément.",
    rating: 4.8,
    reviews: 52,
    stock: 15,
    badge: "Offre Spéciale",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Samsung Galaxy S24 Ultra",
    category: "Smartphones",
    price: 1399.00,
    oldPrice: 1520.00,
    discount: "-8%",
    description: "Écran Dynamic AMOLED 2X lumineux avec S Pen intégré et fonctions Galaxy AI révolutionnaires.",
    rating: 4.9,
    reviews: 91,
    stock: 6,
    badge: "Nouveauté",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "iPad Pro 11\" M2 Liquid Retina",
    category: "Ordinateurs",
    price: 1099.00,
    oldPrice: 1290.00,
    discount: "-15%",
    description: "Performances exceptionnelles avec la puce M2, écran ProMotion 120Hz et prise en charge de l'Apple Pencil survol.",
    rating: 5.0,
    reviews: 47,
    stock: 7,
    badge: null,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Apple Watch Ultra 2",
    category: "Montres connectées",
    price: 1190.00,
    oldPrice: 1350.00,
    discount: "-12%",
    description: "Boîtier en titane de 49mm résistant aux environnements extrêmes, GPS double fréquence haute précision et autonomie 72h.",
    rating: 4.9,
    reviews: 39,
    stock: 5,
    badge: "Pro",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Hub Station USB-C 10-en-1",
    category: "Accessoires",
    price: 189.00,
    oldPrice: 230.00,
    discount: "-18%",
    description: "Double sortie 4K HDMI, charge rapide 100W PD, Ethernet Gigabit, lecteurs cartes SD/MicroSD en alliage d'aluminium.",
    rating: 4.7,
    reviews: 68,
    stock: 11,
    badge: null,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Clavier Gamer RGB Mécanique",
    category: "Gaming",
    price: 299.00,
    oldPrice: 375.00,
    discount: "-20%",
    description: "Switches mécaniques personnalisés ultra-réactifs, rétroéclairage RGB dynamique et châssis aluminium brossé.",
    rating: 4.8,
    reviews: 89,
    stock: 13,
    badge: "Gaming",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
  }
];
