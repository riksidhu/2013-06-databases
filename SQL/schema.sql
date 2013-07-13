-- CREATE DATABASE chrisApp;

USE chrisApp;

CREATE TABLE users(
 /* Describe your table here.*/
  userId INT(10) NOT NULL auto_increment ,PRIMARY KEY(userId), user varchar(100),
  message varchar(200), postTime TIMESTAMP default current_timestamp, chatRoom varchar(30)
);

/* You can also create more tables, if you need them... */

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/
