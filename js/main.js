win.addEventListener("scroll", function (e) {
    e.preventDefault();
    winSct = this.scrollY;
    // if(winSct>=400){
    //   document.querySelector("nav").classList.add("sticky")
    // }else{
    //   document.querySelector("nav").classList.remove("sticky")
    // }
    winSct >= 400
      ? document.querySelector(".menu").classList.add("sticky")
      : document.querySelector(".menu").classList.remove("sticky");
    scrollOn(winSct)
  });
  const scrollOn = (sct) => {
    if(sct>=sections[1].offsetTop-300){
      gnbOff();
      navOff();
      document.querySelector(".nav li:nth-child(1)").classList.add("on");
      document.querySelector(".section1").classList.add("on");
      sections[1].classList.add("on");
    }
    
    if(sct>=sections[2].offsetTop-300){
      gnbOff();
      navOff();
      document.querySelector(".nav li:nth-child(2)").classList.add("on");
      document.querySelector(".section2").classList.add("on");
      sections[2].classList.add("on");
    }
  
    if(sct>=sections[3].offsetTop-300){
      gnbOff();
      navOff();
      document.querySelector(".nav li:nth-child(3)").classList.add("on");
      document.querySelector(".section3").classList.add("on");
      sections[3].classList.add("on");
    }
  
    if(sct>=sections[4].offsetTop-300){
      gnbOff();
      navOff();
      document.querySelector(".nav li:nth-child(4)").classList.add("on");
      document.querySelector(".section4").classList.add("on");
    }
  
    if(sct>=sections[5].offsetTop-300){
      gnbOff();
      navOff();
      document.querySelector(".nav li:nth-child(5)").classList.add("on");
      document.querySelector(".section5").classList.add("on");
    }
  
    if(sct>=sections[6].offsetTop-300){
      gnbOff();
      navOff();
      document.querySelector(".nav li:nth-child(6)").classList.add("on");
      document.querySelector(".section16").classList.add("on");
    }
  }