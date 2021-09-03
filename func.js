var innerLeft=document.getElementById("inner-left");
var book=document.getElementById("more");
var innerLeft2=document.getElementById("inner-left2");
var home=document.getElementById("home");
var innerLeft3=document.getElementById("inner-left3");
var about=document.getElementById("about");
var back=document.getElementById("back");
var aboutUs=document.getElementById("aboutUs");
var innerLeft4=document.getElementById("inner-left4");
var GetAddress=document.getElementById("about-more");
var address=document.getElementById("address");
var classes=document.getElementById("classes");
var innerLeft5=document.getElementById("inner-left5");









// .....profile..........
var slide=document.querySelector(".slider");
var leftArrow=document.getElementById("leftArrow");
var rightArrow=document.getElementById("rightArrow");






book.addEventListener("click",function(){
    innerLeft.style.display="none";
    innerLeft2.style.display="inline";
    TweenMax.staggerFrom("form input", 2, {
        delay: 3.8,
        opacity: 0,
        y: -200,
        ease: Expo.easeInOut
  }, 0.1);

 TweenMax.from(".form-heading h1", 2, {
        delay: 1,
        y: 200,
        opacity: 0,
        ease: Expo.easeInOut
  });

  TweenMax.from(".form-para p", 2, {
        delay: 2,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut
  });

  TweenMax.from("form button", 2, {
        delay: 5,
        y: 100,
        opacity: 0,
        ease: Expo.easeInOut
  })

  TweenMax.from("form", 2, {
        x: -200,
        opacity: 0,
        ease: Expo.easeInOut
  })

  TweenMax.from(".logo", 2, {
      delay: 2.5,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
})


});

back.addEventListener("click",function(){
      innerLeft2.style.display="none";
      innerLeft.style.display="inline";
  

      
    TweenMax.from(".logo", 2, {
          delay: 2.5,
          y: 20,
          opacity: 0,
          ease: Expo.easeInOut
    })


    TweenMax.from(".inner-left2 .back button", 2, {
      delay: 2.5,
      y: 20,
      opacity: 0,
      ease: Expo.easeInOut
})

    TweenMax.from(".buy", 2, {
          delay: 2.8,
          y: 20,
          opacity: 0,
          ease: Expo.easeInOut
    })

    TweenMax.from(".year", 2, {
          delay: 3.1,
          y: 20,
          opacity: 0,
          ease: Expo.easeInOut
    })

    TweenMax.from(".album-name", 2, {
          delay: 2.4,
          y: 20,
          opacity: 0,
          ease: Expo.easeInOut
    })

    TweenMax.from(".album-artist", 2, {
          delay: 2.6,
          y: 20,
          opacity: 0,
          ease: Expo.easeInOut
    })
});


home.addEventListener("click",function(){
      innerLeft.style.display="inline";
      innerLeft2.style.display="none";
      innerLeft3.style.display="none";
      innerLeft4.style.display="none";
      innerLeft5.style.display="none";


      TweenMax.from(".logo", 2, {
            delay: 2.5,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      })
  
  
      TweenMax.from(".inner-left2 .back button", 2, {
        delay: 2.5,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut
  })
  
      TweenMax.from(".buy", 2, {
            delay: 2.8,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      })
  
      TweenMax.from(".year", 2, {
            delay: 3.1,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      })
  
      TweenMax.from(".album-name", 2, {
            delay: 2.4,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      })
  
      TweenMax.from(".album-artist", 2, {
            delay: 2.6,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      })



});




// ...........our teams......
about.addEventListener("click",function(){
    innerLeft.style.display="none";
    innerLeft2.style.display="none";
    innerLeft3.style.display="inline";
    innerLeft4.style.display="none";
    innerLeft5.style.display="none";
    
innerLeft5.style.display="none";
    TweenMax.from(".inner-left3 h1", 2, {
      delay: 1,
      y: 200,
      opacity: 0,
      ease: Expo.easeInOut
});

TweenMax.from(" .inner-left3 .container", 2, {
      delay: 2,
      x: -2000,
      opacity: 0,
      ease: Expo.easeInOut
});


TweenMax.from(".inner-left3 .container .buttons", 2, {
      delay: 3.2,
      x: -200,
      opacity: 0,
      ease: Expo.easeInOut
});


TweenMax.from(" .photo-container", 2, {
      delay: 3.9,
      opacity: 0,
      ease: Expo.easeInOut
});

TweenMax.from(".makeup-name h2", 2, {
      delay: 3.9,
      y: -200,
      opacity: 0,
      ease: Expo.easeInOut
});

TweenMax.from(".designation p", 2, {
      delay: 4.5,
      y: -200,
      opacity: 0,
      ease: Expo.easeInOut
});


TweenMax.staggerFrom(" .profile-media ul li ", 2, {
      delay: 5,
      opacity: 0,
      y: 500,
      ease: Expo.easeInOut
}, 0.1);

})






