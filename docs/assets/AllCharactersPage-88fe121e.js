import{p as o,j as r,u as l,a as h,L as d,P as g,b as j}from"./index-4ab4ef78.js";const x=({data:s})=>{const e=o(s.url);return r.jsx("a",{href:`#/characters/${e}`,children:r.jsxs("div",{className:"film-card",children:[r.jsx("img",{className:"planet-img",src:`https://starwars-visualguide.com/assets/img/characters/${e}.jpg`,onError:n=>{const i=n.target;i.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"},alt:"planet-img"}),r.jsx("h2",{children:s.name}),r.jsxs("p",{children:[r.jsx("strong",{children:"Height:"})," ",s.height]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Mass:"})," ",s.mass]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Hair color:"})," ",s.hair_color]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Skin color:"})," ",s.skin_color]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Eye color:"})," ",s.eye_color]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Birth year:"})," ",s.birth_year]}),r.jsxs("p",{children:[r.jsx("strong",{children:"Gender:"})," ",s.gender]})]})})},m=()=>{let{page:s}=l();const{data:e,isLoading:n,isError:i,error:a}=h(`people${s}`,()=>j("people",s),{refetchOnWindowFocus:!1});if(n||!e||!e.results)return r.jsx("div",{children:r.jsx(d,{})});if(i)return r.jsxs("div",{children:["Error: ",(a==null?void 0:a.message)||"An error occurred"]});const t=r.jsxs("div",{children:[e.results.map(c=>r.jsx(x,{data:c},c.name)),r.jsx(g,{data:e,category:"characters"})]});return r.jsx(r.Fragment,{children:t})};export{m as default};