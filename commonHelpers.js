import"./assets/modulepreload-polyfill-3cfb730f.js";import{f,i as h}from"./assets/vendor-77e16229.js";let r;const t=document.querySelector("button"),s=document.querySelector(".input-field"),y={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),setTime(e={days,hours,minutes,seconds}){this.days.textContent=`${e.days}`,this.hours.textContent=`${e.hours}`,this.minutes.textContent=`${e.minutes}`,this.seconds.textContent=`${e.seconds}`}};function o(e){return String(e).padStart(2,"0")}function b(e){const i=o(Math.floor(e/864e5)),d=o(Math.floor(e%864e5/36e5)),l=o(Math.floor(e%864e5%36e5/6e4)),m=o(Math.floor(e%864e5%36e5%6e4/1e3));return{days:i,hours:d,minutes:l,seconds:m}}let a;function u(){t.disabled=!0,t.style.backgroundColor="rgba(152, 152, 152, 1)",s.style.borderColor="rgba(128, 128, 128, 1)"}function c(){t.disabled=!1,t.style.backgroundColor="rgba(78, 117, 255, 1)",s.style.borderColor="rgba(0, 0, 0, 1)"}const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),e[0].valueOf()<Date.now().valueOf()?(h.show({position:"topCenter",message:"Please choose a date in the future",backgroundColor:"red",messageColor:"white",close:!1}),u()):(r=e[0],c(),console.log(r))}};f("#datetime-picker",g);let n;t.addEventListener("click",p);function p(){u(),a=setInterval(C,1e3)}function C(){n=r-Date.now(),y.setTime(b(n)),n.valueOf()===0&&S()}function S(){clearInterval(a),c()}
//# sourceMappingURL=commonHelpers.js.map
