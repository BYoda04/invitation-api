//models

const { Escorts } = require("../models/escorts");
const { Guests } = require("../models/guests");


const relations = ()=>{

    //hasMany
    Guests.hasMany(Escorts, { foreignKey: 'guestId' });

    //hasOne

    //belongsTo
    Escorts.belongsTo(Guests);
};

module.exports = { relations };