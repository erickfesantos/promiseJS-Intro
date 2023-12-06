let caixa = document.querySelector("div");

let promessa = new Promise((vdd, fal)=>{
  setTimeout(()=>{
    let destino = Math.random();
    if(destino>0.5){
      vdd("Deu tudo certo!");
    }else{
      fal("Deu tudo errado!");
    }
  },2000);
});

promessa.then((retorno)=>{
  caixa.innerHTML=retorno;
  caixa.classList.add("certo");
});

promessa.catch((retorno)=>{
  caixa.innerHTML=retorno;
  caixa.classList.add("errado");
});



caixa.innerHTML="Processando...";