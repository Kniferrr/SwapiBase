import{j as s,a as d,L as o,b as a}from"./index-4ab4ef78.js";const h=({data:r,counter:e})=>s.jsxs("div",{className:"character-card",children:[s.jsx("img",{src:`https://starwars-visualguide.com/assets/img/films/${e}.jpg`,alt:""}),s.jsx("h2",{children:r.title}),s.jsxs("p",{children:[s.jsx("strong",{children:"Director:"})," ",r.director]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Producer:"})," ",r.producer]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Release Date:"})," ",r.release_date]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Episode ID:"})," ",r.episode_id]})]}),x=()=>{let r=1;const{data:e,isLoading:t,isError:l,error:i}=d("films",()=>a("films","1"),{refetchOnWindowFocus:!1});if(t||!e||!e.results)return s.jsx(o,{});if(l)return s.jsxs("div",{children:["Error: ",(i==null?void 0:i.message)||"An error occurred"]});const c=s.jsx(s.Fragment,{children:s.jsx("div",{children:e.results.map(n=>s.jsx("a",{href:`#/films/${r}`,children:s.jsx(h,{data:n,counter:r++})},n.episode_id))})});return s.jsx(s.Fragment,{children:c})};export{x as default};