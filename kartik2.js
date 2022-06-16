function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);


function startAnimation() {
  document.querySelector('#firsttitlebg').style.animationPlayState = 'running';
  document.querySelector('.firsttitle').style.animationPlayState = 'running';
  document.querySelector('.button1anim').style.animationPlayState = 'running';
  document.querySelector('.firstmore').style.animationPlayState = 'running';
  document.querySelector('.animsecondimg').style.animationPlayState = 'running';
  document.querySelector('.animsecondbg ').style.animationPlayState = 'running';
  document.querySelector('.animsecondhead').style.animationPlayState = 'running';
  document.querySelector('.button2anim').style.animationPlayState = 'running';
  document.querySelector('.animsecondmore').style.animationPlayState = 'running';
}
window.addEventListener('load', startAnimation);