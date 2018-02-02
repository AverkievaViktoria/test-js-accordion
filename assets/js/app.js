var accordion = (function () {
  let trigger = document.getElementsByClassName('accordion__trigger');
  let inner = document.getElementsByClassName('accordion__inner');
  let arrow = document.getElementsByClassName('accordion__arrow');

  let innerH = [];
  for (let i=0; i<inner.length; i++) {
    inner[i].classList.add('active');  
    innerH[i] = inner[i].clientHeight || inner[i].offsetHeight;
    inner[i].classList.remove('active');  
console.log(innerH[i]);    
  }  
 inner[0].classList.add('active');   
  for (let i=0; i<trigger.length; i++) {
    //trigger[i].addEventListener('click', function() {
    trigger[i].onclick = function(e) {
      e.preventDefault();
      if (!this.classList.contains('active')) {
        for (let j=0; j<trigger.length; j++) {
          trigger[j].classList.remove('active');
          inner[j].classList.remove('active');
          arrow[j].classList.remove('accordion__arrow-up');
          arrow[j].classList.add('accordion__arrow-down');
        }  
        this.classList.add('active');
        inner[i].classList.add('active');
        arrow[i].classList.remove('accordion__arrow-down');
        arrow[i].classList.add('accordion__arrow-up');       
       
        const DEVIDER = 60;
        const DURATION = 1000;
        let maxH = innerH[i];
        let stepH = maxH/DEVIDER;
        let curH = 0;
        inner[i].style.height = 0+'px';
        animate(function(timePassed) {
          curH = curH + stepH;
console.log(curH);          
          inner[i].style.height = curH + 'px';
        }, DURATION);      
      };
    };
  }
})();

function animate(draw, duration) {
  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    var timePassed = time - start;
    if (timePassed > duration) timePassed = duration;
    draw(timePassed);
    if (timePassed < duration) {
      requestAnimationFrame(animate);
    }
  });
}
