import http from "node:http";

const products = [
    {
        id: 1,
        name: "Camiseta",
        price: 100,
    },
    {
        id: 2,
        name: "Blusa",
        price: 79.9,
    },
    {
        id: 3,
        name: "Sapato",
        price: 135.99,
    },
];

const app = http.createServer((request, response) => {
    if (request.method === "GET" && request.url === "/products") {
        // Definindo o formato do cabeçalho para entrar no teste e retornar o conteúdo como json
        response.setHeader("Content-Type", "application/json");

        response.end(JSON.stringify(products));
    }
});

export { app };
