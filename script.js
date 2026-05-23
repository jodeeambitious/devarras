let z=1;
const running=document.getElementById("running");

const apps={};

function registerApp(name, func){
  apps[name]=func;
}

function launch(name){
  const win=document.createElement("div");
  win.className="window";
  win.style.top=Math.random()*200+"px";
  win.style.left=Math.random()*300+"px";
  win.style.zIndex=z++;

  win.innerHTML=`
    <div class="titlebar">
      ${name}
      <span onclick="this.closest('.window').remove()">✖</span>
    </div>
    <div class="content">${apps[name]()}</div>
  `;

  document.body.appendChild(win);
  drag(win);

  const icon=document.createElement("div");
  icon.innerText=name;
  icon.onclick=()=>win.classList.toggle("hidden");
  running.appendChild(icon);
}

function drag(el){
  const bar=el.querySelector(".titlebar");
  let x,y,down=false;

  bar.onmousedown=e=>{
    down=true;
    x=e.clientX-el.offsetLeft;
    y=e.clientY-el.offsetTop;
    el.style.zIndex=z++;
  };

  document.onmouseup=()=>down=false;

  document.onmousemove=e=>{
    if(!down)return;
    el.style.left=e.clientX-x+"px";
    el.style.top=e.clientY-y+"px";
  };
}

function toggleStart(){
  document.getElementById("start").classList.toggle("active");
}
