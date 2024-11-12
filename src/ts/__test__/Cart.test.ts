import { test, expect } from '@jest/globals';
import { Cart } from '../service/Cart';
import { Book } from '../domain/Book';
import { MusicAlbum } from '../domain/MusicAlbum';
import { Gadget } from '../domain/Gadget';
import { Movie } from '../domain/Movie';

const book = new Book(100, 'The poems', 'author A', 378, 350);
const musicAlbum = new MusicAlbum(400, 'Album', 'Author B', 450);
const gadget = new Gadget(200, 'smartphone', 'Samsung Galaxy S24', 80000, 1);
const movie = new Movie(
  300, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!',
  [ 'фантастика', 'боевик', 'фэнтези', 'приключения' ], '137 мин. / 02:17', 1000
);

test('Testing the methods of cart: `add`, `totalCost`, `totalCostWithDiscount`, `remove` and `reduceQuantity`', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);

  cart.add(book);
  cart.add(gadget);
  cart.add(movie);
  cart.add(musicAlbum);
  cart.add(gadget);
  const firstExpected = [
    {
      id: 100, title: 'The poems', author: 'author A', pages: 378, fullPrice: 350
    },
    {
      id: 200, type: 'smartphone', title: 'Samsung Galaxy S24', priceOfOne: 80000, quantity: 2, fullPrice: 160000
    },
    {
      id: 300, title: 'Мстители', originalTitle: 'The Avengers', year: 2012, country: 'США',
      slogan: 'Avengers Assemble!', arrayOfGenres: [ 'фантастика', 'боевик', 'фэнтези', 'приключения' ],
      time: '137 мин. / 02:17', fullPrice: 1000
    },
    {
      id: 400, title: 'Album', author: 'Author B', fullPrice: 450
    }
  ];
  expect(cart.items).toEqual(firstExpected);

  expect(cart.totalCost()).toBe(161800);
  expect(cart.totalCostWithDiscount(15)).toBe(137530);

  cart.remove(300);
  cart.decreaseQuantity(200);
  const secondExpected = [
    {
      id: 100, title: 'The poems', author: 'author A', pages: 378, fullPrice: 350
    },
    {
      id: 200, type: 'smartphone', title: 'Samsung Galaxy S24', priceOfOne: 80000, quantity: 1, fullPrice: 80000
    },
    {
      id: 400, title: 'Album', author: 'Author B', fullPrice: 450
    }
  ];
  expect(cart.items).toEqual(secondExpected);
});

test('Testing the method `add` by adding of the same item twice in a single copy', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(book);
  const expected = [
    {
      id: 100, title: 'The poems', author: 'author A', pages: 378, fullPrice: 350
    }
  ];
  expect(cart.items).toEqual(expected);
});

test('Testing the method `decreaseQuantity` by using an item that has a `quantity` of 1, which can be added to the cart multiple times', () => {
  const cart = new Cart();
  cart.add(gadget);
  cart.decreaseQuantity(200);
  const expected = [
    {
      id: 200, type: 'smartphone', title: 'Samsung Galaxy S24', priceOfOne: 80000, quantity: 1, fullPrice: 80000
    }
  ];
  expect(cart.items).toEqual(expected);
});

test('Testing the method `decreaseQuantity` with an unknown `id`', () => {
  const cart = new Cart();
  cart.add(gadget);
  cart.decreaseQuantity(0);
  const expected = [
    {
      id: 200, type: 'smartphone', title: 'Samsung Galaxy S24', priceOfOne: 80000, quantity: 1, fullPrice: 80000
    }
  ];
  expect(cart.items).toEqual(expected);
});