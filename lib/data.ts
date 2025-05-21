import { toSlug } from "./utils"
import { Data, IProductInput, IUserInput } from '@/types'
import bcrypt from 'bcryptjs'
const users: IUserInput[] = [
  {
    name: 'Admin',
    email: 'souqmain1@gmail.com',
    password: bcrypt.hashSync('kirr1717', 5),
    role: 'Admin',
    address: {
      fullName: 'Kirubel Desalegn',
      block: '12',
      floor: '2',
      room: '211',
      phone: '963758686',
    },
    paymentMethod: 'Cash on Delivery',
    shopFrom:'Shop 1',
    emailVerified: false,
  },
  {
    name: 'Abebe',
    email: 'abebe@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Abebe Belete',
      block: '12',
      floor: '2',
      room: '211',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    shopFrom:'Shop 1',
    emailVerified: false,
  },
  {
    name: 'Belete',
    email: 'belete@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Abebe Belete',
      block: '12',
      floor: '2',
      room: '211',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    shopFrom:'Shop 1',
    emailVerified: false,
  },
  {
    name: 'Zd',
    email: 'zd@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Zad Zod',
      block: '12',
      floor: '2',
      room: '211',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    shopFrom:'Shop 3',
    emailVerified: false,
  },
  {
    name: 'Bomboclat',
    email: 'bombo@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Boomboclaat',
      block: '12',
      floor: '2',
      room: '211',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    shopFrom:'Shop 2',
    emailVerified: false,
  },
  {
    name: 'Giki',
    email: 'giki@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Giki Giki',
      block: '12',
      floor: '2',
      room: '211',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    shopFrom:'Shop 1',
    emailVerified: false,
  },
  {
    name: 'Elmo',
    email: 'elmo@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Elmo Elmo',
      block: '12',
      floor: '2',
      room: '211',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    shopFrom:'Shop 1',
    emailVerified: false,
  },
]



