// route404Handler middleware allows to handle bad route errors
export default function route404Handler(req, res) {
  res.status(404).json({
    success: false,
    error: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}
