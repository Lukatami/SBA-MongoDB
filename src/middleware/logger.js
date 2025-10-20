export default function logger(req, res, next) {
  if (/^\/\.well-known/.test(req.originalUrl)) {
    return next();
  }

  const time = new Date().toLocaleString();

  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next();
}
