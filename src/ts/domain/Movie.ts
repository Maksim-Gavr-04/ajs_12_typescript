import { Buyable } from './Buyable';

export class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly originalTitle: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly arrayOfGenres: string[],
    readonly time: string,
    readonly fullPrice: number,
  ) {}
}