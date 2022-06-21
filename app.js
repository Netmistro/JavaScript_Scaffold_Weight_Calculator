// Define the variables to populate the table here
const scaffoldTubes = [
  {
    name: "Scaffold Tube BS EN: 74 - 21'",
    weight: '40',
  },
  {
    name: "Scaffold Tube BS EN: 74 - 19'",
    weight: '40',
  },
];

// Add constants here
const selectMaterialCategory = document.getElementById('material-dropdown');
const materialListing = document.getElementById('list-container');

// Add event listeners here
// selectMaterialCategory.addEventListener('change', (e) => {
//   console.log(e.target);
// });

// Any functions here

// Add New Add Button
function addNewButton() {
  const newAddButton = document.createElement('button');
  newAddButton.classList.add('btn', 'mb-1', 'btn-danger', 'col-2');
  newAddButton.innerText = 'Add';
  materialListing.append(newAddButton);
}

// Add New Input Box
function addNewInputQty() {
  const newInput = document.createElement('input');
  newInput.classList.add('col-2', 'mb-1');
  newInput.type = 'number';
  newInput.placeholder = 'Qty';
  materialListing.append(newInput);
}

// Add new Text Area using Span
function addNewSpanTextDescription() {
  const newMaterialDescription = document.createElement('span');
  newMaterialDescription.classList.add('description', 'mb-1', 'col-8');
  newMaterialDescription.innerText = 'Scaffold Board BS EN 74 1.2m MG';
  materialListing.append(newMaterialDescription);
}

addNewButton();
addNewInputQty();
addNewSpanTextDescription();

addNewButton();
addNewInputQty();
addNewSpanTextDescription();
