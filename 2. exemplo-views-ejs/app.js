const express = require("express");
const path = require("path");

const app = express();

// 🔹 Configuração EJS
app.set("view engine", "ejs"); //ta falando que o apo vai receber info do ejs
app.set("views", path.join(__dirname, "views"));

// 🔹 Formulário
app.use(express.urlencoded({ extended: true }));

// 🔹 Rotas
const categoriaRoutes = require("./routes/categoriaRoutes");
app.use("/categorias", categoriaRoutes);

// 🔹 Rotas cliente
const clienteRoutes = require("./routes/clienteRoutes");
app.use("/clientes", clienteRoutes);

// 🔹 Rotas fornecedor
const fornecedorRoutes = require("./routes/fornecedorRoutes");
app.use("/fornecedores", fornecedorRoutes);


// 🔹 Home -> rota principal
app.get("/", (req, res) => {
  res.render("index");
});

// 🔹 Servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
