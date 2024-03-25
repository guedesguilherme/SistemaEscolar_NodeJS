const express = require("express");
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const rota_turma = require('./routes/rota_turma');
const rota_aluno = require('./routes/rota_aluno');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/css', express.static('public/css'));
app.use('/img', express.static('public/img'));
//Rota Principal
app.get('/', (req, res) => {
    res.render('home')
})
//Remanejando Rotas de cargo
app.use('/rota_turma', rota_turma);
//Remanejando Rotas do aluno
app.use('/rota_aluno', rota_aluno);

const PORT = 8081;
app.listen(PORT, () => {
    console.log("Servidor Rodando nas URL's");
    console.log("http://localhost:8081/");
    console.log("http://localhost:8081/rota_turma/turma");
    console.log("http://localhost:8081/rota_aluno/aluno ");
});