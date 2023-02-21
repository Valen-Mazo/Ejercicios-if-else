var numeroA = 10;
var numeroB = 5;
var numeroC = 10;

if (numeroA === numeroB && numeroA === numeroC) {
   console.log("TODOS LOS NUMEROS SON IGUALES")
 }else if(numeroA > numeroB){ // se cumple si A es mayor que B
   if(numeroA > numeroC){
     console.log("El número A", numeroA, "es el mayor")
   } else if(numeroC > numeroA){
     console.log("El número C", numeroC, "es el mayor")
   } else{
     console.log("El número A y el número C son iguales", numeroA, numeroC)
   }
 } else if(numeroB > numeroA){ // se cumple si B es mayor que A
   if(numeroB > numC){
     console.log("El número B", numeroB, "es el mayor")
   } else if(numeroC > numeroB){
     console.log("El número C",numeroC,"es el mayor")
   }else {
     console.log("El número B y el C son iguales", numeroB, numeroC)
   }
 } else { 
   console.log("El número B y el A son iguales", numeroA, numeroB)
 }  

