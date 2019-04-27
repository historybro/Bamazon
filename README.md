# Bamazon

This homework assignment was separated into 3 different challenges.
1. Customer View (minimum requirement)
2. Manager View (next level)
3. Supervisor View (final level)

### Customer View
1. Created a MySQl database named "bamazon", and inside of that created a table named "products."
2. That table was populated with 10 "stock" products.
![test](/images/3.png)
![Bamazon](/images/1.png)
3. A node application was created to interact with this table. On load it asks if you want to shop or quit (quitting will kill the connection)
![Bamazon](/images/2.png)
![Bamazon](/images/3.png)
4. Once shop is clicked it will display a full list of products including their name, id, and cost.
![Bamazon](/images/4.png)
5. It then prompts the user for what item the id of the product they would like to buy, and the amount they would like to buy.
![Bamazon](/images/5.png)
6. If there is not enough product to purchase it gives the user an error and restarts the purchasing process.
![Bamazon](/images/6.png)
7. If their are no issues the user is displayed that they are purchasing X units of the Product Name for Y price, and then the grand total of the purchase.
![Bamazon](/images/7.png)
8. Finally it will update the amount of the purchased item in the database, and ask the user if they would like to shop or quit.
![Bamazon](/images/8.png)

### Manager View
1. This uses the same MySQL database created above.
![Bamazon](/images/9.png)
2. It has four different commands. Each work in a different way, and after executing will bring you back to this page.
![Bamazon](/images/10.png)
3. View Products pulls up the full list of items on the database including their ID, names, prices, and quantity.
![Bamazon](/images/11.png)
4. View low inventory will display all items in the database with a quantity below 5.
![Bamazon](/images/12.png)
5. Add to inventory allows you to add update an existing item in the database.
![Bamazon](/images/13.png)
![Bamazon](/images/14.png)
6. Add new product allows us to add an entirely new product to the database with all needed information.
![Bamazon](/images/15png)
![Bamazon](/images/16.png)
7. The quit function ends the program and connection to the database.

![wut](/images/2.png)


### Supervisor View
- update soon -
