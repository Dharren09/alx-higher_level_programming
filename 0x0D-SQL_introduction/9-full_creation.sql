-- A script that creates a table second_table in the databaase hbtn_0c_0 in my MySQL server and multiples rows.
CREATE IF NOT EXISTS second_table(id, name INT, VARCHAR(256), score INT);
INSERT INTO second_table (1, "John", 10);
INSERT INTO second_table (2, "Alex", 3);
INSERT INTO second_table (3, "Bob", 14);
INSERT INTO second_table (4, "George", 8);
