const sequelize = require("sequelize");
const dbConfig = require("../config/dbConfig");

const {Sequelize, Datatypes } = require("sequelize");

const sequelize = new Sequelize(
      dbConfig.DB,
      dbConfig.USERNAME,
      dbConfig.PASSWORD,

    {
     host: dbConfig.HOST,
     dialect:dbConfig.DIALECT,
     port:dbConfig.PORT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((erro) => {
    console.log("Erro ao tentar conecta: " + erro);
  });

sequelize
 .sync({alter: true })
 .then(() => {
    console.log("Tabela criada com sucesso!");
 })
 .catch((err) => {
    console.log("Erros: " + err);
 });

// module.exports = {Produto}// fiquei na duvida se coloca isso pq é um produto/