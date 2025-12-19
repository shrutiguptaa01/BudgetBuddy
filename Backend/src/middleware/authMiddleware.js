
const jwt = require('jsonwebtoken');
require('dotenv').config();

function getTokenFromCookie(req, name) {
  return req.cookies && req.cookies[name] ? req.cookies[name] : null;
}

async function requireAuth(req, res, next) {
  const token = getTokenFromCookie(req, 'authToken');
  if (!token) return res.status(401).json({ message: 'Not authenticated. Please login.' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.userId };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid auth token' });
  }
}

async function requireUnlocked(req, res, next) {
  const unlockToken = getTokenFromCookie(req, 'unlockToken');
  if (!unlockToken) return res.status(403).json({ message: 'Unlock with MPIN to access' });
  try {
    const payload = jwt.verify(unlockToken, process.env.JWT_SECRET);
    if (payload.userId !== req.user.id) return res.status(403).json({ message: 'Unlock token mismatch' });
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid unlock token' });
  }
}

module.exports = { requireAuth, requireUnlocked };
