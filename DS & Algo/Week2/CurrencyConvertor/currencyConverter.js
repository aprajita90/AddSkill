const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate(){
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;

    fetch(`https://api.exchangeratesapi.io/latest?base=${currOne}`)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        const rateE = data.rates[currTwo];
        rate.innerText = `1 ${currOne} = ${rateE} ${currTwo}`;
        amountTwo.value=(amountOne.value * rateE).toFixed(2);
    })
}

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);
swap.addEventListener('click', ()=>{
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
})

calculate();
