console.log("JS active")
const display_bar=document.getElementById("display-bar")
display_bar.value=""
function appendSign(sign){
    display_bar.value+=sign;
}
function allClear(){
    display_bar.value="";
}
function evaluateDisplay(){
    try{
        display_bar.value=eval(display_bar.value)
    }
    catch{
        alert("Error")
        display_bar.value="ERROR"
    }  
}
function backspace(){
    display_bar.value=display_bar.value.slice(0,(display_bar.value.length-1));
}
