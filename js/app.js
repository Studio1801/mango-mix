const IMG = {mango:"assets/img/mango-cup.webp",fresas:"assets/img/fresas-con-crema.webp",acai:"assets/img/acai.webp",pina:"assets/img/pina-loca.webp",sandia:"assets/img/sandia-con-mango.webp",fresashake:"assets/img/strawberry-milkshake.webp",shake:"assets/img/chocolate-shake.webp"};
const T = {
  en:{skip:"Skip to menu",navMenu:"Menu",navCup:"Build a cup",navVisit:"Visit",heroP:"Colombian fruit bar since 2017. Cut to order, piled high, Tampa Bay.",heroCta:"Find us",favsH:"Los favoritos",favsL:"What everyone posts about",alsoH:"And also",
    founderP:"The Colombian fruit stand, brought to Tampa. Fruit cut in front of you, cups filled until they overflow, the way it is done back home.",founderCap:"The founder, fruit in hand.",
    copaH:"Arma tu copa",copaP:"Chopped fruit at the bottom, sweet cream poured over, grated cheese on top. Build yours, then show it at the counter.",fruitL:"Fruit",topL:"On top",yourCup:"Your cup",copy:"Copy my cup",copied:"Copied. Show it at the counter.",copyFail:"Copy not available here",emptyCup:"Pick at least one fruit.",cupWord:"Fruit salad with",copaRot:"Corte de la copa / Inside the cup",
    pickH:"¿Qué se te antoja?",pickL:"Get this",visitH:"Ven pa'cá",hours:"Today's hours on Instagram",dir:"Directions",f1:"Dogs welcome on the patio",f2:"Jenga table",f3:"English y español",f4:"Beer and wine",terms:"Terms",privacy:"Privacy",back:"Close",chili:"Salt, lime and chili",
    startOrder:"Start a pickup order",pickHere:"Pick up here",addCup:"Add my cup to order",yourOrder:"Your order",demoTag:"Demo order, no payment taken",close:"Close",
    add:"Add",added:"Added to your order",inStore:"In store only",orderH:"Your order",emptyCart:"Nothing here yet. Add something from the menu.",browse:"See the menu",
    pickupAt:"Pick up at",when:"When",asap:"ASAP (about 15 min)",in30:"In 30 min",in60:"In 1 hour",you:"Your details",name:"Name",phone:"Phone",
    subtotal:"Subtotal",tax:"Sales tax (7.5%)",total:"Total",payNote:"Pay at the counter when you pick up.",place:"Place order",needInfo:"Add your name and phone so we can call your order.",
    confH:"Order in!",confNum:"Order number",confAt:"Pick it up at",confReady:"Ready around",confDemo:"This is a demo. No order was sent and nothing was charged.",newOrder:"Start a new order",
    cupItem:"Your fruit salad",armenia:"Armenia Ave, Tampa",krate:"KRATE at The Grove, Wesley Chapel",demoPrices:"Demo prices"},
  es:{skip:"Ir al menú",navMenu:"Menú",navCup:"Arma tu copa",navVisit:"Visítanos",heroP:"Frutería colombiana desde 2017. Picada al momento, bien servida, en Tampa Bay.",heroCta:"Encuéntranos",favsH:"Los favoritos",favsL:"Lo que todos publican",alsoH:"Y también",
    founderP:"La frutería colombiana, traída a Tampa. Fruta picada frente a ti y vasos llenos hasta rebosar, como se hace en casa.",founderCap:"El fundador, con la fruta en la mano.",
    copaH:"Arma tu copa",copaP:"Fruta picada abajo, crema dulce por encima y queso rallado arriba. Arma la tuya y muéstrala en el mostrador.",fruitL:"Fruta",topL:"Encima",yourCup:"Tu copa",copy:"Copiar mi copa",copied:"Copiado. Muéstralo en el mostrador.",copyFail:"No se puede copiar aquí",emptyCup:"Escoge al menos una fruta.",cupWord:"Ensalada de frutas con",copaRot:"Corte de la copa / Inside the cup",
    pickH:"¿Qué se te antoja?",pickL:"Pide esto",visitH:"Ven pa'cá",hours:"Horario de hoy en Instagram",dir:"Cómo llegar",f1:"Perros bienvenidos en el patio",f2:"Mesa de Jenga",f3:"English y español",f4:"Cerveza y vino",terms:"Términos",privacy:"Privacidad",back:"Cerrar",chili:"Sal, limón y ají",
    startOrder:"Haz un pedido para recoger",pickHere:"Recoger aquí",addCup:"Agregar mi copa al pedido",yourOrder:"Tu pedido",demoTag:"Pedido de prueba, sin cobro",close:"Cerrar",
    add:"Agregar",added:"Agregado a tu pedido",inStore:"Solo en tienda",orderH:"Tu pedido",emptyCart:"Todavía no hay nada. Agrega algo del menú.",browse:"Ver el menú",
    pickupAt:"Recoger en",when:"Cuándo",asap:"Lo antes posible (unos 15 min)",in30:"En 30 min",in60:"En 1 hora",you:"Tus datos",name:"Nombre",phone:"Teléfono",
    subtotal:"Subtotal",tax:"Impuesto (7.5%)",total:"Total",payNote:"Pagas en el mostrador al recoger.",place:"Hacer pedido",needInfo:"Agrega tu nombre y teléfono para llamar tu pedido.",
    confH:"¡Pedido listo!",confNum:"Número de pedido",confAt:"Recógelo en",confReady:"Listo alrededor de las",confDemo:"Esto es una demo. No se envió ningún pedido ni se cobró nada.",newOrder:"Empezar otro pedido",
    cupItem:"Tu ensalada de frutas",armenia:"Armenia Ave, Tampa",krate:"KRATE at The Grove, Wesley Chapel",demoPrices:"Precios de prueba"}
};
const FAVS = [
  {id:"mangocup",p:9,img:"mango",r:"-5deg",en:["Mango cup","A whole cup of mango, cut into long ribbons. Nothing added, nothing needed.","Fresh fruit"],es:["Vaso de mango","Un vaso entero de mango cortado en tiras largas. Nada más, no hace falta.","Fruta fresca"]},
  {id:"acai",p:12,img:"acai",r:"5deg",en:["Açaí","Thick açaí with granola, banana, mango and strawberry on top.","Cold"],es:["Açaí","Açaí espeso con granola, banano, mango y fresa encima.","Frío"]},
  {id:"sandia",p:9,img:"sandia",r:"-4deg",en:["Sandía con mango","Icy watermelon with fruit inside, crowned with ribbons of green mango.","Refreshing"],es:["Sandía con mango","Sandía helada con fruta adentro, coronada con tiras de mango verde.","Refrescante"]},
  {id:"choco",p:9,img:"shake",r:"6deg",en:["Chocolate shake","Thick chocolate shake, whipped cream, cocoa and a waffle on top.","Sweet"],es:["Batido de chocolate","Batido espeso de chocolate, crema batida, cacao y un waffle encima.","Dulce"]},
  {id:"fresashake",p:9,img:"fresashake",r:"-5deg",en:["Strawberry milkshake","Strawberry shake swirled with strawberry syrup, piled with whipped cream and a chocolate on top.","Sweet"],es:["Malteada de fresa","Batido de fresa con sirope de fresa, mucha crema batida y un chocolate encima.","Dulce"]}
];
const EXTRA = [
  {id:"fresas",p:10,en:["Fresas con crema"],es:["Fresas con crema"]},
  {id:"pina",p:18,en:["Piña loca"],es:["Piña loca"]}
];
const MENU = [
  {id:"biche",p:7,chili:1,en:["Mangobiche","Green mango, salt, lime, chili."],es:["Mangobiche","Mango verde, sal, limón, ají."]},
  {id:"salad",p:9,en:["Fruit salad","Chopped fruit, sweet cream, grated cheese."],es:["Ensalada de frutas","Fruta picada, crema dulce, queso rallado."]},
  {id:"obleas",p:6,en:["Obleas","Thin wafers with arequipe and toppings."],es:["Obleas","Obleas finas con arequipe y toppings."]},
  {id:"perro",p:8,en:["Colombian hot dog","Loaded, with crushed potato chips on top."],es:["Perro caliente","Bien cargado, con papita triturada."]},
  {id:"waffles",p:9,en:["Waffles","Fresh off the iron, topped with fruit."],es:["Waffles","Recién hechos, con fruta encima."]},
  {id:"batidos",p:8,en:["Shakes","Blended with real fruit and milk."],es:["Batidos","Con fruta de verdad y leche."]},
  {id:"pandebono",p:2.5,en:["Pandebonos","Colombian cheese bread, warm."],es:["Pandebonos","Pan de queso colombiano, calientito."]},
  {id:"beer",p:0,en:["Beer and wine","Something cold with your plate."],es:["Cerveza y vino","Algo frío para acompañar."]}
];
const FRUITS = [
  {id:"sandia",c:"#E0594A",en:"Watermelon",es:"Sandía",on:1},{id:"banano",c:"#F3E29A",en:"Banana",es:"Banano",on:1},
  {id:"mango",c:"#FFB21E",en:"Mango",es:"Mango",on:1},{id:"papaya",c:"#F08A3E",en:"Papaya",es:"Papaya",on:1},
  {id:"pina",c:"#E9C94A",en:"Pineapple",es:"Piña",on:1},{id:"fresa",c:"#E86A6A",en:"Strawberry",es:"Fresa",on:1},
  {id:"kiwi",c:"#8DB04A",en:"Kiwi",es:"Kiwi",on:0},{id:"uva",c:"#7A4A6E",en:"Grape",es:"Uva",on:0}
];
const TOPS = [
  {id:"crema",c:"#FBF6EA",h:46,en:"Sweet cream",es:"Crema dulce",on:1},{id:"leche",c:"#EBD9A8",h:18,en:"Condensed milk",es:"Leche condensada",on:0},
  {id:"coco",c:"#FFFDF6",h:18,en:"Coconut",es:"Coco",on:0},{id:"queso",c:"#F6EFC9",h:30,en:"Grated cheese",es:"Queso rallado",on:1},
  {id:"helado",c:"#F7E6EA",dome:1,en:"Ice cream",es:"Helado",on:0}
];
const MOODS = [
  {id:"sour",item:"biche",img:null,en:["Something sharp","Mangobiche","Sour, salty and a little hot. Green mango with salt, lime and chili."],es:["Algo ácido","Mangobiche","Ácido, salado y un poco picante. Mango verde con sal, limón y ají."]},
  {id:"sweet",item:"fresas",img:"fresas",en:["Something sweet","Fresas con crema","Strawberries, sweet cream, ice cream, chocolate. Say no more."],es:["Algo dulce","Fresas con crema","Fresas, crema dulce, helado y chocolate. No hay más que decir."]},
  {id:"cold",item:"sandia",img:"sandia",en:["Something icy","Sandía con mango","Icy watermelon under a crown of green mango. Made for Florida afternoons."],es:["Algo helado","Sandía con mango","Sandía helada bajo una corona de mango verde. Hecho para las tardes de Florida."]},
  {id:"bowl",item:"acai",img:"acai",en:["Something filling","Açaí","Thick açaí, granola and fresh fruit. Breakfast, lunch or both."],es:["Algo que llene","Açaí","Açaí espeso, granola y fruta fresca. Desayuno, almuerzo o los dos."]},
  {id:"show",item:"pina",img:"pina",en:["Something to post","Piña loca","A whole pineapple, filled to the top. Your phone eats first."],es:["Algo para publicar","Piña loca","Una piña entera, llena hasta arriba. Primero come el celular."]},
  {id:"fruit",item:"mangocup",img:"mango",en:["Just fruit","Mango cup","A full cup of fresh mango ribbons. Simple and perfect."],es:["Solo fruta","Vaso de mango","Un vaso lleno de tiras de mango fresco. Simple y perfecto."]},
  {id:"hungry",item:"choco",img:"shake",en:["Chocolate fix","Chocolate shake","Thick, cold, topped with whipped cream and a waffle. Dessert you drink."],es:["Antojo de chocolate","Batido de chocolate","Espeso, frío, con crema batida y un waffle encima. Postre para tomar."]}
];
const TAPE_WORDS = ["Desde 2017","Mangobiche","Fresas con crema","Açaí","Piña loca","Sandía con mango","Obleas","Pandebonos","Waffles","Batidos","Perro caliente"];

