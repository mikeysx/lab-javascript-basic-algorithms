// Iteration 1: Names and Input
let hacker1 = "mikey";
let hacker2 = "brad pitt";

console.log(`The driver's name is ${hacker1}`);
console.log(`THe navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.lenght > hacker2.lenght){
    console.log(`The driver has the longest name, it has ${hacker1.length} character`);
  }
  else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++){
    console.log(hacker1[i].toUpperCase());
  }
  
  for (let j = hacker2.length; j >= 0; j--){
    console.log(hacker2[j]);
  }
  
  var myarray = [hacker1, hacker2]
  
  if(myarray= ["brad pitt","mikey"]){
    console.log("The driver's name goes first.")
  }
  
  else if(myarray=["mikey", "brad pitt"]){
    console.log("Yo, the navigator goes first definitely.")
  }
  
  else{
    console.log("What?! You both have the same name?")
  }
  
  