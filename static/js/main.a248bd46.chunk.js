(this["webpackJsonpsubasta-ui"]=this["webpackJsonpsubasta-ui"]||[]).push([[0],{47:function(e,t,i){},72:function(e,t,i){},79:function(e,t,i){},80:function(e,t,i){},81:function(e,t,i){},82:function(e,t,i){},83:function(e,t,i){},84:function(e,t,i){},85:function(e,t,i){},86:function(e,t,i){},87:function(e,t,i){},88:function(e,t,i){},89:function(e,t,i){},90:function(e,t,i){},91:function(e,t,i){},92:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i(19),n=i.n(s),c=(i(47),i(11)),r=i(10),u=i.n(r),l=i(0),o=Object(a.createContext)(),m=function(e){var t=e.children,i=Object(a.useState)(JSON.parse(localStorage.getItem("user"))||null),s=Object(c.a)(i,2),n=s[0],r=s[1];Object(a.useEffect)((function(){try{localStorage.setItem("user",JSON.stringify(n))}catch(e){localStorage.removeItem("user"),console.log(e)}}),[n]);var m={user:n,login:function(e){u.a.post("login",e).then((function(e){r(e.data.user),localStorage.setItem("token",e.data.token)})).catch((function(e){console.log(e)}))},logout:function(){r(null),localStorage.removeItem("token")},isLogged:function(){return!!n},verifyAuth:function(){localStorage.getItem("token")?u.a.post("test",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})):console.log("No esta autenticado")}};return Object(l.jsx)(o.Provider,{value:m,children:t})},d=i(2),j=i(3);function b(){return Object(a.useContext)(o)}function p(){var e=b();return Object(l.jsx)("div",{id:"Wrapper",children:Object(l.jsx)("div",{id:"Header_wrapper",children:Object(l.jsxs)("header",{id:"Header",children:[Object(l.jsx)("div",{className:"header_placeholder"}),Object(l.jsx)("div",{id:"Top_bar",className:"loading",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"column one",children:Object(l.jsxs)("div",{className:"top_bar_left clearfix",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsxs)("a",{id:"logo",href:"../index.html",title:"Subasta en Voz Alta","data-height":"120","data-padding":"15",children:[Object(l.jsx)("img",{className:"logo-main scale-with-grid",src:"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-retina":"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-height":"",alt:""}),Object(l.jsx)("img",{className:"logo-sticky scale-with-grid",src:"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-retina":"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-height":"",alt:""}),Object(l.jsx)("img",{className:"logo-mobile scale-with-grid",src:"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-retina":"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-height":"",alt:""}),Object(l.jsx)("img",{className:"logo-mobile-sticky scale-with-grid",src:"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-retina":"https://autismoenvozalta.com/cosas/assets/wp-content/uploads/2020/10/logo-subasta-2020-06.png","data-height":"",alt:""})]})}),Object(l.jsxs)("div",{className:"menu_wrapper",children:[Object(l.jsx)("nav",{id:"menu",children:Object(l.jsxs)("ul",{id:"menu-menu",className:"menu menu-main",children:[Object(l.jsx)("li",{id:"menu-item-102",className:"menu-item menu-item-type-post_type menu-item-object-page menu-item-home",children:Object(l.jsx)(d.c,{exact:!0,to:"/",activeClassName:"active",children:Object(l.jsx)("span",{children:" Home"})})}),Object(l.jsx)("li",{id:"menu-item-100",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(l.jsx)(d.c,{exact:!0,to:"/about",activeClassName:"active",children:Object(l.jsx)("span",{children:"   About "})})}),Object(l.jsx)("li",{id:"menu-item-101",className:"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-39 current_page_item",children:Object(l.jsx)(d.c,{exact:!0,to:"/contact",activeClassName:"active",children:Object(l.jsx)("span",{children:"  Contact  "})})}),Object(l.jsx)("li",{id:"menu-item-223",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(l.jsx)(d.c,{to:"/categories",activeClassName:"active",children:Object(l.jsx)("span",{children:"         Categories "})})}),!e.isLogged()&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("li",{id:"menu-item-227",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(l.jsx)(d.c,{exact:!0,to:"/login",activeClassName:"active",children:Object(l.jsx)("span",{children:"Login"})})}),Object(l.jsx)("li",{id:"menu-item-96",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(l.jsx)(d.c,{exact:!0,to:"/register",activeClassName:"active",children:Object(l.jsx)("span",{children:"Register"})})})]}),e.isLogged()&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("li",{id:"menu-item-96",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(l.jsx)(d.c,{exact:!0,to:"/dashboard",activeClassName:"active",children:Object(l.jsx)("span",{children:"Dashboard"})})}),Object(l.jsx)("li",{id:"menu-item-96",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(l.jsx)(d.c,{exact:!0,to:"/payments",activeClassName:"active",children:Object(l.jsx)("span",{children:"Payments"})})}),Object(l.jsx)("li",{id:"menu-item-98",className:"menu-item menu-item-type-post_type menu-item-object-page",children:Object(l.jsx)(d.c,{exact:!0,to:"#",activeClassName:"active",children:Object(l.jsx)("span",{onClick:e.logout,children:"Salir"})})})]})]})}),Object(l.jsx)("a",{className:"responsive-menu-toggle ",href:"#",children:Object(l.jsx)("i",{className:"icon-menu-fine"})})]}),Object(l.jsx)("div",{className:"secondary_menu_wrapper"}),Object(l.jsx)("div",{className:"banner_wrapper"}),Object(l.jsx)("div",{className:"search_wrapper"})]})})})})]})})})}var h=i(8),g=i(16);function v(e){var t=e.component,i=Object(g.a)(e,["component"]),a=b(),s=Object(j.h)();return Object(l.jsx)(j.b,Object(h.a)(Object(h.a)({},i),{},{children:a.isLogged()?Object(l.jsx)(t,{}):Object(l.jsx)(j.a,{to:{pathname:"/login",state:{from:s}}})}))}function x(e){var t=e.component,i=Object(g.a)(e,["component"]),a=b();return Object(l.jsx)(j.b,Object(h.a)(Object(h.a)({},i),{},{children:a.isLogged()?Object(l.jsx)(j.a,{to:"/dashboard"}):Object(l.jsx)(t,{})}))}function O(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"AboutPage"})})}function f(e){var t=e.title;return Object(l.jsx)("div",{id:"Subheader",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"column one",children:Object(l.jsx)("h1",{className:"title",children:t})})})})}function N(){var e=b();return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{title:"ContactPage"}),e.isLogged()&&Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"d-grid gap-2",children:Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Comprar"})})})]})}function q(){var e=b();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"DashboardPage"}),e.verifyAuth(),e.isLogged()&&Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"d-grid gap-2",children:Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Comprar"})})})]})}i(72);function y(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{id:"Subheader",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"column one",children:Object(l.jsx)("h1",{className:"title",children:"CAT\xc1LOGO DE LA SUBASTA"})})})}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium auctor aliquam. Sed faucibus nibh vitae orci consectetur pretium. Aenean id elit eget lectus vulputate volutpat in non neque. Proin non enim elementum tellus pellentesque tincidunt vitae vitae massa. Sed semper eleifend quam, sed porta ligula. Etiam mollis mauris in leo tincidunt, eget viverra lectus semper. In rutrum non sapien a gravida. Nulla leo erat, aliquet porttitor purus a, pretium ornare tortor. Aliquam viverra mollis ligula euismod fringilla. In convallis efficitur mauris. Aliquam nec euismod leo. Aenean nec metus a sem placerat posuere. Praesent tempus purus a sapien aliquet cursus. Duis interdum gravida magna sit amet commodo. Maecenas non libero laoreet, iaculis nunc a, eleifend nulla. Maecenas sit amet nulla lacus. Mauris euismod, justo lacinia bibendum consequat, mi magna laoreet nibh, ac finibus felis massa sit amet nunc. Nunc a mi scelerisque, efficitur ante et, sagittis lacus. Etiam vestibulum sit amet tellus ac dignissim. Vivamus in finibus leo, id sagittis dui. Mauris ac ante turpis. Donec sagittis ornare vehicula. Morbi eu metus id ex mattis finibus vitae auctor augue. Vivamus imperdiet gravida auctor. Pellentesque sit amet leo scelerisque, porta est ac, pellentesque neque. Fusce venenatis nulla hendrerit, pharetra ipsum et, faucibus turpis. Morbi eget vestibulum risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ac magna est. Aliquam interdum libero ac metus volutpat, at lacinia turpis euismod. Mauris id molestie nisi, ac dictum lacus. Suspendisse aliquet lacinia lectus eget pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus at commodo mi. Pellentesque ac egestas justo. Quisque a blandit lacus, non pulvinar metus. Vestibulum ac dui in odio placerat ullamcorper in at nibh. Praesent interdum massa justo, quis efficitur lorem posuere eu. Suspendisse in malesuada quam. Morbi gravida eu neque quis placerat. Quisque non cursus felis. Quisque ultricies ultricies est nec euismod. Sed non turpis nulla. In volutpat imperdiet maximus. Donec ut facilisis dui. Vestibulum nec tortor sit amet turpis facilisis fermentum ut vel est. Curabitur cursus eu ipsum a elementum. Proin ut congue libero. Aliquam cursus lacinia risus quis euismod. Fusce ut hendrerit urna. Sed ex augue, accumsan sed condimentum in, pellentesque eget turpis. Mauris sed leo pretium, eleifend enim a, ullamcorper nibh. Vivamus fringilla felis ac ligula faucibus, ac scelerisque mi egestas. Nullam quis ante fringilla, dapibus nibh a, laoreet justo. Sed laoreet ut nisi et feugiat. Ut finibus, nulla ut maximus iaculis, purus nibh iaculis elit, vel suscipit turpis lacus ac justo. Sed dignissim sem eget consectetur consectetur. Curabitur non mi ac elit pretium commodo. In fermentum fermentum molestie. Mauris turpis nulla, dapibus vel erat et, fermentum mattis felis. Quisque ut lobortis eros, vitae lobortis eros. Nam a sagittis elit, quis malesuada massa. Proin eleifend hendrerit euismod. Pellentesque ullamcorper, massa at dapibus egestas, diam lacus blandit urna, gravida egestas libero magna sed dolor. Pellentesque porta dolor eu est facilisis laoreet. Suspendisse nec tortor volutpat, rhoncus nibh nec, porttitor nulla. Nam non mattis ante. Donec nisi felis, condimentum ut ipsum vel, lacinia pretium dolor. Proin sed tempus nibh. Cras commodo magna quis posuere rutrum. Vivamus pellentesque turpis nulla, pellentesque congue augue ullamcorper quis. Donec sagittis sed sem ut consectetur. Praesent tempor rutrum nibh, nec molestie purus mollis eget. Aenean sollicitudin vehicula fringilla. Praesent sed risus at nisi egestas finibus. Nunc sed porttitor tortor, quis fermentum orci. Aliquam sem augue, facilisis convallis est at, vehicula eleifend urna. Curabitur pharetra, neque vel sollicitudin scelerisque, elit turpis egestas purus, pretium imperdiet tellus lectus a eros. Suspendisse id dapibus libero. Aliquam at lacinia ligula, eget bibendum tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur sit amet neque sollicitudin, malesuada dolor nec, condimentum sapien. Aliquam erat volutpat. Sed at leo ultrices, sollicitudin tellus nec, mattis nisl. Nulla facilisi. Aliquam nec venenatis ante. In mattis ligula vitae leo vulputate, a aliquet elit pharetra. Sed purus ante, laoreet a lacus ut, mattis imperdiet libero. Cras eget ante pharetra, tincidunt nibh at, euismod elit. Nullam volutpat, eros rutrum molestie interdum, ipsum mi ornare nibh, non vulputate risus augue quis urna. Duis porta nunc pharetra luctus sagittis. Sed dictum bibendum magna dapibus fringilla. Duis vitae ipsum elit. Nunc eu quam finibus, suscipit lorem id, suscipit massa. Nullam eget tortor ac nisi vestibulum ornare. Proin nec quam eget nulla malesuada imperdiet cursus ac leo. Sed vulputate diam id nisl gravida, condimentum cursus purus ultrices. Vivamus malesuada turpis velit. Phasellus bibendum ullamcorper libero, nec faucibus nulla posuere ac. Praesent vel diam ac eros varius sagittis non et lectus. Cras convallis leo at maximus mattis. Fusce ultrices tortor sapien, nec lacinia velit porttitor ut. Maecenas sit amet nulla maximus, blandit sapien in, vehicula nulla. Donec sagittis, sapien non elementum feugiat, augue sapien egestas nisi, sit amet dapibus eros purus a elit. Nulla facilisi. Sed risus velit, rutrum eget tincidunt eget, iaculis eget mauris. Sed venenatis vestibulum magna, vel dictum mi tincidunt ut. Duis porta, dolor ut bibendum venenatis, dui lacus suscipit arcu, vel ultricies dui odio eget arcu. Integer scelerisque vehicula enim. Cras a molestie odio, a tempus magna. Pellentesque sit amet rhoncus eros. Mauris id tincidunt nulla, nec convallis sapien. Nam porttitor mauris non maximus rhoncus. Donec congue felis id porta faucibus. Integer congue eros sit amet sollicitudin blandit. Morbi eu tincidunt est. Donec pulvinar hendrerit neque, at vehicula massa dignissim non. Morbi cursus laoreet malesuada. Duis eget elit luctus, interdum sem quis, lobortis neque. Maecenas imperdiet nisi leo, at posuere mi mollis eget. Aliquam erat volutpat. Maecenas efficitur aliquet ultrices. Duis sit amet urna non enim interdum lobortis ultricies sed lorem. Phasellus ullamcorper, orci id malesuada venenatis, ipsum nunc condimentum mauris, eget blandit turpis ante ut libero. Praesent eget placerat odio, id rutrum nulla. Aenean nec lacus mi. Pellentesque in tempor mauris, vitae luctus eros. Suspendisse justo magna, vestibulum vel blandit ac, semper vel velit. Fusce fermentum purus non purus commodo, ut iaculis lacus rutrum. Nunc auctor velit dolor, at porttitor purus condimentum nec. Praesent nec porta orci. Nunc eu nibh vitae magna dictum scelerisque et sit amet sapien. Nunc sagittis ac ex tincidunt tempus. Donec in odio eros. Sed consectetur rutrum est, et semper enim vulputate tempus. Sed eget lacus vel nunc rhoncus condimentum. Mauris aliquam ac elit vitae tincidunt. Donec a ligula at ante tristique dapibus. Vivamus accumsan, nisi et tincidunt rhoncus, ex lacus fringilla elit, sed cursus diam massa non dolor. Nam eget risus eros. Integer id nisl sed augue molestie elementum eu in odio. Maecenas in risus leo. Proin a turpis est. Sed hendrerit bibendum leo. Praesent pretium malesuada erat, nec tempus dui viverra eu. Donec nisi erat, vestibulum sit amet pulvinar eget, posuere nec purus. In urna enim, imperdiet vel est eu, varius imperdiet magna. Nam non elit sed elit consequat fermentum. Vivamus et metus nulla. Vivamus vel nulla sed metus vehicula laoreet id et ipsum. Duis fermentum euismod mollis. Curabitur dapibus non arcu sed vulputate. In tristique mi efficitur tempor lobortis. Etiam aliquet quam iaculis erat aliquam cursus. Sed lacinia lobortis feugiat. Cras porta nisi nec justo posuere laoreet. Maecenas faucibus lobortis tellus, at feugiat est porttitor quis. Aenean egestas urna nec urna feugiat bibendum. Proin a accumsan mauris. Cras ultrices, augue ac fermentum mollis, enim nisi placerat diam, ut lacinia urna ante vel massa. Donec porta tortor ut sapien efficitur consectetur. Quisque et mauris non dui volutpat fringilla quis vel tortor. Maecenas neque tellus, varius in leo euismod, dictum viverra est. Morbi eu libero eu lacus rhoncus varius. Sed euismod risus id nisl mattis, eget facilisis massa porta. Integer ultrices varius risus, ac mollis velit porttitor a. Integer ut vestibulum est, eget rhoncus mauris. Praesent cursus justo diam, a molestie libero fermentum quis. Morbi mollis libero quis nisl aliquet, mattis iaculis massa efficitur. Integer fermentum erat odio, ac tristique mauris tincidunt a. Quisque tincidunt rutrum neque id congue. Curabitur condimentum magna ut blandit pulvinar. Vivamus lacinia lorem eu risus volutpat fermentum. Quisque fermentum lacus at ante luctus, ut consequat tellus viverra. Duis eget ante vitae purus viverra convallis. Sed vitae semper odio, nec lacinia urna. Etiam dolor ipsum, eleifend vitae convallis ut, vehicula quis justo. Aliquam erat volutpat. Curabitur vulputate ante est, at pellentesque ligula ullamcorper eu. Fusce turpis sapien, dapibus ut nisl vel, ultricies venenatis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit metus, laoreet ac ligula et, volutpat consectetur eros. Morbi mi turpis, sodales eget ultrices sed, consectetur nec nisl. Phasellus molestie, mi vel eleifend interdum, est lectus malesuada dui, sit amet aliquam ipsum nulla nec lacus. Cras sit amet placerat quam. Donec cursus non massa sit amet ornare."})]})}var w=i(13);function S(){var e,t=Object(j.g)(),i=null===(e=Object(j.h)().state)||void 0===e?void 0:e.from,s=Object(a.useState)({email:"",password:""}),n=Object(c.a)(s,2),r=n[0],u=n[1],o=b(),m=function(e){u(Object(h.a)(Object(h.a)({},r),{},Object(w.a)({},e.target.name,e.target.value)))};return Object(l.jsx)("div",{class:"container mt-3",children:Object(l.jsx)("div",{class:"row",children:Object(l.jsx)("div",{class:"col-4 offset-4 justify-content-md-center",children:Object(l.jsx)("div",{class:"card",children:Object(l.jsx)("div",{class:"card-body",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("enviando datos..."+r.email+" "+r.password);var a={email:r.email,password:r.password};o.login(a),t.push(i||"/dashboard")},children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("div",{className:"mb-4 ",children:[Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Email",onChange:m,name:"email"})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",onChange:m,name:"password"})]}),Object(l.jsx)("div",{className:"d-grid gap-2",children:Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Login"})})]})})})})})})}function C(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"NotFoundPage"})})}function P(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"PaymentsPage"})})}function A(){var e=Object(j.i)().username;return Object(l.jsx)("div",{children:Object(l.jsxs)("h1",{children:["ProfilePage: ",e]})})}var D={};D.useRegister=function(e){return u.a.post("register",e)};var I=D;function _(){var e,t=Object(j.g)(),i=null===(e=Object(j.h)().state)||void 0===e?void 0:e.from,s=Object(a.useState)({name:"",email:"",password:"",confirm_password:""}),n=Object(c.a)(s,2),r=n[0],u=n[1],o=Object(a.useState)(null),m=Object(c.a)(o,2),d=m[0],b=m[1],p=function(e){u(Object(h.a)(Object(h.a)({},r),{},Object(w.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{title:"Registro"}),Object(l.jsx)("div",{className:"container mt-3 py-5",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-6 offset-3 justify-content-md-center",children:Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:"card-body",children:[d,Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("enviando datos..."+r.email+" "+r.password);var a={name:r.name,email:r.email,password:r.password,confirm_password:r.confirm_password};I.useRegister(a).then((function(e){console.log(e),t.push(i||"/revision")})).catch((function(e){b(function(e){return Object(l.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:e.name}),Object(l.jsx)("li",{children:e.email}),Object(l.jsx)("li",{children:e.password}),Object(l.jsx)("li",{children:e.confirm_password})]})})}(e.response.data.error))}))},className:"needs-validation",novalidate:!0,children:[Object(l.jsxs)("div",{className:"mb-4 ",children:[Object(l.jsx)("label",{children:"Nombre"}),Object(l.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Name",onChange:p,name:"name"})]}),Object(l.jsxs)("div",{className:"mb-4 ",children:[Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Email",onChange:p,name:"email"})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",onChange:p,name:"password"})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{children:"Confirmar Password"}),Object(l.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",onChange:p,name:"confirm_password"})]}),Object(l.jsx)("div",{className:"d-grid gap-2",children:Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Registro"})})]})]})})})})})]})}function k(){var e=Object(j.h)(),t=Object(j.g)(),i=new URLSearchParams(e.search),a=parseInt(i.get("skip"))||0,s=parseInt(i.get("limit"))||15;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"CategoriesPage"}),Object(l.jsxs)("h2",{children:["Skip: ",a]}),Object(l.jsxs)("h2",{children:["Limit: ",s]}),Object(l.jsx)("button",{onClick:function(){i.set("skip",a+s),t.push({search:i.toString()})},children:"Next"})]})}function M(){var e=Object(j.j)().url;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(d.c,{exact:!0,to:"".concat(e),activeClassName:"active",children:"All"})}),Object(l.jsx)("li",{children:Object(l.jsx)(d.c,{to:"".concat(e,"/terror"),activeClassName:"active",children:"Terror"})}),Object(l.jsx)("li",{children:Object(l.jsx)(d.c,{to:"".concat(e,"/action"),activeClassName:"active",children:"Action"})}),Object(l.jsx)("li",{children:Object(l.jsx)(d.c,{to:"".concat(e,"/anime"),activeClassName:"active",children:"Anime"})})]}),Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{exact:!0,path:"/categories",component:k}),Object(l.jsx)(v,{path:"/categories/terror",component:L}),Object(l.jsx)(j.b,{exact:!0,path:"/categories/action",children:Object(l.jsx)("h1",{children:"Category Action"})}),Object(l.jsx)(j.b,{exact:!0,path:"/categories/anime",children:Object(l.jsx)("h1",{children:"Category Anime"})}),Object(l.jsx)(j.b,{path:"*",children:Object(l.jsx)(j.a,{to:"/404"})})]})]})}function L(){var e=Object(j.j)().url;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(d.b,{to:"/categories/terror",children:"All"})}),Object(l.jsx)("li",{children:Object(l.jsx)(d.b,{to:"/categories/terror/gore",children:"Gore"})}),Object(l.jsx)("li",{children:Object(l.jsx)(d.b,{to:"/categories/terror/suspense",children:"Suspense"})})]}),Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{exact:!0,path:"".concat(e),children:Object(l.jsx)("h3",{children:"Category Terror"})}),Object(l.jsx)(j.b,{exact:!0,path:"".concat(e,"/gore"),children:Object(l.jsx)("h3",{children:"Gore"})}),Object(l.jsx)(j.b,{exact:!0,path:"".concat(e,"/suspense"),children:Object(l.jsx)("h3",{children:"Suspense"})}),Object(l.jsx)(j.b,{path:"*",children:Object(l.jsx)(j.a,{to:"/404"})})]})]})}function V(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"AboutPage"})})}var z=i(40),E=i(41),F=i.n(E),Q=i(42),R=i.n(Q)()(F.a),T=Object(j.k)((function(e){return e.history.listen((function(){if(localStorage.getItem("token")){var e=Object(z.a)(localStorage.getItem("token"));console.log(1e3*e.exp),console.log(Date.now()),1e3*e.exp<Date.now()?(localStorage.removeItem("token"),localStorage.removeItem("user"),R.fire({title:Object(l.jsx)("p",{children:"Hello World"}),footer:"Copyright 2018",didOpen:function(){R.clickConfirm(window.location.replace("/dashboard"))}}).then((function(){return R.fire(Object(l.jsx)("p",{children:"Shorthand works too"}))}))):console.log("hola")}})),Object(l.jsx)("div",{})}));function B(){return Object(l.jsxs)(d.a,{children:[Object(l.jsx)(p,{}),Object(l.jsxs)(j.d,{children:[Object(l.jsx)(j.b,{exact:!0,path:"/about",component:O}),Object(l.jsx)(j.b,{exact:!0,path:"/contact",component:N}),Object(l.jsx)(j.b,{exact:!0,path:"/",component:y}),Object(l.jsx)(j.b,{exact:!0,path:"/profile/:username",component:A}),Object(l.jsx)(j.b,{path:"/categories",component:M}),Object(l.jsx)(j.b,{exact:!0,path:"/signin",children:Object(l.jsx)(j.a,{to:"/login"})}),Object(l.jsx)(x,{exact:!0,path:"/revision",component:V}),Object(l.jsx)(x,{exact:!0,path:"/login",component:S}),Object(l.jsx)(x,{exact:!0,path:"/register",component:_}),Object(l.jsx)(v,{exact:!0,path:"/dashboard",component:q}),Object(l.jsx)(v,{exact:!0,path:"/payments",component:P}),Object(l.jsx)(j.b,{path:"/404",component:C}),Object(l.jsx)(j.b,{path:"*",children:Object(l.jsx)(j.a,{to:"/404"})})]}),Object(l.jsx)(T,{})]})}i(78),i(79),i(80),i(81),i(82),i(83),i(84),i(85),i(86),i(87),i(88),i(89),i(90),i(91);var H=function(){return Object(a.useEffect)((function(){return document.body.className="page-template page-template-template-portfolio page-template-template-portfolio-php page page-id-39  color-custom style-default button-flat layout-full-width if-zoom if-border-hide hide-love no-shadows header-classic header-fw header-boxed minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menu-link-color menuo-right menuo-no-borders mobile-tb-hide mobile-mini-mr-ll tablet-sticky mobile-sticky be-reg-20951 wpb-js-composer js-comp-ver-6.0.2 vc_responsive",function(){document.body.className=""}})),Object(l.jsx)(m,{children:Object(l.jsx)(B,{})})};u.a.defaults.baseURL="http://subasta.com/api/",u.a.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),n.a.render(Object(l.jsx)(H,{}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.a248bd46.chunk.js.map