alert("MÉDIA DAS SUAS QUATRO NOTAS!!!");

var nota1 = parseInt(prompt("Por favor, digite sua 1° nota: "));
var nota2 = parseInt(prompt("Por favor, digite sua 2° nota: "));
var nota3 = parseInt(prompt("Por favor, digite sua 3° nota: "));
var nota4 = parseInt(prompt("Por favor, digite sua 4° nota: "));

var mediatotal;
var resposta;

if (nota1 < 0 || nota1 > 10 ||
    nota2 < 0 || nota2 > 10 ||
    nota3 < 0 || nota3 > 10 ||
    nota4 < 0 || nota4 > 10) {
    
        alert("Por favor, digite apenas notas entre os números 0 e 10.");

} else {

    mediatotal = (nota1 + nota2 + nota3 + nota4) / 4;

    if (mediatotal < 5) {
        resposta = "VOCÊ FOI REPROVADO!!!";
    } else if (mediatotal >= 6) {
        resposta = "VOCÊ FOI APROVADO!!!";
    } else {
        resposta = "VOCÊ ESTÁ DE RECUPERAÇÃO";
    }

    alert("Sua média foi: " + mediatotal + ". " + "Portanto: " + resposta);
}