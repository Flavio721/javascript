/*alert('Olá mundo!')
confirm('Está gostando de JS?'): Botão ok e cancel
prompt('Qual seu nome? '): Forma de escrever*/
/*alert(10*5)*/
console.log('Oi, isso é um console.log');
/* 4 formas de saida do JS: inner.HTML, alert, console.log e document.write*/
let a,b,c; a = 5; b = 7; c = 9;
/* let a,b,c;
a = 5;
b = 7;
c = 9; outra forma de escrever */
function minhaFunçao(){
    document.write(9);
    document.write(9);
    document.write(9);
    document.write(9);}
/* Funções */ 

/* Sintaxe:
console.log(5 * 5); --> 10
console.log("5 * 5"); --> 5 * 5
Sem áspas o JS entende como um número, com áspas o JS entende como uma string
var a = 5;
var b = 1;
var c = a + b;
console.log(c) --> 6
var PESSOA é != var pessoa e != var Pessoa
Var está errado, var está certo
*/


/* Variáveis:
No JavaScript temos 3 formas de declarar variáveis:
-> var
-> let
-> const 

var a = 1;
var b = 2;
var c= a + b;
console.log(c) -> Vai aparecer no console o valor da variável c
*/
var pote = "Bombom";
/*alert(pote); -> Alerta com o valor da variável pote*/

var n1 = 1;
var n2 = 2;
var n3 = n1 + n2;
console.log(n3) /*-> Vai aparecer no console o valor da variável s*/

/* Forma mais organizada de declarar variáveis */
var n4,n5,n6; n4 = 1; n5 = 2; n6 = n4 * n5;
console.log(n6)

var nome, sobrenome, nomeCompleto;
nome = "Flávio";
sobrenome = "Inocêncio";
nomeCompleto = nome + " " + sobrenome;

document.getElementById("textos").innerHTML = nomeCompleto;
console.log(nomeCompleto)