(() => {

  const birdElement = document.getElementById('birds'),
        birdBtn = document.getElementById('birdToggle'),
        bushesElement = document.getElementById('bushes'),
        bushesBtn = document.getElementById('bushesToggle'),
        firElement = document.getElementById('fir'),
        firBtn = document.getElementById('firToggle'),
        grassElement = document.getElementById('grass'),
        grassBtn = document.getElementById('grassToggle'),
        mapleElement = document.getElementById('maple'),
        mapleBtn = document.getElementById('mapleToggle'),
        riverElement = document.getElementById('river'),
        riverBtn = document.getElementById('riverToggle'),
        rocksElement = document.getElementById('rocks'),
        rocksBtn = document.getElementById('rocksToggle'),
        spruceElement = document.getElementById('spruce'),
        spruceBtn = document.getElementById('spruceToggle'),
        sunElement = document.getElementById('sun'),
        sunBtn = document.getElementById('sunToggle'),
        birdAudTrk = document.getElementById("birdAudio"),
        bushesAudTrk = document.getElementById("bushesAudio"),
        firAudTrk = document.getElementById("firAudio"),
        grassAudTrk = document.getElementById("grassAudio"),
        mapleAudTrk = document.getElementById("mapleAudio"),
        riverAudTrk = document.getElementById("riverAudio"),
        rocksAudTrk = document.getElementById("rocksAudio"),
        spruceAudTrk = document.getElementById("spruceAudio"),
        sunAudTrk = document.getElementById("sunAudio");

// event handling

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

  birdBtn.addEventListener("click", function(){
  if(birdAudTrk.paused){
    birdAudTrk.play();
  } else {
    birdAudTrk.pause();
  }
});

  bushesBtn.addEventListener("click", function(){
  if(bushesAudTrk.paused){
    bushesAudTrk.play();
  } else {
    bushesAudTrk.pause();
  }
});

  firBtn.addEventListener("click", function(){
  if(firAudTrk.paused){
    firAudTrk.play();
  } else {
    firAudTrk.pause();
  }
});

grassBtn.addEventListener("click", function(){
  if(grassAudTrk.paused){
    grassAudTrk.play();
  } else {
    grassAudTrk.pause();
  }
});

mapleBtn.addEventListener("click", function(){
  if(mapleAudTrk.paused){
    mapleAudTrk.play();
  } else {
    mapleAudTrk.pause();
  }
});

riverBtn.addEventListener("click", function(){
  if(riverAudTrk.paused){
    riverAudTrk.play();
  } else {
    riverAudTrk.pause();
  }
});

rocksBtn.addEventListener("click", function(){
  if(rocksAudTrk.paused){
    rocksAudTrk.play();
  } else {
    rocksAudTrk.pause();
  }
});

spruceBtn.addEventListener("click", function(){
  if(spruceAudTrk.paused){
    spruceAudTrk.play();
  } else {
    spruceAudTrk.pause();
  }
});

sunBtn.addEventListener("click", function(){
  if(sunAudTrk.paused){
    sunAudTrk.play();
  } else {
    sunAudTrk.pause();
  }
});

grassAudTrk.volume = 0.2;

})();
