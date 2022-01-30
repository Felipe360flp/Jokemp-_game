var prompt = require('prompt-sync')();

let partidas; // <<< Controle de partidas
let controle =0; // <<< para sair do loop
let leitor=[]; // <<< para verificar se o dígito é válido (int)

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
controle=0;// controle de loop

do{

///////////////////// jogador faz a jogada////////////////////
    console.log("Escolha a opção de jogada:");
    let teclado=prompt("Digite pedra, papel ou tesoura: ");
    let t = teclado.toLowerCase(); // <<<<<< t armazena a escolha do jogador

//////////////////// o computador faz a jogada//////////////////
let t2=""; // t2 armazena a escolha do computador
t2 = jogadas[Math.floor(Math.random() * (2-0) +0)];
    
    console.log("jogador: "+t);
    console.log("computador:" + t2);

// checando jogadas e calculando pontos.

    
        if(t===jogadas[0] && t2===jogadas[2] || t===jogadas[1] && t2===jogadas[0] || t===jogadas[2] && t2===jogadas[1]){ 
            jogador++; // >>> Condições de vitória
            controle++;
            
        }else if(t===t2){ 
             // >>> condição para um empate
            controle++;
        }
        else{
        pc++; // >>> condição contrária = derrota
        controle++;
        }

}while(controle<partidas);

console.log("pontos jogador: " + jogador);
console.log("pontos computador: " + pc);

// Contabilizando pontos e declarando vencedor

if(jogador>pc){
console.log("Parabéns! Você ganhou.");

}else if(jogador===pc){
console.log("Tivemos um empate!");
}
else{
console.log("Você perdeu!");
}
