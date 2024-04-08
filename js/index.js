if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "./html/signin.html"; // Redireciona para signin.html dentro da pasta html
} else {
    // Redireciona para a página de links após o login bem-sucedido
    window.location.href = "./html/links.html"; // Redireciona para links.html dentro da pasta html
}
