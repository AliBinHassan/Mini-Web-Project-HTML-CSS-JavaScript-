const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replayBtn = document.getElementById('replay');

/* --- Reset DOM --- */
function resetAnimation() {
  counter.classList.remove('hide', 'show');
  finalMessage.classList.remove('show', 'hide');

  nums.forEach(num => num.className = '');
  nums[0].classList.add('in');
}

/* --- Run Flip Animation --- */
function runAnimation() {
  counter.classList.add('show');

  nums.forEach((num, idx) => {
    num.addEventListener('animationend', (e) => {
      const lastIdx = nums.length - 1;

      if (e.animationName === 'goIn' && idx !== lastIdx) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else if (idx === lastIdx) {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}

/* --- Replay Button --- */
replayBtn.addEventListener('click', () => {
  resetAnimation();
  runAnimation();
});

/* --- Initialize --- */
resetAnimation();
runAnimation();