const express = require('express');
const router = express.Router();
const multer = require('multer');
const { ocrReceipt } = require('../controllers/ocrController');

const upload = multer({ dest: 'uploads/' });
router.post('/receipt', upload.single('file'), ocrReceipt);

module.exports = router;
