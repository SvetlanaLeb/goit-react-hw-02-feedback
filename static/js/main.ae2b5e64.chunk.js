(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),i=n.n(r),o=(n(16),n(7)),s=n(8),d=n(9),l=n(11),b=n(10),u=n(2),j=n.n(u),h=n(0),p=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsxs)("p",{className:j.a.data,children:["Good: ",t]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{className:j.a.data,children:["Neutral: ",n]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{className:j.a.data,children:["Bad: ",a]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{className:j.a.data,children:["Total: ",c]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{className:j.a.data,children:["Positive feedback: ",r,"%"]})})]})})},O=n(3),x=n.n(O),_=function(e){var t=e.options,n=e.onCountFeedback;return Object(h.jsx)("div",{className:x.a.wrapper,children:t.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"button",className:"".concat(x.a.button," ").concat(x.a[e]),onClick:function(){return n(e)},children:e},e.toString())})}))})},v=n(4),f=n.n(v),k=function(e){var t=e.title,n=e.children;return Object(h.jsx)("section",{className:f.a.section,children:Object(h.jsxs)("div",{className:f.a.container,children:[Object(h.jsx)("h2",{className:f.a.title,children:t}),n]})})},g=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},m=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.handleBtnClick=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(d.a)(n,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(e,t){var n=0;return e&&(n=Math.round(100*e/t)),n}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k,{title:"Please leave feedback",children:Object(h.jsx)(_,{options:["good","neutral","bad"],onCountFeedback:this.handleBtnClick})}),Object(h.jsx)(k,{title:"Statistics",children:c?Object(h.jsx)(p,{good:t,neutral:n,bad:a,total:c,positivePercentage:r(t,c)}):Object(h.jsx)(g,{message:"No feedback given"})}),")"]})}}]),n}(a.Component);m.defaultProps={good:0,neutral:0,bad:0};var N=m;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={data:"Statistics_data__1jreb"}},3:function(e,t,n){e.exports={wrapper:"FeedbackOptions_wrapper__1ZNlz",button:"FeedbackOptions_button__185ZG",good:"FeedbackOptions_good__36sBZ",neutral:"FeedbackOptions_neutral__2YQqz",bad:"FeedbackOptions_bad__GUCK1"}},4:function(e,t,n){e.exports={section:"Section_section__1hsSq",title:"Section_title__3tNnY",container:"Section_container__5iHA1"}}},[[18,1,2]]]);
//# sourceMappingURL=main.ae2b5e64.chunk.js.map