function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar"); 
}
function redirecionar(){
    window.open("https://google.com");
    //window.location.href = "https://google.com";
}
function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("mais um").innerHTML="Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mais um").innerHTML="Passe o mouse aqui";
}
function load(){
    alert("página carregada");
}
/*function funcaoChange(elemento){
    alert(elemento.value);
}*/
var count = 0;
while (count < 5){
    alert(count);
    count = count + 1;
}

/*
function trocar(){
    //alert("trocar texto");
    document.getElementById("mais um").innerHTML="Obrigado por passar o mouse";
}

function voltar(){
    document.getElementById("mais um").innerHTML="Passe o mouse aqui";
}
*/
/*function soma(n1, n2){
    return n1 + n2;
}
function validaIdade(idade ){
    var validar;
    if (idade >= 18){
        validar = "parabéns, pode passar"
    }else{
        validar = "volte mais tarde, bb"
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
alert(validaIdade(idade));
//alert(soma(5, 10));
*/

/*
var d = new Date();
alert (d.getMinutes());
alert (d.getDay());
alert (d.getHours());
alert (d.getFullYear());
*/
/*var count;
for (count=0; count <= 5; count++){
    alert(count);
};
*/

/*var count = 0;
while (count < 5){
    alert(count);
    count = count + 1;
}
*/
//var idade = 18;
//var idade = prompt("Qual a sua idade?")
//if (idade >= 18){
//    alert("maior de idade");
//}else{
//    alert("menor de idade");
//}

//var frutas = [{nome:"maça", cor:"vermelha"}, {nome: "uva", cor: "roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);
//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);
//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(", "));
//var nome = "Lucas Ap";
//var idade = 27;
//var idade2 = 10;
//var frase = "A Inglaterra é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Inglaterra", "Manchester United"));