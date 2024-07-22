function sendEmail(email, subject, body) {
  return new Promise((resolve, reject) => {
    if (!email || !subject || !body) {
      reject(new Error("Error: Hacen falta campos para enviar el email"));
    } else {
      setTimeout(() => resolve({ email, subject, body }), 2000);
    }
  });
}

sendEmail("test@mail.com", "", "Únete a los 30 días de JS")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
sendEmail("test@mail.com", "Nuevo reto", "Únete a los 30 días de JS").then(
  (result) => console.log(result)
);
