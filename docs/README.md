# Car Rental
> Steve's Car Rental
A car rental website that searches by car name or car type

Author
Stephen Ruelas

Authorship/Inspirations
Barry Cumbie login/search/sesseion[https://github.com/barrycumbie/bearbot/]
Person Icon (https://icons.getbootstrap.com/icons/person/)
Inter font (https://fonts.google.com/selection)
github Icon (https://icons.getbootstrap.com/icons/github/)
copiolit 

tagline
We really know you need wheels

## User Story

As a Bussiness person
I want to easily find transportation 
so that when I travel for work I can access a vehical in a new location


Instpriation 
https://github.com/stephenruelas155-coder/jubilant-enigma-somthing/issues/1

Repo
https://github.com/stephenruelas155-coder/jubilant-enigma-somthing

deployed app
https://stephenruelas155-coder.github.io/jubilant-enigma-somthing/index.html

## code block explantion
This is how search displays the right cards

from `index.html` This is where the car cards and the searchbox are created

```html 
    <input id="searchBox" class="form-control w-50" type="search" placeholder="Search cars">

     <div id="carGrid" class="car-grid">
    </div>
```

from `scripts/search.js` This searches through titles and types of each car to find one that is similar to the inputed text

```js
/* This part looks for the elements that are given a unique id. In this case searchBox and carGrid */
    const searchBox = document.getElementById("searchBox");
    const carGrid = document.getElementById("carGrid");
    let carData = [];

/* this piece of code goes to cars.json and reads the data stored there. it also checks to see if the code is there before giving an error */
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

    // show all cars initially
    renderCars(carData);

  });

/* This function then creates the grid of cards that includes the car images and information */
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

/* This function then makes anything typed into the searchbar and car data (like type and name) into lowercase words so they can then be compared to one another and the correct car can be displayed */

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

/* This peice waits for a letter/word to be inputed into the search bar */
searchBox.addEventListener("input", handleSearch);
```

Then to `index.html` This is where the cards are displayed
    
    ```html 
     /* The cards is then updated while letters are being inputed into the search bar and display the car the user is most likly trying to find*/
    <div id="carGrid" class="car-grid">

        <!-- Cars will load here -->

    </div>
    ```






