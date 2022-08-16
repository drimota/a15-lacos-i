// Utilizando o laço `while`, escreva um código que recebe
//  um `prompt` perguntando se a pessoa deseja comer mais coxinhas.
//   “S” deve representar “sim”, e “N” deve representar “não”. 
//  Crie também uma `let conta` para guardar o valor total.


let ask = prompt("Você quer mais coxinhas?")
let contas = 0

while (ask !== "não") {
    contas = contas + 2.50
    ask = prompt("Você quer mais coxinhas?")
}

console.log(contas)






// Toda vez que a resposta for **sim**, o laço deve se repetir, 
// e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, 
// devemos imprimir o valor total da conta.