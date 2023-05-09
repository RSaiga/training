class Jihannki {
  private total:number = 0;

  public charge(val: number): boolean {
    if( val == 10 ) {
      this.total += val
      return true
    }
    if( val == 50 ) {
      this.total += val
      return true
    }
    if( val == 100 ) {
      this.total += val
      return true
    }
    if( val == 1000 ) {
      this.total += val
      return true
    }
    return false
  }

  public getTotal(): number {
    return this.total;
  }
}

describe('自動販売機', () => {
  it('お金を投入できる', () => {
    expect(new Jihannki().charge(100)).toBe(true)
  })

  it('お金を複数回投入できる', () => {
    expect(new Jihannki().charge(100)).toBe(true)
  })

  it('お金の総計', () => {
    let jihanki = new Jihannki()
    jihanki.charge(100)
    jihanki.charge(100)
    expect(jihanki.getTotal()).toBe(200)
  })
})