document
.querySelector('#introBttn')
.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('header').style.display = "none";
  document.querySelector('#intro').style.display = "unset";
  
});