const products: IProductInput[] = [
  
  {
    name: 'Teddy Bear',
    slug: toSlug('Teddy Bear'),
    category: 'Kids',
    images: ['/images/tedb.jpg', '/images/tedbt.jpg'],
    tags: ['latest-products'],
    isPublished: true,
    price: 250,
    // listPrice: 0,
    brand: 'Teddy Bear',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    // countInStock: 11,
    description:
      'Made with chemicals safer for human health and the environment',
    // sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Green', 'Red', 'Black'],

    reviews: [],
  },
  {
    name: 'Deoderant',
    slug: toSlug('Deoderant for fresh smell'),
    category: 'Cosmetics',
    images: [
      '/images/deoderant.jpg',
      '/images/deoderant-2.jpg',
    ],
    tags: ['featured'],
    isPublished: true,
    price: 250,
    // listPrice: 250,
    brand: 'Axe',
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 29,
    // countInStock: 12,
    description:
      'Made with sustainably sourced in USA ',

    // sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Yellow', 'Red', 'Black'],

    reviews: [],
  },
  {
    name: "Organic Honey ",
    slug: toSlug('Pure and natural honey sourced from organic farms'),
    category: 'Food and Groceries',
    brand: 'Tesfaye',
    images: ['/images/honey.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 350,
    // listPrice: 16.03,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 55,
    // countInStock: 13,
    description:
      'Pure and natural honey sourced from organic farms.',
    // sizes: ['XL', 'XXL'],
    // colors: ['Green', 'White'],

    reviews: [],
  },
  {
    name: 'Pasta',
    slug: toSlug(
      'Healthy and fiber-rich pasta made from whole wheat.'
    ),
    category: 'Food and Groceries',
    brand: 'Boez',
    images: ['/images/pasta.jpg'],
    tags: ['featured'],
    isPublished: true,
    price: 105,
    // listPrice: 46.03,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    // countInStock: 14,
    description:
      'Healthy and fiber-rich pasta made from whole wheat.',
    // sizes: ['XL', 'XXL'],
    // colors: ['Yellow', 'White'],

    reviews: [],
  },
  {
    name: "Eggs",
    slug: toSlug(
      "High-quality, farm-fresh eggs rich in protein"
    ),
    category: 'Food and Groceries',
    brand: '-',
    images: ['/images/eggs.jpg'],
    tags: ['best-seller', 'featured'],
    isPublished: true,
    price: 12,
    // listPrice: 35.99,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    // countInStock: 15,
    description:
      "High-quality, farm-fresh eggs rich in protein ",
    // sizes: ['XL', 'XXL'],
    // colors: ['Green', 'Yellow'],

    reviews: [],
  },
  {
    name: 'Lipstics',
    slug: toSlug('A moisturizing lip balm enriched with shea butter and vitamin E'),
    category: 'Cosmetics',
    brand: 'Victorias',
    images: ['/images/lipsticks.jpg'],
    tags: ['best-seller','featured'],
    isPublished: true,
    price: 30,
    // listPrice: 32.99,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    // countInStock: 16,
    numSales: 56,
    description:
      'A moisturizing lip balm enriched with shea butter and vitamin E.',
    // sizes: ['XL', 'XXL'],
    // colors: ['Grey', 'White'],

    reviews: [],
  },
  // Jeans
  {
    name: 'Diapers',
    slug: toSlug('Diapers for babies'),
    category: 'Kids',
    brand: 'Pampers',
    images: ['/images/diapers.jpg'],
    tags: ['latest-products'],
    isPublished: true,
    price: 95,
    // listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    // countInStock: 54,
    numSales: 21,
    description:
      'Silver Jeans Co. Jace Slim Fit Bootcut Pampers - Consider Jace a modern cowboy pampers. It sits below the waist and features a slim fit through the hip and thigh. Finished with an 18” bootcut leg opening that complements the slimmer silhouette while still fitting over boots',
    // sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    // colors: ['Blue', 'Grey'],

    reviews: [],
  },
  {
    name: "Coloring & Activity Book",
    slug: toSlug(
      "A fun activity book with puzzles, mazes, and stickers."
    ),
    category: 'Kids',
    brand: "Sinarline",
    images: ['/images/coloring.jpg'],
    tags: ['featured'],
    isPublished: true,
    price: 100,
    // listPrice: 69.99,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    // countInStock: 22,
    numSales: 54,
    description:
      'A fun activity book with puzzles, mazes, and stickers.',
    // sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    // colors: ['Blue', 'Grey'],

    reviews: [],
  },
  {
    name: 'Chocolate Bars',
    slug: toSlug('Rich, antioxidant-packed dark chocolate with no added sugar.'),
    category: 'Food and Groceries',
    brand: 'Galaxy',
    images: ['/images/choco.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 65,
    // listPrice: 45,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    // countInStock: 23,
    numSales: 54,
    description:
      'Rich, antioxidant-packed dark chocolate with no added sugar.',
    // sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    // colors: ['Grey', 'Blue'],

    reviews: [],
  },
  {
    name: "Coca Cola",
    slug: toSlug(
      "Refreshing drink"
    ),
    category: 'Food and Groceries',
    brand: 'Coca Cola',
    images: ['/images/coca.jpg'],
    tags: ['featured','best-seller'],
    isPublished: true,
    price: 35,
    // listPrice: 100,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    // countInStock: 24,
    numSales: 53,
    description:
      'Refreshing drink',
    // sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    // colors: ['Blue', 'Grey'],

    reviews: [],
  },
  {
    name: 'Mango Juice',
    slug: toSlug('Refrehing Drink'),
    category: 'Food and Groceries',
    brand: '3D',
    images: ['/images/juice.jpg'],
    tags: ['best-seller', 'featured'],
    isPublished: true,
    price: 40,
    // listPrice: 0,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    // countInStock: 25,
    numSales: 48,
    description:
      'Refreshing Drink',
    // sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    // colors: ['Blue', 'Grey'],

    reviews: [],
  },
  {
    name: 'Earphones',
    slug: toSlug('Original Earphones'),
    category: 'Accessories',
    brand: 'Ruggas',
    images: ['/images/earphone.jpg'],
    tags: ['best-seller', 'featured'],
    isPublished: true,
    price: 300,
    // listPrice: 0,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    // countInStock: 25,
    numSales: 48,
    description:
      'Original Earphones',
    // sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    // colors: ['Blue', 'Grey'],

    reviews: [],
  },
  {
    name: 'Largo Detergent',
    slug: toSlug('Original Detergent'),
    category: 'Home Supplies',
    brand: 'Largo',
    images: ['/images/largo.jpg'],
    tags: ['best-seller', 'featured'],
    isPublished: true,
    price: 350,
    // listPrice: 0,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    // countInStock: 25,
    numSales: 48,
    description:
      'Original Detergent',
    // sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    // colors: ['Blue', 'Grey'],

    reviews: [],
  },
]

const reviews = [
  {
    rating: 1,
    title: 'Poor quality',
    comment:
      'Very disappointed. The item broke after just a few uses. Not worth the money.',
  },
  {
    rating: 2,
    title: 'Disappointed',
    comment:
      "Not as expected. The material feels cheap, and it didn't fit well. Wouldn't buy again.",
  },
  {
    rating: 2,
    title: 'Needs improvement',
    comment:
      "It looks nice but doesn't perform as expected. Wouldn't recommend without upgrades.",
  },
  {
    rating: 3,
    title: 'not bad',
    comment:
      'This product is decent, the quality is good but it could use some improvements in the details.',
  },
  {
    rating: 3,
    title: 'Okay, not great',
    comment:
      'It works, but not as well as I hoped. Quality is average and lacks some finishing.',
  },
  {
    rating: 3,
    title: 'Good product',
    comment:
      'This product is amazing, I love it! The quality is top notch, the material is comfortable and breathable.',
  },
  {
    rating: 4,
    title: 'Pretty good',
    comment:
      "Solid product! Great value for the price, but there's room for minor improvements.",
  },
  {
    rating: 4,
    title: 'Very satisfied',
    comment:
      'Good product! High quality and worth the price. Would consider buying again.',
  },
  {
    rating: 4,
    title: 'Absolutely love it!',
    comment:
      'Perfect in every way! The quality, design, and comfort exceeded all my expectations.',
  },
  {
    rating: 4,
    title: 'Exceeded expectations!',
    comment:
      'Fantastic product! High quality, feels durable, and performs well. Highly recommend!',
  },
  {
    rating: 5,
    title: 'Perfect purchase!',
    comment:
      "Couldn't be happier with this product. The quality is excellent, and it works flawlessly!",
  },
  {
    rating: 5,
    title: 'Highly recommend',
    comment:
      "Amazing product! Worth every penny, great design, and feels premium. I'm very satisfied.",
  },
  {
    rating: 5,
    title: 'Just what I needed',
    comment:
      'Exactly as described! Quality exceeded my expectations, and it arrived quickly.',
  },
  {
    rating: 5,
    title: 'Excellent choice!',
    comment:
      'This product is outstanding! Everything about it feels top-notch, from material to functionality.',
  },
  {
    rating: 5,
    title: "Couldn't ask for more!",
    comment:
      "Love this product! It's durable, stylish, and works great. Would buy again without hesitation.",
  },
]

  
const data : Data={
    reviews,
    users,
    products,
    headerMenus: [
      {
        name: 'Latest Products',
        href: '/search?tag=latest-products',
      },
      {
        name: 'Featured Products',
        href: '/search?tag=featured',
      },
      {
        name: 'Best Sellers',
        href: '/search?tag=best-seller',
      },
      {
        name: 'Browsing History',
        href: '/#browsing-history',
      },
    ],
    carousels: [
      {
        title: 'Best Sellers in Food and Groceries',
        buttonCaption: 'Shop Now',
        image: '/images/foodandbevmain.png',
        url: '/search?category=Food and Groceries',
        isPublished: true,
      },
      {
        title: 'Best Sellers in Accessories',
        buttonCaption: 'Shop Now',
        image: '/images/accessories.png',
        url: '/search?category=Accessories',
        isPublished: true,
      },
      {
        title: 'Best Deals on Cosmetics',
        buttonCaption: 'See More',
        image: '/images/cosmetics-main.png',
        url: '/search?category=Cosmestics',
        isPublished: true,
      },
      {
        title: 'Best Deals on Home Supplies',
        buttonCaption: 'See More',
        image: '/images/homesup.png',
        url: '/search?category=Home Supplies',
        isPublished: true,
      },
      {
        title: 'Best Deals on Kids Products',
        buttonCaption: 'See More',
        image: '/images/kidspro.png',
        url: '/search?category=Kids',
        isPublished: true,
      },
    ],
  }
  
  export default data