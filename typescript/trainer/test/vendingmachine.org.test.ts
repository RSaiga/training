// import { fizzBuzz, printFizzBuzz } from "../src";
//
// describe('SampleTest', () => {
//     it('printFizzBuzz', () => {
//         printFizzBuzz(1, 30)
//     })
//     it('fizzBuzz(1) => 1', () => {
//         const result = fizzBuzz(1)
//         expect(result).toBe("1")
//     })
//     it('fizzBuzz(3) => fizz', () => {
//         const result = fizzBuzz(3)
//         expect(result).toBe("fizz")
//     })
//     it('fizzBuzz(5) => buzz', () => {
//         const result = fizzBuzz(5)
//         expect(result).toBe("buzz")
//     })
//     it('fizzBuzz(15) => fizz buzz', () => {
//         const result = fizzBuzz(15)
//         expect(result).toBe("fizz buzz")
//     })
// })

import {Product, VendingMachine} from "../src";

describe('vending machine', ()  =>{
  it('put money', () => {
    let caught
    try {
      const vm = new VendingMachine()
      vm.putMoney(10)
    } catch (error) {
      caught = error
    }
    expect(caught).toBeUndefined()
  })
  it('put money multiple', () => {
    let caught
    try {
      const vm = new VendingMachine()
      vm.putMoney(10)
      vm.putMoney(10)
    } catch (error) {
      caught = error
    }
    expect(caught).toBeUndefined()
  })
  it('check amount', () => {
    let caught
    try {
      const vm = new VendingMachine()
      vm.putMoney(10)
      vm.putMoney(10)
      const amount = vm.getAmount()
      expect(amount).toBe(20)
    } catch (error) {
      caught = error
    }
    expect(caught).toBeUndefined()
  })
  it('put money not acceptable', () => {
    let caught
    try {
      const vm = new VendingMachine()
      vm.putMoney(1)
    } catch (error) {
      caught = error
    }
    expect(caught).toBeTruthy()
  })
  it('buy water', () => {
    let caught
    try {
      const vm = new VendingMachine()
      vm.addStock(Product.Water, 100)
      vm.putMoney(500)
      const amount = vm.getAmount()
      expect(amount).toBe(500)
      vm.buy(Product.Water)
      const change = vm.getChange()
      expect(change).toBe(400)
      const finalAmount = vm.getAmount()
      expect(finalAmount).toBe(0)
    } catch (error) {
      caught = error
    }
    expect(caught).toBeUndefined()
  })
  it('add stock', () => {
    const vm = new VendingMachine()
    vm.addStock(Product.Cola, 100)
    const stockMap = vm.getStocks()
    const stockWater = stockMap.get(Product.Water)
    expect(stockWater).toBe(0)
    const stockCola = stockMap.get(Product.Cola)
    expect(stockCola).toBe(100)
  })
  it('buy product, then stock is decline', () => {
    const vm = new VendingMachine()
    vm.addStock(Product.Cola, 100)
    const stockMap = vm.getStocks()
    const stockWater = stockMap.get(Product.Water)
    expect(stockWater).toBe(0)
    const stockCola = stockMap.get(Product.Cola)
    expect(stockCola).toBe(100)
    vm.putMoney(1000)
    vm.buy(Product.Cola)
    const stocksBought = vm.getStocks()
    const stockColaBought = stocksBought.get(Product.Cola)
    expect(stockColaBought).toBe(99)
  })
  it('can not buy product out of stock', () => {
    const vm = new VendingMachine()
    vm.addStock(Product.Cola, 100)
    const stockMap = vm.getStocks()
    const stockWater = stockMap.get(Product.Water)
    expect(stockWater).toBe(0)
    const stockCola = stockMap.get(Product.Cola)
    expect(stockCola).toBe(100)
    vm.putMoney(1000)
    let caught
    try {
      vm.buy(Product.Water)
    } catch (error) {
      caught = error
    }
    expect(caught).toBeTruthy()
  })
  it('can not buy product amount not enough', () => {
    const vm = new VendingMachine()
    vm.addStock(Product.Cola, 100)
    const stockMap = vm.getStocks()
    const stockWater = stockMap.get(Product.Water)
    expect(stockWater).toBe(0)
    const stockCola = stockMap.get(Product.Cola)
    expect(stockCola).toBe(100)
    vm.putMoney(100)
    let caught
    try {
      vm.buy(Product.Cola)
    } catch (error) {
      caught = error
    }
    expect(caught).toBeTruthy()
  })
});
