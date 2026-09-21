const lines = [
  "> Iniciando sistema...",
  "> Cargando módulo: recuerdos.exe",
  "> Buscando a la persona más especial...",
  "> Persona encontrada: GIULIANA ❤️",
  "",
  "> Analizando sentimientos...",
  "  amor: ∞",
  "  felicidad: ∞",
  "  ganas_de_abrazarte: true",
  "",
  "> Compilando regalo...",
];

let i=0, char=0, text="", timer;
const out=document.getElementById("terminalText");
const progress=document.getElementById("progress");
const fill=document.getElementById("fill");
const percent=document.getElementById("percent");

function typeLine(){
  if(i>=lines.length){ startProgress(); return; }
  if(char<lines[i].length){
    text += lines[i][char++];
    out.textContent=text;
    timer=setTimeout(typeLine, 24);
  } else {
    text+="\n"; i++; char=0;
    timer=setTimeout(typeLine, 150);
  }
}
function startProgress(){
  progress.classList.remove("hidden");
  let n=0;
  const p=setInterval(()=>{
    n += Math.floor(Math.random()*7)+3;
    if(n>=100){n=100;clearInterval(p);setTimeout(showGift,500);}
    fill.style.width=n+"%"; percent.textContent=n+"%";
  },110);
}
function showGift(){
  document.getElementById("boot").classList.add("hidden");
  document.getElementById("gift").classList.remove("hidden");
  fireworks();
}
function fireworks(){
  const box=document.getElementById("fireworks");
  for(let k=0;k<55;k++){
    const p=document.createElement("span"); p.className="particle";
    p.style.left=(45+Math.random()*10)+"vw"; p.style.top=(35+Math.random()*15)+"vh";
    const a=Math.random()*Math.PI*2, r=80+Math.random()*260;
    p.style.setProperty("--x",Math.cos(a)*r+"px"); p.style.setProperty("--y",Math.sin(a)*r+"px");
    p.style.animationDelay=(Math.random()*.35)+"s"; box.appendChild(p);
    setTimeout(()=>p.remove(),1600);
  }
}
function restart(){
  clearTimeout(timer); i=0;char=0;text="";
  document.getElementById("gift").classList.add("hidden");
  document.getElementById("boot").classList.remove("hidden");
  progress.classList.add("hidden");fill.style.width="0%";percent.textContent="0%";
  out.textContent="";
  typeLine();
}
typeLine();
