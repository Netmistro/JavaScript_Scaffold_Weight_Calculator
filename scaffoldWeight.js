// Import from another file all the data created for the different material categories
import { scaffoldTubes, scaffoldBoard1_2m, scaffoldBoard1_5m, ladderAluminum, ladderTuffSteel, cuplockIntermediateAndBraces, cuplockOmegaTransomAndBatten, cuplockStandardsAndLedgers, ladderAndAlloyBeams, alloyAndAsterix, aluminumTubes, highYieldTubes, lvlOSHABoards, scaffoldAccessories, scaffoldFittings1, scaffoldFittings2, formworkProps, aluminumStaging, StaircaseAndToeBoards } from "./scaffoldWeightMaterials.js";

// Add constants here
const selectMaterialCategory = document.getElementById('material-dropdown');
const listContainer = document.getElementById('list-container');
const outputContainer = document.querySelector('.output-container');
const selectedMaterials = document.querySelectorAll('.selected-material')[0];
const displayWeightDiv = document.querySelector('.total-weight');
const inputContainer = document.querySelector('.input-container');
const restartButton = document.querySelector('.btn-restart');
// Use of fontawesome icons for a button graphic
restartButton.innerHTML = '<i class="fa-solid fa-arrow-rotate-left"></i>';

//Add Button Query Selector
let addItemsButton = document.querySelector('.btn-add');
addItemsButton.innerHTML = '<i class="fa-solid fa-plus"></i>';

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
      formatInputTable(scaffoldTubes);
      break;
    case '1':
      formatInputTable(highYieldTubes);
      break;
    case '2':
      formatInputTable(aluminumTubes);
      break;
    case '3':
      formatInputTable(scaffoldBoard1_2m);
      break;
    case '4':
      formatInputTable(scaffoldBoard1_5m);
      break;
    case '5':
      formatInputTable(lvlOSHABoards);
      break;
    case '6':
      formatInputTable(ladderTuffSteel);
      break;
    case '7':
      formatInputTable(ladderAluminum);
      break;
    case '8':
      formatInputTable(cuplockStandardsAndLedgers);
      break;
    case '9':
      formatInputTable(cuplockIntermediateAndBraces);
      break;
    case '10':
      formatInputTable(cuplockOmegaTransomAndBatten);
      break;
    case '11':
      formatInputTable(ladderAndAlloyBeams);
      break;
    case '12':
      formatInputTable(alloyAndAsterix);
      break;
    case '13':
      formatInputTable(scaffoldFittings1);
      break;
    case '14':
      formatInputTable(scaffoldFittings2);
      break;
    case '15':
      formatInputTable(formworkProps);
      break;
    case '16':
      formatInputTable(aluminumStaging);
      break;
    case '17':
      formatInputTable(StaircaseAndToeBoards);
      break;
    case '18':
      formatInputTable(scaffoldAccessories);
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

// Format output Weights to 2 DP and commas for thousands
function formatOutputWeight(myweight) {
  if (myweight < 1.00) {
    let myNewOutputWeight = (new Intl.NumberFormat('en-US').format(myweight.toFixed(4)));
    return myNewOutputWeight;
  } else {
    let myNewOutputWeight = (new Intl.NumberFormat('en-US').format(myweight.toFixed(1)));
    return myNewOutputWeight;
  }
}

// Function to include in the switch statement to format the input form
function formatInputTable(materialCategory) {
  var count = 0;
  materialCategory.forEach((element) => {
    addNewInputQty(count);
    addNewSpanDescription(element.name);
    addNewUnitWeight(element.weight + '\n');
    count++;
  });
  materialCase();
}

// Function to add the materials based on a switch statement
function materialCase() {

  // Constants for each element
  let inputQtyAdd = document.querySelectorAll('.qty-add');
  let descriptionAdd = document.querySelectorAll('.description-add');
  let unitWeightAdd = document.querySelectorAll('.unit-weight-add');

  // Event listener for the click button
  addItemsButton.addEventListener('click', (e) => {
    // Make the width of the output window larger
    document.querySelector('.output-container').style.width = 'auto';
    populateOutputContainer();
  });

  // Event listener for the Return Key and Escape Key
  window.addEventListener('keydown', (e) => {

    // Make the width of the output window larger
    document.querySelector('.output-container').style.width = 'auto';

    // Consider keypress events
    if (e.key == 'Enter') {
      populateOutputContainer();
    } if (e.key == 'Escape') {
      window.location.reload();
    }

  });

  // Function for Pupulating the ouput Container
  function populateOutputContainer() {
    // Loop through each element based on click add button
    let weightKg = 0.0;


    for (let i = 0; i < inputQtyAdd.length; i++) {
      if (!(inputQtyAdd[i].value === '' || inputQtyAdd[i].value === '0')) {

        // Cater for negative values and make them zero
        if (inputQtyAdd[i].value < '0') {
          inputQtyAdd[i].value === '0';
        } else {

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

    // Create an arrow using fontawesome to seperate items
    const arrow1 = document.createElement('span');
    arrow1.classList = "fa-solid fa-arrow-right";
    const arrow2 = document.createElement('span');
    arrow2.classList = "fa-solid fa-arrow-right";
    displayWeightDiv.innerText = '';
    displayWeightDiv.append(` ${formatOutputWeight(weightKg)} Kg.`);
    displayWeightDiv.appendChild(arrow1);
    displayWeightDiv.append(` ${formatOutputWeight(weightKg * 2.204)} lbs.`);
    displayWeightDiv.appendChild(arrow2);
    displayWeightDiv.append(` ${formatOutputWeight(weightKg / 1000.00)} tons`);

  };
}