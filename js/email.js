function message(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mensagemto@gmail.com",
        Password : "123456As.",
        To : 'yurileon@hotmail.com.br',
        From : `${document.querySelector('[type="email"]').value}`,
        Subject : `CONTACT: ${document.querySelector('[type="text"]').value[0]}`,
        Body : `
        Nome: ${document.querySelector('[type="text"]').value}
        Email: ${document.querySelector('[type="email"]').value}
        Mensagem: 
        ${document.querySelector('[name="message"]').value}`
    }).then(
      message => alert("Enviado com sucesso!")
    );
}

document.querySelector("#submit").addEventListener("onsubmit", message)