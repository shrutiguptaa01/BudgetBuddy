const Tesseract = require('tesseract.js');

exports.ocrReceipt = async(req,res)=>{
  const filePath = req.file.path;
  const { data: { text } } = await Tesseract.recognize(filePath,'eng');
  res.json({ text });
};
