import { Buyable } from './Buyable';

export class Book implements Buyable {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly author: string,
    readonly pages: number,
    readonly fullPrice: number,
  ) {}
}