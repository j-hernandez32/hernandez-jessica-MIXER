(() => {
  // FIRST you collect your items in any given section
  const birdElement = document.getElementById('birds');
  const birdBtn = document.getElementById('birdToggle');

  const bushesElement = document.getElementById('bushes');
  const bushesBtn = document.getElementById('bushesToggle');

  const firElement = document.getElementById('fir');
  const firBtn = document.getElementById('firToggle');

  const grassElement = document.getElementById('grass');
  const grassBtn = document.getElementById('grassToggle');

  const mapleElement = document.getElementById('maple');
  const mapleBtn = document.getElementById('mapleToggle');

  const riverElement = document.getElementById('river');
  const riverBtn = document.getElementById('riverToggle');

  const rocksElement = document.getElementById('rocks');
  const rocksBtn = document.getElementById('rocksToggle');

  const spruceElement = document.getElementById('spruce');
  const spruceBtn = document.getElementById('spruceToggle');

  const sunElement = document.getElementById('sun');
  const sunBtn = document.getElementById('sunToggle');

  // let elementBird = document.querySelector("#birds");

  // THIRD you write your function


  // SECOND you add your event handling here

  birdBtn.addEventListener('click', (e) => {
    console.log('you clicked'),
    birdElement.classList.toggle('hidden');
  });

  bushesBtn.addEventListener('click', (e) => {
    console.log('you clicked'),
    bushesElement.classList.toggle('hidden');
  });

  firBtn.addEventListener('click', (e) => {
    console.log('you clicked'),
    firElement.classList.toggle('hidden');
  });

  grassBtn.addEventListener('click', (e) => {
    console.log('you clicked'),
    grassElement.classList.toggle('hidden');
  });

  mapleBtn.addEventListener('click', (e) => {
    console.log('you clicked'),
    mapleElement.classList.toggle('hidden');
  });

  riverBtn.addEventListener('click', (e) => {
    console.log('you clicked'),
    riverElement.classList.toggle('hidden');
  });

  rocksBtn.addEventListener('click', (e) => {
    console.log('you clicked'),
    rocksElement.classList.toggle('hidden');
  });

  spruceBtn.addEventListener('click', (e) => {
    console.log('you clicked'),
    spruceElement.classList.toggle('hidden');
  });

  sunBtn.addEventListener('click', (e) => {
    console.log('you clicked'),
    sunElement.classList.toggle('hidden');
  });

})();
