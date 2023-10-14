document.addEventListener("DOMContentLoaded", ()=>{
    const cambio= ()=>{
        const imagen = document.getElementById("imagen");
        if(imagen.src.match(".assets/naruto.jpg")){
            imagen.src = "assets/sasuke.jpg";
        }else{
            imagen.src= "assets/kiss.jpg";
        }
    };
    imagen.addEventListener("click", ()=>{
        cambio();
    })
});