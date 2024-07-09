import { add, RangeError } from ".";

describe("사칙연산", () => {
  test("반환값의 상한은 '100'이다", () => {
    expect(add(10, 90)).toBe(100);
  });
  test("인수가 0~100의 범위 밖이면 예외가 발생한다", () => {
    expect(() => add(-10, 110)).toThrow(RangeError);
  });
});
