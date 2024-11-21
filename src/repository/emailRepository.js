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

  // Configurar o conteúdo do e-mail com estilização
  const mailOptions = {
    from: process.env.EMAIL_USER, // Seu e-mail remetente
    to: email, // Destinatário (vem do parâmetro passado)
    subject: "Confirmação de Presença",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
        <h2 style="color: #4CAF50; text-align: center;">Confirmação de Presença</h2>
        <p>Olá,</p>
        <p>Seu número de identificação é: <strong>${id}</strong>.</p>
        <p>Clique no botão abaixo para confirmar sua presença na sessão:</p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="http://4.172.207.208:3042/confirmar" 
             style="display: inline-block; background-color: #4CAF50; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Confirmar Presença
          </a>
        </div>
        <p style="font-size: 0.9em; color: #555;">Se você não solicitou este e-mail, ignore esta mensagem.</p>
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
        <footer style="text-align: center; font-size: 0.8em; color: #888;">
          &copy; 2024 Sua Empresa - Todos os direitos reservados.
        </footer>
      </div>
    `,
  };

  // Enviar o e-mail
  await transporter.sendMail(mailOptions);
}
