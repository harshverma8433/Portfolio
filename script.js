let navbar = document.querySelector(".navitems").querySelectorAll("a");

// navbar.forEach(element => {
//     element.addEventListener("click",function(){
//         navbar.forEach(nav => nav.classList.remove("active"))
//         this.classList.add("active");
//     })
// })

navbar.forEach(
  (element) => {
    element.addEventListener(
      "click" , ()=>{
        navbar.forEach(
          (nav) => {
            nav.classList.remove("active");
          }
        )
        this.classList.add("active");
      }
    )
  }
)

window.addEventListener('scroll',function(){

  let a = window.scrollY;

  if(a >= 0 && a<700){
    
    navbar.forEach(
      (nav) => {
        nav.classList.remove("active");
      }
    )
    document.querySelector(".ctive").classList.add("active");
  }

  else if(a>=700&&a<1385){
    navbar.forEach(
      (nav) => {
        nav.classList.remove("active");
      }
    )
      document.querySelector('.about-class').classList.add("active");
  }

  else if(a>=1385&&a<2100){
    navbar.forEach(
      (nav) => {
        nav.classList.remove("active");
      }
    )
      document.querySelector('.skill-class').classList.add("active");
  }

  else if(a>=2100&&a<2800){
    navbar.forEach(
      (nav) => {
        nav.classList.remove("active");
      }
    )
      document.querySelector('.project-class').classList.add("active");
  }

  else if(a>=2800&&a<3500){
    navbar.forEach(
      (nav) => {
        nav.classList.remove("active");
      }
    )
      document.querySelector('.contact-class').classList.add("active");
  }
})




const nav = () => {
  let navitems = document.querySelector(".nav-items");
  let hamb = document.getElementById("hamberger");
  let xmark = document.getElementById("xmark");
  
  navitems.classList.add("animate-ham")
  
  
  if(navitems.style.display === "block"){
    xmark.style.display = "none";
    hamb.style.display = "block";
    navitems.style.display = "none";
  }
  else{
    xmark.style.display = "block";
    navitems.style.display = "block";
    hamb.style.display = "none";
  }
}





// let t = document.querySelectorAll(".loader1");
// console.log(t.length)
// for(let i=0;i<t.length;i++){
    
//     let circularprogress = document.querySelector(".loader");
//     console.log(circularprogress)
//     let progressvalue = document.querySelector(".loader-per");
//     let val = document.getElementById("val").textContent;
//     val = parseInt(val);
//     console.log(val);
//     let progressstartvalue = 0,
//         progressendvalue = val,
//         speed = 50;

//     let progress = setInterval(() => {
//         progressstartvalue++;
//         progressvalue.textContent = `${progressstartvalue}%`
//         circularprogress.style.background = `conic-gradient(#0fa ${progressstartvalue * 3.6}deg,#ededed 0deg)`;
//         if(progressstartvalue === progressendvalue){
//             clearInterval(progress);
//         }
//     }, speed);

// }