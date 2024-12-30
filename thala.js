let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    let input = document.querySelector("#myInput");
    let thala = input.value.replace(/\s/g, '');  // Remove all whitespaces

    let sum = 0;
    for (let num of thala) {
        sum = sum + Number(num);
    }
    let arr = ['thala','dhoni','mahi','777'];

    if (thala.length == 7 || sum == 7 || arr.includes(thala.toLowerCase())) {
        thalaReview();
        setTimeout(()=>{
            yesThala(thala,sum)
        }, 1200);
    }
    else{
        thalaReview();
        setTimeout(noThala, 1200);
    }
})

function thalaReview() {
    let inframe = document.querySelector("#inside_frame");
    inframe.style.display = "none";

    let review = document.querySelector("#review")
    review.style.visibility = "visible"
}

function yesThala(thala,sum){
    let inframe = document.querySelectorAll("#inside_frame, #review");
    inframe.forEach(e =>{
        e.style.display = "none";
    });

    let frame = document.querySelector("#frame");
    frame.style.padding = "0px 20px 40px 20px";
    if (thala.length == 7) {
        let text = document.querySelector("#text");
        text.innerText = `'${thala}' has 7 Letters`;
    }
    else if (sum == 7) {
        text.innerText = `Sum of all digits = 7`;
    }

    let videoFrame1 = document.querySelector("#video_frame1");
    videoFrame1.style.display = "block";

    document.querySelector("#yesThala").play();

    document.querySelector("#footer").style.bottom = "-20%"
    
}

function noThala(){
    let inframe = document.querySelectorAll("#inside_frame, #review");
    inframe.forEach(e =>{
        e.style.display = "none";
    });

    let frame = document.querySelector("#frame");
    frame.style.padding = "0px 20px 35px 20px";

    let videoFrame1 = document.querySelector("#video_frame1");
    videoFrame1.style.display = "none";

    let videoFrame2 = document.querySelector("#video_frame2");
    videoFrame2.style.display = "block";  
}

let whatsapp = document.querySelector("#whatsapp_tag");
whatsapp.addEventListener("click",()=>{
    window.open("whatsapp://send?text=Thala fans, this one's for you! 🔥%0AWhat's so special about 7 ? ✨ %0A😎 Check it out here: https://prancodes.github.io/thala-review/ 🏏🎶",'data-action="share/whatsapp/share"');
});

let X = document.querySelector("#x_tag");
X.addEventListener("click",()=>{
    window.open("https://twitter.com/intent/tweet?text= Thala fans, this one's for you! 🔥%0AWhat's so special about 7 ? ✨ %0A😎 Check it out here: https://prancodes.github.io/thala-review/ 🏏🎶",'target="_blank"');
});

let gitRepo = document.querySelector("#git_tag");
gitRepo.addEventListener("click", () => {
    window.location.href = "https://github.com/prancodes/thala-review";
});

