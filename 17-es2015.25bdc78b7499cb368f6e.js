(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{UEhm:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),i=u("MKJQ"),r=u("sZkV"),a=u("s7LF"),d=u("mrSG"),s=u("tadm");class b{constructor(l,n,u,e){this.route=l,this.nav=n,this.todoService=u,this.loadingController=e,this.todo={task:"",createdAt:(new Date).getTime(),priority:null},this.todoId=null}ngOnInit(){this.todoId=this.route.snapshot.params.id,this.todoId&&this.loadTodo()}loadTodo(){return d.__awaiter(this,void 0,void 0,(function*(){const l=yield this.loadingController.create({message:"cargando..."});yield l.present(),this.todoService.getTodo(this.todoId).subscribe(n=>{l.dismiss(),this.todo=n})}))}saveTodo(){return d.__awaiter(this,void 0,void 0,(function*(){const l=yield this.loadingController.create({message:"Guardando..."});yield l.present(),this.todoId?this.todoService.updateTodo(this.todo,this.todoId).then(()=>{l.dismiss(),this.nav.navigateBack("home")}):this.todoService.addTodo(this.todo).then(()=>{l.dismiss(),this.nav.navigateBack("home")})}))}}var c=u("iInd"),h=e.rb({encapsulation:0,styles:[[""]],data:{}});function g(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,11,"ion-header",[],null,null,null,i.G,i.j)),e.sb(1,49152,null,0,r.z,[e.h,e.k,e.y],null,null),(l()(),e.tb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,i.T,i.w)),e.sb(3,49152,null,0,r.xb,[e.h,e.k,e.y],{color:[0,"color"]},null),(l()(),e.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.A,i.d)),e.sb(5,49152,null,0,r.j,[e.h,e.k,e.y],null,null),(l()(),e.tb(6,0,null,0,2,"ion-back-button",[["defaultHref","/home"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Eb(l,8).onClick(u)&&t),t}),i.y,i.b)),e.sb(7,49152,null,0,r.e,[e.h,e.k,e.y],{defaultHref:[0,"defaultHref"]},null),e.sb(8,16384,null,0,r.f,[[2,r.db],r.Db],{defaultHref:[0,"defaultHref"]},null),(l()(),e.tb(9,0,null,0,2,"ion-title",[],null,null,null,i.S,i.v)),e.sb(10,49152,null,0,r.vb,[e.h,e.k,e.y],null,null),(l()(),e.Lb(-1,0,["Detalle"])),(l()(),e.tb(12,0,null,null,28,"ion-content",[["padding",""]],null,null,null,i.C,i.f)),e.sb(13,49152,null,0,r.s,[e.h,e.k,e.y],null,null),(l()(),e.tb(14,0,null,0,23,"ion-list",[["lines","full"]],null,null,null,i.O,i.r)),e.sb(15,49152,null,0,r.M,[e.h,e.k,e.y],{lines:[0,"lines"]},null),(l()(),e.tb(16,0,null,0,10,"ion-item",[],null,null,null,i.M,i.m)),e.sb(17,49152,null,0,r.F,[e.h,e.k,e.y],null,null),(l()(),e.tb(18,0,null,0,8,"ion-input",[["placeholder","Task"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Eb(l,21)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Eb(l,21)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.todo.task=u)&&t),t}),i.I,i.l)),e.sb(19,16384,null,0,a.g,[],{required:[0,"required"]},null),e.Ib(1024,null,a.b,(function(l){return[l]}),[a.g]),e.sb(21,16384,null,0,r.Ib,[e.k],null,null),e.Ib(1024,null,a.c,(function(l){return[l]}),[r.Ib]),e.sb(23,671744,null,0,a.f,[[8,null],[6,a.b],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,a.d,null,[a.f]),e.sb(25,16384,null,0,a.e,[[4,a.d]],null,null),e.sb(26,49152,null,0,r.E,[e.h,e.k,e.y],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.tb(27,0,null,0,10,"ion-item",[],null,null,null,i.M,i.m)),e.sb(28,49152,null,0,r.F,[e.h,e.k,e.y],null,null),(l()(),e.tb(29,0,null,0,8,"ion-input",[["placeholder","Priority"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Eb(l,32)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Eb(l,32)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.todo.priority=u)&&t),t}),i.I,i.l)),e.sb(30,16384,null,0,a.g,[],{required:[0,"required"]},null),e.Ib(1024,null,a.b,(function(l){return[l]}),[a.g]),e.sb(32,16384,null,0,r.Eb,[e.k],null,null),e.Ib(1024,null,a.c,(function(l){return[l]}),[r.Eb]),e.sb(34,671744,null,0,a.f,[[8,null],[6,a.b],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,a.d,null,[a.f]),e.sb(36,16384,null,0,a.e,[[4,a.d]],null,null),e.sb(37,49152,null,0,r.E,[e.h,e.k,e.y],{placeholder:[0,"placeholder"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.tb(38,0,null,0,2,"ion-button",[["expand","full"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.saveTodo()&&e),e}),i.z,i.c)),e.sb(39,49152,null,0,r.i,[e.h,e.k,e.y],{expand:[0,"expand"]},null),(l()(),e.Lb(-1,0,["Guardar"]))],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"/home"),l(n,8,0,"/home"),l(n,15,0,"full"),l(n,19,0,""),l(n,23,0,u.todo.task),l(n,26,0,"Task","","text"),l(n,30,0,""),l(n,34,0,u.todo.priority),l(n,37,0,"Priority","","number"),l(n,39,0,"full")}),(function(l,n){l(n,18,0,e.Eb(n,19).required?"":null,e.Eb(n,25).ngClassUntouched,e.Eb(n,25).ngClassTouched,e.Eb(n,25).ngClassPristine,e.Eb(n,25).ngClassDirty,e.Eb(n,25).ngClassValid,e.Eb(n,25).ngClassInvalid,e.Eb(n,25).ngClassPending),l(n,29,0,e.Eb(n,30).required?"":null,e.Eb(n,36).ngClassUntouched,e.Eb(n,36).ngClassTouched,e.Eb(n,36).ngClassPristine,e.Eb(n,36).ngClassDirty,e.Eb(n,36).ngClassValid,e.Eb(n,36).ngClassInvalid,e.Eb(n,36).ngClassPending)}))}function p(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,1,"app-todo-details",[],null,null,null,g,h)),e.sb(1,114688,null,0,b,[c.a,r.Db,s.a,r.Bb],null,null)],(function(l,n){l(n,1,0)}),null)}var C=e.pb("app-todo-details",b,p,{},{},[]),f=u("SVse");class y{}u.d(n,"TodoDetailsPageModuleNgFactory",(function(){return v}));var v=e.qb(t,[],(function(l){return e.Bb([e.Cb(512,e.j,e.bb,[[8,[o.a,C]],[3,e.j],e.w]),e.Cb(4608,f.l,f.k,[e.t,[2,f.r]]),e.Cb(4608,a.i,a.i,[]),e.Cb(4608,r.a,r.a,[e.y,e.g]),e.Cb(4608,r.Cb,r.Cb,[r.a,e.j,e.q]),e.Cb(4608,r.Gb,r.Gb,[r.a,e.j,e.q]),e.Cb(1073742336,f.b,f.b,[]),e.Cb(1073742336,a.h,a.h,[]),e.Cb(1073742336,a.a,a.a,[]),e.Cb(1073742336,r.zb,r.zb,[]),e.Cb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),e.Cb(1073742336,y,y,[]),e.Cb(1073742336,t,t,[]),e.Cb(1024,c.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);