export default function errorHandler(err, req, res, next) {
  console.error(err.stack);

  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || "Something goes wrong from server side";
  res.status(statusCode).json({
    succsess: false,
    error: message,
  });
}
