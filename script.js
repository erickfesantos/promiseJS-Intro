let caixa = document.querySelector("div");
let botao = document.querySelector("#botao");

function funPromessa(){
  let promessa = new Promise((vdd, fal)=>{
    setTimeout(()=>{
      let destino = Math.random();
      if(destino>0.6){
        vdd("Deu tudo certo!");
      }else{
        fal("Deu tudo errado!");
      }
    },1000);
  });

  promessa.then((retorno)=>{
    caixa.innerHTML=retorno;
    caixa.classList.remove("errado");
    caixa.classList.add("certo");
  });

  promessa.catch((retorno)=>{
    caixa.innerHTML=retorno;
     caixa.classList.remove("certo");
    caixa.classList.add("errado");
  });
}


botao.addEventListener("click", ()=>{
  caixa.classList.remove("certo", "errado");
  caixa.innerHTML="Processando...";
  funPromessa();
} );


caixa.innerHTML="Esperando...";
