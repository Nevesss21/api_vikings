import { Router } from "express";
const endpoints = Router();
import * as db from "../repository/emailRepository.js";


endpoints.post("/email", async (req, resp) => {
  try {
    const { email, id} = req.body;

    // Validação dos dados
    if (!email || !id) {
      throw new Error("Dados incompletos. Informe 'email' e 'link'.");
    }

    // Chama o repository para enviar o e-mail
    await db.enviarEmail(email, id);

    resp.send({
      message: "E-mail enviado com sucesso!",
    });
  } catch (err) {
    console.error(err);
    resp.status(400).send({
      erro: err.message,
    });
  }
});

export default endpoints;
