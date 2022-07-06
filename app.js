// Define the variables to populate the Scaffold Tubes table here
const scaffoldTubes = [
  {
    name: "Scaffold Steel Tube (4.0mm) - 21'",
    weight: "28.98",
    group: "Scaffold Tube",
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 20'",
    weight: "27.60",
    group: "Scaffold Tube",
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 18'",
    weight: "24.84",
    group: "Scaffold Tube",
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 16'",
    weight: "22.08",
    group: "Scaffold Tube",
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 14'",
    weight: "19.32",
    group: "Scaffold Tube",
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 12'",
    weight: "16.56",
    group: "Scaffold Tube",
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 10'",
    weight: "13.80",
    group: "Scaffold Tube",
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 08'",
    weight: "11.04",
    group: "Scaffold Tube",
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 06'",
    weight: "8.28",
    group: "Scaffold Tube",
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 04'",
    weight: "5.52",
    group: "Scaffold Tube",
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 02'",
    weight: "2.76",
    group: "Scaffold Tube",
  },
  {
    name: "Scaffold Steel Tube (4.0mm) - 01'",
    weight: "1.38",
    group: "Scaffold Tube",
  },
];

// Define the variables to populate the Scaffold Boards 1.2m table here
const scaffoldBoard1_2m = [
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 13'",
    weight: "0",
    group: "Scaffold Boards",
  },
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 10'",
    weight: "0",
    group: "Scaffold Boards",
  },
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 08'",
    weight: "0",
    group: "Scaffold Boards",
  },
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 06'",
    weight: "0",
    group: "Scaffold Boards",
  },
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 04'",
    weight: "0",
    group: "Scaffold Boards",
  },
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 02'",
    weight: "0",
    group: "Scaffold Boards",
  },
  {
    name: "Scaffold Board BS EN 2482 1.2m Support MG - 01'",
    weight: "0",
    group: "Scaffold Boards",
  },
];

// Define the variables to populate the Scaffold Boards 1.2m table here
const scaffoldBoard1_5m = [
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 13'",
    weight: "0",
    group: "Scaffold Boards",
  },
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 10'",
    weight: "0",
    group: "Scaffold Boards",
  },
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 08'",
    weight: "0",
    group: "Scaffold Boards",
  },
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 06'",
    weight: "0",
    group: "Scaffold Boards",
  },
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 04'",
    weight: "0",
    group: "Scaffold Boards",
  },
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 02'",
    weight: "0",
    group: "Scaffold Boards",
  },
  {
    name: "Scaffold Board BS EN 2482 1.5m Support MG - 01'",
    weight: "0",
    group: "Scaffold Boards",
  },
];

// Add constants here
const selectMaterialCategory = document.getElementById("material-dropdown");
const listContainer = document.getElementById("list-container");
const outputContainer = document.querySelector(".output-container");
const selectedMaterials = document.querySelectorAll(".selected-material")[0];

// Onload hide the material container
window.onload = (e) => {
  listContainer.style.visibility = "hidden";
};