let lang="en", mood="sweet", loaded=false;
try{ lang = localStorage.getItem("mmx-lang") || "en"; }catch(e){}
const $ = id => document.getElementById(id);

$("tape").innerHTML = [...TAPE_WORDS,...TAPE_WORDS].join("<i>/</i>");
$("items").innerHTML = Array.from({length:6},()=>'<li><div class="sk t"></div><div class="sk"></div></li>').join("");

function renderFavs(){
  $("favList").innerHTML = FAVS.map((f,i)=>{const [n,d,l]=f[lang];return `<div class="fav${i%2?" flip":""}"><div class="txt"><span class="label">${l}</span><h3 class="big poster">${n}</h3><p>${d}</p><div class="addrow"><button class="pill" type="button" data-add="${f.id}">${T[lang].add} / ${money(f.p)}</button></div></div><img src="${IMG[f.img]}" alt="${n}" style="--r:${f.r}"></div>`;}).join("");
}
function renderMenu(){
  $("items").innerHTML = MENU.map(m=>{const [n,d]=m[lang];return `<li><b>${n}</b><span>${d}</span>${m.chili?`<em class="label">${T[lang].chili}</em>`:""}${m.p?`<button class="addx" type="button" data-add="${m.id}">+ ${money(m.p)}</button>`:`<span class="addx na">${T[lang].inStore}</span>`}</li>`;}).join("");
  $("items").setAttribute("aria-busy","false");
}

