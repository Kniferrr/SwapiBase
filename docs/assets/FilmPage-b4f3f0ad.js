import{u as t,j as s,I as u,a as v,C as f,F as g}from"./index-1f82d88b.js";import{V as C,P as F,S as P,a as L}from"./SpeciesComponent-3d0e2c77.js";const N=({data:n})=>{const{id:e}=t(),c=e;return s.jsxs("div",{className:"film",children:[s.jsx(u,{id:c,resource:"films"}),s.jsx("h1",{children:n.title}),s.jsxs("p",{children:["Episode: ",n.episode_id]}),s.jsxs("p",{children:["Director: ",n.director]}),s.jsxs("p",{children:["Producer: ",n.producer]}),s.jsxs("p",{children:["Release Date: ",n.release_date]}),s.jsxs("p",{children:["Opening Crawl: ",n.opening_crawl]})]})},V=()=>{const{filmId:n}=t(),{data:e,isLoading:c,isError:d,error:a}=v("films",()=>g(n,"films"),{refetchOnWindowFocus:!1});if(c||!e||!e.species)return s.jsx("div",{children:"Loading..."});if(d)return s.jsxs("div",{children:["Error: ",(a==null?void 0:a.message)||"An error occurred"]});const h=e,o=e.characters,p=e.planets,m=e.starships,l=e.vehicles,x=e.species,j=l&&l.length>0?s.jsxs(s.Fragment,{children:[s.jsx("h2",{children:"Vehicles:"}),s.jsx("div",{className:"vehicles",children:l.map((i,r)=>s.jsx(C,{vehicle:i},r))})]}):s.jsx("div",{});return s.jsx(s.Fragment,{children:s.jsx("div",{children:s.jsxs("div",{className:"app",children:[s.jsx(N,{data:h}),s.jsx("h2",{children:"Characters:"}),s.jsx("div",{className:"characters",children:o.map((i,r)=>s.jsx(f,{character:i},r))}),s.jsx("h2",{children:"Planets:"}),s.jsx("div",{className:"planets",children:p.map((i,r)=>s.jsx(F,{planet:i},r))}),s.jsx("h2",{children:"Starships:"}),s.jsx("div",{className:"starships",children:m.map((i,r)=>s.jsx(P,{starship:i},r))}),j,s.jsx("h2",{children:"Species:"}),s.jsx("div",{className:"species",children:x.map((i,r)=>s.jsx(L,{species:i},r))})]})})})};export{V as default};
