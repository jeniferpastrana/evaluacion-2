
    
(()=>{
    // OBTENEMOS LA SECION DEL LOCALSTORAGE
 const isAuthorizated=localStorage.getItem("isAuthorizated")
 const path =window.location.pathname;



 const routeActive=path.substring(path.lastIndexOf("/")+1)

 const privateRoutes=["adminitracion.html"]
 // si la ruta actual 
 if(privateRoutes.includes(routeActive) && !isAuthorizated){
    console.log("no estas ");
    window.location.href="index.html"

 }
  
})()



const btn=document.getElementById("salir")
localStorage.removeItem("isAuthorizated")
btn.addEventListener("click",()=>{
        console.log("click");
        window.location.href="index.html"

})





