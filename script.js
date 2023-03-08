function displayNumber(num){
    result.value+=num;
    console.log(num);
}
function clearBox(){
    result.value="";
}
function evaluateExpression(){
    // exp=result.value;
    // output=eval(exp);
    // result.value=output;
    result.value=eval(result.value)
}
function removeLastitem(){
    currentExp=result.value;
    result.value=currentExp.slice(0,-1)
}