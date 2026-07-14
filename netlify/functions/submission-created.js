const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  // Solo queremos procesar solicitudes POST que vengan de Netlify Forms
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { payload } = JSON.parse(event.body);
    const { data, form_name } = payload;

    // Configurar el transportador de nodemailer usando las variables de entorno
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // ej. tu correo jmoredavid@gmail.com
        pass: process.env.GMAIL_PASS  // Tu contraseña de aplicación de 16 dígitos
      }
    });

    let subject = '';
    let htmlContent = '';

    // Estilos CSS integrados para el correo
    const emailStyles = `
      <style>
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; color: #1f2937; line-height: 1.6; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .header { background-color: #111827; padding: 30px 40px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.025em; }
        .content { padding: 40px; }
        .greeting { font-size: 18px; color: #374151; margin-bottom: 24px; }
        .data-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        .data-table th { text-align: left; padding: 12px 16px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; width: 35%; }
        .data-table td { padding: 12px 16px; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500; font-size: 15px; }
        .btn-download { display: inline-block; background-color: #3b82f6; color: #ffffff !important; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 14px; margin-top: 10px; }
        .footer { background-color: #f9fafb; padding: 20px 40px; text-align: center; font-size: 13px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
      </style>
    `;

    // Helpers para procesar datos
    const formatValue = (val) => {
      if (Array.isArray(val)) return val.join(', ');
      if (typeof val === 'object' && val !== null) return val.url || JSON.stringify(val);
      return val || '-';
    };

    const getFileUrl = (cvField) => {
      if (!cvField) return null;
      if (typeof cvField === 'string') return cvField;
      if (cvField.url) return cvField.url;
      return null;
    };

    if (form_name === 'careers') {
      subject = `[WMC] Nuevo Currículum Recibido: ${data.name || 'Candidato'}`;
      const cvUrl = getFileUrl(data.cv);

      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>${emailStyles}</head>
        <body>
          <div class="container">
            <div class="header">
              <h1>WMC Services - Empleos</h1>
            </div>
            <div class="content">
              <div class="greeting">¡Hola! Has recibido una nueva solicitud de empleo de <strong>${formatValue(data.name)}</strong>.</div>
              <table class="data-table">
                <tr><th>Nombre</th><td>${formatValue(data.name)}</td></tr>
                <tr><th>Teléfono</th><td>${formatValue(data.phone)}</td></tr>
                <tr><th>Disponibilidad</th><td>${formatValue(data.availability)}</td></tr>
                <tr><th>Idiomas</th><td>${formatValue(data.lang)}</td></tr>
                <tr><th>LinkedIn</th><td>${data.linkedin ? `<a href="${data.linkedin}">${data.linkedin}</a>` : '-'}</td></tr>
                <tr><th>Portafolio</th><td>${data.portfolio ? `<a href="${data.portfolio}">${data.portfolio}</a>` : '-'}</td></tr>
              </table>
              ${cvUrl ? `
                <div style="text-align: center; margin-top: 30px;">
                  <p style="color: #6b7280; font-size: 14px; margin-bottom: 15px;">El candidato ha adjuntado su currículum en PDF.</p>
                  <a href="${cvUrl}" class="btn-download" target="_blank">Descargar Currículum</a>
                </div>
              ` : ''}
            </div>
            <div class="footer">
              Este es un correo automático generado por el sistema de reclutamiento de WMC Services.
            </div>
          </div>
        </body>
        </html>
      `;
    } else if (form_name === 'contact') {
      subject = `[WMC] Nuevo Cliente Potencial: ${data.company || 'Contacto'}`;
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>${emailStyles}</head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="background: linear-gradient(to right, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">WMC Services - Ventas</h1>
            </div>
            <div class="content">
              <div class="greeting">¡Excelente noticia! Has recibido un nuevo contacto comercial de <strong>${formatValue(data.company)}</strong>.</div>
              <table class="data-table">
                <tr><th>Empresa</th><td>${formatValue(data.company)}</td></tr>
                <tr><th>Nombre</th><td>${formatValue(data.name)}</td></tr>
                <tr><th>Teléfono</th><td>${formatValue(data.phone)}</td></tr>
                <tr><th>Correo</th><td><a href="mailto:${formatValue(data.email)}">${formatValue(data.email)}</a></td></tr>
                <tr><th>Servicio de Interés</th><td>${formatValue(data.service)}</td></tr>
                <tr><th>Puestos Necesarios</th><td>${formatValue(data.stations)}</td></tr>
              </table>
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${formatValue(data.email)}" class="btn-download" style="background-color: #111827;">Responder al Cliente</a>
              </div>
            </div>
            <div class="footer">
              Este es un correo automático generado por el formulario de contacto de WMC Services.
            </div>
          </div>
        </body>
        </html>
      `;
    } else {
      // Ignorar otros formularios si existen
      return { statusCode: 200, body: "Formulario no soportado por esta función." };
    }

    // Configurar y enviar el correo
    const mailOptions = {
      from: '"WMC Sistema Automático" <' + process.env.GMAIL_USER + '>',
      to: process.env.TARGET_EMAIL || process.env.GMAIL_USER, // A quién se le envía
      subject: subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Correo con diseño enviado exitosamente." })
    };

  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error al enviar el correo." })
    };
  }
};
