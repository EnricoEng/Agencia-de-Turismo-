function fetchAPIsEventos() {
    // Substitua 'url-da-sua-api' pela URL da API de onde você deseja buscar os dados dos eventos
    var url = 'https://register-event.onrender.com/events';

    // Faça uma requisição HTTP GET para a URL da API
    fetch(url)
        .then(response => response.json())  // Converta a resposta em JSON
        .then(data => {  // Manipule os dados recebidos
            // 'data' é um objeto JavaScript que contém os dados recebidos da API

            // Você pode agora usar esses dados para preencher a grade de eventos
            // Por exemplo, você pode criar um novo elemento div para cada evento e adicionar esse div à grade
            var gridContainer = document.getElementById('grid-container');
            data.content.forEach(evento => {
                var gridItem = document.createElement('div');
                gridItem.className = 'grid-item';
                gridItem.innerHTML = '<img src="' + evento.imagem + '" alt="' + evento.name + '">' +
                                     '<p>' + evento.name + '</p>' +
                                     '<p>' + evento.startTime + '</p>' +
                                     '<p>Local: ' + evento.place.address + ', ' + evento.place.city + '</p>' +
                                     '<p>Preço: ' + evento.priceTicket + '</p>' +
                                     '<button type="button" onclick="comprar()">Comprar</button>' +
                                     '<button type="button" onclick="cancelar()">Cancelar</button>';
                gridContainer.appendChild(gridItem);
            });
        })
        .catch(error => console.error('Erro:', error));  // Trate quaisquer erros que possam ocorrer
}