const customBtn = document.querySelector(".custom-btn");
const appliances = document.getElementById("appliances");
const hoursInput = document.querySelectorAll(".hours");
const customHoursInput = document.querySelector(".custom-input");
const bandSelection = document.querySelectorAll(".bands");
const kilowattResult = document.getElementById("kilowatt-result");
const totalResult = document.getElementById("total-result");

const billInput = document.getElementById("bill-input");
const peopleNum = document.getElementById("people-num");
const reset = document.getElementById("reset");
const errorMsg = document.querySelectorAll(".msg");

let appliance = "";
let applianceWattage = 0;
let hours = 0;
let bandCost = 0;

appliances.addEventListener("input", () => {
  appliance = appliances.value;
  console.log(appliance);

  if (appliance === "Standing fan") {
    applianceWattage = 60;
    // console.log(applianceWattage);
  } else if (appliance === "Electric iron") {
    applianceWattage = 880;
    // console.log(applianceWattage);
  } else if (appliance === "Refrigerator") {
    applianceWattage = 300;
    // console.log(applianceWattage);
  } else if (appliance === "Electric kettle") {
    applianceWattage = 1200;
    // console.log(applianceWattage);
  }

  calculateCost();
});

// Event listener for custom hours button
customBtn.addEventListener("click", () => {
  customBtn.classList.add("hidden");
  customHoursInput.classList.remove("hidden");
  calculateCost();
});

// Event listener for the custom hours input
customHoursInput.addEventListener("input", () => {
  hours = parseFloat(customHoursInput.value);
  calculateCost();
});

// Event listener for hours buttons
hoursInput.forEach((hoursBtn) => {
  hoursBtn.addEventListener("click", () => {
    hours = parseFloat(hoursBtn.value);

    calculateCost();
    hoursInput.forEach((btn) => {
      btn.classList.remove("active");
    });
    hoursBtn.classList.add("active");
  });
});

// Event listener for hours band radio
bandSelection.forEach((bands) => {
  bands.addEventListener("click", () => {
    bandCost = parseFloat(bands.value);
    console.log(bandCost);
    calculateCost();
    // kilowattResult.textContent = bandCost;
    // let add = bandCost + 100;
    // console.log(add);
  });
});

// Event listener for reset button
reset.addEventListener("click", () => {
  window.location.reload();
});

// Function to calculate the electricity
function calculateCost() {
  if (appliance.length > 0 && hours > 0 && bandCost > 0) {
    let totalDailyCost = ((applianceWattage * hours) / 1000) * bandCost;
    let totalDailyUsage = (applianceWattage * hours) / 1000;
    let roundedTotalCost = totalDailyCost.toFixed(3);
    // console.log(totalCost);
    console.log(totalDailyUsage);
    console.log(roundedTotalCost);
    kilowattResult.textContent = `${totalDailyUsage}KWh`;
    totalResult.textContent = `₦${roundedTotalCost}`;

    // let tipAmount = (bill * tip) / 100;
    // let totalAmount = bill + tipAmount;
    // tipResult.textContent = "$" + (tipAmount / people).toFixed(2);
    // totalResult.textContent = "$" + (totalAmount / people).toFixed(2);

    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    reset.style.color = "hsl(183, 100%, 15%)";
  }
  // else if (people === 0) {
  //   // errorMsg.classList.remove("hidden");
  // }
}
