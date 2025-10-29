// controllers/healthController.js
exports.health = (req, res) => {
  res.json({ status: 'ok', env: process.env.NODE_ENV || 'development', time: new Date().toISOString() });
};
