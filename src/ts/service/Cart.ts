import { Buyable } from '../domain/Buyable';

export class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    if (!this._items.includes(item)) {
      this._items.push(item);
      return;
    }

    const indexItemInCart = this._items.indexOf(item);
    const itemInCart = this._items[indexItemInCart];

    if (itemInCart.priceOfOne && itemInCart.quantity) {
      itemInCart.quantity++;
      itemInCart.fullPrice = itemInCart.priceOfOne * itemInCart.quantity;
    }
  }

  remove(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
  }

  decreaseQuantity(id: number): void {
    const indexItemInCart = this._items.findIndex(item => item.id === id);

    if (indexItemInCart === -1) return;

    const itemInCart = this._items[indexItemInCart];

    if (itemInCart.priceOfOne && itemInCart.quantity && itemInCart.quantity > 1) {
      itemInCart.quantity--;
      itemInCart.fullPrice = itemInCart.priceOfOne * itemInCart.quantity;
    }
  }

  get items(): Buyable[] {
    return [ ...this._items ];
  }

  totalCost(): number {
    return this._items.reduce(
      (acc, currentItem) => acc + currentItem.fullPrice, 0
    );
  }

  totalCostWithDiscount(discount: number): number {
    const discountAmount: number = this.totalCost() * discount / 100;
    return this.totalCost() - discountAmount;
  }
}