import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as a}from"./assets/vendor-77e16229.js";let t={delay:0,state:!0};const s=document.querySelector(".form");s.addEventListener("input",r);s.addEventListener("change",m);s.addEventListener("submit",u);function r(o){let e=o.target.value;o.target===s.elements.delay&&(t.delay=e,console.log(t.delay))}function m(o){s.elements.state.value==="fulfilled"?t.state=!0:s.elements.state.value==="rejected"&&(t.state=!1)}function u(o){o.preventDefault(),c()}function c(){new Promise((e,i)=>{const l=t.state,n=t.delay;setTimeout(()=>{l?e(n):i(n)},t.delay)}).then(e=>{a.show({position:"topCenter",message:`✅  Fulfilled promise in ${e}ms`,backgroundColor:"green",messageColor:"white",close:!1})}).catch(e=>{a.show({position:"topCenter",message:`❌  Rejected promise in ${e}ms`,backgroundColor:"red",messageColor:"white",close:!1})})}
//# sourceMappingURL=commonHelpers2.js.map