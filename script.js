/* ===== LOVE NOTES ===== */
const notes=[
"You are my favorite person in every universe 💫",
"I choose you. Always 🐻",
"My heart feels safe with you 💖"
];

function openNote(i){
 document.getElementById("note").innerText=notes[i];
}

function yes(){
 alert("YAY 💖💖💖");
}

/* moving NO button */
const no=document.getElementById("no");
if(no){
 no.onmouseover=()=>{
  no.style.position="absolute";
  no.style.left=Math.random()*80+"%";
  no.style.top=Math.random()*80+"%";
 };
}

/* ===== MINI GAME ===== */
const area=document.getElementById("gameArea");
let score=0;

if(area){

function spawnHeart(){
 if(score>=5) return;

 const heart=document.createElement("div");
 heart.innerHTML="💖";
 heart.className="heart";

 heart.style.left=Math.random()*90+"%";
 heart.style.top=Math.random()*70+"%";

 heart.onclick=()=>{
   heart.remove();
   score++;
   document.getElementById("score").innerText=score+" / 5";

   if(score===5){
     document.getElementById("win").innerText=
     "You unlocked my heart ❤️";
   }
 };

 area.appendChild(heart);

 setTimeout(()=>heart.remove(),2000);
}

setInterval(spawnHeart,800);
}
