class User {
  signup(email: string, password: string) {
    return password.length >= 10;
  }
}

describe('test', () => {
  it('valid user', function () {
    const actual = new User().signup('ryota.saiga@odd-e.com', '1234567890');
    expect(actual).toBe(true)
  });
  it('invalid user', function () {
    const actual = new User().signup('ryota.saiga@odd-e.com', '123456780');
    expect(actual).toBe(false)
  });
})