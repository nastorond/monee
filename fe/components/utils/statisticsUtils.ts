import { Transaction } from "@/store/transactionSlice";

// 연간
export function getYearlyData(transactions: Transaction[]) {
  const yearlyTotals: Record<string, number> = {};
  const thisYear = new Date().getFullYear();

  for (let year = thisYear - 5; year <= thisYear; year++) {
    yearlyTotals[`${year}년`] = 0;
  }

  transactions.forEach((t) => {
    const year = new Date(t.date).getFullYear();
    const key = `${year}년`;
    if (yearlyTotals[key] !== undefined) {
      yearlyTotals[key] += t.amount;
    }
  });

  return Object.entries(yearlyTotals).map(([label, value]) => ({ label, value }));
}

// 월간
export function getMonthlyData(transactions: Transaction[]) {
  const monthlyTotals: Record<string, number> = {};

  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth() - 1, 1); 
  const end = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  const allMonths: string[] = [];
  const cur = new Date(start);
  while (cur <= end) {
    const key = `${cur.getFullYear()}-${(cur.getMonth() + 1).toString().padStart(2, "0")}`;
    allMonths.push(key);
    cur.setMonth(cur.getMonth() + 1);
  }

  allMonths.forEach((month) => {
    monthlyTotals[month] = 0;
  });

  transactions.forEach((t) => {
    const date = new Date(t.date);
    const key = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}`;
    if (monthlyTotals[key] !== undefined) {
      monthlyTotals[key] += t.amount;
    }
  });

  return allMonths.map((key) => ({
    label: `${key.split("-")[0]}년 ${key.split("-")[1]}월`,
    value: monthlyTotals[key],
  }));
}

// 주간
export function getWeeklyData(transactions: Transaction[]) {
  const weeklyTotals: Record<string, number> = {};
  const cutoff = new Date();
  cutoff.setFullYear(cutoff.getFullYear() - 2);

  transactions.forEach((t) => {
    const date = new Date(t.date);
    if (date < cutoff) return;

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const week = Math.ceil(date.getDate() / 7);

    const key = `${year}년 ${month}월 ${week}주차`;

    weeklyTotals[key] = (weeklyTotals[key] || 0) + t.amount;
  });

  return Object.entries(weeklyTotals).map(([label, value]) => ({ label, value }));
}