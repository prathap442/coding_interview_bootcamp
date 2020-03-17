// this is by using forEach loop
function reverseString(str){
  let reversed = "";
  str.split('').forEach((char)=>{
    reversed = char + reversed;
  })
  return reversed
}

console.log(reverseString('prathap'));

// this is by using for of loop
function reversifyString(str){
  let reversed = "";
  for(let character of str.split('')){
     reversed = character + reversed; 
  }
  return reversed;
}

console.log(reversifyString('prathap'));

