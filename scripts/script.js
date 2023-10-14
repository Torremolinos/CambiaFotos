document.addEventListener("DOMContentLoaded", ()=>{
    const cambio= ()=>{
        const titulo = document.getElementById("titulo");
        const imagen = document.getElementById("imagen");
        if(imagen.src.match(".assets/naruto.jpg")){
            titulo.textContent= `Ten cuidao no pulses mucho`;
            imagen.src = "assets/sasuke.jpg";
        }else{
            titulo.textContent= `Te lo dije`;
            imagen.src= "assets/kiss.jpg";
        }
    };
    imagen.addEventListener("click", ()=>{
        cambio();
    })
});