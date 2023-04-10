const { constants } = require("../constants");

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    const errorMessage = err.message;

    switch (errorMessage) {
    case constants.NOT_FOUND.toString(): {
        res.status(constants.NOT_FOUND).json({
            message: "contact not found",
        });
    }break;
    case constants.VALIDATION_ERROR.toString():{
        res.status(constants.VALIDATION_ERROR).json({
            message: "All fields are mandatory!",
        });
    }break;
    case constants.FORBIDDEN.toString():{
        res.status(constants.FORBIDDEN).json({
            message: "User don't have permission to update other user contacts",
        });
    }break;
    }

};
module.exports = errorHandler;
