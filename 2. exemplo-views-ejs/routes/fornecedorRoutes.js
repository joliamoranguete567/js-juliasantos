const express = require("express");
const router = express.Router();

// 🔹 LISTAGEM (SIMULADA)
router.get("/", (req, res) => {

  // Dados FAKE só pra renderizar a tela
  const fornecedores = [
    { id: 1, nome: "ID" },
    { id: 2, nome: "Nome" },
    { id: 3, nome: "Cnpj" },
  ];

  res.render("fornecedores/index", { fornecedores });
});

// 🔹 FORM NOVA
router.get("/nova", (req, res) => {
  res.render("fornecedores/form", { fornecedor: null });
});

// 🔹 FORM EDITAR (SEM SALVAR)
router.get("/editar/:id", (req, res) => {
  const fornecedor = {
    id: req.params.id,
    nome: "fornecedor Exemplo"
  };

  res.render("fornecedores/form", { categoria });
});

// 🔹 AÇÃO DO FORM (SEM PROCESSAR)
router.post("/salvar", (req, res) => {

  // 👇 Apenas para mostrar o fluxo
  console.log("Dados recebidos:", req.body);

  // NÃO salva nada
  res.redirect("/fornecedores");
});

module.exports = router;