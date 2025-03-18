// דוגמת מערך הצמחים
const plants = [
    { name: "מונסטרה", water: 2, difficulty: 2, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "אנטוריום", water: 3, difficulty: 3, image: "https://images.unsplash.com/photo-1607334386016-091a546f457d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "פוטוס", water: 1, difficulty: 1, image: "https://images.unsplash.com/photo-1605966706128-927ad2c9e2c8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

// פונקציה לחישוב והצגת רמת השקייה
function createWaterDrops(level) {
    const container = document.createElement("div");
    container.classList.add("watering-level");

    for (let i = 1; i <= 3; i++) {
        const drop = document.createElement("div");
        drop.classList.add("drop");

        if (level < i) {
            drop.classList.add("empty");
        } else {
            drop.classList.add("full");
        }

        container.appendChild(drop);
    }

    return container;
}

// פונקציה לחישוב והצגת מד הקושי
function createDifficultyDrops(level) {
    const container = document.createElement("div");
    container.classList.add("difficulty-level");

    for (let i = 1; i <= 3; i++) {
        const difficulty = document.createElement("div");
        difficulty.classList.add("difficulty");

        if (level < i) {
            difficulty.classList.add("empty");
        } else {
            difficulty.classList.add("full");
        }

        container.appendChild(difficulty);
    }

    return container;
}

// יצירת כרטיסי הצמחים
const catalog = document.getElementById("plant-catalog");

plants.forEach(plant => {
    const plantCard = document.createElement("div");
    plantCard.className = "plant-card";

    // הוספת תוכן לכרטיס הצמח
    plantCard.innerHTML = `
        <img src="${plant.image}" alt="${plant.name}">
        <h2>${plant.name}</h2>
        <p>השקיה:</p>
    `;

    // הוספת רמות השקייה לכרטיס הצמח
    const wateringDrops = createWaterDrops(plant.water);
    plantCard.appendChild(wateringDrops);

    // הוספת מד הקושי
    const difficultyDrops = createDifficultyDrops(plant.difficulty);
    plantCard.appendChild(difficultyDrops);

    plantCard.innerHTML += `
        <p>רמת קושי: ${plant.difficulty}</p>
    `;

    catalog.appendChild(plantCard);
});

// הוספת Footer עם קישורים לאינסטגרם וטיק טוק
const footer = document.createElement("footer");
footer.innerHTML = `
    <p>עקוב אחרינו ב:</p>
    <a href="https://www.instagram.com/beitanica" target="_blank">Instagram</a> | 
    <a href="https://www.tiktok.com/@beitanica" target="_blank">TikTok</a>
`;

document.body.appendChild(footer);
