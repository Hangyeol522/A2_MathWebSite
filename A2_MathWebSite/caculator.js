function addNum() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    var res = document.getElementById("result");
    res.value = num1 + num2;
}

function multiplyNum() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    var res = document.getElementById("result");
    res.value = num1 * num2;
}