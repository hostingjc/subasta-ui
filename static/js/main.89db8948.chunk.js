(this["webpackJsonpsubasta-ui"]=this["webpackJsonpsubasta-ui"]||[]).push([[0],{49:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},90:function(e,t,s){},91:function(e,t,s){},92:function(e,t,s){},93:function(e,t,s){},94:function(e,t,s){},95:function(e,t,s){},96:function(e,t,s){},97:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(23),n=s.n(i),r=(s(49),s(15)),c=s.n(r),o=s(18),l=s(12),u=s(14),m=s.n(u),d=s(7),j=s.n(d),b=s(8),p=s.n(b),h=s(0),g=p()(j.a),v=Object(a.createContext)(),O=function(e){var t=e.children,s=Object(a.useState)(JSON.parse(localStorage.getItem("user"))||null),i=Object(l.a)(s,2),n=i[0],r=i[1];Object(a.useEffect)((function(){try{localStorage.setItem("user",JSON.stringify(n))}catch(e){localStorage.removeItem("user"),console.log(e)}}),[n]);var u={user:n,login:function(e){return Object(o.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("login",e).then((function(e){r(e.data.user),localStorage.setItem("token",e.data.token)})).catch((function(e){void 0===e.response?g.fire({type:"error",title:"Problemas en el Servidor",icon:"error",timer:3e3,timerProgressBar:!0,showConfirmButton:!1}):e.response.data.msg?g.fire({type:"error",title:e.response.data.msg,icon:"error",timer:3e3,timerProgressBar:!0,showConfirmButton:!1}):(e.response.data.error.email||e.response.data.error.password)&&g.fire({type:"error",title:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:e.response.data.error.email}),Object(h.jsx)("li",{children:e.response.data.error.password})]}),icon:"error",timer:3e3,width:400,timerProgressBar:!0,showConfirmButton:!1})}));case 2:case"end":return t.stop()}}),t)})))()},logout:function(){r(null),localStorage.removeItem("token")},isLogged:function(){return!!n},verifyAuth:function(){localStorage.getItem("token")?m.a.post("test",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})):console.log("No esta autenticado")}};return Object(h.jsx)(v.Provider,{value:u,children:t})},x=s(2),f=s(3);function N(){return Object(a.useContext)(v)}function w(){var e=N();return Object(h.jsx)("div",{id:"Wrapper",children:Object(h.jsx)("div",{id:"Header_wrapper",children:Object(h.jsxs)("header",{id:"Header",children:[Object(h.jsx)("div",{className:"header_placeholder"}),Object(h.jsx)("div",{id:"Top_bar",className:"loading",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"column one",children:Object(h.jsxs)("div",{className:"top_bar_left clearfix",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsxs)("a",{id:"logo",href:"../index.html",title:"Subasta en Voz Alta","data-height":"120","data-padding":"15",children:[Object(h.jsx)("img",{className:"logo-main scale-with-grid",src:"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-retina":"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-height":"",alt:""}),Object(h.jsx)("img",{className:"logo-sticky scale-with-grid",src:"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-retina":"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-height":"",alt:""}),Object(h.jsx)("img",{className:"logo-mobile scale-with-grid",src:"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-retina":"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-height":"",alt:""}),Object(h.jsx)("img",{className:"logo-mobile-sticky scale-with-grid",src:"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-retina":"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-height":"",alt:""})]})}),Object(h.jsxs)("div",{className:"menu_wrapper",children:[Object(h.jsx)("nav",{id:"menu",children:Object(h.jsxs)("ul",{id:"menu-menu",className:"menu menu-main",children:[Object(h.jsx)("li",{id:"menu-item-102",className:"menu-item menu-item-type-post_type menu-item-object-page menu-item-home",children:Object(h.jsx)(x.c,{exact:!0,to:"/",activeClassName:"active",children:Object(h.jsx)("span",{children:" Home"})})}),Object(h.jsx)("li",{id:"menu-item-100",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(h.jsx)(x.c,{exact:!0,to:"/about",activeClassName:"active",children:Object(h.jsx)("span",{children:"   About "})})}),Object(h.jsx)("li",{id:"menu-item-101",className:"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39 current_page_item",children:Object(h.jsx)(x.c,{exact:!0,to:"/contact",activeClassName:"active",children:Object(h.jsx)("span",{children:"  Contact  "})})}),Object(h.jsx)("li",{id:"menu-item-223",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(h.jsx)(x.c,{to:"/categories",activeClassName:"active",children:Object(h.jsx)("span",{children:"         Categories "})})}),!e.isLogged()&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{id:"menu-item-227",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(h.jsx)(x.c,{exact:!0,to:"/login",activeClassName:"active",children:Object(h.jsx)("span",{children:"Login"})})}),Object(h.jsx)("li",{id:"menu-item-96",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(h.jsx)(x.c,{exact:!0,to:"/register",activeClassName:"active",children:Object(h.jsx)("span",{children:"Register"})})})]}),e.isLogged()&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{id:"menu-item-96",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(h.jsx)(x.c,{exact:!0,to:"/dashboard",activeClassName:"active",children:Object(h.jsx)("span",{children:"Dashboard"})})}),Object(h.jsx)("li",{id:"menu-item-96",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(h.jsx)(x.c,{exact:!0,to:"/payments",activeClassName:"active",children:Object(h.jsx)("span",{children:"Payments"})})}),Object(h.jsx)("li",{id:"menu-item-98",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(h.jsx)(x.c,{exact:!0,to:"#",activeClassName:"active",children:Object(h.jsx)("span",{onClick:e.logout,children:"Salir"})})})]})]})}),Object(h.jsx)("a",{className:"responsive-menu-toggle ",href:"#",children:Object(h.jsx)("i",{className:"icon-menu-fine"})})]}),Object(h.jsx)("div",{className:"secondary_menu_wrapper"}),Object(h.jsx)("div",{className:"banner_wrapper"}),Object(h.jsx)("div",{className:"search_wrapper"})]})})})})]})})})}var y=s(5),q=s(20);function C(e){var t=e.component,s=Object(q.a)(e,["component"]),a=N(),i=Object(f.h)();return Object(h.jsx)(f.b,Object(y.a)(Object(y.a)({},s),{},{children:a.isLogged()?Object(h.jsx)(t,{}):Object(h.jsx)(f.a,{to:{pathname:"/login",state:{from:i}}})}))}function P(e){var t=e.component,s=Object(q.a)(e,["component"]),a=N();return Object(h.jsx)(f.b,Object(y.a)(Object(y.a)({},s),{},{children:a.isLogged()?Object(h.jsx)(f.a,{to:"/dashboard"}):Object(h.jsx)(t,{})}))}function S(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"AboutPage"})})}function _(e){var t=e.title;return Object(h.jsx)("div",{id:"Subheader",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"column one",children:Object(h.jsx)("h1",{className:"title",children:t})})})})}function A(){var e=N();return Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{title:"ContactPage"}),e.isLogged()&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"d-grid gap-2",children:Object(h.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Comprar"})})})]})}function B(){var e=N();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"DashboardPage"}),e.verifyAuth(),e.isLogged()&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"d-grid gap-2",children:Object(h.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Comprar"})})})]})}s(80);function k(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{id:"Subheader",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"column one",children:Object(h.jsx)("h1",{className:"title",children:"CAT\xc1LOGO DE LA SUBASTA"})})})}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium auctor aliquam. Sed faucibus nibh vitae orci consectetur pretium. Aenean id elit eget lectus vulputate volutpat in non neque. Proin non enim elementum tellus pellentesque tincidunt vitae vitae massa. Sed semper eleifend quam, sed porta ligula. Etiam mollis mauris in leo tincidunt, eget viverra lectus semper. In rutrum non sapien a gravida. Nulla leo erat, aliquet porttitor purus a, pretium ornare tortor. Aliquam viverra mollis ligula euismod fringilla. In convallis efficitur mauris. Aliquam nec euismod leo. Aenean nec metus a sem placerat posuere. Praesent tempus purus a sapien aliquet cursus. Duis interdum gravida magna sit amet commodo. Maecenas non libero laoreet, iaculis nunc a, eleifend nulla. Maecenas sit amet nulla lacus. Mauris euismod, justo lacinia bibendum consequat, mi magna laoreet nibh, ac finibus felis massa sit amet nunc. Nunc a mi scelerisque, efficitur ante et, sagittis lacus. Etiam vestibulum sit amet tellus ac dignissim. Vivamus in finibus leo, id sagittis dui. Mauris ac ante turpis. Donec sagittis ornare vehicula. Morbi eu metus id ex mattis finibus vitae auctor augue. Vivamus imperdiet gravida auctor. Pellentesque sit amet leo scelerisque, porta est ac, pellentesque neque. Fusce venenatis nulla hendrerit, pharetra ipsum et, faucibus turpis. Morbi eget vestibulum risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ac magna est. Aliquam interdum libero ac metus volutpat, at lacinia turpis euismod. Mauris id molestie nisi, ac dictum lacus. Suspendisse aliquet lacinia lectus eget pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus at commodo mi. Pellentesque ac egestas justo. Quisque a blandit lacus, non pulvinar metus. Vestibulum ac dui in odio placerat ullamcorper in at nibh. Praesent interdum massa justo, quis efficitur lorem posuere eu. Suspendisse in malesuada quam. Morbi gravida eu neque quis placerat. Quisque non cursus felis. Quisque ultricies ultricies est nec euismod. Sed non turpis nulla. In volutpat imperdiet maximus. Donec ut facilisis dui. Vestibulum nec tortor sit amet turpis facilisis fermentum ut vel est. Curabitur cursus eu ipsum a elementum. Proin ut congue libero. Aliquam cursus lacinia risus quis euismod. Fusce ut hendrerit urna. Sed ex augue, accumsan sed condimentum in, pellentesque eget turpis. Mauris sed leo pretium, eleifend enim a, ullamcorper nibh. Vivamus fringilla felis ac ligula faucibus, ac scelerisque mi egestas. Nullam quis ante fringilla, dapibus nibh a, laoreet justo. Sed laoreet ut nisi et feugiat. Ut finibus, nulla ut maximus iaculis, purus nibh iaculis elit, vel suscipit turpis lacus ac justo. Sed dignissim sem eget consectetur consectetur. Curabitur non mi ac elit pretium commodo. In fermentum fermentum molestie. Mauris turpis nulla, dapibus vel erat et, fermentum mattis felis. Quisque ut lobortis eros, vitae lobortis eros. Nam a sagittis elit, quis malesuada massa. Proin eleifend hendrerit euismod. Pellentesque ullamcorper, massa at dapibus egestas, diam lacus blandit urna, gravida egestas libero magna sed dolor. Pellentesque porta dolor eu est facilisis laoreet. Suspendisse nec tortor volutpat, rhoncus nibh nec, porttitor nulla. Nam non mattis ante. Donec nisi felis, condimentum ut ipsum vel, lacinia pretium dolor. Proin sed tempus nibh. Cras commodo magna quis posuere rutrum. Vivamus pellentesque turpis nulla, pellentesque congue augue ullamcorper quis. Donec sagittis sed sem ut consectetur. Praesent tempor rutrum nibh, nec molestie purus mollis eget. Aenean sollicitudin vehicula fringilla. Praesent sed risus at nisi egestas finibus. Nunc sed porttitor tortor, quis fermentum orci. Aliquam sem augue, facilisis convallis est at, vehicula eleifend urna. Curabitur pharetra, neque vel sollicitudin scelerisque, elit turpis egestas purus, pretium imperdiet tellus lectus a eros. Suspendisse id dapibus libero. Aliquam at lacinia ligula, eget bibendum tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur sit amet neque sollicitudin, malesuada dolor nec, condimentum sapien. Aliquam erat volutpat. Sed at leo ultrices, sollicitudin tellus nec, mattis nisl. Nulla facilisi. Aliquam nec venenatis ante. In mattis ligula vitae leo vulputate, a aliquet elit pharetra. Sed purus ante, laoreet a lacus ut, mattis imperdiet libero. Cras eget ante pharetra, tincidunt nibh at, euismod elit. Nullam volutpat, eros rutrum molestie interdum, ipsum mi ornare nibh, non vulputate risus augue quis urna. Duis porta nunc pharetra luctus sagittis. Sed dictum bibendum magna dapibus fringilla. Duis vitae ipsum elit. Nunc eu quam finibus, suscipit lorem id, suscipit massa. Nullam eget tortor ac nisi vestibulum ornare. Proin nec quam eget nulla malesuada imperdiet cursus ac leo. Sed vulputate diam id nisl gravida, condimentum cursus purus ultrices. Vivamus malesuada turpis velit. Phasellus bibendum ullamcorper libero, nec faucibus nulla posuere ac. Praesent vel diam ac eros varius sagittis non et lectus. Cras convallis leo at maximus mattis. Fusce ultrices tortor sapien, nec lacinia velit porttitor ut. Maecenas sit amet nulla maximus, blandit sapien in, vehicula nulla. Donec sagittis, sapien non elementum feugiat, augue sapien egestas nisi, sit amet dapibus eros purus a elit. Nulla facilisi. Sed risus velit, rutrum eget tincidunt eget, iaculis eget mauris. Sed venenatis vestibulum magna, vel dictum mi tincidunt ut. Duis porta, dolor ut bibendum venenatis, dui lacus suscipit arcu, vel ultricies dui odio eget arcu. Integer scelerisque vehicula enim. Cras a molestie odio, a tempus magna. Pellentesque sit amet rhoncus eros. Mauris id tincidunt nulla, nec convallis sapien. Nam porttitor mauris non maximus rhoncus. Donec congue felis id porta faucibus. Integer congue eros sit amet sollicitudin blandit. Morbi eu tincidunt est. Donec pulvinar hendrerit neque, at vehicula massa dignissim non. Morbi cursus laoreet malesuada. Duis eget elit luctus, interdum sem quis, lobortis neque. Maecenas imperdiet nisi leo, at posuere mi mollis eget. Aliquam erat volutpat. Maecenas efficitur aliquet ultrices. Duis sit amet urna non enim interdum lobortis ultricies sed lorem. Phasellus ullamcorper, orci id malesuada venenatis, ipsum nunc condimentum mauris, eget blandit turpis ante ut libero. Praesent eget placerat odio, id rutrum nulla. Aenean nec lacus mi. Pellentesque in tempor mauris, vitae luctus eros. Suspendisse justo magna, vestibulum vel blandit ac, semper vel velit. Fusce fermentum purus non purus commodo, ut iaculis lacus rutrum. Nunc auctor velit dolor, at porttitor purus condimentum nec. Praesent nec porta orci. Nunc eu nibh vitae magna dictum scelerisque et sit amet sapien. Nunc sagittis ac ex tincidunt tempus. Donec in odio eros. Sed consectetur rutrum est, et semper enim vulputate tempus. Sed eget lacus vel nunc rhoncus condimentum. Mauris aliquam ac elit vitae tincidunt. Donec a ligula at ante tristique dapibus. Vivamus accumsan, nisi et tincidunt rhoncus, ex lacus fringilla elit, sed cursus diam massa non dolor. Nam eget risus eros. Integer id nisl sed augue molestie elementum eu in odio. Maecenas in risus leo. Proin a turpis est. Sed hendrerit bibendum leo. Praesent pretium malesuada erat, nec tempus dui viverra eu. Donec nisi erat, vestibulum sit amet pulvinar eget, posuere nec purus. In urna enim, imperdiet vel est eu, varius imperdiet magna. Nam non elit sed elit consequat fermentum. Vivamus et metus nulla. Vivamus vel nulla sed metus vehicula laoreet id et ipsum. Duis fermentum euismod mollis. Curabitur dapibus non arcu sed vulputate. In tristique mi efficitur tempor lobortis. Etiam aliquet quam iaculis erat aliquam cursus. Sed lacinia lobortis feugiat. Cras porta nisi nec justo posuere laoreet. Maecenas faucibus lobortis tellus, at feugiat est porttitor quis. Aenean egestas urna nec urna feugiat bibendum. Proin a accumsan mauris. Cras ultrices, augue ac fermentum mollis, enim nisi placerat diam, ut lacinia urna ante vel massa. Donec porta tortor ut sapien efficitur consectetur. Quisque et mauris non dui volutpat fringilla quis vel tortor. Maecenas neque tellus, varius in leo euismod, dictum viverra est. Morbi eu libero eu lacus rhoncus varius. Sed euismod risus id nisl mattis, eget facilisis massa porta. Integer ultrices varius risus, ac mollis velit porttitor a. Integer ut vestibulum est, eget rhoncus mauris. Praesent cursus justo diam, a molestie libero fermentum quis. Morbi mollis libero quis nisl aliquet, mattis iaculis massa efficitur. Integer fermentum erat odio, ac tristique mauris tincidunt a. Quisque tincidunt rutrum neque id congue. Curabitur condimentum magna ut blandit pulvinar. Vivamus lacinia lorem eu risus volutpat fermentum. Quisque fermentum lacus at ante luctus, ut consequat tellus viverra. Duis eget ante vitae purus viverra convallis. Sed vitae semper odio, nec lacinia urna. Etiam dolor ipsum, eleifend vitae convallis ut, vehicula quis justo. Aliquam erat volutpat. Curabitur vulputate ante est, at pellentesque ligula ullamcorper eu. Fusce turpis sapien, dapibus ut nisl vel, ultricies venenatis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit metus, laoreet ac ligula et, volutpat consectetur eros. Morbi mi turpis, sodales eget ultrices sed, consectetur nec nisl. Phasellus molestie, mi vel eleifend interdum, est lectus malesuada dui, sit amet aliquam ipsum nulla nec lacus. Cras sit amet placerat quam. Donec cursus non massa sit amet ornare."})]})}var D=s(13),I=(s(81),p()(j.a));function M(){var e,t=Object(f.g)(),s=null===(e=Object(f.h)().state)||void 0===e?void 0:e.from,i=Object(a.useState)({email:"",password:""}),n=Object(l.a)(i,2),r=n[0],c=n[1],o=N(),u=function(e){c(Object(y.a)(Object(y.a)({},r),{},Object(D.a)({},e.target.name,e.target.value)))};return Object(h.jsx)("div",{className:"container mt-3",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-4 offset-4 justify-content-md-center",children:Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),I.fire({type:"error",title:"Ingresando",icon:"info",timer:1e4,timerProgressBar:!0,showConfirmButton:!1}),console.log("enviando datos..."+r.email+" "+r.password);var a={email:r.email,password:r.password};o.login(a),t.push(s||"/dashboard")},children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("div",{className:"mb-4 ",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Email",onChange:u,name:"email"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",onChange:u,name:"password"})]}),Object(h.jsx)("div",{className:"d-grid gap-2",children:Object(h.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Ingresar"})}),Object(h.jsx)("div",{class:"forgot",children:Object(h.jsx)("p",{className:"",children:Object(h.jsx)(x.c,{to:"/forgot",children:"Olvide Contrase\xf1a"})})})]})})})})})})}var E=s.p+"static/media/mono.c43e6ceb.gif",L={width:"450px",heght:"450px"};function V(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{title:"404 - La Pagina no Existe"}),Object(h.jsx)("div",{className:"container mt-3 py-5",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-4 offset-3 justify-content-md-center text-right",children:Object(h.jsx)("img",{src:E,style:L,alt:"Mono"})})})})]})}function z(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"PaymentsPage"})})}function R(){var e=Object(f.i)().username;return Object(h.jsx)("div",{children:Object(h.jsxs)("h1",{children:["ProfilePage: ",e]})})}var F={},Q=function(){var e=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("forgot",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("reset",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();F.useRegister=function(e){return m.a.post("register",e)},F.useForgot=Q,F.useReset=T;var U=F,J=(s(82),p()(j.a));function G(){var e,t=Object(f.g)(),s=null===(e=Object(f.h)().state)||void 0===e?void 0:e.from,i=Object(a.useState)({name:"",email:"",password:"",confirm_password:""}),n=Object(l.a)(i,2),r=n[0],c=n[1],o=function(e){c(Object(y.a)(Object(y.a)({},r),{},Object(D.a)({},e.target.name,e.target.value)))};return Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{title:"Registro"}),Object(h.jsx)("div",{className:"container mt-3 py-5",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-6 offset-3 justify-content-md-center",children:Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),J.fire({type:"error",title:"Registrando",icon:"info",timer:1e4,timerProgressBar:!0,showConfirmButton:!1});var a={name:r.name,email:r.email,password:r.password,confirm_password:r.confirm_password};U.useRegister(a).then((function(e){console.log(e),t.push(s||"/revision")})).catch((function(e){J.fire({type:"error",title:Object(h.jsxs)("ul",{children:["  ",Object(h.jsx)("li",{children:e.response.data.error.name}),Object(h.jsx)("li",{children:e.response.data.error.email}),Object(h.jsx)("li",{children:e.response.data.error.password}),Object(h.jsx)("li",{children:e.response.data.error.confirm_password}),"  "]}),icon:"error",timer:3e3,width:600,timerProgressBar:!0,showConfirmButton:!1})}))},className:"needs-validation",novalidate:!0,children:[Object(h.jsxs)("div",{className:"mb-4 ",children:[Object(h.jsx)("label",{children:"Nombre"}),Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Name",onChange:o,name:"name"})]}),Object(h.jsxs)("div",{className:"mb-4 ",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Email",onChange:o,name:"email"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",onChange:o,name:"password"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{children:"Confirmar Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",onChange:o,name:"confirm_password"})]}),Object(h.jsx)("div",{className:"d-grid gap-2",children:Object(h.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Registro"})})]})})})})})})]})}var H=p()(j.a),W=p()(j.a);function K(){var e,t=Object(f.g)(),s=null===(e=Object(f.h)().state)||void 0===e?void 0:e.from,i=Object(a.useState)({email:""}),n=Object(l.a)(i,2),r=n[0],c=n[1],o=Object(a.useState)(null),u=Object(l.a)(o,2),m=u[0];u[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{title:"Olvide mi Contrase\xf1a"}),Object(h.jsx)("div",{className:"container mt-3 my-5",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-4 offset-4 justify-content-md-center",children:Object(h.jsx)("div",{className:"card",children:Object(h.jsxs)("div",{className:"card-body",children:[m,Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),H.fire({type:"error",title:"Enviando Email",icon:"info",timer:1e3,timerProgressBar:!0,showConfirmButton:!1});var a={email:r.email};U.useForgot(a).then((function(e){t.push(s||"/email-reset"),console.log(e)})).catch((function(e){e.response.data.email&&W.fire({type:"error",title:e.response.data.email,icon:"error",timer:3e3,timerProgressBar:!0,showConfirmButton:!1}),e.response.data.message&&H.fire({type:"error",title:e.response.data.message,icon:"error",timer:3e3,timerProgressBar:!0,showConfirmButton:!1}),console.log(e.response.data.email),console.log(e.response.data.message)}))},children:[Object(h.jsxs)("div",{className:"mb-4 ",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Email",onChange:function(e){c(Object(y.a)(Object(y.a)({},r),{},Object(D.a)({},e.target.name,e.target.value)))},name:"email"})]}),Object(h.jsx)("div",{className:"d-grid gap-2",children:Object(h.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Enviar"})})]})]})})})})})]})}function X(e){var t,s=p()(j.a),i=Object(f.g)(),n=null===(t=Object(f.h)().state)||void 0===t?void 0:t.from,r=Object(a.useState)({password:"",password_confirm:""}),c=Object(l.a)(r,2),o=c[0],u=c[1],m=Object(f.i)().token,d=function(e){u(Object(y.a)(Object(y.a)({},o),{},Object(D.a)({},e.target.name,e.target.value)))};return Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{title:"Resetear Contrase\xf1a"}),Object(h.jsx)("div",{className:"container mt-3 py-5",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-4 offset-4 justify-content-md-center",children:Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.fire({type:"error",title:"Cambiando Password...",icon:"info",timer:1e4,timerProgressBar:!0,showConfirmButton:!1}),console.log("enviando datos..."+m+o.confirm_password+" "+o.password);var t={token:m,password:o.password,confirm_password:o.confirm_password};U.useReset(t).then((function(e){console.log(e),s.fire({title:"Contrase\xf1a Cambiada",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),i.push(n||"/login")})).catch((function(e){console.log(e),console.log(e.response.data.message),e.response.data.password||e.response.data.confirm_password?s.fire({type:"error",title:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:e.response.data.password}),Object(h.jsx)("li",{children:e.response.data.confirm_password}),"  "]}),icon:"error",timer:3e3,width:500,timerProgressBar:!0,showConfirmButton:!1}):e.response.data.message&&s.fire({type:"error",title:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:e.response.data.message})," "]}),icon:"error",timer:3e3,timerProgressBar:!0,showConfirmButton:!1})}))},children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",onChange:d,name:"password"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{children:"Confirmar Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",onChange:d,name:"confirm_password"})]}),Object(h.jsx)("div",{className:"d-grid gap-2",children:Object(h.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Registro"})})]})})})})})})]})}function Y(){var e=Object(f.h)(),t=Object(f.g)(),s=new URLSearchParams(e.search),a=parseInt(s.get("skip"))||0,i=parseInt(s.get("limit"))||15;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"CategoriesPage"}),Object(h.jsxs)("h2",{children:["Skip: ",a]}),Object(h.jsxs)("h2",{children:["Limit: ",i]}),Object(h.jsx)("button",{onClick:function(){s.set("skip",a+i),t.push({search:s.toString()})},children:"Next"})]})}function Z(){var e=Object(f.j)().url;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(x.c,{exact:!0,to:"".concat(e),activeClassName:"active",children:"All"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.c,{to:"".concat(e,"/terror"),activeClassName:"active",children:"Terror"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.c,{to:"".concat(e,"/action"),activeClassName:"active",children:"Action"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.c,{to:"".concat(e,"/anime"),activeClassName:"active",children:"Anime"})})]}),Object(h.jsxs)(f.d,{children:[Object(h.jsx)(f.b,{exact:!0,path:"/categories",component:Y}),Object(h.jsx)(C,{path:"/categories/terror",component:$}),Object(h.jsx)(f.b,{exact:!0,path:"/categories/action",children:Object(h.jsx)("h1",{children:"Category Action"})}),Object(h.jsx)(f.b,{exact:!0,path:"/categories/anime",children:Object(h.jsx)("h1",{children:"Category Anime"})}),Object(h.jsx)(f.b,{path:"*",children:Object(h.jsx)(f.a,{to:"/404"})})]})]})}function $(){var e=Object(f.j)().url;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{to:"/categories/terror",children:"All"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{to:"/categories/terror/gore",children:"Gore"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{to:"/categories/terror/suspense",children:"Suspense"})})]}),Object(h.jsxs)(f.d,{children:[Object(h.jsx)(f.b,{exact:!0,path:"".concat(e),children:Object(h.jsx)("h3",{children:"Category Terror"})}),Object(h.jsx)(f.b,{exact:!0,path:"".concat(e,"/gore"),children:Object(h.jsx)("h3",{children:"Gore"})}),Object(h.jsx)(f.b,{exact:!0,path:"".concat(e,"/suspense"),children:Object(h.jsx)("h3",{children:"Suspense"})}),Object(h.jsx)(f.b,{path:"*",children:Object(h.jsx)(f.a,{to:"/404"})})]})]})}function ee(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{title:"Aprobaci\xf3n en Proceso"}),Object(h.jsx)("div",{className:"container mt-3 py-5",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-6 offset-3 justify-content-md-center",children:Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("p",{children:"Estimado Usuario se est\xe1n verificando sus datos, se le enviara un email al ser aprobado."})})})})})})]})}function te(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{title:"Revise Su Email"}),Object(h.jsx)("div",{className:"container mt-3 py-5",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-6 offset-3 justify-content-md-center",children:Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("p",{children:"Porfavor revise su Email donde le enviamos el enlace para cambiar su contrase\xf1a"})})})})})})]})}var se=s(44),ae=p()(j.a),ie=Object(f.k)((function(e){return e.history.listen((function(){if(localStorage.getItem("token")){var e=Object(se.a)(localStorage.getItem("token"));console.log(1e3*e.exp),console.log(Date.now()),1e3*e.exp<Date.now()?(localStorage.removeItem("token"),localStorage.removeItem("user"),ae.fire({title:Object(h.jsx)("p",{children:"Cerrando Session"}),footer:"Copyright 2021",timer:6e4,icon:"warning",showCancelButton:!1,showConfirmButton:!1,didOpen:function(){window.location.replace("/dashboard")}}).then((function(){return ae.fire(Object(h.jsx)("p",{children:"Cerrando Session"}))}))):console.log("hola")}})),Object(h.jsx)("div",{})}));function ne(){return Object(h.jsxs)(x.a,{children:[Object(h.jsx)(w,{}),Object(h.jsxs)(f.d,{children:[Object(h.jsx)(f.b,{exact:!0,path:"/about",component:S}),Object(h.jsx)(f.b,{exact:!0,path:"/contact",component:A}),Object(h.jsx)(f.b,{exact:!0,path:"/",component:k}),Object(h.jsx)(f.b,{exact:!0,path:"/profile/:username",component:R}),Object(h.jsx)(f.b,{path:"/categories",component:Z}),Object(h.jsx)(f.b,{exact:!0,path:"/signin",children:Object(h.jsx)(f.a,{to:"/login"})}),Object(h.jsx)(P,{exact:!0,path:"/forgot",component:K}),Object(h.jsx)(P,{exact:!0,path:"/reset/:token",component:X}),Object(h.jsx)(P,{exact:!0,path:"/email-reset",component:te}),Object(h.jsx)(P,{exact:!0,path:"/revision",component:ee}),Object(h.jsx)(P,{exact:!0,path:"/login",component:M}),Object(h.jsx)(P,{exact:!0,path:"/register",component:G}),Object(h.jsx)(C,{exact:!0,path:"/dashboard",component:B}),Object(h.jsx)(C,{exact:!0,path:"/payments",component:z}),Object(h.jsx)(f.b,{path:"/404",component:V}),Object(h.jsx)(f.b,{path:"*",children:Object(h.jsx)(f.a,{to:"/404"})})]}),Object(h.jsx)(ie,{})]})}s(83),s(84),s(85),s(86),s(87),s(88),s(89),s(90),s(91),s(92),s(93),s(94),s(95),s(96);var re=function(){return Object(a.useEffect)((function(){return document.body.className="page-template page-template-template-portfolio page-template-template-portfolio-php page page-id-39  color-custom style-default button-flat layout-full-width if-zoom if-border-hide hide-love no-shadows header-classic header-fw header-boxed minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menu-link-color menuo-right menuo-no-borders mobile-tb-hide mobile-mini-mr-ll tablet-sticky mobile-sticky be-reg-20951 wpb-js-composer js-comp-ver-6.0.2 vc_responsive",function(){document.body.className=""}})),Object(h.jsx)(O,{children:Object(h.jsx)(ne,{})})};m.a.defaults.baseURL="http://subastavozalta.herokuapp.com/api/",m.a.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),n.a.render(Object(h.jsx)(re,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.89db8948.chunk.js.map