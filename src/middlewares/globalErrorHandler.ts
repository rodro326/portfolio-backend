import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  console.error("Global Error:", error);

  let statusCode = 500;
  let message = "Something went wrong!";

  if (error.name === "ValidationError") {
    statusCode = 400;
    message = "Validation error!";
  }

  if (error.name === "CastError") {
    statusCode = 400;
    message = "Invalid ID format!";
  }

  if (error.code === 11000) {
    statusCode = 409;
    message = "Duplicate data found!";
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: error.message || error,
  });
};

export default globalErrorHandler;