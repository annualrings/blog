!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipe=t()}(this,function(){"use strict";return function(m,i,e,t){var f={features:null,bind:function(e,t,n,i){var o=(i?"remove":"add")+"EventListener";t=t.split(" ");for(var a=0;a<t.length;a++)t[a]&&e[o](t[a],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){var n=document.createElement(t||"div");return e&&(n.className=e),n},getScrollY:function(){var e=window.pageYOffset;return void 0!==e?e:document.documentElement.scrollTop},unbind:function(e,t,n){f.bind(e,t,n,!0)},removeClass:function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){f.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(f.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var i=e.length;i--;)if(e[i][n]===t)return i;return-1},extend:function(e,t,n){for(var i in t)if(t.hasOwnProperty(i)){if(n&&e.hasOwnProperty(i))continue;e[i]=t[i]}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(f.features)return f.features;var e=f.createEl().style,t="",n={};if(n.oldIE=document.all&&!document.addEventListener,n.touch="ontouchstart"in window,window.requestAnimationFrame&&(n.raf=window.requestAnimationFrame,n.caf=window.cancelAnimationFrame),n.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!n.pointerEvent){var i=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var o=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);o&&0<o.length&&1<=(o=parseInt(o[1],10))&&o<8&&(n.isOldIOSPhone=!0)}var a=i.match(/Android\s([0-9\.]*)/),r=a?a[1]:0;1<=(r=parseFloat(r))&&(r<4.4&&(n.isOldAndroid=!0),n.androidVersion=r),n.isMobileOpera=/opera mini|opera mobi/i.test(i)}for(var l,s,u=["transform","perspective","animationName"],c=["","webkit","Moz","ms","O"],d=0;d<4;d++){t=c[d];for(var p=0;p<3;p++)l=u[p],s=t+(t?l.charAt(0).toUpperCase()+l.slice(1):l),!n[l]&&s in e&&(n[l]=s);t&&!n.raf&&(t=t.toLowerCase(),n.raf=window[t+"RequestAnimationFrame"],n.raf&&(n.caf=window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"]))}if(!n.raf){var m=0;n.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-m)),i=window.setTimeout(function(){e(t+n)},n);return m=t+n,i},n.caf=function(e){clearTimeout(e)}}return n.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,f.features=n}};f.detectFeatures(),f.features.oldIE&&(f.bind=function(e,t,n,i){t=t.split(" ");for(var o,a=(i?"detach":"attach")+"Event",r=function(){n.handleEvent.call(n)},l=0;l<t.length;l++)if(o=t[l])if("object"==typeof n&&n.handleEvent){if(i){if(!n["oldIE"+o])return!1}else n["oldIE"+o]=r;e[a]("on"+o,n["oldIE"+o])}else e[a]("on"+o,n)});var h=this,y={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return"A"===e.tagName},getDoubleTapZoom:function(e,t){return e?1:t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};f.extend(y,t);var s,o,a,x,r,l,u,c,d,v,p,g,w,b,I,C,D,T,M,S,A,E,O,k,R,Z,P,F,L,z,_,N,U,H,Y,W,B,G,X,V,K,q,n,$,j,J,Q,ee,te,ne,ie,oe,ae,re,le,se,ue={x:0,y:0},ce={x:0,y:0},de={x:0,y:0},pe={},me=0,fe={},he={x:0,y:0},ye=0,xe=!0,ve=[],ge={},we=!1,be=function(e,t){f.extend(h,t.publicMethods),ve.push(e)},Ie=function(e){var t=Ht();return t-1<e?e-t:e<0?t+e:e},Ce={},De=function(e,t){return Ce[e]||(Ce[e]=[]),Ce[e].push(t)},Te=function(e){var t=Ce[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var i=0;i<t.length;i++)t[i].apply(h,n)}},Me=function(){return(new Date).getTime()},Se=function(e){re=e,h.bg.style.opacity=e*y.bgOpacity},Ae=function(e,t,n,i,o){(!we||o&&o!==h.currItem)&&(i/=o?o.fitRatio:h.currItem.fitRatio),e[E]=g+t+"px, "+n+"px"+w+" scale("+i+")"},Ee=function(e){te&&(e&&(v>h.currItem.fitRatio?we||($t(h.currItem,!1,!0),we=!0):we&&($t(h.currItem),we=!1)),Ae(te,de.x,de.y,v))},Oe=function(e){e.container&&Ae(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},ke=function(e,t){t[E]=g+e+"px, 0px"+w},Re=function(e,t){if(!y.loop&&t){var n=x+(he.x*me-e)/he.x,i=Math.round(e-ct.x);(n<0&&0<i||n>=Ht()-1&&i<0)&&(e=ct.x+i*y.mainScrollEndFriction)}ct.x=e,ke(e,r)},Ze=function(e,t){var n=dt[e]-fe[e];return ce[e]+ue[e]+n-n*(t/p)},Pe=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},Fe=function(e){e.x=Math.round(e.x),e.y=Math.round(e.y)},Le=null,ze=function(){Le&&(f.unbind(document,"mousemove",ze),f.addClass(m,"pswp--has_mouse"),y.mouseUsed=!0,Te("mouseUsed")),Le=setTimeout(function(){Le=null},100)},_e=function(e,t){var n=Xt(h.currItem,pe,e);return t&&(ee=n),n},Ne=function(e){return e||(e=h.currItem),e.initialZoomLevel},Ue=function(e){return e||(e=h.currItem),0<e.w?y.maxSpreadZoom:1},He=function(e,t,n,i){return i===h.currItem.initialZoomLevel?(n[e]=h.currItem.initialPosition[e],!0):(n[e]=Ze(e,i),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]&&(n[e]=t.max[e],!0))},Ye=function(e){var t="";y.escKey&&27===e.keyCode?t="close":y.arrowKeys&&(37===e.keyCode?t="prev":39===e.keyCode&&(t="next")),t&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,h[t]()))},We=function(e){e&&(q||K||ne||B)&&(e.preventDefault(),e.stopPropagation())},Be=function(){h.setScrollOffset(0,f.getScrollY())},Ge={},Xe=0,Ve=function(e){Ge[e]&&(Ge[e].raf&&Z(Ge[e].raf),Xe--,delete Ge[e])},Ke=function(e){Ge[e]&&Ve(e),Ge[e]||(Xe++,Ge[e]={})},qe=function(){for(var e in Ge)Ge.hasOwnProperty(e)&&Ve(e)},$e=function(e,t,n,i,o,a,r){var l,s=Me();Ke(e);var u=function(){if(Ge[e]){if(l=Me()-s,i<=l)return Ve(e),a(n),void(r&&r());a((n-t)*o(l/i)+t),Ge[e].raf=R(u)}};u()},je={shout:Te,listen:De,viewportSize:pe,options:y,isMainScrollAnimating:function(){return ne},getZoomLevel:function(){return v},getCurrentIndex:function(){return x},isDragging:function(){return X},isZooming:function(){return J},setScrollOffset:function(e,t){fe.x=e,z=fe.y=t,Te("updateScrollOffset",fe)},applyZoomPan:function(e,t,n,i){de.x=t,de.y=n,v=e,Ee(i)},init:function(){if(!s&&!o){var e;h.framework=f,h.template=m,h.bg=f.getChildByClass(m,"pswp__bg"),P=m.className,s=!0,_=f.detectFeatures(),R=_.raf,Z=_.caf,E=_.transform,L=_.oldIE,h.scrollWrap=f.getChildByClass(m,"pswp__scroll-wrap"),h.container=f.getChildByClass(h.scrollWrap,"pswp__container"),r=h.container.style,h.itemHolders=C=[{el:h.container.children[0],wrap:0,index:-1},{el:h.container.children[1],wrap:0,index:-1},{el:h.container.children[2],wrap:0,index:-1}],C[0].el.style.display=C[2].el.style.display="none",function(){if(E){var e=_.perspective&&!k;return g="translate"+(e?"3d(":"("),w=_.perspective?", 0px)":")"}E="left",f.addClass(m,"pswp--ie"),ke=function(e,t){t.left=e+"px"},Oe=function(e){var t=1<e.fitRatio?1:e.fitRatio,n=e.container.style,i=t*e.w,o=t*e.h;n.width=i+"px",n.height=o+"px",n.left=e.initialPosition.x+"px",n.top=e.initialPosition.y+"px"},Ee=function(){if(te){var e=te,t=h.currItem,n=1<t.fitRatio?1:t.fitRatio,i=n*t.w,o=n*t.h;e.width=i+"px",e.height=o+"px",e.left=de.x+"px",e.top=de.y+"px"}}}(),d={resize:h.updateSize,orientationchange:function(){clearTimeout(N),N=setTimeout(function(){pe.x!==h.scrollWrap.clientWidth&&h.updateSize()},500)},scroll:Be,keydown:Ye,click:We};var t=_.isOldIOSPhone||_.isOldAndroid||_.isMobileOpera;for(_.animationName&&_.transform&&!t||(y.showAnimationDuration=y.hideAnimationDuration=0),e=0;e<ve.length;e++)h["init"+ve[e]]();i&&(h.ui=new i(h,f)).init(),Te("firstUpdate"),x=x||y.index||0,(isNaN(x)||x<0||x>=Ht())&&(x=0),h.currItem=Ut(x),(_.isOldIOSPhone||_.isOldAndroid)&&(xe=!1),m.setAttribute("aria-hidden","false"),y.modal&&(xe?m.style.position="fixed":(m.style.position="absolute",m.style.top=f.getScrollY()+"px")),void 0===z&&(Te("initialLayout"),z=F=f.getScrollY());var n="pswp--open ";for(y.mainClass&&(n+=y.mainClass+" "),y.showHideOpacity&&(n+="pswp--animate_opacity "),n+=k?"pswp--touch":"pswp--notouch",n+=_.animationName?" pswp--css_animation":"",n+=_.svg?" pswp--svg":"",f.addClass(m,n),h.updateSize(),l=-1,ye=null,e=0;e<3;e++)ke((e+l)*he.x,C[e].el.style);L||f.bind(h.scrollWrap,c,h),De("initialZoomInEnd",function(){h.setContent(C[0],x-1),h.setContent(C[2],x+1),C[0].el.style.display=C[2].el.style.display="block",y.focus&&m.focus(),f.bind(document,"keydown",h),_.transform&&f.bind(h.scrollWrap,"click",h),y.mouseUsed||f.bind(document,"mousemove",ze),f.bind(window,"resize scroll orientationchange",h),Te("bindEvents")}),h.setContent(C[1],x),h.updateCurrItem(),Te("afterInit"),xe||(b=setInterval(function(){Xe||X||J||v!==h.currItem.initialZoomLevel||h.updateSize()},1e3)),f.addClass(m,"pswp--visible")}},close:function(){s&&(o=!(s=!1),Te("close"),f.unbind(window,"resize scroll orientationchange",h),f.unbind(window,"scroll",d.scroll),f.unbind(document,"keydown",h),f.unbind(document,"mousemove",ze),_.transform&&f.unbind(h.scrollWrap,"click",h),X&&f.unbind(window,u,h),clearTimeout(N),Te("unbindEvents"),Yt(h.currItem,null,!0,h.destroy))},destroy:function(){Te("destroy"),Lt&&clearTimeout(Lt),m.setAttribute("aria-hidden","true"),m.className=P,b&&clearInterval(b),f.unbind(h.scrollWrap,c,h),f.unbind(window,"scroll",h),ft(),qe(),Ce=null},panTo:function(e,t,n){n||(e>ee.min.x?e=ee.min.x:e<ee.max.x&&(e=ee.max.x),t>ee.min.y?t=ee.min.y:t<ee.max.y&&(t=ee.max.y)),de.x=e,de.y=t,Ee()},handleEvent:function(e){e=e||window.event,d[e.type]&&d[e.type](e)},goTo:function(e){var t=(e=Ie(e))-x;ye=t,x=e,h.currItem=Ut(x),me-=t,Re(he.x*me),qe(),ne=!1,h.updateCurrItem()},next:function(){h.goTo(x+1)},prev:function(){h.goTo(x-1)},updateCurrZoomItem:function(e){if(e&&Te("beforeChange",0),C[1].el.children.length){var t=C[1].el.children[0];te=f.hasClass(t,"pswp__zoom-wrap")?t.style:null}else te=null;ee=h.currItem.bounds,p=v=h.currItem.initialZoomLevel,de.x=ee.center.x,de.y=ee.center.y,e&&Te("afterChange")},invalidateCurrItems:function(){I=!0;for(var e=0;e<3;e++)C[e].item&&(C[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==ye){var t,n=Math.abs(ye);if(!(e&&n<2)){h.currItem=Ut(x),we=!1,Te("beforeChange",ye),3<=n&&(l+=ye+(0<ye?-3:3),n=3);for(var i=0;i<n;i++)0<ye?(t=C.shift(),C[2]=t,ke((++l+2)*he.x,t.el.style),h.setContent(t,x-n+i+1+1)):(t=C.pop(),C.unshift(t),ke(--l*he.x,t.el.style),h.setContent(t,x+n-i-1-1));if(te&&1===Math.abs(ye)){var o=Ut(D);o.initialZoomLevel!==v&&(Xt(o,pe),$t(o),Oe(o))}ye=0,h.updateCurrZoomItem(),D=x,Te("afterChange")}}},updateSize:function(e){if(!xe&&y.modal){var t=f.getScrollY();if(z!==t&&(m.style.top=t+"px",z=t),!e&&ge.x===window.innerWidth&&ge.y===window.innerHeight)return;ge.x=window.innerWidth,ge.y=window.innerHeight,m.style.height=ge.y+"px"}if(pe.x=h.scrollWrap.clientWidth,pe.y=h.scrollWrap.clientHeight,Be(),he.x=pe.x+Math.round(pe.x*y.spacing),he.y=pe.y,Re(he.x*me),Te("beforeResize"),void 0!==l){for(var n,i,o,a=0;a<3;a++)n=C[a],ke((a+l)*he.x,n.el.style),o=x+a-1,y.loop&&2<Ht()&&(o=Ie(o)),(i=Ut(o))&&(I||i.needsUpdate||!i.bounds)?(h.cleanSlide(i),h.setContent(n,o),1===a&&(h.currItem=i,h.updateCurrZoomItem(!0)),i.needsUpdate=!1):-1===n.index&&0<=o&&h.setContent(n,o),i&&i.container&&(Xt(i,pe),$t(i),Oe(i));I=!1}p=v=h.currItem.initialZoomLevel,(ee=h.currItem.bounds)&&(de.x=ee.center.x,de.y=ee.center.y,Ee(!0)),Te("resize")},zoomTo:function(t,e,n,i,o){e&&(p=v,dt.x=Math.abs(e.x)-de.x,dt.y=Math.abs(e.y)-de.y,Pe(ce,de));var a=_e(t,!1),r={};He("x",a,r,t),He("y",a,r,t);var l=v,s=de.x,u=de.y;Fe(r);var c=function(e){1===e?(v=t,de.x=r.x,de.y=r.y):(v=(t-l)*e+l,de.x=(r.x-s)*e+s,de.y=(r.y-u)*e+u),o&&o(e),Ee(1===e)};n?$e("customZoomTo",0,1,n,i||f.easing.sine.inOut,c):c(1)}},Je={},Qe={},et={},tt={},nt={},it=[],ot={},at=[],rt={},lt=0,st={x:0,y:0},ut=0,ct={x:0,y:0},dt={x:0,y:0},pt={x:0,y:0},mt=function(e,t){return rt.x=Math.abs(e.x-t.x),rt.y=Math.abs(e.y-t.y),Math.sqrt(rt.x*rt.x+rt.y*rt.y)},ft=function(){n&&(Z(n),n=null)},ht=function(){X&&(n=R(ht),Et())},yt=function(e,t){return!(!e||e===document)&&!(e.getAttribute("class")&&-1<e.getAttribute("class").indexOf("pswp__scroll-wrap"))&&(t(e)?e:yt(e.parentNode,t))},xt={},vt=function(e,t){return xt.prevent=!yt(e.target,y.isClickableElement),Te("preventDragEvent",e,t,xt),xt.prevent},gt=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},wt=function(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)},bt=function(){var e=de.y-h.currItem.initialPosition.y;return 1-Math.abs(e/(pe.y/2))},It={},Ct={},Dt=[],Tt=function(e){for(;0<Dt.length;)Dt.pop();return O?(se=0,it.forEach(function(e){0===se?Dt[0]=e:1===se&&(Dt[1]=e),se++})):-1<e.type.indexOf("touch")?e.touches&&0<e.touches.length&&(Dt[0]=gt(e.touches[0],It),1<e.touches.length&&(Dt[1]=gt(e.touches[1],Ct))):(It.x=e.pageX,It.y=e.pageY,It.id="",Dt[0]=It),Dt},Mt=function(e,t){var n,i,o,a,r=de[e]+t[e],l=0<t[e],s=ct.x+t.x,u=ct.x-ot.x;if(n=r>ee.min[e]||r<ee.max[e]?y.panEndFriction:1,r=de[e]+t[e]*n,(y.allowPanToNext||v===h.currItem.initialZoomLevel)&&(te?"h"!==ie||"x"!==e||K||(l?(r>ee.min[e]&&(n=y.panEndFriction,ee.min[e],i=ee.min[e]-ce[e]),(i<=0||u<0)&&1<Ht()?(a=s,u<0&&s>ot.x&&(a=ot.x)):ee.min.x!==ee.max.x&&(o=r)):(r<ee.max[e]&&(n=y.panEndFriction,ee.max[e],i=ce[e]-ee.max[e]),(i<=0||0<u)&&1<Ht()?(a=s,0<u&&s<ot.x&&(a=ot.x)):ee.min.x!==ee.max.x&&(o=r))):a=s,"x"===e))return void 0!==a&&(Re(a,!0),$=a!==ot.x),ee.min.x!==ee.max.x&&(void 0!==o?de.x=o:$||(de.x+=t.x*n)),void 0!==a;ne||$||v>h.currItem.fitRatio&&(de[e]+=t[e]*n)},St=function(e){if(!("mousedown"===e.type&&0<e.button))if(Nt)e.preventDefault();else if(!G||"mousedown"!==e.type){if(vt(e,!0)&&e.preventDefault(),Te("pointerDown"),O){var t=f.arraySearch(it,e.pointerId,"id");t<0&&(t=it.length),it[t]={x:e.pageX,y:e.pageY,id:e.pointerId}}var n=Tt(e),i=n.length;j=null,qe(),X&&1!==i||(X=oe=!0,f.bind(window,u,h),W=le=ae=B=$=q=V=K=!1,ie=null,Te("firstTouchStart",n),Pe(ce,de),ue.x=ue.y=0,Pe(tt,n[0]),Pe(nt,tt),ot.x=he.x*me,at=[{x:tt.x,y:tt.y}],H=U=Me(),_e(v,!0),ft(),ht()),!J&&1<i&&!ne&&!$&&(p=v,J=V=!(K=!1),ue.y=ue.x=0,Pe(ce,de),Pe(Je,n[0]),Pe(Qe,n[1]),wt(Je,Qe,pt),dt.x=Math.abs(pt.x)-de.x,dt.y=Math.abs(pt.y)-de.y,Q=mt(Je,Qe))}},At=function(e){if(e.preventDefault(),O){var t=f.arraySearch(it,e.pointerId,"id");if(-1<t){var n=it[t];n.x=e.pageX,n.y=e.pageY}}if(X){var i=Tt(e);if(ie||q||J)j=i;else if(ct.x!==he.x*me)ie="h";else{var o=Math.abs(i[0].x-tt.x)-Math.abs(i[0].y-tt.y);10<=Math.abs(o)&&(ie=0<o?"h":"v",j=i)}}},Et=function(){if(j){var e,t,n=j.length;if(0!==n)if(Pe(Je,j[0]),et.x=Je.x-tt.x,et.y=Je.y-tt.y,J&&1<n){if(tt.x=Je.x,tt.y=Je.y,!et.x&&!et.y&&(e=j[1],t=Qe,e.x===t.x&&e.y===t.y))return;Pe(Qe,j[1]),K||(K=!0,Te("zoomGestureStarted"));var i=mt(Je,Qe),o=Pt(i);o>h.currItem.initialZoomLevel+h.currItem.initialZoomLevel/15&&(le=!0);var a=1,r=Ne(),l=Ue();if(o<r)if(y.pinchToClose&&!le&&p<=h.currItem.initialZoomLevel){var s=1-(r-o)/(r/1.2);Se(s),Te("onPinchClose",s),ae=!0}else 1<(a=(r-o)/r)&&(a=1),o=r-a*(r/3);else l<o&&(1<(a=(o-l)/(6*r))&&(a=1),o=l+a*r);a<0&&(a=0),wt(Je,Qe,st),ue.x+=st.x-pt.x,ue.y+=st.y-pt.y,Pe(pt,st),de.x=Ze("x",o),de.y=Ze("y",o),W=v<o,v=o,Ee()}else{if(!ie)return;if(oe&&(oe=!1,10<=Math.abs(et.x)&&(et.x-=j[0].x-nt.x),10<=Math.abs(et.y)&&(et.y-=j[0].y-nt.y)),tt.x=Je.x,tt.y=Je.y,0===et.x&&0===et.y)return;if("v"===ie&&y.closeOnVerticalDrag&&"fit"===y.scaleMode&&v===h.currItem.initialZoomLevel){ue.y+=et.y,de.y+=et.y;var u=bt();return B=!0,Te("onVerticalDrag",u),Se(u),void Ee()}!function(e,t,n){if(50<e-H){var i=2<at.length?at.shift():{};i.x=t,i.y=n,at.push(i),H=e}}(Me(),Je.x,Je.y),q=!0,ee=h.currItem.bounds,Mt("x",et)||(Mt("y",et),Fe(de),Ee())}}},Ot=function(e){if(_.isOldAndroid){if(G&&"mouseup"===e.type)return;-1<e.type.indexOf("touch")&&(clearTimeout(G),G=setTimeout(function(){G=0},600))}var t;if(Te("pointerUp"),vt(e,!1)&&e.preventDefault(),O){var n=f.arraySearch(it,e.pointerId,"id");-1<n&&(t=it.splice(n,1)[0],navigator.pointerEnabled?t.type=e.pointerType||"mouse":(t.type={4:"mouse",2:"touch",3:"pen"}[e.pointerType],t.type||(t.type=e.pointerType||"mouse")))}var i,o=Tt(e),a=o.length;if("mouseup"===e.type&&(a=0),2===a)return!(j=null);1===a&&Pe(nt,o[0]),0!==a||ie||ne||(t||("mouseup"===e.type?t={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(t={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),Te("touchRelease",e,t));var r=-1;if(0===a&&(X=!1,f.unbind(window,u,h),ft(),J?r=0:-1!==ut&&(r=Me()-ut)),ut=1===a?Me():-1,i=-1!==r&&r<150?"zoom":"swipe",J&&a<2&&(J=!1,1===a&&(i="zoomPointerUp"),Te("zoomGestureEnded")),j=null,q||K||ne||B)if(qe(),Y||(Y=kt()),Y.calculateSwipeSpeed("x"),B)if(bt()<y.verticalDragRange)h.close();else{var l=de.y,s=re;$e("verticalDrag",0,1,300,f.easing.cubic.out,function(e){de.y=(h.currItem.initialPosition.y-l)*e+l,Se((1-s)*e+s),Ee()}),Te("onVerticalDrag",1)}else{if(($||ne)&&0===a){if(Zt(i,Y))return;i="zoomPointerUp"}ne||("swipe"===i?!$&&v>h.currItem.fitRatio&&Rt(Y):Ft())}},kt=function(){var t,n,i={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(e){1<at.length?(t=Me()-H+50,n=at[at.length-2][e]):(t=Me()-U,n=nt[e]),i.lastFlickOffset[e]=tt[e]-n,i.lastFlickDist[e]=Math.abs(i.lastFlickOffset[e]),20<i.lastFlickDist[e]?i.lastFlickSpeed[e]=i.lastFlickOffset[e]/t:i.lastFlickSpeed[e]=0,Math.abs(i.lastFlickSpeed[e])<.1&&(i.lastFlickSpeed[e]=0),i.slowDownRatio[e]=.95,i.slowDownRatioReverse[e]=1-i.slowDownRatio[e],i.speedDecelerationRatio[e]=1},calculateOverBoundsAnimOffset:function(t,e){i.backAnimStarted[t]||(de[t]>ee.min[t]?i.backAnimDestination[t]=ee.min[t]:de[t]<ee.max[t]&&(i.backAnimDestination[t]=ee.max[t]),void 0!==i.backAnimDestination[t]&&(i.slowDownRatio[t]=.7,i.slowDownRatioReverse[t]=1-i.slowDownRatio[t],i.speedDecelerationRatioAbs[t]<.05&&(i.lastFlickSpeed[t]=0,i.backAnimStarted[t]=!0,$e("bounceZoomPan"+t,de[t],i.backAnimDestination[t],e||300,f.easing.sine.out,function(e){de[t]=e,Ee()}))))},calculateAnimOffset:function(e){i.backAnimStarted[e]||(i.speedDecelerationRatio[e]=i.speedDecelerationRatio[e]*(i.slowDownRatio[e]+i.slowDownRatioReverse[e]-i.slowDownRatioReverse[e]*i.timeDiff/10),i.speedDecelerationRatioAbs[e]=Math.abs(i.lastFlickSpeed[e]*i.speedDecelerationRatio[e]),i.distanceOffset[e]=i.lastFlickSpeed[e]*i.speedDecelerationRatio[e]*i.timeDiff,de[e]+=i.distanceOffset[e])},panAnimLoop:function(){if(Ge.zoomPan&&(Ge.zoomPan.raf=R(i.panAnimLoop),i.now=Me(),i.timeDiff=i.now-i.lastNow,i.lastNow=i.now,i.calculateAnimOffset("x"),i.calculateAnimOffset("y"),Ee(),i.calculateOverBoundsAnimOffset("x"),i.calculateOverBoundsAnimOffset("y"),i.speedDecelerationRatioAbs.x<.05&&i.speedDecelerationRatioAbs.y<.05))return de.x=Math.round(de.x),de.y=Math.round(de.y),Ee(),void Ve("zoomPan")}};return i},Rt=function(e){if(e.calculateSwipeSpeed("y"),ee=h.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05)return e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0;Ke("zoomPan"),e.lastNow=Me(),e.panAnimLoop()},Zt=function(e,t){var n,i,o;if(ne||(lt=x),"swipe"===e){var a=tt.x-nt.x,r=t.lastFlickDist.x<10;30<a&&(r||20<t.lastFlickOffset.x)?i=-1:a<-30&&(r||t.lastFlickOffset.x<-20)&&(i=1)}i&&((x+=i)<0?(x=y.loop?Ht()-1:0,o=!0):x>=Ht()&&(x=y.loop?0:Ht()-1,o=!0),o&&!y.loop||(ye+=i,me-=i,n=!0));var l,s=he.x*me,u=Math.abs(s-ct.x);return n||s>ct.x==0<t.lastFlickSpeed.x?(l=0<Math.abs(t.lastFlickSpeed.x)?u/Math.abs(t.lastFlickSpeed.x):333,l=Math.min(l,400),l=Math.max(l,250)):l=333,lt===x&&(n=!1),ne=!0,Te("mainScrollAnimStart"),$e("mainScroll",ct.x,s,l,f.easing.cubic.out,Re,function(){qe(),ne=!1,lt=-1,(n||lt!==x)&&h.updateCurrItem(),Te("mainScrollAnimComplete")}),n&&h.updateCurrItem(!0),n},Pt=function(e){return 1/Q*e*p},Ft=function(){var e=v,t=Ne(),n=Ue();v<t?e=t:n<v&&(e=n);var i,o=re;return ae&&!W&&!le&&v<t?h.close():(ae&&(i=function(e){Se((1-o)*e+o)}),h.zoomTo(e,0,200,f.easing.cubic.out,i)),!0};be("Gestures",{publicMethods:{initGestures:function(){var e=function(e,t,n,i,o){T=e+t,M=e+n,S=e+i,A=o?e+o:""};(O=_.pointerEvent)&&_.touch&&(_.touch=!1),O?navigator.pointerEnabled?e("pointer","down","move","up","cancel"):e("MSPointer","Down","Move","Up","Cancel"):_.touch?(e("touch","start","move","end","cancel"),k=!0):e("mouse","down","move","up"),u=M+" "+S+" "+A,c=T,O&&!k&&(k=1<navigator.maxTouchPoints||1<navigator.msMaxTouchPoints),h.likelyTouchDevice=k,d[T]=St,d[M]=At,d[S]=Ot,A&&(d[A]=d[S]),_.touch&&(c+=" mousedown",u+=" mousemove mouseup",d.mousedown=d[T],d.mousemove=d[M],d.mouseup=d[S]),k||(y.allowPanToNext=!1)}}});var Lt,zt,_t,Nt,Ut,Ht,Yt=function(r,e,l,t){var s;Lt&&clearTimeout(Lt),_t=Nt=!0,r.initialLayout?(s=r.initialLayout,r.initialLayout=null):s=y.getThumbBoundsFn&&y.getThumbBoundsFn(x);var u,c,d=l?y.hideAnimationDuration:y.showAnimationDuration,p=function(){Ve("initialZoom"),l?(h.template.removeAttribute("style"),h.bg.removeAttribute("style")):(Se(1),e&&(e.style.display="block"),f.addClass(m,"pswp--animated-in"),Te("initialZoom"+(l?"OutEnd":"InEnd"))),t&&t(),Nt=!1};if(!d||!s||void 0===s.x)return Te("initialZoom"+(l?"Out":"In")),v=r.initialZoomLevel,Pe(de,r.initialPosition),Ee(),m.style.opacity=l?0:1,Se(1),void(d?setTimeout(function(){p()},d):p());u=a,c=!h.currItem.src||h.currItem.loadError||y.showHideOpacity,r.miniImg&&(r.miniImg.style.webkitBackfaceVisibility="hidden"),l||(v=s.w/r.w,de.x=s.x,de.y=s.y-F,h[c?"template":"bg"].style.opacity=.001,Ee()),Ke("initialZoom"),l&&!u&&f.removeClass(m,"pswp--animated-in"),c&&(l?f[(u?"remove":"add")+"Class"](m,"pswp--animate_opacity"):setTimeout(function(){f.addClass(m,"pswp--animate_opacity")},30)),Lt=setTimeout(function(){if(Te("initialZoom"+(l?"Out":"In")),l){var t=s.w/r.w,n=de.x,i=de.y,o=v,a=re,e=function(e){1===e?(v=t,de.x=s.x,de.y=s.y-z):(v=(t-o)*e+o,de.x=(s.x-n)*e+n,de.y=(s.y-z-i)*e+i),Ee(),c?m.style.opacity=1-e:Se(a-e*a)};u?$e("initialZoom",0,1,d,f.easing.cubic.out,e,p):(e(1),Lt=setTimeout(p,d+20))}else v=r.initialZoomLevel,Pe(de,r.initialPosition),Ee(),Se(1),c?m.style.opacity=1:Se(1),Lt=setTimeout(p,d+20)},l?25:90)},Wt={},Bt=[],Gt={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return zt.length}},Xt=function(e,t,n){if(e.src&&!e.loadError){var i=!n;if(i&&(e.vGap||(e.vGap={top:0,bottom:0}),Te("parseVerticalMargin",e)),Wt.x=t.x,Wt.y=t.y-e.vGap.top-e.vGap.bottom,i){var o=Wt.x/e.w,a=Wt.y/e.h;e.fitRatio=o<a?o:a;var r=y.scaleMode;"orig"===r?n=1:"fit"===r&&(n=e.fitRatio),1<n&&(n=1),e.initialZoomLevel=n,e.bounds||(e.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}})}if(!n)return;return s=(l=e).w*n,u=e.h*n,(c=l.bounds).center.x=Math.round((Wt.x-s)/2),c.center.y=Math.round((Wt.y-u)/2)+l.vGap.top,c.max.x=s>Wt.x?Math.round(Wt.x-s):c.center.x,c.max.y=u>Wt.y?Math.round(Wt.y-u)+l.vGap.top:c.center.y,c.min.x=s>Wt.x?0:c.center.x,c.min.y=u>Wt.y?l.vGap.top:c.center.y,i&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds}return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}},e.initialPosition=e.bounds.center,e.bounds;var l,s,u,c},Vt=function(e,t,n,i,o,a){t.loadError||i&&(t.imageAppended=!0,$t(t,i,t===h.currItem&&we),n.appendChild(i),a&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500))},Kt=function(e){e.loading=!0,e.loaded=!1;var t=e.img=f.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t},qt=function(e,t){if(e.src&&e.loadError&&e.container)return t&&(e.container.innerHTML=""),e.container.innerHTML=y.errorMsg.replace("%url%",e.src),!0},$t=function(e,t,n){if(e.src){t||(t=e.container.lastChild);var i=n?e.w:Math.round(e.w*e.fitRatio),o=n?e.h:Math.round(e.h*e.fitRatio);e.placeholder&&!e.loaded&&(e.placeholder.style.width=i+"px",e.placeholder.style.height=o+"px"),t.style.width=i+"px",t.style.height=o+"px"}},jt=function(){if(Bt.length){for(var e,t=0;t<Bt.length;t++)(e=Bt[t]).holder.index===e.index&&Vt(e.index,e.item,e.baseDiv,e.img,0,e.clearPlaceholder);Bt=[]}};be("Controller",{publicMethods:{lazyLoadItem:function(e){e=Ie(e);var t=Ut(e);t&&(!t.loaded&&!t.loading||I)&&(Te("gettingData",e,t),t.src&&Kt(t))},initController:function(){f.extend(y,Gt,!0),h.items=zt=e,Ut=h.getItemAt,Ht=y.getNumItemsFn,y.loop,Ht()<3&&(y.loop=!1),De("beforeChange",function(e){var t,n=y.preload,i=null===e||0<=e,o=Math.min(n[0],Ht()),a=Math.min(n[1],Ht());for(t=1;t<=(i?a:o);t++)h.lazyLoadItem(x+t);for(t=1;t<=(i?o:a);t++)h.lazyLoadItem(x-t)}),De("initialLayout",function(){h.currItem.initialLayout=y.getThumbBoundsFn&&y.getThumbBoundsFn(x)}),De("mainScrollAnimComplete",jt),De("initialZoomInEnd",jt),De("destroy",function(){for(var e,t=0;t<zt.length;t++)(e=zt[t]).container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);Bt=null})},getItemAt:function(e){return 0<=e&&void 0!==zt[e]&&zt[e]},allowProgressiveImg:function(){return y.forceProgressiveLoading||!k||y.mouseUsed||1200<screen.width},setContent:function(t,n){y.loop&&(n=Ie(n));var e=h.getItemAt(t.index);e&&(e.container=null);var i,o=h.getItemAt(n);if(o){Te("gettingData",n,o),t.index=n;var a=(t.item=o).container=f.createEl("pswp__zoom-wrap");if(!o.src&&o.html&&(o.html.tagName?a.appendChild(o.html):a.innerHTML=o.html),qt(o),Xt(o,pe),!o.src||o.loadError||o.loaded)o.src&&!o.loadError&&((i=f.createEl("pswp__img","img")).style.opacity=1,i.src=o.src,$t(o,i),Vt(0,o,a,i));else{if(o.loadComplete=function(e){if(s){if(t&&t.index===n){if(qt(e,!0))return e.loadComplete=e.img=null,Xt(e,pe),Oe(e),void(t.index===x&&h.updateCurrZoomItem());e.imageAppended?!Nt&&e.placeholder&&(e.placeholder.style.display="none",e.placeholder=null):_.transform&&(ne||Nt)?Bt.push({item:e,baseDiv:a,img:e.img,index:n,holder:t,clearPlaceholder:!0}):Vt(0,e,a,e.img,0,!0)}e.loadComplete=null,e.img=null,Te("imageLoadComplete",n,e)}},f.features.transform){var r="pswp__img pswp__img--placeholder";r+=o.msrc?"":" pswp__img--placeholder--blank";var l=f.createEl(r,o.msrc?"img":"");o.msrc&&(l.src=o.msrc),$t(o,l),a.appendChild(l),o.placeholder=l}o.loading||Kt(o),h.allowProgressiveImg()&&(!_t&&_.transform?Bt.push({item:o,baseDiv:a,img:o.img,index:n,holder:t}):Vt(0,o,a,o.img,0,!0))}_t||n!==x?Oe(o):(te=a.style,Yt(o,i||o.img)),t.el.innerHTML="",t.el.appendChild(a)}else t.el.innerHTML=""},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});var Jt,Qt,en={},tn=function(e,t,n){var i=document.createEvent("CustomEvent"),o={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};i.initCustomEvent("pswpTap",!0,!0,o),e.target.dispatchEvent(i)};be("Tap",{publicMethods:{initTap:function(){De("firstTouchStart",h.onTapStart),De("touchRelease",h.onTapRelease),De("destroy",function(){en={},Jt=null})},onTapStart:function(e){1<e.length&&(clearTimeout(Jt),Jt=null)},onTapRelease:function(e,t){var n,i;if(t&&!q&&!V&&!Xe){var o=t;if(Jt&&(clearTimeout(Jt),Jt=null,n=o,i=en,Math.abs(n.x-i.x)<25&&Math.abs(n.y-i.y)<25))return void Te("doubleTap",o);if("mouse"===t.type)return void tn(e,t,"mouse");if("BUTTON"===e.target.tagName.toUpperCase()||f.hasClass(e.target,"pswp__single-tap"))return void tn(e,t);Pe(en,o),Jt=setTimeout(function(){tn(e,t),Jt=null},300)}}}}),be("DesktopZoom",{publicMethods:{initDesktopZoom:function(){L||(k?De("mouseUsed",function(){h.setupDesktopZoom()}):h.setupDesktopZoom(!0))},setupDesktopZoom:function(e){Qt={};var t="wheel mousewheel DOMMouseScroll";De("bindEvents",function(){f.bind(m,t,h.handleMouseWheel)}),De("unbindEvents",function(){Qt&&f.unbind(m,t,h.handleMouseWheel)}),h.mouseZoomedIn=!1;var n,i=function(){h.mouseZoomedIn&&(f.removeClass(m,"pswp--zoomed-in"),h.mouseZoomedIn=!1),v<1?f.addClass(m,"pswp--zoom-allowed"):f.removeClass(m,"pswp--zoom-allowed"),o()},o=function(){n&&(f.removeClass(m,"pswp--dragging"),n=!1)};De("resize",i),De("afterChange",i),De("pointerDown",function(){h.mouseZoomedIn&&(n=!0,f.addClass(m,"pswp--dragging"))}),De("pointerUp",o),e||i()},handleMouseWheel:function(e){if(v<=h.currItem.fitRatio)return y.modal&&(!y.closeOnScroll||Xe||X?e.preventDefault():E&&2<Math.abs(e.deltaY)&&(a=!0,h.close())),!0;if(e.stopPropagation(),Qt.x=0,"deltaX"in e)1===e.deltaMode?(Qt.x=18*e.deltaX,Qt.y=18*e.deltaY):(Qt.x=e.deltaX,Qt.y=e.deltaY);else if("wheelDelta"in e)e.wheelDeltaX&&(Qt.x=-.16*e.wheelDeltaX),e.wheelDeltaY?Qt.y=-.16*e.wheelDeltaY:Qt.y=-.16*e.wheelDelta;else{if(!("detail"in e))return;Qt.y=e.detail}_e(v,!0);var t=de.x-Qt.x,n=de.y-Qt.y;(y.modal||t<=ee.min.x&&t>=ee.max.x&&n<=ee.min.y&&n>=ee.max.y)&&e.preventDefault(),h.panTo(t,n)},toggleDesktopZoom:function(e){e=e||{x:pe.x/2+fe.x,y:pe.y/2+fe.y};var t=y.getDoubleTapZoom(!0,h.currItem),n=v===t;h.mouseZoomedIn=!n,h.zoomTo(n?h.currItem.initialZoomLevel:t,e,333),f[(n?"remove":"add")+"Class"](m,"pswp--zoomed-in")}}});var nn,on,an,rn,ln,sn,un,cn,dn,pn,mn,fn,hn={history:!0,galleryUID:1},yn=function(){return mn.hash.substring(1)},xn=function(){nn&&clearTimeout(nn),an&&clearTimeout(an)},vn=function(){var e=yn(),t={};if(e.length<5)return t;var n,i=e.split("&");for(n=0;n<i.length;n++)if(i[n]){var o=i[n].split("=");o.length<2||(t[o[0]]=o[1])}if(y.galleryPIDs){var a=t.pid;for(n=t.pid=0;n<zt.length;n++)if(zt[n].pid===a){t.pid=n;break}}else t.pid=parseInt(t.pid,10)-1;return t.pid<0&&(t.pid=0),t},gn=function(){if(an&&clearTimeout(an),Xe||X)an=setTimeout(gn,500);else{rn?clearTimeout(on):rn=!0;var e=x+1,t=Ut(x);t.hasOwnProperty("pid")&&(e=t.pid);var n=un+"&gid="+y.galleryUID+"&pid="+e;cn||-1===mn.hash.indexOf(n)&&(pn=!0);var i=mn.href.split("#")[0]+"#"+n;fn?"#"+n!==window.location.hash&&history[cn?"replaceState":"pushState"]("",document.title,i):cn?mn.replace(i):mn.hash=n,cn=!0,on=setTimeout(function(){rn=!1},60)}};be("History",{publicMethods:{initHistory:function(){if(f.extend(y,hn,!0),y.history){mn=window.location,cn=dn=pn=!1,un=yn(),fn="pushState"in history,-1<un.indexOf("gid=")&&(un=(un=un.split("&gid=")[0]).split("?gid=")[0]),De("afterChange",h.updateURL),De("unbindEvents",function(){f.unbind(window,"hashchange",h.onHashChange)});var e=function(){sn=!0,dn||(pn?history.back():un?mn.hash=un:fn?history.pushState("",document.title,mn.pathname+mn.search):mn.hash=""),xn()};De("unbindEvents",function(){a&&e()}),De("destroy",function(){sn||e()}),De("firstUpdate",function(){x=vn().pid});var t=un.indexOf("pid=");-1<t&&"&"===(un=un.substring(0,t)).slice(-1)&&(un=un.slice(0,-1)),setTimeout(function(){s&&f.bind(window,"hashchange",h.onHashChange)},40)}},onHashChange:function(){if(yn()===un)return dn=!0,void h.close();rn||(ln=!0,h.goTo(vn().pid),ln=!1)},updateURL:function(){xn(),ln||(cn?nn=setTimeout(gn,800):gn())}}}),f.extend(h,je)}});