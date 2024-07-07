import{n as p,j as r}from"./styled.D3AmjP7j.js";import"./index.a3y3H-wG.js";import{T as i,M as a}from"./index.9kgZfKs-.js";import{T as m}from"./index.C6cuBC9J.js";import{C as l}from"./index.BMz1IMsx.js";import{FadeIn as s}from"./FadeIn.DG8VDrzI.js";const g=p.section`
    background: ${i.primary};
    padding-top: 90px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin: -43px 0 50px;
    z-index: 1;
    position: relative;
    padding-bottom: 70px;
`,h=p.div`
    color: ${i.secondary};

    margin-bottom: 40px;
    max-width: 550px;

    p {
        color: ${i.tertiary};
    }

    h2 {
        font-size: 60px;
        line-height: 1.2;
        margin-bottom: 10px;

        ${a.max("lg")} {
            font-size: 40px;
            line-height: 1.2;
        }
    }
`,c=p.div`
    background: ${i.cuaternary};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 40px;
    border-radius:20px;

    ${a.max("lg")} {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    h3 {
        font-size: 20px;
        line-height: 1.2;
        margin-bottom: 5px;
    }

    p {
        margin: 0;
        font-size: 16px;
        line-height: 1.2;
        letter-spacing: -0.5px;
        opacity: 0.8;
    }
    img {
        width: 100%;
        height: 150px;
        
        object-fit:cover;
        margin-bottom: 10px;
    }

    
`,C=({cards:t,description:n,title:o})=>{if(!t||!t.length)return null;const x=t.map((e,d)=>r.jsx(s,{children:r.jsxs(m,{children:[r.jsx("img",{src:e.image,alt:e.title}),r.jsx("h3",{children:e.title}),r.jsx("p",{children:e.description})]})},d));return r.jsx(g,{children:r.jsxs(l,{children:[o&&n&&r.jsx(s,{children:r.jsxs(h,{children:[n&&r.jsx("p",{children:n}),o&&r.jsx("h2",{children:o})]})}),r.jsx(c,{children:x})]})})};export{C as ServiceCards};
