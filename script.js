/* =========================================
   FOODWISE DATABASE
========================================= */

const foods = [

    /* ================= FRUITS ================= */

    {
        name: "Apple",
        emoji: "🍎",
        category: "fruit",
        type: "healthy",
        calories: 52,
        protein: 0.3,
        sugar: 10.4,
        fat: 0.2,
        fiber: 2.4,
        health: 95,
        description: "A fiber-rich fruit containing vitamin C and antioxidants."
    },

    {
        name: "Banana",
        emoji: "🍌",
        category: "fruit",
        type: "healthy",
        calories: 89,
        protein: 1.1,
        sugar: 12.2,
        fat: 0.3,
        fiber: 2.6,
        health: 92,
        description: "A convenient fruit providing carbohydrates and potassium."
    },

    {
        name: "Orange",
        emoji: "🍊",
        category: "fruit",
        type: "healthy",
        calories: 47,
        protein: 0.9,
        sugar: 9.4,
        fat: 0.1,
        fiber: 2.4,
        health: 96,
        description: "A citrus fruit rich in vitamin C and water."
    },

    {
        name: "Mango",
        emoji: "🥭",
        category: "fruit",
        type: "healthy",
        calories: 60,
        protein: 0.8,
        sugar: 13.7,
        fat: 0.4,
        fiber: 1.6,
        health: 88,
        description: "A nutrient-rich tropical fruit."
    },

    {
        name: "Strawberries",
        emoji: "🍓",
        category: "fruit",
        type: "healthy",
        calories: 32,
        protein: 0.7,
        sugar: 4.9,
        fat: 0.3,
        fiber: 2,
        health: 97,
        description: "A low-calorie fruit containing vitamin C and antioxidants."
    },

    {
        name: "Watermelon",
        emoji: "🍉",
        category: "fruit",
        type: "healthy",
        calories: 30,
        protein: 0.6,
        sugar: 6.2,
        fat: 0.2,
        fiber: 0.4,
        health: 90,
        description: "A hydrating fruit with high water content."
    },

    {
        name: "Papaya",
        emoji: "🥭",
        category: "fruit",
        type: "healthy",
        calories: 43,
        protein: 0.5,
        sugar: 7.8,
        fat: 0.3,
        fiber: 1.7,
        health: 94,
        description: "A tropical fruit containing vitamin C and carotenoids."
    },

    {
        name: "Guava",
        emoji: "🍐",
        category: "fruit",
        type: "healthy",
        calories: 68,
        protein: 2.6,
        sugar: 8.9,
        fat: 1,
        fiber: 5.4,
        health: 98,
        description: "A fiber-rich fruit with substantial vitamin C."
    },

    {
        name: "Pomegranate",
        emoji: "❤️",
        category: "fruit",
        type: "healthy",
        calories: 83,
        protein: 1.7,
        sugar: 13.7,
        fat: 1.2,
        fiber: 4,
        health: 95,
        description: "A fruit containing polyphenol antioxidants."
    },

    {
        name: "Pineapple",
        emoji: "🍍",
        category: "fruit",
        type: "healthy",
        calories: 50,
        protein: 0.5,
        sugar: 9.9,
        fat: 0.1,
        fiber: 1.4,
        health: 91,
        description: "A tropical fruit containing vitamin C."
    },


    /* ================= VEGETABLES ================= */

    {
        name: "Broccoli",
        emoji: "🥦",
        category: "vegetable",
        type: "healthy",
        calories: 34,
        protein: 2.8,
        sugar: 1.7,
        fat: 0.4,
        fiber: 2.6,
        health: 99,
        description: "A nutrient-dense vegetable containing fiber and vitamin C."
    },

    {
        name: "Spinach",
        emoji: "🥬",
        category: "vegetable",
        type: "healthy",
        calories: 23,
        protein: 2.9,
        sugar: 0.4,
        fat: 0.4,
        fiber: 2.2,
        health: 99,
        description: "A leafy green vegetable rich in folate and vitamin K."
    },

    {
        name: "Carrot",
        emoji: "🥕",
        category: "vegetable",
        type: "healthy",
        calories: 41,
        protein: 0.9,
        sugar: 4.7,
        fat: 0.2,
        fiber: 2.8,
        health: 96,
        description: "A vegetable containing beta-carotene and fiber."
    },

    {
        name: "Tomato",
        emoji: "🍅",
        category: "vegetable",
        type: "healthy",
        calories: 18,
        protein: 0.9,
        sugar: 2.6,
        fat: 0.2,
        fiber: 1.2,
        health: 97,
        description: "A low-calorie vegetable containing vitamin C and lycopene."
    },

    {
        name: "Cucumber",
        emoji: "🥒",
        category: "vegetable",
        type: "healthy",
        calories: 15,
        protein: 0.7,
        sugar: 1.7,
        fat: 0.1,
        fiber: 0.5,
        health: 93,
        description: "A hydrating vegetable with high water content."
    },

    {
        name: "Sweet Potato",
        emoji: "🍠",
        category: "vegetable",
        type: "healthy",
        calories: 86,
        protein: 1.6,
        sugar: 4.2,
        fat: 0.1,
        fiber: 3,
        health: 95,
        description: "A nutrient-rich carbohydrate source containing beta-carotene."
    },

    {
        name: "Bell Pepper",
        emoji: "🫑",
        category: "vegetable",
        type: "healthy",
        calories: 31,
        protein: 1,
        sugar: 4.2,
        fat: 0.3,
        fiber: 2.1,
        health: 96,
        description: "A colorful vegetable containing vitamin C."
    },

    {
        name: "Cauliflower",
        emoji: "🥦",
        category: "vegetable",
        type: "healthy",
        calories: 25,
        protein: 1.9,
        sugar: 1.9,
        fat: 0.3,
        fiber: 2,
        health: 96,
        description: "A cruciferous vegetable containing fiber and vitamin C."
    },

    {
        name: "Green Peas",
        emoji: "🫛",
        category: "vegetable",
        type: "healthy",
        calories: 81,
        protein: 5.4,
        sugar: 5.7,
        fat: 0.4,
        fiber: 5.7,
        health: 94,
        description: "A plant food providing protein and fiber."
    },


    /* ================= HEALTHY MEALS ================= */

    {
        name: "Oatmeal",
        emoji: "🥣",
        category: "meal",
        type: "healthy",
        calories: 68,
        protein: 2.4,
        sugar: 0.5,
        fat: 1.4,
        fiber: 1.7,
        health: 96,
        description: "A whole-grain breakfast containing soluble fiber."
    },

    {
        name: "Brown Rice",
        emoji: "🍚",
        category: "meal",
        type: "healthy",
        calories: 123,
        protein: 2.7,
        sugar: 0.4,
        fat: 1,
        fiber: 1.6,
        health: 92,
        description: "A whole-grain rice option containing fiber."
    },

    {
        name: "Dal",
        emoji: "🍲",
        category: "meal",
        type: "healthy",
        calories: 116,
        protein: 9,
        sugar: 1.8,
        fat: 0.4,
        fiber: 7.9,
        health: 98,
        description: "A pulse-based food providing plant protein and fiber."
    },

    {
        name: "Grilled Chicken",
        emoji: "🍗",
        category: "meal",
        type: "healthy",
        calories: 165,
        protein: 31,
        sugar: 0,
        fat: 3.6,
        fiber: 0,
        health: 95,
        description: "A protein-rich food when prepared without excessive added fat."
    },

    {
        name: "Boiled Eggs",
        emoji: "🥚",
        category: "meal",
        type: "healthy",
        calories: 155,
        protein: 13,
        sugar: 1.1,
        fat: 11,
        fiber: 0,
        health: 93,
        description: "An accessible source of protein and several micronutrients."
    },

    {
        name: "Paneer",
        emoji: "🧀",
        category: "meal",
        type: "healthy",
        calories: 265,
        protein: 18,
        sugar: 2.6,
        fat: 20,
        fiber: 0,
        health: 87,
        description: "A protein-containing dairy food."
    },

    {
        name: "Greek Yogurt",
        emoji: "🥣",
        category: "meal",
        type: "healthy",
        calories: 59,
        protein: 10,
        sugar: 3.2,
        fat: 0.4,
        fiber: 0,
        health: 95,
        description: "A protein-rich dairy food."
    },

    {
        name: "Mixed Salad",
        emoji: "🥗",
        category: "meal",
        type: "healthy",
        calories: 50,
        protein: 2,
        sugar: 4,
        fat: 0.5,
        fiber: 3,
        health: 98,
        description: "A combination of vegetables providing fiber and micronutrients."
    },

    {
        name: "Almonds",
        emoji: "🌰",
        category: "snack",
        type: "healthy",
        calories: 579,
        protein: 21,
        sugar: 4.4,
        fat: 49.9,
        fiber: 12.5,
        health: 94,
        description: "Nuts containing protein, fiber and unsaturated fats."
    },

    {
        name: "Walnuts",
        emoji: "🌰",
        category: "snack",
        type: "healthy",
        calories: 654,
        protein: 15,
        sugar: 2.6,
        fat: 65,
        fiber: 6.7,
        health: 94,
        description: "Nuts containing fiber and unsaturated fats."
    },


    /* ================= JUNK FOODS ================= */

    {
        name: "French Fries",
        emoji: "🍟",
        category: "snack",
        type: "junk",
        calories: 312,
        protein: 3.4,
        sugar: 0.3,
        fat: 15,
        fiber: 3.8,
        health: 38,
        description: "Deep-fried potatoes that can be high in fat and sodium."
    },

    {
        name: "Cheeseburger",
        emoji: "🍔",
        category: "meal",
        type: "junk",
        calories: 295,
        protein: 17,
        sugar: 5,
        fat: 18,
        fiber: 1.2,
        health: 40,
        description: "A highly processed fast-food meal that can be high in sodium and saturated fat."
    },

    {
        name: "Pizza",
        emoji: "🍕",
        category: "meal",
        type: "junk",
        calories: 266,
        protein: 11,
        sugar: 3.6,
        fat: 10,
        fiber: 2.3,
        health: 55,
        description: "A convenient food whose nutrition varies greatly by crust and toppings."
    },

    {
        name: "Potato Chips",
        emoji: "🥔",
        category: "snack",
        type: "junk",
        calories: 536,
        protein: 7,
        sugar: 0.3,
        fat: 35,
        fiber: 4.8,
        health: 35,
        description: "A highly processed fried snack that can be high in sodium and fat."
    },

    {
        name: "Donut",
        emoji: "🍩",
        category: "snack",
        type: "junk",
        calories: 452,
        protein: 4.9,
        sugar: 25,
        fat: 25,
        fiber: 2,
        health: 30,
        description: "A sweet baked or fried food often high in added sugar and fat."
    },

    {
        name: "Chocolate Bar",
        emoji: "🍫",
        category: "snack",
        type: "junk",
        calories: 535,
        protein: 7.6,
        sugar: 48,
        fat: 30,
        fiber: 7,
        health: 40,
        description: "A calorie-dense sweet food that may contain substantial added sugar."
    },

    {
        name: "Ice Cream",
        emoji: "🍦",
        category: "snack",
        type: "junk",
        calories: 207,
        protein: 3.5,
        sugar: 21,
        fat: 11,
        fiber: 0,
        health: 45,
        description: "A dessert containing added sugar and saturated fat."
    },

    {
        name: "Fried Chicken",
        emoji: "🍗",
        category: "meal",
        type: "junk",
        calories: 246,
        protein: 18,
        sugar: 0,
        fat: 18,
        fiber: 0,
        health: 45,
        description: "Chicken coated and fried in oil."
    },

    {
        name: "Hot Dog",
        emoji: "🌭",
        category: "meal",
        type: "junk",
        calories: 290,
        protein: 10,
        sugar: 4,
        fat: 26,
        fiber: 1,
        health: 35,
        description: "A processed meat product that can be high in sodium."
    },

    {
        name: "Soda",
        emoji: "🥤",
        category: "snack",
        type: "junk",
        calories: 41,
        protein: 0,
        sugar: 10.6,
        fat: 0,
        fiber: 0,
        health: 25,
        description: "A sugary beverage providing calories mainly from added sugar."
    },

    {
        name: "Energy Drink",
        emoji: "⚡",
        category: "snack",
        type: "junk",
        calories: 45,
        protein: 0,
        sugar: 11,
        fat: 0,
        fiber: 0,
        health: 25,
        description: "A caffeinated beverage that may also contain substantial added sugar."
    },

    {
        name: "Cupcake",
        emoji: "🧁",
        category: "snack",
        type: "junk",
        calories: 305,
        protein: 3,
        sugar: 25,
        fat: 14,
        fiber: 1,
        health: 32,
        description: "A sweet baked product often high in added sugar."
    },

    {
        name: "Cookies",
        emoji: "🍪",
        category: "snack",
        type: "junk",
        calories: 488,
        protein: 6,
        sugar: 32,
        fat: 24,
        fiber: 2.4,
        health: 35,
        description: "A processed sweet snack often containing added sugar and fat."
    },

    {
        name: "Instant Noodles",
        emoji: "🍜",
        category: "meal",
        type: "junk",
        calories: 440,
        protein: 10,
        sugar: 2,
        fat: 17,
        fiber: 2,
        health: 40,
        description: "A convenient processed meal that can be high in sodium."
    },

    {
        name: "Nachos",
        emoji: "🧀",
        category: "snack",
        type: "junk",
        calories: 346,
        protein: 5,
        sugar: 1,
        fat: 19,
        fiber: 4,
        health: 38,
        description: "A processed snack commonly served with high-fat toppings."
    },

    {
        name: "Milkshake",
        emoji: "🥛",
        category: "snack",
        type: "junk",
        calories: 350,
        protein: 8,
        sugar: 45,
        fat: 12,
        fiber: 1,
        health: 35,
        description: "A sweet dairy-based drink that can contain substantial added sugar."
    },

    {
        name: "Candy",
        emoji: "🍬",
        category: "snack",
        type: "junk",
        calories: 390,
        protein: 0,
        sugar: 70,
        fat: 8,
        fiber: 0,
        health: 20,
        description: "A highly processed sweet food mainly providing added sugar."
    },

    {
        name: "Packaged Cake",
        emoji: "🍰",
        category: "snack",
        type: "junk",
        calories: 350,
        protein: 4,
        sugar: 35,
        fat: 18,
        fiber: 1,
        health: 28,
        description: "A processed dessert often high in added sugar and fat."
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const foodGrid =
    document.getElementById("foodGrid");

const searchInput =
    document.getElementById("search");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortFilter =
    document.getElementById("sortFilter");

const food1 =
    document.getElementById("food1");

const food2 =
    document.getElementById("food2");

const compareBtn =
    document.getElementById("compareBtn");

const comparisonResult =
    document.getElementById("comparisonResult");

const nutritionChart =
    document.getElementById("nutritionChart");

let chart;


/* =========================================
   STATISTICS
========================================= */

function updateStatistics() {

    const healthy =
        foods.filter(
            food => food.type === "healthy"
        ).length;

    const junk =
        foods.filter(
            food => food.type === "junk"
        ).length;

    const fruits =
        foods.filter(
            food => food.category === "fruit"
        ).length;


    document.getElementById(
        "healthyCount"
    ).textContent = healthy;


    document.getElementById(
        "junkCount"
    ).textContent = junk;


    document.getElementById(
        "fruitCount"
    ).textContent = fruits;

}


/* =========================================
   DISPLAY FOODS
========================================= */

function displayFoods(list = foods) {

    foodGrid.innerHTML = "";


    if (list.length === 0) {

        foodGrid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:50px;
            ">
                <h3>😕 No food found</h3>
                <p>Try another search.</p>
            </div>
        `;

        return;
    }


    list.forEach(food => {

        const card =
            document.createElement("div");

        card.className = "food-card";


        card.innerHTML = `

            <div class="food-emoji">
                ${food.emoji}
            </div>

            <span class="food-type ${food.type}">
                ${food.type === "healthy"
                    ? "✓ Healthy"
                    : "⚠ Junk"}
            </span>

            <h3>
                ${food.name}
            </h3>

            <p>
                ${food.description}
            </p>


            <div class="food-nutrition">

                <div class="nutrition-item">

                    <strong>
                        ${food.calories}
                    </strong>

                    kcal

                </div>


                <div class="nutrition-item">

                    <strong>
                        ${food.protein}g
                    </strong>

                    Protein

                </div>


                <div class="nutrition-item">

                    <strong>
                        ${food.sugar}g
                    </strong>

                    Sugar

                </div>


                <div class="nutrition-item">

                    <strong>
                        ${food.fiber}g
                    </strong>

                    Fiber

                </div>

            </div>

        `;


        foodGrid.appendChild(card);

    });

}


/* =========================================
   SEARCH + FILTER + SORT
========================================= */

function filterFoods() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();

    const category =
        categoryFilter.value;

    const sort =
        sortFilter.value;


    let filtered =
        foods.filter(food => {

            const matchesSearch =
                food.name
                    .toLowerCase()
                    .includes(search);


            let matchesCategory = true;


            if (category === "healthy") {

                matchesCategory =
                    food.type === "healthy";

            }

            else if (category === "junk") {

                matchesCategory =
                    food.type === "junk";

            }

            else if (category !== "all") {

                matchesCategory =
                    food.category === category;

            }


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    if (sort === "caloriesLow") {

        filtered.sort(
            (a, b) =>
                a.calories - b.calories
        );

    }

    else if (sort === "caloriesHigh") {

        filtered.sort(
            (a, b) =>
                b.calories - a.calories
        );

    }

    else if (sort === "proteinHigh") {

        filtered.sort(
            (a, b) =>
                b.protein - a.protein
        );

    }

    else if (sort === "sugarLow") {

        filtered.sort(
            (a, b) =>
                a.sugar - b.sugar
        );

    }


    displayFoods(filtered);

}


/* =========================================
   COMPARISON DROPDOWNS
========================================= */

function populateFoodSelects() {

    food1.innerHTML = "";
    food2.innerHTML = "";


    foods.forEach(
        (food, index) => {

            const option1 =
                document.createElement("option");

            option1.value = index;

            option1.textContent =
                `${food.emoji} ${food.name}`;


            const option2 =
                document.createElement("option");

            option2.value = index;

            option2.textContent =
                `${food.emoji} ${food.name}`;


            food1.appendChild(option1);

            food2.appendChild(option2);

        }
    );


    food2.value = 1;

}


/* =========================================
   COMPARISON
========================================= */

function compareFoods() {

    const first =
        foods[food1.value];

    const second =
        foods[food2.value];


    comparisonResult.innerHTML = `

        ${createResultCard(first)}

        ${createResultCard(second)}

    `;


    createChart(
        first,
        second
    );

}


function createResultCard(food) {

    return `

        <div class="result-card">

            <div class="big-emoji">
                ${food.emoji}
            </div>

            <h2>
                ${food.name}
            </h2>

            <span class="food-type ${food.type}">
                ${food.type === "healthy"
                    ? "✓ Healthy"
                    : "⚠ Junk"}
            </span>


            ${createMetric(
                "Calories",
                food.calories,
                600,
                "kcal"
            )}


            ${createMetric(
                "Protein",
                food.protein,
                35,
                "g"
            )}


            ${createMetric(
                "Sugar",
                food.sugar,
                70,
                "g"
            )}


            ${createMetric(
                "Fat",
                food.fat,
                70,
                "g"
            )}


            ${createMetric(
                "Fiber",
                food.fiber,
                15,
                "g"
            )}

        </div>

    `;

}


function createMetric(
    title,
    value,
    max,
    unit
) {

    const percentage =
        Math.min(
            (value / max) * 100,
            100
        );


    return `

        <div class="metric">

            <div class="metric-title">

                <span>
                    ${title}
                </span>

                <strong>
                    ${value}${unit}
                </strong>

            </div>

            <div class="progress">

                <div
                    class="progress-fill"
                    style="width:${percentage}%">
                </div>

            </div>

        </div>

    `;

}


/* =========================================
   CHART
========================================= */

function createChart(first, second) {

    if (chart) {

        chart.destroy();

    }


    chart =
        new Chart(
            nutritionChart,
            {

                type: "bar",

                data: {

                    labels: [
                        "Calories",
                        "Protein",
                        "Sugar",
                        "Fat",
                        "Fiber"
                    ],

                    datasets: [

                        {
                            label: first.name,

                            data: [
                                first.calories,
                                first.protein,
                                first.sugar,
                                first.fat,
                                first.fiber
                            ]
                        },


                        {
                            label: second.name,

                            data: [
                                second.calories,
                                second.protein,
                                second.sugar,
                                second.fat,
                                second.fiber
                            ]
                        }

                    ]

                },

                options: {

                    responsive: true,

                    plugins: {

                        title: {

                            display: true,

                            text:
                                "Nutrition Comparison"

                        }

                    }

                }

            }
        );

}


/* =========================================
   PERSONALIZED DIET PLANNER
========================================= */

function generateDietPlan() {
    const weight = Number(document.getElementById("userWeight").value);
    const height = Number(document.getElementById("userHeight").value);
    const age = Number(document.getElementById("userAge").value);
    const gender = document.getElementById("userGender").value;
    const activity = document.getElementById("activityLevel").value;
    const goal = document.getElementById("dietGoal").value;
    const preference = document.getElementById("foodPreference").value;
    const budgetInput = document.getElementById("dailyBudget").value.trim();
    const dailyBudget = budgetInput === "" ? null : Number(budgetInput);
    const result = document.getElementById("dietResult");

    if (!weight || !height || !age || weight <= 0 || height <= 0 || age <= 0) {
        result.innerHTML = `<div class="empty-planner"><span>⚠️</span><h3>Please enter valid details</h3><p>Enter a positive weight, height and age to continue.</p></div>`;
        return;
    }
    if (weight < 20 || weight > 300 || height < 100 || height > 250 || age > 100 || (dailyBudget !== null && (!Number.isFinite(dailyBudget) || dailyBudget < 50 || dailyBudget > 3000))) {
        result.innerHTML = `<div class="empty-planner"><span>⚠️</span><h3>Please check your details</h3><p>Use weight 20–300 kg, height 100–250 cm, age up to 100 years, and if entering a budget, use ₹50–₹3,000 per day.</p></div>`;
        return;
    }

    const bmi = weight / Math.pow(height / 100, 2);
    const isAdult = age >= 18;
    let bmiKey, bmiLabel, statusClass, advice, needs, portionTip;

    // Adult BMI screening categories. BMI is not a diagnosis.
    if (bmi < 18.5) {
        bmiKey = "under";
        bmiLabel = '"Underweight" — below the usual healthy range';
        statusClass = "bmi-under";
        advice = "Your BMI is below the usual adult range. If this is accurate, you may need more energy overall and protein-containing foods at regular meals. If your weight is dropping without trying, talk to a healthcare professional.";
        needs = "Energy-dense nutritious foods + protein at each main meal";
        portionTip = "Avoid skipping meals. Add food gradually: an extra snack, milk/curd or fortified soy drink, nuts/seeds, peanut butter, pulses, tofu/paneer, eggs or fish/chicken as suitable. Your exact needs depend on age, activity and health.";
    } else if (bmi < 25) {
        bmiKey = "normal";
        bmiLabel = '"Normal / Healthy BMI range" — generally within the usual adult range';
        statusClass = "bmi-healthy";
        advice = "Your BMI is within the usual adult range. Aim to maintain a varied eating pattern with vegetables, fruit, whole grains and protein foods, with portions that match hunger and activity.";
        needs = "Balanced meals + enough protein and fibre";
        portionTip = "A simple guide is vegetables/fruit, a protein food and whole grains across meals. Adjust portions to hunger, activity and personal needs.";
    } else if (bmi < 30) {
        bmiKey = "over";
        bmiLabel = '"Overweight range" — above the usual healthy range';
        statusClass = "bmi-over";
        advice = "Your BMI is above the usual adult range. If weight management is your goal, focus on sustainable habits rather than crash diets: balanced portions, protein, vegetables, fibre and regular activity.";
        needs = "Filling balanced meals + protein and fibre";
        portionTip = "Include vegetables with meals, a protein source and a moderate grain portion. Prefer water or unsweetened drinks and adjust portions gradually; do not skip meals.";
    } else {
        bmiKey = "obesity";
        bmiLabel = '"Obesity range" — substantially above the usual healthy range';
        statusClass = "bmi-obesity";
        advice = "Your BMI is in the adult obesity screening range. BMI alone cannot assess your health; consider a clinician or registered dietitian for individualized advice, especially if you have health conditions or take medication.";
        needs = "Sustainable balanced meals + individualized guidance";
        portionTip = "Build meals around vegetables, protein foods and whole grains, and choose mostly water or unsweetened drinks. Avoid severe restriction; a clinician can help tailor portions safely.";
    }

    // Adult-only rough energy estimate; not a prescription or suitable for under-18s.
    const bmr = gender === "male"
        ? (10 * weight) + (6.25 * height) - (5 * age) + 5
        : (10 * weight) + (6.25 * height) - (5 * age) - 161;
    const activityMultiplier = { low: 1.2, moderate: 1.55, high: 1.725 }[activity] || 1.2;
    let calories = Math.round(bmr * activityMultiplier);
    if (goal === "loss") calories -= 250;
    if (goal === "gain") calories += 250;
    // Avoid displaying a misleading calorie target for minors.
    calories = Math.max(1200, calories);

    const goalText = { maintain: "Maintain weight", loss: "Gradual weight-management focus", gain: "Gradual weight-gain focus" }[goal];

    // Meals are differentiated by BMI screening group, food preference and budget.
    const plans = {
      vegetarian: {
        under: {
          low: ["Milk/fortified soy milk oats with banana and peanuts", "Rice/roti with dal, soy-chunk curry and seasonal sabzi", "Banana with roasted chana or peanut chikki", "Khichdi with extra dal, curd and a little oil/ghee if suitable"],
          mid: ["Oats in milk, banana and nuts; or besan chilla with curd", "Roti/rice, dal, paneer or soy chunks, sabzi and curd", "Fruit smoothie with milk/fortified soy drink, or yogurt and nuts", "Roti/rice with rajma/chole, tofu/paneer and vegetables"],
          high: ["Oats with milk, banana, nuts and seeds", "Whole grains, dal, paneer/tofu, vegetables and curd", "Greek yogurt/curd with fruit and nuts", "Tofu/paneer or beans with rice/roti and vegetables"]
        },
        normal: {
          low: ["Vegetable poha/upma with peanuts and seasonal fruit", "Roti/rice, dal or chana, seasonal sabzi", "Seasonal fruit or roasted chana", "Vegetable khichdi with dal and curd"],
          mid: ["Besan chilla with curd and fruit", "Roti/rice, dal/rajma/chole, sabzi and curd", "Fruit with roasted chana or plain yogurt", "Roti with dal or paneer/tofu and mixed vegetables"],
          high: ["Oats with milk/fortified soy drink, fruit and seeds", "Whole grains, dal, paneer/tofu, vegetables and curd", "Fruit, yogurt and a small handful of nuts", "Tofu/paneer or mixed beans, vegetables and whole grains"]
        },
        over: {
          low: ["Vegetable poha or besan chilla; unsweetened tea", "Dal, seasonal sabzi and a measured rice/roti portion", "One seasonal fruit or roasted chana", "Vegetable-rich dal/khichdi with curd"],
          mid: ["Besan chilla with vegetables and plain curd", "Half plate vegetables, dal/chole/tofu and a moderate roti/rice portion", "Fruit, plain curd or roasted chana", "Paneer/tofu/dal with sabzi and a moderate whole-grain portion"],
          high: ["Unsweetened oats with fruit and yogurt", "Large vegetable portion, beans/dal/tofu and whole grains", "Plain yogurt or fruit with a small portion of nuts", "Tofu/paneer or dal, vegetables and whole grains"]
        },
        obesity: {
          low: ["Vegetable besan chilla", "Dal, seasonal vegetables and a measured roti/rice portion", "One fruit or plain curd", "Vegetable dal/khichdi with extra vegetables"],
          mid: ["Besan chilla with vegetables and plain curd", "Half plate vegetables, dal/beans/tofu and a measured grain portion", "Fruit or plain yogurt", "Dal/tofu/paneer with sabzi and a moderate grain portion"],
          high: ["Oats with plain yogurt and fruit", "Vegetables, beans/tofu and whole grains", "Fruit or plain yogurt", "Vegetable-rich dal/tofu with a moderate whole-grain portion"]
        }
      },
      nonvegetarian: {
        under: {
          low: ["Egg bhurji with roti and banana; milk if suitable", "Rice/roti, egg curry or chicken when affordable, dal and sabzi", "Milk/fortified soy smoothie or curd with peanuts", "Egg/chicken curry with rice/roti and vegetables"],
          mid: ["Eggs with whole-grain toast/roti, milk and banana", "Rice/roti, chicken/fish or eggs, dal, vegetables and curd", "Yogurt with nuts or a fruit smoothie", "Chicken/fish/eggs, dal, vegetables and rice/roti"],
          high: ["Eggs, whole-grain toast/roti, milk and fruit", "Grilled chicken/fish, grains, vegetables and curd", "Yogurt, fruit and nuts", "Fish/chicken/eggs, vegetables and whole grains"]
        },
        normal: {
          low: ["Eggs with roti or vegetable poha", "Dal, seasonal sabzi and rice/roti; egg if budget allows", "Seasonal fruit or roasted chana", "Egg curry or dal with vegetables and roti/rice"],
          mid: ["Egg bhurji with roti and fruit", "Roti/rice, chicken or eggs, dal and vegetables", "Fruit with curd or roasted chana", "Chicken/egg curry or fish when affordable, vegetables and grains"],
          high: ["Eggs with whole-grain toast and fruit", "Grilled chicken/fish, whole grains and vegetables", "Plain yogurt, fruit or nuts", "Fish/chicken/eggs, vegetables and whole grains"]
        },
        over: {
          low: ["Boiled eggs with fruit or vegetable poha", "Dal, vegetables and a measured rice/roti portion; egg if desired", "Fruit or plain curd", "Egg curry or dal with vegetables and a moderate grain portion"],
          mid: ["Boiled eggs or vegetable omelette with fruit", "Half plate vegetables, grilled chicken/egg or dal, and a moderate grain portion", "Fruit, plain curd or a boiled egg", "Grilled/baked chicken or fish, vegetables and a moderate roti portion"],
          high: ["Vegetable omelette with whole-grain toast", "Grilled chicken/fish or pulses, vegetables and whole grains", "Plain yogurt or fruit", "Baked fish/chicken or dal, vegetables and a moderate grain portion"]
        },
        obesity: {
          low: ["Boiled eggs or besan chilla with vegetables", "Dal, seasonal vegetables and a measured rice/roti portion", "Fruit or plain curd", "Egg curry or dal with vegetables and a moderate grain portion"],
          mid: ["Vegetable omelette and fruit", "Half plate vegetables, chicken/fish or pulses, and a measured grain portion", "Fruit, plain yogurt or a boiled egg", "Grilled/baked chicken or fish, vegetables and a moderate grain portion"],
          high: ["Eggs with vegetables and whole-grain toast", "Grilled chicken/fish or beans, vegetables and whole grains", "Plain yogurt or fruit", "Fish/chicken or dal, vegetables and a moderate whole-grain portion"]
        }
      }
    };

    const budgetInfo = {
      low: { label: "Economy", note: "Focus on seasonal produce, dal, chickpeas, soy chunks, eggs if included, rice/roti and homemade meals." },
      mid: { label: "Balanced", note: "Combine grains, pulses, seasonal vegetables, fruit, curd and affordable protein foods." },
      high: { label: "Flexible", note: "Allows more variety such as nuts, paneer/tofu, more fruit, fish or lean chicken, depending on local prices." }
    };
    const selectedBudgetKey = dailyBudget === null ? null : dailyBudget < 150 ? "low" : dailyBudget < 300 ? "mid" : "high";
    const budgetKeysToShow = selectedBudgetKey ? [selectedBudgetKey] : ["low", "mid", "high"];
    const budgetTier = selectedBudgetKey ? budgetInfo[selectedBudgetKey].label : "All budget options";
    const budgetPlanHtml = budgetKeysToShow.map(key => {
      const meals = plans[preference][bmiKey][key];
      const info = budgetInfo[key];
      return `<div class="budget-plan-block"><h4>💰 ${info.label} plan${dailyBudget !== null ? ` · your budget: ₹${dailyBudget}/day` : ""}</h4>
        <div class="meal"><h4>🌅 Breakfast</h4><p>${meals[0]}</p></div>
        <div class="meal"><h4>🍱 Lunch</h4><p>${meals[1]}</p></div>
        <div class="meal"><h4>🍎 Evening snack</h4><p>${meals[2]}</p></div>
        <div class="meal"><h4>🌙 Dinner</h4><p>${meals[3]}</p></div>
        <p class="field-help">${info.note}</p>
      </div>`;
    }).join("");
    const budgetSummary = dailyBudget === null
      ? "No budget selected: compare all three budget styles below."
      : `Budget entered: ₹${dailyBudget}/day. The ${budgetTier.toLowerCase()} plan is shown; food prices vary by location and season.`;

    // Height and weight affect BMI and are shown in the plan; portions must also consider activity and hunger.
    const bodyNote = bmiKey === "under"
      ? "Priority: if underweight is confirmed, increase energy intake gradually and include protein foods at meals. Budget-friendly options include dal, soy chunks, milk/curd, peanuts, chickpeas and eggs if included."
      : bmiKey === "normal"
        ? "Priority: maintain balanced variety and adjust portions to activity and hunger."
        : "Priority: choose filling meals with vegetables, fibre and protein, and make gradual changes rather than crash dieting.";

    const proteinOptions = preference === "vegetarian"
      ? "Dal, chickpeas, rajma, soy chunks/tofu, paneer, milk/curd, peanuts, nuts and seeds"
      : "Eggs, chicken, fish, dal, beans, milk/curd, peanuts, nuts and seeds";

    const ageNote = !isAdult
      ? `<div class="replacement-reason"><strong>Age note</strong><p>For people under 18, adult BMI cut-offs and adult calorie equations should not be used to classify weight or set calorie goals. This is only general food inspiration; ask a healthcare professional for age-appropriate guidance.</p></div>`
      : "";
    const displayCategory = isAdult ? bmiLabel : '"Age-specific BMI category needed" — adult ranges do not apply';
    const displayAdvice = isAdult ? advice : "For children and teenagers, BMI is interpreted using age- and sex-specific growth charts. Focus on regular balanced meals and seek age-appropriate guidance.";

    result.innerHTML = `
      <div class="plan-header"><h3>🥗 Your Personalized Food Guide</h3><p>${goalText} · ${preference === "vegetarian" ? "Vegetarian" : "Non-vegetarian"} · ${budgetTier}</p></div>
      <div class="plan-stats">
        <div class="plan-stat"><strong>${weight} kg</strong>Weight</div>
        <div class="plan-stat"><strong>${height} cm</strong>Height</div>
        <div class="plan-stat"><strong>${bmi.toFixed(1)}</strong>BMI estimate</div>
        <div class="plan-stat"><strong>${isAdult ? bmiKey === "normal" ? "Normal / Healthy" : bmiKey === "under" ? "Underweight" : bmiKey === "over" ? "Overweight" : "Obesity range" : "Age-specific review"}</strong>BMI category</div>
        <div class="plan-stat"><strong>${isAdult ? calories.toLocaleString("en-IN") : "Not estimated"}</strong>Rough kcal/day estimate</div>
        <div class="plan-stat"><strong>${activity === "low" ? "Low" : activity === "moderate" ? "Moderate" : "High"}</strong>Activity</div>
        <div class="plan-stat"><strong>${dailyBudget === null ? "Not set" : `₹${dailyBudget}`}</strong>Daily budget</div>
        <div class="plan-stat"><strong>${budgetTier}</strong>Budget option</div>
      </div>
      <div class="replacement-reason ${isAdult ? statusClass : ""}"><strong>📊 BMI result: ${displayCategory}</strong><p>${displayAdvice}</p><p><strong>What your body may need:</strong> ${needs}</p></div>
      <div class="meal-plan">
        <div class="meal"><h4>💪 Protein choices</h4><p>${proteinOptions}</p></div>
        <div class="meal"><h4>🍽️ Portion guidance</h4><p>${portionTip} ${bodyNote}</p></div>
        <div class="meal"><h4>💰 Budget guidance</h4><p>${budgetSummary} These are example food suggestions, not live price calculations. Local prices, portion sizes and seasonal availability vary, so costs are not guaranteed.</p></div>
        ${budgetPlanHtml}
      </div>
      <div class="replacement-reason"><strong>💡 Important</strong><p>BMI is a screening tool, not a diagnosis. A BMI below or above the usual range does not by itself determine your exact calorie or protein requirement. This sample plan is not medical advice; consult a registered dietitian or healthcare professional for individualized portions, especially if weight change is unexplained or you have a medical condition.</p></div>
      ${ageNote}`;
}

/* =========================================
   JUNK FOOD REPLACEMENTS
========================================= */

const foodReplacements = {

    "French Fries": {

        junkEmoji: "🍟",

        healthy:
            "Oven-Baked Potato Wedges",

        healthyEmoji: "🥔",

        reason:
            "Baking can reduce the amount of oil used compared with deep frying while keeping the familiar potato base."

    },


    "Pizza": {

        junkEmoji: "🍕",

        healthy:
            "Vegetable Whole-Wheat Pizza",

        healthyEmoji: "🥦",

        reason:
            "A whole-wheat base with vegetables and controlled cheese portions can provide more fiber and vegetables."

    },


    "Cheeseburger": {

        junkEmoji: "🍔",

        healthy:
            "Grilled Chicken or Paneer Wrap",

        healthyEmoji: "🌯",

        reason:
            "A grilled protein source with vegetables and a whole-grain wrap can provide protein and fiber."

    },


    "Potato Chips": {

        junkEmoji: "🥔",

        healthy:
            "Roasted Chickpeas",

        healthyEmoji: "🫘",

        reason:
            "Roasted chickpeas provide plant protein and fiber and can be used as a crunchy snack."

    },


    "Donut": {

        junkEmoji: "🍩",

        healthy:
            "Banana + Greek Yogurt",

        healthyEmoji: "🍌",

        reason:
            "Fruit and yogurt provide nutrients and protein while offering a naturally sweet snack."

    },


    "Chocolate Bar": {

        junkEmoji: "🍫",

        healthy:
            "Fruit + Small Portion of Dark Chocolate",

        healthyEmoji: "🍓",

        reason:
            "Combining fruit with a small portion of chocolate can add fruit to a sweet snack."

    },


    "Ice Cream": {

        junkEmoji: "🍦",

        healthy:
            "Greek Yogurt + Fresh Fruit",

        healthyEmoji: "🥣",

        reason:
            "Greek yogurt with fruit provides protein and fruit while maintaining a creamy dessert-style option."

    },


    "Fried Chicken": {

        junkEmoji: "🍗",

        healthy:
            "Grilled Chicken",

        healthyEmoji: "🍗",

        reason:
            "Grilling avoids the deep-frying step while retaining chicken as a protein source."

    },


    "Soda": {

        junkEmoji: "🥤",

        healthy:
            "Water + Lemon",

        healthyEmoji: "💧",

        reason:
            "Water or another unsweetened beverage can reduce added-sugar intake compared with regular soda."

    },


    "Instant Noodles": {

        junkEmoji: "🍜",

        healthy:
            "Vegetable Noodles + Egg",

        healthyEmoji: "🥦",

        reason:
            "Adding vegetables and a protein source can make a noodle meal more balanced."

    },


    "Cookies": {

        junkEmoji: "🍪",

        healthy:
            "Apple + Peanut Butter",

        healthyEmoji: "🍎",

        reason:
            "Fruit paired with a protein/fat source can make a more filling snack."

    },


    "Milkshake": {

        junkEmoji: "🥛",

        healthy:
            "Fruit + Greek Yogurt Smoothie",

        healthyEmoji: "🍓",

        reason:
            "A homemade smoothie lets you control added sugar while using fruit and yogurt."

    }

};


function suggestReplacement() {

    const selectedFood =
        document.getElementById(
            "junkFoodSelect"
        ).value;


    const result =
        document.getElementById(
            "replacementResult"
        );


    if (!selectedFood) {

        result.innerHTML = `

            <div class="replacement-card">

                <h3 style="text-align:center;">
                    ⚠️ Select a junk food first
                </h3>

            </div>

        `;

        return;

    }


    const replacement =
        foodReplacements[
            selectedFood
        ];


    result.innerHTML = `

        <div class="replacement-card">

            <h2 style="text-align:center;">
                🔄 Smart Food Swap
            </h2>


            <div class="replacement-grid">


                <div class="food-replace junk-option">

                    <div class="emoji">

                        ${replacement.junkEmoji}

                    </div>

                    <h3>
                        ${selectedFood}
                    </h3>

                    <p>
                        Current choice
                    </p>

                </div>


                <div class="arrow">

                    ➡️

                </div>


                <div class="food-replace healthy-option">

                    <div class="emoji">

                        ${replacement.healthyEmoji}

                    </div>

                    <h3>

                        ${replacement.healthy}

                    </h3>

                    <p>
                        Suggested alternative
                    </p>

                </div>

            </div>


            <div class="replacement-reason">

                <strong>
                    💡 Why consider this swap?
                </strong>

                <p>
                    ${replacement.reason}
                </p>

            </div>

        </div>

    `;

}


/* =========================================
   DARK MODE
========================================= */

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        if (
            document.body.classList.contains(
                "dark"
            )
        ) {

            themeBtn.textContent =
                "☀️";

        }

        else {

            themeBtn.textContent =
                "🌙";

        }

    }
);


/* =========================================
   EVENT LISTENERS
========================================= */

searchInput.addEventListener(
    "input",
    filterFoods
);


categoryFilter.addEventListener(
    "change",
    filterFoods
);


sortFilter.addEventListener(
    "change",
    filterFoods
);


compareBtn.addEventListener(
    "click",
    compareFoods
);


/* =========================================
   INITIALIZE WEBSITE
========================================= */

updateStatistics();

displayFoods();

populateFoodSelects();


// Automatically compare first two foods
compareFoods();
