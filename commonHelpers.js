import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as b}from"./assets/vendor-77e16229.js";let s;const n=document.querySelector("button"),r=document.querySelector(".input-field"),a={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),setTime(e={days,hours,minutes,seconds}){this.days.textContent=`${e.days}`,this.hours.textContent=`${e.hours}`,this.minutes.textContent=`${e.minutes}`,this.seconds.textContent=`${e.seconds}`}};function t(e){return String(e).padStart(2,"0")}function u(e){const l=t(Math.floor(e/864e5)),m=t(Math.floor(e%864e5/36e5)),f=t(Math.floor(e%864e5%36e5/6e4)),h=t(Math.floor(e%864e5%36e5%6e4/1e3));return{days:l,hours:m,minutes:f,seconds:h}}let i;function c(){n.disabled=!0,r.disabled=!0,n.style.backgroundColor="rgba(152, 152, 152, 1)",r.style.borderColor="rgba(128, 128, 128, 1)"}function d(){n.disabled=!1,r.disabled=!1,n.style.backgroundColor="rgba(78, 117, 255, 1)",r.style.borderColor="rgba(0, 0, 0, 1)"}const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),e[0].valueOf()<Date.now().valueOf()?(b.show({position:"topCenter",message:" ❌ Please choose a date in the future",backgroundColor:"red",messageColor:"white",close:!1}),c()):(s=e[0],d(),console.log(s))}};y("#datetime-picker",g);let o;n.addEventListener("click",p);function p(){c(),i=setInterval(C,1e3)}function C(){o=s-Date.now(),a.setTime(u(o)),o.valueOf()<0&&S()}function S(){clearInterval(i),o=0,a.setTime(u(o)),t(),d()}
//# sourceMappingURL=commonHelpers.js.map
