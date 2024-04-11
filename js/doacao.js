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
          
          // Redirecionamento para ../html/links.html após 1 segundo (1000 milissegundos)
          setTimeout(function() {
              window.location.href = "../html/links.html";
          }, 1000);
      }, 1000);
  });
});