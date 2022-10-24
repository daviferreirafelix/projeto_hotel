const iconeMenuMobile = document.getElementById("iconeMenuMobile");

iconeMenuMobile.addEventListener('click', function mostrarMenu(){

    const nav = document.querySelector("#nav");
    nav.classList.toggle("navegacao");

    if (nav.classList.contains("navegacao")){
        
    document.getElementById("logoMobile").style.display = 'none';   
    
} else {

    document.getElementById("logoMobile").style.display = 'block'; 
}
});