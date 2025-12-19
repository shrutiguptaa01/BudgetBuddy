const db = require('../utils/db');

exports.addExpense = async (req, res) => {
  try {
    const { userId, title, amount, category } = req.body;
    if (!userId || !title || !amount || !category) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const [result] = await db.execute(
      "INSERT INTO expenses (user_id, title, amount, category) VALUES (?,?,?,?)",
      [userId, title, amount, category]
    );
    res.json({ success: true, expenseId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'userId is required' });
    }

    const [rows] = await db.execute("SELECT * FROM expenses WHERE user_id=?", [userId]);
    res.json({ success: true, expenses: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { expenseId } = req.params;
    if (!expenseId) {
      return res.status(400).json({ success: false, message: 'expenseId is required' });
    }

    const [result] = await db.execute("DELETE FROM expenses WHERE id=?", [expenseId]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Expense not found' });
    }

    res.json({ success: true, message: 'Expense deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
