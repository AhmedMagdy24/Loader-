const loadBtn = document.getElementById("btn");


loadBtn.addEventListener("click", function(){
    
    window.location.reload();

})

function stopLoad(){
    loader.style.webkitAnimation = "none"; 
}

