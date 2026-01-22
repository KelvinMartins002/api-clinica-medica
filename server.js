require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./src/models/index");

app.use(express.json());

// Rotas
app.use("/pacientes", require("./src/routes/pacientes"));
app.use("/medicos", require("./src/routes/medicos"));
app.use("/planos", require("./src/routes/planos"));
app.use("/consultas", require("./src/routes/consultas"));
app.use("/pagamentos", require("./src/routes/pagamentos"));
app.use("/receitas", require("./src/routes/receitas"));

app.get("/", (req, res) => res.send("Clinic API funcionando no Windows!"));

// Inicia servidor
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Banco sincronizado com sucesso.");
    app.listen(process.env.PORT, () =>
      console.log("Servidor rodando na porta " + process.env.PORT)
    );
  })
  .catch((err) => console.error("Erro ao sincronizar DB:", err));
