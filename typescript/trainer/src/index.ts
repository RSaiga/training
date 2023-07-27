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

enum Product {
  Water,
  Cola,
}

namespace Product {
  export function getPrice(p: Product) {
    if (p === Product.Water) {
      return 100
    }
    return 120
  }
}
export {
  Product
}


class Stock {
  stockMap: Map<Product, number>;
  constructor(stockMap: Map<Product, number>) {
    this.stockMap = stockMap;
  }

  decrement(p: Product) {
    const number = this.stockMap.get(p)!;
    if (number > 0) {
      this.stockMap.set(p, number - 1)
    } else {
      throw new Error("out of stock")
    }
  }
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

  private stock = new Stock(this.stockMap);

  buy(p: Product): void {
    const stock1 = this.stock
    const price = Product.getPrice(p)
    this.hasEnoughAmount(price);
    this.decrement(p, stock1);
    this.amount -= price
  }

  private decrement(p: Product, stock1: Stock) {
    stock1.decrement(p)
  }

  private hasEnoughAmount(price: number) {
    if (this.amount < price) {
      throw new Error("amount not enough")
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
