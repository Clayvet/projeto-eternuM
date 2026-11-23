
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let destino = document.getElementById("destino").value;
    let data = document.getElementById("data").value;
    let passageiros = document.getElementById("passageiros").value;
    let mensagem = document.getElementById("mensagem").value;

    if (passageiros <= 0) {
        alert("Informe uma quantidade válida de passageiros!");
        return;
    }

    let texto = 
        "Olá! Gostaria de solicitar um orçamento de viagem.%0A%0A" +
        "*Nome:* " + nome + "%0A" +
        "*E-mail:* " + email + "%0A" +
        "*Destino:* " + destino + "%0A" +
        "*Data da viagem:* " + data + "%0A" +
        "*Passageiros:* " + passageiros + "%0A" +
        "*Observações:* " + mensagem;

    let textoFormatado = encodeURIComponent(texto);

    let telefone = "5511999999999";

    let link = "https://wa.me/" + telefone + "?text=" + textoFormatado;

    window.open(link, "_blank");

    alert("Sua solicitação está pronta! Finalize o envio pelo WhatsApp.");

    formulario.reset();

});

