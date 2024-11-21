// Importa o módulo 'http' do Node.js para criar o servidor
// O módulo 'http' permite criar um servidor que pode responder a requisições HTTP (como GET, POST, etc.)
const http = require('http');

// Cria o servidor usando o método 'createServer' do módulo 'http'
// Este método recebe uma função como parâmetro, que será chamada toda vez que o servidor receber uma requisição
const server = http.createServer((req, res) => {
    // A função recebe dois parâmetros:
    // - 'req' (request): contém informações sobre a requisição feita pelo cliente, como o caminho (URL) e o método (GET, POST, etc.)
    // - 'res' (response): é usada para enviar uma resposta de volta ao cliente

    // Configura o cabeçalho da resposta para permitir que qualquer aplicação possa acessar o servidor
    // 'Access-Control-Allow-Origin' com o valor '*' significa que não há restrições de origem para as requisições
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Define o tipo de conteúdo da resposta como JSON
    // 'Content-Type' com o valor 'application/json' informa ao cliente que a resposta é um objeto JSON
    res.setHeader('Content-Type', 'application/json');
    
    // Verifica se o caminho da URL da requisição (req.url) é exatamente '/api'
    // Isso significa que só vamos responder quando a URL for '/api'; qualquer outra URL será ignorada
    if (req.url === '/api') {
        // Se o caminho for '/api', envia uma resposta JSON para o cliente com uma mensagem simples
        // 'res.end()' finaliza e envia a resposta, convertendo o objeto para JSON com JSON.stringify
        res.end(JSON.stringify({ message: 'Olá, eu sou o servidor' }));
        
        // Exibe uma mensagem no console do servidor informando que a resposta foi enviada
        console.log("Resposta enviada para o cliente");
    }
    // Caso a URL não seja '/api', o servidor não envia nenhuma resposta (pode-se adicionar um else para tratar outros caminhos)
});

// Define a porta na qual o servidor vai rodar (3000)
// Isso significa que o servidor estará disponível no endereço 'http://localhost:3000'
const PORT = 80;

// Inicia o servidor na porta definida (3000) e exibe uma mensagem no console informando que o servidor está rodando
server.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});
