import{c as i}from"./styled.D3AmjP7j.js";const r={base:0,sm:576,md:768,lg:992,xl:1200,xxl:1440,xxxl:1920},d={min:a=>`@media (min-width: ${r[a]}px)`,max:a=>`@media (max-width: ${r[a]}px)`,between:(a,t)=>`@media (min-width: ${r[a]}px) and (max-width: ${r[t]}px)`},e={white:"#FFFFFF",dark:"#101118",darkLighter:"#20222e",ocean:"#4358E6"};i`
    :root {
        --primary: ${e.white};
        --secondary: ${e.darkLighter};
        --tertiary: ${e.dark};
        --cuaternary: ${e.ocean}
    }
`;const m={primary:"var(--primary)",secondary:"var(--secondary)",tertiary:"var(--tertiary)",cuaternary:"var(--cuaternary)"};export{d as M,m as T};