/* cup builder */
const TOP=100, BOT=580, edgeX=y=>360-(y-TOP)*40/480;
function chipRow(el,list){
  el.innerHTML = list.map(x=>`<button type="button" class="chip" data-id="${x.id}" aria-pressed="${!!x.on}"><span>${x[lang]}</span></button>`).join("");
  el.querySelectorAll("button").forEach(b=>b.onclick=()=>{const x=list.find(i=>i.id===b.dataset.id);x.on=x.on?0:1;b.setAttribute("aria-pressed",!!x.on);renderCup();});
}
function renderCup(){
  const fr=FRUITS.filter(f=>f.on), tp=TOPS.filter(t=>t.on&&!t.dome), dome=TOPS.find(t=>t.dome).on;
  const topH=tp.reduce((s,t)=>s+t.h,0), fH=fr.length?(BOT-TOP-topH)/fr.length:0;
  let y=BOT, rects=[], labels=[];
  fr.forEach(f=>{y-=fH;rects.push([y,fH,f.c]);labels.push([y+fH/2,f[lang]]);});
  let ty=BOT-fr.length*fH;
  tp.forEach(t=>{ty-=t.h;rects.push([ty,t.h,t.c]);labels.push([ty+t.h/2,t[lang]]);});
  $("cupLayers").innerHTML = rects.map(r=>`<rect x="0" y="${r[0].toFixed(1)}" width="640" height="${r[1].toFixed(1)}" fill="${r[2]}"/>`).join("");
  $("dome").innerHTML = dome?`<path d="M90 100 C90 20 330 20 330 100Z" fill="#F7E6EA"/>`:"";
  if(dome) labels.push([60,TOPS.find(t=>t.dome)[lang]]);
  labels.sort((a,b)=>a[0]-b[0]); let last=-99; labels.forEach(l=>{l[2]=Math.max(l[0],last+22);last=l[2];});
  $("cupLabels").innerHTML = labels.map(l=>{const x1=l[0]<TOP?300:edgeX(l[0])+8;return `<polyline points="${x1.toFixed(1)},${l[0].toFixed(1)} 400,${l[0].toFixed(1)} 416,${l[2].toFixed(1)} 430,${l[2].toFixed(1)}" fill="none" stroke="#FFF4D6" stroke-width="1"/><text x="438" y="${(l[2]+4).toFixed(1)}">${l[1].toUpperCase()}</text>`;}).join("")
    + (fr.length?"":`<text x="210" y="340" text-anchor="middle">${T[lang].emptyCup.toUpperCase()}</text>`);
  const parts=[...fr.map(f=>f[lang].toLowerCase()),...TOPS.filter(t=>t.on).map(t=>t[lang].toLowerCase())];
  $("orderText").textContent = fr.length?`${T[lang].cupWord} ${list(parts)}.`:T[lang].emptyCup;
  $("cupPrice").textContent = `${money(cupPrice())} / ${T[lang].demoPrices}`;
}
function list(a){const and=lang==="es"?" y ":" and ";return a.length<2?a.join(""):a.slice(0,-1).join(", ")+and+a[a.length-1];}
function toast(m){const t=$("toast");t.textContent=m;t.classList.add("on");setTimeout(()=>t.classList.remove("on"),2200);}
function cupPrice(){ const extras=TOPS.filter(t=>t.on).length; return 9+Math.max(0,extras-2)*1; }
$("addCup").onclick=()=>{ if(!FRUITS.some(f=>f.on)) return toast(T[lang].emptyCup); addLine({id:"cup"+Date.now(),cup:true,p:cupPrice(),desc:$("orderText").textContent}); };

