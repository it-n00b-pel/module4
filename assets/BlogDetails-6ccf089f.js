import{d,b as h,r as u,u as m,j as o,L as e,R as r,c as x,a as p,n as A}from"./index-f83445cf.js";import{D as j}from"./DynamicModuleLoader-5bf19aee.js";import{H as N}from"./Helmet-a7c0d336.js";const f=_=>{var s;return(s=_.blog)==null?void 0:s.data},w="_blog_ao1dn_1",v="_blog__img_ao1dn_7",D="_blog__text_ao1dn_22",T="_blog__title_ao1dn_29",k="_blog__author_ao1dn_38",B="_blog__tag_ao1dn_38",y="_blog__description_ao1dn_47",I="_blog__authorBlock_ao1dn_55",$="_blog__authorData_ao1dn_80",S="_blog__authorImg_ao1dn_91",L="_blog__authorAbout_ao1dn_95",R="_blog__authorName_ao1dn_95",E="_blog__authorNick_ao1dn_106",H="_blog__authorAboutText_ao1dn_116",M="_blog__authorAboutText__condition_ao1dn_129",U="_blog__navigation_ao1dn_138",O="_blog__navigationText_ao1dn_143",P="_blog__leftArrow_ao1dn_157",F="_blog__rightArrow_ao1dn_157",a={blog:w,blog__img:v,blog__text:D,blog__title:T,blog__author:k,blog__tag:B,blog__description:y,blog__authorBlock:I,blog__authorData:$,blog__authorImg:S,blog__authorAbout:L,blog__authorName:R,blog__authorNick:E,blog__authorAboutText:H,blog__authorAboutText__condition:M,blog__navigation:U,blog__navigationText:O,blog__leftArrow:P,blog__rightArrow:F},G="/module4/assets/leftArrow-65e08f57.svg",q="/module4/assets/rightArrow-8438dc04.jpg",z="/module4/assets/author-6d060f00.png",C=()=>{const _=d(),s=h();u.useEffect(()=>{_.id&&s(V(+_.id))},[_.id]);const t=m(f);if(!t)return null;const g=`(${Math.round(+t.readTime/60)} mins read)`,c=new Date(t.createdAt),i={month:"long",day:"numeric",year:"numeric"},b=c.toLocaleDateString("en-US",i);let l="";return t.author&&(l=`${t.author.name} · ${b} ${g}`),o.jsxs(o.Fragment,{children:[o.jsxs(N,{children:[o.jsx("title",{children:t.seo.title}),o.jsx("meta",{name:"description",content:t.seo.description}),o.jsx("meta",{name:"keywords",content:t.seo.keywords})]}),o.jsxs("div",{className:a.blog,children:[o.jsx("div",{className:a.blog__img,style:{backgroundImage:`url(${t.image})`}}),o.jsxs("div",{className:a.blog__text,children:[o.jsx("h3",{className:a.blog__title,children:t.title}),o.jsx("p",{className:a.blog__author,children:l}),o.jsxs("p",{className:a.blog__tag,children:["#",t.tag.name]}),o.jsx("p",{dangerouslySetInnerHTML:{__html:t.description},className:a.blog__description})]}),o.jsxs("div",{className:a.blog__authorBlock,children:[o.jsx("h3",{children:"ABOUT AUTHOR"}),o.jsxs("div",{className:a.blog__authorData,children:[o.jsx("img",{src:z,alt:"",className:a.blog__authorImg}),o.jsxs("div",{className:a.blog__authorAbout,children:[o.jsx("h4",{className:a.blog__authorName,children:t.author.name}),o.jsxs("p",{className:a.blog__authorNick,children:["@",t.author.nick]}),o.jsx("p",{className:a.blog__authorAboutText,children:t.author.about})]})]}),o.jsx("p",{className:a.blog__authorAboutText__condition,children:t.author.about})]}),o.jsxs("div",{className:a.blog__navigation,children:[o.jsxs(e,{to:`${r.blog_details}${t.prevId}`,className:a.blog__leftArrow,children:[o.jsx("img",{src:G,alt:"leftArrow",title:"leftArrow"}),o.jsx("p",{className:a.blog__navigationText,children:"Go Back"})]}),o.jsxs(e,{to:`${r.blog_details}${t.nextId}`,className:a.blog__rightArrow,children:[o.jsx("p",{className:a.blog__navigationText,children:"Next up"}),o.jsx("img",{src:q,alt:"rightArrow",title:"rightArrow"})]})]})]})]})},J={data:void 0},n=x({name:"blogData",initialState:J,reducers:{setBlogData(_,s){_.data=s.payload.data}}}),K=n.reducer,{setBlogData:Q}=n.actions,V=p("blog/fetchBlogData",async(_,s)=>{const t=await A.getBlogData(_);s.dispatch(Q({data:t.data}))}),W={blog:K},oo=()=>o.jsx(j,{reducers:W,children:o.jsx(C,{})});export{oo as default};
