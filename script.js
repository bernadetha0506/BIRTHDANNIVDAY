const screens = [...document.querySelectorAll('.screen')];
function showScreen(id){
  screens.forEach(s=>s.classList.toggle('active',s.id===id));
  window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('[data-next]').forEach(btn=>{
  btn.addEventListener('click',()=>showScreen(btn.dataset.next));
});
document.getElementById('restart').addEventListener('click',()=>showScreen('home'));

// Twinkling night sky
const starBox=document.getElementById('stars');
for(let i=0;i<115;i++){
  const star=document.createElement('span');
  star.className='star';
  star.style.left=(Math.random()*100)+'%';
  star.style.top=(Math.random()*100)+'%';
  star.style.opacity=(.25+Math.random()*.7).toFixed(2);
  star.style.animationDelay=(Math.random()*4)+'s';
  star.style.animationDuration=(2+Math.random()*4)+'s';
  if(Math.random()>.82){star.style.width='3px';star.style.height='3px'}
  starBox.appendChild(star);
}

// Open a YouTube search embedded in the page so the user can choose the official track.
// The song itself is streamed by YouTube; internet and browser playback permissions are required.
const musicButton=document.getElementById('musicButton');
const musicLabel=document.getElementById('musicLabel');
const musicPanel=document.getElementById('musicPanel');
const songFrame=document.getElementById('songFrame');
document.getElementById('closeMusic').addEventListener('click',()=>{
  musicPanel.hidden=true;
  songFrame.src='';
  musicLabel.textContent='Play our song';
});
musicButton.addEventListener('click',()=>{
  if(musicPanel.hidden){
    musicPanel.hidden=false;
    songFrame.src='https://www.youtube-nocookie.com/embed?listType=search&list=Barasuara%20Terbuang%20Dalam%20Waktu';
    musicLabel.textContent='Our song is ready ♡';
  }else{
    musicPanel.hidden=true;
    songFrame.src='';
    musicLabel.textContent='Play our song';
  }
});
