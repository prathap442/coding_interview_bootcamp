function anagramFinder(str1,str2){
  let h1 = {} 
  str1.split('').forEach((element)=>{
    h1[element] = (h1[element] + 1) || (h1[element])
  });
  let h2 = {}
  str2.split('').forEach((element)=>{
    h2[element] = (h2[element] + 1) || (h2[element])
  });
  debugger;
  if((Object.keys(h1).sort()) == (Object.keys(h2).sort())){
    h1_keys = Object.keys(str1)
    h1_keys.forEach((h1_key)=>{
      if(h1[h1_key] != h2[h1_key]){
        return false 
      }
    })
    return true
  }
  else{
    return false
  }
}

console.log(anagramFinder('rails','sliar'));


