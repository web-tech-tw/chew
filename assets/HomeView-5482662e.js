import{z as x,e as i,o as p,c as u,a as t,f as l,A as f,B as h,v as r,d as v,C as m}from"./index-55530894.js";import{_ as g}from"./LoadingCircleIcon-e936c0ea.js";const b=m('<h1 class="text-4xl tracking-tight font-extrabold text-gray-900"><span class="block xl:inline">想要</span><span class="block text-violet-600 xl:inline">分享文字片段</span><span class="block xl:inline">卻找不到地方貼貼剪剪嗎？</span></h1><p class="mt-3 text-base text-gray-500"> 我們提供一個簡單好用的地方，讓你可以在這裡打打字，並分享給朋友 </p>',2),_=t("div",{class:"mt-10 h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"},null,-1),y={class:"mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},w={class:"sm:text-center lg:text-right"},k=m('<h1 class="text-4xl tracking-tight font-extrabold text-gray-900"><span class="block xl:inline">你</span><span class="block text-violet-600 xl:inline">已經拿到</span><span class="block xl:inline">片段代碼了嗎？</span></h1><p class="mt-3 text-base text-gray-500"> 這裡這裡，往這裡輸入你拿到的代碼，我來幫你換成片段資料！ </p>',2),j={class:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end"},C={class:"rounded-md shadow mr-1"},V=["onKeydown"],B={class:"rounded-md shadow"},S={__name:"HomeView",setup(K){const a=x(),s=i(!1),e=i("");function c(){a.push("/writer")}function n(){e.value&&(setTimeout(()=>{a.push(`/r/${e.value}`)},300),s.value=!0)}return(N,o)=>(p(),u("div",null,[t("div",{class:"mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[t("div",{class:"sm:text-center lg:text-left"},[b,t("div",{class:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},[t("div",{class:"mt-3 sm:mt-0 sm:ml-3"},[t("button",{class:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-700 bg-violet-100 hover:bg-violet-200 md:py-4 md:text-lg md:px-10",onClick:c}," 開始打字 ")])])])]),_,t("div",y,[t("div",w,[k,t("div",j,[t("div",C,[l(t("input",{class:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 my-2 sm:my-0 md:py-4 md:text-lg md:px-10",type:"text",placeholder:"0code-xxxx","onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),onKeydown:h(n,["enter"])},null,40,V),[[f,e.value]])]),t("div",B,[t("button",{class:"w-full h-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 md:py-4 md:text-lg md:px-10",onClick:n},[l(v(g,{class:"inline mr-3 w-4 h-4 text-white animate-spin"},null,512),[[r,s.value]]),l(t("span",null,"查詢",512),[[r,!s.value]])])])])])])]))}};export{S as default};
