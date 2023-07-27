class Result {
  drink: string;
  chain: number;
  message: string;

  constructor(drink: string, chain: number, message: string){
    this.drink = drink;
    this.chain = chain;
    this.message = message;
  }
}

// const drinkData = new Map<string, number> ([['水',100],['コーラ',120]]);

const invalidMoney: number[] = [1,5,5000,10000];
let totalMoney : number = 0;

function buy(money: number,drink :string) {

  if (invalidMoney.includes(money)) {
    return new Result('', money, '1円、5円、5000円、10000円は使用できません');
  }
  // if (drinkData.has(drink)) {
  //   return new Result(drink, money - drinkData.get(drink), '');
  // }
  if (drink === '水') {
    return new Result('水', money - 100, '');
  }
  if (drink === 'コーラ') {
    return new Result('コーラ',money - 120, '');
  }
  return new Result('', money, 'コーラか水を選択してください');
}

function insertMoney(money: number) {
  totalMoney += money
  return String(totalMoney) + '円投入されています'
}

describe('test', () => {
  it('buy cola', function () {
    insertMoney(120);
    const actual = buy('コーラ');
    expect(actual).toStrictEqual(new Result('コーラ',0, ''))
  });

  it('buy water', function () {
    insertMoney(100);
    const actual = buy('水');
    expect(actual).toStrictEqual(new Result('水',0, ''))
  });

  it('buy another drink', function () {
    const actual = buy(1000,'オレンジジュース');
    expect(actual).toStrictEqual(new Result('',1000, 'コーラか水を選択してください'))
  });

  it('buy water and 900 chain', function (){
    const actual = buy(1000,'水');
    expect(actual).toStrictEqual(new Result('水', 900, ''))
  });

  it('buy cola and 880 chain', function (){
    const actual = buy(1000,'コーラ');
    expect(actual).toStrictEqual(new Result('コーラ', 880, ''))
  });

  it('money 1 invalid', function (){
    const actual = buy(1,'コーラ');
    expect(actual).toStrictEqual(new Result('', 1, '1円、5円、5000円、10000円は使用できません'))
  });

  it('money 5 invalid', function (){
    const actual = buy(5,'コーラ');
    expect(actual).toStrictEqual(new Result('', 5, '1円、5円、5000円、10000円は使用できません'))
  });

  it('money 5000 invalid', function (){
    const actual = buy(5000,'コーラ');
    expect(actual).toStrictEqual(new Result('', 5000, '1円、5円、5000円、10000円は使用できません'))
  });

  it('money 10000 invalid', function (){
    const actual = buy(10000,'コーラ');
    expect(actual).toStrictEqual(new Result('', 10000, '1円、5円、5000円、10000円は使用できません'))
  });

  it('insertMoney 500 * 2', function (){
    const actual1 = insertMoney(500);
    expect(actual1).toBe('500円投入されています')
    const actual2 = insertMoney(500);
    expect(actual2).toBe('1000円投入されています')
  });


})