const fechar = document.querySelector("#close");
const message = document.querySelector("#message");

setTimeout(() => {
    message.style.display= "none";
    }, 5000);

fechar.addEventListener("click", function(){
    message.style.display = "none";
});
