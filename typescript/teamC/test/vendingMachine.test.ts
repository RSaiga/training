class Result {
  drink: string;
  chain: number;

  constructor(drink: string, chain: number){
    this.drink = drink;
    this.chain = chain;
  }
}

function buy(money: number,drink :string) {

  if (drink === '水') {
    return new Result('水', money - 100);
  }
  if (drink === 'コーラ') {
    return new Result('コーラ',money - 120);
  }
  return 'コーラか水を選択してください'
}

describe('test', () => {
  it('buy cola', function () {
    const actual = buy(120,'コーラ');
    expect(actual).toStrictEqual(new Result('コーラ',0))
  });

  it('buy water', function () {
    const actual = buy(100,'水');
    expect(actual).toStrictEqual(new Result('水',0))
  });

  it('buy another drink', function () {
    const actual = buy(1000,'オレンジジュース');
    expect(actual).toBe('コーラか水を選択してください')
  });

  it('buy water and 900 chain', function (){
    const actual = buy(1000,'水');
    expect(actual).toStrictEqual(new Result('水', 900))
  });

  it('buy cola and 880 chain', function (){
    const actual = buy(1000,'コーラ');
    expect(actual).toStrictEqual(new Result('コーラ', 880))
  });

  // 入金テストケース途中
  it('buy cola and 880 chain', function (){
    const actual = buy(1,'');
    expect(actual).toStrictEqual(new Result('コーラ', 880))
  });

})