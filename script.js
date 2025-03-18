const plants = [
    { name: "מונסטרה", water: "💧💧", difficulty: "בינוני", image: "monstera.jpg" },
    { name: "אנטוריום", water: "💧💧💧", difficulty: "בינוני", image: "anthurium.jpg" },
    { name: "פוטוס", water: "💧💧", difficulty: "קל", image: "pothos.jpg" }
];

const catalog = document.getElementById("plant-catalog");

plants.forEach(plant => {
    const plantCard = document.createElement("div");
    plantCard.className = "plant-card";
    plantCard.innerHTML = `<img src="${plant.image}" alt="${plant.name}"><h2>${plant.name}</h2><p>השקיה: ${plant.water}</p><p>רמת קושי: ${plant.difficulty}</p>`;
    catalog.appendChild(plantCard);
});
