// dummy data
let store = {
  name: 'Apple Store',
  location: 'Mumbai',
  productsSold: ['Apple Iphone', 'Macbook', 'Apple Watch', 'Apple Care'],
  salesData: [75, 56, 77, 67],
  cost: [87999, 122999, 54999, 1200],
};

console.log(store);

// real world Data will look like this
let store2 = {
  name: 'Apple Store',
  location: 'Mumbai',
  productsSold: [
    {
      name: 'Apple Iphone',
      saleCount: 75,
      cost: 87999,
    },
    {
      name: 'Apple Macbook',
      saleCount: 56,
      cost: 122999,
    },
    {
      name: 'Apple Watch',
      saleCount: 77,
      cost: 54999,
    },
    {
      name: 'Apple Care',
      saleCount: 67,
      cost: 1200,
    },
  ],
};

console.log(store2);
