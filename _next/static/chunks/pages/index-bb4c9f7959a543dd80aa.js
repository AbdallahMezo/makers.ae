_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},"1g0G":function(e,t,r){"use strict";r.d(t,"a",(function(){return z}));var n=r("rePB"),o=r("nKUr"),a=r("pVnL"),i=r.n(a),c=r("8OQS"),s=r.n(c),l=r("cOp2"),d=r.n(l),b=r("q1tI"),u=r("CjxU"),p=r("mf32"),j=r("qKvR"),h=r("BMxC");function f(){var e=d()(["\n  animation: "," ","s;\n"]);return f=function(){return e},e}function g(){var e=d()(["\nfrom { opacity: 0; }\nto   { opacity: 1; }\n"]);return g=function(){return e},e}function m(){var e=d()(["\n  border-color: "," !important;\n  box-shadow: none !important;\n  opacity: 0.7;\n  // do not !important this for Firefox support\n  background: ",";\n\n  // Prevent background color from extending to the border and overlappping\n  background-clip: padding-box !important;\n  cursor: default;\n\n  // Transparent text will occupy space but be invisible to the user\n  color: transparent !important;\n  animation: ","s linear infinite alternate\n    ",";\n  pointer-events: none;\n  user-select: none;\n\n  // Make pseudo-elements (CSS icons) and children invisible\n  &::before,\n  &::after,\n  * {\n    visibility: hidden !important;\n  }\n"]);return m=function(){return e},e}function x(){var e=d()(["\nfrom {\n  border-color: ",";\n  background: ",";\n}\n\nto {\n  border-color: ",";\n  background: ",";\n}\n"]);return x=function(){return e},e}var O=function(e){var t=e.colorStart,r=e.colorEnd,n=e.speed;return Object(j.c)(m(),t,t,n,function(e,t){return Object(j.e)(x(),e,e,t,t)}(t,r))},y=Object(j.e)(g()),v=function(e){var t=Object(u.b)().colors,r=Object(p.a)().colorMode,n={light:t.gray[100],dark:t.gray[800]},o={light:t.gray[400],dark:t.gray[600]},a=e.colorStart,c=void 0===a?n[r]:a,l=e.colorEnd,d=void 0===l?o[r]:l,g=e.isLoaded,m=void 0!==g&&g,x=e.fadeInDuration,v=void 0===x?.4:x,w=e.speed,k=void 0===w?.8:w,S=s()(e,["colorStart","colorEnd","isLoaded","fadeInDuration","speed"]),C=Object(b.useMemo)((function(){return e=v,Object(j.c)(f(),y,e);var e}),[v]),z=Object(b.useMemo)((function(){return O({colorStart:c,colorEnd:d,speed:k})}),[c,d,k]);return m?Object(j.d)(h.a,i()({css:C},S)):Object(j.d)(h.a,i()({css:z,borderRadius:"2px"},S))},w=r("bQFp"),k=r("UI0J"),S=r.n(k);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){var t=e.src,r=e.height,a=e.width,i=e.rounded,c=e.skeletonWidth,s=e.skeletonHeight;return Object(o.jsx)(S.a,{delay:500,src:t,placeholder:"/avatars/placeholder.png",children:function(t,l){return l?Object(o.jsx)(v,{rounded:i,height:s||r,width:c||a,d:"block"}):Object(o.jsx)(w.a,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})}},"23aj":function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return $})),r.d(t,"default",(function(){return ee}));var n=r("nKUr"),o=r("Th6I"),a=r("9ixD"),i=r("mIvz"),c=r("BMxC"),s=r("qWyU"),l=r("sK1y"),d=r("hoFu"),b=r("Weur"),u=r("eJLp"),p=r("q1tI"),j=r("YFqc"),h=r.n(j),f=r("pboS"),g=r("1g0G");function m(e){var t=e.company,r=e.designation,o=e.imageUrl,a=e.title;return Object(n.jsxs)(f.a,{bg:"gray.900",rounded:"10px",_hover:{bg:"gray.800"},children:[Object(n.jsx)(g.a,{objectFit:"cover",rounded:"10px 10px 0 0",skeletonHeight:"211.25px",minHeight:"211.25px",src:o,width:"100%"}),Object(n.jsxs)(c.a,{px:"10px",py:"15px",children:[Object(n.jsx)(s.a,{color:"gray.100",mb:"7px",fontSize:"18px",children:a}),Object(n.jsxs)(l.a,{color:"gray.500",fontSize:"14px",children:[r," @ ",Object(n.jsx)(l.a,{as:"span",color:"gray.100",children:t})]})]})]})}function x(e){var t=e.members,r=Object(p.useState)(!1),o=r[0],a=r[1];return Object(n.jsxs)(c.a,{children:[Object(n.jsxs)(d.a,{columns:[1,2,3,4],mt:"40px",gridGap:"15px",position:"relative",maxHeight:o?void 0:"750px",overflow:"hidden",className:"hover-grayscale",children:[t.map((function(e){return Object(n.jsx)(m,{username:e.username,title:e.title,designation:e.designation,company:e.company,imageUrl:e.imageUrl,joinDate:e.joinDate},e.username)})),!o&&Object(n.jsx)(c.a,{opacity:1,pointerEvents:"none",position:"absolute",bottom:0,height:"200px",width:"100%",background:"linear-gradient(180deg, transparent, black)"})]}),Object(n.jsxs)(b.a,{alignItems:"center",mt:o?"40px":"20px",justifyContent:"center",children:[Object(n.jsxs)(u.a,{onClick:function(){return a(!o)},bg:"yellow.400",rounded:"20px",px:"30px",boxShadow:"none",outline:"none",children:[!o&&Object(n.jsx)(n.Fragment,{children:"Show all \u2193"}),o&&Object(n.jsx)(n.Fragment,{children:"Show less \u2191"})]}),Object(n.jsx)(h.a,{href:"/join",children:Object(n.jsx)("a",{children:Object(n.jsx)(l.a,{as:"span",color:"gray.400",ml:"20px",children:"Become a member"})})})]})]})}var O=r("Yn+B");function y(e){var t=e.feature,r=e.children;return Object(n.jsxs)(b.a,{alignItems:"flex-start",mb:"10px",children:[Object(n.jsx)(l.a,{lineHeight:"22px",fontSize:"22px",color:"#FF4D6A",as:"span",children:"\u2713"}),Object(n.jsx)(l.a,{ml:"10px",color:"gray.400",children:t||r})]})}function v(e){var t=e.href,r=e.text;return Object(n.jsx)(h.a,{href:t,children:Object(n.jsx)("a",{children:Object(n.jsx)(l.a,{as:"span",fontWeight:600,color:"yellow.300",children:r})})})}function w(){return Object(n.jsxs)(d.a,{gridTemplateColumns:["1fr","1fr","1fr 400px","1fr 400px"],children:[Object(n.jsxs)(c.a,{mb:["20px","20px",0,0],children:[Object(n.jsx)(l.a,{lineHeight:"32px",mb:"20px",fontWeight:600,color:"gray.200",fontSize:"20px",children:"There are some really talented developers and designers in the region but unlike Europe or US, the community isn't really strong here in UAE. With makers.ae our aim is to bring all the makers of the region together under one umbrella and to facilitate growth."}),Object(n.jsx)(l.a,{lineHeight:"32px",fontWeight:600,color:"gray.200",fontSize:"20px",children:"The project is fully open-source, there is no fees or any hidden agendas. Goal is to empower the makers in the region."})]}),Object(n.jsxs)(O.a,{marginLeft:[0,0,"40px","40px"],children:[Object(n.jsxs)(y,{children:["Join ",Object(n.jsx)(f.a,{color:"yellow.300",_focus:{outline:"none",boxShadow:"none",textDecoration:"none"},fontWeight:600,href:"https://discord.gg/GQjdb3HEJ5",target:"_blank",children:"our discord"})," to get connected with other makers in the region"]}),Object(n.jsx)(y,{feature:"Bi-weekly sessions on interesting topics."}),Object(n.jsx)(y,{feature:"Learn about the tech stack and how the companies in the region are working."}),Object(n.jsx)(y,{feature:"Find yourself a mentor, ask for advice.."}),Object(n.jsx)(y,{feature:"Interviews with the tech leaders."}),Object(n.jsxs)(y,{children:["Subscribe to our ",Object(n.jsx)(v,{href:"/join",text:"weekly newsletter"})," and stay upto date with the tech updates about the region."]})]})]})}function k(){return Object(n.jsxs)(b.a,{flexDirection:["column","column","row","row"],bg:"gray.800",rounded:"7px",p:"20px",alignItems:["flex-start","flex-start","center","center"],justifyContent:"space-between",children:[Object(n.jsxs)(c.a,{children:[Object(n.jsx)(s.a,{fontSize:"27px",mb:"8px",color:"white",children:"Get an invite"}),Object(n.jsx)(l.a,{color:"gray.400",children:"Submit your details and we will send you the invite shortly."})]}),Object(n.jsx)(c.a,{mt:["15px","15px",0,0],children:Object(n.jsx)(h.a,{href:"/join",children:Object(n.jsx)("a",{children:Object(n.jsx)(l.a,{px:"20px",bg:"yellow.400",borderRadius:"20px",as:u.a,children:"Join the Community"})})})})]})}function S(e){var t=e.title,r=e.description;return Object(n.jsxs)(c.a,{children:[Object(n.jsx)(s.a,{as:"h2",mb:"10px",fontSize:"24px",className:"purple-gradient-color",children:t}),Object(n.jsx)(l.a,{lineHeight:"27px",color:"white",children:r})]})}function C(){return Object(n.jsxs)(d.a,{columns:[1,1,2,2],mt:"50px",gridGap:["25px","25px","60px","60px"],children:[Object(n.jsx)(S,{title:"Who can join?",description:"The only requirement to join the community is to be a maker. You can either be a developer, a designer or a student."}),Object(n.jsx)(S,{title:"Do you organize meetups?",description:"Yes, we have bi-weekly meetups from the community members as well as external contributors on a variety of topics. All our sessions are done via Zoom call and are open for anyone to join."}),Object(n.jsx)(S,{title:"Can I give a talk?",description:"Yes! We are constantly looking for contributors, reach out to us via email or on Discord and let's make it happen."}),Object(n.jsx)(S,{title:"Do you have a Slack or Discord?",description:"Yes, once you register, we will send you an invite to our Discord community, where you can talk to other makers in the region."}),Object(n.jsx)(S,{title:"What's in the newsletter?",description:"We have a bi-weekly newsletter where we share general tech updates as well as updates from the region, job openings and upcoming events."}),Object(n.jsx)(S,{title:"Can I invite my friends?",description:"For sure. We aim to create the biggest online community of developers in the region so we would love for you to invite your friends and colleagues."}),Object(n.jsx)(S,{title:"How is this website built?",description:"The website is OpenSource, it is built with Next.js and is hosted on GitHub pages. Feel free to have a look at the code and send any contributions our way."}),Object(n.jsx)(S,{title:"Can I contribute to the project?",description:"Yes, apart from being a part of community events, spreading the word, and inviting your friends, you can also contribute to the code. We are open for anyone to suggest, discuss and contribute to the code."})]})}var z=r("pVnL"),E=r.n(z),D=r("8OQS"),P=r.n(D),I=r("qKvR"),N=r("lSNA"),_=r.n(N),W=r("CjxU"),F=r("mf32"),M=r("8hg0");function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var U={"2xs":4,xs:6,sm:8,md:12,lg:16,xl:24,"2xl":32,full:"full"},L=function(e){var t=e.size,r=e.name,n=e.showBorder,o=e.borderColor,a=Object(W.b)().colors,i=Object(F.a)().colorMode,c=r?function(e){var t=0;if(0===e.length)return t;for(var r=0;r<e.length;r++)t=e.charCodeAt(r)+((t<<5)-t),t&=t;for(var n="#",o=0;o<3;o++)n+=("00"+(t>>8*o&255).toString(16)).substr(-2);return n}(r):a.gray[400],s=r?Object(M.b)(c)?"#fff":"gray.800":"#fff";return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach((function(t){_()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},{display:"inline-flex",rounded:"full",alignItems:"center",flexShrink:"0",justifyContent:"center",position:"relative"},{size:U[t],bg:c,color:s},n&&{border:"2px",borderColor:o||{light:"#fff",dark:"gray.800"}[i]})},H=r("D7Da"),B=function(e){var t=e.size,r=e.label,n=P()(e,["size","label"]),o=Object(W.b)(),a=U[t],i="calc("+o.sizes[a]+" / 2.75)",c=Object(F.a)().colorMode;return Object(I.d)(b.a,E()({bg:{light:"gray.200",dark:"whiteAlpha.400"}[c],color:"inherit",rounded:"full",alignItems:"center",justifyContent:"center",border:"2px",borderColor:{light:"#fff",dark:"gray.800"}[c],size:U[t],fontSize:i},n),r)},T=function(e){var t=e.size,r=e.children,n=e.borderColor,o=e.max,a=e.spacing,i=void 0===a?-3:a,c=P()(e,["size","children","borderColor","max","spacing"]),s=Object(H.a)(r),l=s.length,d=s.map((function(e,r){if(o&&r>o)return null;if(null==o||o&&r<o){var a=0===r;return Object(p.cloneElement)(e,{ml:a?0:i,size:t,borderColor:n||e.props.borderColor,showBorder:!0,zIndex:l-r})}return o&&r===o?Object(I.d)(B,{key:r,size:t,ml:i,label:"+"+(l-o)}):void 0}));return Object(I.d)(b.a,E()({alignItems:"center"},c),d)},q=r("bQFp"),R=function(e){var t=e.name,r=P()(e,["name"]);return Object(I.d)(c.a,E()({textAlign:"center",textTransform:"uppercase",fontWeight:"medium","aria-label":t},r),t?function(e){var t=e.split(" "),r=t[0],n=t[1];return r&&n?""+r.charAt(0)+n.charAt(0):r.charAt(0)}(t):null)},G=function(e){return Object(I.d)(c.a,E()({size:"100%"},e),Object(I.d)("svg",{fill:"#fff",viewBox:"0 0 128 128",role:"img"},Object(I.d)("g",null,Object(I.d)("path",{d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),Object(I.d)("path",{d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))))},J=function(e){var t=e.size,r=e.showBorder,n=e.name,o=e.src,a=e.borderColor,i=e.children,s=P()(e,["size","showBorder","name","src","borderColor","children"]),l=L({name:n,size:t,showBorder:r,borderColor:a}),d=Object(q.b)({src:o}),b=Object(W.b)(),u=U[t],p=b.sizes[u],j="calc("+p+" / 2.5)";return Object(I.d)(c.a,E()({fontSize:j,lineHeight:p,verticalAlign:"top"},l,s),o&&d?Object(I.d)(c.a,{as:"img",size:"100%",rounded:"full",objectFit:"cover",src:o,alt:n}):o&&!d?n?Object(I.d)(R,{size:p,name:n}):Object(I.d)(G,{"aria-label":n}):!o&&n?Object(I.d)(R,{size:p,name:n}):Object(I.d)(G,{"aria-label":n}),i)};J.defaultProps={size:"md"};var Q=J;function K(){return Object(n.jsxs)(T,{max:20,d:["none","none","flex","flex"],children:[Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Adnan",src:"/avatars/adnan.jpeg"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Zeeshan",src:"/avatars/zeeshan.jpeg"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Meabed",src:"/avatars/meabed.png"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Ahmed",src:"/avatars/ahmed.png"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Mustafa",src:"/avatars/mustafa.jpeg"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Hany",src:"/avatars/hany.jpeg"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Amad",src:"/avatars/amad.jpeg"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Abdallah",src:"/avatars/abdallah.jpeg"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Maradona",src:"/avatars/maradona.jpeg"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Segun",src:"/avatars/segun.jpeg"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Pavlo",src:"/avatars/pavlo.jpeg"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Furqan",src:"/avatars/furqan.jpeg"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Umar",src:"/avatars/umar.jpg"}),Object(n.jsx)(Q,{className:"avatar-badge",width:"35px",height:"35px",borderColor:"black",name:"Pranjal",src:"/avatars/pranjal.jpeg"})]})}function Y(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a,{children:Object(n.jsxs)(s.a,{lineHeight:"48px",color:"gray.500",children:[Object(n.jsx)(l.a,{as:"span",className:"yellow-gradient-color",children:"Makers"})," is the community of ",Object(n.jsx)(l.a,{as:"span",className:"purple-gradient-color",children:"developers"}),", ",Object(n.jsx)(l.a,{className:"red-gradient-color",as:"span",children:"designers"})," and ",Object(n.jsx)(l.a,{className:"blue-gradient-color",as:"span",children:"tech firms"}),Object(n.jsx)(l.a,{as:"span",d:["none","none","inline","inline"],children:" focusing on open-source, practical knowledge, tech culture, career growth"}),"."]})}),Object(n.jsxs)(b.a,{justifyContent:"space-between",alignItems:"center",mt:"30px",children:[Object(n.jsxs)(b.a,{alignItems:"center",children:[Object(n.jsx)(g.a,{rounded:"100%",height:"48px",width:"48px",src:"/avatars/kamran.jpeg"}),Object(n.jsxs)(l.a,{ml:"15px",as:"span",color:"gray.500",children:["Run by\xa0",Object(n.jsx)(f.a,{_focus:{outline:"none",boxShadow:"none"},target:"_blank",color:"gray.300",fontWeight:700,href:i.a.author.twitter,children:"Kamran"})]})]}),Object(n.jsx)(K,{})]})]})}var V=r("jm+W"),Z=r("WjUB");function X(e){var t=e.members;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(V.a,{}),Object(n.jsx)(Y,{}),Object(n.jsxs)(c.a,{pt:"90px",id:"community-members",children:[Object(n.jsx)(s.a,{mb:"7px",className:"yellow-gradient-color",color:"gray.100",children:"Members"}),Object(n.jsx)(l.a,{color:"gray.400",children:"Get connected with a diverse group of members, working at known firms in UAE."}),Object(n.jsx)(x,{members:t})]}),Object(n.jsxs)(c.a,{pt:"90px",children:[Object(n.jsx)(s.a,{mb:"15px",className:"yellow-gradient-color",color:"gray.100",children:"Why should you Join"}),Object(n.jsx)(w,{}),Object(n.jsx)(c.a,{mt:"30px",children:Object(n.jsx)(k,{})})]}),Object(n.jsxs)(c.a,{pt:"90px",id:"faqs",children:[Object(n.jsx)(s.a,{mb:"7px",className:"yellow-gradient-color",color:"gray.100",children:"FAQs"}),Object(n.jsx)(l.a,{color:"gray.400",children:"Feel free to reach out if there is something we haven't answered"}),Object(n.jsx)(C,{})]}),Object(n.jsx)(Z.a,{})]})}var $=!0;function ee(e){var t=e.members;return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(a.b,{title:"Makers.ae \u2014 Community of makers in UAE",description:"Makers.ae aims to build a community of developers in UAE.",titleTemplate:i.a.seo.titleTemplate}),Object(n.jsx)(c.a,{maxW:"890px",mx:"auto",children:Object(n.jsx)(X,{members:t})})]})}},UI0J:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){function t(e){var r,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,i=a(t).call(this,e),r=!i||"object"!==n(i)&&"function"!==typeof i?c(o):i,s(c(c(r)),"image",void 0),s(c(c(r)),"loadImage",(function(e,t){r.image&&(r.image.onload=null,r.image.onerror=null);var n=new Image;r.image=n,n.onload=r.onLoad,n.onerror=r.onError,n.src=e,t&&(n.srcset=t.srcSet,n.sizes=t.sizes)})),s(c(c(r)),"onLoad",(function(){r.props.delay?r.setImageWithDelay():r.setImage()})),s(c(c(r)),"setImageWithDelay",(function(){setTimeout((function(){r.setImage()}),r.props.delay)})),s(c(c(r)),"setImage",(function(){r.setState({image:r.image.src,loading:!1,srcSetData:{srcSet:r.image.srcset||"",sizes:r.image.sizes||""}})})),s(c(c(r)),"onError",(function(e){var t=r.props.onError;t&&t(e)})),r.state={image:e.placeholder,loading:!0,srcSetData:{srcSet:"",sizes:""}},r}var r,l,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,e),r=t,(l=[{key:"componentDidMount",value:function(){var e=this.props,t=e.src,r=e.srcSetData;this.loadImage(t,r)}},{key:"componentDidUpdate",value:function(e){var t=this,r=this.props,n=r.src,o=r.placeholder,a=r.srcSetData;n!==e.src&&this.setState({image:o,loading:!0},(function(){t.loadImage(n,a)}))}},{key:"componentWillUnmount",value:function(){this.image&&(this.image.onload=null,this.image.onerror=null)}},{key:"render",value:function(){var e=this.state,t=e.image,r=e.loading,n=e.srcSetData,o=this.props.children;if(!o||"function"!==typeof o)throw new Error("ProgressiveImage requires a function as its only child");return o(t,r,n)}}])&&o(r.prototype,l),d&&o(r,d),t}(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("q1tI")).Component);t.default=l},bQFp:function(e,t,r){"use strict";r.d(t,"b",(function(){return d}));var n=r("pVnL"),o=r.n(n),a=r("8OQS"),i=r.n(a),c=r("qKvR"),s=r("q1tI"),l=r("BMxC");function d(e){var t=e.src,r=e.onLoad,n=e.onError,o=e.enabled,a=void 0===o||o,i=Object(s.useRef)(!0),c=Object(s.useState)(!1),l=c[0],d=c[1];return Object(s.useEffect)((function(){if(t&&a){var e=new window.Image;e.src=t,e.onload=function(e){i.current&&(d(!0),r&&r(e))},e.onerror=function(e){i.current&&(d(!1),n&&n(e))}}}),[t,r,n,a]),Object(s.useEffect)((function(){return function(){i.current=!1}}),[]),l}var b=Object(s.forwardRef)((function(e,t){var r=e.htmlWidth,n=e.htmlHeight,a=e.alt,s=i()(e,["htmlWidth","htmlHeight","alt"]);return Object(c.d)("img",o()({width:r,height:n,ref:t,alt:a},s))})),u=Object(s.forwardRef)((function(e,t){var r=e.src,n=e.fallbackSrc,a=e.onError,s=e.onLoad,u=e.ignoreFallback,p=i()(e,["src","fallbackSrc","onError","onLoad","ignoreFallback"]),j=d({src:r,onLoad:s,onError:a,enabled:!Boolean(u)}),h=u?{src:r,onLoad:s,onError:a}:{src:j?r:n};return Object(c.d)(l.a,o()({as:b,ref:t},h,p))}));u.displayName="Image",t.a=u}},[["/EDR",1,2,0,3,4]]]);