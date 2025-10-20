export default function errorHandler(err, req, res, next) {
  console.error(err.stack);

  let statusCode = err.statusCode || err.status || 500;
  let message = err.message || "Something goes wrong from server side";

  res.status(statusCode).json({
    success: false,
    error: message,
  });
}
