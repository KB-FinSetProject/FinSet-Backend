import{_ as c,o as m,c as p,a as s,u as y,r as _,b as k,d as I,e as r,w as i,v as d,f as G,g as u,F as S,h,i as N,j as V}from"./index-qdpuCGoe.js";const C={},F={class:"container"};function L(f,e){return m(),p("div",F,e[0]||(e[0]=[s("header",{class:"header"},[s("nav",{class:"navbar fixed-top bg-body-tertiary border-bottom"},[s("div",{class:"navbar-custom container-fluid d-flex align-items-center",style:{"background-color":"white"}},[s("div",{class:"nav-item flex-fill d-flex"},[s("i",{class:"fas fa-arrow-left icon-large",onclick:"history.back()"})]),s("div",{class:"nav-item flex-fill d-flex justify-content-center"},[s("span",{class:"navbar-brand"},"로그인")]),s("div",{class:"nav-item flex-fill d-flex justify-content-center"})])])],-1)]))}const j=c(C,[["render",L],["__scopeId","data-v-2e93be9e"]]),B={class:"container"},D={class:"form-floating mb-3"},P={class:"form-floating mb-3"},q=["disabled"],E={class:"mt-3 text-center"},R={__name:"SignIn",setup(f){const e=h(),g=y(),a=N(),t=_({id:"",password:""}),b=k(""),v=I(()=>!(t.id&&t.password)),x=async()=>{var n;console.log(t);try{await g.login(t),a.query.next?e.push({name:a.query.name}):e.push("/")}catch(o){console.error("에러=========",o),b.value=((n=o.response)==null?void 0:n.data)||"로그인 실패. 다시 시도하세요."}};return(n,o)=>{const w=V("router-link");return m(),p(S,null,[r(j),s("div",B,[o[8]||(o[8]=s("h1",{style:{"font-weight":"300"}},"FIND EASY,",-1)),o[9]||(o[9]=s("h1",null,[s("span",{class:"normal"},"FIN"),s("span",{class:"highlight"},"D"),s("span",{class:"normal"},"Y")],-1)),o[10]||(o[10]=s("br",null,null,-1)),s("div",D,[i(s("input",{type:"id",class:"form-control custom-input",id:"floatingInput",placeholder:"name@example.com","onUpdate:modelValue":o[0]||(o[0]=l=>t.id=l)},null,512),[[d,t.id]]),o[3]||(o[3]=s("label",{for:"floatingInput"},"이메일 주소",-1))]),s("div",P,[i(s("input",{type:"password",class:"form-control custom-input",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":o[1]||(o[1]=l=>t.password=l)},null,512),[[d,t.password]]),o[4]||(o[4]=s("label",{for:"floatingPassword"},"비밀번호",-1))]),o[11]||(o[11]=s("br",null,null,-1)),s("button",{class:"custom-button",disabled:v.value,onClick:x},"로그인",8,q),s("div",E,[r(w,{to:"/signup",class:"text-muted"},{default:G(()=>o[5]||(o[5]=[u("회원가입")])),_:1}),o[6]||(o[6]=u(" | ")),s("button",{onClick:o[2]||(o[2]=(...l)=>n.handleGoogleLogin&&n.handleGoogleLogin(...l)),class:"underline-button"},"간편 로그인"),o[7]||(o[7]=s("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",alt:"Google Logo",class:"google-logo"},null,-1))])])],64)}}},U=c(R,[["__scopeId","data-v-68825285"]]);export{U as default};
