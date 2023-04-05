const { constants } = require("../constants");
const errorHandler = (err, req, res)=>{
    switch(err.message){
    case constants.NOT_FOUND:{
        res.status(404);
        res.json({
            title:"Not_found",
            message:err.message,
            stackTrace: err.stack,
        });
    }break;
    case constants.VALIDATION_ERROR:{
        res.status(400);
        res.json({
            title:"Validation Error",
            message:err.message,
            stackTrace: err.stack,
        });
    }break;
    case constants.UNATHORIZEDR:{
        res.status(401);
        res.json({
            title:"Unathorized",
            message:err.message,
            stackTrace: err.stack,
        });
    }break;
    case constants.FORBIDDEN:{
        res.status(403);
        res.json({
            title:"Forbidden",
            message:err.message,
            stackTrace: err.stack,
        });
    }break;
    case constants.SERVER_ERROR:{
        res.status(500);
        res.json({
            title:"Server Error", 
            message:err.message, 
            stackTrace: err.stack
        });
    }
    }
};

module.exports = errorHandler;