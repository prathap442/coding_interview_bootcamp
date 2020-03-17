function reverseStringifiser(str){
  return str.split('').reduce((reverse,character)=>{
    return character + reverse;
  },'')
}

console.log(reverseStringifiser('prathap'));