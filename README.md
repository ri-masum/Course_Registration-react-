# Course-Registration

## Features 
    -Add to Cart system
    -Can see Total Price
    -Can see Total Credit
    -Can see Remaining credit they can take
    

## Managing the state 
    I have used useEffect() hook to fetch the data from the json file . In this assignment i have created a json file which is inside the public folder so i just use fetch('blog.json') to fetch the data from it. 

    Another hook i used in this assignment is useState() . this allows us to have state variables in function components.Here i pass the initial state of function and returns a variable with the current state value and another function to update this value.
    exp: const [names,setNames]=useState([]);
    The example here we get value from names and by using setNames we set the data we get from the functions. And i have pass the names data to the Cards component and received it from there and use where ever its necessary. I have pass data from one component to another just like this.

    Also there is function names handleBtn() which i pass it by the same method 


