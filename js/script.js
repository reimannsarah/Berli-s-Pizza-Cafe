//Global Variables
let paymentTotal = 0;
let itemTotal = 0;

//Business logic

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculateCost = function(){    
  let personal = 10;
  let medium = 12;
  let large = 14;
  let extraLarge = 16;
  if(this.size === "Personal"){
    itemTotal =  personal + this.toppings.length * 2;
  }else if(this.size === "Medium"){
    itemTotal =  medium + this.toppings.length * 2;
  }else if(this.size === "Large"){
    itemTotal =  large + this.toppings.length * 2;
  }else if(this.size === "Extra Large"){
    itemTotal =  extraLarge + this.toppings.length * 2;
  }
  return itemTotal;
}

function PaymentInfo (creditCardNumber, expDate, cvv, zipCode, tip){
  this.creditCardNumber = creditCardNumber;
  this.expDate = expDate;
  this.cvv = cvv;
  this.zipCode = zipCode;
  this.tip = tip;
}

function arrayToppings() {
  let toppingsArray = [];
  let toppingsOption = document.querySelectorAll('input[type="checkbox"]:checked')
  toppingsOption.forEach(function (element) {
    let topping = element.value;
    toppingsArray.push(topping);
  });
  return toppingsArray;
}

//UI logic



function handlePizzaFormSubmission(e){
  e.preventDefault();  
  let size = document.getElementById("size-selection").value;
  let toppings = arrayToppings();
  let pizza = new Pizza(toppings,size)
  let itemTotal = pizza.calculateCost();
  paymentTotal = itemTotal + paymentTotal;
  let orderSummary = document.getElementById("order-summary");
  let runningTotal = document.getElementById("running-total");
  let pPizzaSize = document.createElement("p");
  let pToppings = document.createElement("p");
  let total = document.createElement("p");
  total.innerText = "Item: $" + itemTotal;
  pPizzaSize.innerText =pizza.size + " Pizza";
  pToppings.innerText = "Toppings: " + pizza.toppings.join(", ");
  orderSummary.append(pPizzaSize,pToppings, total)
  orderSummary.removeAttribute("class");
  runningTotal.innerText = "Total in your cart: $" + paymentTotal;
  runningTotal.removeAttribute("class");
  let payNowButton = document.getElementById("pay-now");
  payNowButton.removeAttribute("class");
  resetForm();
}

function payNow() {
  let removeOrderSummary = document.getElementById("remove-order-summary");
  let paymentInfo = document.getElementById("payment-info");
  removeOrderSummary.setAttribute("class", "remove-order-summary");
  paymentInfo.removeAttribute("class");
}

function submitPayment(e) {
  e.preventDefault();
  let ccNumber = document.getElementById("credit-card").value;
  let arrayedCCNumber = ccNumber.split("-");
  let lastFour = arrayedCCNumber.pop();
  let tip = parseInt(document.getElementById("tip").value);
  let finalTotal = paymentTotal + tip;
  let receipt = document.getElementById("receipt");
  let receiptCCNumber = document.getElementById("redactedCC");
  let totalPaid = document.getElementById("total-cost");
  receiptCCNumber.innerText = "Paid with: xxxx-xxxx-xxxx-" + lastFour;
  totalPaid.innerText = "Total Paid: $" + finalTotal;
  receipt.removeAttribute("class");
  let paymentInfo = document.getElementById("payment-info");
  paymentInfo.setAttribute("class", "payment-hidden");
  

}

function resetForm() {
  const pizzaForm = document.getElementById("pizza-selection");
  if (pizzaForm){
  pizzaForm.reset();
  }
}

function formatCreditCard(input) {
  let value = input.value.replace(/\D/g, "");
  value = value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1-$2-$3-$4');
  input.value = value;
}

function newOrder() {
  location.reload();
}

window.addEventListener("load", function() {
  this.document.getElementById("cart-button").addEventListener("click",handlePizzaFormSubmission);
  this.document.getElementById("pay-now").addEventListener("click", payNow);
  this.document.getElementById("payment-info").addEventListener("submit",submitPayment);
  this.document.getElementById("new-order").addEventListener("click", newOrder);
})

