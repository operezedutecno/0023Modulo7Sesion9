// Id, rut, nombre, apellido
const Sequelize = require("sequelize")
const db = require("./Conexion.js")

const Persona = db.define("personas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rut: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true
    },
    nombre: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
})

module.exports = Persona