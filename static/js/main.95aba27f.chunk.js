(this["webpackJsonpncd-ii-demo"]=this["webpackJsonpncd-ii-demo"]||[]).push([[0],{100:function(e,t){},118:function(e,t){},146:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),o=n(24),r=n(77),s=n(0),i=n(41),l=n.n(i),d=n(3),u=(n(57),n(42)),j=n.n(u),b=n(149),f=n(147),x=n(1),m=function(e){var t=e.election,n=e.index,c=e.delay,a=(e.contract,e.currentUser,e.nearConfig,e.wallet,e.onElectionSelected),o=Object(s.useState)(!1),r=Object(d.a)(o,2),i=r[0],l=r[1],u=E(t.creationDate),j=E(t.startDate),m=E(t.endDate),g=Object(f.a)((function(){return l(!0)}),200*n),h=Object(d.a)(g,3)[2];return Object(s.useEffect)((function(){h()}),[h]),Object(x.jsx)(b.a,{as:s.Fragment,show:i,enter:"transform transition duration-[".concat(c,"ms]"),enterFrom:"opacity-0 rotate-[-120deg] scale-50",enterTo:"opacity-100 rotate-0 scale-100",leave:"transform duration-200 transition ease-in-out",leaveFrom:"opacity-100 rotate-0 scale-100 ",leaveTo:"opacity-0 scale-95 ",children:Object(x.jsxs)("div",{onClick:function(){return a(t)},className:"w-400 bg-gradient-to-r from-yellow-400 to-red-500 p-6 max-w-sm mx-auto rounded-xl flex-col shadow-md flex items-center space-x-4 cursor-pointer",children:[Object(x.jsx)("div",{className:"text-xl font-medium text-black",children:t.title}),Object(x.jsx)("div",{className:"text-xl font-medium text-black",children:t.description}),Object(x.jsxs)("div",{className:"text-md font-medium text-black text",children:["Created at: ",_(u)]}),Object(x.jsxs)("div",{className:"text-md font-medium text-black text",children:[_(j)," - ",_(m)]})]})})},g=n(150),h=function(e){var t=e.candidate,n=e.votes,c=(e.active,e.checked),a=(e.onLoading,Object(s.useState)([])),o=Object(d.a)(a,2),r=o[0],i=o[1];return Object(s.useEffect)((function(){t&&n&&n.votes&&(console.log(n),n.votes.filter((function(e){return e.candidate.accountId===t.accountId})).forEach((function(e){i(e.votes)})))}),[n,t]),Object(x.jsxs)("div",{className:"flex items-center justify-between w-full",children:[Object(x.jsx)("div",{className:"w-1/4 flex items-center",children:Object(x.jsxs)("div",{className:"text-sm",children:[Object(x.jsxs)(g.a.Label,{as:"div",className:"font-medium flex align-center ".concat(c?"text-white":"text-gray-900"),children:[Object(x.jsx)(v,{}),Object(x.jsx)("p",{className:"flex-grow",children:t.accountId})]}),Object(x.jsxs)(g.a.Description,{as:"span",className:"inline mx-2".concat(c?"text-sky-100 bg-green-400":"text-gray-500"),children:[Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-2 flex-none",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),Object(x.jsx)("p",{className:"flex-grow",children:t.name})]}),Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"flex-none mr-2 h-6 w-6 ",viewBox:"0 0 20 20",fill:"currentColor",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),Object(x.jsx)("p",{className:"flex-grow",children:t.slogan})]}),Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"flex-none mr-2 h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),Object(x.jsx)("p",{className:"flex-grow",children:t.goals})]})]})]})}),Object(x.jsxs)("div",{className:"self-start flex flex-col",children:[Object(x.jsx)("div",{children:r&&r.length>0?"Votes (".concat(r.length,"):"):"No votes yes"}),r&&r.map((function(e,t){return Object(x.jsx)(O,{vote:e},t)}))]}),Object(x.jsx)("div",{className:"flex-shrink-0 text-white",children:c&&Object(x.jsx)(p,{className:"w-6 h-6"})})]})},O=function(e){var t=e.vote;return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)("div",{children:Object(x.jsx)(v,{})}),Object(x.jsx)("div",{children:t.accountId})]})})};function v(e){return Object(x.jsx)("svg",Object(o.a)(Object(o.a)({xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-2 flex-none",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),{},{children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})}))}function p(e){return Object(x.jsxs)("svg",Object(o.a)(Object(o.a)({viewBox:"0 0 24 24",fill:"none"},e),{},{children:[Object(x.jsx)("circle",{cx:12,cy:12,r:12,fill:"#fff",opacity:"0.2"}),Object(x.jsx)("path",{d:"M7 13l3 3 7-7",stroke:"#fff",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})]}))}var w=function(e){e.election;var t=e.candidates,n=e.votes,c=(e.contract,e.currentUser,e.nearConfig,e.wallet,e.onCandidateSelected),a=e.onLoading,o=Object(s.useState)(),r=Object(d.a)(o,2),i=r[0],l=r[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"w-full",children:Object(x.jsxs)(g.a,{value:i,onChange:function(e){l(e),c(e)},children:[Object(x.jsx)(g.a.Label,{className:"sr-only",children:"Candidate"}),Object(x.jsx)("div",{className:"flex flex-col justify-between",children:t.map((function(e,t){return Object(x.jsx)(g.a.Option,{value:e.accountId,className:function(e){var t=e.active,n=e.checked;return"".concat(t?"ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60":"","\n                      ").concat(n?"bg-sky-900 bg-opacity-75 text-white bg-green-500":"bg-white","\n                      w-full min-w-10 relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none m-2")},children:function(t){var c=t.active,o=t.checked;return Object(x.jsx)(h,{candidate:e,votes:n,active:c,checked:o,onLoading:a})}},t)}))})]})})})},y=n(148),N=function(e){var t=e.label,n=e.value,c=e.lines,a=e.onValueChange;return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"flex flex-row mt-2 relative rounded-md",children:[Object(x.jsx)("label",{htmlFor:t,className:"block text-sm font-medium text-gray-700 mr-10 w-1/3",children:t}),c?Object(x.jsx)("textarea",{className:"border-2 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-2/3 sm:text-sm border-gray-200 rounded-md",name:t,id:t,rows:c,onChange:a}):Object(x.jsx)("input",{type:"text",name:t,id:t,className:"border-2 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-2/3 sm:text-sm border-gray-200 rounded-md",value:n,onChange:a})]})})};function C(e){var t=e.onClose,n=e.election,c=e.contract,a=(e.currentUser,e.nearConfig,e.wallet,e.onCandidateAdded),o=e.onLoading,r=Object(s.useState)(""),i=Object(d.a)(r,2),l=i[0],u=i[1],j=Object(s.useState)(""),f=Object(d.a)(j,2),m=f[0],g=f[1],h=Object(s.useState)("My goals"),O=Object(d.a)(h,2),v=O[0],p=O[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(b.a,{appear:!0,show:!0,as:s.Fragment,children:Object(x.jsx)(y.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:t,children:Object(x.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(x.jsx)(b.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(x.jsx)(y.a.Overlay,{className:"fixed inset-0"})}),Object(x.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(x.jsx)(b.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(x.jsxs)("div",{className:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:[Object(x.jsx)(y.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Register as a cadidate"}),Object(x.jsx)(N,{label:"Name",value:l,onValueChange:function(e){return u(e.target.value)}}),Object(x.jsx)(N,{label:"Slogan",value:m,onValueChange:function(e){return g(e.target.value)}}),Object(x.jsx)(N,{label:"Goals",value:v,lines:4,onValueChange:function(e){return p(e.target.value)}}),Object(x.jsxs)("div",{className:"mt-4 flex justify-between",children:[Object(x.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:t,children:"Cancel"}),Object(x.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:function(){o&&(o(!0),c.add_candidacy({electionId:n.id,name:l,slogan:m,goals:v}).then((function(){o(!1),a()}),(function(e){o(!1),console.log(e)})))},children:"Submit"})]})]})})]})})})})}var k=function(e){var t=e.election,n=e.contract,c=e.currentUser,a=e.nearConfig,o=e.wallet,r=e.onClose,i=e.onLoading,l=Object(s.useState)(!1),u=Object(d.a)(l,2),m=u[0],g=u[1],h=Object(s.useState)("#000"),O=Object(d.a)(h,2),v=O[0],p=O[1],y=Object(s.useState)([]),N=Object(d.a)(y,2),k=N[0],S=N[1],L=Object(s.useState)([]),F=Object(d.a)(L,2),U=F[0],I=F[1],T=Object(s.useState)(!1),M=Object(d.a)(T,2),A=M[0],D=M[1],V=Object(s.useState)(!1),B=Object(d.a)(V,2),W=B[0],z=B[1],R=Object(s.useState)(!1),H=Object(d.a)(R,2),G=H[0],K=H[1],P=E(t.creationDate),J=E(t.startDate),q=E(t.endDate),Q=Object(f.a)((function(){return g(!0)}),100),X=Object(d.a)(Q,3)[2],Y=Object(s.useState)(!1),Z=Object(d.a)(Y,2),$=Z[0],ee=Z[1],te=Object(s.useState)(),ne=Object(d.a)(te,2),ce=ne[0],ae=ne[1];Object(s.useEffect)((function(){c&&n.get_god_mode({accountId:c.accountId}).then((function(e){ee(e)}))}),[$,n,c]),Object(s.useEffect)((function(){i&&(i(!0),n.get_candidates({electionId:t.id}).then((function(e){i(!1),S(e)}),(function(e){i(!1)})))}),[n,t.id,A,i]);Object(s.useEffect)((function(){i&&(i(!0),n.get_votes({electionId:t.id}).then((function(e){i(!1),z(!0),I(e)}),(function(e){i(!1)})))}),[n,t.id,i,W]);return Object(s.useEffect)((function(){X()}),[X]),Object(x.jsx)(b.a,{as:s.Fragment,show:m,enter:"transform transition duration-[250ms]",enterFrom:"opacity-0 rotate-[-120deg] scale-50",enterTo:"opacity-100 rotate-0 scale-100",leave:"transform duration-200 transition ease-in-out",leaveFrom:"opacity-100 rotate-0 scale-100 ",leaveTo:"opacity-0 scale-95 ",children:Object(x.jsxs)("div",{className:"mw-800 bg-gradient-to-r from-indigo-300 to-indigo-500 p-6 rounded-xl flex-col shadow-md flex space-x-4",children:[Object(x.jsxs)("div",{className:"text-2xl flex justify-between font-medium items-center mb-4",children:[Object(x.jsx)("button",{onClick:function(){return K(!0)},disabled:!function(){return $||J<j()()},className:"disabled:opacity-50 mt-2 bg-green-500 hover:bg-green-700 w-14 h-14 text-white font-bold py-2 px-4 rounded-xl float-right",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"})})}),Object(x.jsx)("div",{className:"mt-2 text-2xl text-center font-medium text-black",children:t.title}),Object(x.jsx)("button",{className:"font-medium ",onClick:r,onMouseEnter:function(){return p("#ddd")},onMouseLeave:function(){return p("#000")},children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:v,children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),Object(x.jsxs)("div",{className:"text-xl font-medium text-black",children:[t.description,Object(x.jsx)("button",{className:"disabled:opacity-50 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right",onClick:function(){i&&(i(!0),n.add_vote({electionId:t.id,candidateId:ce,comment:""}).then((function(){i(!1)}),(function(e){i(!1)})))},disabled:!ce,children:"Submit vote"})]}),Object(x.jsxs)("div",{className:"text-md font-medium text-black text",children:["Created at: ",_(P)]}),Object(x.jsxs)("div",{className:"text-md font-medium text-black text",children:[_(J)," - ",_(q)]}),Object(x.jsx)("div",{className:"text-xl font-medium text-black text-center",children:k.length>0?"Candidates:":"No cadidates yes, apply to be the first"}),G&&Object(x.jsx)("div",{className:"backdrop-filter backdrop-blur-lg mx-auto w-80",children:Object(x.jsx)(C,{election:t,contract:n,currentUser:c,nearConfig:a,wallet:o,onCandidateAdded:function(){D(!0),K(!1)},onLoading:i,onClose:function(){return K(!1)}})}),k&&Object(x.jsx)("div",{children:Object(x.jsx)(w,{election:t,candidates:k,votes:U,contract:n,currentUser:c,nearConfig:a,wallet:o,onLoading:i,onCandidateSelected:ae})})]})})};function S(e){var t=e.onClose,n=(e.election,e.contract),c=(e.currentUser,e.nearConfig,e.wallet,e.onElectionAdded),a=e.onLoading,o=Object(s.useState)(""),r=Object(d.a)(o,2),i=r[0],l=r[1],u=Object(s.useState)(""),j=Object(d.a)(u,2),f=j[0],m=j[1],g=Object(s.useState)("0"),h=Object(d.a)(g,2),O=h[0],v=h[1],p=Object(s.useState)("0"),w=Object(d.a)(p,2),C=w[0],k=w[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(b.a,{appear:!0,show:!0,as:s.Fragment,children:Object(x.jsx)(y.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto backdrop-blur-xl",onClose:t,children:Object(x.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(x.jsx)(b.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(x.jsx)(y.a.Overlay,{className:"fixed inset-0"})}),Object(x.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(x.jsx)(b.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(x.jsxs)("div",{className:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:[Object(x.jsx)(y.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Add new election"}),Object(x.jsx)(N,{label:"Title",value:i,onValueChange:function(e){return l(e.target.value)}}),Object(x.jsx)(N,{label:"Description",value:f,onValueChange:function(e){return m(e.target.value)}}),Object(x.jsx)(N,{label:"Start on",type:"date",value:O,onValueChange:function(e){return v(e.target.value)}}),Object(x.jsx)(N,{label:"Ends on",value:C,type:"date",onValueChange:function(e){return k(e.target.value)}}),Object(x.jsxs)("div",{className:"mt-4 flex justify-between",children:[Object(x.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:t,children:"Cancel"}),Object(x.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:function(){a&&(a(!0),n.add_election({title:i,description:f,startDate:O,endDate:C}).then((function(){a(!1),c()}),(function(e){a(!1),console.log(e)})))},children:"Submit"})]})]})})]})})})})}var L=function(e){e.contract,e.currentUser,e.nearConfig,e.wallet,e.onLoading;var t=e.showAddNewElection,n=Object(s.useState)(!1),c=Object(d.a)(n,2),a=c[0],o=c[1],r=Object(f.a)((function(){return o(!0)}),100),i=Object(d.a)(r,3)[2];return Object(s.useEffect)((function(){i()}),[i]),Object(x.jsx)(b.a,{as:s.Fragment,show:a,enter:"transform transition duration-[200ms]",enterFrom:"opacity-0 rotate-[-120deg] scale-50",enterTo:"opacity-100 rotate-0 scale-100",leave:"transform duration-200 transition ease-in-out",leaveFrom:"opacity-100 rotate-0 scale-100 ",leaveTo:"opacity-0 scale-95 ",children:Object(x.jsx)("button",{onClick:t,className:"w-full bg-gradient-to-r from-green-100 to-blue-300 hover:translate-x-10 p-6 mx-auto rounded-xl shadow-md space-x-4 cursor-pointer",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mx-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})})})})},_=function(e){return e.format("DD MMM yyyy HH:MM")},E=function(e){var t=Math.floor(e/1e6).toFixed();return j()(t,"x")},F=function(e){var t=e.contract,n=e.currentUser,c=e.nearConfig,a=e.wallet,o=e.onLoading,r=Object(s.useState)(),i=Object(d.a)(r,2),l=i[0],u=i[1],j=Object(s.useState)(!1),b=Object(d.a)(j,2),f=b[0],g=b[1],h=Object(s.useState)(),O=Object(d.a)(h,2),v=O[0],p=O[1],w=Object(s.useState)(!1),y=Object(d.a)(w,2),N=y[0],C=y[1],_=function(e){localStorage.setItem("activeElection",e.id),p(e)};return Object(s.useEffect)((function(){if(l){var e=localStorage.getItem("activeElection");l.filter((function(t){return"".concat(t.id)===e})).forEach((function(e){p(e)}))}}),[l,f]),Object(s.useEffect)((function(){o&&(o(!0),t.get_elections().then((function(e){o(!1),u(e)}),(function(e){o(!1)})))}),[t,o]),Object(x.jsxs)("div",{className:"container mx-auto flex-row",children:[!v&&Object(x.jsxs)("div",{className:"grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4",children:[Object(x.jsx)(L,{contract:t,currentUser:n,nearConfig:c,wallet:a,onLoading:o,showAddNewElection:function(){C(!0)}}),l&&l.map((function(e,o){return Object(x.jsx)(m,{election:e,index:o,contract:t,currentUser:n,nearConfig:c,wallet:a,onElectionSelected:_},e.id)}))]}),N&&Object(x.jsx)("div",{className:"backdrop-filter backdrop-blur-lg mx-auto w-80",children:Object(x.jsx)(S,{contract:t,currentUser:n,nearConfig:c,wallet:a,onElectionAdded:function(){g(!0),C(!1)},onLoading:o,onClose:function(){return C(!1)}})}),v&&Object(x.jsx)("div",{className:"grid grid-cols-1",children:Object(x.jsx)(k,{election:v,contract:t,currentUser:n,nearConfig:c,wallet:a,onLoading:o,onClose:function(){localStorage.removeItem("activeElection"),p(null)}})})]})},U=n(151),I=function(e){var t=e.contract,n=e.currentUser,c=(e.nearConfig,e.wallet,e.onLoading),a=Object(s.useState)(!1),o=Object(d.a)(a,2),r=o[0],i=o[1];Object(s.useEffect)((function(){n&&t.get_god_mode({accountId:n.accountId}).then((function(e){console.log("God mode: [".concat(e,"]")),i(e)}),(function(e){console.log(e)}))}),[r,t,n]);return Object(x.jsxs)("div",{className:"flex-row content-between",children:[Object(x.jsx)("span",{children:"God mode: "}),Object(x.jsxs)(U.a,{checked:r,onChange:function(e){e?(c(!0),t.god_mode_on({}).then((function(){i(!0),c(!1)}),(function(e){c(!1)}))):(c(!0),t.god_mode_off({}).then((function(){i(!1),c(!1)}),(function(e){c(!1)})))},className:"".concat(r?"bg-blue-600":"bg-gray-200"," relative inline-flex items-center h-6 rounded-full w-11"),children:[Object(x.jsx)("span",{className:"sr-only",children:"God mode"}),Object(x.jsx)("span",{className:"".concat(r?"translate-x-6":"translate-x-1"," inline-block w-4 h-4 transform bg-white rounded-full")})]})]})},T=function(e){var t=e.contract,n=e.currentUser,c=e.nearConfig,a=e.wallet,o=e.onLoading,r=Object(s.useState)(!0),i=Object(d.a)(r,2),l=i[0],u=i[1],j=Object(f.a)((function(){return u(!0)}),500),m=Object(d.a)(j,3)[2];return Object(s.useEffect)((function(){m()}),[m]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(b.a,{as:s.Fragment,show:l,enter:"transform transition duration-[500ms]",enterFrom:"opacity-0 rotate-[-120deg] scale-50",enterTo:"opacity-100 rotate-0 scale-100",leave:"transform duration-200 transition ease-in-out",leaveFrom:"opacity-100 rotate-0 scale-100 ",leaveTo:"opacity-0 scale-95 ",children:Object(x.jsxs)("div",{className:"flex justify-between bg-gradient-to-r from-green-400 to-blue-500 mt-6 p-2 mx-auto rounded-xl shadow-md items-center space-x-4",children:[Object(x.jsx)("img",{className:"h-14 w-20",src:"https://docs.near.org/img/near_logo.svg",alt:"NEAR Logo"}),Object(x.jsx)("div",{className:"text-xl md:pl-60 font-medium text-black uppercase",children:"Voting is cool \ud83d\ude0e"}),Object(x.jsxs)("div",{className:"flex justify-between",children:[n&&Object(x.jsxs)("div",{className:"mr-8",children:[Object(x.jsxs)("p",{className:"text-black-500",children:["Account ID: ",n.accountId]}),Object(x.jsx)(I,{contract:t,currentUser:n,nearConfig:c,wallet:a,onLoading:o})]}),n?Object(x.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right",onClick:function(){a.signOut(),window.location.replace(window.location.origin+window.location.pathname)},children:"Logout"}):Object(x.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right",onClick:function(){a.requestSignIn(c.contractName,"NEAR Voting App")},children:"Login"})]})]})})})},M=function(e){var t=e.isLoading;return Object(x.jsx)(x.Fragment,{children:t?Object(x.jsx)("div",{className:"my-4 mx-auto loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"}):Object(x.jsx)("div",{className:"my-4 h-12 w-12"})})},A=function(e){var t=e.contract,n=e.currentUser,c=e.nearConfig,a=e.wallet,o=Object(s.useState)(!1),r=Object(d.a)(o,2),i=r[0],l=r[1];return Object(x.jsxs)("div",{className:"container mx-auto",children:[Object(x.jsx)(T,{contract:t,currentUser:n,nearConfig:c,wallet:a,onLoading:l}),Object(x.jsx)(M,{isLoading:i}),n&&Object(x.jsx)(F,{contract:t,currentUser:n,nearConfig:c,wallet:a,onLoading:l})]})},D=(n(84),n(78)),V=n.n(D),B=n(34);function W(){return(W=Object(r.a)(a.a.mark((function e(){var t,n,c,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=V()("production"),e.next=3,B.connect(Object(o.a)({deps:{keyStore:new B.keyStores.BrowserLocalStorageKeyStore}},t));case 3:if(n=e.sent,!(c=new B.WalletConnection(n)).getAccountId()){e.next=11;break}return e.t0=c.getAccountId(),e.next=9,c.account().state();case 9:e.t1=e.sent.amount,r={accountId:e.t0,balance:e.t1};case 11:return e.next=13,new B.Contract(c.account(),t.contractName,{viewMethods:["get_elections","get_candidates","get_votes","get_god_mode"],changeMethods:["add_election","add_candidacy","add_vote","god_mode_on","god_mode_off"],sender:c.getAccountId()});case 13:return s=e.sent,e.abrupt("return",{contract:s,currentUser:r,nearConfig:t,walletConnection:c});case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.nearInitPromise=function(){return W.apply(this,arguments)}().then((function(e){var t=e.contract,n=e.currentUser,c=e.nearConfig,a=e.walletConnection;l.a.render(Object(x.jsx)(A,{contract:t,currentUser:n,nearConfig:c,wallet:a}),document.getElementById("root"))}))},78:function(e,t){var n=Object({NODE_ENV:"production",PUBLIC_URL:"/nearvember-challenge-8",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"dev-1637962142021-34818082741173";e.exports=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:n,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org"};case"production":case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:n,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org"};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}},84:function(e,t,n){},90:function(e,t){}},[[146,1,2]]]);
//# sourceMappingURL=main.95aba27f.chunk.js.map