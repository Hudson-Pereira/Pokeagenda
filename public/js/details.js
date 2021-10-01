const fechar = document.querySelector("#close");
const message = document.querySelector("#message");

fechar.addEventListener("click", function(){
    message.style.display = "none";
});