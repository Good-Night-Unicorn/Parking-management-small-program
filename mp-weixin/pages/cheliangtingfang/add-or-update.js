(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cheliangtingfang/add-or-update"],{"0030":function(e,t,n){"use strict";n.r(t);var i=n("d283"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},"79f7":function(e,t,n){"use strict";(function(e){n("7f38"),n("921b");i(n("66fd"));var t=i(n("d6b3"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},8068:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},d283:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,r,a,u){try{var s=e[a](u),o=s.value}catch(h){return void n(h)}s.done?t(o):Promise.resolve(o).then(i,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var u=e.apply(t,n);function s(e){a(u,i,r,s,o,"next",e)}function o(e){a(u,i,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("25df"))}.bind(null,n)).catch(n.oe)},o={data:function(){return{ruleForm:{cheweibianhao:"",cheweimingcheng:"",xiaoshidanjia:"",tingfangshijian:"",beizhu:"",tupian:"",zhanghao:"",shouji:"",sfsh:"",shhf:"",userid:""},user:{},ro:{cheweibianhao:!1,cheweimingcheng:!1,xiaoshidanjia:!1,tingfangshijian:!1,beizhu:!1,tupian:!1,zhanghao:!1,shouji:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var t=u(i.default.mark((function t(n){var r,a,u,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ruleForm.tingfangshijian=this.$utils.getCurDate(),r=e.getStorageSync("nowTable"),t.next=4,this.$api.session(r);case 4:if(a=t.sent,this.user=a.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.shouji=this.user.shouji,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=16;break}return this.ruleForm.id=n.id,t.next=14,this.$api.info("cheliangtingfang",this.ruleForm.id);case 14:a=t.sent,this.ruleForm=a.data;case 16:if(!n.cross){t.next=59;break}u=e.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 19:if((t.t1=t.t0()).done){t.next=59;break}if(s=t.t1.value,"cheweibianhao"!=s){t.next=25;break}return this.ruleForm.cheweibianhao=u[s],this.ro.cheweibianhao=!0,t.abrupt("continue",19);case 25:if("cheweimingcheng"!=s){t.next=29;break}return this.ruleForm.cheweimingcheng=u[s],this.ro.cheweimingcheng=!0,t.abrupt("continue",19);case 29:if("xiaoshidanjia"!=s){t.next=33;break}return this.ruleForm.xiaoshidanjia=u[s],this.ro.xiaoshidanjia=!0,t.abrupt("continue",19);case 33:if("tingfangshijian"!=s){t.next=37;break}return this.ruleForm.tingfangshijian=u[s],this.ro.tingfangshijian=!0,t.abrupt("continue",19);case 37:if("beizhu"!=s){t.next=41;break}return this.ruleForm.beizhu=u[s],this.ro.beizhu=!0,t.abrupt("continue",19);case 41:if("tupian"!=s){t.next=45;break}return this.ruleForm.tupian=u[s],this.ro.tupian=!0,t.abrupt("continue",19);case 45:if("zhanghao"!=s){t.next=49;break}return this.ruleForm.zhanghao=u[s],this.ro.zhanghao=!0,t.abrupt("continue",19);case 49:if("shouji"!=s){t.next=53;break}return this.ruleForm.shouji=u[s],this.ro.shouji=!0,t.abrupt("continue",19);case 53:if("userid"!=s){t.next=57;break}return this.ruleForm.userid=u[s],this.ro.userid=!0,t.abrupt("continue",19);case 57:t.next=19;break;case 59:this.styleChange();case 60:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tingfangshijianChange:function(e){this.ruleForm.tingfangshijian=e.target.value,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.xiaoshidanjia||this.$validate.isIntNumer(this.ruleForm.xiaoshidanjia)){e.next=3;break}return this.$utils.msg("小时单价应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=6;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("cheliangtingfang",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("cheliangtingfang",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}).call(this,n("543d")["default"])},d564:function(e,t,n){"use strict";var i=n("f7f0"),r=n.n(i);r.a},d6b3:function(e,t,n){"use strict";n.r(t);var i=n("8068"),r=n("0030");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("d564");var u,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"5cfbd424",null,!1,i["a"],u);t["default"]=o.exports},f7f0:function(e,t,n){}},[["79f7","common/runtime","common/vendor"]]]);