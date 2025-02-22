import { sum } from "./server";

test("sum of 2 + 5 must be 7", () => {
    const result = sum(2, 5);

    // Criando uma expectativa, onde ela seja verdadeira, no caso do exemplo resultado = 7
    expect(result).toBe(7);
});
