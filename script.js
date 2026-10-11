const button=document.querySelector('.menu');
const nav=document.getElementById('navlinks');
if(button&&nav){
 const label=button.querySelector('.menu-label'),glyph=button.querySelector('.menu-glyph');
 const closeMenu=(restore=false)=>{
  const wasOpen=nav.classList.contains('open');
  nav.classList.remove('open');
  button.setAttribute('aria-expanded','false');
  button.setAttribute('aria-label','Open navigation');
  if(label)label.textContent='Menu';
  if(glyph)glyph.textContent='☰';
  if(restore&&wasOpen)button.focus();
 };
 const openMenu=()=>{
  nav.classList.add('open');
  button.setAttribute('aria-expanded','true');
  button.setAttribute('aria-label','Close navigation');
  if(label)label.textContent='Close';
  if(glyph)glyph.textContent='×';
  nav.querySelector('a')?.focus();
 };
 button.addEventListener('click',()=>nav.classList.contains('open')?closeMenu(true):openMenu());
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu(true)});
 document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!button.contains(e.target))closeMenu()});
 window.addEventListener('resize',()=>{if(window.innerWidth>1080)closeMenu()});
}
