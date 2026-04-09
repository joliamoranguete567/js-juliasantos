const express = require("express");
const router = express.Router();

// 🔹 LISTAGEM (SIMULADA)
router.get("/", (req, res) => {

  // Dados FAKE só pra renderizar a tela
  const clientes = [
    { id: 1, nome: "ID" },
    { id: 2, nome: "Nome" },
    { id: 3, nome: "Cpf" },
  ];

  res.render("clientes/index", { clientes });
});

// 🔹 FORM NOVA
router.get("/nova", (req, res) => {
  res.render("clientes/form", { cliente: null });
});

// 🔹 FORM EDITAR (SEM SALVAR)
router.get("/editar/:id", (req, res) => {
  const cliente = {
    id: req.params.id,
    nome: "Cliente Exemplo"
  };

  res.render("clientes/form", { cliente });
});

// 🔹 AÇÃO DO FORM (SEM PROCESSAR)
router.post("/salvar", (req, res) => {

  // 👇 Apenas para mostrar o fluxo
  console.log("Dados recebidos:", req.body);

  // NÃO salva nada
  res.redirect("/clientes");
});

module.exports = router;