// ....................profile functions......................
let x=0;

rightArrow.onclick=function(){
    if(x>"-1305"){
        x-=435;
        slide.style.top=x+"px";
    }
}

leftArrow.addEventListener("click",function(){
    if(x<0){
        x+=435;
        slide.style.top=x+"px";
    }
});









// ...............................about us page.......................

aboutUs.addEventListener("click",function(){
      innerLeft.style.display="none";
      innerLeft2.style.display="none";
      innerLeft3.style.display="none";
      innerLeft4.style.display="inline";
      innerLeft5.style.display="none";

      TweenMax.from(" .inner-left4 h1", 2, {
            delay: 1,
            opacity: 0,
            y:-500,
            ease: Expo.easeInOut
      });
      
      TweenMax.from(".inner-left4 .about-container", 2, {
            delay: 2,
            x: -2000,
            opacity: 0,
            ease: Expo.easeInOut
      });
      
      TweenMax.from(" .inner-left4 .about-container p", 2, {
            delay: 3,
            y: -200,
            opacity: 0,
            ease: Expo.easeInOut
      });
      
      TweenMax.from(" .inner-left4 .about-container button", 2, {
            delay: 4,
            y: -2000,
            opacity: 0,
            ease: Expo.easeInOut
      });

      TweenMax.staggerFrom(" .inner-left4 .address-about ul li ", 2, {
            delay: 5,
            opacity: 0,
            x: -2000,
            ease: Expo.easeInOut
      },0.1);
      


   


})




GetAddress.addEventListener("click",function(){
      address.style.display="inline";
      TweenMax.staggerFrom(" .inner-left4 .address-about ul li ", 2, {
            opacity: 0,
            x: -2000,
            ease: Expo.easeInOut
      }, 0.1);
      
});




// .........................classes......................
classes.addEventListener("click",function(){
      innerLeft.style.display="none";
      innerLeft2.style.display="none";
      innerLeft3.style.display="none";
      innerLeft4.style.display="none";
      innerLeft5.style.display="inline";


      TweenMax.from(".inner-left5 h1", 2, {
            delay: 1,
            y: 200,
            opacity: 0,
            ease: Expo.easeInOut
      });
      
      TweenMax.from(" .inner-left5 .container5", 2, {
            delay: 2,
            x: -2000,
            opacity: 0,
            ease: Expo.easeInOut
      });
      
      TweenMax.from(" .inner-left5 .container5 .slider5 .class-content .class-photo", 2, {
            delay: 2.5,
            y: -2000,
            opacity: 0,
            ease: Expo.easeInOut
      });

      TweenMax.from(".inner-left5 .container5 .slider5 .class-content .class-detail .inner-detail", 2, {
            delay: 3.5,
            y: -500,
            opacity: 0,
            ease: Expo.easeInOut
      });
      
      TweenMax.from(" .inner-left5 .container5 .slider5 .class-content .class-detail button", 2, {
            delay: 4.5,
            y: -200,
            opacity: 0,
            ease: Expo.easeInOut
      });
      
      TweenMax.from(".inner-left5 .button-container5 .buttons5", 2, {
            delay: 5.5,
            y: 50,
            opacity: 0,
            ease: Expo.easeInOut
      });



});






// ..........................class slider.....................

var slide5=document.querySelector(".slider5");
var leftArrow5=document.getElementById("leftArrow5");
var rightArrow5=document.getElementById("rightArrow5");


let y=0;

rightArrow5.onclick=function(){
    if(y>"-1600"){
        y-=400;
        slide5.style.left=y+"px";
    }
}

leftArrow5.addEventListener("click",function(){
    if(y<0){
        y+=400;
        slide5.style.left=y+"px";
    }
});
