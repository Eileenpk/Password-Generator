const availableCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 1, 2, 3, 4, 5, 6, 7, 8, 9, '!', '@', '#', '$', '%', '^', '&', '*', '?', '>' ] 
    
    function generatePassword(lengthOfPw){ 
    let password1 = "";
    let password2 = "";
    let password3 = "";
    let password4 = "";
    for (let i =0; i < document.querySelector('#pwl').value; i++) {
    let randomChar1 = availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
    password1 += randomChar1
    
    let randomChar2 = availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
    password2 += randomChar2
    
     let randomChar3 = availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
    password3 += randomChar3
    
     let randomChar4 = availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
    password4 += randomChar4 }
    
    document.getElementById("generate-el-1").innerHTML = password1;
    document.getElementById("generate-el-2").innerHTML = password2;
    document.getElementById("generate-el-3").innerHTML = password3;
    document.getElementById("generate-el-4").innerHTML = password4;
  
    }
   
 function setPwLength() {
    return lengthOfPw = document.querySelector('#pwl').value;

 }
