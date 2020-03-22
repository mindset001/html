var textWrapper = document.querySelector('.lji');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.lji .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.lji',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });