/* ----------------
// 1. IMPORTING-AND-EXPORTING-ES6-MODULES

// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('Importing module');

// addToCart('dress', 10);
// console.log(price, tq);


// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('cup', 20);
// console.log(ShoppingCart.totalPrice);


// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);


// import add from './shoppingCart.js';

// add('pizza', 5);


import { addToCart, cart } from './shoppingCart.js';

addToCart('apples', 8);
addToCart('pizza', 2);
addToCart('bread', 5);

console.log(cart);
---------------- */

/* ----------------
// 2. THE-MODULE-PATTERN

const ShoppingCart = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 222;
    const totalQuantity = 11;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart. Shipping cost is ${shippingCost}.`);
    }

    const orderStock = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart.`);
    }

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    };

})();

ShoppingCart.addToCart('apple', 10);
ShoppingCart.addToCart('pizza', 2);
console.log(ShoppingCart);
console.log(ShoppingCart.shippingCost);
---------------- */

/* ----------------
// 3. COMMONJS-MODULES

// Export
// export.addToCart = function (product, quantity) {   // nodejs export object
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart.`);
// }

// Import
// const { addToCart } = require('./shoppingCart.js');
---------------- */

/* ----------------
// 4. INTRODUCTION-TO-NPM

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
// import cloneDeep from "lodash-es";

const state = {
    cart: [
        { product: 'bread', quatity: 5 },
        { product: 'pizza', quatity: 2 }
    ],
    user: { loggedIn: true }
}

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);


// if (module.hot) {
//     module.hot.accept();
// }
---------------- */

/* ----------------
// 5. CONFIGURING-BABEL-AND-POLYFILLING

class Person {
    #greeting = 'hey';

    constructor(name) {
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`);
    }
}

const jonas = new Person('Jonas');

console.log('Jonas' || null);
---------------- */
/* -------
console.log(state.cart.find(el => el.quatity >= 2));
Promise.resolve('Test').then(r => console.log(r));


import 'core-js/stable';
import 'core-js/stable/array/find';
import 'core-js/stable/promise';
------- */

// Polyfilling async functions
// import 'regenerator-runtime/runtime';