// On change or select of material category
selectMaterialCategory.addEventListener("change", (e) => {
  // Change the visibility of the container
  listContainer.style.visibility = "visible";

  // Remove all child nodes if they exist from the parent container
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.lastChild);
  }

  // Switch the case depending on the selected and display the group
  switch (e.target.value) {
    case "0":
      count = 0;
      scaffoldTubes.forEach((element) => {
        addNewInputQty(count);
        addNewSpanDescription(element.name);
        addNewUnitWeight(element.weight + "\n");
        count++;
      });

      //Add Button Query Selector
      let addItemsButton = document.querySelector(".btn-add");

      // Constants for each element
      let inputQtyAdd = document.querySelectorAll(".qty-add");
      let descriptionAdd = document.querySelectorAll(".description-add");
      let unitWeightAdd = document.querySelectorAll(".unit-weight-add");


      // Event listener for the click button
      addItemsButton.addEventListener("click", (e) => {
        // Loop through each element based on click add button
        let weightKg = 0.00;

        for (let i = 0; i < inputQtyAdd.length; i++) {

          if (!(inputQtyAdd[i].value === "" || inputQtyAdd[i].value === "0")) {
            // Send all values to the console once the input field isn't empty
            const outputDiv = document.createElement("div");
            outputDiv.classList.add("out-list-item");
            selectedMaterials.append(outputDiv);

            // Output Quantity
            let p = document.createElement('span');
            p.innerText = (inputQtyAdd[i].value);
            outputDiv.append(p);

            // Out Description
            let q = document.createElement('span');
            q.innerText = descriptionAdd[i].innerText;
            outputDiv.append(q);

            // Out Total Weight
            let r = document.createElement('span');
            r.classList.add("weight");

            r.innerText = ((inputQtyAdd[i].value * unitWeightAdd[i].innerText)).toFixed(1);
            // weightKg = parseFloat(weightKg) + parseFloat(r.innerText);
            outputDiv.append(r);
          }
        }

        // Clear all input boxes for quantities
        for (let j = 0; j < inputQtyAdd.length; j++) {
          inputQtyAdd[j].value = "";
        }

        // Calculate Grand Totals
        let w = document.querySelectorAll('.weight');
        w.forEach(element => {
          weightKg = weightKg + parseFloat(element.innerText);
        });
        console.log(weightKg);
        let t = document.querySelector('.total-weight');
        t.innerText = "";
        t.append(`Kg => ${weightKg.toFixed(1)}
        lbs. => ${(weightKg * 2.204).toFixed(1)}
        Tons => ${(weightKg / 1000).toFixed(1)}`);
      });

      break;
    case "1":
      scaffoldBoard1_2m.forEach((element) => { });
      break;
    default:
      break;
  }
});

// CODE FOR INPUT MATERIALS ABOVE
// Input Quantity to the Input Screen Below
function addNewInputQty(id) {
  const newInput = document.createElement("input");
  newInput.classList.add("qty-add");
  newInput.type = "number";
  newInput.placeholder = "Qty";
  newInput.setAttribute("id", id);
  listContainer.append(newInput);
}

// Add new Material Description using Span
function addNewSpanDescription(materialDescription) {
  const newMaterialDescription = document.createElement("span");
  newMaterialDescription.classList.add("description-add");
  newMaterialDescription.innerText = materialDescription;
  listContainer.append(newMaterialDescription);
}

// Add new Weight using Span
function addNewUnitWeight(weight) {
  const unitWeight = document.createElement("span");
  unitWeight.classList.add("unit-weight-add");
  unitWeight.innerText = weight;
  listContainer.append(unitWeight);
}

// Add new Total Weight using Span
function addNewTotalWeight(totalWeightAdd) {
  const totalWeight = document.createElement("span");
  totalWeight.classList.add("unit-weight-add");
  totalWeight.innerText = totalWeightAdd;
  listContainer.append(totalWeight);
}

// Add new Span element for output container
function addNewSpanElement(qty) {
  const qtySpan = document.createElement("span");
  qtySpan.classList.add("qty-span");
  qtySpan.innerText = qty;
  outputContainer.append(qtySpan);
}

// CODE FOR OUTPUT MATERIALS BELOW
// Quantity Output to the Output Screen Below
function qtyOutput(quantity) {
  const qtyOutputSpan = document.createElement("span");
  qtyOutputSpan.classList.add("mat");
  qtyOutputSpan.innerText = quantity;
  selectedMaterials.append(qtyOutputSpan);
}

// Description output Span
function outDescription(outDescription) {
  const descriptionOutputSpan = document.createElement("span");
  descriptionOutputSpan.classList.add("mat");
  descriptionOutputSpan.innerText = outDescription;
  selectedMaterials.append(descriptionOutputSpan);
}

// Unit Weight output Span - done send output to screen
function outputUnitWeight(outUnitWeight) {
  const unitWeightOutputSpan = document.createElement("span");
  // unitWeightOutputSpan.classList.add("unit-weight-out");
  // selectedMaterials.append(unitWeightOutputSpan);
  // unitWeightOutputSpan.append(outUnitWeight);
}

// Output Span Total Weight
function outTotalWeight(outQuantity, outUnitWeight) {
  const totalWeightOutputSpan = document.createElement("span");
  totalWeightOutputSpan.classList.add("mat");
  totalWeightOutputSpan.innerText = (outQuantity * outUnitWeight).toFixed(2);
  selectedMaterials.append(totalWeightOutputSpan);
  selectedMaterials.append(document.createElement("br"));
};
