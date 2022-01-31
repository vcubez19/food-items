// User's name
const nameForOrder = document.getElementById("name");


// Selects
const sandwiches = document.getElementById("sandwiches");
const drinks = document.getElementById("drinks");
const desserts = document.getElementById("desserts");


// Calculate button
const calculateButton = document.getElementById("calculate");


const sandwichCost = 5.0;
const drinkCost = 3.0;
const dessertCost = 4.0;


calculateButton.onclick = () => {
    const sandwich = sandwiches.options[sandwiches.selectedIndex].text;
    const drink = drinks.options[drinks.selectedIndex].text;
    const dessert = desserts.options[desserts.selectedIndex].text;


    const sandwichCount = parseFloat(document.getElementById("sandwich-count").value);
    const drinkCount = parseFloat(document.getElementById("drink-count").value);
    const dessertCount = parseFloat(document.getElementById("dessert-count").value);


    var sandwichTotal = sandwichCost * sandwichCount;
    var drinksTotal = drinkCost * drinkCount;
    var dessertsTotal = dessertCost * dessertCount;


    var finalTotal = sandwichTotal + drinksTotal + dessertsTotal;
    sandwichTotal = sandwichTotal.toFixed(2);
    drinksTotal = drinksTotal.toFixed(2);
    dessertsTotal = dessertsTotal.toFixed(2);
    finalTotal = finalTotal.toFixed(2);


    document.getElementById("order-total-for").innerHTML = "Order total for " + nameForOrder.value + ":";
    document.getElementById("total").innerHTML = "Total cost: $" + finalTotal;
    document.getElementById("total").style = "color: dodgerblue;";
    document.getElementById("summary").innerHTML = `<ul><li>$${sandwichTotal} for ${sandwichCount} ${sandwich} sandwiches</li>` + 
    `<li>$${drinksTotal} for ${drinkCount} ${drink} drinks</li><li>$${dessertsTotal} for ${dessertCount} ${dessert} desserts</li></ul>`;


}

