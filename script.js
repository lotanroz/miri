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
    `;

    // הוספת רמות השקייה
    const wateringDrops = createWaterDrops(plant.water);

    // הוספת רמות הקושי
    const difficultyDrops = createDifficultyDrops(plant.difficulty);

    // יצירת שורה עם השקיה ורמת קושי
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");
    
    const wateringLabel = document.createElement("p");
    wateringLabel.innerText = ":השקיה";
    detailsContainer.appendChild(wateringLabel);
    detailsContainer.appendChild(wateringDrops);
    
    const difficultyLabel = document.createElement("p");
    difficultyLabel.innerText = ":רמת קושי לגידול";
    detailsContainer.appendChild(difficultyLabel);
    detailsContainer.appendChild(difficultyDrops);

    plantCard.appendChild(detailsContainer);
    catalog.appendChild(plantCard);
});
