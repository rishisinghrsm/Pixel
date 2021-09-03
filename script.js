let socal = document.getElementsByClassName("social")[0];
let body = document.getElementsByTagName("body")[0];
let navbar=document.getElementsByClassName("navbar")[0];
let arrow =document.getElementsByClassName("arrow")[0];
let pixel=document.getElementsByClassName("pixel")[0]

socal.addEventListener("click", ()=>{
    
    // body.style.backgroundColor="black";
    if(body.style.backgroundColor =="white"){
        socal.innerHTML='<i class="fa fa-sun"></i>'

        body.style.backgroundColor ="#152238"
        body.style.color ="white"
        navbar.style.backgroundColor ="#1c2e4a"
        socal.style.color ="white"
        pixel.style.color =" rgb(21, 34, 56)"

        
      
    }else{
        body.style.backgroundColor ="white" 
        body.style.color ="black"
        navbar.style.backgroundColor ="#dc3545"
        
       
        socal.innerHTML='<i class="fa fa-moon"></i>'
        pixel.style.color ="white"
       
    }
});
arrow.addEventListener('click',()=>{
    if(arrow.className=="fa fa-angle-double-down "){
        arrow.className="fa fa-angle-double-up "
       
        arrow.style.color ="white"
        
        console.log("up");
    }else{
        arrow.className="fa fa-angle-double-down "
        arrow.style.color ="white"
        console.log("down");

    }
})