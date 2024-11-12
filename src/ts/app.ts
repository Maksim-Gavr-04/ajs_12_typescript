// TODO: write the code here

import { Cart } from './service/Cart';
import { Gadget } from './domain/Gadget';

const cart = new Cart();

const laptop = new Gadget(9575, 'laptop', 'ASUS ZenBook 14', 95000, 1);

cart.add(laptop);
cart.add(laptop);
cart.add(laptop);

cart.totalCost();
cart.totalCostWithDiscount(5);

console.log(cart.items);