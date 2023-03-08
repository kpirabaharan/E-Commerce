import mongoose from 'mongoose';

// Temporary Data

const productIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const products = [
  {
    _id: productIds[0],
    name: 'Macbook Air',
    brand: 'Apple',
    cost: 1999.99,
    description: 'Powerful light Laptop',
    new: false,
    rating: 5,
    category: 'Computer',
    picturePath: 'Macbook-Air.png',
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: productIds[1],
    name: 'iPhone 14',
    brand: 'Apple',
    cost: 1099.99,
    description: 'Smartphone',
    new: true,
    rating: 4,
    category: 'Phone',
    picturePath: 'iPhone-14.png',
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: productIds[2],
    name: 'S23 Ultra',
    brand: 'Samsung',
    cost: 1599.99,
    description: 'Smartphone',
    new: true,
    rating: 4.5,
    category: 'Phone',
    picturePath: 'S23-Ultra.png',
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: productIds[3],
    name: 'iPad Air',
    brand: 'Apple',
    cost: 799.99,
    description: 'Nice Tablet',
    new: false,
    rating: 4.5,
    category: 'Tablet',
    picturePath: 'iPad-Air.png',
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
];
