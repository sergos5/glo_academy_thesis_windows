(()=>{"use strict";const t=({timing:t,draw:e,duration:n})=>{const o=performance.now();requestAnimationFrame((function r(s){let c=(s-o)/n;c>1&&(c=1);const i=t(c);e(i),c<1&&requestAnimationFrame(r)}))};document.querySelectorAll(".countdown").forEach((t=>{((t,e)=>{const n=e.querySelector(".count_1 span"),o=e.querySelector(".count_2 span"),r=e.querySelector(".count_3 span"),s=e.querySelector(".count_4 span");let c;const i=()=>{const e=(()=>{const e=(new Date(t).getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,day:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})(),a=t=>t<=9?"0"+t:t;e.timeRemaining<=0?(n.textContent="00",o.textContent="00",r.textContent="00",s.textContent="00",clearInterval(c)):(n.textContent=a(e.day),o.textContent=a(e.hours),r.textContent=a(e.minutes),s.textContent=a(e.seconds),c=setInterval(i,1e3))};i()})("13 may 2024",t)})),(()=>{const e=document.querySelector(".smooth-scroll"),n=document.documentElement,o=document.querySelector("#offer"),r=o.offsetTop+o.offsetHeight;e.style.cssText="pointer-events: none;\n                                opacity: 0;\n                                cursor: pointer",window.addEventListener("scroll",(()=>{const o=n.scrollTop;o>=r&&0==e.style.opacity?(e.style.pointerEvents="auto",t({duration:300,timing:t=>t,draw(t){e.style.opacity=t}})):r>o&&1==e.style.opacity&&(t({duration:300,timing:t=>t,draw(t){e.style.opacity=1-t}}),e.style.pointerEvents="none")})),e.addEventListener("click",(()=>{n.scrollTo({top:0,behavior:"smooth"})}))})()})();