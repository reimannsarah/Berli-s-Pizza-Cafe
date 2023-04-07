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