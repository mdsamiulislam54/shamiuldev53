

// responsive menu bar start
const menu_bar =document.getElementById('menu_bar')
const menu_btn =document.getElementById('menu_btn')
const close_btn =document.getElementById('close_btn')
menu_btn.addEventListener("click",function(){
  menu_bar.classList.add('block')
  menu_bar.classList.remove('hidden')
  menu_btn.classList.add('hidden')
  close_btn.classList.remove("hidden")
})

close_btn.addEventListener('click',function(){
  
  menu_bar.classList.remove('block')
  menu_bar.classList.add('hidden')
 
  menu_btn.classList.add('block')
  menu_btn.classList.remove('hidden')
  
  close_btn.classList.add("hidden")
  close_btn.classList.remove('block')
})

// responsive menu bar end



  // texttypin code 

document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "  Creative Designer From Bangladesh",
       
    ];
     

    const typingSpeed = 70; 
    const deletingSpeed = 50; 
    const pauseBetweenTexts = 1000; 

    const typingContainer = document.getElementById('typing-container');
    let currentTextIndex = 0;
   

    function typeText(text, index = 0) {
        if (index < text.length) {
            typingContainer.textContent += text.charAt(index);
            setTimeout(() => typeText(text, index + 1), typingSpeed);
        } else {
            setTimeout(() => deleteText(text, text.length), pauseBetweenTexts);
        }
    }

    function deleteText(text, length) {
        if (length > 0) {
            typingContainer.textContent = typingContainer.textContent.slice(0, -1);
            setTimeout(() => deleteText(text, length -1), deletingSpeed);
        } else {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(() => typeText(texts[currentTextIndex]), pauseBetweenTexts);
        }
    }

  
    typeText(texts[currentTextIndex]);
});

// texttypin code  end




// responsive menu bar






  // const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //             entry.target.classList.add('.show_ani');
             
  //         }else{
  //           entry.target.classList.remove('.show_ani')
  //         }
  //     });
  // });
  // const hiddenElements =document.querySelectorAll('.hidden_ani')
  // hiddenElements.forEach(el => observer.observe(el));



// animation aos plugin

AOS.init();
AOS.init({
  offset: 120,
  delay: 0,
  duration: 2000, 
  easing: 'ease-in-out', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'left-right', 
});

// animation aos plugin

// mouse evrnt start
function setProgress(percent, elementId) {
  const circle = document.querySelector(`#${elementId}`).previousElementSibling.querySelector('circle:nth-child(2)');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;

  document.getElementById(elementId).textContent = `${percent}%`;
}
setProgress(90, 'percentage-1');
setProgress(70, 'percentage-2');
setProgress(85, 'percentage-3');
setProgress(60, 'percentage-4');
setProgress(75, 'percentage-5');

// mousemove event end





// jqurey


$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


 
});


