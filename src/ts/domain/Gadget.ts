import { Buyable } from './Buyable';

export class Gadget implements Buyable {
  readonly id: number;
  readonly type: string;
  readonly title: string;
  readonly fullPrice: number;
  readonly priceOfOne: number;
  public quantity: number;

  constructor(id: number, type: string, title: string, priceOfOne: number, quantity: number) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.fullPrice = priceOfOne * quantity;
    this.priceOfOne = priceOfOne;
    this.quantity = quantity;
  }
}