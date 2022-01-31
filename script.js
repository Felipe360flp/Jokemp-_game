var prompt = require('prompt-sync')();

let partidas; // <<< Controle de partidas
let controle =0; // <<< para sair do loop
let leitor=[]; // <<< para verificar se o dígito é válido (int) - um por um.
let opt=0; // <<< Para decidir entre retornar ao jogo ou parar de jogar.
let t; //<<< para verificar se a escolha está entre as opções de jogada.

do{

///////////////////////// MENU  ///////////////////////////////
console.log("------------------Jokempô---------------------");
console.log("*             Regras do jogo:                *");
console.log("*                                            *");
console.log("*   Pedra  - Ganha: Tesoura - Perde: Papel   *");
console.log("*   Papel  - Ganha: Pedra   - Perde: Tesoura *");
console.log("*  Tesoura - Ganha: Papel   - Perde: Pedra   *");
console.log("----------------------------------------------");

/////////////// Escolhendo o número de jogadas////////////////
do{
    console.log("Quantas partidas deseja jogar:\n");
    partidas= prompt("Digite um número de 1 a 5: "); 

////////// Para passar os dígitos para o array leitor/////////
    for(let x=0;x<partidas;x++){ 
        leitor[x] = partidas.charAt(x); 
    }

//////para verificar se alguma letra foi digitada por engano//
    for(let x=0;x<partidas;x++){   
        if(leitor[x]+1<0){
            console.log("Achei uma letra.Loop!");
            break;
        }else{
            console.log("Leitor >>> apenas números");
            controle++;
            break;            
        }
       }
/////////// Para saber se o nº de partidas é válido////////// 
    if(partidas<6){
        console.log("Nº de partidas: "+partidas);
        controle++;
    }else {
        console.log("Dígito inválido!");      
        controle=0;
    }
    
}while(controle<2);

///////////////////// Começando o jogo/////////////////////////
let jogadas=["pedra","papel","tesoura"];
let jogador=0; // armazena pontos do jogador
let pc=0; // armazena pontos do computador
let copia; // para verificar
controle=0;// controle de loop

do{
///////////////////// jogador faz a jogada////////////////////
do{
    console.log("Escolha a opção de jogada:");
    let teclado=prompt("Digite pedra, papel ou tesoura: ");
    t = teclado.toLowerCase(); // <<<<<< t armazena a escolha do jogador
    if(t==="pedra" || t==="papel" || t=== "tesoura")
    {
        controle++;
    }else{
        console.log("Dígito inválido, digite novamente!");
    }
}while(controle===0);

//////////////////// o computador faz a jogada//////////////////
let t2=""; // t2 armazena a escolha do computador
t2 = jogadas[Math.floor(Math.random() * (2-0) +0)];
    
    console.log("jogador: "+t);
    console.log("computador:" + t2);

// checando jogadas e calculando pontos.

if(t===jogadas[0] && t2===jogadas[2] || t===jogadas[1] && t2===jogadas[0] || t===jogadas[2] && t2===jogadas[1]){ 
    jogador++; // >>> Condições de vitória            
}else if(t===t2){ 
     // >>> condição para um empate
}
else{
pc++; // >>> condição contrária = derrota
}
        
console.log("pontos jogador: " + jogador);
console.log("pontos computador: " + pc);
console.log("partida" +partidas);
console.log("controle "+controle);

}while(controle<partidas);

// Contabilizando pontos e declarando vencedor
console.log("----------------------------------------");
console.log("Você venceu " +jogador + " rodada(s).");
console.log("O computador venceu " +pc + " rodada(s).");

if(jogador>pc){
console.log("Parabéns! Você ganhou.");

}else if(jogador===pc){
console.log("Tivemos um empate!");
}
else{
console.log("Você perdeu!");
}

// Para o jogador decidir se quer continuar ou parar
do{
console.log("Gostaria de jogar outra partida?");
opt = +prompt("Digite [1] SIM ou [0] NÃO");

if(opt<0 || opt>1){
    console.log("DÍGITO INVÁLIDO!");
}

}while(opt<0 || opt>1);

}while(opt>=1);
