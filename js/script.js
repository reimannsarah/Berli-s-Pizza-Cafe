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
  if(this.size === "personal"){
    paymentTotal =  personal + this.toppings.length * 2;
    console.log(paymentTotal);
  }else if(this.size === "medium"){
    paymentTotal =  medium + this.toppings.length * 2;
    console.log(paymentTotal);
  }else if(this.size === "large"){
    paymentTotal =  large + this.toppings.length * 2;
    console.log(paymentTotal);
  }else {
    paymentTotal =  extraLarge + this.toppings.length * 2;
    console.log(paymentTotal);
  }
}

function PaymentInfo (creditCardNumber, expDate, cvv, zipCode, tip){
  this.creditCardNumber = creditCardNumber;
  this.expDate = expDate;
  this.cvv = cvv;
  this.zipCode = zipCode;
  this.tip = tip;
}

//UI logic

function arrayToppings() {
  let toppingsArray = [];
  let toppingsOption = document.querySelectorAll('input[type="checkbox"]:checked')
  toppingsOption.forEach(function(element) {
    let topping = element.value;
    toppingsArray.push(topping);
  });
  console.log(toppingsArray);
  }

function handlePizzaFormSubmission(e){
  e.preventDefault();
  arrayToppings();
}





function formatCreditCard(input) {
  let value = input.value.replace(/\D/g, "");
  value = value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1-$2-$3-$4');
  input.value = value;
}

window.addEventListener("load", function() {
  this.document.getElementById("pizza-selection").addEventListener("submit",handlePizzaFormSubmission);
})