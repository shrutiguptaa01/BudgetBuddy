
const pool = require('../db');

async function addGoal(req, res) {
  const userId = req.user.id;
  const { name, target_amount, saved_amount, target_date } = req.body;
  try {
    await pool.query('INSERT INTO goals (user_id, name, target_amount, saved_amount, target_date) VALUES (?, ?, ?, ?, ?)', [userId, name, target_amount || 0, saved_amount || 0, target_date || null]);
    return res.json({ message: 'Goal added' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
}

async function getGoals(req, res) {
  const userId = req.user.id;
  try {
    const [rows] = await pool.query('SELECT * FROM goals WHERE user_id = ? ORDER BY created_at DESC', [userId]);
    return res.json({ goals: rows });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { addGoal, getGoals };
