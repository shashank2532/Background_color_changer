const boxes=document.querySelectorAll(".boxes");

const mainContainer=document.querySelector("body");

const button=document.querySelector("#buty12");

boxes.forEach(box=>{

    box.addEventListener("click",()=>{

    if(box.id==="b1"){
     mainContainer.style.background=window.getComputedStyle(box).backgroundColor;
    
    }
    else if(box.id==="b2"){
        mainContainer.style.background=window.getComputedStyle(box).backgroundColor;
    }
    else if(box.id==="b3"){
       mainContainer.style.background=window.getComputedStyle(box).backgroundColor;
    }
    else if(box.id==="b4"){
        mainContainer.style.background=window.getComputedStyle(box).backgroundColor;
    }

});



});

button.addEventListener("click",()=>{

    mainContainer.style.backgroundColor="#fff";
})