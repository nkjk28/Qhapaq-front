webpackJsonp([1],{"6Yxs":function(e,t){},"9M+g":function(e,t){},EkbA:function(e,t){},F7El:function(e,t){},J05l:function(e,t,n){"use strict";var s=n("zdNR"),r=n.n(s),a=n("kb+F"),o=n("VU/8")(r.a,a.a,!1,null,null,null);t.default=o.exports},Jmt5:function(e,t){},MPoV:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),r=n("Dd8w"),a=n.n(r),o=n("NYxO"),i={name:"App",computed:a()({},Object(o.c)("account",["status","user"]),Object(o.b)("account",["logout"]))},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",[n("router-link",{staticClass:"header-icon",attrs:{to:{name:"Index"}}},[e._v("Qhapaq")])],1),e._v(" "),n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),e._v(" "),e.status.loggedIn?n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:{name:"ManagementIndex"}}},[e._v("管理")]),e._v(" "),n("b-nav-item",{attrs:{to:{name:"MenusIndex"}}},[e._v("メニューを探す")]),e._v(" "),n("b-nav-item",{attrs:{to:{name:"Genres"}}},[e._v("ジャンルから探す")])],1),e._v(" "),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""}},[n("template",{slot:"button-content"},[n("em",[e._v(e._s(e.user.user.name))])]),e._v(" "),n("b-dropdown-item",[e._v("Profile")]),e._v(" "),n("b-dropdown-item",[e._v(e._s(e.user.expiration_time))]),e._v(" "),n("b-dropdown-item",{on:{click:function(t){return e.logout()}}},[e._v("ログアウト")])],2)],1)],1):e._e()],1)],1),e._v(" "),n("router-view",{staticClass:"main"})],1)},staticRenderFns:[]};var c=n("VU/8")(i,u,!1,function(e){n("Y8vT")},null,null).exports,l=n("/ocq"),m=n("mvHQ"),d=n.n(m),p=n("mtWM"),h=n.n(p);s.a.use(o.a);var v=JSON.parse(localStorage.getItem("user")),f={namespaced:!0,state:v?{status:{loggedIn:!0},user:v}:{status:{},user:null},actions:{login:function(e,t){var n=e.dispatch,s=e.commit,r=t.username,a=t.password;h.a.post("https://qhapaq-end.herokuapp.com/user/sign_in",d()({name:r,password:a})).then(function(e){s("login",e.data),localStorage.setItem("user",d()(e.data)),he.push({name:"ManagementIndex"})}).catch(function(e){n("alert/error",e,{root:!0})})},logout:function(e){(0,e.commit)("logout"),localStorage.removeItem("user"),he.push({name:"Index"})}},mutations:{login:function(e,t){e.status={loggedIn:!0},e.user=t},logout:function(e){e.status={},e.user=null}}};s.a.use(o.a);var _=new o.a.Store({modules:{account:f}}),b={name:"Index",data:function(){return{username:"",password:"",news:[]}},computed:a()({},Object(o.c)("account",["status"])),mounted:function(){var e=this;this.axios.get("https://api.github.com/repos/nkjk28/Qhapaq-front/commits").then(function(t){e.news=t.data}).catch(function(e){console.log(e.response)})},methods:a()({},Object(o.b)("account",["login"]),{clickLoginButton:function(){var e=this.username,t=this.password;this.login({username:e,password:t})}})},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index"},[e._m(0),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.clickLoginButton(t)}}},[n("label",[e._v("ユーザー名:\n      "),n("b-form-input",{attrs:{type:"text",placeholder:"Enter your name"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),n("br"),e._v(" "),n("label",[e._v("パスワード:\n      "),n("b-form-input",{attrs:{type:"password",placeholder:"Enter your password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("br"),e._v(" "),n("button",{staticClass:"login_button"},[e._v("ログイン")])]),e._v(" "),n("h2",[e._v("更新履歴")]),e._v(" "),n("div",{staticClass:"news"},[n("ul",e._l(e.news,function(t,s){return"update for heroku"!==t.commit.message?n("li",{key:s},[e._v(e._s(t.commit.committer.date)+": "+e._s(t.commit.message))]):e._e()}),0)]),e._v(" "),n("a",{attrs:{href:"https://github.com/nkjk28/Qhapaq-front"}},[e._v("ソースコード")]),e._v(" "),n("a",{attrs:{href:"https://github.com/nkjk28/Qhapaq-front/blob/master/LICENSE"}},[e._v("ライセンス")]),n("br")])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("学食メニューサポートシステム"),t("br"),this._v("「Qhapaq」へようこそ")])}]};var k=n("VU/8")(b,g,!1,function(e){n("MPoV")},"data-v-9a3cbeec",null).exports,x={computed:a()({},Object(o.c)("account",["status","user"]))},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{staticClass:"menu",attrs:{to:{name:"MenusIndex"},tag:"button"}},[e._v("メニュー"),n("br"),e._v("一覧 "),n("font-awesome-icon",{attrs:{icon:"book-open"}})],1),e._v(" "),n("router-link",{staticClass:"genre_menu",attrs:{to:{name:"Genres"},tag:"button"}},[e._v("ジャンル別"),n("br"),e._v("メニュー "),n("font-awesome-icon",{attrs:{icon:"clipboard-list"}})],1),e._v(" "),n("router-link",{staticClass:"add_menu",attrs:{to:{name:"MenuNew"},tag:"button"}},[e._v("メニュー"),n("br"),e._v("追加 "),n("font-awesome-icon",{attrs:{icon:"plus"}})],1),e._v(" "),n("router-link",{staticClass:"add_genre",attrs:{to:{name:"GenreNew"},tag:"button"}},[e._v("ジャンル"),n("br"),e._v("追加 "),n("font-awesome-icon",{attrs:{icon:"plus-circle"}})],1)],1)},staticRenderFns:[]};var F=n("VU/8")(x,y,!1,function(e){n("v8mO")},null,null).exports,w={data:function(){return{msg:""}},computed:a()({},Object(o.b)("account",["logout"])),mounted:function(){var e=this;switch(Number(this.$route.params.code)){case 403:this.msg="セッション切れです再度ログインして下さい。３秒後に自動的にログインへ移行します",setTimeout(function(){e.logout()},3e3);break;default:this.msg="ページが存在しません"}}},I={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("エラー")]),this._v(" "),t("b-alert",{attrs:{variant:"danger",show:""}},[this._v(this._s(this.msg))])],1)},staticRenderFns:[]},E=n("VU/8")(w,I,!1,null,null,null).exports,$={name:"Genres",data:function(){return{genres:[]}},methods:{},mounted:function(){var e=this;this.axios.get("https://qhapaq-end.herokuapp.com/genres").then(function(t){e.genres=t.data}).catch(function(e){console.log(e.response)})}},q={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-view")],1)},staticRenderFns:[]},M=n("VU/8")($,q,!1,null,null,null).exports,C={name:"Genres",data:function(){return{genres:[]}},methods:{},mounted:function(){var e=this;this.axios.get("https://qhapaq-end.herokuapp.com/genres").then(function(t){e.genres=t.data}).catch(function(e){console.log(e.response)})}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.genres,function(t){return n("div",{key:t.id},[n("router-link",{staticClass:"genres",attrs:{to:{name:"Menus",params:{id:t.id}},tag:"button"}},[e._v(e._s(t.name))]),e._v(" "),n("p")],1)}),0)},staticRenderFns:[]};var U=n("VU/8")(C,S,!1,function(e){n("EkbA")},null,null).exports,R=n("woOf"),V=n.n(R),N={props:["method","genre"],methods:{clickCreateButton:function(){var e=this;this.axios.post("https://qhapaq-end.herokuapp.com/genre",d()(this.genre)).then(function(t){e.$router.push({name:"Genres"})}).catch(function(e){console.log(e.response)})},clickUpdateButton:function(){var e=this,t=d()(V()(this.genre,{userToken:""}));this.axios.post("https://qhapaq-end.herokuapp.com/genre/"+this.genre.id,t).then(function(t){e.$router.push({name:"Genres"})}).catch(function(e){console.log(e.response)})}}},G={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"genre"}},[n("label",[e._v("ジャンル名:\n    "),n("b-form-input",{attrs:{type:"text"},model:{value:e.genre.name,callback:function(t){e.$set(e.genre,"name",t)},expression:"genre.name"}})],1),n("br"),e._v(" "),n("br"),e._v(" "),n("label",[e._v("ジャンルの説明:\n    "),n("b-form-input",{attrs:{type:"text"},model:{value:e.genre.description,callback:function(t){e.$set(e.genre,"description",t)},expression:"genre.description"}})],1),n("br"),e._v(" "),n("br"),e._v(" "),"post"==e.method?n("b-button",{attrs:{variant:"success"},on:{click:e.clickCreateButton}},[e._v("追加")]):n("b-button",{attrs:{variant:"success"},on:{click:e.clickUpdateButton}},[e._v("更新")])],1)},staticRenderFns:[]};var O=n("VU/8")(N,G,!1,function(e){n("6Yxs")},null,null).exports,j={name:"GenreNew",components:{GenreForm:O},data:function(){return{genre:{name:"",description:""}}}},B={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("ジャンル作成(追加)")]),this._v(" "),t("genre-form",{attrs:{method:"post",genre:this.genre}})],1)},staticRenderFns:[]},L=n("VU/8")(j,B,!1,null,null,null).exports,Q={name:"GenreEdit",components:{GenreForm:O},data:function(){return{genre:{}}},mounted:function(){var e=this;this.axios.get("https://qhapaq-end.herokuapp.com/genre/"+this.$route.params.id).then(function(t){e.genre=t.data}).catch(function(e){console.log(e.response)})}},z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("ジャンル編集")]),this._v(" "),t("genre-form",{attrs:{method:"put",genre:this.genre}})],1)},staticRenderFns:[]},A=n("VU/8")(Q,z,!1,null,null,null).exports,J=n("J05l"),T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"buscar-caja"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"buscar-txt",attrs:{type:"text",placeholder:"Buscar..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),n("a",{staticClass:"buscar-btn"},[n("font-awesome-icon",{attrs:{icon:"search"}})],1)]),e._v(" "),n("b-table",{attrs:{striped:"",hover:"",items:e.menus,fields:e.fields,filter:e.search},scopedSlots:e._u([{key:"show",fn:function(t){return[n("b-button",{staticClass:"mr-1",attrs:{size:"sm",variant:"primary",to:{name:"MenuShow",params:{id:t.item.id}}}},[e._v("Show")])]}},{key:"edit",fn:function(t){return[n("b-button",{staticClass:"mr-1",attrs:{size:"sm",variant:"success",to:{name:"MenuEdit",params:{id:t.item.id}}}},[e._v("Edit")])]}}])})],1)},staticRenderFns:[]};var P=n("VU/8")({props:["menus"],data:function(){return{search:"",fields:[{key:"id",label:"id"},{key:"name",label:"メニュー名",sortable:!0},{key:"show",label:"表示"},{key:"edit",label:"編集"}]}}},T,!1,function(e){n("WZ02")},null,null).exports,W={name:"Menus",components:{MenuIndex:P},data:function(){return{menus:[]}},methods:{},mounted:function(){var e=this;this.axios.get("https://qhapaq-end.herokuapp.com/menus").then(function(t){e.menus=t.data}).catch(function(e){console.log(e.response)})}},Y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("メニュー一覧")]),this._v(" "),t("menu-index",{attrs:{menus:this.menus}})],1)},staticRenderFns:[]},D=n("VU/8")(W,Y,!1,null,null,null).exports,H={name:"GenreFilterIndex",components:{MenuIndex:P},data:function(){return{menus:[]}},methods:{},mounted:function(){var e=this;this.axios.get("https://qhapaq-end.herokuapp.com/menus/"+this.$route.params.id).then(function(t){e.menus=t.data}).catch(function(e){console.log(e.response)})}},Z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("ジャンル別メニュー一覧")]),this._v(" "),t("router-link",{attrs:{to:{name:"GenreEdit",params:{id:this.$route.params.id}},tag:"button"}},[this._v("ジャンル名の編集")]),t("br"),this._v(" "),t("menu-index",{attrs:{menus:this.menus}})],1)},staticRenderFns:[]},K=n("VU/8")(H,Z,!1,null,null,null).exports,X={props:["method","menu"],data:function(){return{genres:[],ingredientForm:{name:"",amount:"0",unit:"",cost:"0",description:""},removeIngredientItemList:[],stepForm:"",removeStepItemList:[],fields:[{key:"name",label:"材料名"},{key:"amount",label:"量"},{key:"cost",label:"金額"},{key:"description",label:"材料の説明"},{key:"edit",label:"編集"},{key:"delete",label:"削除"}],stepFields:[{key:"num",label:"順序"},{key:"description",label:"説明"},{key:"edit",label:"編集"},{key:"delete",label:"削除"}]}},methods:{appendStep:function(){this.stepForm&&this.menu.steps.push({description:this.stepForm}),this.stepForm=""},appendIngredient:function(){if(this.ingredientForm.name){var e=V()({},this.ingredientForm);this.menu.ingredients.push(e),this.ingredientForm.name="",this.ingredientForm.amount="0",this.ingredientForm.unit="",this.ingredientForm.cost="0",this.ingredientForm.description=""}},EditIngredientItem:function(e){this.ingredientForm=this.menu.ingredients[e],this.menu.ingredients.splice(e,1)},RemoveIngredientItem:function(e){this.removeIngredientItemList.push(this.menu.ingredients[e]),this.menu.ingredients.splice(e,1)},EditStepItem:function(e){this.stepForm=this.menu.steps[e].description,this.menu.steps.splice(e,1)},RemoveStepItem:function(e){this.removeStepItemList.push(this.menu.steps[e]),this.menu.steps.splice(e,1)},clickCreateButton:function(){var e=this,t=d()(V()(this.menu,{userToken:this.user.token}));this.axios.post("https://qhapaq-end.herokuapp.com/menu",t).then(function(t){e.$router.push({name:"MenuShow",params:{id:t.data.id}})}).catch(function(t){403===t.response.status&&e.$router.push({name:"Error",params:{code:403}})})},clickUpdateButton:function(){var e=this,t=d()(V()(this.menu,{removeIngredientItemList:this.removeIngredientItemList,removeStepItemList:this.removeStepItemList,userToken:this.user.token})),n="https://qhapaq-end.herokuapp.com/menu/"+this.menu.id;this.axios.post(n,t).then(function(t){e.$router.push({name:"MenuShow",params:{id:t.data.id}})}).catch(function(t){403===t.response.status&&e.$router.push({name:"Error",params:{code:403}})})}},computed:a()({},Object(o.c)("account",["user"])),mounted:function(){var e=this;this.axios.get("https://qhapaq-end.herokuapp.com/genres").then(function(t){e.genres=t.data}).catch(function(e){console.log(e.response)})}},ee={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"menu"}},[n("label",{attrs:{for:"genre"}},[e._v("ジャンル:\n    "),n("b-select",{attrs:{name:"genre"},model:{value:e.menu.genre_id,callback:function(t){e.$set(e.menu,"genre_id",t)},expression:"menu.genre_id"}},e._l(e.genres,function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n      "+e._s(t.name)+"\n      ")])}),0)],1),e._v(" "),n("label",[e._v("メニュー名:\n    "),n("b-form-input",{attrs:{type:"text"},model:{value:e.menu.name,callback:function(t){e.$set(e.menu,"name",t)},expression:"menu.name"}})],1),e._v(" "),n("b-table",{attrs:{items:e.menu.ingredients,fields:e.fields},scopedSlots:e._u([{key:"amount",fn:function(t){return[e._v("\n      "+e._s(t.item.amount)+e._s(t.item.unit)+"\n    ")]}},{key:"cost",fn:function(t){return[e._v("\n      "+e._s(t.item.cost)+"円\n    ")]}},{key:"edit",fn:function(t){return[n("b-button",{attrs:{variant:"success"},on:{click:function(n){return e.EditIngredientItem(t.index)}}},[e._v("✑")])]}},{key:"delete",fn:function(t){return[n("b-button",{attrs:{variant:"danger"},on:{click:function(n){return e.RemoveIngredientItem(t.index)}}},[e._v("✗")])]}}])}),e._v(" "),n("label",[e._v("材料:\n    "),n("b-row",[n("b-col",{attrs:{sm:"2"}},[n("b-form-input",{attrs:{type:"text",size:"sm",placeholder:"材料名"},model:{value:e.ingredientForm.name,callback:function(t){e.$set(e.ingredientForm,"name",t)},expression:"ingredientForm.name"}})],1),e._v("\n        は一人あたり\n      "),n("b-col",{attrs:{sm:"2"}},[n("b-form-input",{attrs:{type:"number",size:"sm",placeholder:"量"},model:{value:e.ingredientForm.amount,callback:function(t){e.$set(e.ingredientForm,"amount",t)},expression:"ingredientForm.amount"}})],1),e._v(" "),n("b-col",{attrs:{sm:"2"}},[n("b-select",{model:{value:e.ingredientForm.unit,callback:function(t){e.$set(e.ingredientForm,"unit",t)},expression:"ingredientForm.unit"}},[n("option",{attrs:{value:"g"}},[e._v("g")]),e._v(" "),n("option",{attrs:{value:"ml"}},[e._v("ml")]),e._v(" "),n("option",{attrs:{value:"枚"}},[e._v("枚")]),e._v(" "),n("option",{attrs:{value:"匹"}},[e._v("匹")]),e._v(" "),n("option",{attrs:{value:"個"}},[e._v("個")]),e._v(" "),n("option",{attrs:{value:"羽"}},[e._v("羽")]),e._v(" "),n("option",{attrs:{value:"大匙"}},[e._v("大匙")]),e._v(" "),n("option",{attrs:{value:"小匙"}},[e._v("小匙")])])],1),e._v("\n      で\n      "),n("b-col",{attrs:{sm:"2"}},[n("b-form-input",{attrs:{type:"number",size:"sm",placeholder:"値段"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.appendIngredient(t)}},model:{value:e.ingredientForm.cost,callback:function(t){e.$set(e.ingredientForm,"cost",t)},expression:"ingredientForm.cost"}})],1),e._v("\n        円\n    ")],1)],1),e._v(" "),n("b-button",{attrs:{variant:"primary"},on:{click:e.appendIngredient}},[e._v("材料を追加する")]),n("br"),n("br"),e._v(" "),n("b-table",{attrs:{items:e.menu.steps,fields:e.stepFields},scopedSlots:e._u([{key:"num",fn:function(t){return[e._v("\n      "+e._s(t.index+1)+"\n    ")]}},{key:"description",fn:function(t){return[e._v("\n      "+e._s(t.item.description)+"\n    ")]}},{key:"edit",fn:function(t){return[n("b-button",{attrs:{variant:"success"},on:{click:function(n){return e.EditStepItem(t.index)}}},[e._v("✑")])]}},{key:"delete",fn:function(t){return[n("b-button",{attrs:{variant:"danger"},on:{click:function(n){return e.RemoveStepItem(t.index)}}},[e._v("✗")])]}}])}),e._v(" "),n("label",[e._v("\n    工程:\n    "),n("b-input-group",[n("b-form-input",{attrs:{type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.appendStep(t)}},model:{value:e.stepForm,callback:function(t){e.stepForm=t},expression:"stepForm"}}),e._v(" "),n("b-input-group-append",[n("b-button",{attrs:{variant:"primary"},on:{click:e.appendStep}},[e._v("工程を追加する")])],1)],1)],1),n("br"),e._v(" "),"post"==e.method?n("b-button",{attrs:{variant:"success",disabled:!Boolean(e.menu.genre_id&&e.menu.name&&e.menu.ingredients.length)},on:{click:e.clickCreateButton}},[e._v("\n    メニューを追加\n  ")]):n("b-button",{attrs:{variant:"success"},on:{click:e.clickUpdateButton}},[e._v("更新を適応")])],1)},staticRenderFns:[]};var te=n("VU/8")(X,ee,!1,function(e){n("F7El")},null,null).exports,ne={name:"MenuNew",components:{MenuForm:te},data:function(){return{newMenu:{name:"",genre_id:0,ingredients:[],steps:[]}}}},se={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("メニューの作成(追加)")]),this._v(" "),t("menu-form",{attrs:{menu:this.newMenu,method:"post"}})],1)},staticRenderFns:[]},re=n("VU/8")(ne,se,!1,null,null,null).exports,ae={name:"MenuEdit",components:{MenuForm:te},data:function(){return{menu:{}}},mounted:function(){var e=this;this.axios.get("https://qhapaq-end.herokuapp.com/menu/"+this.$route.params.id).then(function(t){e.menu=t.data}).catch(function(e){console.log(e.response)})}},oe={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("メニューの編集(更新)")]),this._v(" "),t("menu-form",{attrs:{menu:this.menu,method:"put"}})],1)},staticRenderFns:[]},ie=n("VU/8")(ae,oe,!1,null,null,null).exports,ue={name:"Ingredients",data:function(){return{person:"0",menu:{},ingredients:[],fields:[{key:"name",label:"材料名"},{key:"amount",label:"量"},{key:"cost",label:"金額"},{key:"description",label:"説明"},{key:"calculateQuantity",label:"量計算"},{key:"calculatingAmount",label:"金額計算"}]}},mounted:function(){var e=this;this.axios.get("https://qhapaq-end.herokuapp.com/menu/"+this.$route.params.id).then(function(t){e.menu=t.data,e.ingredients=t.data.ingredients}).catch(function(e){console.log(e.response)})}},ce={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(" "+e._s(e.menu.name))]),e._v(" "),n("br"),e._v(" "),n("b-row",[n("b-col",{staticClass:"my-1",attrs:{md:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"人数計算:"}},[n("b-input-group",[n("b-form-input",{attrs:{type:"number"},model:{value:e.person,callback:function(t){e.person=t},expression:"person"}}),e._v(" "),n("b-input-group-append",[n("b-button",{attrs:{disabled:!e.person},on:{click:function(t){e.person=0}}},[e._v("Clear")])],1)],1)],1)],1)],1),e._v(" "),n("b-table",{attrs:{striped:"",hover:"",items:e.ingredients,fields:e.fields},scopedSlots:e._u([{key:"amount",fn:function(t){return[e._v("\n      "+e._s(t.item.amount)+e._s(t.item.unit)+"\n    ")]}},{key:"cost",fn:function(t){return[e._v("\n      "+e._s(t.item.cost)+"円\n    ")]}},{key:"calculateQuantity",fn:function(t){return[e._v("\n      "+e._s(t.item.amount*e.person)+e._s(t.item.unit)+"\n    ")]}},{key:"calculatingAmount",fn:function(t){return[e._v("\n      "+e._s(t.item.cost*e.person)+"円\n    ")]}}])}),e._v(" "),n("br"),e._v(" "),n("h2",[e._v("工程")]),e._v(" "),n("ol",e._l(e.menu.steps,function(t,s){return n("li",{key:s},[e._v(e._s(t.description))])}),0),e._v(" "),n("br"),e._v(" "),n("b-button",{attrs:{to:{name:"MenuEdit",params:{id:Number(e.menu.id)}},variant:"success"}},[e._v("編集する")])],1)},staticRenderFns:[]};var le=n("VU/8")(ue,ce,!1,function(e){n("NVnp")},null,null).exports,me=n("VU/8")(null,null,!1,null,null,null).exports,de=n("VU/8")(null,null,!1,null,null,null).exports;s.a.use(l.a,_);var pe=new l.a({mode:"history",routes:[{path:"/",name:"Index",component:k},{path:"/error/:code",name:"Error",component:E},{path:"/management-index",name:"ManagementIndex",component:F},{path:"/users",name:"Users",component:me},{path:"/user/new",name:"UserNew",component:de},{path:"/genre",component:M,children:[{path:"",name:"Genres",component:U},{path:"new",name:"GenreNew",component:L},{path:"edit/:id",name:"GenreEdit",component:A}]},{path:"/menus",component:J.default,children:[{path:"",name:"MenusIndex",component:D},{path:":id",name:"Menus",component:K},{path:"/menu/new",name:"MenuNew",component:re},{path:"/menu/edit/:id",name:"MenuEdit",component:ie},{path:"/menu/:id",name:"MenuShow",component:le}]},{path:"*",component:E}]});pe.beforeEach(function(e,t,n){var s=!["/","/error"].includes(e.path),r=_.state.account;if(s&&!r.user)return n("/");r.user&&h.a.get("https://qhapaq-end.herokuapp.com/authentication/"+r.user.token).catch(function(){n({path:"/error/403"})}),n()});var he=pe,ve=n("Rf8U"),fe=n.n(ve),_e=n("C/JF"),be=n("1e6/"),ge=n("fhbW"),ke=n("DfMW"),xe=n("Yu89"),ye=n("e6fC"),Fe=n.n(ye);n("Jmt5"),n("9M+g");s.a.use(Fe.a),_e.c.add(ge.a,xe.a,ke.a),s.a.component("font-awesome-icon",be.a),s.a.config.productionTip=!1,s.a.use(fe.a,h.a,o.a),new s.a({el:"#app",router:he,store:_,components:{App:c},template:"<App/>"})},NVnp:function(e,t){},WZ02:function(e,t){},Y8vT:function(e,t){},"kb+F":function(e,t,n){"use strict";var s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("メニュー")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};t.a=s},v8mO:function(e,t){},zdNR:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3cd720bc4cfe5fbd4800.js.map