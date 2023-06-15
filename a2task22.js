const inputField = document.getElementById("inputField");
const submitButton = document.getElementById("submitButton");

// Click event handler
submitButton.addEventListener("click", function() {
  const value = inputField.value;
  console.log("Clicked! Value:", value);
});

// Mouseover event handler
submitButton.addEventListener("mouseover", function() {
  console.log("Mouseover!");
});

// Mouseout event handler
submitButton.addEventListener("mouseout", function() {
  console.log("Mouseout!");
});