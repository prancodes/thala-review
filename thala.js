let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    let input = document.querySelector("#myInput");
    let thala = input.value;

    let sum = 0;
    for (let num of thala) {
        sum = sum + Number(num);
    }
    let arr = ['Thala','Dhoni','Mahi'];

    if (thala.length == 7 || sum == 7 || arr.includes(thala)
        ) {
        thalaReview();
        setTimeout(yesThala, 1200);
    }
    else{
        thalaReview();
        setTimeout(noThala, 1200);
    }
})

function yesThala(){
    let inframe = document.querySelectorAll("#inside_frame, #review");
    inframe.forEach(e =>{
        e.style.display = "none";
    });

    let frame = document.querySelector("#frame");
    frame.style.padding = "0px 20px 40px 20px";

    let videoFrame1 = document.querySelector("#video_frame1");
    videoFrame1.style.display = "block";

    document.querySelector("#yesThala").play();

    document.querySelector("#footer").style.bottom = "-30%"
}

function thalaReview() {
    let inframe = document.querySelector("#inside_frame");
    inframe.style.display = "none";

    let review = document.querySelector("#review")
    review.style.visibility = "visible"
}

function noThala(){
    let inframe = document.querySelectorAll("#inside_frame, #review");
    inframe.forEach(e =>{
        e.style.display = "none";
    });

    let frame = document.querySelector("#frame");
    frame.style.padding = "0px 20px 40px 20px";

    let videoFrame1 = document.querySelector("#video_frame1");
    videoFrame1.style.display = "none";

    let videoFrame2 = document.querySelector("#video_frame2");
    videoFrame2.style.display = "block";  
    
        document.querySelector("#footer").style.bottom = "-30%"
}

