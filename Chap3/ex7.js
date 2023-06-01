let laptop = {
  series: 'Legion',
  serial: 'AB219TX',
  make: 'Lenovo',
  ram: 16,
  ssd: 512,
  processor: 'Intel Core i7-13700H',
  numCores: 18,
  hasDedicatedGraphics: true,
  graphicsCard: 'Nvidia RTX 3050',
};

// making graphics card and processor null using dot and [] operators
laptop.graphicsCard = null;
laptop['processor'] = null;

console.log(laptop);

// wiping the whole laptop object
laptop = null;

console.log(laptop);
