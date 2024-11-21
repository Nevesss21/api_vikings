import nodemailer from "nodemailer";

export async function enviarEmail(email, id) {
  // Configuração do Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Configure no .env
      pass: process.env.EMAIL_PASS,
    },
  });

  // Configurar o conteúdo do e-mail
  const mailOptions = {
    from: process.env.EMAIL_USER, // Seu e-mail remetente
    to: email, // Destinatário (vem do parâmetro passado)
    subject: "Confirmação de Presença",
    html: `
      <p>Olá,</p>
      <p>Clique no link abaixo para confirmar sua presença na sessão:</p>
      <a state=${{ id: id} }href="http://4.172.207.208:3042/confirmar">Confirmar Presença</a>
    `,
  
  };
  

  // Enviar o e-mail
  await transporter.sendMail(mailOptions);
}
