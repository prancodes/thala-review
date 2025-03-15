let btn = document.querySelector("button");
if (btn) {
  btn.addEventListener("click", () => {
    let input = document.querySelector("#myInput");
    if (!input) {
      console.error("Input element not found");
      return;
    }
    let thala = input.value.replace(/\s/g, ""); // Remove all whitespaces

    let sum = 0;
    for (let num of thala) {
      sum = sum + Number(num);
    }
    let arr = ["thala", "dhoni", "mahi", "777"];

    if (thala.length == 7 || sum == 7 || arr.includes(thala.toLowerCase())) {
      thalaReview();
      setTimeout(() => {
        yesThala(thala, sum);
      }, 1200);
    } else {
      thalaReview();
      setTimeout(noThala, 1200);
    }
  });
} else {
  console.error("Button element not found");
}

function thalaReview() {
  let inframe = document.querySelector("#inside_frame");
  if (inframe) {
    inframe.style.display = "none";
  }
  let review = document.querySelector("#review");
  if (review) {
    review.style.visibility = "visible";
  }
}

function yesThala(thala, sum) {
  let inframe = document.querySelectorAll("#inside_frame, #review");
  inframe.forEach(e => {
    e.style.display = "none";
  });

  let frame = document.querySelector("#frame");
  if (frame) {
    frame.style.padding = "0px 20px 40px 20px";
  }
  
  let text = document.querySelector("#text");
  if (text) {
    if (thala.length == 7) {
      text.innerText = `'${thala}' has 7 Letters`;
    } else if (sum == 7) {
      text.innerText = `Sum of all digits = 7`;
    }
  } else {
    console.error("Text element (#text) not found");
  }

  let videoFrame1 = document.querySelector("#video_frame1");
  if (videoFrame1) {
    videoFrame1.style.display = "block";
  } else {
    console.error("Video frame1 element not found");
  }

  let yesVideo = document.querySelector("#yesThala");
  if (yesVideo) {
    yesVideo.play();
  } else {
    console.error("Video element (#yesThala) not found");
  }

  let footer = document.querySelector("#footer");
  if (footer) {
    footer.style.bottom = "-20%";
  }
}

function noThala() {
  let inframe = document.querySelectorAll("#inside_frame, #review");
  inframe.forEach(e => {
    e.style.display = "none";
  });

  let frame = document.querySelector("#frame");
  if (frame) {
    frame.style.padding = "0px 20px 35px 20px";
  }

  let videoFrame1 = document.querySelector("#video_frame1");
  if (videoFrame1) {
    videoFrame1.style.display = "none";
  }

  let videoFrame2 = document.querySelector("#video_frame2");
  if (videoFrame2) {
    videoFrame2.style.display = "block";
  }
}

let whatsapp = document.querySelector("#whatsapp_tag");
if (whatsapp) {
  whatsapp.addEventListener("click", () => {
    window.open(
      "whatsapp://send?text=Thala fans, this one's for you! 🔥%0AWhat's so special about 7 ? ✨ %0A😎 Check it out here: https://prancodes.github.io/thala-review/ 🏏🎶",
      'data-action="share/whatsapp/share"'
    );
  });
} else {
  console.error("WhatsApp element not found");
}

let X = document.querySelector("#x_tag");
if (X) {
  X.addEventListener("click", () => {
    window.open(
      "https://twitter.com/intent/tweet?text= Thala fans, this one's for you! 🔥%0AWhat's so special about 7 ? ✨ %0A😎 Check it out here: https://prancodes.github.io/thala-review/ 🏏🎶",
      'target="_blank"'
    );
  });
} else {
  console.error("Twitter element not found");
}

let gitRepo = document.querySelector("#git_tag");
if (gitRepo) {
  gitRepo.addEventListener("click", () => {
    window.location.href = "https://github.com/prancodes/thala-review";
  });
} else {
  console.error("GitHub element not found");
}
