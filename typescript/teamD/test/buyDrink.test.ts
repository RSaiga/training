function putMoneyIn(yen: number): boolean {
  // コメントアウトしておきますが
  // 1円のテストが通る最小の実装は以下かなと思います
  // if (1 === yen) {
  //   return false
  // }
  return true
}

describe('お金の投入', () => {
  it('100円を投入できる', () => {
    expect(putMoneyIn(100)).toBe(true)
  })
  it('1円を投入できない', () => {
    expect(putMoneyIn(1)).toBe(false)
  })
})