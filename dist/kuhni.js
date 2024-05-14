(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{const o=performance.now();requestAnimationFrame((function r(c){let s=(c-o)/n;s>1&&(s=1);const l=e(s);t(l),s<1&&requestAnimationFrame(r)}))},t=(t,n,o)=>{const r=document.querySelectorAll(t),c=document.querySelector(n),s=document.querySelector(o),l=document.querySelector(".overlay");r.forEach((t=>{t.addEventListener("click",(t=>{l.style.cssText="display: block;\n                                    opacity: 0",c.style.cssText="display: block;\n                                    opacity: 0",e({duration:300,timing:e=>e,draw(e){l.style.opacity=e,c.style.opacity=e}})}))})),document.body.addEventListener("click",(e=>{e.target!==s&&e.target!==l||(l.style.cssText="display: none;\n                                    opacity: 0",c.style.cssText="display: none;\n                                    opacity: 0")}))},n=(e,t,n,o,r,c,s=576,l=!1)=>{const a=document.querySelector(e),i=a.querySelector(t);let d=i.querySelectorAll(n);const m=a.querySelector(o),u=a.querySelector(r),y=()=>{d=i.querySelectorAll(n),screen.width>=s?d.forEach(((e,t)=>{e.style.display=t>=0&&t<c?"block":"none"})):d.forEach(((e,t)=>{e.style.display=0===t?"block":"none"}))};window.addEventListener("resize",(()=>{screen.width>=s?(i.style.justifyContent="space-between",y()):(i.style.justifyContent="center",y())}));const p=()=>{d[d.length-1].after(d[0]),y()};l&&setInterval(p,1e3),d.forEach((e=>{e.style.display="none"})),u.addEventListener("click",(()=>{p()})),m.addEventListener("click",(()=>{d[0].before(d[d.length-1]),y()})),y()},o=e=>{const t=e.querySelector("button"),n=e.querySelector('[name="fio"]'),o=e.querySelector('[name="phone"]');t.addEventListener("click",(e=>{e.preventDefault(),(()=>{const e={};var r;e.name=n.value,e.phone=o.value,document.querySelector("#calc-total")&&(e.calc=document.querySelector("#calc-total").value),(()=>{let e=!1;const t=(e,t,n)=>{t.style.border="none";const o=t.nextElementSibling;if(o&&o.remove(),e){const e=document.createElement("p");e.textContent=n,e.style.cssText=` font-size: 12px;\n                                            color: red;\n                                            transform: ${getComputedStyle(t).transform}`,t.style.border="1px solid red",t.insertAdjacentElement("afterend",e)}};return/[^а-яa-z^ ^-]+/i.test(n.value)||""===n.value?(t(!0,n,"Введите Ваше имя"),e=!0):t(!1,n),/^[\d\+][\d\(\)\ -]{4,16}\d$/.test(o.value)&&""!==o.value?t(!1,o):(t(!0,o,"Номер введен некорректно!"),e=!0),e})()||(t.textContent="Загрузка...",(r=e,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-type":"aplicition/json"}}).then((e=>e.json()))).then((e=>{t.textContent="Заявка отправлена!",n.value="",o.value="",setTimeout((()=>{t.textContent="ПОЛУЧИТЬ СКИДКУ!"}),2e3)})).catch((e=>{t.textContent="Ошибка..."})))})()}))},r=document.querySelectorAll(".countdown"),c=document.querySelectorAll(".order-form");r.forEach((e=>{(e=>{const t=document.querySelectorAll(".count_1 span"),n=document.querySelectorAll(".count_2 span"),o=document.querySelectorAll(".count_3 span"),r=document.querySelectorAll(".count_4 span");let c;const s=()=>{const l=(()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,day:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})(),a=e=>e<=9?"0"+e:e;l.timeRemaining<=0?(t.forEach((e=>{e.textContent="00"})),n.forEach((e=>{e.textContent="00"})),o.forEach((e=>{e.textContent="00"})),r.forEach((e=>{e.textContent="00"})),clearInterval(c)):(t.forEach((e=>{e.textContent=a(l.day)})),n.forEach((e=>{e.textContent=a(l.hours)})),o.forEach((e=>{e.textContent=a(l.minutes)})),r.forEach((e=>{e.textContent=a(l.seconds)})),c=setInterval(s,1e3))};s()})("13 may 2024")})),c.forEach((e=>{o(e)})),(()=>{const t=document.querySelector(".smooth-scroll"),n=document.documentElement,o=document.querySelector("#offer"),r=o.offsetTop+o.offsetHeight;t.style.cssText="pointer-events: none;\n                                opacity: 0;\n                                cursor: pointer",window.addEventListener("scroll",(()=>{const o=n.scrollTop;o>=r&&0==t.style.opacity?(t.style.pointerEvents="auto",e({duration:300,timing:e=>e,draw(e){t.style.opacity=e}})):r>o&&1==t.style.opacity&&(e({duration:300,timing:e=>e,draw(e){t.style.opacity=1-e}}),t.style.pointerEvents="none")})),t.addEventListener("click",(()=>{n.scrollTo({top:0,behavior:"smooth"})}))})(),t(".call-button",".header-modal",".header-modal__close"),t(".service-button",".services-modal",".services-modal__close"),(()=>{const t=document.querySelectorAll(".sertificate-document"),n=document.createElement("div");n.style.cssText="display: none;\n                                position: fixed;\n                                top: 0;\n                                bottom: 0;\n                                left: 0;\n                                right: 0;\n                                height: 100vh;\n                                width: 100%;\n                                opacity: 0;\n                                background-color: rgba(0, 0, 0, 0.45);",document.body.append(n),t.forEach((t=>{t.addEventListener("click",(o=>{o.preventDefault(),o.target.matches(".sertificate-document .document-overlay")&&(n.style.display="block",n.innerHTML=`<img src=${t.getAttribute("href")} \n                                        style="margin: 0;\n                                        height: 90%;               \n                                        position: absolute;\n                                        top: 50%;\n                                        left: 50%;\n                                        margin-right: -50%;\n                                        transform: translate(-50%, -50%)" alt=""></img>`,e({duration:300,timing:e=>e,draw(e){n.style.opacity=e}}))}))})),n.addEventListener("click",(()=>{n.style.display="none",n.style.opacity=0,n.innerHTML=""}))})(),n("#benefits",".benefits-wrap",".benefits__item",".benefits__arrow--left",".benefits__arrow--right",3,576),n("#services",".services-wrap",".services__item",".services__arrow--left",".services__arrow--right",2,1200),(()=>{const e=document.querySelector(".comments-container");let t;fetch("./comments.json").then((e=>e.json())).then((n=>(n.comments.forEach(((t,n)=>{const o=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div");let s,l;s=n%3==0?"review-green":n%3==1?"review-gray":"review-orange",n%2==0?(l="review-arrow-left",o.append(r),o.append(c)):n%2==1&&(l="review-arrow-right",o.append(c),o.append(r)),o.classList.add("row","comments-item"),r.classList.add("col-xs-3","col-sm-2"),r.innerHTML=`<div class="review-user">\n                                        <img\n                                        src="images/users/${t.image?t.image:"noface.png"}"\n                                        alt=""\n                                        class="img-responsive avatar"\n                                        />\n                                    </div>`,c.classList.add("col-xs-9","col-sm-9"),c.innerHTML=`<div class="review-inner ${s} review-arrow ${l}">\n                                        <p class="text-normal">${t.author}</p>\n                                        <p>${t.comment}</p>\n                                    </div>`,e.append(o)})),t=e.querySelectorAll(".comments-item"),t.forEach(((e,t)=>{})),void console.log(t))))})()})();