/* ----------------
const incomesAndOutgoings = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const limits = {
  jonas: 1500,
  matilda: 100,
};


const addToBudget = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  const highestLimit = limits?.[user] ?? 0;

  if (value <= highestLimit) {
    incomesAndOutgoings.push({ value: -value, description, user: user });
  }
};

addToBudget(100, 'Going to movies 🍿', 'Matilda');
addToBudget(10, 'Pizza 🍕');
addToBudget(200, 'Stuff', 'Jay');
console.log(incomesAndOutgoings);


const checkIfExceedingLimit = function (insAndOuts, limits) {
  for (const el of insAndOuts) {
    const highestLimit = limits?.[el.user] ?? 0;

    if (el.value < -highestLimit) {
      el.flag = 'limit';
    }
  }
}

checkIfExceedingLimit(incomesAndOutgoings, limits);
console.log(incomesAndOutgoings);


const bigExpenses = function (insAndOuts, limits) {
  let output = '';

  insAndOuts.forEach(el => {
    if (el.value <= -limits[el.user]) {
      output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  })
  output = output.slice(0, -3); // Remove last ' / '
  console.log(output);
}

bigExpenses(incomesAndOutgoings, limits);
---------------- */

/* ----------------
---------------- */
const shoppingCart = [
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 }
];

const numOfAllowedProducts = {
  lisbon: 5,
  others: 7
};

const checkAllowedProducts = function (spCart, numAllowed, city) {
  if (!spCart.length) return [];

  // const allowed = numAllowed?.[city] ?? numAllowed.others;
  const allowed = numAllowed[city] > 0 ? numAllowed[city] : numAllowed.others;

  const newCart = spCart.map(elementObj => {
    const { product, quantity } = elementObj;
    return {
      product,
      quantity: quantity > allowed ? allowed : quantity,
    }
  })

  return newCart;
}

const allowedShoppingCart = checkAllowedProducts(shoppingCart, numOfAllowedProducts, 'lisbon');
console.log(allowedShoppingCart);

const createOrderDescription = function (spCart) {
  const [{ product: p, quantity: q }] = spCart;

  return `Order with ${q} ${p}${spCart.length > 1 ? ', etc...' : '.'}`;

}

const orderDescription = createOrderDescription(allowedShoppingCart);

console.log(orderDescription);
