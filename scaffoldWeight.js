import { scaffoldTubes, scaffoldBoard1_2m, scaffoldBoard1_5m, ladderAluminum, ladderTuffSteel, cuplockIntermediateAndBraces, cuplockOmegaTransomAndBatten, cuplockStandardsAndLedgers, ladderAndAlloyBeams, alloyAndAsterix, aluminumTubes, highYieldTubes, lvlOSHABoards, scaffoldAccessories, scaffoldFittings } from "./scaffoldWeightMaterials.js";

// Add constants here
const selectMaterialCategory = document.getElementById('material-dropdown');
const listContainer = document.getElementById('list-container');
const outputContainer = document.querySelector('.output-container');
const selectedMaterials = document.querySelectorAll('.selected-material')[0];
const displayWeightDiv = document.querySelector('.total-weight');
const restartButton = document.querySelector('.btn-restart');

// Reload Browser
restartButton.addEventListener('click', (e) => {
  window.location.reload();
});
// Onload hide the material container
window.onload = (e) => {
  listContainer.style.visibility = 'hidden';
  displayWeightDiv.style.visibility = 'hidden';
  outputContainer.style.visibility = 'hidden';
};

// On change or select of material category
selectMaterialCategory.addEventListener('change', (e) => {
  // Change the visibility of the container
  listContainer.style.visibility = 'visible';

  // Remove all child nodes if they exist from the parent container
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.lastChild);
  }

  // Switch the case depending on the selected and display the group
  switch (e.target.value) {
    case '0':
      var count = 0;
      scaffoldTubes.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '1':
      var count = 0;
      scaffoldBoard1_2m.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '2':
      var count = 0;
      scaffoldBoard1_5m.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '3':
      var count = 0;
      ladderTuffSteel.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '4':
      var count = 0;
      ladderAluminum.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '5':
      var count = 0;
      cuplockStandardsAndLedgers.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '6':
      var count = 0;
      cuplockIntermediateAndBraces.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '7':
      var count = 0;
      cuplockOmegaTransomAndBatten.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '8':
      var count = 0;
      ladderAndAlloyBeams.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '9':
      var count = 0;
      alloyAndAsterix.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '10':
      var count = 0;
      aluminumTubes.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '11':
      var count = 0;
      highYieldTubes.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '12':
      var count = 0;
      lvlOSHABoards.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '13':
      var count = 0;
      scaffoldFittings.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    case '14':
      var count = 0;
      scaffoldAccessories.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + '\n');
        count++;
      });
      materialCase();
      break;
    default:
      break;
  }
});

// CODE FOR INPUT MATERIALS ABOVE
// Input Quantity to the Input Screen
function addNewInputQty(id) {
  const newInput = document.createElement('input');
  newInput.classList.add('qty-add');
  newInput.type = 'number';
  newInput.placeholder = 'Qty';
  newInput.setAttribute('id', id);
  listContainer.append(newInput);
}

// Add new Material Description using Span
function addNewSpanDescription(materialDescription) {
  const newMaterialDescription = document.createElement('span');
  newMaterialDescription.classList.add('description-add');
  newMaterialDescription.innerText = materialDescription;
  listContainer.append(newMaterialDescription);
}

// Add new Weight using Span
function addNewUnitWeight(weight) {
  const unitWeight = document.createElement('span');
  unitWeight.classList.add('unit-weight-add');
  unitWeight.innerText = weight;
  listContainer.append(unitWeight);
}

// Add new Total Weight using Span
function addNewTotalWeight(totalWeightAdd) {
  const totalWeight = document.createElement('span');
  totalWeight.classList.add('unit-weight-add');
  totalWeight.innerText = totalWeightAdd;
  listContainer.append(totalWeight);
}

// Format out Weights to 2 DP and commas for thousands
function formatOutputWeight(myweight) {
  if (myweight < 1.00) {
    let myNewOutputWeight = (new Intl.NumberFormat('en-US').format(myweight.toFixed(4)));
    return myNewOutputWeight;
  } else {
    let myNewOutputWeight = (new Intl.NumberFormat('en-US').format(myweight.toFixed(1)));
    return myNewOutputWeight;
  }
}

function materialCase() {
  //Add Button Query Selector
  let addItemsButton = document.querySelector('.btn-add');

  // Constants for each element
  let inputQtyAdd = document.querySelectorAll('.qty-add');
  let descriptionAdd = document.querySelectorAll('.description-add');
  let unitWeightAdd = document.querySelectorAll('.unit-weight-add');

  // Event listener for the click button
  addItemsButton.addEventListener('click', (e) => {

    // Loop through each element based on click add button
    let weightKg = 0.0;

    for (let i = 0; i < inputQtyAdd.length; i++) {
      if (!(inputQtyAdd[i].value === '' || inputQtyAdd[i].value === '0')) {

        // Make visible the weight screen and the total weights
        displayWeightDiv.style.visibility = 'visible';
        outputContainer.style.visibility = 'visible';

        // Send all values to the console once the input field isn't empty
        const outputDiv = document.createElement('div');
        outputDiv.classList.add('out-list-item');
        selectedMaterials.append(outputDiv);

        // Output Quantity
        let p = document.createElement('span');
        p.innerText = inputQtyAdd[i].value;
        outputDiv.append(p);

        // Out Description
        let q = document.createElement('span');
        q.innerText = descriptionAdd[i].innerText;
        outputDiv.append(q);

        // Out Total Weight
        let r = document.createElement('span');
        r.classList.add('weight');

        r.innerText = (
          inputQtyAdd[i].value * unitWeightAdd[i].innerText
        ).toFixed(2);
        // weightKg = parseFloat(weightKg) + parseFloat(r.innerText);
        outputDiv.append(r);
      }
    }

    // Clear all input boxes for quantities
    for (let j = 0; j < inputQtyAdd.length; j++) {
      inputQtyAdd[j].value = '';
    }

    // Calculate Grand Totals and format outputs
    const outWeight = document.querySelectorAll('.weight');
    outWeight.forEach((element) => {
      weightKg = weightKg + parseFloat(element.innerText);
    });
    displayWeightDiv.innerText = '';
    displayWeightDiv.append(`${formatOutputWeight(weightKg)} Kg. =>
        ${formatOutputWeight(weightKg * 2.204)} lbs. =>
        ${formatOutputWeight(weightKg / 1000)} tons`);
  });
}