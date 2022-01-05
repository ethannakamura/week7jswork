//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function checkwords(dog_string,dog_names){
    for(let i = 0; i < dog_names.length; i++){        
        if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase ())==true){
            return console.log(dog_names[i])        
        }
        else{
            console.log("No Matches")
        }
}}
checkwords("Hello Max, my name is Dog, and I have purple eyes!", ["Max","HAS","purple","dog"])

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

var given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function removeevens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1, 'even index')
        }
    }
    return arr    
}
console.log(removeevens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//============Codewar Problem 1 ============//
/*
Description:
Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }

//============Codewar Problem 2 ============//

/*
Description:
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need.
Example:
paperwork(5, 5): 25
Note! if n or m < 0 return 0! Waiting for translations and Feedback! Thanks!
*/

function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
  }