import{j as s,u as m}from"./index-b415c43b.js";import{u as p,F as j}from"./FetchSwapiData-d40aed15.js";import{V as u,P as f,S as v,a as C}from"./SpeciesComponent-20a66ea7.js";import{p as F}from"./ParseIdServis-ad718e0a.js";const _=({film:r})=>{const e=F(r),{data:i,isLoading:a,isError:t,error:l}=p(`films${e}`,()=>j(e,"films"),{refetchOnWindowFocus:!1});return a||!i?s.jsx("div",{children:"Loading..."}):t?s.jsxs("div",{children:["Error: ",(l==null?void 0:l.message)||"An error occurred"]}):s.jsxs("div",{className:"film-info",children:[s.jsx("img",{className:"character-img",src:`https://starwars-visualguide.com/assets/img/films/${e}.jpg`,onError:o=>{const h=o.target;h.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"},alt:"film img"}),s.jsx("h2",{className:"character-name",children:i.title}),s.jsxs("p",{children:[s.jsx("strong",{children:"Episode:"})," ",i.episode_id]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Director:"})," ",i.director]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Producer:"})," ",i.producer]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Release Date:"})," ",i.release_date]})]})};const N=({data:r})=>{const{id:e}=m();return s.jsxs("div",{className:"character",children:[s.jsx("img",{src:`https://starwars-visualguide.com/assets/img/characters/${e}.jpg`,onError:i=>{const a=i.target;a.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"},alt:"character img"}),s.jsx("h1",{children:r.name}),s.jsxs("p",{children:["height: ",r.height]}),s.jsxs("p",{children:["mass: ",r.mass]}),s.jsxs("p",{children:["hair_color: ",r.hair_color]}),s.jsxs("p",{children:["skin_color: ",r.skin_color]}),s.jsxs("p",{children:["eye_color: ",r.eye_color]}),s.jsxs("p",{children:["birth_year: ",r.birth_year]}),s.jsxs("p",{children:["gender: ",r.gender]})]})},$=()=>{const{id:r}=m(),{data:e,isLoading:i,isError:a,error:t}=p(`people${r}`,()=>j(r,"people"),{refetchOnWindowFocus:!1});if(i||!e||!e.species)return s.jsx("div",{children:"Loading..."});if(a)return s.jsxs("div",{children:["Error: ",(t==null?void 0:t.message)||"An error occurred"]});const l=e.films,o=e.homeworld,h=e.starships,d=e.vehicles,x=e.species,g=d&&d.length>0?s.jsxs(s.Fragment,{children:[s.jsx("h2",{children:"Vehicles:"}),s.jsx("div",{className:"vehicles",children:d.map((c,n)=>s.jsx(u,{vehicle:c},n))})]}):s.jsx("div",{});return s.jsx(s.Fragment,{children:s.jsxs("div",{children:[s.jsx(N,{data:e}),s.jsx("h2",{children:"Films:"}),s.jsx("div",{className:"film",children:l.map((c,n)=>s.jsx(_,{film:c},n))}),s.jsx("h2",{children:"Planet:"}),s.jsx("div",{className:"planets",children:s.jsx(f,{planet:o},o)}),s.jsx("h2",{children:"Starships:"}),s.jsx("div",{className:"starships",children:h.map((c,n)=>s.jsx(v,{starship:c},n))}),g,s.jsx("h2",{children:"Species:"}),s.jsx("div",{className:"species",children:x.map((c,n)=>s.jsx(C,{species:c},n))})]})})};export{$ as default};
