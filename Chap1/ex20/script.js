let ageInput = document.getElementById('age');
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  let age = ageInput.value;
  console.log(typeof age);
});
