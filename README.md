Describe: Pizza();
Test: "It should create a new Pizza object with properties of toppings and size"
Code: 
let pizza = new Pizza(["anchovies", "olives", "basil"], "medium")
pizza;
Expected Output: Pizza { toppings: Array[3], size: medium}

Describe PaymentInfo();
Test: "It should create a new PaymentInfo object with properties of creditCardNumber, expDate, cvv, zipCode, tip"
Code:
let payment = new PaymentInfo(1234567890123456, 0928, 321, 97239, 12);
payment;
Expected Output: PaymentInfo {creditCardNumber: 1234567890123456, expDate: 0928, cvv: 321, tip: 12}

Describe: Pizza.protoype.calculateCost();
Test: "It should check add the cost of the size plus the lenghth of the toppings array * 2"
Code: let pizza = new Pizza(["anchovies", "olives", "basil"], "personal"
pizza.calculateCost();
Expected Output: 16