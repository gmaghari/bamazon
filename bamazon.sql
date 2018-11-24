DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE inventory (
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(45) NOT NULL,
	department_name VARCHAR(25) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO inventory (product_name, department_name, price, stock_quantity)
VALUES  ('Duracell Batteries', 'Electronics', 7.99, 100),
        ('Hanes Mens Crew Socks', 'Clothing', 12.99, 50),
		('Spaulding NFL Football', 'Sports', 19.99, 30),
		('Nesquik Chocolate Milk', 'Grocery', 5.99, 60),
		('Ibuprofen', 'Pharmacy', 10.99, 100),
		('Logitech Wireless Mouse', 'Electronics', 16.99, 25),
		('Purina Dog Food', 'Pets', 14.99, 50),
		('Cotton Polo Shirt', 'Clothing', 19.99, 50),
		('Lucky Charms Cereal', 'Grocery', 5.99, 50),
		('Centrum Multivitamin', 'Pharmacy', 12.99, 50);