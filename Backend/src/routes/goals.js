const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/goalController');
const { requireAuth, requireUnlocked } = require('../middleware/authMiddleware');

router.use(requireAuth);
router.use(requireUnlocked);

router.post('/', ctrl.addGoal);
router.get('/', ctrl.getGoals);

module.exports = router;
