DROP DATABASE IF EXISTS budgetbuddy;
CREATE DATABASE budgetbuddy;
USE budgetbuddy;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  email_verified TINYINT(1) DEFAULT 0,  
  phone_number VARCHAR(15) UNIQUE,       
  phone_verified TINYINT(1) DEFAULT 0,   
  google_id VARCHAR(255) UNIQUE,         
  password VARCHAR(255),                 
  mpin_hash VARCHAR(255),               
  mpin_set TINYINT(1) DEFAULT 0,
  profile_image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
              ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  type ENUM('income', 'expense') NOT NULL, 
  title VARCHAR(255),
  category VARCHAR(100),                    
  amount DECIMAL(12,2) NOT NULL,
  date DATE DEFAULT (CURRENT_DATE),
  recurring TINYINT(1) DEFAULT 0,           
  receipt_image VARCHAR(255),               
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE goals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  name VARCHAR(255),
  target_amount DECIMAL(12,2) NOT NULL,
  saved_amount DECIMAL(12,2) DEFAULT 0,
  target_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE budgets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  category VARCHAR(100),
  monthly_limit DECIMAL(12,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE notifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  type VARCHAR(50),
  message TEXT,
  is_read TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
