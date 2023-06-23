document.getElementById("product-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addProduct();
});

function addProduct() {
    var productName = document.getElementById("product-select").value;
    var sellingPrice = parseFloat(document.getElementById("selling-price").value);

    var productItem = document.createElement("li");
    productItem.classList.add("list-group-item");
    productItem.innerHTML = "<strong>" + productName + "</strong> - $" + sellingPrice.toFixed(2);

    document.getElementById("product-list").appendChild(productItem);

    // Clear the form inputs
    document.getElementById("product-select").value = "";
    document.getElementById("selling-price").value = "";

    updateTotalValue();
}

function updateTotalValue() {
    var productList = document.getElementById("product-list").getElementsByTagName("li");
    var totalValue = 0;

    for (var i = 0; i < productList.length; i++) {
        var sellingPriceText = productList[i].innerText.split(" - $")[1];
        var sellingPrice = parseFloat(sellingPriceText);
        totalValue += sellingPrice;
    }

    document.getElementById("total-value").innerText = "Total Value: $" + totalValue.toFixed(2);
}