//1. Armazene na variável nome colaboradora o nome Maria e em seguida utilize o console.log() para ver o valor;
//2. Armazene uma soma entre dois números e mostre no console.log o resultado obtido;
//3. Armazene separadamente, TODOS os tipos de dados que vocês aprenderam até o momento; Utilize o console.log(typeof(nomeDaVariavel)) para verificar que interessante.
//4. Armazene o nome chamado Eduarda em uma variável e use a notação de colchete para encontrar o primeiro caractere do nome armazenado. 
// Por exemplo, o primeiro caractere do nome Eduarda é E. No caso, no console.log() deverá aparecer SOMENTE A PRIMEIRA LETRA.

// Crie duas variáveis e compare os valores:
//1. a variavel x é maior que a variavel y?
    //Se for verdadeiro, retornar com a mensagem no console.log(o maior numero é x).
    //Se nao for verdadeira, retornar com a mensagem no console.log (o numero é maior que y);
//1
const nomeColaboradora ="Maria" 
console.log(`O nome da colaboradora é ${nomeColaboradora}`)
//2
const numero1=20;
const numero2=30;
console.log(`O valor entre eles é: ${numero1 + numero2}`)
//3
const string= "nome string"
const int = 11
const float =11.3
const booleanTrue= true
const booleanFalse= false

//4
const nome = "Eduarda"
console.log (nome.charAt(0))

//5

let x= 20
let y= 25
if ( x<y) {
    console.log (`O maior numero é ${x}`)
}
else {
    console.log (`O maior numero é ${y}`)
}