const plants = [
    { name: "מונסטרה", water: "💧💧", difficulty: "בינוני", image: "https://images.unsplash.com/photo-1573484290179-bwsTJMnhcwE" },
    { name: "אנטוריום", water: "💧💧💧", difficulty: "בינוני", image: "https://images.unsplash.com/photo-1615274437485-jxf1k1TS07s" },
    { name: "פוטוס", water: "💧💧", difficulty: "קל", image: "https://images.unsplash.com/photo-1603006627111-AY7CqB-ljcA" }
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
