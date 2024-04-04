import{s as h}from"./service-P8kc4j81.js";import{_ as u,G as p,r as l,o as r,c as f,w as d,a as m,b as a,t as i,e as n}from"./index-BSkzfego.js";const _={name:"Healthchecks",mixins:[h],props:{item:Object},components:{Generic:p},data:()=>({api:null}),computed:{up:function(){var e;return this.api?(e=this.api.checks)==null?void 0:e.filter(t=>t.status.toLowerCase()==="up").length:""},down:function(){var e;return this.api?(e=this.api.checks)==null?void 0:e.filter(t=>t.status.toLowerCase()==="down").length:""},grace:function(){var e;return this.api?(e=this.api.checks)==null?void 0:e.filter(t=>t.status.toLowerCase()==="grace").length:""}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){if(!this.item.apikey){console.error("apikey is not present in config.yml for the Healthchecks entry!");return}const t={"X-Api-Key":this.item.apikey};this.api=await this.fetch("/api/v1/checks/",{headers:t}).catch(c=>{console.error(c)})}}},k={class:"notifs"},g={key:0,class:"notif up",title:"Up"},y={key:1,class:"notif down",title:"Down"},w={key:2,class:"notif grace",title:"Grace"};function C(e,t,c,v,x,s){const o=l("Generic");return r(),f(o,{item:c.item},{indicator:d(()=>[m("div",k,[s.up>0?(r(),a("strong",g,i(s.up),1)):n("",!0),s.down>0?(r(),a("strong",y,i(s.down),1)):n("",!0),s.grace>0?(r(),a("strong",w,i(s.grace),1)):n("",!0)])]),_:1},8,["item"])}const b=u(_,[["render",C],["__scopeId","data-v-476828b9"]]);export{b as default};
