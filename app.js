// Define the variables to populate the Scaffold Tubes table here
const scaffoldTubes = [
  {
    name: "Scaffold Steel Tube (4.0mm) - 21'",
    weight: '28.98',
    group: 'Scaffold Tube',
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 20'",
    weight: '27.60',
    group: 'Scaffold Tube',
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 18'",
    weight: '24.84',
    group: 'Scaffold Tube',
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 16'",
    weight: '22.08',
    group: 'Scaffold Tube',
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 14'",
    weight: '19.32',
    group: 'Scaffold Tube',
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 12'",
    weight: '16.56',
    group: 'Scaffold Tube',
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 10'",
    weight: '13.80',
    group: 'Scaffold Tube',
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 08'",
    weight: '11.04',
    group: 'Scaffold Tube',
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 06'",
    weight: '8.28',
    group: 'Scaffold Tube',
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 04'",
    weight: '5.52',
    group: 'Scaffold Tube',
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 02'",
    weight: '2.76',
    group: 'Scaffold Tube',
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 01'",
    weight: '1.38',
    group: 'Scaffold Tube',
  },
];

// Define the variables to populate the Scaffold Boards 1.2m table here
const scaffoldBoard1_2m = [
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 13'",
    weight: '0',
    group: 'Scaffold Boards',
  },
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 10'",
    weight: '0',
    group: 'Scaffold Boards',
  },
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 08'",
    weight: '0',
    group: 'Scaffold Boards',
  },
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 06'",
    weight: '0',
    group: 'Scaffold Boards',
  },
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 04'",
    weight: '0',
    group: 'Scaffold Boards',
  },
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 02'",
    weight: '0',
    group: 'Scaffold Boards',
  },
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 01'",
    weight: '0',
    group: 'Scaffold Boards',
  },
];

// Define the variables to populate the Scaffold Boards 1.2m table here
const scaffoldBoard1_5m = [
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 13'",
    weight: '0',
    group: 'Scaffold Boards',
  },
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 10'",
    weight: '0',
    group: 'Scaffold Boards',
  },
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 08'",
    weight: '0',
    group: 'Scaffold Boards',
  },
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 06'",
    weight: '0',
    group: 'Scaffold Boards',
  },
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 04'",
    weight: '0',
    group: 'Scaffold Boards',
  },
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 02'",
    weight: '0',
    group: 'Scaffold Boards',
  },
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 01'",
    weight: '0',
    group: 'Scaffold Boards',
  },
];

// Add constants here
const selectMaterialCategory = document.getElementById('material-dropdown');
const materialListing = document.getElementById('list-container');
const outputContainer = document.querySelector('.output-container');

// Clear all local storage
localStorage.clear();

// Onload hide the material container
window.onload = (e) => {
  materialListing.style.visibility = 'hidden';
};

// On change or select of material category
selectMaterialCategory.addEventListener('change', (e) => {
  // Change the visibility of the container
  materialListing.style.visibility = 'visible';

  // Remove all child nodes if they exist from the parent container
  while (materialListing.firstChild) {
    materialListing.removeChild(materialListing.lastChild);
  }

  // Switch the case depending on the selected and display the group
  switch (e.target.value) {
    case '0':
      count = 0;
      scaffoldTubes.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name + '\n');
        count++;
      });

      let inputQty = document.querySelectorAll('.qty-add');
      let matDesc = document.querySelectorAll('.description-add');
      let btn = document.querySelector('.btn-add');
      btn.addEventListener('click', (e) => {
        for (let i = 0; i < inputQty.length; i++) {
          const input = inputQty[i];
          if (input.value === '') {
            continue;
          } else {
            const mat = matDesc[i];
            localStorage.setItem(input.value, mat.innerText);
            console.log(input.value);
            console.log(mat.innerText);
          }
        }
      });

      break;
    case '1':
      scaffoldBoard1_2m.forEach((element) => {
        addNewInputQty();
        addNewSpanDescription(element.name + '\n');
      });
      break;
    case '2':
      scaffoldBoard1_5m.forEach((element) => {
        addNewInputQty();
        addNewSpanDescription(element.name + '\n');
      });
      break;
    default:
      break;
  }
});

// Add New Input Box
function addNewInputQty(id) {
  const newInput = document.createElement('input');
  newInput.classList.add('qty-add');
  newInput.type = 'number';
  newInput.placeholder = 'Qty';
  newInput.setAttribute('id', id);
  materialListing.append(newInput);
}

// Add new Material Description using Span
function addNewSpanDescription(materialDescription) {
  const newMaterialDescription = document.createElement('span');
  newMaterialDescription.classList.add('description-add');
  newMaterialDescription.innerText = materialDescription;
  materialListing.append(newMaterialDescription);
}

// Add new Span element for output container
function addNewSpanElement(qty) {
  const qtySpan = document.createElement('span');
  qtySpan.classList.add('qty-span');
  qtySpan.innerText = qty;
  outputContainer.append(qtySpan);
}

// let scaffoldTubeParse = JSON.parse(JSON.stringify(scaffoldTubes));
// console.log(scaffoldTubeParse);

// for (let i = 0; i < scaffoldTubeParse.length; i++) {
//   let element = scaffoldTubeParse[i];
//   localStorage.setItem(element.name, element.weight);
// }
