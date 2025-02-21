import type { Config } from "jest";

const config: Config = {
    // Bail ele para os testes quando um deles falhar
    bail: true,
    // Para usar o typescript com o jest
    preset: "ts-jest",
    // Para usar o jest em um ambiente node
    testEnvironment: "node",
};

export default config;
