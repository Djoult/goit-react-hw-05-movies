"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936,747],{9736:function(n,e,r){r.r(e),r.d(e,{default:function(){return Z}});var t,i,o=r(1413),c=r(9439),a=r(2791),l=r(7689),s=r(2458),d=r(3936),x=r(168),u=r(5706),h=u.Z.ul(t||(t=(0,x.Z)(["\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 24px;\n  margin-bottom: 32px;\n"]))),p=u.Z.p(i||(i=(0,x.Z)(["\n  color: black;\n  font-size: 24px;\n"]))),f=r(184),Z=function(){var n=(0,l.UO)().movieId,e=(0,a.useState)([]),r=(0,c.Z)(e,2),t=r[0],i=r[1];return(0,a.useEffect)((function(){(0,s.y)(n).then(i).catch(console.log)}),[n]),(0,f.jsx)(f.Fragment,{children:t.length?(0,f.jsx)(h,{children:t.map((function(n){return(0,f.jsx)(d.vt,(0,o.Z)({},n),n.id)}))}):(0,f.jsx)(p,{children:"There are not information about movie cast "})})}},1747:function(n,e,r){r.r(e),r.d(e,{default:function(){return g}});var t,i,o,c,a=r(2791),l=r(7689),s=r(168),d=r(5706),x=r(1087),u=d.Z.div(t||(t=(0,s.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),h=d.Z.header(i||(i=(0,s.Z)(["\n  position: sticky;\n  top: 0;\n  padding: 10px;\n  z-index: 2;\n  background-color: rgba(32, 6, 98, 0.9);\n"]))),p=d.Z.nav(o||(o=(0,s.Z)(["\n  display: flex;\n  align-items: baseline;\n  gap: 30px;\n"]))),f=(0,d.Z)(x.OL)(c||(c=(0,s.Z)(["\n  color: #ffffff;\n  text-decoration: none;\n\n  &.active {\n    color: #9d28b4;\n    font-weight: 500;\n  }\n"]))),Z=r(184),g=function(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(h,{children:(0,Z.jsx)(u,{children:(0,Z.jsxs)(p,{children:[(0,Z.jsx)(f,{to:"/",children:"Home"}),(0,Z.jsx)(f,{to:"/movies",children:"Movies"})]})})}),(0,Z.jsx)("main",{children:(0,Z.jsx)(u,{padding:!0,children:(0,Z.jsx)(a.Suspense,{fallback:(0,Z.jsx)("div",{children:"Wait"}),children:(0,Z.jsx)(l.j3,{})})})})]})}},4387:function(n,e,r){r.r(e),r.d(e,{default:function(){return Z}});var t,i,o=r(1413),c=r(9439),a=r(2791),l=r(7689),s=r(2458),d=r(3936),x=r(168),u=r(5706),h=u.Z.ul(t||(t=(0,x.Z)(["\n  color: #100d0d;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  margin-bottom: 24px;\n"]))),p=u.Z.p(i||(i=(0,x.Z)(["\n  color: black;\n  font-size: 24px;\n"]))),f=r(184),Z=function(){var n=(0,l.UO)().movieId,e=(0,a.useState)([]),r=(0,c.Z)(e,2),t=r[0],i=r[1];return(0,a.useEffect)((function(){(0,s.Bt)(n).then((function(n){i(n)})).catch(console.log)}),[n]),(0,f.jsx)(f.Fragment,{children:t.length?(0,f.jsx)(h,{children:t.map((function(n){return(0,f.jsx)(d.rf,(0,o.Z)({},n),n.id)}))}):(0,f.jsx)(p,{children:"There are not any reviews for this movie yet "})})}},3936:function(n,e,r){r.d(e,{vt:function(){return D},aN:function(){return k},GK:function(){return G},rf:function(){return A}});r(1747),r(9736),r(4387);var t,i,o,c,a,l,s,d,x,u,h,p,f,Z,g,j,m,v,b=r(6286),w=r(184),k=function(n){var e=n.visible;return(0,w.jsx)(b.fe,{height:"90",width:"90",color:"#232caa",ariaLabel:"tail-spin-loading",radius:"1",visible:e})},y=r(168),z=r(5706),S=z.Z.div(t||(t=(0,y.Z)(["\n  display: flex;\n  gap: 24px;\n  padding: 16px;\n  background-color: #1a217a;\n  border-radius: 16px;\n"]))),_=z.Z.div(i||(i=(0,y.Z)([""]))),F=z.Z.img(o||(o=(0,y.Z)(["\n  width: 350px;\n  height: 400px;\n  /* object-fit: cover; */\n"]))),M=z.Z.div(c||(c=(0,y.Z)(["\n  font-size: 16px;\n  color: white;\n"]))),O=z.Z.h2(a||(a=(0,y.Z)(["\n  margin-bottom: 4px;\n\n  font-size: 32px;\n  color: white;\n"]))),L=z.Z.p(l||(l=(0,y.Z)(["\n  margin-bottom: 8px;\n"]))),U=z.Z.span(s||(s=(0,y.Z)(["\n  color: #c8c82f;\n  color: ",";\n  color: ",";\n"])),(function(n){return n.rating>60&&"green"}),(function(n){return Number(n.rating)<45&&"red"})),C=z.Z.h3(d||(d=(0,y.Z)(["\n  margin-top: 16px;\n  margin-bottom: 4px;\n"]))),E=z.Z.ul(x||(x=(0,y.Z)(["\n  display: flex;\n  gap: 8px;\n  color: #2bc098;\n"]))),G=function(n){var e=n.movieData;return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(S,{children:[(0,w.jsx)(_,{children:(0,w.jsx)(F,{src:e.src,alt:e.title})}),(0,w.jsxs)(M,{children:[(0,w.jsx)(O,{children:e.title}),(0,w.jsxs)(L,{children:["(",e.release_date,")"]}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("p",{children:["User score:"," ",(0,w.jsxs)(U,{rating:e.userScore,children:[e.userScore,"%"]})]}),(0,w.jsx)(C,{children:"Overview"}),(0,w.jsx)("p",{children:e.overview}),(0,w.jsx)(C,{children:"Genres"}),(0,w.jsx)(E,{children:e.genresList})]})]})]})})},I=z.Z.li(u||(u=(0,y.Z)([""]))),N=z.Z.img(h||(h=(0,y.Z)(["\n  margin-bottom: 4px;\n\n  width: 100px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 12px;\n"]))),T=z.Z.h3(p||(p=(0,y.Z)(["\n  margin-bottom: 2px;\n  width: 40px;\n  font-style: italic;\n  font-size: 14px;\n  color: black;\n"]))),B=z.Z.p(f||(f=(0,y.Z)(["\n  width: 40px;\n  font-weight: 700;\n  font-style: italic;\n  color: #4e2bc0;\n"]))),D=function(n){var e=n.name,r=n.character,t=n.src;return(0,w.jsxs)(I,{children:[(0,w.jsx)(N,{src:t,alt:e}),(0,w.jsx)(T,{children:e}),(0,w.jsx)(B,{children:r})]})},H=(r(2791),r(9126)),K=z.Z.li(Z||(Z=(0,y.Z)([""]))),P=z.Z.div(g||(g=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n"]))),R=(0,z.Z)(H.RPM)(j||(j=(0,y.Z)(["\n  color: ",";\n"])),(function(n){return n.inputcolor||"palevioletred"})),W=z.Z.h3(m||(m=(0,y.Z)(["\n  color: #434245;\n"]))),q=z.Z.p(v||(v=(0,y.Z)(["\n  color: #968787;\n"]))),A=function(n){var e=n.author,r=n.content;return(0,w.jsxs)(K,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(R,{inputcolor:"#".concat(Math.floor(16777215*Math.random()).toString(16))}),(0,w.jsx)(W,{children:e})]}),(0,w.jsx)(q,{children:r})]})}}}]);
//# sourceMappingURL=936.770aacf5.chunk.js.map