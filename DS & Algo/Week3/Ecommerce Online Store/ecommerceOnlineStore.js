function ValidateEmail(inputText)
{
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputText.value.match(mailformat))
  {
    //alert("Valid email address!");
    document.getElementById('border').style.borderColor = "initial"
    document.form.text.focus();
    return true;
  }
  else
  {
    //alert("You have entered an invalid email address!");
    document.getElementById('border').style.borderColor = "red"
    document.form.text.focus();
    return false;
  }
}

function countCart(){
    window.location.href="#cart";
}

function searchVeges(){
var s1=document.getElementById('search').value.toUpperCase();
let t=document.querySelectorAll(".panel-primary");
for (var i=0;i<t.length;i++){
    var t1=t[i].querySelectorAll(".title")[0];
    console.log(t1);
    var list=t1.textContent || t1.innerHTML;
    if (list.toUpperCase().indexOf(s1)>-1){
        t[i].style.display="";
    }
    else{
        t[i].style.display="none";
    }
  }
}

var hover=document.querySelectorAll(".panel-primary");
hover.forEach(div=>{
    div.addEventListener("mouseover",()=>{
            div.style.backgroundColor="#b4b4f1";
    })
})
var nohover=document.querySelectorAll(".panel-primary");
console.log(nohover)
nohover.forEach(div=>{
    div.addEventListener("mouseout",()=>{
        div.style.backgroundColor="";
    })
})

function vegeSelect(chnge){
  if (chnge.value =="fruits"){
    document.getElementById("vegetables").style.display="none";
    document.getElementById("fruits").style.display="block"
  } else if(chnge.value =="vegetables"){
    document.getElementById("vegetables").style.display="block";
    document.getElementById("fruits").style.display="none" 
  } else{
    document.getElementById("vegetables").style.display="block";
    document.getElementById("fruits").style.display="block"
  }
}