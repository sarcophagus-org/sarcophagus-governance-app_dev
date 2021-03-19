(this["webpackJsonpsarcophagus-governence-app"]=this["webpackJsonpsarcophagus-governence-app"]||[]).push([[0],{294:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"distributor","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},295:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OnStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OnUnstake","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakeValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_sarcoToken","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"totalStakedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"stakeValueAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},296:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sarco","outputs":[{"internalType":"contract Sarco","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sarcoStaking","outputs":[{"internalType":"contract SarcoStaking","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"contract SarcoStaking","name":"_sarcoStaking","type":"address"},{"internalType":"contract Sarco","name":"_sarco","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"balanceOfAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockNumber","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},297:function(e){e.exports=JSON.parse('{"name":"sarcophagus-governence-app","version":"0.1.0","private":true,"dependencies":{"@craco/craco":"^6.1.1","@tailwindcss/forms":"^0.2.1","@testing-library/jest-dom":"^5.11.9","@testing-library/react":"^11.2.5","@testing-library/user-event":"^12.8.3","@tippyjs/react":"^4.2.4","@walletconnect/web3-provider":"^1.4.0","classnames":"^2.2.6","ethers":"^5.0.32","numeral":"^2.0.6","react":"^17.0.1","react-dom":"^17.0.1","react-scripts":"4.0.3","react-toastify":"^7.0.3","web-vitals":"^1.1.1","web3modal":"^1.9.3"},"scripts":{"start":"REACT_APP_GIT_HASH=`git rev-parse --short HEAD` craco start","build":"REACT_APP_GIT_HASH=`git rev-parse --short HEAD` craco build","test":"craco test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"@tailwindcss/postcss7-compat":"^2.0.3","autoprefixer":"^9.8.6","dotenv":"^8.2.0","install":"^0.13.0","npm":"^7.6.3","postcss":"^7.0.35","tailwindcss":"npm:@tailwindcss/postcss7-compat@^2.0.3"},"engines":{"node":"15.11"},"homepage":"govern.dev.sarcophagus.io"}')},308:function(e,t,n){},310:function(e,t){},317:function(e,t){},334:function(e,t){},380:function(e,t){},382:function(e,t){},391:function(e,t){},393:function(e,t){},419:function(e,t){},421:function(e,t){},422:function(e,t){},428:function(e,t){},441:function(e,t){},453:function(e,t){},456:function(e,t){},499:function(e,t){},501:function(e,t){},531:function(e,t){},534:function(e,t){},609:function(e,t){},624:function(e,t,n){"use strict";n.r(t);var a,r,i=n(7),s=n.n(i),c=n(118),o=n.n(c),l=(n(308),n(20)),u=n(100),d=n(3),p=n.n(d),b=n(290),y=n(40),m=n(55),f=n(34),j=n(291),v=n.n(j),h=n(292),O=function(){return[].concat([],[parseInt("4",10)])},x=function(e){var t=Object(i.useState)(),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(i.useEffect)((function(){e===parseInt("4",10)&&r({sarcophagusToken:"0x77ec161f6c2f2ce4554695a07e071d3f0ef3aef5",SarcoStakingProxy:"0xbfc81983fd813d72dC289Ea86c5e08B61cF7EbB8",SarcoVotingRightsProxy:"0xee70B92dCC35fcEfB2d51fC1ad08Ae2611439CBa"})}),[e]),a},g={position:"bottom-right",hideProgressBar:!1,closeOnClick:!0,autoClose:3e3,pauseOnHover:!0,draggable:!0,progress:void 0},w={walletconnect:{package:n.n(h).a,options:{infuraId:"27e484dcd9e3efcfd25a83a78777cdf1"}}},T=new v.a({providerOptions:w,cacheProvider:!0}),S=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.connect();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=n(6),N=function(){(a=Object(i.createContext)()).displayName="Web3 Provider";var e=a.Provider;return function(t){var n=t.children,a=function(){var e=Object(i.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(null),s=Object(l.a)(r,2),c=s[0],o=s[1];return Object(i.useEffect)((function(){return T.cachedProvider&&T.connect().then((function(e){o(e)})).catch((function(e){console.error("error connecting",e)})),null===T||void 0===T||T.on("connect",(function(e){O().includes(parseInt(e.chainId))?(o(e),f.b.dark("Connected",Object(y.a)({toastId:"connected"},g))):(f.b.dark("Switch to a supported network",Object(y.a)(Object(y.a)({},g),{},{toastId:"switchNetwork"})),T.clearCachedProvider(),a(null))})),null===c||void 0===c||c.on("chainChanged",(function(e){O().includes(parseInt(e))?(f.b.dark("Network changed, reloading",Object(y.a)(Object(y.a)({},g),{},{toastId:"changedNetwork"})),window.location.reload()):(f.b.dark("Switch to a supported network",Object(y.a)(Object(y.a)({},g),{},{toastId:"switchNetwork"})),T.clearCachedProvider(),window.location.reload())})),null===c||void 0===c||c.on("accountsChanged",(function(e){0===e.length?(f.b.dark("Account disconnected",Object(y.a)({toastId:"disconnected"},g)),a(null),T.clearCachedProvider(),window.location.reload()):(f.b.dark("Account Changed, reloading...",Object(y.a)({toastId:"disconnected"},g)),window.location.reload())})),null===c||void 0===c||c.on("disconnect",(function(e){f.b.error("Disconnected from wallet",Object(y.a)(Object(y.a)({},g),{},{toastId:"Disconnected"}))})),function(){null===c||void 0===c||c.removeAllListeners()}}),[c]),Object(i.useEffect)((function(){if(c){var e=new m.a.providers.Web3Provider(c);a(e)}}),[c]),{userSupplied:n,connect:S}}().userSupplied,r=function(e){var t=Object(i.useState)(null),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(i.useEffect)((function(){if(e)r(null);else if(!a){var t=Object(u.getDefaultProvider)(parseInt("4",10),{alchemy:"bjrgvDbGZBUJ_iZFFd1vIqUWzgrwKWeg",etherscan:"G61W8715WK65NCMJPFXU8EBQ5VDTT4KCVJ",infura:"800746c8737e4f34bb772ade4532ab83"});r(t)}}),[a,e]),a}(!!a),s="Not connected",c=Object(i.useState)({name:s,account:!1,chainId:null,provider:null,signerOrProvider:null}),o=Object(l.a)(c,2),d=o[0],p=o[1];return Object(i.useEffect)((function(){(null===a||void 0===a?void 0:a.provider)&&O().includes(parseInt(null===a||void 0===a?void 0:a.provider.chainId))?p({name:"Injected provider",account:a.provider.selectedAddress,chainId:parseInt(a.provider.chainId),provider:a,signerOrProvider:a.getSigner()}):p(r?{name:"Fallback provider",account:null,chainId:r.network.chainId,provider:r,signerOrProvider:r}:{name:s,account:!1,chainId:null,provider:null,signerOrProvider:null})}),[a,r]),Object(k.jsx)(e,{value:d,children:n})}}(),C=function(){return Object(i.useContext)(a)},M=n(63),E=n(101),I=n(294),A=n(295),P=n(296),R=n(21),V=function(e,t){var n=C(),a=n.account,r=n.provider,s=Object(i.useState)(R.a.from(0)),c=Object(l.a)(s,2),o=c[0],u=c[1],d=Object(i.useState)(R.a.from(0)),p=Object(l.a)(d,2),b=p[0],y=p[1];return Object(i.useEffect)((function(){r&&(null===e||void 0===e||e.totalSupply().then((function(e){u(e)})).catch((function(e){return console.error("Error total supply",e)})))}),[r,e,t]),Object(i.useEffect)((function(){r&&t&&a&&(null===e||void 0===e||e.balanceOf(a).then((function(e){y(e)})).catch((function(e){return console.error("Error balance",e)})))}),[r,e,t,a]),{totalSupply:o,vrBalance:b}},_=n(103),B=n.n(_),F=function(e,t,n){var a=C().account,r=Object(i.useState)(R.a.from(0)),s=Object(l.a)(r,2),c=s[0],o=s[1];return Object(i.useEffect)((function(){a&&e&&t&&t.allowance(a,e.address).then((function(e){o(e)})).catch((function(e){return console.error(e)}))}),[a,e,t,n]),c},D=function(){(r=Object(i.createContext)()).displayName="Data Provider";var e=r.Provider;return function(t){var n=t.children,a=function(){var e=C(),t=e.chainId,n=e.signerOrProvider,a=x(t),r=Object(i.useState)(),s=Object(l.a)(r,2),c=s[0],o=s[1];return Object(i.useEffect)((function(){if(t&&a&&n)try{var e=new E.a(a.sarcophagusToken,I,n);o(e)}catch(r){console.error("Token Contract: ",r)}}),[t,n,a]),c}(),r=function(){var e=C(),t=e.chainId,n=e.signerOrProvider,a=x(t),r=Object(i.useState)(),s=Object(l.a)(r,2),c=s[0],o=s[1];return Object(i.useEffect)((function(){if(t&&a&&n)try{var e=new E.a(a.SarcoStakingProxy,A,n);o(e)}catch(r){console.error("Staking Contract: ",r)}}),[t,n,a]),c}(),s=function(){var e=C(),t=e.chainId,n=e.signerOrProvider,a=x(t),r=Object(i.useState)(),s=Object(l.a)(r,2),c=s[0],o=s[1];return Object(i.useEffect)((function(){if(t&&a&&n)try{var e=new E.a(a.SarcoVotingRightsProxy,P,n);o(e)}catch(r){console.error("Voting Rights Contract: ",r)}}),[t,n,a]),c}(),c=function(){var e=Object(i.useState)(0),t=Object(l.a)(e,2),n=t[0],a=t[1],r=C().provider;return Object(i.useEffect)((function(){if(r){r.getBlockNumber().then((function(e){a(e)})).catch(console.error);var e=function(e){a(e)};return r.on("block",e),function(){r.removeListener("block",e)}}}),[r]),n}(),o=function(e,t){var n=C().account,a=Object(i.useState)(R.a.from(0)),r=Object(l.a)(a,2),s=r[0],c=r[1];return Object(i.useEffect)((function(){n&&e&&e.balanceOf(n).then((function(e){c(e)})).catch(console.error)}),[n,e,t]),s}(a,c),u=F(r,a,c),d=V(s,c),p=d.totalSupply,b=d.vrBalance,y={sarcophagusTokenContract:a,sarcophagusStakingContract:r,sarcophagusVotingRightsContract:s,balance:o,allowance:u,vrBalance:b,totalSupply:p,votingRights:function(e,t){if(null===e||void 0===e?void 0:e.isZero())return"0 %";var n=parseFloat(M.utils.formatEther(e)),a=parseFloat(M.utils.formatEther(t));return"".concat((n/a*100).toFixed(9)," %")}(b,p)};return Object(k.jsx)(e,{value:y,children:n})}}(),U=function(){return Object(i.useContext)(r)},J=n(57),H=n.n(J),W=function(e){var t=e.varient,n=e.addClassnames,a=e.label;return"heading-one"===t?Object(k.jsx)("div",{className:H()("text-xl text-white",n),children:a}):"heading-two"===t?Object(k.jsx)("div",{className:H()("text-gray-400 font-normal text-sm",n),children:a}):Object(k.jsx)("div",{className:H()("font-normal text-base text-white",n),children:a})},G=function(e){var t=e.addClassnames,n=e.children;return Object(k.jsx)("div",{className:H()("border-t border-b border-gray-500 w-full flex justify-around items-center flex-wrap gap-4","",t),children:n})},L=function(e){var t=e.children;return Object(k.jsx)("div",{className:"flex flex-col items-center whitespace-no-wrap w-48",children:t})},z=function(e){var t=e.children;return Object(k.jsx)("div",{className:"",children:t})},K=function(){var e=U(),t=e.vrBalance,n=e.totalSupply,a=e.votingRights;return Object(k.jsxs)(G,{addClassnames:"mt-6 py-8 flex",children:[Object(k.jsxs)(L,{children:[Object(k.jsx)(W,{varient:"heading-two",label:"Total Voting Rights"}),Object(k.jsxs)(z,{children:[M.utils.formatEther(n)," "]})]}),Object(k.jsxs)(L,{children:[Object(k.jsx)(W,{varient:"heading-two",label:"My Voting Rights"}),Object(k.jsxs)(z,{children:[M.utils.formatEther(t)," "]})]}),Object(k.jsxs)(L,{children:[Object(k.jsx)(W,{varient:"heading-two",label:"My Voting Power"}),Object(k.jsxs)(z,{children:[a," "]})]})]})},Z=function(e){var t=e.varient,n=e.children;return"with-border"===t?Object(k.jsx)("div",{className:H()("border-b border-l border-r w-full border-gray-500 py-16 px-8 mb-8 flex justify-around flex-wrap gap-12"),children:n}):Object(k.jsx)("div",{className:H()("pt-8"),children:n})},q=n.p+"static/media/logo.46d0239c.png",Q=function(e){var t=e.currency,n=e.value,a=e.setValue,r=e.balance,i=e.decimals,s=e.icon,c=e.balanceName,o=!(B()(M.utils.formatEther(r)).value()>0);return Object(k.jsxs)("div",{className:"flex mb-4 text-sm",children:[Object(k.jsxs)("div",{className:"mr-4 flex flex-col items-center w-10",children:[Object(k.jsx)("div",{className:"uppercase mb-2",children:t}),Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:s,alt:"icon",className:"w-8"})})]}),Object(k.jsxs)("div",{className:"w-full",children:[Object(k.jsx)("div",{className:"flex justify-between mb-2 text-gray-400",children:Object(k.jsxs)("div",{className:"flex flex-wrap justify-end w-full",children:[Object(k.jsxs)("div",{children:[c," Balance:"]}),Object(k.jsx)("div",{className:"ml-1",children:M.utils.formatEther(r)})]})}),Object(k.jsx)("input",{type:"number",step:function(e){return"0.".concat(Array(e).fill(0).join("")).slice(0,-1)+"1"}(i),disabled:o,required:!0,name:t,id:t,value:n,onChange:function(e){return function(t){var n="",a=t.target.value;a&&(n=Math.min(a,B()(M.utils.formatEther(r)).value())),e(n)}}(a),min:"1",max:M.utils.formatEther(r),className:"w-full border-2 border-gray-500 ".concat(o?"text-gray-400":"text-white"," bg-gray-900"),placeholder:M.utils.formatEther(r)})]})]})},X=n(299),Y=function(e){var t=e.children,n=e.icon,a=e.disabled,r=e.className,i=void 0===r?"":r,s=Object(X.a)(e,["children","icon","disabled","className"]);return Object(k.jsx)("button",Object(y.a)(Object(y.a)({},s),{},{disabled:a,className:"border-2 border-white p-2 min-w-full ".concat(a?"opacity-50 cursor-not-allowed":""," ").concat(i),children:Object(k.jsxs)("div",{className:"flex justify-center text-sm items-center",children:[Object(k.jsx)("div",{children:t}),n&&Object(k.jsx)("div",{className:"ml-3",children:Object(k.jsx)("img",{src:n,alt:"icon"})})]})}))},$=n(77),ee=function(e){var t=C().account,n=U(),a=n.balance,r=n.allowance,s=n.sarcophagusTokenContract,c=n.sarcophagusStakingContract,o=Object(i.useState)(0),u=Object(l.a)(o,2),d=u[0],p=u[1],b=Object(i.useState)(R.a.from(0)),y=Object(l.a)(b,2),m=y[0],j=y[1],v=Object(i.useState)(e),h=Object(l.a)(v,2),O=h[0],x=h[1],g=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return{contractCall:Object(i.useCallback)((function(e,t,n,r,i,s,c){var o;a(!0),e.apply(void 0,Object($.a)(t)).then((function(e){return o=f.b.info(n,{autoClose:!1,closeOnClick:!1,draggable:!1}),Promise.all([e.wait(),o])})).then((function(e){var t=Object(l.a)(e,2),n=t[0],o=t[1];a(!1),f.b.dismiss(o),0===n.status?f.b.error(r):1===n.status?(f.b.success(i),s&&s()):f.b.error("Not sure what happened with that transaction"),c&&c()})).catch((function(e){console.error(e),a(!1),f.b.dismiss(o),f.b.error("There was an error! Check your browser's console logs for more details.")}))}),[]),pending:n}}(),w=g.contractCall,T=g.pending,S=Object(i.useState)([]),k=Object(l.a)(S,2),N=k[0],E=k[1],I=Object(i.useState)(!1),A=Object(l.a)(I,2),P=A[0],V=A[1];Object(i.useEffect)((function(){V(!T&&m.gt(0))}),[T,m]),Object(i.useEffect)((function(){p(0)}),[t]),Object(i.useEffect)((function(){j(M.utils.parseUnits((d||0).toFixed(18),18))}),[d]),Object(i.useEffect)((function(){r.lt(m)?(x("Approve SARCO"),s&&E([s.approve,[null===c||void 0===c?void 0:c.address,R.a.from(2).pow(R.a.from(256)).sub(R.a.from(1))],"Approving SARCO...","SARCO approval failed!","SARCO approval made!"])):(x("Stake"===e?"Increase Voting Rights":"Decrease Voting Rights"),c&&E("Stake"===e?[c.stake,[m,{}],"Staking SARCO...","Staking failed!","Staking made!",function(){p(0),E([])}]:[c.unstake,[m,{}],"Unstaking SARCO...","Unstaking failed!","Unstaking made!",function(){p(0),E([])}]))}),[r,m,c,s,e,t]);return{balance:a,buttonText:O,buttonEnabled:P,calls:function(e){e.preventDefault(),w.apply(void 0,Object($.a)(N))},sarco:d,setSarco:p}},te=function(){var e=ee("Stake"),t=e.balance,n=e.buttonText,a=e.buttonEnabled,r=e.calls,i=e.sarco,s=e.setSarco;return Object(k.jsxs)("form",{onSubmit:r,className:"w-72",children:[Object(k.jsx)("div",{className:"mt-2 flex flex-col",children:Object(k.jsx)(Q,{currency:"sarco",balanceName:"SARCO",value:i,setValue:s,balance:t,decimals:18,icon:q})}),Object(k.jsx)("div",{className:"text-sm text-gray-400",children:"Stake SARCO to increase your Voting Rights balance"}),Object(k.jsx)("div",{className:"mt-4",children:Object(k.jsx)(Y,{type:"submit",disabled:!a,children:n})})]})},ne=function(){var e=ee("Unstake"),t=e.buttonText,n=e.buttonEnabled,a=e.calls,r=e.sarco,i=e.setSarco,s=U().vrBalance;return Object(k.jsxs)("form",{onSubmit:a,className:"w-72",children:[Object(k.jsx)("div",{className:"mt-2 flex flex-col",children:Object(k.jsx)(Q,{currency:"sarco",balanceName:"VR",value:r,setValue:i,balance:s,decimals:18,icon:q})}),Object(k.jsx)("div",{className:"text-sm text-gray-400",children:"Unstake SARCO to decrease your Voting Rights balance"}),Object(k.jsx)("div",{className:"mt-4",children:Object(k.jsx)(Y,{type:"submit",disabled:!n,children:t})})]})},ae=function(){return Object(k.jsxs)(Z,{varient:"with-border",children:[Object(k.jsx)(te,{}),Object(k.jsx)(ne,{})]})},re=function(e){var t=e.type,n=e.address,a=C().chainId,r=4===parseInt(a,10)?"rinkeby.":"",i="https://".concat(r,"etherscan.io/address/").concat(n);return Object(k.jsxs)("a",{href:i,target:"_blank",rel:"noreferrer noopener",children:["View ",t," Contract on Etherscan"]})},ie=function(){var e=C().chainId,t=x(e);return Object(k.jsxs)("div",{className:"flex-grow text-center",children:[Object(k.jsx)(W,{varient:"heading-one",label:"Sarcophagus Governance"}),Object(k.jsxs)("div",{className:"flex justify-center",children:[Object(k.jsx)("div",{className:"mt-2 underline text-gray-400 text-sm mr-2",children:Object(k.jsx)(re,{type:"Staking",address:null===t||void 0===t?void 0:t.SarcoStakingProxy})}),Object(k.jsx)("div",{className:"mt-1",children:"/"}),Object(k.jsx)("div",{className:"mt-2 underline text-gray-400 text-sm ml-2",children:Object(k.jsx)(re,{type:"Voting Rights",address:null===t||void 0===t?void 0:t.SarcoVotingRightsProxy})})]}),Object(k.jsx)(K,{}),Object(k.jsx)(ae,{})]})},se=n(297),ce=function(){var e=C().name;return Object(k.jsx)("div",{className:"text-gray-400 text-xs my-4",children:Object(k.jsxs)("div",{className:"flex justify-between pb-6",children:[Object(k.jsxs)("div",{children:["v",se.version+"+9125dd1"]}),Object(k.jsx)("div",{children:e})]})})},oe=function(e,t,n,a){if(e.length<=t)return e;var r=t-(n=n||"...").length,i=Math.ceil(a||r/2+1),s=Math.floor(r/2-1);return e.substr(0,i)+n+e.substr(e.length-s)},le=n.p+"static/media/icon.081a5d9a.svg",ue=function(){var e=C().account;return e?Object(k.jsxs)("div",{className:"flex justify-center items-center w-full",children:[oe(e,19,"...",7),Object(k.jsx)("img",{src:le,alt:"",className:"ml-6"})]}):Object(k.jsx)("button",{className:"underline text-center w-full",onClick:function(){return S()},children:"Connect Web3 Account"})},de=n.p+"static/media/wallet.7d4fae45.svg",pe=function(){return Object(k.jsxs)("div",{className:"flex items-center justify-between pt-2 mb-16",children:[Object(k.jsx)("div",{className:"w-24 p-1",children:Object(k.jsx)("img",{src:q,alt:"logo"})}),Object(k.jsxs)("div",{className:"flex items-center justify-center",children:[Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:de,alt:"wallet",className:""})}),Object(k.jsx)("div",{className:"ml-3 text-sm text-gray-300 ",children:Object(k.jsx)(ue,{})})]})]})},be=function(e){var t=e.children;return Object(k.jsx)("div",{className:"container min-h-screen flex flex-col justify-between",children:t})},ye=function(){return Object(k.jsxs)(be,{children:[Object(k.jsx)(pe,{}),Object(k.jsx)(ie,{}),Object(k.jsx)(ce,{})]})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,634)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};o.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(N,{children:Object(k.jsxs)(D,{children:[Object(k.jsx)(ye,{}),Object(k.jsx)(f.a,{closeButton:!1})]})})}),document.getElementById("root")),me()}},[[624,1,2]]]);
//# sourceMappingURL=main.c15ca325.chunk.js.map