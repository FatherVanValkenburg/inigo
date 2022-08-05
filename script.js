alert('Javascript is linked!');
h1element = document.getElementById('title');
h1element.style.color = 'red';
console.log(h1element);
pel = document.querySelector(".Cool")
pel.innerHTML = "my name is inigo montoya. <strong>you killed my father.</strong>"
pel.style.color = "rebeccapurple";
pel.style.font = "times";
console.log(pel.hasAttribute('class'));
pel.setAttribute('class','not-cool');
pen = document.querySelector(".die")
pen.style.color ="red";

run = document.querySelector(".run");
run.style.color = "black";

ael = document.querySelector('.piece')
ael.setAttribute('href', 'https://facebook.com');
ael.setAttribute('target','_blank');
ael.style.color = "black";

hel = document.querySelector('.final');
hel.setAttribute('href', 'http://youtube.com');
hel.setAttribute('target','_blank');
hel.style.color = "black";

pel.setAttribute('class', 'red bold important large-text');
pel.classList.remove('red');
pel.classList.add('special');
const liEls = document.querySelectorAll('.Stab');
console.log(liEls);
//for(let i= 0; i < liEls.length; i++) {
 //   console.log(liEls[i]);
//}

liEls.forEach(function(li) {
    li.style.color = "dark red"
});