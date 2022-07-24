const { dbConnect, DataTypes } = require('../db/database');

//Model table
const Escorts = dbConnect.define('escorts', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    guestId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    confirmation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
		defaultValue: 'active',
    }
});

module.exports = {
    Escorts
};