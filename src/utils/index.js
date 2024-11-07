export const statusLevels = {
  low: {
    color: "#047857",
    background: "#d1fae5",
    description:
      "Caffeine levels are mild, resulting in a light boost in alertness with minimal side effects.",
    maxLevel: 100,
  },
  moderate: {
    color: "#b45309",
    background: "#fef3c7",
    description:
      "A moderate amount of caffeine leads to noticeable stimulation, increased focus, and potential restlessness.",
    maxLevel: 200,
  },
  high: {
    color: "#e11d48",
    background: "#ffe4e6",
    description:
      "Elevated caffeine levels can cause jitteriness, rapid heartbeat, and trouble concentrating, signaling an excessive intake.",
    maxLevel: 9999,
  },
};
export const coffeeConsumptionHistory = {
  1727579064032: { name: "Americano", cost: 413.4 },
  1727629263026: { name: "Rockstar Energy (16oz)", cost: 513.4 },
  1727571485301: { name: "Macchiato", cost: 524.7 },
  1727585485245: { name: "Instant Coffee (1 tsp)", cost: 369.4 },
  1727614392214: { name: "Irish Coffee", cost: 368.4 },
  1727642088808: { name: "Flat White", cost: 379.4 },
  1727600684481: { name: "Latte", cost: 299.4 },
  1727615806680: { name: "Drip Coffee (12oz)", cost: 269.4 },
  1727609623836: { name: "Bang Energy (16oz)", cost: 259.4 },
  1727647449961: { name: "Monster Java (15oz)", cost: 333.4 },
  1727595771504: { name: "Red Eye", cost: 259.4 },
  1727586709242: { name: "5-hour Energy (2oz)", cost: 421.4 },
  1727592250322: { name: "Cortado", cost: 339.4 },
  1727630731059: { name: "NOS Energy Drink (16oz)", cost: 279.4 },
  1727584588314: { name: "Drip Coffee (12oz)", cost: 449.4 },
  1727630390005: { name: "Celsius Energy Drink (12oz)", cost: 243.4 },
  1727595715018: { name: "Matcha Latte", cost: 339.4 },
  1727605577918: { name: "AMP Energy Drink (16oz)", cost: 476.4 },
  1727565390441: { name: "Vietnamese Coffee", cost: 254.4 },
  1727641229973: { name: "Flat White", cost: 409.4 },
  1727610658037: { name: "Black Coffee (8oz)", cost: 259.4 },
  1727620751667: { name: "Bang Energy (16oz)", cost: 482.4 },
  1727597163157: { name: "Monster Energy (16oz)", cost: 513.4 },
  1727590586957: { name: "Iced Coffee (8oz)", cost: 283.4 },
  1727610760698: { name: "Monster Java (15oz)", cost: 333.4 },
  1727601688000: { name: "Nitro Cold Brew (12oz)", cost: 347.4 },
  1727602354621: { name: "Turkish Coffee", cost: 298.4 },
  1727599341790: { name: "Double Espresso", cost: 443.4 },
  1727566519925: { name: "Flat White", cost: 292.4 },
  1727554338958: { name: "Espresso", cost: 264.4 },
  1727623439992: { name: "Red Bull (8.4oz)", cost: 394.4 },
  1727569314281: { name: "AMP Energy Drink (16oz)", cost: 421.4 },
  1727577846796: { name: "Starbucks Doubleshot (6.5oz)", cost: 495.4 },
  1727651270793: { name: "Drip Coffee (12oz)", cost: 414.4 },
  1727571590403: { name: "Red Eye", cost: 274.4 },
  1727575199865: { name: "Reign Energy Drink (16oz)", cost: 524.4 },
  1727613114673: { name: "Vietnamese Coffee", cost: 309.4 },
  1727553981855: { name: "Cold Brew (12oz)", cost: 367.4 },
  1727628992138: { name: "Zipfizz (1 tube)", cost: 497.4 },
  1727628992169: { name: " Desi Indian Chai", cost: 20 },
  1727626471677: { name: "Reign Energy Drink (16oz)", cost: 243.4 },
  1727618530023: { name: "Zipfizz (1 tube)", cost: 524.4 },
  1727616747401: { name: "Turkish Coffee", cost: 404.4 },
  1727635847332: { name: "Black Coffee (8oz)", cost: 459.4 },
};

export const coffeeOptions = [
  { name: "Espresso", caffeine: 63 },
  { name: "Desi Indian Chai", caffeine: 35 },
  { name: "Double Espresso", caffeine: 126 },
  { name: "Americano", caffeine: 96 },
  { name: "Cappuccino", caffeine: 80 },
  { name: "Latte", caffeine: 80 },
  { name: "Mocha", caffeine: 90 },
  { name: "Macchiato", caffeine: 85 },
  { name: "Flat White", caffeine: 130 },
  { name: "Cortado", caffeine: 85 },
  { name: "Red Eye", caffeine: 159 },
  { name: "Black Coffee (8oz)", caffeine: 95 },
  { name: "Iced Coffee (8oz)", caffeine: 90 },
  { name: "Cold Brew (12oz)", caffeine: 155 },
  { name: "Nitro Cold Brew (12oz)", caffeine: 215 },
  { name: "Drip Coffee (12oz)", caffeine: 120 },
  { name: "Frappuccino", caffeine: 95 },
  { name: "Turkish Coffee", caffeine: 160 },
  { name: "Irish Coffee", caffeine: 70 },
  { name: "Vietnamese Coffee", caffeine: 100 },
  { name: "Affogato", caffeine: 65 },
  { name: "Instant Coffee (1 tsp)", caffeine: 30 },
  { name: "Decaf Coffee", caffeine: 2 },
  { name: "Chai Latte", caffeine: 40 },
  { name: "Matcha Latte", caffeine: 70 },
  { name: "Monster Energy (16oz)", caffeine: 160 },
  { name: "Red Bull (8.4oz)", caffeine: 80 },
  { name: "Rockstar Energy (16oz)", caffeine: 160 },
  { name: "Bang Energy (16oz)", caffeine: 300 },
  { name: "Celsius Energy Drink (12oz)", caffeine: 200 },
  { name: "5-hour Energy (2oz)", caffeine: 200 },
  { name: "NOS Energy Drink (16oz)", caffeine: 160 },
  { name: "Reign Energy Drink (16oz)", caffeine: 300 },
  { name: "Starbucks Doubleshot (6.5oz)", caffeine: 135 },
  { name: "Monster Java (15oz)", caffeine: 188 },
  { name: "AMP Energy Drink (16oz)", caffeine: 142 },
  { name: "Zipfizz (1 tube)", caffeine: 100 },
];

