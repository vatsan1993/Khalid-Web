const salesData = [
  2,
  56,
  2,
  63,
  6,
  363,
  73,
  73,
  45,
  53,
  6,
  36,
  35,
  'Monday',
  true,
];

console.log(salesData);

// true tells us that monday exceeded minimum sales

// at
let saleValue = salesData.at(10);
console.log(`The 10th sale count is: ${saleValue}`);

// slice
let miniSales = salesData.slice(2, 7);
console.log(`The 2nd to 7th sales are : ${miniSales}`);

// splice
let removedSales = salesData.splice(3, 3); // we gave start index 3 and deleteCount is 3.
console.log(`The removed values are: ${removedSales}`);
console.log(`The sales data after removing values: ${salesData}`);

// removing Jake and Brandon and placing , Mick, Alice
const namesList = ['max', 'Mike', 'Jake', 'Brandon', 'Bill', 'James', 'Jill'];
console.log(`Names in the list before changing ${namesList}`);
namesList.splice(2, 2, 'Mick', 'Alice'); // Mike and Alice are two seperate values
console.log(`Names in the list after changing ${namesList}`);

// placing values in the middle without removing
// place Jenny, Trent at index 5 without removing values
namesList.splice(5, 0, 'Jenny', 'Trent');
console.log(`Names in the list after inserting jenny and trent ${namesList}`);

// push
let friendsToInvite = [];
friendsToInvite.push('Jake');
friendsToInvite.push('Max');
friendsToInvite.push('Julia');
console.log(friendsToInvite);
//pop
let removedFriend = friendsToInvite.pop();
console.log(`${removedFriend} has been removed`);
console.log(friendsToInvite);
// shift
removedFriend = friendsToInvite.shift();
friendsToInvite.push(removedFriend);
// friendsToInvite.push(friendsToInvite.shift())

console.log(`The reordered list is : ${friendsToInvite}`);
// unshift
friendsToInvite.unshift('Brandon');

console.log(`The perfect list is : ${friendsToInvite}`);

// concat
const my_friends = ['max', 'mike', 'jake'];
const jakeFriends = ['james', 'brandon', 'dan', 'bob'];
let friends_to_connect = my_friends.concat(jakeFriends);
console.log(friends_to_connect);

// includes
let friend = 'jenny';
let is_exists = friends_to_connect.includes(friend);
let message = is_exists
  ? `${friend} is in the list`
  : `${friend} is not in the list`;
console.log(message);

// join

let output = friends_to_connect.join('***');
console.log(output);

// typeof with array
console.log(`The type of friends to connect is ${typeof friends_to_connect}`);
// Array.isArray()
console.log(
  `The actual type of friends to connect is Array ${Array.isArray(
    friends_to_connect
  )}`
);

let data = Array.isArray(friends_to_connect) // this is true
  ? friends_to_connect[0] // this runs
  : friends_to_connect.f1; // this is used for objects
console.log(`The first friend from the array: ${data}`);

// indexOf
const friends = ['max', 'mike', 'jake'];
// get mike's position
console.log(`Friends : ${friends}`);
let position = friends.indexOf('mike');
console.log(`The position of mike is: ${position}`);
position = friends.indexOf('Alice');
console.log(`The position of Alice is: ${position}`);

output =
  friends.indexOf('Jake') >= 0
    ? 'Jake is in the array'
    : 'Jake is not in the array';
console.log(output);

// changing mike to Dan
position = friends.indexOf('mike');
friends[position] = 'Dan';
console.log(`Changed mike to dan`);
console.log(`Data in the friends is: ${friends}`);

//lastIndexOf
let toys = [
  'Car',
  'Bike',
  'Elephant',
  'Tiger',
  'Car',
  'Bike',
  'Elephant',
  'Tiger',
  'Car',
  'Car',
  'Car',
  'Car',
];

// finding the position of the last car
position = toys.lastIndexOf('Car');
console.log(`The last index of Car is: ${position}`);

// reverse method
toys.reverse();
console.log(`The reversed toys are ${toys}`);
