let superheros = [
    {
        name: "Thor",
        age: 1500,
        planet: "Asgard",
        height: "6.6",
    },
    {
        name: "Iron Man",
        age: 48,
        planet: "Earth",
        height: "6.1",
    },
    {
        name: "Captain America",
        age: 93,
        planet: "Earth",
        height: "6.2",
    },
    {
        name: "Black Widow",
        age: 33,
        planet: "Earth",
        height: "5.7",
    },
];

function displayData(superarray){
    let tableContent = "";
    superarray.forEach((val, ind) => {
        let currentRow = `
        <tr>
        <td>${ind + 1}</td>
        <td>${val.name}</td>
        <td>${val.age}</td>
        <td>${val.planet}</td>
        <td>${val.height}</td>
        <td>
        <button id="delButton" onclick="deleteSuperHero(${ind})">Delete</button>
        <button id="updateButton" onclick="openModal(${ind})">Update</button>
        </td>
        </tr>
        `;
        tableContent += currentRow;
    });
    document.getElementById('tbody').innerHTML = tableContent;
}
displayData(superheros);


function addData(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let planet = document.getElementById('planet').value;
    let height = document.getElementById('height').value;

    let superhero = {};
    superhero.name = name;
    superhero.age = age;
    superhero.planet = planet;
    superhero.height = height;

    superheros.push(superhero);

    displayData(superheros);

    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('planet').value = "";
    document.getElementById('height').value = "";
}

searchByName = () =>{
    let searchValue = document.getElementById('search').value;
    let res = superheros.filter((val) => {
        return val.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
    displayData(res);
}

deleteSuperHero = (index) => {
    superheros.splice(index, 1);
    displayData(superheros);
}

function openModal(index) {
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = "block";
    copyData(index);
}

function hideModal(event) {
    let modal = document.getElementsByClassName('modal')[0];
    if (event.target.className == "modalchild") {
        modal.style.display = "block";
    } else if (event.target.className == "modal") {
        modal.style.display = "none";
    }
    // console.log(event.target.className);
}

let updateIndex;

function copyData(index){
    updateIndex = index;
    let superhero = superheros[index];
    document.getElementById('inner-name').value = superhero.name;
    document.getElementById('inner-age').value = superhero.age;
    document.getElementById('inner-planet').value = superhero.planet;
    document.getElementById('inner-height').value = superhero.height;
}

function updateData(event){
    event.preventDefault();
    let upname = document.getElementById('inner-name').value;
    let upage = document.getElementById('inner-age').value;
    let upplanet = document.getElementById('inner-planet').value;
    let upheight = document.getElementById('inner-height').value;

    let superhero = superheros[updateIndex];

    superhero.name = upname;
    superhero.age = upage;
    superhero.planet = upplanet;
    superhero.height = upheight;

    superheros[updateIndex] = superhero; 
    displayData(superheros);
    
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = "none";
}

