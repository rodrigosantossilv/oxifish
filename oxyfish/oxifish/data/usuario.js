const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize,DataTypes) => {
    const Usuario = Sequelize.define(
        "Usuario",
        {
            id_usuario:{
                type:DataTypes.INTERGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true,
            },
            nome:{
                type: DataTypes.STRING(255),
                allowNull:false,
            },
            email:{
                type:DataTypes.STRING(255),
                allowNull: false,
            },
            senha:{
                type: DataTypes.INTERGER(8),
                allowNull:false,
            },
            data_cadastro:{
                type: DataTypes.DATE,
                defaultValue: _Sequelize.literal('CURRENT_TIMESTAMP'), // Define o valor padrão como a data e hora atuais
                allowNull:false,
            },
        },
        {freezeTableName: true, Timestamps: false}
    );
    return Usuario;
}