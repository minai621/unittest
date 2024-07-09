import { add } from ".";

describe("사칙연산", () => {
  describe("add", () => {
    test("1+1", () => {
      expect(add(1, 1)).toBe(2);
    });
    ``;
    test("3+3", () => {
      expect(add(3, 3)).toBe(6);
    });
  });
});
