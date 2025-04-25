document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada! Obrigado pelo seu contato.');
    this.reset(); // Limpa o formulário após o envio
});