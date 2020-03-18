function palindrome_checker(str){
  return str.split("").reverse().join('') == str  
}
console.log(palindrome_checker('adeda'))