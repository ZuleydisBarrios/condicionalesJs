//Ejercios Condicionales
//Autor: Zuleydis Barrios

//1) Lea un numero entero y determinar si es un numero terminado en 4
/* let num = prompt(); */
let num = 5677824
if (num % 10 == 4) 
    console.log("El numero ingresado termina en 4")
else 
    console.log("El numero ingresado no termina en 4");

//-------------------------------------------------------------------------------------------
//2) Leer un numero entero y determinar si tiene 3 digitos
num = 202
if (num > 99 > 0 && num <= 999) 
    console.log("El numero tiene 3 digitos");
else 
    console.log("El numero no tiene 3 digitos");

//-------------------------------------------------------------------------------------------
//3) Leer un numero entero y determinar si es negativo
num= -0
if(num>=0)
    console.log("El numero ingresado es positivo");
else
    console.log("El numero es negativo");

//-------------------------------------------------------------------------------------------
//4) Leer un numero entero de dos digitos y determinar a cuanto es igual la suma
//de sus digitos
num = 65
dig1 = num/10
dig2 = num % 10
console.log('La suma de sus digitos es ', parseInt(dig1)+dig2 )

//-------------------------------------------------------------------------------------------
//5 Leer un numero entero de dos digitos y determinar si ambos digitos son pares
num = 88
dig1 = parseInt(num/10)
dig2 = num % 10
if(dig1 % 2 == 0  &&  dig2 % 2 == 0)
    console.log("Ambos digitos ingresados son pares")
else
    console.log("No son pares")

//-------------------------------------------------------------------------------------------
//6 Leer un numero entero de dos digitos menor que 20 y determinar si es primo

num = 19
contador = 0
for(i=1; i<=num; i++){
    if(num % i == 0){
        contador = contador + 1;
    }
}
if(contador == 2){
    console.log("El numero ingresado es primo")
}
else{
    console.log("El numero ingresado no es primo")
}

//-------------------------------------------------------------------------------------------
//7 Leer un numero entero determinar si es primo y ademas si es negativo
num = 43
contador = 0

if(num<0)
    numP=num*-1
else
    numP=num

for(i=1; i<= numP; i++){
    if(numP % i == 0){
        contador = contador + 1;
    }
}
if (contador == 2 ){
    if(num < 0 ){
        console.log("El numero ingresado es primo y es negativo")
    }
    else {
         console.log("El numero ingresado es primo y es positivo")
    }
}
else if (contador != 2){
    console.log("El numero ingresado no es primo")
}

//-------------------------------------------------------------------------------------------
//8) Leer un numero entero de 2 digitos y determinar si sus dos digitos son primos
num = 32
digito1 = parseInt(num/10)
digito2 = num % 10
contador = 0
contador2 = 0
for(i=1; i<=9; i++){
    if(digito1 % i == 0)
    contador = contador + 1;
        
    if( digito2 % i == 0){
        contador2 = contador2 + 1;

    }
}
if(contador == 2 && contador2 == 2){
    console.log("Los 2 digitos ingresados son primos")
}
else{
    console.log("Uno o ambos digitos ingresados no son primos")
}

//-------------------------------------------------------------------------------------------
//9) Leer un numero entero de dos digitos y determinar si un digito es multiplo de otro
num= 20

digito1= parseInt(num/10)
digito2= num % 10

if(digito2!=0 && digito1 % digito2 == 0){
    console.log("digito 1 es multiplo de digito 2")
}
else if(digito1!=0 && digito2 % digito1 == 0){
    console.log("digito 2 es multiplo de digito 1")
}
else{
    console.log("No son multiplos lo digitos ingresados")
}

//-------------------------------------------------------------------------------------------
//10. Leer un numero entero de dos digitos y determinar si los digitos son iguales
num= 22

digito1= parseInt(num/10)
digito2= num % 10

if(digito1 == digito2 ){
    console.log("Los digitos son iguales")
}
else{
    console.log("No son iguales")
}


//-------------------------------------------------------------------------------------------
//11. Leer dos numeros enteros y determinar cual es el mayor
num1 = 10;
num2 = 11;

if(num1 > num2){
    console.log("El mayor es ", num1);
}
else{
    console.log("El mayor es ", num2);
}

