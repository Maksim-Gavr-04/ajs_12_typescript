export interface Buyable {
  readonly id: number,
  readonly title: string,
  fullPrice: number,
  priceOfOne?: number,
  quantity?: number,
}