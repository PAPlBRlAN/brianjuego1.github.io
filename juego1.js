document.getElementById('player').addEventListener("mouseover",sumarPuntos);
puntos= 0;
tiempo= 60;
necesario= 30;
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "puntos: <b> " + puntos + "/" + necesario + "</b>"; 
    raudNum = Math.round(Math.random()*500);
    raudNum2 = Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop =raudNum + "px";
    document.getElementById("player").style.marginLeft =raudNum2 + "px";
    if(puntos==30){
        alert("GANASTE!!")
    }

}

function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo:"+tiempo;
    if (tiempo==0){
        alert("perdiste lo siento ");
        tiempo=0;
        puntos=0;
    }

}
 setInterval(restarTiempo,1000);