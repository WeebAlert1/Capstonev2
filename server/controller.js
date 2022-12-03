require('dotenv').config()
const {CONNECTION_STRING} = process.env
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})



//const houses = require('./db.json')


module.exports = {
    getShows: (req, res) => {
        sequelize.query(`SELECT * FROM show;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    deleteShow: (req, res) => {
        let {id} = req.params
        sequelize.query(`DELETE FROM show WHERE show_id = ${id};`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    createShow: (req, res) => {
        sequelize.Query(`INSERT INTO show (showName, imgURL)
        VALUES ( ${req.body.showName}, ${req.body.imageURL} );`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    
}