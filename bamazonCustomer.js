var pass = process.env.password;
var mysql = require("mysql");
var inquirer = require("inquirer");
//creates connection to mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: pass,
    database: "bamazon"
});
//on connection display it's connected then begin the program
connection.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    start();
});

function start() {
    inquirer.prompt([
        {
            name: "welcome",
            type: "list",
            message: "Welcome to Bamazon. Would you like to shop or quit?",
            choices: ["Shop","Quit"]
        }
    ])
    .then(function(answer) {
        if (answer.welcome === "Shop") {
            items();
        } else {
            console.log("Goodbye");
            connection.end();
        }
        
    })      
}

function shop() {
    inquirer.prompt([
        {
            name: "product",
            type: "input",
            message: "Id # of item you'd like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
        },
        {
            name: "amount",
            type: "input",
            message: "How many would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }

        }
    ])
    .then(function(answer) {
        console.log("ID: "+answer.product+"\nAmount: "+answer.amount);
        var query = "SELECT price, product_name, stock_quantity FROM products WHERE ?"
        connection.query(query, {item_id: answer.product}, function(err, res) {
            var amount = parseInt(answer.amount);
            var price = parseFloat(res[0].price);            
            var total = (amount*price);
            var newnum = (res[0].stock_quantity - amount);
            if (res[0].stock_quantity < amount) {
                console.log("\nInsufficient quantity!\n")
                start();
            }
            else {                                
                var query = "UPDATE products SET ? WHERE ?";
                console.log("\nPurchasing "+amount+" units of "+res[0].product_name+" for $"+res[0].price+" each.");
                console.log("Grand Total: $"+total);
                connection.query(query, [{stock_quantity: newnum},{item_id: answer.product}], function(err, res2){
                    if (err) throw err;
                    start();
                })            
        }
    })                   
    });      
}

function items() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\nProduct Name: "+res[i].product_name+" Product ID: "+res[i].item_id+" Product Price: "+res[i].price);            
        }
        shop();
    });
}