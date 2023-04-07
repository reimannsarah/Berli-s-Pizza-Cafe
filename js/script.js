//Global Variables
let paymentTotal = 0;

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
    paymentTotal =  personal + this.toppings.length * 2;
  }else if(this.size === "Medium"){
    paymentTotal =  medium + this.toppings.length * 2;
  }else if(this.size === "Large"){
    paymentTotal =  large + this.toppings.length * 2;
  }else if(this.size === "Extra Large"){
    paymentTotal =  extraLarge + this.toppings.length * 2;
  }
  return paymentTotal;
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
  pizza.calculateCost();
  console.log(pizza);
  console.log(paymentTotal);
  let orderSummary = document.getElementById("order-summary");
  let pPizzaSize = document.createElement("p");
  let pToppings = document.createElement("p");
  let total = document.createElement("p");
  total.innerText = "Total: $" + paymentTotal;
  pPizzaSize.innerText =pizza.size + " Pizza";
  pToppings.innerText = "Toppings: " + pizza.toppings.join(", ");
  orderSummary.append(pPizzaSize,pToppings, total)
  orderSummary.removeAttribute("class");
  resetForm();
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

window.addEventListener("load", function() {
  this.document.getElementById("pizza-selection").addEventListener("submit",handlePizzaFormSubmission);
})