//-------------------------------------------------------------------------------------------
//12. Leer dos numeros enteros de dos digitos y determinar si tienen digitos comunes
num1 = 12;
num2 = 34;

digito1N1 = parseInt(num1/10)
digito2N1 = num1 % 10

digito1N2 = parseInt(num2/10)
digito2N2 = num2 % 10

if(digito1N1 == digito1N2 || digito1N1 == digito2N2 || 
        digito2N1 == digito1N2 || digito2N1 == digito2N2 ){
    console.log("En los dos numeros ingresados hay digitos comunes");
    }
else{
    console.log("En los numeros ingresados no hay digitos comunes")
}

//-------------------------------------------------------------------------------------------
//13. Leer dos numeros enteros de dos digitos y determinar si la suma de los dos numers origina un numero parseInt

num1 = 21;
num2 = 34;

if ((num1+num2) % 2 == 0) {
    console.log("La suma de los numeros ingresado originó un numero par");
}
else{
    console.log("La suma de los numeros no es un numero par")
}

//-------------------------------------------------------------------------------------------
//14. Leer dos numeros entero de dos digitos y determinar a cuanto es igual la suma de los digitos y determinar
num1 = 22;
num2 = 22;
digito1N1 = parseInt(num1/10)
digito2N1 = num1 % 10

digito1N2 = parseInt(num2/10)
digito2N2 = num2 % 10


console.log( `la suma de los digitos ingresados es de: 
            ${digito1N1 + digito2N1 + digito1N2 + digito2N2}` )

//-------------------------------------------------------------------------------------------
//15. Leer un numero entero de tres digitos y determinar a cuanto es igual la suma de sus digitos
let numTresDigitos = 999;

digito1 = parseInt(numTresDigitos/100)
x = parseInt(numTresDigitos / 10)
digito2 = parseInt(x % 10)
digito3 = numTresDigitos % 10
console.log (`la suma de los digitos ingresados es de: 
                ${digito1 + digito2 + digito3}`)


//-------------------------------------------------------------------------------------------
//16. Leer un numero entero de tres digitos y determinar si al menos dos de sus tres digitos son iguales
numTresDigitos = 117;
digito1 = parseInt(numTresDigitos/100)
x = parseInt(numTresDigitos / 10)
digito2 = parseInt(x % 10)
digito3 = numTresDigitos % 10
if(digito1 == digito2 || digito2 == digito3 || 
    digito3 == digito1){
console.log("En los dos numeros ingresados hay al menos dos digitos comunes");
}
else{
console.log("En los numeros ingresados no hay digitos comunes")
}

//-------------------------------------------------------------------------------------------
//21. Leer tres numeros enteros de dos digitos cada uno y determinar en cual de ellos
//se encuentra el mayor digito

num1 = 53;
num2 = 72;
num3 = 19;

digito1N1 = parseInt(num1/10)
digito2N1 = num1 % 10

if (digito1N1 >= digito2N1){
    console.log('mayor ', digito1N1)
    mayor1=digito1N1
}
else{
    console.log('mayor ', digito2N1)
    mayor1=digito2N1
}
console.log (mayor1)

digito1N2 = parseInt(num2/10)
digito2N2 = num2 % 10
if (digito1N2 >= digito2N2){
    console.log('mayor ', digito1N2)
    mayor2=digito1N2
}
else{
    console.log('mayor ', digito2N2)
    mayor2=digito2N2
}

digito1N3 = parseInt(num3/10)
digito2N3 = num3 % 10
if (digito1N3 >= digito2N3){
    console.log('mayor ', digito1N3)
    mayor3=digito1N2
}
else{
    console.log('mayor ', digito2N3)
    mayor3=digito2N3
}


if(mayor1 >= mayor2 && mayor2 >= mayor3){  
    console.log("El mayor está en el primer numero")
}
else if(mayor2 >= mayor1 && mayor2 >= mayor3 ){
    console.log("El mayor es digito está en el segundo numero")
}
else if(mayor3 >= mayor1 && mayor3 >= mayor2){
    console.log("El mayor es digito está en el tercer numero")
}

//-------------------------------------------------------------------------------------------
//22) 