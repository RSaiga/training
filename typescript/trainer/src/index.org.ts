// export const fizzBuzz = (i: number): string => {
//   if (i % 3 === 0) {
//     if (i % 5 === 0) {
//       return "fizz buzz"
//     }
//     return "fizz"
//   }
//   if (i % 5 === 0) {
//     return "buzz"
//   }
//   return String(i)
// }
//
// export const printFizzBuzz = (start: number, end: number): void => {
//   for (let i = start; i <= end; ++i) {
//     console.log(`${i} => ${fizzBuzz(i)}`)
//   }
// }

export type Money = 1 | 5 | 10 | 50 | 100 | 500 | 1000 | 5000 | 10000
export enum Product {
  Water,
  Cola
}

export class VendingMachine {
  amount: number = 0
  stockMap: Map<Product, number> = new Map<Product, number>([
    [Product.Water, 0],
    [Product.Cola, 0],
  ])
  putMoney(n: Money): void {
    if (n === 1 || n === 5 || n === 5000 || n === 10000) {
      throw new Error("not acceptable")
    }
    this.amount += n
  }
  getAmount(): number {
    return this.amount
  }
  buy(p: Product): void {
    const stock = this.stockMap.get(p)!
    let price = 0
    if (p === Product.Water) {
      price = 100
    }
    if (p === Product.Cola) {
      price = 120
    }
    if (this.amount < price) {
      throw new Error("amount not enough")
    }
    if (stock > 0) {
      this.amount -= price
      this.stockMap.set(p, stock - 1)
    } else {
      throw new Error("out of stock")
    }
  }
  getChange(): number {
    const change = this.amount
    this.amount = 0
    return change
  }
  addStock(p: Product, n: number): void {
    const stock = this.stockMap.get(p)! + n
    this.stockMap.set(p, stock)
  }
  getStocks(): Map<Product, number> {
    return this.stockMap
  }
}
