(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{const o=performance.now();requestAnimationFrame((function r(a){let c=(a-o)/n;c>1&&(c=1);const l=e(c);t(l),c<1&&requestAnimationFrame(r)}))};document.querySelectorAll(".countdown").forEach((e=>{((e,t)=>{const n=t.querySelector(".count_1 span"),o=t.querySelector(".count_2 span"),r=t.querySelector(".count_3 span"),a=t.querySelector(".count_4 span");let c;const l=()=>{const t=(()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,day:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})(),s=e=>e<=9?"0"+e:e;t.timeRemaining<=0?(n.textContent="00",o.textContent="00",r.textContent="00",a.textContent="00",clearInterval(c)):(n.textContent=s(t.day),o.textContent=s(t.hours),r.textContent=s(t.minutes),a.textContent=s(t.seconds),c=setInterval(l,1e3))};l()})("13 may 2024",e)})),(()=>{const t=document.querySelector(".smooth-scroll"),n=document.documentElement,o=document.querySelector("#offer"),r=o.offsetTop+o.offsetHeight;t.style.cssText="pointer-events: none;\n                                opacity: 0;\n                                cursor: pointer",window.addEventListener("scroll",(()=>{const o=n.scrollTop;o>=r&&0==t.style.opacity?(t.style.pointerEvents="auto",e({duration:300,timing:e=>e,draw(e){t.style.opacity=e}})):r>o&&1==t.style.opacity&&(e({duration:300,timing:e=>e,draw(e){t.style.opacity=1-e}}),t.style.pointerEvents="none")})),t.addEventListener("click",(()=>{n.scrollTo({top:0,behavior:"smooth"})}))})(),((t=1e3)=>{const n=document.getElementById("calc"),o=n.querySelector("#calc-type"),r=n.querySelector("#calc-type-material"),a=n.querySelector("#calc-input"),c=n.querySelector("#calc-total");n.addEventListener("input",(n=>{var l;n.target===a&&(n.preventDefault(),(l=n.target).value=l.value.replace(/\D/,"")),n.target!==o&&n.target!==a&&n.target!==r||(()=>{const n=+o.options[o.selectedIndex].value,l=+r.options[r.selectedIndex].value,s=a.value;let u=0;n>0&&l>0&&s?(u=n*l*s*t,"Итого"==c.value&&(c.value=0),e({duration:500,timing:e=>Math.pow(e,2),draw(e){c.value=Math.ceil(+c.value+(+u-+c.value)*e)}})):c.value="Итого"})()}))})(1e3)})();