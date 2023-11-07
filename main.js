document
.querySelector('#introBttn')
.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('header').style.display = "none";
  document.querySelector('#intro').style.display = "unset";
});
document
.querySelector('#xIcon')
.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('header').style.display = "block";
  document.querySelector('#intro').style.display = "none";
});
document
.querySelector('#workBttn')
.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('header').style.display = "none";
  document.querySelector('#work').style.display = "unset";
});
document
.querySelector('#workClose')
.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('header').style.display = "block";
  document.querySelector('#work').style.display = "none";
});
document
.querySelector('#aboutBttn')
.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('header').style.display = "none";
  document.querySelector('#about').style.display = "unset";
});
document
.querySelector('#aboutClose')
.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('header').style.display = "block";
  document.querySelector('#about').style.display = "none";
});