let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    let word = document.querySelector("#myInput");
    let thala = word.value; 
    if (thala.length == 7) {
        yesThala();
    }
    else{
        console.log("no thala");
    }
})

function yesThala(){
    let inframe = document.querySelector("#inside_frame");
    inframe.style.display = "none";

    

    


}

