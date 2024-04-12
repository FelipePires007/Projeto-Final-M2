$(document).ready(function() {
    $('#donationForm').submit(function(e) {
        e.preventDefault();

        var formData = $(this).serialize();
        var amount = $('#amount').val();

        // Simulação de envio do formulário
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
        setTimeout(function() {
            $('#donationForm').hide();
            $('#confirmationMessage').html('Obrigado por sua doação de R$' + amount +  " reais").show();
            
            // Exibindo mensagem de redirecionamento
            

            // Redirecionamento para ../html/links.html após 5 segundos (5000 milissegundos)
            setTimeout(function() {
                window.location.href = "../html/home.html";
            }, 5000); // 5 segundos
        }, 1000); // Tempo para a simulação da doação (1 segundo)
    });
});