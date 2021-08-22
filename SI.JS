function ss() {
    // get weight and height 
    let principal=document.querySelector(".Pp").value;
    let rate=document.querySelector(".Rt").value;
    let time=document.querySelector(".Tp").value;

    let si=(principal*rate*time)/100;
    let amount=principal+si;

    document.querySelector("p").innerHTML="The SI is:"+si+"<br>";
    // document.querySelector("p").innerHTML="The Total Amount is:"+amount+"<br>";
    
 
}
document.querySelector(".bttn").addEventListener("click",ss);
console.log('Hi i am hitesh');