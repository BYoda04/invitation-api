//models
const { Escorts } = require("../models/escorts");

//utils
const { AppError } = require("../utils/appError");
const { catchAsync } = require("../utils/catchAsync");

const escortExists = catchAsync(async (req,res,next)=>{
    const { id } = req.params;

    const escort = await Escorts.findOne({
        where: {
            id,
            status:'active'
        },
    });

    if (!escort) {
        return next(new AppError('Escort not found',404));
    };

    req.escort = escort;

    next();
});

module.exports = { escortExists };