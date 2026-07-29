// import { stat } from "fs";

const errorHandler = (err,req,res,next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    //mongoose vad ObjectId
    if(err.name === "CastError"){
        message = "Resources not found";
        statusCode = 404;
    }

    //mongoose duplicate key error
    if(err.code === 11000){
        const field = Object.keys(err.keyValue)[0];
        message = `${field} already exists`;
        statusCode = 400;
    }

    //Mongoose validation error
    if(err.name === "ValidationError"){
        message = Object.values(err.errors).map(val => val.message).join(",");
        statusCode = 400;
    }

    // Multer file size error
    if(err.code === "LIMIT_FILE_SIZE"){
        message = "File size is too large. Max limit is 5MB.";
        statusCode = 400;
    }

    if(err.name === "JsonWebTokenError"){
        message = "Invalid token. Please log in again.";
        statusCode = 401;
    }
    
    if(err.name === "TokenExpiredError"){
        message = "Your token has expired. Please log in again.";
        statusCode = 401;
    }

    console.error('Error:', {
        message: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : "N/A",
    });

    res.status(statusCode).json({
        success: false,
        message,
        statusCode,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack })
    });

}

export default errorHandler;