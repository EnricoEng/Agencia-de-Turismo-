// Exemplo de como fazer uma requisição GET usando fetch
fetch('https://api.exemplo.com/dados', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Erro:', error);
});

// Exemplo de como fazer uma requisição POST usando fetch
fetch('https://api.exemplo.com/dados', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({chave: 'valor'}),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Erro:', error);
});