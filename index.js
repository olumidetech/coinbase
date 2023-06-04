const axios = require('axios');

async function axiosGet() {
  const headers = {
    'X-CoinAPI-Key': '91B34A92-F7F6-4D52-BF0D-2E758E1EC4EE'
  };
  axios.get('https://rest.coinapi.io/v1/exchangerate/ETH/USD', {headers})
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
}

axiosGet();

async function axiosPost() {
    const data = {
        name: "Harry",
        age: 30
    }

    axios.post('http://localhost:3000/login', data)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
    
}
axiosPost();
async function fetchGet() {
    const response = await fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
        method: 'GET',
        headers: {
            'X-CoinAPI-Key': '91B34A92-F7F6-4D52-BF0D-2E758E1EC4EE'
        }

});
let answer = await response.json();
console.log(answer);
}

fetchGet();

async function fetchPost() {
    const data = {
        name: "Mike",
        age: 25
    }
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
            });
let answer = await response.json();
console.log(answer);
}
fetchPost();
    
