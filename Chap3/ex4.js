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

const form = document.querySelector('#keySelect');
const displayElement = document.querySelector('#display');
const selectElement = document.querySelector('#key');
function handleSubmit(event) {
  event.preventDefault();
  let key = selectElement.value;
  //   let laptopData = laptop.key; // dont do this. It gives undefined. There is no key called in the object.
  // we need to use []
  let laptopData = laptop[key];
  displayElement.textContent = laptopData;
}

form.addEventListener('submit', handleSubmit);
