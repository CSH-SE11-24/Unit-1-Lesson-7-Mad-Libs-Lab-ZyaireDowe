// Console log a welcome message with instructions to mad libs

console.log("welcome to mad libs")

// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("Give me an adjective")
let pluralnoun = prompt("Give me an plural noun")
let verb= prompt("Give me an verb")
let  adjective2= prompt("Give me an adjective")
// Create an array that stores the values the user entered
let array=[]
array.push(adjective)
array.push(pluralnoun) 
array.push(verb)
array.push(adjective2)

// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive
console.log("in a small ", array[0], "school in the bronx, there was a problem with too many", array[1],".these", array[1],"love to",array[2],", which caused Mr.P so many headach   es.However , no one wanted tp remove them because they were too", array[3],"so they stayed there forever")







