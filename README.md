# Berli's Pizza Cafe

#### By Sarah Reimann
#### A webpage for Berli's Pizza cafe where you can build your own pizza from scratch.

## Technologies Used

* HTML
* CSS
* JavaScript


## Description

This is a simple webpage where you can select a size of pizza and add toppings to it. When you click submit, you will see your pizza added to your shopping card. Once you have added all the pizza you want to add, you can hit the pay now button which will bring up a form to input your credit card information. Once that is filled out, you will hit pay now and it will show you your receipt. There is one more button to start a new order that reloads the page and starts fresh. 

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory
* open index.html in your browser
* Select a size
* Select your sauce, cheese, and toppings
* Click the add to cart button

## Known Bugs
*It will allow you to add to cart even if you have made no selections
*The tip input does not format your tip to include a dollar sign

## License

\_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\_

Copyright (c) _April 7, 2023, Sarah Reimann

TESTS

Describe: Pizza();

Test: "It should create a new Pizza object with properties of toppings and size"
Code: 
let pizza = new Pizza(["anchovies", "olives", "basil"], "medium")
pizza;
Expected Output: Pizza { toppings: Array[3], size: medium}

Describe PaymentInfo();

Test: "It should create a new PaymentInfo object with properties of creditCardNumber, expDate, cvv, zipCode, tip"
Code:
let payment = new PaymentInfo([1234,5678,9012,3456], 0928, 321, 97239, 12);
payment;
Expected Output: PaymentInfo {creditCardNumber: [1234,5678,9012,3456], expDate: 0928, cvv: 321, tip: 12}

Describe: Pizza.protoype.calculateCost();

Test: "It should check add the cost of the size plus the length of the toppings array * 2"
Code: let pizza = new Pizza(["anchovies", "olives", "basil"], "personal"
pizza.calculateCost;
Expected Output: 16

Describe: arrayToppings();
Test: "It should make an array of the checked topping choices"
Code: toppingsArray;
ExpectedOutput: an array of the selected toppings

