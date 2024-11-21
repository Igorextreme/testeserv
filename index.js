// Declara a função 'fazerRequisicao' que será chamada para fazer uma requisição ao servidor
function fazerRequisicao() {
    // Usa o método 'fetch' para fazer uma requisição HTTP para o servidor
    // O endereço 'http://localhost:3000/api' é o endpoint que queremos acessar
    // Este endpoint deve responder com dados no formato JSON
    fetch('https://testeserv.onrender.com/api')
        // Quando a resposta é recebida, ela é processada pela primeira função '.then'
        // 'response.json()' converte a resposta do servidor para um objeto JSON
        .then(response => response.json())
        
        // Este segundo '.then' recebe o JSON já convertido da resposta
        // 'data' representa os dados que o servidor enviou de volta (no caso, um objeto com { message: '...' })
        .then(data => {
            // Usamos 'document.getElementById' para selecionar o elemento HTML com o id 'resposta'
            // Esse elemento exibirá a mensagem vinda do servidor
            // 'data.message' é o texto recebido do servidor que queremos mostrar na tela
            document.getElementById('resposta').innerText = data.message;
        })
        
        // '.catch' é usado para capturar erros que possam ocorrer durante a requisição
        // Isso inclui erros como o servidor estar offline ou não responder
        .catch(error => {
            // Exibe uma mensagem de erro no console do navegador para ajudar no debug
            console.error('Erro:', error);
            
            // Mostra um alerta para o usuário informando que o servidor está desconectado
            alert('Servidor desconectado');
        });
}
