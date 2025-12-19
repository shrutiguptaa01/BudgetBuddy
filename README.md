# 💰 Budget Buddy

**Budget Buddy** is a backend-based financial management and planning system designed for **salaried individuals**.  
It helps users **track expenses, manage savings, and plan future investments** such as buying a home, car, bike, or any personal wishlist item.


##  Project Overview

Budget Buddy helps salaried users understand their spending habits and improve financial discipline.  
By analyzing previous months’ expenses, the system suggests **where to reduce spending**, **how to save more**, and **how long it will take to achieve financial goals**.


##  Key Features

###  Secure Login with MPIN
- User registers using email
- A **6 digit MPIN** is one time generated and sent to the user’s email
- MPIN is required **every time when you open the website**
- Adds an extra layer of security for financial data



###  Expense Tracking
- Add daily and monthly expenses
- Categorize expenses (food, travel, rent, shopping, etc.)
- Track total monthly spending
- View expense history month wise

  
###  Savings Management
- Automatically calculates savings
- Shows income vs expenses
- Highlights surplus and overspending months



###  Goal & Wishlist Planning
Users can plan savings for:
-  New Home, New Car, New Bike, Any custom wishlist item

For each goal, the system:
- Calculates required savings
- Estimates **days / months / years** needed to achieve the goal
- Tracks progress toward the target amount



###  AI Powered Expense Analysis
AI analyzes past spending patterns and:
- Identifies unnecessary or high expenses
- Suggests **where to reduce spending**
- Recommends better saving habits
- Predicts future savings trends
- Helps users improve financial health


###  Smart Financial Suggestions
- Personalized improvement tips
- Monthly financial summary
- Expense optimization recommendations


##  Tech Stack

### Backend
- Node.js
- Express.js

### Database
- SQL (MySQL)

##  Security
- Email based **6 digit MPIN authentication**
- MPIN required at **every login**
- **Automatic session lock** if the website is closed without logout
- User must re enter MPIN on reopening the website
- Protects sensitive financial and expense data

##  System Architecture
```
Client (Future Frontend)
       ↓
Backend API (Node.js + Express)
       ↓
SQL Database
       ↓
AI Analysis Engine

```

---

##  Target Users
- Salaried professionals
- Beginners in financial planning
- Users planning long term purchases
- Anyone who wants better control over expenses


##  Installation & Setup

```bash
# Clone the repository
git clone https://github.com/shrutiguptaa01/BudgetBuddy

# Install dependencies
npm install

# Configure environment variables
# Email service & database credentials

# Start the server
npm start
```

##  Future Scope
- Frontend development (React)
- Interactive charts and dashboards
- AI powered financial chatbot
- Real time notifications & reminders
- Advanced investment suggestions

## Conclusion

Budget Buddy helps salaried individuals:

- Track expenses efficiently
- Save money smartly
- Plan future investments
- Make AIdriven financial decisions




