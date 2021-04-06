/* eslint-disable no-console */
const mongoose = require('mongoose');
const db = require('../models');

// This file empties the User collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shopportal');

const categorySeed = [
  {
    name: 'Home Furniture',
    slug: 'h-furniture',
    image: 'aGVsbG8gd29ybGQ=',
    description: 'House movable articles',
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    name: 'Clothing',
    slug: 'p-clothing',
    image: 'vwR53mFaMg7oxkOe',
    description: 'Men, women and kids clothing',
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    name: 'Beauty & Personal Care',
    slug: 'p-beauty',
    Buffer: 'uCFsbBNgd30ybGM=',
    description: 'Enhance the appearance of the face or fragrance and texture of the body',
    isActive: false,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  },
  {
    name: 'Grocery & Gourmet Food',
    slug: 'f-grocery',
    Buffer: 'BJQX581ejK6wspRu',
    description: 'Fine food, drinks and household supplies',
    isActive: true,
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
  }
];

db.Category.remove({})
  .then(() => db.Category.collection.insertMany(categorySeed))
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
