const db = require('../utils/db');
const { hashPassword, comparePassword } = require('../utils/hash');
const { sendEmail } = require('../utils/email');

exports.register = async (req,res)=>{
  const { name,email,password,phone_number } = req.body;
  const hashedPwd = password ? await hashPassword(password) : null;
  const mpin = Math.floor(100000 + Math.random()*900000).toString();
  const hashedMpin = await hashPassword(mpin);

  try{
    await db.execute(
      `INSERT INTO users (name,email,password,phone_number,mpin_hash,mpin_set) VALUES (?,?,?,?,?,1)`,
      [name,email,hashedPwd,phone_number,hashedMpin]
    );
    await sendEmail(email,"Your MPIN","Your MPIN is: "+mpin);
    res.json({ success:true, message:"Registered. Check email for MPIN." });
  }catch(err){ res.status(500).json({error: err.message}); }
};

exports.login = async(req,res)=>{
  const { email,password } = req.body;
  const [rows] = await db.execute("SELECT * FROM users WHERE email=?", [email]);
  const user = rows[0];
  if(!user) return res.status(401).json({error:"User not found"});
  if(user.password){
    const match = await comparePassword(password,user.password);
    if(!match) return res.status(401).json({error:"Wrong password"});
  }
  res.json({ success:true, mpinSet: !!user.mpin_set, userId:user.id });
};

exports.verifyMpin = async(req,res)=>{
  const { userId, mpin } = req.body;
  const [rows] = await db.execute("SELECT mpin_hash FROM users WHERE id=?", [userId]);
  const user = rows[0];
  const match = await comparePassword(mpin,user.mpin_hash);
  if(match) res.json({success:true});
  else res.status(401).json({error:"Invalid MPIN"});
};

exports.regenerateMpin = async(req,res)=>{
  const { userId } = req.body;
  const mpin = Math.floor(100000 + Math.random()*900000).toString();
  const hashedMpin = await hashPassword(mpin);
  await db.execute("UPDATE users SET mpin_hash=?, mpin_set=1 WHERE id=?", [hashedMpin,userId]);
  const [rows] = await db.execute("SELECT email FROM users WHERE id=?", [userId]);
  await sendEmail(rows[0].email,"New MPIN","Your new MPIN is: "+mpin);
  res.json({success:true, message:"New MPIN sent to email"});
};

exports.logout = async (req, res) => {
  res.json({ success: true, message: "Logged out successfully" });
};
