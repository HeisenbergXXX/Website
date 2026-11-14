document.querySelectorAll('.slot').forEach(s=>{const m=s.querySelector('img,video'),bad=()=>s.classList.add('empty');
if(!m)return bad();
if(m.tagName=='IMG'){m.addEventListener('error',bad);if(m.complete&&!m.naturalWidth)bad()}
else{m.querySelector('source').addEventListener('error',bad);setTimeout(()=>m.readyState||bad(),1500)}});
const t=document.getElementById('t');
if(t&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
const s=document.getElementById('s'),v=document.getElementById('v'),t0=Date.now();
setInterval(()=>{const n=Date.now()-t0,e=n/1000|0;
t.textContent=String(e/60|0).padStart(2,'0')+':'+String(e%60).padStart(2,'0');
s.textContent=Math.round(148*Math.min(1,n/3000)*(.97+.03*Math.sin(n/300)));
v.textContent=(25.2-e*.004).toFixed(1)},200)}
