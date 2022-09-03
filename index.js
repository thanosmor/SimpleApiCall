
let head =  document.querySelector('#header')
let btn = document.getElementById('btn');

btn.addEventListener("click", getQuote);


function getQuote(){



    fetch('https://www.boredapi.com/api/activity/')
    .then((response) => { return response.json()})
    .then((data) => { console.log(data);  head.textContent= data.activity } )

  }
