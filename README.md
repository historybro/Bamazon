# Bamazon

This homework assignment was separated into 3 different challenges.
1.) Customer View (minimum requirement)
2.) Manager View (next level)
3.) Supervisor View (final level)

### Customer View
1.) Created a MySQl database named "bamazon", and inside of that created a table named "products."
2.) That table was populated with 10 "stock" products.
![Bamazon](/readme/customer/mysql.png)
3.) A node application was created to interact with this table. On load it asks if you want to shop or quit (quitting will kill the connection)
![Bamazon](/readme/customer/bcs.png)
![Bamazon](/readme/customer/bcsq.png)
4.) Once shop is clicked it will display a full list of products including their name, id, and cost.
![Bamazon](/readme/customer/items.png)
5.)It then prompts the user for what item the id of the product they would like to buy, and the amount they would like to buy.
![Bamazon](/readme/customer/bcsii.png)
6.) If there is not enough product to purchase it gives the user an error and restarts the purchasing process.
![Bamazon](/readme/customer/iq.png)
7.) If their are no issues the user is displayed that they are purchasing X units of the Product Name for Y price, and then the grand total of the purchase.
![Bamazon](/readme/customer/bcsi.png)
8.) Finally it will update the amount of the purchased item in the database, and ask the user if they would like to shop or quit.
![Bamazon](/readme/customer/mysql2.png)

### Manager View

### Supervisor View