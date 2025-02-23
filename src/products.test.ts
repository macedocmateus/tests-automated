import request from "supertest";
import { app } from "./app";

// Teste para fazer uma requisição para aplicação
describe("products", () => {
    it("should list products", async () => {
        const response = await request(app).get("/products");
        console.log(response.body);

        // Criando uma verificação de uma expectativa para o status da requisição
        expect(response.status).toBe(200);

        // Criando uma verificação de uma expectativa para a quantidade de produtos no corpo da requisição
        expect(response.body).toHaveLength(3);

        // Criando uma verificação de uma expectativa de um conteúdo retornado
        expect(response.body.length).toBeGreaterThan(0);
    });
});
