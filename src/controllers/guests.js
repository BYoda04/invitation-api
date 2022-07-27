//models
const { Guests } = require('../models/guests');
const { Escorts } = require('../models/escorts');

//utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

//controllers
const create = catchAsync(async (req,res,next)=>{
    const { completName } = req.body;


    const newGuest = await Guests.create({
        completName,
    });

    res.status(201).json({
        status: 'success',
        newGuest
    });
});

const deleted = catchAsync(async (req,res,next)=>{
    const { guest } = req;

    await guest.update({
        confirmation: false
    });

    res.status(200).json({
        status: 'success'
    });
});

const confirmate = catchAsync(async (req,res,next)=>{
    const { guest } = req;

    await guest.update({
        confirmation: true
    });

    res.status(200).json({
        status: 'success'
    });
});

const getAll = catchAsync(async (req,res,next)=>{
    const data = await Guests.findAll({
        where: {
            status: 'active'
        },
        include: {
            model: Escorts,
            required: false,
            where: {
                status: 'active'
            },
        }
    });

    if (!data.length) {
        return next(new AppError('Not guests exists',404));
    };

    res.status(200).json({
        status: 'success',
        data
    });
});

const getMe = catchAsync(async (req,res,next)=>{
    const { guest } = req;

    res.status(200).json({
        status: 'success',
        guest
    });
});

const getQuery = catchAsync(async (req,res,next)=>{
    const { confirmation } = req.query;

    const data = await Guests.findAll({
        where: {
            confirmation
        },
        include: {
            model: Escorts,
            required: false,
            where: {
                confirmation
            },
        }
    });

    if (!data.length) {
        return next(new AppError('Not guests exists',404));
    };

    res.status(200).json({
        status: 'success',
        data
    });
});

module.exports = {
    create,
    deleted,
    confirmate,
    getAll,
    getMe,
    getQuery,
};
