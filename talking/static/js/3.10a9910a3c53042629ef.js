webpackJsonp([3,11],{"0jOD":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Xxa5"),n=s.n(a),i=s("exGp"),r=s.n(i),c=s("viA7"),o={data:function(){return{userInfo:{gender:"保密",birthday:"保密",job:"保密"},hasFocus:!1,comment:[],scrollTop:0,top:580,bottom:510,screenHeight:"",domHeight:""}},computed:{avatar:function(){return this.$store.getters.userInfo.avatar},isFixed:function(){return this.scrollTop>=this.top},isShow:function(){return this.domHeight-(this.scrollTop+this.screenHeight)>=this.bottom}},mounted:function(){this.screenHeight=window.innerHeight-103,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},created:function(){var t=this;return r()(n.a.mark(function e(){var s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.d)({uid:31231});case 2:s=e.sent,t.comment=s.data;case 4:case"end":return e.stop()}},e,t)}))()},methods:{handleFocus:function(t){this.comment[t].isFocus=!this.comment[t].isFocus},handleScroll:function(){this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop,this.domHeight=document.body.offsetHeight||document.documentElement.offsetHeight},handleResize:function(){this.screenHeight=window.innerHeight-103}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-detail"},[t._m(0),t._v(" "),a("div",{staticClass:"detail-wrapper"},[a("div",{staticClass:"name"},[t._v("122333")]),t._v(" "),a("div",{staticClass:"catlog"},[t._v("无简介")]),t._v(" "),t._m(1),t._v(" "),a("el-row",{staticClass:"focus"},[a("el-col",{staticClass:"item",attrs:{span:12}},[a("div",[t._v("关注")]),t._v(" "),a("div",[t._v("0")])]),t._v(" "),a("el-col",{staticClass:"item",attrs:{span:12}},[a("div",[t._v("粉丝")]),t._v(" "),a("div",[t._v("0")])])],1),t._v(" "),a("ul",{staticClass:"detail"},[a("li",[t._v("性别： "+t._s(t.userInfo.gender))]),t._v(" "),a("li",[t._v("生日： "+t._s(t.userInfo.birthday))]),t._v(" "),a("li",[t._v("职业： "+t._s(t.userInfo.job))])]),t._v(" "),t._m(2)],1),t._v(" "),0!=t.comment.length&&t.isShow?a("div",{staticClass:"hot",class:{fixed:t.isFixed},style:{height:t.screenHeight+"px"}},[a("div",{staticClass:"title"},[a("div",{staticClass:"left"},[t._v("热门推荐")]),t._v(" "),a("div",{staticClass:"right"},[a("router-link",{attrs:{to:""}},[t._v("更多>>")])],1)]),t._v(" "),a("ul",{staticClass:"topic"},t._l(t.comment,function(e,n){return a("li",{key:e.id,staticClass:"item"},[a("el-row",{staticClass:"user-name"},[a("el-col",{attrs:{span:6}},[a("router-link",{attrs:{to:""}},[a("img",{staticClass:"avatar",attrs:{src:s("v3F0")}})])],1),t._v(" "),a("el-col",{staticClass:"infos",attrs:{span:10}},[a("router-link",{staticClass:"user",attrs:{to:""}},[t._v(t._s(e.name))]),t._v(" "),a("div",[t._v(t._s(e.focus)+"人关注")])],1),t._v(" "),a("el-col",{staticClass:"focus-icon",attrs:{span:8}},[a("div",{staticClass:"content",class:{selected:e.isFocus},on:{click:function(e){t.handleFocus(n)}}},[a("i",{staticClass:"el-icon-plus"}),t._v("\n              "+t._s(e.isFocus?"已关注":"关注")+"\n            ")])])],1),t._v(" "),a("ul",{staticClass:"list"},[a("li",[a("router-link",{attrs:{to:""}},[t._v("今天是个好日子")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:""}},[t._v("明天是个好日子")])],1)])],1)})),t._v(" "),a("div",{staticClass:"refresh"})]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s("v3F0"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user"},[e("div",{staticClass:"block"},[e("i",{staticClass:"el-icon-edit-outline"}),this._v(" "),e("span",[this._v("编辑资料")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-focus"},[e("div",{staticClass:"blue-button"},[e("i",{staticClass:"el-icon-plus"}),this._v("\n        关注\n      ")])])}]};var u=s("VU/8")(o,l,!1,function(t){s("ZWca")},"data-v-09294559",null);e.default=u.exports},"59Qz":function(t,e,s){t.exports=s.p+"static/img/example.cc30023.jpg"},"8Ygr":function(t,e){},"9++3":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("hC99"),n=s("0jOD"),i={data:function(){return{linkWord:["动态","收藏","点赞","评论"],baseRoute:"/userCenter/account/",anchor:"account"}},props:["list"],components:{detail:a.a,comment:n.default}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",{staticClass:"article",attrs:{gutter:20}},[e("el-col",{staticClass:"list",attrs:{xs:24,sm:16,md:16,lg:16,xl:16}},[e("detail",{attrs:{sort:this.list,anchor:this.anchor,baseRoute:this.baseRoute,linkWord:this.linkWord}})],1),this._v(" "),e("el-col",{attrs:{xs:0,sm:8,md:8,lg:8,xl:8}},[e("comment")],1)],1)},staticRenderFns:[]};var c=s("VU/8")(i,r,!1,function(t){s("Q9Td")},null,null);e.default=c.exports},Mu7H:function(t,e){},Q9Td:function(t,e){},ZWca:function(t,e){},hC99:function(t,e,s){"use strict";var a=s("Xxa5"),n=s.n(a),i=s("exGp"),r=s.n(i),c={props:{list:{type:Array},sort:{type:String}},created:function(){}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper"},t._l(t.list,function(e){return a("el-card",{key:e.id,staticClass:"page",attrs:{shadow:"hover"}},[a("el-row",{staticClass:"header"},[a("el-col",{staticClass:"avatar",attrs:{span:2}},[a("img",{attrs:{src:s("v3F0"),alt:""}})]),t._v(" "),a("el-col",{attrs:{span:18}},[a("div",{staticClass:"user"},[a("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"annouce"},[t._v(t._s(e.synopsis))])])]),t._v(" "),a("el-col",{staticClass:"condition",attrs:{span:4}},[e.isTop?a("div",{staticClass:"icon hot"},[t._v("置顶")]):t._e(),t._v(" "),e.isHot?a("div",{staticClass:"icon hot"},[t._v("热帖")]):t._e()])],1),t._v(" "),a("el-row",{staticClass:"zt",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("router-link",{attrs:{to:""}},[a("img",{attrs:{src:s("59Qz"),alt:"小图"}})])],1),t._v(" "),a("el-col",{staticClass:"details",attrs:{span:16}},[a("router-link",{staticClass:"title",attrs:{to:""}},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"content",attrs:{to:""}},[t._v(t._s(e.content))])],1)],1),t._v(" "),a("div",{staticClass:"operation"},[a("span",[t._v(t._s(e.reading)+"人阅读")]),t._v(" "),a("span",[t._v(t._s(e.like)+"赞")]),t._v(" "),a("span",[t._v(t._s(e.comment)+"评论")]),t._v(" "),a("span",[t._v(t._s(e.collection)+"收藏")]),t._v(" "),a("span",{staticClass:"time"},[t._v("2小时以前 ")])])],1)}))},staticRenderFns:[]};var l=s("VU/8")(c,o,!1,function(t){s("8Ygr")},null,null).exports,u=s("viA7"),d={data:function(){return{list:[],loading:!1,scrollTop:0,windowHeight:0,bodyHeight:0,threshold:650,pagesize:10,page:1,currentIndex:1,hasRequest:!1,isOver:!1}},components:{page:l},props:["sort","baseRoute","linkWord","anchor"],watch:{sort:function(t){this.handlePageChange(t)}},created:function(){var t=this;return r()(n.a.mark(function e(){var s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=void 0,t.currentIndex=+t.sort,"home"!==t.anchor){e.next=8;break}return e.next=5,Object(u.a)({type:1,page:1,pagesize:10});case 5:s=e.sent,e.next=12;break;case 8:if("account"!==t.anchor){e.next=12;break}return e.next=11,Object(u.c)({userId:"232344",type:1,page:1,pagesize:10});case 11:s=e.sent;case 12:t.list=s.data.list,s.data.toltalCount<=10&&(t.isOver=!0);case 14:case"end":return e.stop()}},e,t)}))()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handlePageChange:function(t){var e=this;return r()(n.a.mark(function s(){var a,i;return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(i=void 0,(a=e).loading=!0,a.page=1,a.currentIndex=+t,a.isOver=!1,"home"!==e.anchor){s.next=12;break}return s.next=9,Object(u.a)({type:+t,page:a.page,pagesize:a.pagesize});case 9:i=s.sent,s.next=16;break;case 12:if("account"!==e.anchor){s.next=16;break}return s.next=15,Object(u.c)({userId:"221321",type:+t,page:a.page,pagesize:a.pagesize});case 15:i=s.sent;case 16:a.loading=!1,a.list=i.data.list;case 18:case"end":return s.stop()}},s,e)}))()},handleScroll:function(){var t=this;return r()(n.a.mark(function e(){var s,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t,a=void 0,t.scrollTop=document.documentElement.scrollTop||document.body.scrollTop,t.bodyHeight=document.body.offsetHeight||document.documentElement.offsetHeight,t.windowHeight=window.innerHeight,!(t.bodyHeight-t.scrollTop-t.windowHeight<=t.threshold)){e.next=24;break}if(!t.isOver){e.next=8;break}return e.abrupt("return",!1);case 8:if(s.hasRequest){e.next=24;break}if(s.page++,s.hasRequest=!0,"home"!==t.anchor){e.next=17;break}return e.next=14,Object(u.a)({type:s.currentIndex,page:s.page,pagesize:s.pagesize});case 14:a=e.sent,e.next=21;break;case 17:if("account"!==t.anchor){e.next=21;break}return e.next=20,Object(u.c)({userId:"121",type:s.currentIndex,page:s.page,pagesize:s.pagesize});case 20:a=e.sent;case 21:s.list=s.list.concat(a.data.list),s.hasRequest=!1,a.data.toltalCount<=s.page*s.pagesize&&(s.isOver=!0);case 24:case"end":return e.stop()}},e,t)}))()}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[s("div",{staticClass:"link-wrapper"},[s("ul",{staticClass:"link"},t._l(t.linkWord,function(e,a){return s("li",{key:a,class:{active:a===t.currentIndex}},[s("router-link",{attrs:{to:{path:t.baseRoute+a}}},[t._v(t._s(e))])],1)}))]),t._v(" "),s("page",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{list:t.list}})],1)},staticRenderFns:[]};var h=s("VU/8")(d,v,!1,function(t){s("Mu7H")},null,null);e.a=h.exports}});