const { dbConnect, DataTypes } = require('../db/database');

//Model table
const Guests = dbConnect.define('guests', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    completName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    confirmation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
		defaultValue: 'active'
    }
});

module.exports = {
    Guests
};