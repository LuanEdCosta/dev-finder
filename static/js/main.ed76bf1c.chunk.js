(this["webpackJsonpdev-finder"]=this["webpackJsonpdev-finder"]||[]).push([[0],{31:function(e,a,t){e.exports=t(63)},36:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(27),l=t.n(r),s=t(6),i=t(5),m=t(7),u=(t(36),t(8)),o=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(i.f)();return c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"searchContainer"},c.a.createElement("div",{className:"titleContainer"},c.a.createElement("h1",{className:"title"},c.a.createElement(u.a,{icon:"search",className:"icon"}),c.a.createElement("span",null,"Dev Finder")),c.a.createElement("p",{className:"subtitle"},"Find your favorite devs using the GitHub API")),c.a.createElement("form",{className:"inputContainer",onSubmit:function(e){e.preventDefault(),t&&t.trim()&&l.push("/search/".concat(t.trim()))}},c.a.createElement("input",{type:"text",className:"input",placeholder:"GitHub Username",value:t,onChange:function(e){return r(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"searchButton"},"Find"))))},E=t(15),d=t.n(E),b=t(30),v=t.n(b).a.create({baseURL:"https://api.github.com"}),f=(t(60),function(){var e=Object(i.g)().user,a=Object(n.useState)({}),t=Object(m.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)(!1),E=Object(m.a)(o,2),b=E[0],f=E[1],p=Object(n.useState)(!1),h=Object(m.a)(p,2),N=h[0],g=h[1];return Object(n.useEffect)((function(){!function(){var a,t;d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.prev=1,n.next=4,d.a.awrap(v.get("/users/".concat(e)));case 4:a=n.sent,t=a.data,l(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),g(!0);case 12:f(!1);case 13:case"end":return n.stop()}}),null,null,[[1,9]])}()}),[e]),c.a.createElement("div",{className:"search-result-page"},!b&&c.a.createElement("div",{className:"searchResult"},c.a.createElement("div",{className:"header"},c.a.createElement(s.b,{to:"/",className:"backButton"},c.a.createElement(u.a,{icon:"chevron-left",fixedWidth:!0})),c.a.createElement("h3",{className:"title"},N?"Error":r.login)),c.a.createElement("div",{className:"body"},N?c.a.createElement("div",{className:"user-not-found"},c.a.createElement(u.a,{className:"icon",icon:"times-circle"}),c.a.createElement("h3",null,"User Not Found")):c.a.createElement("div",{className:"profile"},c.a.createElement("img",{className:"image",src:r.avatar_url,alt:"User"}),(r.name||r.bio||r.location)&&c.a.createElement("div",{className:"profileTexts"},c.a.createElement("div",{className:"title"},r.name),c.a.createElement("div",{className:"subtitle"},r.bio),c.a.createElement("div",{className:"subtitle"},r.location))))))}),p=(t(61),function(){return c.a.createElement("div",{className:"page-not-found"},c.a.createElement("h1",null,"Page Not Found"),c.a.createElement(s.b,{to:"/",className:"goBack"},"Go Back to Home"))}),h=function(){return c.a.createElement(s.a,{basename:"/dev-finder"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(o,null)),c.a.createElement(i.a,{path:"/search/:user"},c.a.createElement(f,null)),c.a.createElement(i.a,{path:"*"},c.a.createElement(p,null))))},N=t(9),g=t(11);N.b.add(g.b,g.a,g.c);t(62);l.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ed76bf1c.chunk.js.map