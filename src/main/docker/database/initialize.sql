CREATE DATABASE store;

USE store;

CREATE TABLE product(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
    price FLOAT,
    description VARCHAR(55),
    amount INT
);

INSERT INTO product(id, price, description, amount) VALUES (default, 1.50, "vite", 50);
INSERT INTO product(id, price, description, amount) VALUES (default, 1.00, "asse di legno", 5);
INSERT INTO product(id, price, description, amount) VALUES (default, 3.00, "bullone", 300);
INSERT INTO product(id, price, description, amount) VALUES (default, 2.25, "chiodo", 32);
INSERT INTO product(id, price, description, amount) VALUES (default, 5.30, "martello", 8);
INSERT INTO product(id, price, description, amount) VALUES (default, 1.40, "lampadina", 32);
INSERT INTO product(id, price, description, amount) VALUES (default, 0.25, "dado", 520);
INSERT INTO product(id, price, description, amount) VALUES (default, 12.00, "cacciavite a stella", 4);
INSERT INTO product(id, price, description, amount) VALUES (default, 2.75, "colla vinilica", 27);
INSERT INTO product(id, price, description, amount) VALUES (default, 0.10, "spillo", 280);
INSERT INTO product(id, price, description, amount) VALUES (default, 3.00, "corda", 22);
INSERT INTO product(id, price, description, amount) VALUES (default, 8.25, "gancio", 31);
INSERT INTO product(id, price, description, amount) VALUES (default, 12.50, "torcia", 39);
INSERT INTO product(id, price, description, amount) VALUES (default, 10.80, "batteria ricaricabile", 88);
INSERT INTO product(id, price, description, amount) VALUES (default, 18.00, "trapano", 3);
