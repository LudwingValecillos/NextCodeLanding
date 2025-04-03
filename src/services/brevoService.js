const BREVO_API_KEY = process.env.REACT_APP_BREVO_API_KEY;
const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export const sendEmail = async (formData) => {
  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: formData.name,
          email: "ludwingvaldev@gmail.com",
        },
        to: [
          {
            email: "ludwingvaldev@gmail.com", // Reemplaza con tu email
            name: "Ludwing Valecillos",
          },
        ],
        subject: "Nuevo mensaje de contacto",
        htmlContent: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Teléfono:</strong> ${formData.phone}</p>
          <p><strong>Mensaje:</strong> ${formData.message}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al enviar el mensaje");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al enviar el email:", error);
    throw error;
  }
};
