(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{const o=performance.now();requestAnimationFrame((function r(c){let l=(c-o)/n;l>1&&(l=1);const s=e(l);t(s),l<1&&requestAnimationFrame(r)}))},t=(t,n,o)=>{const r=document.querySelectorAll(t),c=document.querySelector(n),l=document.querySelector(o),s=document.querySelector(".overlay");r.forEach((t=>{t.addEventListener("click",(t=>{s.style.cssText="display: block;\n                                    opacity: 0",c.style.cssText="display: block;\n                                    opacity: 0",e({duration:300,timing:e=>e,draw(e){s.style.opacity=e,c.style.opacity=e}})}))})),l.addEventListener("click",(()=>{s.style.cssText="display: none;\n                                    opacity: 0",c.style.cssText="display: none;\n                                    opacity: 0"}))},n=(e,t,n,o,r,c)=>{const l=document.querySelector(e),s=l.querySelector(t);let a=s.querySelectorAll(n);const i=l.querySelector(o),u=l.querySelector(r),d=()=>{a=s.querySelectorAll(n),screen.width>=576?a.forEach(((e,t)=>{e.style.display=t>=0&&t<c?"block":"none"})):a.forEach(((e,t)=>{e.style.display=0===t?"block":"none"}))};screen.width>=576?s.style.justifyContent="center":s.style.justifyContent="space-between",a.forEach((e=>{e.style.display="none"})),u.addEventListener("click",(()=>{a[a.length-1].after(a[0]),d()})),i.addEventListener("click",(()=>{a[0].before(a[a.length-1]),d()})),d()};document.querySelectorAll(".countdown").forEach((e=>{((e,t)=>{const n=t.querySelector(".count_1 span"),o=t.querySelector(".count_2 span"),r=t.querySelector(".count_3 span"),c=t.querySelector(".count_4 span");let l;const s=()=>{const t=(()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,day:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})(),a=e=>e<=9?"0"+e:e;t.timeRemaining<=0?(n.textContent="00",o.textContent="00",r.textContent="00",c.textContent="00",clearInterval(l)):(n.textContent=a(t.day),o.textContent=a(t.hours),r.textContent=a(t.minutes),c.textContent=a(t.seconds),l=setInterval(s,1e3))};s()})("13 may 2024",e)})),(()=>{const t=document.querySelector(".smooth-scroll"),n=document.documentElement,o=document.querySelector("#offer"),r=o.offsetTop+o.offsetHeight;t.style.cssText="pointer-events: none;\n                                opacity: 0;\n                                cursor: pointer",window.addEventListener("scroll",(()=>{const o=n.scrollTop;o>=r&&0==t.style.opacity?(t.style.pointerEvents="auto",e({duration:300,timing:e=>e,draw(e){t.style.opacity=e}})):r>o&&1==t.style.opacity&&(e({duration:300,timing:e=>e,draw(e){t.style.opacity=1-e}}),t.style.pointerEvents="none")})),t.addEventListener("click",(()=>{n.scrollTo({top:0,behavior:"smooth"})}))})(),((t=1e3)=>{const n=document.getElementById("calc"),o=n.querySelector("#calc-type"),r=n.querySelector("#calc-type-material"),c=n.querySelector("#calc-input"),l=n.querySelector("#calc-total");n.addEventListener("input",(n=>{var s;n.target===c&&(n.preventDefault(),(s=n.target).value=s.value.replace(/\D/,"")),n.target!==o&&n.target!==c&&n.target!==r||(()=>{const n=+o.options[o.selectedIndex].value,s=+r.options[r.selectedIndex].value,a=c.value;let i=0;n>0&&s>0&&a?(i=n*s*a*t,"Итого"==l.value&&(l.value=0),e({duration:500,timing:e=>Math.pow(e,2),draw(e){l.value=Math.ceil(+l.value+(+i-+l.value)*e)}})):l.value="Итого"})()}))})(1e3),t(".call-button",".header-modal",".header-modal__close"),t(".service-button",".services-modal",".services-modal__close"),(()=>{const t=document.querySelectorAll(".sertificate-document"),n=document.createElement("div");n.style.cssText="display: none;\n                                position: fixed;\n                                top: 0;\n                                bottom: 0;\n                                left: 0;\n                                right: 0;\n                                height: 100vh;\n                                width: 100%;\n                                opacity: 0;\n                                background-color: rgba(0, 0, 0, 0.45);",document.body.append(n),t.forEach((t=>{t.addEventListener("click",(o=>{o.preventDefault(),o.target.matches(".sertificate-document .document-overlay")&&(n.style.display="block",n.innerHTML=`<img src=${t.getAttribute("href")} \n                                        style="margin: 0;\n                                        height: 90%;               \n                                        position: absolute;\n                                        top: 50%;\n                                        left: 50%;\n                                        margin-right: -50%;\n                                        transform: translate(-50%, -50%)" alt=""></img>`,e({duration:500,timing:e=>e,draw(e){n.style.opacity=e}}))}))})),n.addEventListener("click",(()=>{n.style.display="none",n.style.opacity=0,n.innerHTML=""}))})(),n("#benefits",".benefits-wrap",".benefits__item",".benefits__arrow--left",".benefits__arrow--right",3),n("#services",".services-wrap",".services__item",".services__arrow--left",".services__arrow--right",2)})();