
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "b00tcamp",
  database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id:" + connection.threadId);
    viewTable();
    customerOrder();
});

// View inventory table 
var viewTable = function(){
    connection.query("SELECT * FROM inventory", function(err, results){
        if (err) throw err;
        console.log("----------------------------------");
        for (var i = 0; i < results.length; i++) {
            console.log("| " + results[i].item_id + " | " + results[i].product_name + " | $" + results[i].price + " |");
        }
        console.log("----------------------------------");
    });
}

//Customer request item from inventory
var customerOrder = function(){
    connection.query("SELECT * FROM inventory", function(err, results){
        if (err) throw err;
        inquirer.prompt([
            {
                type: "list",
                name: "choice",
                choices: function() {
                    var choiceArray = [];
                    for (var i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].item_id.toString());
                    }
                    return choiceArray;
                },
                message: "What is the ID of the item you would like to order?"
            },
            {
                type: "input",
                name: "quantity",
                message: "Enter the quantity you would like to order"
            }
        ]).then(function(answer) {
            // Grabbing item chosen from inventory
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
                if (parseInt(results[i].item_id) === parseInt(answer.choice)){
                    chosenItem = results[i];
                }
            }

            if (parseInt(chosenItem.stock_quantity) >= parseInt(answer.quantity)) {
                var newAmt = chosenItem.stock_quantity - answer.quantity;
                
                // Inventory check for stock
                connection.query("UPDATE inventory SET ? WHERE ?", [{
                    stock_quantity: newAmt
                }, {
                    item_id: chosenItem.item_id
                }], function(error) {
                    if (error) throw err;
                    console.log("Thank you for your order");
                });
            }
            else {
                // If not enough in stock
                console.log("Sorry - insufficient quantity of your item. Try again!");
            }
        });
    })
}