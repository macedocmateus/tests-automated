import { sum } from "./server";

// Criando um describe para um conjunto de testes
describe("sum", () => {
    let sumResult: number;

    // beforeAll ele executa funções antes de ir para os testes
    beforeAll(() => {
        sumResult = 7;
        console.log("executado antes dos testes", sumResult);
    });

    // afterAll ele executa funções depois dos testes
    afterAll(() => {
        sumResult = 22;
        console.log("executado depois dos testes", sumResult);
    });

    test("sum of 2 + 5 must be 7", () => {
        const result = sum(2, 5);

        expect(result).toBe(sumResult);
    });

    test("sum of 2 + 2 must be 4", () => {
        const result = sum(2, 2);

        expect(result).toBe(4);
    });
});
