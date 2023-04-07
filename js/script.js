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
    return personal + this.toppings.length * 2;
  }else if(this.size === "medium"){
    return medium + this.toppings.length * 2;
  }else if(this.size === "large"){
    return large + this.toppings.length * 2;
  }else {
    return extraLarge + this.toppings.length * 2;
  }
}

function PaymentInfo (creditCardNumber, expDate, cvv, zipCode, tip){
  this.creditCardNumber = creditCardNumber;
  this.expDate = expDate;
  this.cvv = cvv;
  this.zipCode = zipCode;
  this.tip = tip;
}

