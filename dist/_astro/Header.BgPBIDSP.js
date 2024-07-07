import{n as o,j as e,F as h,c as s}from"./styled.D3AmjP7j.js";import{T as i,M as r}from"./index.9kgZfKs-.js";import{I as m}from"./index.Ch64DQ-b.js";import{r as a}from"./index.a3y3H-wG.js";const f=o.div`
    position: relative;
    z-index: 3;

    a {
        font-size: 35px;
        line-height: 30px;
        font-weight: 700;
        display: inline-flex;
        position: relative;

        span {
            &:after {
                content: "";
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 25%;
                height: 3px;
                background-color: ${i.primary};
                z-index: 1;
                transition: width 0.2s linear;
            }
        }

        &:hover span:after {
            width: 100%;
        }

        img {
            height: 100px;
            width: 100px;
            object-fit: contain;
        }
    }
`,u=()=>e.jsx(f,{children:e.jsx("a",{href:"/",children:e.jsx(m,{srcLocal:"logo",alt:"logo"})})}),y=o.header`
    width: 100%;

    padding: 20px 0;

    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 40px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    animation: ${h} 1s;
    animation-delay: 0.4s;
    transition: background 0.5s;

    &.scrolled {
        background: rgba(0, 0, 0, 0.8);
    }
`,b=o.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 40px;

    ${r.max("lg")} {
        padding: 0 20px;
    }
`,j=o.div`
    display: flex;
    gap: 50px;

    ${r.max("xl")} {
        gap: 20px;
    }
`,v=o.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    ${r.max("lg")} {
        position: fixed;
        top: 0;
        right: -100%;

        background: ${i.secondary};
        height: 100dvh;
        z-index: 2;
        transform: translateX(100%);
        transition: transform 0.3s linear, right 0.7s;
        padding-top: 85px;

        width: clamp(300px, 80%, 300px);

        ${({$isOpen:t})=>t&&s`
                right: 0;
                transform: translateX(0);
            `};
    }
`,w=o.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;

    ${r.min("lg")} {
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    ${r.max("lg")} {
        gap: 10px;
        padding: 20px 10px 53px;
        overflow: auto;
        width: 100%;
        height: 100%;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    > li a {
        text-decoration: none;
        color: ${i.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        line-height: 25px;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 1px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
        padding: 10px;
        border-radius: 5px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;

        ${r.max("lg")} {
            padding: 10px 20px;
        }

        &:hover {
            background-color: ${i.primary};
            color: ${i.secondary};

            text-shadow: none;
        }

        img {
            margin: 0 15px 0 0;

            max-width: 100px;
            max-height: 30px;

            ${r.max("xl")} {
                margin: 0 10px 0 0;
            }
        }
    }
`,$=o.button`
    position: relative;
    z-index: 3;

    background: ${i.primary};
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s, color 0.3s;
    width: 45px;
    height: 45px;
    border-color: transparent;

    ${r.min("lg")} {
        display: none;
    }
`,p=o.span`
    background: ${i.secondary};
    position: absolute;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    transition: transform 0.3s, background 0.3s, top 0.3s;
    pointer-events: none;

    width: 50%;
    height: 3px;

    ${r.max("lg")} {
        height: 2px;
    }

    ${({$open:t})=>t?s`
                  transform: translate(-50%, -50%) rotate(45deg);
                  top: 50%;
              `:s`
                  top: calc(50% - 4px);
              `}

    &:not(:first-of-type) {
        ${({$open:t})=>t?s`
                      transform: translate(-49%, -50%) rotate(-45deg);
                      top: 50%;
                  `:s`
                      top: calc(50% + 4px);
                  `}
    }
`,k=({state:t})=>{const{open:n,setOpen:l}=t,x=()=>{l(!n)},c=g=>{const d=g.target;!d.closest("nav")&&n&&d.tagName!=="BUTTON"&&l(!1)};return a.useEffect(()=>{if(n)return document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}},[n]),e.jsxs($,{$open:n,onClick:x,"aria-label":"Menu","aria-expanded":n,role:"button",tabIndex:0,children:[e.jsx(p,{$open:n}),e.jsx(p,{$open:n})]})},L=()=>{const[t,n]=a.useState(!1);return e.jsxs(j,{children:[e.jsx(v,{$isOpen:t,children:e.jsxs(w,{children:[e.jsx("li",{children:e.jsx("a",{href:"/",children:"Inicio"})}),e.jsx("li",{children:e.jsx("a",{href:"/servicios",children:"Servicios"})}),e.jsx("li",{children:e.jsx("a",{href:"/nosotros",children:"Nosotros"})}),e.jsx("li",{children:e.jsx("a",{href:"/contact",children:"Contáctenos"})})]})}),e.jsx(k,{state:{open:t,setOpen:n}})]})},O=()=>(a.useEffect(()=>{const t=document.querySelector("header"),n=()=>{window.scrollY>0?t?.classList.add("scrolled"):t?.classList.remove("scrolled")};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),e.jsx(y,{children:e.jsxs(b,{children:[e.jsx(u,{}),e.jsx(L,{})]})}));export{O as Header};
