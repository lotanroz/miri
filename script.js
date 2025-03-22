// Create a function to create the frame for each image
function createPlantFrame(imageSrc) {
    const plantCard = document.createElement("div");
    plantCard.className = "plant-card";

    // Create the image element and set the source
    const plantImage = document.createElement("img");
    plantImage.src = imageSrc;
    plantImage.alt = "Plant Image";
    plantCard.appendChild(plantImage);

    return plantCard;
}

// Array of plant images from GitHub (replace with your actual raw GitHub URLs)
const plants = [];
for (let i = 2; i <= 131; i++) {
    plants.push({
        image: `https://github.com/lotanroz/miri/blob/fac1806962db7c1cbfb7d4584e62c08a6c9dd328/images/${i}.png?raw=true`
    });
}

// Get the catalog container where all plant frames will be added
const catalog = document.getElementById("plant-catalog");

// Loop through the array of plants and create a frame for each
plants.forEach(plant => {
    const plantFrame = createPlantFrame(plant.image);
    catalog.appendChild(plantFrame);
});
