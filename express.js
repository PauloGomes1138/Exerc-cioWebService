// o banco de dados depende de declaração de variável javascript, utilizando express.js é possível fazer as requisições; 
//  criação, leitura, atualização e exclusão de usuários;
// declare primeiro a constante express e um requerimento, chamado "express" e strings; Após, estruture a aplicação em Json - que unifica todo o processo prévio; 
// Variável let inclui os objetos e seus parâmetros, elementID, e demais características; Necessário abrir uma propriedade de utilização que dê um arrow return nas declarações;
// caso o elementId não seja encontrato, não retornar o user; 



const express = require('express');
const app = express();
app.use(express.json());

let data = [
    { id: 1, name: 'Pedro', age: 25 },
    { id: 2, name: 'Joseph', age: 30 },
    { id: 3, name: 'Harry', age: 35 }
];

app.get('/users', (req, res) => {
    res.send(data);
});

app.get('/users/:id', (req, res) => {
    const user = data.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found.');
    res.send(user);
});

app.post('/users', (req, res) => {
    const user = {
        id: data.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    data.push(user);
    res.send(user);
});

app.put('/users/:id', (req, res) => {
    const user = data.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found.');

    user.name = req.body.name;
    user.age = req.body.age;
    res.send(user);
});

app.delete('/users/:id', (req, res) => {
    const user = data.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found.');

    const index = data.indexOf(user);
    data.splice(index, 1);
    res.send(user);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
