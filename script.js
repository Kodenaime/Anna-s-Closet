

let menu = document.querySelector('#menu-btn');
let nav = document.querySelector('.nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');

}


document.querySelector('#login').onclick = () =>{
    document.querySelector('.form-container').classList.toggle('active');
}

document.querySelector('#close-form').onclick = () =>{
    document.querySelector('.form-container').classList.remove('active');
}


window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

    menu.classList.remove('fa-times');
    nav.classList.remove('active');
} 


window.onload = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
} 

/*home section */

document.querySelector('.home').onmousemove = (e) =>{

    document.querySelectorAll('.parallax').forEach(elm =>{

        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });
};


document.querySelector('.home').onmouseleave = () =>{

    document.querySelectorAll('.parallax').forEach(elm =>{

        elm.style.transform = `translateX(0px) translateY(0px)`;

    });
}; 


var swiper = new Swiper(".goods-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabsCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      991: {
        slidesPerView: 3,
       
      },
    },
  });



  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabsCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      991: {
        slidesPerView: 3,
       
      },
    },
  });