const express = require("express");
const app = express();
const professoresRouter = require("./routers/professoresRouter");

app.use(express.json());
app.use("/professores", professoresRouter);
  
  app.listen(3000, () =>
    console.log('Servidor rodando na porta: 3000'));
  