const connection = require("./connection")

here we are going to require our connection.js which uses module.exports to export the variable needed to connect to our mysql database

next we are going to create our orm 

we are going to need three functions inside of our orm object:

# one for selecting the data 
# one for inserting data
# one for updating data

the orm function call for SELECTING data is giong to use the sql command SELECT * FROM 

the orm function call for INSERTING data is going to us the sql command INSERT INTO

and last but not least the orm function call for UPDATING data  

finally we're going to export our orm through module.exports 