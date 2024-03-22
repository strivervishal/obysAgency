
function timeLine() {
     let tl = gsap.timeline({ 
          scrollTrigger:{
          trigger:"#home",
          start:"top top",
          scrub:1,
          // markers: true,
          pin:true,
          end:"bottom -260%",
      }});
      
      // use flag for connected animation 
      tl.to("#circle #bottom img",{
           scale:1,
           rotate: "-180deg",
           stagger:0.1,
           ease:Power1
      },"flag")
      
      .to("#circle #top img",{
           scale:1,
           ease:Power1,
      },"flag")
      
      .to("#cimg img",{
           scale: "0",
           stagger:0.1,
           ease:Power1,
      },"flag")
      .to("#center-img h5",{
           opacity: 0 ,
           duration:1,
           stagger:0.1,
           ease:Power1
      },"flag")
      
      .to("#circle",{
           scale:0,
           ease:Power1,
           duration:2
      })
      
      .to("#semi-circle",{
           scale:0, 
           ease:Power1,
           duration:2
      },"hello")
      
      .to("#overlay #gallery1",{
            bottom:"-50%",
           ease:Power1
      },"flag")
      
      .to("#gola",{
            top:"50%",
            scale:2,
           ease:Power1,
           duration:2
      },"flag")
      
      .to("#gola",{
            opacity:0,
            scale:0,
            duration:2,
           ease:Power1
      },"hello")
      
      .to("#pink-flare",{
           rotate:0,
           bottom:"4%",
           ease:Power1,
      })
      .to("#pinkpart",{
           top:"0%",
           ease:Power1,
           duration:5
      },"h1")
      .to("#pinkpart",{
           top:"-65%",
           ease:Power1,
           duration:3
      })
      
      
}

function timeLine1() {
     let tl1 = gsap.timeline({
          scrollTrigger:{
               trigger:"#second",
               start:"top top",
               // markers: true,
               pin:true,
               scrub:1,
              end:"bottom -150%"
          }
     });

     tl1
     .to(".circle",{
          top:"50%",
          ease:Power1,
          stagger:0.1,
          scale:2,
          duration:5
     
     },"a")
     .to(".circle",{
          left:"50%",
          ease:Power1,
          stagger:0.2,
          duration:1,
     })
     .to(".pnk",{
          ease:Power1,
          stagger:0.1,
          scale:10,
          scrub:1,
          duration:3
     })
     .to(".pnk",{
          ease:Power1,
          background:"linear-gradient(to right,#d5a7b4,#B4AAD5)",
          // duration:1

     })
     .to("#second-top h1",{
          left:"-185%",
          ease:Power1,
          duration:10
     })
     .to("#second-btm #one",{
          opacity:0,
          ease:Power1,
          duration:5,
          delay:2
     })
     .to("#second-btm #two",{
          opacity:1,
          ease:Power1,
          duration:5,
     })

    .to ("#second-top #parent",{
            top:"0%",
            scrub:1,
            ease:Power1,
            color:"#fff"
          
    })
    .to("#second-top .set-stagger",{
            top:"0%",
            ease:Power1,
            stagger:1.5,
            duration:8
    })
    
    .to ("#second-top #parent #set-box1",{
          //   delay:0.6,
            top:"0%",
            scrub:1,
            ease:Power1,
            
    })
    .to ("#second-top #parent #set-box2",{
          //   delay:0.5,
            top:"0%",
            scrub:1,
            ease:Power1
    })
    .to ("#second-top #parent #set-box3",{
          //   delay:0.4,
            top:"0%",
            scrub:1,
            ease:Power1
    })
    .to ("#second-top #parent #set-box4",{
          //   delay:0.3,
            top:"0%",
            scrub:1,
            ease:Power1
    })
    .to ("#second-top #parent #set-box5",{
          //   delay:0.2,
            top:"0%",
            scrub:1,
            ease:Power1
    })
     
    
}
// function call
timeLine();
timeLine1();

