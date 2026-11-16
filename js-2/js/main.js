let puntos=0
let numero_ronda=1
const puntos_iniciales = 100
let puntos_necesarios = puntos_iniciales
console.log("puntos=" + puntos)
    console.log ("puntos a batir en esta ronda:"+ puntos_necesarios)
while (numero_ronda <=3) {
    let puntos_ronda = Number(prompt("cuantos puntos hizo en esta ronda"))
if (puntos_ronda >= puntos_necesarios){
    console.log("avanzaste de ronda")
    puntos = puntos + puntos_ronda
    numero_ronda= numero_ronda + 1
    puntos_necesarios= puntos_necesarios*2
    console.log("hiciste " +  puntos  + " puntos en total")
    if (numero_ronda <= 3){   console.log ("puntos a batir en esta ronda:"+ puntos_necesarios)}
}
else{
    console.log("vuelve a intentar")
}
}
console.log("Felicidades, ganaste el juego")