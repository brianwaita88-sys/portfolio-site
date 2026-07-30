const phrases = ["I'm a Solo builder.", "I'm a Web developer.", "I'm a Product designer.", "I'm a Finance & Economics student."];
let phraseIndex = 0, charIndex = 0, deleting = false;
const typeEl = document.getElementById('typewriter-text');

function type(){
  const current = phrases[phraseIndex];
  if(!deleting){
    typeEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if(charIndex === current.length){
      deleting = true;
      setTimeout(type, 1400);
      return;
    }
  } else {
    typeEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if(charIndex === 0){
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 35 : 70);
}
type();