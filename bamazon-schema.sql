CREATE DATABASE bamazon
USE bamazon;
CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(100),
department_name VARCHAR(100),
price DEC(10, 2),
stock_quantity INT
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Skub",  "Memes", 50, 150), ("Anti-Skub", "Memes", 50, 150), ("Monster Zero Ultra", "Drinks", 3.50, 250),
("Gamer Fuel", "Drinks", 2.50, 300), ("Soylent", "Drinks", 6.50, 35), ("McChicken", "Food", 0.99, 1000),
("Riding Lawnmower", "Outdoor", 375.95, 20), ("Ribi-Rabi", "Video Games", 25.95, 100),
("Sanic", "Video Games", 19.99, 250), ("How to Identify Wood", "Books", 19.95, 3);
SELECT * FROM products;