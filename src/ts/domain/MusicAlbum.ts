import { Buyable } from './Buyable';

export class MusicAlbum implements Buyable {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly author: string,
    readonly fullPrice: number
  ) {}
}