/* picker */
function renderMoods(){
  $("moods").innerHTML = MOODS.map(m=>`<button type="button" class="chip" data-m="${m.id}" aria-pressed="${m.id===mood}"><span>${m[lang][0]}</span></button>`).join("");
  $("moods").querySelectorAll("button").forEach(b=>b.onclick=()=>{mood=b.dataset.m;renderMoods();});
  const m=MOODS.find(x=>x.id===mood);
  $("pickName").textContent=m[lang][1]; $("pickWhy").textContent=m[lang][2];
  $("pickAdd").textContent = `${T[lang].add} / ${money(itemById(m.item).p)}`; $("pickAdd").dataset.add = m.item;
  const im=$("pickImg"); if(m.img){im.src=IMG[m.img];im.alt=m[lang][1];im.style.opacity=1;}else{im.removeAttribute("src");im.alt="";im.style.opacity=0;}
}

/* ---------- demo ordering ---------- */
const money = n => "$" + n.toFixed(2);
const itemById = id => [...FAVS,...MENU,...EXTRA].find(x=>x.id===id);
let cart = [], store = "armenia", when = "asap", step = "cart", lastOrder = null, showErr = false;
function addLine(line){
  const found = !line.cup && cart.find(l=>l.id===line.id);
  if(found) found.q++; else cart.push({...line,q:1});
  renderCart(); toast(T[lang].added);
}
document.addEventListener("click",e=>{
  const a=e.target.closest("[data-add]"); if(a){ const it=itemById(a.dataset.add); addLine({id:it.id,p:it.p}); return; }
  const o=e.target.closest("[data-open]"); if(o){ if(o.dataset.open!=="any") store=o.dataset.open; if(step==="done") step="cart"; openDrawer(); }
});
function lineName(l){ return l.cup ? T[lang].cupItem : itemById(l.id)[lang][0]; }
function totals(){ const sub=cart.reduce((s,l)=>s+l.p*l.q,0); const tax=Math.round(sub*0.075*100)/100; return {sub,tax,tot:sub+tax}; }
function renderCart(){
  const n=cart.reduce((s,l)=>s+l.q,0), {tot}=totals();
  $("cartCount").textContent=n; $("cartTotal").textContent=n?money(tot):"";
  $("cartPill").classList.toggle("on", n>0 || $("drawer").classList.contains("open"));
  renderDrawer();
}
function renderDrawer(){
  const L=T[lang], b=$("dBody");
  if(step==="done" && lastOrder){
    b.innerHTML=`<div class="conf"><h2 class="poster big">${L.confH}</h2><span class="label">${L.confNum}</span><div class="num poster big">#${lastOrder.num}</div>
      <p><span class="label">${L.confAt}</span><br>${L[lastOrder.store]}</p><p><span class="label">${L.confReady}</span><br>${lastOrder.time}</p>
      <p><span class="label">${L.total}</span><br>${money(lastOrder.tot)} / ${L.payNote}</p><p class="empty">${L.confDemo}</p>
      <button class="pill" type="button" id="newOrder">${L.newOrder}</button></div>`;
    $("newOrder").onclick=()=>{step="cart";renderDrawer();};
    return;
  }
  if(!cart.length){
    b.innerHTML=`<h2 class="poster big">${L.orderH}</h2><p class="empty">${L.emptyCart}</p><button class="pill" type="button" id="browse">${L.browse}</button>`;
    $("browse").onclick=()=>{closeDrawer(); document.getElementById("favs").scrollIntoView({behavior:"smooth"});};
    return;
  }
  const {sub,tax,tot}=totals();
  b.innerHTML=`<h2 class="poster big">${L.orderH}</h2>
    ${cart.map((l,i)=>`<div class="line"><b>${lineName(l)}</b><div class="qty"><button type="button" data-q="${i}" data-d="-1" aria-label="Remove one">&minus;</button><span>${l.q}</span><button type="button" data-q="${i}" data-d="1" aria-label="Add one">+</button></div><small>${l.cup?l.desc+" ":""}${money(l.p*l.q)}</small></div>`).join("")}
    <div class="sum"><span>${L.subtotal}</span><span>${money(sub)}</span><span>${L.tax}</span><span>${money(tax)}</span><span class="tot">${L.total}</span><span class="tot">${money(tot)}</span></div>
    <h3 class="label">${L.pickupAt}</h3><div class="chips">${["armenia","krate"].map(k=>`<button type="button" class="chip" data-store="${k}" aria-pressed="${store===k}"><span>${L[k]}</span></button>`).join("")}</div>
    <h3 class="label">${L.when}</h3><div class="chips">${["asap","in30","in60"].map(k=>`<button type="button" class="chip" data-when="${k}" aria-pressed="${when===k}"><span>${L[k]}</span></button>`).join("")}</div>
    <h3 class="label">${L.you}</h3>
    <label class="field label">${L.name}<input id="fName" autocomplete="name" value="${$("fName")?.value||""}"></label>
    <label class="field label">${L.phone}<input id="fPhone" type="tel" autocomplete="tel" value="${$("fPhone")?.value||""}"></label>
    ${showErr?`<span class="err">${L.needInfo}</span>`:""}
    <p class="empty" style="margin-top:20px;font-size:16px">${L.payNote}</p>
    <button class="pill" type="button" id="placeBtn">${L.place} / ${money(tot)}</button>`;
  b.querySelectorAll("[data-q]").forEach(x=>x.onclick=()=>{const l=cart[+x.dataset.q]; l.q+=+x.dataset.d; if(l.q<1) cart.splice(+x.dataset.q,1); renderCart();});
  b.querySelectorAll("[data-store]").forEach(x=>x.onclick=()=>{store=x.dataset.store;renderDrawer();});
  b.querySelectorAll("[data-when]").forEach(x=>x.onclick=()=>{when=x.dataset.when;renderDrawer();});
  $("placeBtn").onclick=()=>{
    if(!$("fName").value.trim()||!$("fPhone").value.trim()){showErr=true;renderDrawer();return;}
    showErr=false; const mins={asap:15,in30:30,in60:60}[when]; const d=new Date(Date.now()+mins*60000);
    lastOrder={num:Math.floor(100+Math.random()*900),store,tot,time:d.toLocaleTimeString(lang==="es"?"es-US":"en-US",{hour:"numeric",minute:"2-digit"})};
    cart=[]; step="done"; renderCart();
  };
}
function openDrawer(){ renderDrawer(); $("drawer").classList.add("open"); $("drawer").setAttribute("aria-hidden","false"); $("scrim").hidden=false; $("cartPill").setAttribute("aria-expanded","true"); $("cartPill").classList.add("on"); }
function closeDrawer(){ $("drawer").classList.remove("open"); $("drawer").setAttribute("aria-hidden","true"); $("scrim").hidden=true; $("cartPill").setAttribute("aria-expanded","false"); renderCart(); }
$("cartPill").onclick=()=> $("drawer").classList.contains("open")?closeDrawer():openDrawer();
$("closeDrawer").onclick=closeDrawer; $("scrim").onclick=closeDrawer;
document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeDrawer(); });

function apply(){
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const v=T[lang][el.dataset.i18n];if(v)el.textContent=v;});
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===lang));
  renderFavs(); if(loaded) renderMenu();
  chipRow($("fruitChips"),FRUITS); chipRow($("topChips"),TOPS); renderCup(); renderMoods(); renderCart();
}
document.querySelectorAll(".lang button").forEach(b=>b.addEventListener("click",()=>{lang=b.dataset.lang;try{localStorage.setItem("mmx-lang",lang);}catch(e){}apply();}));
apply();
setTimeout(()=>{loaded=true;renderMenu();},500);
