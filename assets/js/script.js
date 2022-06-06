console.log("Funcionando")

// Contador utilzando onclick html

var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
    cor(currentNumber)

}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
    cor(currentNumber)
}

function cor(currentNumber){
    if(currentNumber >=0)
    document.getElementById("currentNumber").style.color='blue'
    else
    document.getElementById("currentNumber").style.color='red'
 }

// Contador utilzando  addEventListener

var currentWrap = document.getElementById('currentN')
var impressao = document.getElementById('currentN').innerHTML
var count = 0

document.getElementById('somar').addEventListener('click', acrescao)

function acrescao(){
    count ++
    currentWrap.innerHTML = count
    cores(count)
}

document.getElementById('subtrair').addEventListener('click', decrescer)

function decrescer(){
    count --
    currentWrap.innerHTML = count
    cores(count)
}

function cores(count){
    if(count >=0)
    document.getElementById("currentN").style.color='blue'
    else
    document.getElementById("currentN").style.color='red'
}





