const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors()); // Em produção, configure com { origin: 'https://seu-site.com' }
app.use(express.json());

// Rota principal (GET /)
app.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      nome: "Cadeira Ergonômica Pro",
      preco: 1200,
      categoria: "Móveis e Escritório"
    }
  ]);
});

// Tratamento de rota não encontrada (404)
app.use((req, res) => {
  res.status(404).json({ mensagem: "Rota não encontrada." });
});

// Tratamento de erros globais
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ mensagem: "Erro interno do servidor." });
});

// Inicialização do servidor com suporte a variáveis de ambiente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

