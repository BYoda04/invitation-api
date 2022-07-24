//models
const { Escorts } = require("../models/escorts");
const { Guests } = require("../models/guests");

//utils
const { AppError } = require("../utils/appError");
const { catchAsync } = require("../utils/catchAsync");

const guestExists = catchAsync(async (req,res,next)=>{
    const { id } = req.params;

    const guest = await Guests.findOne({
        where: {
            id,
            status:'active'
        },
        include: {
            model: Escorts,
            required: false,
            where: {
                status: 'active'
            }
        }
    });

    if (!guest) {
        return next(new AppError('Guest not found',404));
    };

    req.guest = guest;

    next();
});

module.exports = { guestExists };