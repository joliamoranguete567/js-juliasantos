const express = require("express");
const router = express.Router();

// 🔹 LISTAGEM (SIMULADA)
router.get("/", (req, res) => {

  // Dados FAKE só pra renderizar a tela
  const categorias = [
    { id: 1, nome: "Categoria A" },
    { id: 2, nome: "Categoria B" },
  ];

  res.render("categorias/index", { categorias });
});

// 🔹 FORM NOVA
router.get("/nova", (req, res) => {
  res.render("categorias/form", { categoria: null });
});

// 🔹 FORM EDITAR (SEM SALVAR)
router.get("/editar/:id", (req, res) => {
  const categoria = {
    id: req.params.id,
    nome: "Categoria Exemplo"
  };

  res.render("categorias/form", { categoria });
});

// 🔹 AÇÃO DO FORM (SEM PROCESSAR)
router.post("/salvar", (req, res) => {

  // 👇 Apenas para mostrar o fluxo
  console.log("Dados recebidos:", req.body);

  // NÃO salva nada
  res.redirect("/categorias");
});

module.exports = router;
