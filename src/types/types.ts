export type topTenType = {
  name: string,
  awards: number
}

export type extractedPriceType = {
  year: string,
  price: number,
  adjustedPrice: number
}

export type adjustedPriceType = {
  year: string,
  price: [number],
  adjustedPrice: [number]
}