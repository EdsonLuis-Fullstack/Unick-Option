
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
const gradientTexts = document.querySelectorAll(".text-gradient");

gradientTexts.forEach((text) => {
  ScrollTrigger.create({
    trigger: text, 
        start: "top 80%",
        onEnter: () => {
          gsap.to(text, {
            background: "linear-gradient(to right, #B290E9, #391C67)", // Novo gradiente
            duration: 1, // Duração da transição
            ease: "power1.inOut",
          });
        },
  });
});

const elements = document.querySelectorAll(".AnimationFade");


elements.forEach((element, index) => {
    if(index === 2){
        return gsap.from(element, {
            opacity: 0,
            y: 100,
            duration: 1,          
            ease: "power1.out",  
            scrollTrigger: {
              trigger: element,  
              start: "top 50%",    
              end: "top 50%",     
              toggleActions: "play none none none", 
            },
          });
    }
  gsap.from(element, {
    opacity: 0,        
    y: 100,                
    duration: 1,           
    ease: "power1.out",  
    scrollTrigger: {
      trigger: element,     
      start: "top 80%",    
      end: "top 50%",    
      toggleActions: "play none none none", 
    },
  });
});


 });

