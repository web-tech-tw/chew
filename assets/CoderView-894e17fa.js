import{o as r,c as s,a as e,A as g,f as x,l as _,w as b,s as C,h as l,u as a}from"./index-35503757.js";import{u as z}from"./chew-5183d567.js";import{p as u,P as y}from"./prism-tomorrow-7d03ade5.js";function k(i,n){return r(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z","clip-rule":"evenodd"})])}function V(i,n){return r(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z","clip-rule":"evenodd"})])}function M(i,n){return r(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z","clip-rule":"evenodd"}),e("path",{d:"M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"})])}function B(i,n){return r(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})])}const S={class:"w-full bg-slate-900 px-5 py-3 flex justify-between"},A=e("span",{class:"ml-3"},"Code Chew 專業口香糖",-1),H={class:"flex"},j=e("div",{class:"text-white font-normal py-2 px-4 mx-1"}," 模式：JavaScript ",-1),E={__name:"CoderView",setup(i){const n=g(),t=x(""),d=_(()=>window.innerWidth<768);function h(o){return u.highlight(o,u.languages.js)}b(t,()=>{t.value?window.onbeforeunload=()=>!0:window.onbeforeunload=null,sessionStorage.setItem("chew-content",t.value)});function v(){t.value&&!confirm("確定要離開？")||(sessionStorage.removeItem("chew-content"),n.push("/"))}function m(){t.value&&!confirm("確定要離開？")||n.replace("/writer")}function w(){t.value=""}async function f(){if(!t.value){alert("請輸入內容");return}if(!confirm("確定要送出？"))return;const c=await z().post("gums",{json:{type:"js",content:t.value}}).json();sessionStorage.removeItem("chew-content"),n.replace(`/result/${c._id}`)}return C(()=>{if(d.value){n.replace("/writer");return}const o=sessionStorage.getItem("chew-content");o&&(t.value=o)}),(o,c)=>(r(),s("div",null,[e("div",S,[e("button",{class:"bg-slate-900 flex hover:bg-slate-800 text-white font-normal py-2 px-4 mx-1",onClick:v},[l(a(V),{class:"h-6 w-6"}),A]),e("div",H,[j,e("button",{class:"bg-slate-900 hover:bg-slate-800 text-white font-normal py-2 px-4 mx-1",title:"一般模式",onClick:m},[l(a(M),{class:"h-6 w-6"})]),e("button",{class:"bg-slate-900 hover:bg-slate-800 text-white font-normal py-2 px-4 mx-1",title:"清空內容",onClick:w},[l(a(B),{class:"h-6 w-6"})]),e("button",{class:"bg-amber-900 hover:bg-amber-800 text-white font-normal py-2 px-4 mx-1",title:"我打完了",onClick:f},[l(a(k),{class:"h-6 w-6"})])])]),l(a(y),{class:"code-editor",modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=p=>t.value=p),highlight:h,"line-numbers":""},null,8,["modelValue"])]))}};export{E as default};
