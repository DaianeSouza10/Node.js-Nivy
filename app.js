const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url = 'mongodb+srv://usuario_admin:_nivy2020@cluster0-jn8ue.mongodb.net/test?retryWrites=true&w=majority'; //STRING DE CONEXÃO
const options = { reconnectTries:Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true};
//useUnifiedTopology: true

mongoose.connect(url,options);
//mongoose.set('useCreateIndex', true);

/*
mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err);
})

mongoose.connection.on('desconected', () =>{
    console.log('Aplicação desconectada!');
})

mongoose.connection.on('connected', () =>{
    console.log('Aplicação conectada!!');
})*/

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require('./Routes/index');
const userRoute = require('./Routes/users');

app.use('/',indexRoute);
app.use('/users', userRoute);

app.listen(3000,()=>{
    console.log("Servidor funcionando...")
});

module.exports = app;
