const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);

aplicacao.use(express.static('public'))

servidorHttp.listen(1000);