const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.querySelector('.sr-only').textContent=open?'Cerrar menú':'Abrir menú'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus()}});
document.querySelector('.to-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
document.querySelector('#form').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;if(!form.checkValidity())return form.reportValidity();const d=new FormData(form);const body=[
'SOLICITUD DE INFORMACIÓN — COLABORA DESDE CASA','',`Nombre: ${d.get('nombre')}`,`Edad: ${d.get('edad')}`,`Provincia: ${d.get('provincia')}`,`Teléfono: ${d.get('telefono')}`,`Email: ${d.get('email')}`,`Alta como autónomo/a: ${d.get('autonomo')}`,`Experiencia telefónica: ${d.get('experiencia')}`,`Lugar tranquilo y privado: ${d.get('espacio')}`,`Disponibilidad: ${d.get('disponibilidad')}`
].join('\n');form.querySelector('.status').hidden=false;location.href=`mailto:hola@jacobsistems.com?subject=${encodeURIComponent('Solicitud de información — Colabora desde casa')}&body=${encodeURIComponent(body)}`});
