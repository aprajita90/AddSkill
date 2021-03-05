// Chaining If Else Statements

function testSize(num) {
  if(num<5){
    return "Tiny";
  }else if(num >4 && num<10){
    return "Small";
  }else if(num >9 && num<15){
    return "Medium";
  }else if(num >14 && num<20){
    return "Large";
  }else if(num >19 && num<26){
    return "Huge";
  }
    // Only change code above this line
  }
  
  testSize(7);