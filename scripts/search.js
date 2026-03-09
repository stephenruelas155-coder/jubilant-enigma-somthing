const searchBox = document.getElementById("searchBox");
const carGrid = document.getElementById("carGrid");

let carData = [];

fetch("assets/cars.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load car data");
    }
    return response.json();
  })
  .then(data => {

    carData = data;

    console.log("Car Data:", carData);

    renderCars(carData);

  });


function renderCars(cars){

  carGrid.innerHTML = "";

  cars.forEach(car => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
      <img src="${car.image}" alt="${car.name}">

      <div class="card-body">

        <h3>${car.name}</h3>

        <p class="price">$${car.price}/day</p>

        <p class="type">${car.type}</p>

      </div>
    `;

    carGrid.appendChild(card);

  });

}


function handleSearch(){

  const query = searchBox.value.trim().toLowerCase();

  if(!query){
    renderCars(carData);
    return;
  }

  const results = carData.filter(car => {

    const values = Object.values(car);

    return values.some(value =>
      String(value).toLowerCase().includes(query)
    );

  });

  renderCars(results);

}

searchBox.addEventListener("input", handleSearch);
