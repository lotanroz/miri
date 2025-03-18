// דוגמת מערך הצמחים
const plants = [
    { name: "מונסטרה", water: 2, difficulty: "בינוני", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "אנטוריום", water: 3, difficulty: "בינוני", image: "https://images.unsplash.com/photo-1607334386016-091a546f457d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "פוטוס", water: 1, difficulty: "קל", image: "https://images.unsplash.com/photo-1605966706128-927ad2c9e2c8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

// פונקציה לחישוב והצגת רמת השקייה
function createWaterDrops(level) {
    const container = document.getElementById("watering-level");
    container.innerHTML = ""; // ננקה את התצוגה הקודמת
    
    for (let i = 1; i <= 3; i++) {
        const drop = document.createElement("div");
        drop.classList.add("drop");

        // אם הרמה נמוכה יותר או שווה ל-i, נעשה טיפה ריקה
        if (level < i) {
            drop.classList.add("empty");
        } else {
            drop.classList.add("full");
        }

        container.appendChild(drop);
    }
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
        <div id="watering-level"></div> <!-- הצגת רמת השקייה כאן -->
        <p>רמת קושי: ${plant.difficulty}</p>
    `;

    // יצירת רמות השקייה לכל צמח
    createWaterDrops(plant.water);

    catalog.appendChild(plantCard);
});
