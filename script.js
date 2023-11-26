function HelloWorld() {
    return "Hello World";
}



// Acima, a declaração de uso de um Webservice e seu consumo; Abaixo, o exemplo de teste e depuração; 

const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
    test('It should respond to the GET method', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
    }); 
  // testar o caminho raiz, apresentando um retorno como teste, declarar uma "busca" como requisição de aplicativo, tentando localização o user; Função assíncrona; 
  // em tese o código deve acompanhar uma Função Promise; 

    test('It should respond to the POST method', async () => {
        const response = await request(app).post('/users').send({
            name: 'Alice',
            age: 25
        });
        expect(response.statusCode).toBe(200);
    });

    test('It should respond to the PUT method', async () => {
        const response = await request(app).put('/users/1').send({
            name: 'Harry',
            age: 30
        });
        expect(response.statusCode).toBe(200);
    });

    test('It should respond to the DELETE method', async () => {
        const response = await request(app).delete('/users/1');
        expect(response.statusCode).toBe(200);
    });
});

