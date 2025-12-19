
function recommendCuts(expenses, targetSaving) {
  const sorted = expenses.slice().sort((a,b) => b.amount - a.amount);
  let sum = 0;
  const chosen = [];
  for (let e of sorted) {
    if (sum >= targetSaving) break;
    chosen.push(e);
    sum += Number(e.amount);
  }
  return { chosen, sum, targetSaving };
}

function monthsToReachGoal(targetAmount, savedAlready, monthlySaving) {
  const remaining = Math.max(0, Number(targetAmount) - Number(savedAlready));
  if (monthlySaving <= 0) return Infinity;
  return Math.ceil(remaining / monthlySaving);
}

function knapsack(items, budget) {
  const n = items.length;
  const B = Math.floor(budget);
  const dp = Array.from({length: n+1}, () => Array(B+1).fill(0));
  for (let i = 1; i <= n; i++) {
    const cost = Math.floor(items[i-1].cost);
    const val = items[i-1].value;
    for (let w = 0; w <= B; w++) {
      dp[i][w] = dp[i-1][w];
      if (cost <= w) {
        dp[i][w] = Math.max(dp[i][w], dp[i-1][w-cost] + val);
      }
    }
  }

  let w = B;
  const chosen = [];
  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i-1][w]) {
      chosen.push(items[i-1]);
      w -= Math.floor(items[i-1].cost);
    }
  }
  return { maxValue: dp[n][B], chosen };
}

module.exports = { recommendCuts, monthsToReachGoal, knapsack };
