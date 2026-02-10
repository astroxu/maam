const notes = [
  "You are my favorite person in every universe 💫",
  "I choose you. Today, tomorrow, always 🐻",
  "My heart feels safe with you 💖"
];

function openNote(i){
  document.getElementById("note").innerText = notes[i];
}

function yes(){
  alert("YAY 💖💖💖 I LOVE YOU");
}

const no = document.getElementById("no");
if(no){
  no.onmouseover = () => {
    no.style.position = "absolute";
    no.style.left = Math.random()*80 + "%";
    no.style.top = Math.random()*80 + "%";
  };
}
