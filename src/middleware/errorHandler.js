// errorHandler middleware allows to handle server errors
export default function errorHandler(err, req, res, next) {
  console.error(err.stack);

  // If we're get status code from error
  let statusCode = err.statusCode || err.status || 500;
  // If we're get message from error
  let message = err.message || "Something goes wrong from server side";

  // Use code and message in response
  res.status(statusCode).json({
    success: false,
    error: message,
  });
}
