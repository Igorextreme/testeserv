// Importa o módulo 'http' do Node.js para criar o servidor
const http = require('http');

// Cria o servidor usando o método 'createServer' do módulo 'http'
const server = http.createServer((req, res) => {
    // Configura o cabeçalho da resposta para permitir que qualquer aplicação possa acessar o servidor
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    
    // Verifica se o caminho da URL da requisição (req.url) é exatamente '/api'
    if (req.url === '/api') {
        res.end(JSON.stringify({ message: 'Olá, eu sou o servidor' }));
        console.log("Resposta enviada para o cliente");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Rota não encontrada");
    }
});

// Define a porta na qual o servidor vai rodar
const PORT = process.env.PORT || 3000;

// Inicia o servidor na porta definida e escutando em todas as interfaces
server.listen(PORT, '0.0.0.0', () => {
    console.log("Servidor rodando na porta " + PORT);
});
