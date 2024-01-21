//console based e-commerce app
const prompt = require("prompt-sync")();

let myMoney = 0;

let userCart = [];

let Apple = {
    "name" : "Apple",
    "color" : "red",
    "price" : "15",
    "quantity" : "50"
}

let Banana = {
    "name" : "Banana",
    "color" : "yellow",
    "price" : "10",
    "quantity" : "50"
}

let Mango = {
    "name" : "Mango",
    "color" : "yellow",
    "price" : "10",
    "quantity" : "50"
}

let Orange = {
    "name" : "Orange",
    "color" : "orange",
    "price" : "15",
    "quantity" : "50"
}

let Peach = {
    "name" : "Peach",
    "color" : "red",
    "price" : "15",
    "quantity" : "50"
}
let fruits = [Apple, Banana ,Mango, Orange, Peach];

function stalls() {
    fruits.forEach(function(fruit){
        console.log(fruit.name + " || " + fruit.color + " || $" + fruit.price )
    });
}

stalls();

let thankYou = "Thank you for shopping with us"

console.log("Welcome to Oni fruit stall, how May i help you");
var userInput = prompt("would you like to place an order? (enter 'yes' or 'no')");
    if (userInput == "yes"){
        order();
    }else{
        console.log(thankYou);
    }

function order() {
    let cart = prompt("place your order: ");

    let orderObj = fruits.find(obj => obj.name === cart);
    if (orderObj){
        let quantity = prompt(`How many ${orderObj.name}s would you like to purchase: -> `);
        let cost = orderObj.price * quantity;
        console.log (`That will cost ${cost} USD`);
        var confirmPurchase = prompt("Enter 'yes' if you want to go ahead with the purchase: ");
        if (confirmPurchase == "yes"){
            myMoney = myMoney + cost;
            console.log("this is how much the stall has made :-> " + myMoney);
            let purchasedItems = {name: orderObj.name, quantity: orderObj.quantity}
            userCart.push(purchasedItems);
            console.log("heres your cart");
            console.log(userCart);
            

            var anytinElse = prompt("Enter 'yes' if you still want to continue:")
            if (anytinElse == "yes"){
                anythingElse()
            }else{
                console.log(thankYou);
            }
        }else{
            console.log("please keep looking, something may catch your interest");
        }
        
    } else {
        console.log("not found");
    }



}
function anythingElse() {
    stalls();
    order();
}

console.log("thank you for visiting us, we look forward to your next visit");









