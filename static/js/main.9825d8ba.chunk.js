(this.webpackJsonpnotemaking=this.webpackJsonpnotemaking||[]).push([[0],{71:function(e,a,t){e.exports=t(83)},76:function(e,a,t){},77:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),o=t.n(l),i=(t(76),t(77),t(17)),c=t(113),m=t(126),s=t(85),u=t(124),d=t(129),g=t(120),p=t(51),E=t.n(p),b=t(50),f=t.n(b),h=t(33),v=t.n(h),y=t(127),N=t(121),k=t(123),w=t(122),j=t(130),x=t(49),S=t.n(x),C=t(128),O=t(125),I=t(39),T=t(48),B=t(118),R=t(131),L=t(119),F=t(116),A=Object(c.a)((function(e){return{noteinput:{marginLeft:"7px",width:"96%",marginTop:"7px",backgroundColor:"white",borderRadius:3}}}));function M(e){var a,t=e.addnote,n=A(),l=r.a.useState({note:""}),o=Object(i.a)(l,2),c=o[0],m=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{variant:"filled",className:n.noteinput},r.a.createElement(R.a,{htmlFor:"note"},"Add Notes Name"),r.a.createElement(B.a,{id:"note",type:"text",value:c.note,onChange:(a="note",function(e){m(Object(T.a)(Object(T.a)({},c),{},Object(I.a)({},a,e.target.value)))}),endAdornment:r.a.createElement(L.a,{position:"end"},r.a.createElement(g.a,{edge:"end",onClick:function(){t(c.note)}},r.a.createElement(v.a,null)))})))}var W=Object(c.a)((function(e){return{listroot:{marginTop:10,width:"100%",maxWidth:400,backgroundColor:"blue",color:"white",borderRadius:5,maxHeight:"700px",overflow:"auto"},root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4},dividerlist:{height:1,margin:4},paper:{position:"absolute",width:400,height:75,backgroundColor:"#fbb",borderRadius:5,border:"2px solid #000",marginLeft:"37%",marginTop:"10%"},noteinput:{marginLeft:"15%",width:"70%",marginTop:"70px",backgroundColor:"white",borderRadius:3}}}));var Y=function(){var e=W(),a=function(){I(!1)},t=function(){L(!1)},l=Object(n.useState)(localStorage.getItem("notesarr")),o=Object(i.a)(l,2),c=o[0],p=o[1],b=Object(n.useState)(!1),h=Object(i.a)(b,2),x=h[0],I=h[1],T=Object(n.useState)(!1),B=Object(i.a)(T,2),R=B[0],L=B[1],F=Object(n.useState)(""),A=Object(i.a)(F,2),Y=A[0],z=A[1],H=Object(n.useState)(" "),J=Object(i.a)(H,2),P=J[0],V=J[1],$=Object(n.useState)(""),q=Object(i.a)($,2),D=q[0],G=q[1];if(localStorage.getItem("notesarr")&&" "!=P)var K=c.split(",").filter((function(e){return new RegExp(P).test(e)})).map((function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{onClick:function(){document.getElementById("multiline").value=localStorage.getItem(a),setTimeout((function(){z(localStorage.getItem(a)||"")}),100),G(a)}},r.a.createElement(w.a,null,r.a.createElement(j.a,{style:{color:"black",backgroundColor:"white"}},r.a.createElement(S.a,null))),r.a.createElement(k.a,{primary:a})),r.a.createElement(u.a,{className:e.dividerlist,orientation:"horizontal"}))}));if(localStorage.getItem("notesarr")&&" "==P)K=c.split(",").map((function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{onClick:function(){document.getElementById("multiline").value=localStorage.getItem(a),setTimeout((function(){z(localStorage.getItem(a)||"")}),100),G(a)}},r.a.createElement(w.a,null,r.a.createElement(j.a,{style:{color:"black",backgroundColor:"white"}},r.a.createElement(S.a,null))),r.a.createElement(k.a,{primary:a})),r.a.createElement(u.a,{className:e.dividerlist,orientation:"horizontal"}))}));return c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex justify-content-center",style:{marginTop:20}},r.a.createElement(O.a,{color:"primary",variant:"extended"},r.a.createElement("b",null,"Make Your Notes here!!"),r.a.createElement(f.a,{style:{marginLeft:8}}))),r.a.createElement("div",{className:"container",style:{marginTop:50,padding:30,backgroundColor:"whitesmoke",borderRadius:10}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-5 col-md-12 col-sm-12"},r.a.createElement(m.a,{component:"form",className:e.root},r.a.createElement(s.a,{className:e.input,placeholder:"Search",onChange:function(e){V(e.target.value)},inputProps:{"aria-label":"search"}}),r.a.createElement(g.a,{type:"submit",className:e.iconButton,"aria-label":"search"},r.a.createElement(E.a,null)),r.a.createElement(u.a,{className:e.divider,orientation:"vertical"}),r.a.createElement(g.a,{color:"primary",onClick:function(){I(!0)},className:e.iconButton,"aria-label":"directions"},r.a.createElement(v.a,null)),r.a.createElement(d.a,{className:e.paper,open:x,onClose:a,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement(M,{addnote:function(e){""!=e&&(p(c.concat(","+e)),localStorage.setItem("notesarr",c.concat(","+e))),a(),t()}}))),r.a.createElement(y.a,{className:e.listroot},K)),r.a.createElement("div",{className:"col"},r.a.createElement(C.a,{style:{minHeight:500,width:"100%"},id:"multiline",onChange:function(e){!function(e){z(e),localStorage.setItem(D,e)}(e.target.value)},multiline:!0,rows:30,defaultValue:Y,variant:"outlined"}))))):r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-center",style:{marginTop:20}},r.a.createElement(O.a,{color:"primary",variant:"extended"},r.a.createElement("b",null,"Make Your Notes here!!"),r.a.createElement(f.a,{style:{marginLeft:8}}))),r.a.createElement("div",{style:{backgroundColor:"whitesmoke",marginTop:40,marginLeft:10,marginRight:10,padding:30,borderRadius:8}},r.a.createElement("h3",{style:{textAlign:"center",marginTop:10}},"You have Not yet added any notes !"),r.a.createElement("div",{className:"d-flex justify-content-center",style:{marginTop:100}},r.a.createElement(m.a,{component:"form",className:e.root},r.a.createElement(s.a,{className:e.input,placeholder:"Search",inputProps:{"aria-label":"search"}}),r.a.createElement(g.a,{type:"submit",className:e.iconButton,"aria-label":"search"},r.a.createElement(E.a,null)),r.a.createElement(u.a,{className:e.divider,orientation:"vertical"}),r.a.createElement(g.a,{color:"primary",onClick:function(){L(!0)},className:e.iconButton,"aria-label":"directions"},r.a.createElement(v.a,null)),r.a.createElement(d.a,{className:e.paper,open:R,onClose:t,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement(M,{addnote:function(e){p(e),localStorage.setItem("notesarr",e)}}))))))};var z=function(){return r.a.createElement("div",null,r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(82);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.9825d8ba.chunk.js.map