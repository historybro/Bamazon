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
            message: "Welcome Manager. What would you like to do?",
            choices: ["View Products for Sale","View Low Inventory",
            "Add to Inventory","Add New Product", "Quit"]
        }
    ])
    .then(function(answer) {
        switch (answer.welcome) {
            case "View Products for Sale":
            sale();
            break;

            case "View Low Inventory":
            low();
            break;

            case "Add to Inventory":
            add();
            break;

            case "Add New Product":
            addNew();
            break;

            case "Quit":
            connection.end();
            break;            
        }
        
    });      
}

function sale() {
    products();
    start();    
}

function low() {
    connection.query("SELECT * FROM products GROUP BY product_name HAVING stock_quantity < 5", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\nID: "+res[i].item_id+" Name: "
            +res[i].product_name+" Price: "+res[i].price+" Quantity: "+res[i].stock_quantity+"\n");            
        }
        start();
    });
}

function add() {

}

function addNew() {
    console.log("\nAdding a new product...\n");
    inquirer.prompt([
        {
            name: "prod",
            type: "input",
            message: "What is the name of the new product?"
        },
        {
            name: "dep",
            type: "input",
            message: "What department is it in?"
        },
        {
            name: "price",
            type: "input",
            message: "What is the price?"
        },
        {
            name: "amount",
            type: "input",
            message: "How many are we adding to the system?"

        }
    ])
    .then(function(answer){
        connection.query(
            "INSERT INTO products SET ?",
            {
              product_name: answer.prod,
              department_name: answer.dep,
              price: answer.price,
              stock_quantity: answer.amount
            },
            function(err, res) {
              console.log(res.affectedRows + " product inserted!\n");              
            }
        );
    });
}

function products() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\nID: "+res[i].item_id+" Name: "
            +res[i].product_name+" Price: "+res[i].price+" Quantity: "+res[i].stock_quantity+"\n");            
        }        
    });
}