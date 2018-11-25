# Week 12 Homework Assignment
------------------------------
## Node.js & MySql Store

This assignment required the creation of an Amazon-like store using Node.js and storing an inventory of products in a MySql database. The database keeps track of items in inventory.

![picture_alt](https://github.com/gmaghari/bamazon/blob/master/images/inventorytable.png)

### NPM Packages
* MySql
* Inquirer

### Instructions
Run the following on your terminal to view the table.  Using the arrow keys, select the ID for the item you wish to order.

```node bamazonCustomer.js```

![picture alt](https://raw.githubusercontent.com/gmaghari/bamazon/master/images/customerorder1.png)

Enter the quantity of the item selected

![picture alt](https://github.com/gmaghari/bamazon/blob/master/images/customerorder2.png)

If the item is in stock, your order should be confirmed

![picture_alt](https://github.com/gmaghari/bamazon/blob/master/images/orderconfirmation.png)

Should there be insufficient stock to fill the order, you should get the following message

![picture_alt](https://github.com/gmaghari/bamazon/blob/master/images/insufficientstock.png)
