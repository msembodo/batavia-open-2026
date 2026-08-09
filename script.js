const eventDate = new Date("2026-10-17T08:00:00+07:00").getTime();
function updateCountdown(){
  const diff = eventDate - Date.now();
  const values = diff > 0 ? {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60
  } : {days:0,hours:0,minutes:0,seconds:0};
  for (const [id,val] of Object.entries(values)) document.getElementById(id).textContent=String(val).padStart(2,"0");
}
updateCountdown(); setInterval(updateCountdown,1000);

const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav nav");
toggle.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
