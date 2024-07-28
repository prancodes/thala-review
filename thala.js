let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    let word = document.querySelector("#myInput");
    let thala = word.value; 
    if (thala.length == 7) {
        yesThala();
    }
    else{
        noThala();
    }
})

function yesThala(){
    let inframe = document.querySelector("#inside_frame");
    inframe.style.display = "none";

    let frame = document.querySelector("#frame");
    frame.style.padding = "0px 20px 40px 20px";

    let videoFrame1 = document.querySelector("#video_frame1");
    videoFrame1.style.visibility = "visible";

    document.querySelector("#yesThala").play();
}

function noThala(){
    let inframe = document.querySelector("#inside_frame");
    inframe.style.display = "none";

    let frame = document.querySelector("#frame");
    frame.style.padding = "0px 20px 40px 20px";

    let videoFrame1 = document.querySelector("#video_frame1");
    videoFrame1.style.display = "none";

    let videoFrame2 = document.querySelector("#video_frame2");
    videoFrame2.style.visibility = "visible";    
}

