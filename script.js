const exampleBtn = document.getElementById('open');
const inputtxt = document.getElementById('iptxt');

exampleBtn.addEventListener('click', () => {
  window.open('https://wa.me/+91'+inputtxt.value);
});