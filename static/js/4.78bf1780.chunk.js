(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[4],{442:function(e,s,a){e.exports={wrap:"Dialz_wrap__1iVus",block:"Dialz_block__ypVTh",blockDialogs:"Dialz_blockDialogs__UVhGm",blockMessage:"Dialz_blockMessage__IdDjO",messageWrap:"Dialz_messageWrap__2AAC7",oneMessage:"Dialz_oneMessage__3QO-F",bodyT:"Dialz_bodyT__1RSoF",noMessage:"Dialz_noMessage__3zt9r",formSend:"Dialz_formSend__3FPA_"}},449:function(e,s,a){"use strict";a.r(s),a.d(s,"DialogF",(function(){return h}));var t=a(4),i=a(22),c=a(121),n=a(164),r=a(0),o=a(442),d=a.n(o),l=a(39),b=a(33),j=a(155),m=a.n(j),u=a(235),g=a(439),h=function(e){var s=Object(i.c)(),a=Object(i.d)((function(e){return e.dialogs.dataDialogs})),n=Object(i.d)((function(e){return e.dialogs.dataMessage})),o=Object(b.useHistory)(),j=m.a.parse(o.location.search.substr(1)),h=function(e){_(e),s(Object(c.d)(e))},_=function(e){var s={id:e};o.push({pathname:"/dialogs",search:m.a.stringify(s)})};Object(r.useEffect)((function(){s(Object(c.c)())}),[n]);var f=a.map((function(e){return Object(t.jsx)(p,{photo:e.photos,id:e.id,userName:e.userName,getMessageWithFriends:h},e.id)}));return Object(t.jsxs)("div",{className:d.a.wrap,children:[Object(t.jsx)("div",{className:d.a.blockDialogs,children:f}),Object(t.jsxs)("div",{className:d.a.blockMessage,children:[Object(t.jsx)(O,{dataMessage:n}),Object(t.jsx)("div",{className:d.a.formSend,children:Object(t.jsx)(l.d,{initialValues:{message:""},onSubmit:function(e,a){var t,i=a.resetForm;t=e,j.id&&s(Object(c.e)(+j.id,t)),i()},children:function(e){return Object(t.jsxs)(l.c,{children:[Object(t.jsx)(g.a.TextArea,{autoSize:{minRows:1,maxRows:4},name:"message",maxLength:250,style:{maxWidth:"60%"},placeholder:"write message"}),Object(t.jsx)("span",{children:Object(t.jsx)(u.a,{shape:"round",type:"primary",htmlType:"submit",children:"Send"})})]})}})})]})]})},p=function(e){return Object(t.jsxs)("div",{className:d.a.block,onClick:function(){e.getMessageWithFriends(e.id)},children:[Object(t.jsx)("img",{src:e.photo.small||n.a,style:{width:50},alt:""}),e.userName]})},O=function(e){return Object(t.jsx)("div",{className:d.a.messageWrap,children:0!==e.dataMessage.items.length?e.dataMessage.items.map((function(e){var s=e.addedAt.substring(11,16);return Object(t.jsxs)("div",{className:d.a.oneMessage,children:[Object(t.jsx)("div",{children:"".concat(e.senderName,"  ").concat(s)}),Object(t.jsx)("div",{className:d.a.bodyT,children:e.body})]},e.id)})):Object(t.jsx)("div",{className:d.a.noMessage,children:"No messages here yet"})})};s.default=h}}]);
//# sourceMappingURL=4.78bf1780.chunk.js.map