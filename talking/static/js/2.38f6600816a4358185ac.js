webpackJsonp([2],{"2Sbf":function(t,e){},"59Qz":function(t,e,a){t.exports=a.p+"static/img/example.cc30023.jpg"},"8Ygr":function(t,e){},FP3a:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),n=a.n(s),r=a("exGp"),i=a.n(r),o=a("oMBN"),c=a("hC99"),l=a("viA7"),u={data:function(){return{recommend:[],baseRoute:"/home/index/",linkWord:["我的关注","最新消息","最热文章","24小时最热"],anchor:""}},props:["sort"],components:{detail:c.a,recommend:o.a},created:function(){this.anchor=this.$route.meta.component,"account"===this.anchor?(this.baseRoute="/userCenter/myAccount/",this.linkWord=["浏览记录","收藏","点赞","评论"]):"home"===this.anchor&&(this.baseRoute="/home/index/",this.linkWord=["我的关注","最新消息","最热文章","24小时最热"])},mounted:function(){var t=this;return i()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(l.e)({sort:0}),t.recommend=a;case 2:case"end":return e.stop()}},e,t)}))()}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",{staticClass:"row",attrs:{gutter:20}},[e("el-col",{attrs:{xs:24,sm:16,md:16,lg:16,xl:16}},[e("detail",{attrs:{sort:this.sort,anchor:this.anchor,baseRoute:this.baseRoute,linkWord:this.linkWord}})],1),this._v(" "),e("el-col",{attrs:{xs:0,sm:8,md:8,lg:8,xl:8}},[e("recommend",{attrs:{recommend:this.recommend}})],1)],1)},staticRenderFns:[]};var p=a("VU/8")(u,d,!1,function(t){a("b+EG")},null,null);e.default=p.exports},Mu7H:function(t,e){},"b+EG":function(t,e){},hC99:function(t,e,a){"use strict";var s=a("Xxa5"),n=a.n(s),r=a("exGp"),i=a.n(r),o={props:{list:{type:Array},sort:{type:String}},created:function(){}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-wrapper"},t._l(t.list,function(e){return s("el-card",{key:e.id,staticClass:"page",attrs:{shadow:"hover"}},[s("el-row",{staticClass:"header"},[s("el-col",{staticClass:"avatar",attrs:{span:2}},[s("img",{attrs:{src:a("v3F0"),alt:""}})]),t._v(" "),s("el-col",{attrs:{span:18}},[s("div",{staticClass:"user"},[s("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"annouce"},[t._v(t._s(e.synopsis))])])]),t._v(" "),s("el-col",{staticClass:"condition",attrs:{span:4}},[e.isTop?s("div",{staticClass:"icon hot"},[t._v("置顶")]):t._e(),t._v(" "),e.isHot?s("div",{staticClass:"icon hot"},[t._v("热帖")]):t._e()])],1),t._v(" "),s("el-row",{staticClass:"zt",attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("router-link",{attrs:{to:""}},[s("img",{attrs:{src:a("59Qz"),alt:"小图"}})])],1),t._v(" "),s("el-col",{staticClass:"details",attrs:{span:16}},[s("router-link",{staticClass:"title",attrs:{to:""}},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"content",attrs:{to:""}},[t._v(t._s(e.content))])],1)],1),t._v(" "),s("div",{staticClass:"operation"},[s("span",[t._v(t._s(e.reading)+"人阅读")]),t._v(" "),s("span",[t._v(t._s(e.like)+"赞")]),t._v(" "),s("span",[t._v(t._s(e.comment)+"评论")]),t._v(" "),s("span",[t._v(t._s(e.collection)+"收藏")]),t._v(" "),s("span",{staticClass:"time"},[t._v("2小时以前 ")])])],1)}))},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(t){a("8Ygr")},null,null).exports,u=a("viA7"),d={data:function(){return{list:[],loading:!1,scrollTop:0,windowHeight:0,bodyHeight:0,threshold:650,pagesize:10,page:1,currentIndex:1,hasRequest:!1,isOver:!1}},components:{page:l},props:["sort","baseRoute","linkWord","anchor"],watch:{sort:function(t){this.handlePageChange(t)}},created:function(){var t=this;return i()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=void 0,t.currentIndex=+t.sort,"home"!==t.anchor){e.next=8;break}return e.next=5,Object(u.a)({type:1,page:1,pagesize:10});case 5:a=e.sent,e.next=12;break;case 8:if("account"!==t.anchor){e.next=12;break}return e.next=11,Object(u.c)({userId:"232344",type:1,page:1,pagesize:10});case 11:a=e.sent;case 12:t.list=a.data.list,a.data.toltalCount<=10&&(t.isOver=!0);case 14:case"end":return e.stop()}},e,t)}))()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handlePageChange:function(t){var e=this;return i()(n.a.mark(function a(){var s,r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(r=void 0,(s=e).loading=!0,s.page=1,s.currentIndex=+t,s.isOver=!1,"home"!==e.anchor){a.next=12;break}return a.next=9,Object(u.a)({type:+t,page:s.page,pagesize:s.pagesize});case 9:r=a.sent,a.next=16;break;case 12:if("account"!==e.anchor){a.next=16;break}return a.next=15,Object(u.c)({userId:"221321",type:+t,page:s.page,pagesize:s.pagesize});case 15:r=a.sent;case 16:s.loading=!1,s.list=r.data.list;case 18:case"end":return a.stop()}},a,e)}))()},handleScroll:function(){var t=this;return i()(n.a.mark(function e(){var a,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t,s=void 0,t.scrollTop=document.documentElement.scrollTop||document.body.scrollTop,t.bodyHeight=document.body.offsetHeight||document.documentElement.offsetHeight,t.windowHeight=window.innerHeight,!(t.bodyHeight-t.scrollTop-t.windowHeight<=t.threshold)){e.next=24;break}if(!t.isOver){e.next=8;break}return e.abrupt("return",!1);case 8:if(a.hasRequest){e.next=24;break}if(a.page++,a.hasRequest=!0,"home"!==t.anchor){e.next=17;break}return e.next=14,Object(u.a)({type:a.currentIndex,page:a.page,pagesize:a.pagesize});case 14:s=e.sent,e.next=21;break;case 17:if("account"!==t.anchor){e.next=21;break}return e.next=20,Object(u.c)({userId:"121",type:a.currentIndex,page:a.page,pagesize:a.pagesize});case 20:s=e.sent;case 21:a.list=a.list.concat(s.data.list),a.hasRequest=!1,s.data.toltalCount<=a.page*a.pagesize&&(a.isOver=!0);case 24:case"end":return e.stop()}},e,t)}))()}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("div",{staticClass:"link-wrapper"},[a("ul",{staticClass:"link"},t._l(t.linkWord,function(e,s){return a("li",{key:s,class:{active:s===t.currentIndex}},[a("router-link",{attrs:{to:{path:t.baseRoute+s}}},[t._v(t._s(e))])],1)}))]),t._v(" "),a("page",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{list:t.list}})],1)},staticRenderFns:[]};var v=a("VU/8")(d,p,!1,function(t){a("Mu7H")},null,null);e.a=v.exports},oMBN:function(t,e,a){"use strict";var s=a("Xxa5"),n=a.n(s),r=a("exGp"),i=a.n(r),o=a("viA7"),c={data:function(){return{sort:0,comments:[]}},mounted:function(){var t=this;return i()(n.a.mark(function e(){var a,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t,e.next=3,Object(o.e)({sort:a.sort});case 3:s=e.sent,t.comments=s.data;case 5:case"end":return e.stop()}},e,t)}))()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"comment",attrs:{shadow:"hover"}},[a("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("最热文章")]),t._v(" "),a("el-button",{staticClass:"sort",attrs:{type:"text"}},[t._v("本周")]),t._v(" "),a("el-button",{staticClass:"sort",attrs:{type:"text",autofocus:""}},[t._v("本日")])],1),t._v(" "),a("ul",{staticClass:"news"},t._l(t.comments,function(e,s){return a("li",{key:e.id,staticClass:"title"},[a("div",[a("span",[t._v(t._s(s+1)+". ")]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:""}},[t._v(t._s(e.title))])],1)])}))])},staticRenderFns:[]};var u=a("VU/8")(c,l,!1,function(t){a("2Sbf")},"data-v-29db59bf",null);e.a=u.exports}});