const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/expenseController');

const { requireAuth, requireUnlocked } = require('../middleware/authMiddleware');

router.use(requireAuth);      
router.use(requireUnlocked);   
router.post('/', ctrl.addExpense);
router.get('/', ctrl.getExpenses);
router.delete('/:expenseid', ctrl.deleteExpense);

module.exports = router;
