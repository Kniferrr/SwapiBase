import{j as s,u as p}from"./index-500668ab.js";import{u as m,F as j}from"./FetchSwapiData-8ae581aa.js";import{p as f}from"./ParseIdServis-ad718e0a.js";import{V as v,P as C,S as F,a as N}from"./SpeciesComponent-c3cb7ea4.js";const w=({character:i})=>{const e=f(i),{data:r,isLoading:n,isError:t,error:l}=m(`people${i}`,()=>j(e,"people"),{refetchOnWindowFocus:!1});return n||!r?s.jsx("div",{children:"Loading..."}):t?s.jsxs("div",{children:["Error: ",(l==null?void 0:l.message)||"An error occurred"]}):s.jsx("a",{href:`#/characters/${e}`,children:s.jsxs("div",{className:"character-info",children:[s.jsx("img",{className:"character-img",src:`https://starwars-visualguide.com/assets/img/characters/${e}.jpg`,onError:o=>{const h=o.target;h.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"},alt:"character-img"}),s.jsx("h2",{className:"character-name",children:r.name}),s.jsxs("p",{children:[s.jsx("strong",{children:"Height:"})," ",r.height," cm"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Mass:"})," ",r.mass," kg"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Hair Color:"})," ",r.hair_color]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Skin Color:"})," ",r.skin_color]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Eye Color:"})," ",r.eye_color]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Birth Year:"})," ",r.birth_year]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Gender:"})," ",r.gender]})]})})};const E=({data:i})=>{const{filmId:e}=p();return s.jsxs("div",{className:"film",children:[s.jsx("img",{src:`https://starwars-visualguide.com/assets/img/films/${e}.jpg`,onError:r=>{const n=r.target;n.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"},alt:"film img"}),s.jsx("h1",{children:i.title}),s.jsxs("p",{children:["Episode: ",i.episode_id]}),s.jsxs("p",{children:["Director: ",i.director]}),s.jsxs("p",{children:["Producer: ",i.producer]}),s.jsxs("p",{children:["Release Date: ",i.release_date]}),s.jsxs("p",{children:["Opening Crawl: ",i.opening_crawl]})]})},_=()=>{const{filmId:i}=p(),{data:e,isLoading:r,isError:n,error:t}=m("films",()=>j(i,"films"),{refetchOnWindowFocus:!1});if(r||!e||!e.species)return s.jsx("div",{children:"Loading..."});if(n)return s.jsxs("div",{children:["Error: ",(t==null?void 0:t.message)||"An error occurred"]});const l=e,o=e.characters,h=e.planets,x=e.starships,d=e.vehicles,g=e.species,u=d&&d.length>0?s.jsxs(s.Fragment,{children:[s.jsx("h2",{children:"Vehicles:"}),s.jsx("div",{className:"vehicles",children:d.map((c,a)=>s.jsx(v,{vehicle:c},a))})]}):s.jsx("div",{});return s.jsx(s.Fragment,{children:s.jsx("div",{children:s.jsxs("div",{className:"app",children:[s.jsx(E,{data:l}),s.jsx("h2",{children:"Characters:"}),s.jsx("div",{className:"characters",children:o.map((c,a)=>s.jsx(w,{character:c},a))}),s.jsx("h2",{children:"Planets:"}),s.jsx("div",{className:"planets",children:h.map((c,a)=>s.jsx(C,{planet:c},a))}),s.jsx("h2",{children:"Starships:"}),s.jsx("div",{className:"starships",children:x.map((c,a)=>s.jsx(F,{starship:c},a))}),u,s.jsx("h2",{children:"Species:"}),s.jsx("div",{className:"species",children:g.map((c,a)=>s.jsx(N,{species:c},a))})]})})})};export{_ as default};
