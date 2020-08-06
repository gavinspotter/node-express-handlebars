const { connect } = require("../config/connection")

this js file is going to consist of three things:

# imports   
# routes 
# module.exports 

the imoprts are going to be:

# express 
# ../models/burger.js 

we are going to have three routes:

# get 
# post 
# put 

the three routes are all going to use the burger.js module.exports which is hooked up to the orm.js which is hooked up to the connetion.js 

route #1 the get route is going to collect all the data from the burger table and render it  
route #2 the post route is for creating burgers 
and route #3 is for updating burger data 