const halfLifeHours = 5;

export function calculateCurrentCaffeineLevel(historyData) {
  const currentTime = Date.now();
  const halfLife = halfLifeHours * 60 * 60 * 1000; // 5 hours in milliseconds
  const maxAge = 48 * 60 * 60 * 1000; // 48 hours in milliseconds

  let totalCaffeine = 0;

  for (const [timestamp, entry] of Object.entries(historyData)) {
    const timeElapsed = currentTime - parseInt(timestamp);

    // Ignore entries older than 48 hours
    if (timeElapsed <= maxAge) {
      const caffeineInitial = getCaffeineAmount(entry.name);
      // Calculate the remaining caffeine using the half-life formula
      const remainingCaffeine =
        caffeineInitial * Math.pow(0.5, timeElapsed / halfLife);
      totalCaffeine += remainingCaffeine;
    }
  }

  return totalCaffeine.toFixed(2);
}

// Helper function to get caffeine amount based on the coffee name
export function getCaffeineAmount(coffeeName) {
  const coffee = coffeeOptions.find((c) => c.name === coffeeName);
  return coffee ? coffee.caffeine : 0;
}

export function getTopThreeCoffees(historyData) {
  const coffeeCount = {};

  // Count occurrences of each coffee type
  for (const entry of Object.values(historyData)) {
    const coffeeName = entry.name;
    if (coffeeCount[coffeeName]) {
      coffeeCount[coffeeName]++;
    } else {
      coffeeCount[coffeeName] = 1;
    }
  }

  // Convert coffeeCount object to an array of [coffeeName, count] and sort by count
  const sortedCoffees = Object.entries(coffeeCount).sort((a, b) => b[1] - a[1]);

  // Calculate total coffees consumed
  const totalCoffees = Object.values(coffeeCount).reduce(
    (sum, count) => sum + count,
    0
  );

  // Get the top 3 most popular coffees
  const topThree = sortedCoffees.slice(0, 3).map(([coffeeName, count]) => {
    const percentage = ((count / totalCoffees) * 100).toFixed(2);
    return {
      coffeeName: coffeeName,
      count: count,
      percentage: percentage + "%",
    };
  });

  return topThree;
}

export function timeSinceConsumption(utcMilliseconds) {
  const now = Date.now();
  const diffInMilliseconds = now - utcMilliseconds;

  // Convert to seconds, minutes, hours, days, and months
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  // Get the remainder for each unit
  const remainingDays = days % 30;
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  // Construct the string
  let result = "";
  if (months > 0) result += `${months}M `;
  if (remainingDays > 0) result += `${remainingDays}D `;
  if (remainingHours > 0) result += `${remainingHours}H `;
  if (remainingMinutes > 0) result += `${remainingMinutes}M `;
  if (remainingSeconds > 0 || result === "") result += `${remainingSeconds}S`; // Show seconds even if they're 0 if nothing else exists

  return result.trim(); // Remove any trailing space
}

// This function was added during recording
export function calculateCoffeeStats(coffeeConsumptionHistory) {
  const dailyStats = {};
  let totalCoffees = 0;
  let totalCost = 0;
  let totalCaffeine = 0;
  let totalDaysWithCoffee = 0;

  for (const [timestamp, coffee] of Object.entries(coffeeConsumptionHistory)) {
    const date = new Date(parseInt(timestamp)).toISOString().split("T")[0]; // Extract date in YYYY-MM-DD format
    const caffeine = getCaffeineAmount(coffee.name);
    const cost = parseFloat(coffee.cost);

    // Initialize or update the daily stats
    if (!dailyStats[date]) {
      dailyStats[date] = { caffeine: 0, cost: 0, count: 0 };
    }

    dailyStats[date].caffeine += caffeine;
    dailyStats[date].cost += cost;
    dailyStats[date].count += 1;

    // Update totals
    totalCoffees += 1;
    totalCost += cost;
  }

  const days = Object.keys(dailyStats).length;
  const dailyCaffeine = {};
  for (const [date, stats] of Object.entries(dailyStats)) {
    if (stats.caffeine > 0) {
      totalCaffeine += stats.caffeine;
      totalDaysWithCoffee += 1; // Count days when caffeine was consumed
    }
  }

  // Calculate average daily caffeine and average daily cost
  const averageDailyCaffeine =
    totalDaysWithCoffee > 0
      ? (totalCaffeine / totalDaysWithCoffee).toFixed(2)
      : 0;
  const averageDailyCost =
    totalDaysWithCoffee > 0 ? (totalCost / totalDaysWithCoffee).toFixed(2) : 0;
  console.log(totalCost, typeof totalCost);
  return {
    daily_caffeine: averageDailyCaffeine,
    daily_cost: averageDailyCost,
    average_coffees: (totalCoffees / days).toFixed(2),
    total_cost: totalCost.toFixed(2),
  };
}
