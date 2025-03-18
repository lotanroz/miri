const plants = [
    { name: "מונסטרה", water: "💧💧", difficulty: "בינוני", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "אנטוריום", water: "💧💧💧", difficulty: "בינוני", image: "https://images.unsplash.com/photo-1607334386016-091a546f457d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "פוטוס", water: "💧💧", difficulty: "קל", image: "https://images.unsplash.com/photo-1605966706128-927ad2c9e2c8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const catalog = document.getElementById("plant-catalog");

const difficultyLevels = {
    "קל": 33,
    "בינוני": 66,
    "קשה": 100
};

plants.forEach(plant => {
    const plantCard = document.createElement("div");
    plantCard.className = "plant-card";
    
    // Create difficulty bar
    const difficultyBar = document.createElement("div");
    difficultyBar.className = "difficulty-bar";
    
    const barSpan = document.createElement("span");
    barSpan.style.width = `${difficultyLevels[plant.difficulty]}%`;
    barSpan.style.backgroundColor = plant.difficulty === "קל" ? "#4caf50" : (plant.difficulty === "בינוני" ? "#ffeb3b" : "#f44336");

    difficultyBar.appendChild(barSpan);

    // Add the plant details
    plantCard.innerHTML = `<img src="${plant.image}" alt="${plant.name}">
                           <h2>${plant.name}</h2>
                           <p>השקיה: ${plant.water}</p>
                           <p>רמת קושי: ${plant.difficulty}</p>`;
    
    plantCard.appendChild(difficultyBar);
    catalog.appendChild(plantCard);
});
