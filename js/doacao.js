$(document).ready(function() {
    $('#donationForm').submit(function(e) {
      e.preventDefault();
  
      var formData = $(this).serialize();
      var amount = $('#amount').val();
  
      // Simulação de envio do formulário
      // Aqui você pode adicionar a lógica para enviar os dados para o servidor
      setTimeout(function() {
        $('#donationForm').hide();
        $('#confirmationMessage').html('Obrigado por sua doação de R$ ' + amount + '!').show();
      }, 1000);
    });
  });
  