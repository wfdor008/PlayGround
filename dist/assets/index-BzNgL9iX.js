(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const to="170",Zc=0,Do=1,Jc=2,jl=1,Ql=2,An=3,Un=0,He=1,_e=2,Yn=0,Hi=1,pe=2,Io=3,Uo=4,Kc=5,hi=100,jc=101,Qc=102,th=103,eh=104,nh=200,ih=201,sh=202,rh=203,la=204,ca=205,ah=206,oh=207,lh=208,ch=209,hh=210,uh=211,dh=212,fh=213,ph=214,ha=0,ua=1,da=2,Xi=3,fa=4,pa=5,ma=6,ga=7,eo=0,mh=1,gh=2,$n=0,vh=1,xh=2,_h=3,tc=4,yh=5,Mh=6,Sh=7,ec=300,qi=301,Yi=302,va=303,xa=304,vr=306,_a=1e3,di=1001,ya=1002,Ze=1003,bh=1004,Es=1005,gn=1006,wr=1007,fi=1008,Nn=1009,nc=1010,ic=1011,gs=1012,no=1013,mi=1014,vn=1015,Ms=1016,io=1017,so=1018,$i=1020,sc=35902,rc=1021,ac=1022,cn=1023,oc=1024,lc=1025,Vi=1026,Zi=1027,ro=1028,ao=1029,cc=1030,oo=1031,lo=1033,or=33776,lr=33777,cr=33778,hr=33779,Ma=35840,Sa=35841,ba=35842,wa=35843,Ea=36196,Ta=37492,Aa=37496,Ca=37808,Ra=37809,Pa=37810,La=37811,Da=37812,Ia=37813,Ua=37814,Na=37815,Fa=37816,Oa=37817,za=37818,Ba=37819,ka=37820,Ga=37821,ur=36492,Ha=36494,Va=36495,hc=36283,Wa=36284,Xa=36285,qa=36286,wh=3200,Eh=3201,co=0,Th=1,Xn="",Ne="srgb",Ki="srgb-linear",xr="linear",ce="srgb",yi=7680,No=519,Ah=512,Ch=513,Rh=514,uc=515,Ph=516,Lh=517,Dh=518,Ih=519,Ya=35044,Fo="300 es",Pn=2e3,fr=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Er=Math.PI/180,$a=180/Math.PI;function Ln(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Fe(s,t,e){return Math.max(t,Math.min(e,s))}function Uh(s,t){return(s%t+t)%t}function Tr(s,t,e){return(1-e)*s+e*t}function pn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function he(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Q{constructor(t=0,e=0){Q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,i,r,a,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],S=i[1],_=i[4],v=i[7],A=i[2],w=i[5],E=i[8];return r[0]=a*x+o*S+l*A,r[3]=a*g+o*_+l*w,r[6]=a*p+o*v+l*E,r[1]=c*x+h*S+u*A,r[4]=c*g+h*_+u*w,r[7]=c*p+h*v+u*E,r[2]=d*x+f*S+m*A,r[5]=d*g+f*_+m*w,r[8]=d*p+f*v+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ar.makeScale(t,e)),this}rotate(t){return this.premultiply(Ar.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ar.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new Xt;function dc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nh(){const s=pr("canvas");return s.style.display="block",s}const Oo={};function ds(s){s in Oo||(Oo[s]=!0,console.warn(s))}function Fh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Oh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?xr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const zo=[.64,.33,.3,.6,.15,.06],Bo=[.2126,.7152,.0722],ko=[.3127,.329],Go=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ho=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[Ki]:{primaries:zo,whitePoint:ko,transfer:xr,toXYZ:Go,fromXYZ:Ho,luminanceCoefficients:Bo,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:zo,whitePoint:ko,transfer:ce,toXYZ:Go,fromXYZ:Ho,luminanceCoefficients:Bo,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let Mi;class Bh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mi===void 0&&(Mi=pr("canvas")),Mi.width=t.width,Mi.height=t.height;const n=Mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kh=0;class fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Cr(i[a].image)):r.push(Cr(i[a]))}else r=Cr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Cr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gh=0;class Oe extends ji{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=di,i=di,r=gn,a=fi,o=cn,l=Nn,c=Oe.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Ln(),this.name="",this.source=new fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _a:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _a:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=ec;Oe.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,i=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,v=(f+1)/2,A=(p+1)/2,w=(h+d)/4,E=(u+x)/4,R=(m+g)/4;return _>v&&_>A?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=w/n,r=E/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=R/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=E/r,i=R/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hh extends ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Hh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pc extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vh extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*x,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const A=Math.sqrt(_),w=Math.atan2(A,p*S);g=Math.sin(g*w)/A,o=Math.sin(o*w)/A}const v=o*S;if(l=l*g+d*v,c=c*g+f*v,h=h*g+m*v,u=u*g+x*v,g===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rr.copy(this).projectOnVector(t),this.sub(Rr)}reflect(t){return this.sub(Rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new P,Vo=new mn;class xi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),As.subVectors(this.max,is),Si.subVectors(t.a,is),bi.subVectors(t.b,is),wi.subVectors(t.c,is),zn.subVectors(bi,Si),Bn.subVectors(wi,bi),ti.subVectors(Si,wi);let e=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-ti.z,ti.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,ti.z,0,-ti.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-ti.y,ti.x,0];return!Pr(e,Si,bi,wi,As)||(e=[1,0,0,0,1,0,0,0,1],!Pr(e,Si,bi,wi,As))?!1:(Cs.crossVectors(zn,Bn),e=[Cs.x,Cs.y,Cs.z],Pr(e,Si,bi,wi,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new P,new P,new P,new P,new P,new P,new P,new P],sn=new P,Ts=new xi,Si=new P,bi=new P,wi=new P,zn=new P,Bn=new P,ti=new P,is=new P,As=new P,Cs=new P,ei=new P;function Pr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ei.fromArray(s,r);const o=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Wh=new xi,ss=new P,Lr=new P;class Qi{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ss,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(Lr)),this.expandByPoint(ss.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new P,Dr=new P,Rs=new P,kn=new P,Ir=new P,Ps=new P,Ur=new P;class mc{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Dr.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Dr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Rs),o=kn.dot(this.direction),l=-kn.dot(Rs),c=kn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Dr).addScaledVector(Rs,d),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,i,r){Ir.subVectors(e,t),Ps.subVectors(n,t),Ur.crossVectors(Ir,Ps);let a=this.direction.dot(Ur),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);const l=o*this.direction.dot(Ps.crossVectors(kn,Ps));if(l<0)return null;const c=o*this.direction.dot(Ir.cross(kn));if(c<0||l+c>a)return null;const h=-o*kn.dot(Ur);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,m,x,g){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,m,x,g)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ei.setFromMatrixColumn(t,0).length(),r=1/Ei.setFromMatrixColumn(t,1).length(),a=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xh,t,qh)}lookAt(t,e,n){const i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Gn.crossVectors(n,qe),Gn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Gn.crossVectors(n,qe)),Gn.normalize(),Ls.crossVectors(qe,Gn),i[0]=Gn.x,i[4]=Ls.x,i[8]=qe.x,i[1]=Gn.y,i[5]=Ls.y,i[9]=qe.y,i[2]=Gn.z,i[6]=Ls.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],S=n[3],_=n[7],v=n[11],A=n[15],w=i[0],E=i[4],R=i[8],M=i[12],y=i[1],L=i[5],O=i[9],F=i[13],H=i[2],V=i[6],k=i[10],G=i[14],B=i[3],tt=i[7],K=i[11],q=i[15];return r[0]=a*w+o*y+l*H+c*B,r[4]=a*E+o*L+l*V+c*tt,r[8]=a*R+o*O+l*k+c*K,r[12]=a*M+o*F+l*G+c*q,r[1]=h*w+u*y+d*H+f*B,r[5]=h*E+u*L+d*V+f*tt,r[9]=h*R+u*O+d*k+f*K,r[13]=h*M+u*F+d*G+f*q,r[2]=m*w+x*y+g*H+p*B,r[6]=m*E+x*L+g*V+p*tt,r[10]=m*R+x*O+g*k+p*K,r[14]=m*M+x*F+g*G+p*q,r[3]=S*w+_*y+v*H+A*B,r[7]=S*E+_*L+v*V+A*tt,r[11]=S*R+_*O+v*k+A*K,r[15]=S*M+_*F+v*G+A*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+g*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],S=u*g*c-x*d*c+x*l*f-o*g*f-u*l*p+o*d*p,_=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,v=h*x*c-m*u*c+m*o*f-a*x*f-h*o*p+a*u*p,A=m*u*l-h*x*l-m*o*d+a*x*d+h*o*g-a*u*g,w=e*S+n*_+i*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=S*E,t[1]=(x*d*r-u*g*r-x*i*f+n*g*f+u*i*p-n*d*p)*E,t[2]=(o*g*r-x*l*r+x*i*c-n*g*c-o*i*p+n*l*p)*E,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*E,t[4]=_*E,t[5]=(h*g*r-m*d*r+m*i*f-e*g*f-h*i*p+e*d*p)*E,t[6]=(m*l*r-a*g*r-m*i*c+e*g*c+a*i*p-e*l*p)*E,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*E,t[8]=v*E,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*E,t[10]=(a*x*r-m*o*r+m*n*c-e*x*c-a*n*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*E,t[12]=A*E,t[13]=(h*x*i-m*u*i+m*n*d-e*x*d-h*n*g+e*u*g)*E,t[14]=(m*o*i-a*x*i-m*n*l+e*x*l+a*n*g-e*o*g)*E,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,x=a*h,g=a*u,p=o*u,S=l*c,_=l*h,v=l*u,A=n.x,w=n.y,E=n.z;return i[0]=(1-(x+p))*A,i[1]=(f+v)*A,i[2]=(m-_)*A,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+p))*w,i[6]=(g+S)*w,i[7]=0,i[8]=(m+_)*E,i[9]=(g-S)*E,i[10]=(1-(d+x))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ei.set(i[0],i[1],i[2]).length();const a=Ei.set(i[4],i[5],i[6]).length(),o=Ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],rn.copy(this);const c=1/r,h=1/a,u=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Pn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(o===Pn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===fr)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Pn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h;let m,x;if(o===Pn)m=(a+r)*u,x=-2*u;else if(o===fr)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ei=new P,rn=new ne,Xh=new P(0,0,0),qh=new P(1,1,1),Gn=new P,Ls=new P,qe=new P,Wo=new ne,Xo=new mn;class Ge{constructor(t=0,e=0,n=0,i=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yh=0;const qo=new P,Ti=new mn,wn=new ne,Ds=new P,rs=new P,$h=new P,Zh=new mn,Yo=new P(1,0,0),$o=new P(0,1,0),Zo=new P(0,0,1),Jo={type:"added"},Jh={type:"removed"},Ai={type:"childadded",child:null},Nr={type:"childremoved",child:null};class Ae extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new P,e=new Ge,n=new mn,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Xt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Yo,t)}rotateY(t){return this.rotateOnAxis($o,t)}rotateZ(t){return this.rotateOnAxis(Zo,t)}translateOnAxis(t,e){return qo.copy(t).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yo,t)}translateY(t){return this.translateOnAxis($o,t)}translateZ(t){return this.translateOnAxis(Zo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(rs,Ds,this.up):wn.lookAt(Ds,rs,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(wn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jo),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jh),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jo),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,$h),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Zh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new P(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new P,En=new P,Fr=new P,Tn=new P,Ci=new P,Ri=new P,Ko=new P,Or=new P,zr=new P,Br=new P,kr=new be,Gr=new be,Hr=new be;class tn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){an.subVectors(i,e),En.subVectors(n,e),Fr.subVectors(t,e);const a=an.dot(an),o=an.dot(En),l=an.dot(Fr),c=En.dot(En),h=En.dot(Fr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return kr.setScalar(0),Gr.setScalar(0),Hr.setScalar(0),kr.fromBufferAttribute(t,e),Gr.fromBufferAttribute(t,n),Hr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(kr,r.x),a.addScaledVector(Gr,r.y),a.addScaledVector(Hr,r.z),a}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),En.subVectors(t,e),an.cross(En).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ci.subVectors(i,n),Ri.subVectors(r,n),Or.subVectors(t,n);const l=Ci.dot(Or),c=Ri.dot(Or);if(l<=0&&c<=0)return e.copy(n);zr.subVectors(t,i);const h=Ci.dot(zr),u=Ri.dot(zr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ci,a);Br.subVectors(t,r);const f=Ci.dot(Br),m=Ri.dot(Br);if(m>=0&&f<=m)return e.copy(r);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ri,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Ko.subVectors(r,i),o=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Ko,o);const p=1/(g+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(Ci,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Vr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=Uh(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Vr(a,r,t+1/3),this.g=Vr(a,r,t),this.b=Vr(a,r,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=vc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ee.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Fe(Ie.r*255,0,255))*65536+Math.round(Fe(Ie.g*255,0,255))*256+Math.round(Fe(Ie.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,r=Ie.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ne){ee.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Is);const n=Tr(Hn.h,Is.h,e),i=Tr(Hn.s,Is.s,e),r=Tr(Hn.l,Is.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new ft;ft.NAMES=vc;let Kh=0;class jn extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Ln(),this.name="",this.blending=Hi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class me extends jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new P,Us=new Q;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Us.fromBufferAttribute(this,e),Us.applyMatrix3(t),this.setXY(e,Us.x,Us.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ya&&(t.usage=this.usage),t}}class xc extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _c extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jh=0;const Ke=new ne,Wr=new Ae,Pi=new P,Ye=new xi,as=new xi,Pe=new P;class xe extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dc(t)?_c:xc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Wr.lookAt(t),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Ye.min,as.min),Ye.expandByPoint(Pe),Pe.addVectors(Ye.max,as.max),Ye.expandByPoint(Pe)):(Ye.expandByPoint(as.min),Ye.expandByPoint(as.max))}Ye.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(Pi.fromBufferAttribute(t,c),Pe.add(Pi)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new P,l[R]=new P;const c=new P,h=new P,u=new P,d=new Q,f=new Q,m=new Q,x=new P,g=new P;function p(R,M,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),o[R].add(x),o[M].add(x),o[y].add(x),l[R].add(g),l[M].add(g),l[y].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,M=S.length;R<M;++R){const y=S[R],L=y.start,O=y.count;for(let F=L,H=L+O;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const _=new P,v=new P,A=new P,w=new P;function E(R){A.fromBufferAttribute(i,R),w.copy(A);const M=o[R];_.copy(M),_.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(w,M);const L=v.dot(l[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,L)}for(let R=0,M=S.length;R<M;++R){const y=S[R],L=y.start,O=y.count;for(let F=L,H=L+O;F<H;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Te(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jo=new ne,ni=new mc,Ns=new Qi,Qo=new P,Fs=new P,Os=new P,zs=new P,Xr=new P,Bs=new P,tl=new P,ks=new P;class It extends Ae{constructor(t=new xe,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Bs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Xr.fromBufferAttribute(u,t),a?Bs.addScaledVector(Xr,h):Bs.addScaledVector(Xr.sub(e),h))}e.add(Bs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(Ns.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Ns,Qo)===null||ni.origin.distanceToSquared(Qo)>(t.far-t.near)**2))&&(jo.copy(r).invert(),ni.copy(t.ray).applyMatrix4(jo),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=a[g.materialIndex],S=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,A=_;v<A;v+=3){const w=o.getX(v),E=o.getX(v+1),R=o.getX(v+2);i=Gs(this,p,t,n,c,h,u,w,E,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const S=o.getX(g),_=o.getX(g+1),v=o.getX(g+2);i=Gs(this,a,t,n,c,h,u,S,_,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=a[g.materialIndex],S=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,A=_;v<A;v+=3){const w=v,E=v+1,R=v+2;i=Gs(this,p,t,n,c,h,u,w,E,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const S=g,_=g+1,v=g+2;i=Gs(this,a,t,n,c,h,u,S,_,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Qh(s,t,e,n,i,r,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Un,o),l===null)return null;ks.copy(o),ks.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ks);return c<e.near||c>e.far?null:{distance:c,point:ks.clone(),object:s}}function Gs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Fs),s.getVertexPosition(l,Os),s.getVertexPosition(c,zs);const h=Qh(s,t,e,n,Fs,Os,zs,tl);if(h){const u=new P;tn.getBarycoord(tl,Fs,Os,zs,u),i&&(h.uv=tn.getInterpolatedAttribute(i,o,l,c,u,new Q)),r&&(h.uv1=tn.getInterpolatedAttribute(r,o,l,c,u,new Q)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};tn.getNormal(Fs,Os,zs,d.normal),h.face=d,h.barycoord=u}return h}class In extends xe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function m(x,g,p,S,_,v,A,w,E,R,M){const y=v/E,L=A/R,O=v/2,F=A/2,H=w/2,V=E+1,k=R+1;let G=0,B=0;const tt=new P;for(let K=0;K<k;K++){const q=K*L-F;for(let rt=0;rt<V;rt++){const Nt=rt*y-O;tt[x]=Nt*S,tt[g]=q*_,tt[p]=H,c.push(tt.x,tt.y,tt.z),tt[x]=0,tt[g]=0,tt[p]=w>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(rt/E),u.push(1-K/R),G+=1}}for(let K=0;K<R;K++)for(let q=0;q<E;q++){const rt=d+q+V*K,Nt=d+q+V*(K+1),Y=d+(q+1)+V*(K+1),st=d+(q+1)+V*K;l.push(rt,Nt,st),l.push(Nt,Y,st),B+=6}o.addGroup(f,B,M),f+=B,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(s){const t={};for(let e=0;e<s.length;e++){const n=Ji(s[e]);for(const i in n)t[i]=n[i]}return t}function tu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function yc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const eu={clone:Ji,merge:Be};var nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nu,this.fragmentShader=iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=tu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mc extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new P,el=new Q,nl=new Q;class Qe extends Mc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,el,nl),e.subVectors(nl,el)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Di=1;class su extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qe(Li,Di,t,e);i.layers=this.layers,this.add(i);const r=new Qe(Li,Di,t,e);r.layers=this.layers,this.add(r);const a=new Qe(Li,Di,t,e);a.layers=this.layers,this.add(a);const o=new Qe(Li,Di,t,e);o.layers=this.layers,this.add(o);const l=new Qe(Li,Di,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Li,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Sc extends Oe{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ru extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Sc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new In(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Yn});r.uniforms.tEquirect.value=e;const a=new It(i,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=gn),new su(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const qr=new P,au=new P,ou=new Xt;class li{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=qr.subVectors(n,e).cross(au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ou.getNormalMatrix(t),i=this.coplanarPoint(qr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Qi,Hs=new P;class ho{constructor(t=new li,e=new li,n=new li,i=new li,r=new li,a=new li){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],x=i[10],g=i[11],p=i[12],S=i[13],_=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,g-f,v-p).normalize(),n[1].setComponents(l+r,d+c,g+f,v+p).normalize(),n[2].setComponents(l+a,d+h,g+m,v+S).normalize(),n[3].setComponents(l-a,d-h,g-m,v-S).normalize(),n[4].setComponents(l-o,d-u,g-x,v-_).normalize(),e===Pn)n[5].setComponents(l+o,d+u,g+x,v+_).normalize();else if(e===fr)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Hs.x=i.normal.x>0?t.max.x:t.min.x,Hs.y=i.normal.y>0?t.max.y:t.min.y,Hs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function lu(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class ln extends xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const S=p*d-a;for(let _=0;_<c;_++){const v=_*u-r;m.push(v,-S,0),x.push(0,0,1),g.push(_/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const _=S+c*p,v=S+c*(p+1),A=S+1+c*(p+1),w=S+1+c*p;f.push(_,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.widthSegments,t.heightSegments)}}var cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Su=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Du=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Iu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ju=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,td=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ed=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,od=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ld=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ud=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ld=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:cu,alphahash_pars_fragment:hu,alphamap_fragment:uu,alphamap_pars_fragment:du,alphatest_fragment:fu,alphatest_pars_fragment:pu,aomap_fragment:mu,aomap_pars_fragment:gu,batching_pars_vertex:vu,batching_vertex:xu,begin_vertex:_u,beginnormal_vertex:yu,bsdfs:Mu,iridescence_fragment:Su,bumpmap_pars_fragment:bu,clipping_planes_fragment:wu,clipping_planes_pars_fragment:Eu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:Au,color_fragment:Cu,color_pars_fragment:Ru,color_pars_vertex:Pu,color_vertex:Lu,common:Du,cube_uv_reflection_fragment:Iu,defaultnormal_vertex:Uu,displacementmap_pars_vertex:Nu,displacementmap_vertex:Fu,emissivemap_fragment:Ou,emissivemap_pars_fragment:zu,colorspace_fragment:Bu,colorspace_pars_fragment:ku,envmap_fragment:Gu,envmap_common_pars_fragment:Hu,envmap_pars_fragment:Vu,envmap_pars_vertex:Wu,envmap_physical_pars_fragment:ed,envmap_vertex:Xu,fog_vertex:qu,fog_pars_vertex:Yu,fog_fragment:$u,fog_pars_fragment:Zu,gradientmap_pars_fragment:Ju,lightmap_pars_fragment:Ku,lights_lambert_fragment:ju,lights_lambert_pars_fragment:Qu,lights_pars_begin:td,lights_toon_fragment:nd,lights_toon_pars_fragment:id,lights_phong_fragment:sd,lights_phong_pars_fragment:rd,lights_physical_fragment:ad,lights_physical_pars_fragment:od,lights_fragment_begin:ld,lights_fragment_maps:cd,lights_fragment_end:hd,logdepthbuf_fragment:ud,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:fd,logdepthbuf_vertex:pd,map_fragment:md,map_pars_fragment:gd,map_particle_fragment:vd,map_particle_pars_fragment:xd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:yd,morphinstance_vertex:Md,morphcolor_vertex:Sd,morphnormal_vertex:bd,morphtarget_pars_vertex:wd,morphtarget_vertex:Ed,normal_fragment_begin:Td,normal_fragment_maps:Ad,normal_pars_fragment:Cd,normal_pars_vertex:Rd,normal_vertex:Pd,normalmap_pars_fragment:Ld,clearcoat_normal_fragment_begin:Dd,clearcoat_normal_fragment_maps:Id,clearcoat_pars_fragment:Ud,iridescence_pars_fragment:Nd,opaque_fragment:Fd,packing:Od,premultiplied_alpha_fragment:zd,project_vertex:Bd,dithering_fragment:kd,dithering_pars_fragment:Gd,roughnessmap_fragment:Hd,roughnessmap_pars_fragment:Vd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:Xd,shadowmap_vertex:qd,shadowmask_pars_fragment:Yd,skinbase_vertex:$d,skinning_pars_vertex:Zd,skinning_vertex:Jd,skinnormal_vertex:Kd,specularmap_fragment:jd,specularmap_pars_fragment:Qd,tonemapping_fragment:tf,tonemapping_pars_fragment:ef,transmission_fragment:nf,transmission_pars_fragment:sf,uv_pars_fragment:rf,uv_pars_vertex:af,uv_vertex:of,worldpos_vertex:lf,background_vert:cf,background_frag:hf,backgroundCube_vert:uf,backgroundCube_frag:df,cube_vert:ff,cube_frag:pf,depth_vert:mf,depth_frag:gf,distanceRGBA_vert:vf,distanceRGBA_frag:xf,equirect_vert:_f,equirect_frag:yf,linedashed_vert:Mf,linedashed_frag:Sf,meshbasic_vert:bf,meshbasic_frag:wf,meshlambert_vert:Ef,meshlambert_frag:Tf,meshmatcap_vert:Af,meshmatcap_frag:Cf,meshnormal_vert:Rf,meshnormal_frag:Pf,meshphong_vert:Lf,meshphong_frag:Df,meshphysical_vert:If,meshphysical_frag:Uf,meshtoon_vert:Nf,meshtoon_frag:Ff,points_vert:Of,points_frag:zf,shadow_vert:Bf,shadow_frag:kf,sprite_vert:Gf,sprite_frag:Hf},pt={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},fn={basic:{uniforms:Be([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Be([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Be([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Be([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Be([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Be([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Be([pt.points,pt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Be([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Be([pt.common,pt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Be([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Be([pt.sprite,pt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Be([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Be([pt.lights,pt.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};fn.physical={uniforms:Be([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Vs={r:0,b:0,g:0},si=new Ge,Vf=new ne;function Wf(s,t,e,n,i,r,a){const o=new ft(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function x(S){let _=!1;const v=m(S);v===null?p(o,l):v&&v.isColor&&(p(v,1),_=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(S,_){const v=m(_);v&&(v.isCubeTexture||v.mapping===vr)?(h===void 0&&(h=new It(new In(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Ji(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),si.copy(_.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vf.makeRotationFromEuler(si)),h.material.toneMapped=ee.getTransfer(v.colorSpace)!==ce,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new It(new ln(2,2),new hn({name:"BackgroundMaterial",uniforms:Ji(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,_){S.getRGB(Vs,yc(s)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:x,addToRenderList:g}}function Xf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(y,L,O,F,H){let V=!1;const k=u(F,O,L);r!==k&&(r=k,c(r.object)),V=f(y,F,O,H),V&&m(y,F,O,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(y,L,O,F),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,L,O){const F=O.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let V=H[L.id];V===void 0&&(V={},H[L.id]=V);let k=V[F];return k===void 0&&(k=d(l()),V[F]=k),k}function d(y){const L=[],O=[],F=[];for(let H=0;H<e;H++)L[H]=0,O[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,L,O,F){const H=r.attributes,V=L.attributes;let k=0;const G=O.getAttributes();for(const B in G)if(G[B].location>=0){const K=H[B];let q=V[B];if(q===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),K===void 0||K.attribute!==q||q&&K.data!==q.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function m(y,L,O,F){const H={},V=L.attributes;let k=0;const G=O.getAttributes();for(const B in G)if(G[B].location>=0){let K=V[B];K===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const q={};q.attribute=K,K&&K.data&&(q.data=K.data),H[B]=q,k++}r.attributes=H,r.attributesNum=k,r.index=F}function x(){const y=r.newAttributes;for(let L=0,O=y.length;L<O;L++)y[L]=0}function g(y){p(y,0)}function p(y,L){const O=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;O[y]=1,F[y]===0&&(s.enableVertexAttribArray(y),F[y]=1),H[y]!==L&&(s.vertexAttribDivisor(y,L),H[y]=L)}function S(){const y=r.newAttributes,L=r.enabledAttributes;for(let O=0,F=L.length;O<F;O++)L[O]!==y[O]&&(s.disableVertexAttribArray(O),L[O]=0)}function _(y,L,O,F,H,V,k){k===!0?s.vertexAttribIPointer(y,L,O,H,V):s.vertexAttribPointer(y,L,O,F,H,V)}function v(y,L,O,F){x();const H=F.attributes,V=O.getAttributes(),k=L.defaultAttributeValues;for(const G in V){const B=V[G];if(B.location>=0){let tt=H[G];if(tt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){const K=tt.normalized,q=tt.itemSize,rt=t.get(tt);if(rt===void 0)continue;const Nt=rt.buffer,Y=rt.type,st=rt.bytesPerElement,vt=Y===s.INT||Y===s.UNSIGNED_INT||tt.gpuType===no;if(tt.isInterleavedBufferAttribute){const at=tt.data,Et=at.stride,Ot=tt.offset;if(at.isInstancedInterleavedBuffer){for(let Ft=0;Ft<B.locationSize;Ft++)p(B.location+Ft,at.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ft=0;Ft<B.locationSize;Ft++)g(B.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,Nt);for(let Ft=0;Ft<B.locationSize;Ft++)_(B.location+Ft,q/B.locationSize,Y,K,Et*st,(Ot+q/B.locationSize*Ft)*st,vt)}else{if(tt.isInstancedBufferAttribute){for(let at=0;at<B.locationSize;at++)p(B.location+at,tt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let at=0;at<B.locationSize;at++)g(B.location+at);s.bindBuffer(s.ARRAY_BUFFER,Nt);for(let at=0;at<B.locationSize;at++)_(B.location+at,q/B.locationSize,Y,K,q*st,q/B.locationSize*at*st,vt)}}else if(k!==void 0){const K=k[G];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(B.location,K);break;case 3:s.vertexAttrib3fv(B.location,K);break;case 4:s.vertexAttrib4fv(B.location,K);break;default:s.vertexAttrib1fv(B.location,K)}}}}S()}function A(){R();for(const y in n){const L=n[y];for(const O in L){const F=L[O];for(const H in F)h(F[H].object),delete F[H];delete L[O]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const O in L){const F=L[O];for(const H in F)h(F[H].object),delete F[H];delete L[O]}delete n[y.id]}function E(y){for(const L in n){const O=n[L];if(O[y.id]===void 0)continue;const F=O[y.id];for(const H in F)h(F[H].object),delete F[H];delete O[y.id]}}function R(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function qf(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==cn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const R=E===Ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Nn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==vn&&!R)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function $f(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new li,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const S=r?0:n,_=S*4;let v=p.clippingState||null;l.value=v,v=h(m,d,_,f);for(let A=0;A!==_;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=f;_!==x;++_,v+=4)a.copy(u[_]).applyMatrix4(S,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Zf(s){let t=new WeakMap;function e(a,o){return o===va?a.mapping=qi:o===xa&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===va||o===xa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ru(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class wc extends Mc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,il=[.125,.215,.35,.446,.526,.582],ui=20,Yr=new wc,sl=new ft;let $r=null,Zr=0,Jr=0,Kr=!1;const ci=(1+Math.sqrt(5))/2,Ii=1/ci,rl=[new P(-ci,Ii,0),new P(ci,Ii,0),new P(-Ii,0,ci),new P(Ii,0,ci),new P(0,ci,-Ii),new P(0,ci,Ii),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class al{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){$r=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($r,Zr,Jr),this._renderer.xr.enabled=Kr,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$r=this._renderer.getRenderTarget(),Zr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Ms,format:cn,colorSpace:Ki,depthBuffer:!1},i=ol(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(r)),this._blurMaterial=Kf(r,t,e)}return i}_compileMaterial(t){const e=new It(this._lodPlanes[0],t);this._renderer.compile(e,Yr)}_sceneToCubeUV(t,e,n,i){const o=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(sl),h.toneMapping=$n,h.autoClear=!1;const f=new me({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),m=new It(new In,f);let x=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(sl),x=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const _=this._cubeSize;Ws(i,S*_,p>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===qi||t.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ll());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Yr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rl[(i-r-1)%rl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new It(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):ui;g>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ui}`);const p=[];let S=0;for(let E=0;E<ui;++E){const R=E/x,M=Math.exp(-R*R/2);p.push(M),E===0?S+=M:E<g&&(S+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const v=this._sizeLods[i],A=3*v*(i>_-ki?i-_+ki:0),w=4*(this._cubeSize-v);Ws(e,A,w,3*v,2*v),l.setRenderTarget(e),l.render(u,Yr)}}function Jf(s){const t=[],e=[],n=[];let i=s;const r=s-ki+1+il.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ki?l=il[a-s+ki-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,S=new Float32Array(x*m*f),_=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,R=w>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];S.set(M,x*m*w),_.set(d,g*m*w);const y=[w,w,w,w,w,w];v.set(y,p*m*w)}const A=new xe;A.setAttribute("position",new Te(S,x)),A.setAttribute("uv",new Te(_,g)),A.setAttribute("faceIndex",new Te(v,p)),t.push(A),i>ki&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ol(s,t,e){const n=new gi(s,t,e);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Kf(s,t,e){const n=new Float32Array(ui),i=new P(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ll(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function cl(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function uo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===va||l===xa,h=l===qi||l===Yi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new al(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new al(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Qf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function tp(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(f!==null){const S=f.array;x=f.version;for(let _=0,v=S.length;_<v;_+=3){const A=S[_+0],w=S[_+1],E=S[_+2];d.push(A,w,w,E,E,A)}}else if(m!==void 0){const S=m.array;x=m.version;for(let _=0,v=S.length/3-1;_<v;_+=3){const A=_+0,w=_+1,E=_+2;d.push(A,w,w,E,E,A)}}else return;const g=new(dc(d)?_c:xc)(d,1);g.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ep(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S]*x[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function np(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ip(s,t,e){const n=new WeakMap,i=new be;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let A=o.attributes.position.count*v,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const E=new Float32Array(A*w*4*u),R=new pc(E,A,w,u);R.type=vn,R.needsUpdate=!0;const M=v*4;for(let L=0;L<u;L++){const O=p[L],F=S[L],H=_[L],V=A*w*4*L;for(let k=0;k<O.count;k++){const G=k*M;m===!0&&(i.fromBufferAttribute(O,k),E[V+G+0]=i.x,E[V+G+1]=i.y,E[V+G+2]=i.z,E[V+G+3]=0),x===!0&&(i.fromBufferAttribute(F,k),E[V+G+4]=i.x,E[V+G+5]=i.y,E[V+G+6]=i.z,E[V+G+7]=0),g===!0&&(i.fromBufferAttribute(H,k),E[V+G+8]=i.x,E[V+G+9]=i.y,E[V+G+10]=i.z,E[V+G+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new Q(A,w)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function sp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Ec extends Oe{constructor(t,e,n,i,r,a,o,l,c,h=Vi){if(h!==Vi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vi&&(n=mi),n===void 0&&h===Zi&&(n=$i),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tc=new Oe,hl=new Ec(1,1),Ac=new pc,Cc=new Vh,Rc=new Sc,ul=[],dl=[],fl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function ts(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ul[i];if(r===void 0&&(r=new Float32Array(i),ul[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _r(s,t){let e=dl[t];e===void 0&&(e=new Int32Array(t),dl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function rp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function cp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;ml.set(n),s.uniformMatrix2fv(this.addr,!1,ml),Re(e,n)}}function hp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;pl.set(n),s.uniformMatrix3fv(this.addr,!1,pl),Re(e,n)}}function up(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;fl.set(n),s.uniformMatrix4fv(this.addr,!1,fl),Re(e,n)}}function dp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function gp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function _p(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function yp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(hl.compareFunction=uc,r=hl):r=Tc,e.setTexture2D(t||r,i)}function Mp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Cc,i)}function Sp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Rc,i)}function bp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ac,i)}function wp(s){switch(s){case 5126:return rp;case 35664:return ap;case 35665:return op;case 35666:return lp;case 35674:return cp;case 35675:return hp;case 35676:return up;case 5124:case 35670:return dp;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return gp;case 36294:return vp;case 36295:return xp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return bp}}function Ep(s,t){s.uniform1fv(this.addr,t)}function Tp(s,t){const e=ts(t,this.size,2);s.uniform2fv(this.addr,e)}function Ap(s,t){const e=ts(t,this.size,3);s.uniform3fv(this.addr,e)}function Cp(s,t){const e=ts(t,this.size,4);s.uniform4fv(this.addr,e)}function Rp(s,t){const e=ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Pp(s,t){const e=ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Lp(s,t){const e=ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Dp(s,t){s.uniform1iv(this.addr,t)}function Ip(s,t){s.uniform2iv(this.addr,t)}function Up(s,t){s.uniform3iv(this.addr,t)}function Np(s,t){s.uniform4iv(this.addr,t)}function Fp(s,t){s.uniform1uiv(this.addr,t)}function Op(s,t){s.uniform2uiv(this.addr,t)}function zp(s,t){s.uniform3uiv(this.addr,t)}function Bp(s,t){s.uniform4uiv(this.addr,t)}function kp(s,t,e){const n=this.cache,i=t.length,r=_r(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Tc,r[a])}function Gp(s,t,e){const n=this.cache,i=t.length,r=_r(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Cc,r[a])}function Hp(s,t,e){const n=this.cache,i=t.length,r=_r(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Rc,r[a])}function Vp(s,t,e){const n=this.cache,i=t.length,r=_r(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ac,r[a])}function Wp(s){switch(s){case 5126:return Ep;case 35664:return Tp;case 35665:return Ap;case 35666:return Cp;case 35674:return Rp;case 35675:return Pp;case 35676:return Lp;case 5124:case 35670:return Dp;case 35667:case 35671:return Ip;case 35668:case 35672:return Up;case 35669:case 35673:return Np;case 5125:return Fp;case 36294:return Op;case 36295:return zp;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Vp}}class Xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wp(e.type)}}class qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wp(e.type)}}class Yp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function gl(s,t){s.seq.push(t),s.map[t.id]=t}function $p(s,t,e){const n=s.name,i=n.length;for(jr.lastIndex=0;;){const r=jr.exec(n),a=jr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){gl(e,c===void 0?new Xp(o,s,t):new qp(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Yp(o),gl(e,u)),e=u}}}class dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);$p(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function vl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Zp=37297;let Jp=0;function Kp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const xl=new Xt;function jp(s){ee._getMatrix(xl,ee.workingColorSpace,s);const t=`mat3( ${xl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case xr:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _l(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Kp(s.getShaderSource(t),a)}else return i}function Qp(s,t){const e=jp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tm(s,t){let e;switch(t){case vh:e="Linear";break;case xh:e="Reinhard";break;case _h:e="Cineon";break;case tc:e="ACESFilmic";break;case Mh:e="AgX";break;case Sh:e="Neutral";break;case yh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xs=new P;function em(){ee.getLuminanceCoefficients(Xs);const s=Xs.x.toFixed(4),t=Xs.y.toFixed(4),e=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function im(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function fs(s){return s!==""}function yl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ml(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(s){return s.replace(rm,om)}const am=new Map;function om(s,t){let e=Yt[t];if(e===void 0){const n=am.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Za(e)}const lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(s){return s.replace(lm,cm)}function cm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ql?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function um(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function fm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case eo:t="ENVMAP_BLENDING_MULTIPLY";break;case mh:t="ENVMAP_BLENDING_MIX";break;case gh:t="ENVMAP_BLENDING_ADD";break}return t}function pm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=hm(e),c=um(e),h=dm(e),u=fm(e),d=pm(e),f=nm(e),m=im(r),x=i.createProgram();let g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(g=[bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Yt.tonemapping_pars_fragment:"",e.toneMapping!==$n?tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Qp("linearToOutputTexel",e.outputColorSpace),em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),a=Za(a),a=yl(a,e),a=Ml(a,e),o=Za(o),o=yl(o,e),o=Ml(o,e),a=Sl(a),o=Sl(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=S+g+a,v=S+p+o,A=vl(i,i.VERTEX_SHADER,_),w=vl(i,i.FRAGMENT_SHADER,v);i.attachShader(x,A),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(L){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(A).trim(),H=i.getShaderInfoLog(w).trim();let V=!0,k=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,w);else{const G=_l(i,A,"vertex"),B=_l(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+G+`
`+B)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||H==="")&&(k=!1);k&&(L.diagnostics={runnable:V,programLog:O,vertexShader:{log:F,prefix:g},fragmentShader:{log:H,prefix:p}})}i.deleteShader(A),i.deleteShader(w),R=new dr(i,x),M=sm(i,x)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,Zp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let gm=0;class vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xm(t),e.set(t,n)),n}}class xm{constructor(t){this.id=gm++,this.code=t,this.usedTimes=0}}function _m(s,t,e,n,i,r,a){const o=new gc,l=new vm,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,y,L,O,F){const H=O.fog,V=F.geometry,k=M.isMeshStandardMaterial?O.environment:null,G=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),B=G&&G.mapping===vr?G.image.height:null,tt=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,q=K!==void 0?K.length:0;let rt=0;V.morphAttributes.position!==void 0&&(rt=1),V.morphAttributes.normal!==void 0&&(rt=2),V.morphAttributes.color!==void 0&&(rt=3);let Nt,Y,st,vt;if(tt){const le=fn[tt];Nt=le.vertexShader,Y=le.fragmentShader}else Nt=M.vertexShader,Y=M.fragmentShader,l.update(M),st=l.getVertexShaderID(M),vt=l.getFragmentShaderID(M);const at=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,Ft=F.isBatchedMesh===!0,$t=!!M.map,j=!!M.matcap,ht=!!G,D=!!M.aoMap,Rt=!!M.lightMap,ot=!!M.bumpMap,bt=!!M.normalMap,lt=!!M.displacementMap,zt=!!M.emissiveMap,St=!!M.metalnessMap,C=!!M.roughnessMap,b=M.anisotropy>0,z=M.clearcoat>0,Z=M.dispersion>0,nt=M.iridescence>0,J=M.sheen>0,Tt=M.transmission>0,dt=b&&!!M.anisotropyMap,yt=z&&!!M.clearcoatMap,Kt=z&&!!M.clearcoatNormalMap,ct=z&&!!M.clearcoatRoughnessMap,At=nt&&!!M.iridescenceMap,kt=nt&&!!M.iridescenceThicknessMap,Gt=J&&!!M.sheenColorMap,Ct=J&&!!M.sheenRoughnessMap,Qt=!!M.specularMap,qt=!!M.specularColorMap,de=!!M.specularIntensityMap,I=Tt&&!!M.transmissionMap,gt=Tt&&!!M.thicknessMap,$=!!M.gradientMap,et=!!M.alphaMap,Mt=M.alphaTest>0,xt=!!M.alphaHash,Vt=!!M.extensions;let Me=$n;M.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Me=s.toneMapping);const Le={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:Nt,fragmentShader:Y,defines:M.defines,customVertexShaderID:st,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ki,alphaToCoverage:!!M.alphaToCoverage,map:$t,matcap:j,envMap:ht,envMapMode:ht&&G.mapping,envMapCubeUVHeight:B,aoMap:D,lightMap:Rt,bumpMap:ot,normalMap:bt,displacementMap:d&&lt,emissiveMap:zt,normalMapObjectSpace:bt&&M.normalMapType===Th,normalMapTangentSpace:bt&&M.normalMapType===co,metalnessMap:St,roughnessMap:C,anisotropy:b,anisotropyMap:dt,clearcoat:z,clearcoatMap:yt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:ct,dispersion:Z,iridescence:nt,iridescenceMap:At,iridescenceThicknessMap:kt,sheen:J,sheenColorMap:Gt,sheenRoughnessMap:Ct,specularMap:Qt,specularColorMap:qt,specularIntensityMap:de,transmission:Tt,transmissionMap:I,thicknessMap:gt,gradientMap:$,opaque:M.transparent===!1&&M.blending===Hi&&M.alphaToCoverage===!1,alphaMap:et,alphaTest:Mt,alphaHash:xt,combine:M.combine,mapUv:$t&&x(M.map.channel),aoMapUv:D&&x(M.aoMap.channel),lightMapUv:Rt&&x(M.lightMap.channel),bumpMapUv:ot&&x(M.bumpMap.channel),normalMapUv:bt&&x(M.normalMap.channel),displacementMapUv:lt&&x(M.displacementMap.channel),emissiveMapUv:zt&&x(M.emissiveMap.channel),metalnessMapUv:St&&x(M.metalnessMap.channel),roughnessMapUv:C&&x(M.roughnessMap.channel),anisotropyMapUv:dt&&x(M.anisotropyMap.channel),clearcoatMapUv:yt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(M.sheenRoughnessMap.channel),specularMapUv:Qt&&x(M.specularMap.channel),specularColorMapUv:qt&&x(M.specularColorMap.channel),specularIntensityMapUv:de&&x(M.specularIntensityMap.channel),transmissionMapUv:I&&x(M.transmissionMap.channel),thicknessMapUv:gt&&x(M.thicknessMap.channel),alphaMapUv:et&&x(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(bt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&($t||et),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Et,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,decodeVideoTexture:$t&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===ce,decodeVideoTextureEmissive:zt&&M.emissiveMap.isVideoTexture===!0&&ee.getTransfer(M.emissiveMap.colorSpace)===ce,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_e,flipSided:M.side===He,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Vt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&M.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(S(y,M),_(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function _(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const y=m[M.type];let L;if(y){const O=fn[y];L=eu.clone(O.uniforms)}else L=M.uniforms;return L}function A(M,y){let L;for(let O=0,F=h.length;O<F;O++){const H=h[O];if(H.cacheKey===y){L=H,++L.usedTimes;break}}return L===void 0&&(L=new mm(s,y,M,r),h.push(L)),L}function w(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:R}}function ym(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Mm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function wl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function El(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,m,x,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function o(u,d,f,m,x,g){const p=a(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,m,x,g){const p=a(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Mm),n.length>1&&n.sort(d||wl),i.length>1&&i.sort(d||wl)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Sm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new El,s.set(n,[a])):i>=r.length?(a=new El,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function bm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ft};break;case"SpotLight":e={position:new P,direction:new P,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function wm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Em=0;function Tm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Am(s){const t=new bm,e=wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new ne,a=new ne;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,S=0,_=0,v=0,A=0,w=0,E=0;c.sort(Tm);for(let M=0,y=c.length;M<y;M++){const L=c[M],O=L.color,F=L.intensity,H=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*F,u+=O.g*F,d+=O.b*F;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],F);E++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,B=e.get(L);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=L.shadow.matrix,S++}n.directional[f]=k,f++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(O).multiplyScalar(F),k.distance=H,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[x]=k;const G=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,G.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[x]=G.matrix,L.castShadow){const B=e.get(L);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=V,v++}x++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(O).multiplyScalar(F),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=k,g++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const G=L.shadow,B=e.get(L);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=L.shadow.matrix,_++}n.point[m]=k,m++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(F),k.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[p]=k,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==_||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,R.directionalLength=f,R.pointLength=m,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=_,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=E,n.version=Em++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const _=c[p];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(_.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Tl(s){const t=new Am(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Cm(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Tl(s),t.set(i,[o])):r>=a.length?(o=new Tl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Rm extends jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pm extends jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Im(s,t,e){let n=new ho;const i=new Q,r=new Q,a=new be,o=new Rm({depthPacking:Eh}),l=new Pm,c={},h=e.maxTextureSize,u={[Un]:He,[He]:Un,[_e]:_e},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:Lm,fragmentShader:Dm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new xe;m.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new It(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let p=this.type;this.render=function(w,E,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Yn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==An&&this.type===An,H=p===An&&this.type!==An;for(let V=0,k=w.length;V<k;V++){const G=w[V],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const tt=B.getFrameExtents();if(i.multiply(tt),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,B.mapSize.y=r.y)),B.map===null||F===!0||H===!0){const q=this.type!==An?{minFilter:Ze,magFilter:Ze}:{};B.map!==null&&B.map.dispose(),B.map=new gi(i.x,i.y,q),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const K=B.getViewportCount();for(let q=0;q<K;q++){const rt=B.getViewport(q);a.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),O.viewport(a),B.updateMatrices(G,q),n=B.getFrustum(),v(E,R,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===An&&S(B,R),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(M,y,L)};function S(w,E){const R=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new gi(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,R,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,R,f,x,null)}function _(w,E,R,M){let y=null;const L=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)y=L;else if(y=R.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=y.uuid,F=E.uuid;let H=c[O];H===void 0&&(H={},c[O]=H);let V=H[F];V===void 0&&(V=y.clone(),H[F]=V,E.addEventListener("dispose",A)),y=V}if(y.visible=E.visible,y.wireframe=E.wireframe,M===An?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=R}return y}function v(w,E,R,M,y){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===An)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const F=t.update(w),H=w.material;if(Array.isArray(H)){const V=F.groups;for(let k=0,G=V.length;k<G;k++){const B=V[k],tt=H[B.materialIndex];if(tt&&tt.visible){const K=_(w,tt,M,y);w.onBeforeShadow(s,w,E,R,F,K,B),s.renderBufferDirect(R,null,F,K,w,B),w.onAfterShadow(s,w,E,R,F,K,B)}}}else if(H.visible){const V=_(w,H,M,y);w.onBeforeShadow(s,w,E,R,F,V,null),s.renderBufferDirect(R,null,F,V,w,null),w.onAfterShadow(s,w,E,R,F,V,null)}}const O=w.children;for(let F=0,H=O.length;F<H;F++)v(O[F],E,R,M,y)}function A(w){w.target.removeEventListener("dispose",A);for(const R in c){const M=c[R],y=w.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Um={[ha]:ua,[da]:ma,[fa]:ga,[Xi]:pa,[ua]:ha,[ma]:da,[ga]:fa,[pa]:Xi};function Nm(s,t){function e(){let I=!1;const gt=new be;let $=null;const et=new be(0,0,0,0);return{setMask:function(Mt){$!==Mt&&!I&&(s.colorMask(Mt,Mt,Mt,Mt),$=Mt)},setLocked:function(Mt){I=Mt},setClear:function(Mt,xt,Vt,Me,Le){Le===!0&&(Mt*=Me,xt*=Me,Vt*=Me),gt.set(Mt,xt,Vt,Me),et.equals(gt)===!1&&(s.clearColor(Mt,xt,Vt,Me),et.copy(gt))},reset:function(){I=!1,$=null,et.set(-1,0,0,0)}}}function n(){let I=!1,gt=!1,$=null,et=null,Mt=null;return{setReversed:function(xt){if(gt!==xt){const Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Me=Mt;Mt=null,this.setClear(Me)}gt=xt},getReversed:function(){return gt},setTest:function(xt){xt?at(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(xt){$!==xt&&!I&&(s.depthMask(xt),$=xt)},setFunc:function(xt){if(gt&&(xt=Um[xt]),et!==xt){switch(xt){case ha:s.depthFunc(s.NEVER);break;case ua:s.depthFunc(s.ALWAYS);break;case da:s.depthFunc(s.LESS);break;case Xi:s.depthFunc(s.LEQUAL);break;case fa:s.depthFunc(s.EQUAL);break;case pa:s.depthFunc(s.GEQUAL);break;case ma:s.depthFunc(s.GREATER);break;case ga:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=xt}},setLocked:function(xt){I=xt},setClear:function(xt){Mt!==xt&&(gt&&(xt=1-xt),s.clearDepth(xt),Mt=xt)},reset:function(){I=!1,$=null,et=null,Mt=null,gt=!1}}}function i(){let I=!1,gt=null,$=null,et=null,Mt=null,xt=null,Vt=null,Me=null,Le=null;return{setTest:function(le){I||(le?at(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(le){gt!==le&&!I&&(s.stencilMask(le),gt=le)},setFunc:function(le,en,yn){($!==le||et!==en||Mt!==yn)&&(s.stencilFunc(le,en,yn),$=le,et=en,Mt=yn)},setOp:function(le,en,yn){(xt!==le||Vt!==en||Me!==yn)&&(s.stencilOp(le,en,yn),xt=le,Vt=en,Me=yn)},setLocked:function(le){I=le},setClear:function(le){Le!==le&&(s.clearStencil(le),Le=le)},reset:function(){I=!1,gt=null,$=null,et=null,Mt=null,xt=null,Vt=null,Me=null,Le=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,S=null,_=null,v=null,A=null,w=null,E=new ft(0,0,0),R=0,M=!1,y=null,L=null,O=null,F=null,H=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,G=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=G>=2);let tt=null,K={};const q=s.getParameter(s.SCISSOR_BOX),rt=s.getParameter(s.VIEWPORT),Nt=new be().fromArray(q),Y=new be().fromArray(rt);function st(I,gt,$,et){const Mt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(I,xt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<$;Vt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(gt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return xt}const vt={};vt[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(s.DEPTH_TEST),a.setFunc(Xi),ot(!1),bt(Do),at(s.CULL_FACE),D(Yn);function at(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Et(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Ot(I,gt){return u[I]!==gt?(s.bindFramebuffer(I,gt),u[I]=gt,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=gt),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ft(I,gt){let $=f,et=!1;if(I){$=d.get(gt),$===void 0&&($=[],d.set(gt,$));const Mt=I.textures;if($.length!==Mt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Vt=Mt.length;xt<Vt;xt++)$[xt]=s.COLOR_ATTACHMENT0+xt;$.length=Mt.length,et=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,et=!0);et&&s.drawBuffers($)}function $t(I){return m!==I?(s.useProgram(I),m=I,!0):!1}const j={[hi]:s.FUNC_ADD,[jc]:s.FUNC_SUBTRACT,[Qc]:s.FUNC_REVERSE_SUBTRACT};j[th]=s.MIN,j[eh]=s.MAX;const ht={[nh]:s.ZERO,[ih]:s.ONE,[sh]:s.SRC_COLOR,[la]:s.SRC_ALPHA,[hh]:s.SRC_ALPHA_SATURATE,[lh]:s.DST_COLOR,[ah]:s.DST_ALPHA,[rh]:s.ONE_MINUS_SRC_COLOR,[ca]:s.ONE_MINUS_SRC_ALPHA,[ch]:s.ONE_MINUS_DST_COLOR,[oh]:s.ONE_MINUS_DST_ALPHA,[uh]:s.CONSTANT_COLOR,[dh]:s.ONE_MINUS_CONSTANT_COLOR,[fh]:s.CONSTANT_ALPHA,[ph]:s.ONE_MINUS_CONSTANT_ALPHA};function D(I,gt,$,et,Mt,xt,Vt,Me,Le,le){if(I===Yn){x===!0&&(Et(s.BLEND),x=!1);return}if(x===!1&&(at(s.BLEND),x=!0),I!==Kc){if(I!==g||le!==M){if((p!==hi||v!==hi)&&(s.blendEquation(s.FUNC_ADD),p=hi,v=hi),le)switch(I){case Hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pe:s.blendFunc(s.ONE,s.ONE);break;case Io:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pe:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Io:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,_=null,A=null,w=null,E.set(0,0,0),R=0,g=I,M=le}return}Mt=Mt||gt,xt=xt||$,Vt=Vt||et,(gt!==p||Mt!==v)&&(s.blendEquationSeparate(j[gt],j[Mt]),p=gt,v=Mt),($!==S||et!==_||xt!==A||Vt!==w)&&(s.blendFuncSeparate(ht[$],ht[et],ht[xt],ht[Vt]),S=$,_=et,A=xt,w=Vt),(Me.equals(E)===!1||Le!==R)&&(s.blendColor(Me.r,Me.g,Me.b,Le),E.copy(Me),R=Le),g=I,M=!1}function Rt(I,gt){I.side===_e?Et(s.CULL_FACE):at(s.CULL_FACE);let $=I.side===He;gt&&($=!$),ot($),I.blending===Hi&&I.transparent===!1?D(Yn):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const et=I.stencilWrite;o.setTest(et),et&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),zt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function bt(I){I!==Zc?(at(s.CULL_FACE),I!==L&&(I===Do?s.cullFace(s.BACK):I===Jc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),L=I}function lt(I){I!==O&&(k&&s.lineWidth(I),O=I)}function zt(I,gt,$){I?(at(s.POLYGON_OFFSET_FILL),(F!==gt||H!==$)&&(s.polygonOffset(gt,$),F=gt,H=$)):Et(s.POLYGON_OFFSET_FILL)}function St(I){I?at(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function C(I){I===void 0&&(I=s.TEXTURE0+V-1),tt!==I&&(s.activeTexture(I),tt=I)}function b(I,gt,$){$===void 0&&(tt===null?$=s.TEXTURE0+V-1:$=tt);let et=K[$];et===void 0&&(et={type:void 0,texture:void 0},K[$]=et),(et.type!==I||et.texture!==gt)&&(tt!==$&&(s.activeTexture($),tt=$),s.bindTexture(I,gt||vt[I]),et.type=I,et.texture=gt)}function z(){const I=K[tt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Kt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(I){Nt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Nt.copy(I))}function Ct(I){Y.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Qt(I,gt){let $=c.get(gt);$===void 0&&($=new WeakMap,c.set(gt,$));let et=$.get(I);et===void 0&&(et=s.getUniformBlockIndex(gt,I.name),$.set(I,et))}function qt(I,gt){const et=c.get(gt).get(I);l.get(gt)!==et&&(s.uniformBlockBinding(gt,et,I.__bindingPointIndex),l.set(gt,et))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,K={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,S=null,_=null,v=null,A=null,w=null,E=new ft(0,0,0),R=0,M=!1,y=null,L=null,O=null,F=null,H=null,Nt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Et,bindFramebuffer:Ot,drawBuffers:Ft,useProgram:$t,setBlending:D,setMaterial:Rt,setFlipSided:ot,setCullFace:bt,setLineWidth:lt,setPolygonOffset:zt,setScissorTest:St,activeTexture:C,bindTexture:b,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:nt,texImage2D:At,texImage3D:kt,updateUBOMapping:Qt,uniformBlockBinding:qt,texStorage2D:Kt,texStorage3D:ct,texSubImage2D:J,texSubImage3D:Tt,compressedTexSubImage2D:dt,compressedTexSubImage3D:yt,scissor:Gt,viewport:Ct,reset:de}}function Al(s,t,e,n){const i=Fm(n);switch(e){case rc:return s*t;case oc:return s*t;case lc:return s*t*2;case ro:return s*t/i.components*i.byteLength;case ao:return s*t/i.components*i.byteLength;case cc:return s*t*2/i.components*i.byteLength;case oo:return s*t*2/i.components*i.byteLength;case ac:return s*t*3/i.components*i.byteLength;case cn:return s*t*4/i.components*i.byteLength;case lo:return s*t*4/i.components*i.byteLength;case or:case lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case cr:case hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sa:case wa:return Math.max(s,16)*Math.max(t,8)/4;case Ma:case ba:return Math.max(s,8)*Math.max(t,8)/2;case Ea:case Ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ur:case Ha:case Va:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hc:case Wa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xa:case qa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fm(s){switch(s){case Nn:case nc:return{byteLength:1,components:1};case gs:case ic:case Ms:return{byteLength:2,components:1};case io:case so:return{byteLength:2,components:4};case mi:case no:case vn:return{byteLength:4,components:1};case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Om(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,b){return f?new OffscreenCanvas(C,b):pr("canvas")}function x(C,b,z){let Z=1;const nt=St(C);if((nt.width>z||nt.height>z)&&(Z=z/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Z*nt.width),Tt=Math.floor(Z*nt.height);u===void 0&&(u=m(J,Tt));const dt=b?m(J,Tt):u;return dt.width=J,dt.height=Tt,dt.getContext("2d").drawImage(C,0,0,J,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+Tt+")."),dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(C,b,z,Z,nt=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=b;if(b===s.RED&&(z===s.FLOAT&&(J=s.R32F),z===s.HALF_FLOAT&&(J=s.R16F),z===s.UNSIGNED_BYTE&&(J=s.R8)),b===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.R8UI),z===s.UNSIGNED_SHORT&&(J=s.R16UI),z===s.UNSIGNED_INT&&(J=s.R32UI),z===s.BYTE&&(J=s.R8I),z===s.SHORT&&(J=s.R16I),z===s.INT&&(J=s.R32I)),b===s.RG&&(z===s.FLOAT&&(J=s.RG32F),z===s.HALF_FLOAT&&(J=s.RG16F),z===s.UNSIGNED_BYTE&&(J=s.RG8)),b===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RG8UI),z===s.UNSIGNED_SHORT&&(J=s.RG16UI),z===s.UNSIGNED_INT&&(J=s.RG32UI),z===s.BYTE&&(J=s.RG8I),z===s.SHORT&&(J=s.RG16I),z===s.INT&&(J=s.RG32I)),b===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RGB8UI),z===s.UNSIGNED_SHORT&&(J=s.RGB16UI),z===s.UNSIGNED_INT&&(J=s.RGB32UI),z===s.BYTE&&(J=s.RGB8I),z===s.SHORT&&(J=s.RGB16I),z===s.INT&&(J=s.RGB32I)),b===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),z===s.UNSIGNED_INT&&(J=s.RGBA32UI),z===s.BYTE&&(J=s.RGBA8I),z===s.SHORT&&(J=s.RGBA16I),z===s.INT&&(J=s.RGBA32I)),b===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),b===s.RGBA){const Tt=nt?xr:ee.getTransfer(Z);z===s.FLOAT&&(J=s.RGBA32F),z===s.HALF_FLOAT&&(J=s.RGBA16F),z===s.UNSIGNED_BYTE&&(J=Tt===ce?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(C,b){let z;return C?b===null||b===mi||b===$i?z=s.DEPTH24_STENCIL8:b===vn?z=s.DEPTH32F_STENCIL8:b===gs&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===mi||b===$i?z=s.DEPTH_COMPONENT24:b===vn?z=s.DEPTH_COMPONENT32F:b===gs&&(z=s.DEPTH_COMPONENT16),z}function A(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ze&&C.minFilter!==gn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){const b=C.target;b.removeEventListener("dispose",w),R(b),b.isVideoTexture&&h.delete(b)}function E(C){const b=C.target;b.removeEventListener("dispose",E),y(b)}function R(C){const b=n.get(C);if(b.__webglInit===void 0)return;const z=C.source,Z=d.get(z);if(Z){const nt=Z[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&M(C),Object.keys(Z).length===0&&d.delete(z)}n.remove(C)}function M(C){const b=n.get(C);s.deleteTexture(b.__webglTexture);const z=C.source,Z=d.get(z);delete Z[b.__cacheKey],a.memory.textures--}function y(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let nt=0;nt<b.__webglFramebuffer[Z].length;nt++)s.deleteFramebuffer(b.__webglFramebuffer[Z][nt]);else s.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)s.deleteFramebuffer(b.__webglFramebuffer[Z]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=C.textures;for(let Z=0,nt=z.length;Z<nt;Z++){const J=n.get(z[Z]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(z[Z])}n.remove(C)}let L=0;function O(){L=0}function F(){const C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function H(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function V(C,b){const z=n.get(C);if(C.isVideoTexture&&lt(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,C,b);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+b)}function k(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){Y(z,C,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+b)}function G(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){Y(z,C,b);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+b)}function B(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){st(z,C,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+b)}const tt={[_a]:s.REPEAT,[di]:s.CLAMP_TO_EDGE,[ya]:s.MIRRORED_REPEAT},K={[Ze]:s.NEAREST,[bh]:s.NEAREST_MIPMAP_NEAREST,[Es]:s.NEAREST_MIPMAP_LINEAR,[gn]:s.LINEAR,[wr]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},q={[Ah]:s.NEVER,[Ih]:s.ALWAYS,[Ch]:s.LESS,[uc]:s.LEQUAL,[Rh]:s.EQUAL,[Dh]:s.GEQUAL,[Ph]:s.GREATER,[Lh]:s.NOTEQUAL};function rt(C,b){if(b.type===vn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===gn||b.magFilter===wr||b.magFilter===Es||b.magFilter===fi||b.minFilter===gn||b.minFilter===wr||b.minFilter===Es||b.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,tt[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,tt[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,tt[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,K[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,K[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,q[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ze||b.minFilter!==Es&&b.minFilter!==fi||b.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Nt(C,b){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",w));const Z=b.source;let nt=d.get(Z);nt===void 0&&(nt={},d.set(Z,nt));const J=H(b);if(J!==C.__cacheKey){nt[J]===void 0&&(nt[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),nt[J].usedTimes++;const Tt=nt[C.__cacheKey];Tt!==void 0&&(nt[C.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(b)),C.__cacheKey=J,C.__webglTexture=nt[J].texture}return z}function Y(C,b,z){let Z=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=s.TEXTURE_3D);const nt=Nt(C,b),J=b.source;e.bindTexture(Z,C.__webglTexture,s.TEXTURE0+z);const Tt=n.get(J);if(J.version!==Tt.__version||nt===!0){e.activeTexture(s.TEXTURE0+z);const dt=ee.getPrimaries(ee.workingColorSpace),yt=b.colorSpace===Xn?null:ee.getPrimaries(b.colorSpace),Kt=b.colorSpace===Xn||dt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let ct=x(b.image,!1,i.maxTextureSize);ct=zt(b,ct);const At=r.convert(b.format,b.colorSpace),kt=r.convert(b.type);let Gt=_(b.internalFormat,At,kt,b.colorSpace,b.isVideoTexture);rt(Z,b);let Ct;const Qt=b.mipmaps,qt=b.isVideoTexture!==!0,de=Tt.__version===void 0||nt===!0,I=J.dataReady,gt=A(b,ct);if(b.isDepthTexture)Gt=v(b.format===Zi,b.type),de&&(qt?e.texStorage2D(s.TEXTURE_2D,1,Gt,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,Gt,ct.width,ct.height,0,At,kt,null));else if(b.isDataTexture)if(Qt.length>0){qt&&de&&e.texStorage2D(s.TEXTURE_2D,gt,Gt,Qt[0].width,Qt[0].height);for(let $=0,et=Qt.length;$<et;$++)Ct=Qt[$],qt?I&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Ct.width,Ct.height,At,kt,Ct.data):e.texImage2D(s.TEXTURE_2D,$,Gt,Ct.width,Ct.height,0,At,kt,Ct.data);b.generateMipmaps=!1}else qt?(de&&e.texStorage2D(s.TEXTURE_2D,gt,Gt,ct.width,ct.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct.width,ct.height,At,kt,ct.data)):e.texImage2D(s.TEXTURE_2D,0,Gt,ct.width,ct.height,0,At,kt,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Gt,Qt[0].width,Qt[0].height,ct.depth);for(let $=0,et=Qt.length;$<et;$++)if(Ct=Qt[$],b.format!==cn)if(At!==null)if(qt){if(I)if(b.layerUpdates.size>0){const Mt=Al(Ct.width,Ct.height,b.format,b.type);for(const xt of b.layerUpdates){const Vt=Ct.data.subarray(xt*Mt/Ct.data.BYTES_PER_ELEMENT,(xt+1)*Mt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,xt,Ct.width,Ct.height,1,At,Vt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Ct.width,Ct.height,ct.depth,At,Ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Gt,Ct.width,Ct.height,ct.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Ct.width,Ct.height,ct.depth,At,kt,Ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,Gt,Ct.width,Ct.height,ct.depth,0,At,kt,Ct.data)}else{qt&&de&&e.texStorage2D(s.TEXTURE_2D,gt,Gt,Qt[0].width,Qt[0].height);for(let $=0,et=Qt.length;$<et;$++)Ct=Qt[$],b.format!==cn?At!==null?qt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,Ct.width,Ct.height,At,Ct.data):e.compressedTexImage2D(s.TEXTURE_2D,$,Gt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?I&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Ct.width,Ct.height,At,kt,Ct.data):e.texImage2D(s.TEXTURE_2D,$,Gt,Ct.width,Ct.height,0,At,kt,Ct.data)}else if(b.isDataArrayTexture)if(qt){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Gt,ct.width,ct.height,ct.depth),I)if(b.layerUpdates.size>0){const $=Al(ct.width,ct.height,b.format,b.type);for(const et of b.layerUpdates){const Mt=ct.data.subarray(et*$/ct.data.BYTES_PER_ELEMENT,(et+1)*$/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,ct.width,ct.height,1,At,kt,Mt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,At,kt,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Gt,ct.width,ct.height,ct.depth,0,At,kt,ct.data);else if(b.isData3DTexture)qt?(de&&e.texStorage3D(s.TEXTURE_3D,gt,Gt,ct.width,ct.height,ct.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,At,kt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,Gt,ct.width,ct.height,ct.depth,0,At,kt,ct.data);else if(b.isFramebufferTexture){if(de)if(qt)e.texStorage2D(s.TEXTURE_2D,gt,Gt,ct.width,ct.height);else{let $=ct.width,et=ct.height;for(let Mt=0;Mt<gt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,Gt,$,et,0,At,kt,null),$>>=1,et>>=1}}else if(Qt.length>0){if(qt&&de){const $=St(Qt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Gt,$.width,$.height)}for(let $=0,et=Qt.length;$<et;$++)Ct=Qt[$],qt?I&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,At,kt,Ct):e.texImage2D(s.TEXTURE_2D,$,Gt,At,kt,Ct);b.generateMipmaps=!1}else if(qt){if(de){const $=St(ct);e.texStorage2D(s.TEXTURE_2D,gt,Gt,$.width,$.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,At,kt,ct)}else e.texImage2D(s.TEXTURE_2D,0,Gt,At,kt,ct);g(b)&&p(Z),Tt.__version=J.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function st(C,b,z){if(b.image.length!==6)return;const Z=Nt(C,b),nt=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const J=n.get(nt);if(nt.version!==J.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);const Tt=ee.getPrimaries(ee.workingColorSpace),dt=b.colorSpace===Xn?null:ee.getPrimaries(b.colorSpace),yt=b.colorSpace===Xn||Tt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,ct=b.image[0]&&b.image[0].isDataTexture,At=[];for(let et=0;et<6;et++)!Kt&&!ct?At[et]=x(b.image[et],!0,i.maxCubemapSize):At[et]=ct?b.image[et].image:b.image[et],At[et]=zt(b,At[et]);const kt=At[0],Gt=r.convert(b.format,b.colorSpace),Ct=r.convert(b.type),Qt=_(b.internalFormat,Gt,Ct,b.colorSpace),qt=b.isVideoTexture!==!0,de=J.__version===void 0||Z===!0,I=nt.dataReady;let gt=A(b,kt);rt(s.TEXTURE_CUBE_MAP,b);let $;if(Kt){qt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,kt.width,kt.height);for(let et=0;et<6;et++){$=At[et].mipmaps;for(let Mt=0;Mt<$.length;Mt++){const xt=$[Mt];b.format!==cn?Gt!==null?qt?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,0,0,xt.width,xt.height,Gt,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,Qt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,0,0,xt.width,xt.height,Gt,Ct,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt,Qt,xt.width,xt.height,0,Gt,Ct,xt.data)}}}else{if($=b.mipmaps,qt&&de){$.length>0&&gt++;const et=St(At[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,et.width,et.height)}for(let et=0;et<6;et++)if(ct){qt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,At[et].width,At[et].height,Gt,Ct,At[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Qt,At[et].width,At[et].height,0,Gt,Ct,At[et].data);for(let Mt=0;Mt<$.length;Mt++){const Vt=$[Mt].image[et].image;qt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,0,0,Vt.width,Vt.height,Gt,Ct,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,Qt,Vt.width,Vt.height,0,Gt,Ct,Vt.data)}}else{qt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Gt,Ct,At[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Qt,Gt,Ct,At[et]);for(let Mt=0;Mt<$.length;Mt++){const xt=$[Mt];qt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,0,0,Gt,Ct,xt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt+1,Qt,Gt,Ct,xt.image[et])}}}g(b)&&p(s.TEXTURE_CUBE_MAP),J.__version=nt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function vt(C,b,z,Z,nt,J){const Tt=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),yt=_(z.internalFormat,Tt,dt,z.colorSpace),Kt=n.get(b),ct=n.get(z);if(ct.__renderTarget=b,!Kt.__hasExternalTextures){const At=Math.max(1,b.width>>J),kt=Math.max(1,b.height>>J);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,yt,At,kt,b.depth,0,Tt,dt,null):e.texImage2D(nt,J,yt,At,kt,0,Tt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),bt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,nt,ct.__webglTexture,0,ot(b)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,nt,ct.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(C,b,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){const Z=b.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,J=v(b.stencilBuffer,nt),Tt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=ot(b);bt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,J,b.width,b.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,J,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,J,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,C)}else{const Z=b.textures;for(let nt=0;nt<Z.length;nt++){const J=Z[nt],Tt=r.convert(J.format,J.colorSpace),dt=r.convert(J.type),yt=_(J.internalFormat,Tt,dt,J.colorSpace),Kt=ot(b);z&&bt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,yt,b.width,b.height):bt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,yt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,yt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const nt=Z.__webglTexture,J=ot(b);if(b.depthTexture.format===Vi)bt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(b.depthTexture.format===Zi)bt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Ot(C){const b=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=Z}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Et(b.__webglFramebuffer,C)}else if(z){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=s.createRenderbuffer(),at(b.__webglDepthbuffer[Z],C,!1);else{const nt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),at(b.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,nt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(C,b,z){const Z=n.get(C);b!==void 0&&vt(Z.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ot(C)}function $t(C){const b=C.texture,z=n.get(C),Z=n.get(b);C.addEventListener("dispose",E);const nt=C.textures,J=C.isWebGLCubeRenderTarget===!0,Tt=nt.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=b.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let yt=0;yt<b.mipmaps.length;yt++)z.__webglFramebuffer[dt][yt]=s.createFramebuffer()}else z.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)z.__webglFramebuffer[dt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let dt=0,yt=nt.length;dt<yt;dt++){const Kt=n.get(nt[dt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&bt(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<nt.length;dt++){const yt=nt[dt];z.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);const Kt=r.convert(yt.format,yt.colorSpace),ct=r.convert(yt.type),At=_(yt.internalFormat,Kt,ct,yt.colorSpace,C.isXRRenderTarget===!0),kt=ot(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,At,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),at(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),rt(s.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)vt(z.__webglFramebuffer[dt][yt],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,yt);else vt(z.__webglFramebuffer[dt],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let dt=0,yt=nt.length;dt<yt;dt++){const Kt=nt[dt],ct=n.get(Kt);e.bindTexture(s.TEXTURE_2D,ct.__webglTexture),rt(s.TEXTURE_2D,Kt),vt(z.__webglFramebuffer,C,Kt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),g(Kt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),rt(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)vt(z.__webglFramebuffer[yt],C,b,s.COLOR_ATTACHMENT0,dt,yt);else vt(z.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,dt,0);g(b)&&p(dt),e.unbindTexture()}C.depthBuffer&&Ot(C)}function j(C){const b=C.textures;for(let z=0,Z=b.length;z<Z;z++){const nt=b[z];if(g(nt)){const J=S(C),Tt=n.get(nt).__webglTexture;e.bindTexture(J,Tt),p(J),e.unbindTexture()}}}const ht=[],D=[];function Rt(C){if(C.samples>0){if(bt(C)===!1){const b=C.textures,z=C.width,Z=C.height;let nt=s.COLOR_BUFFER_BIT;const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(C),dt=b.length>1;if(dt)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);const Kt=n.get(b[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Kt,0)}s.blitFramebuffer(0,0,z,Z,0,0,z,Z,nt,s.NEAREST),l===!0&&(ht.length=0,D.length=0,ht.push(s.COLOR_ATTACHMENT0+yt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ht.push(J),D.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);const Kt=n.get(b[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,Kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ot(C){return Math.min(i.maxSamples,C.samples)}function bt(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function lt(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function zt(C,b){const z=C.colorSpace,Z=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Ki&&z!==Xn&&(ee.getTransfer(z)===ce?(Z!==cn||nt!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function St(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=G,this.setTextureCube=B,this.rebindTextures=Ft,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=bt}function zm(s,t){function e(n,i=Xn){let r;const a=ee.getTransfer(i);if(n===Nn)return s.UNSIGNED_BYTE;if(n===io)return s.UNSIGNED_SHORT_4_4_4_4;if(n===so)return s.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===nc)return s.BYTE;if(n===ic)return s.SHORT;if(n===gs)return s.UNSIGNED_SHORT;if(n===no)return s.INT;if(n===mi)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===Ms)return s.HALF_FLOAT;if(n===rc)return s.ALPHA;if(n===ac)return s.RGB;if(n===cn)return s.RGBA;if(n===oc)return s.LUMINANCE;if(n===lc)return s.LUMINANCE_ALPHA;if(n===Vi)return s.DEPTH_COMPONENT;if(n===Zi)return s.DEPTH_STENCIL;if(n===ro)return s.RED;if(n===ao)return s.RED_INTEGER;if(n===cc)return s.RG;if(n===oo)return s.RG_INTEGER;if(n===lo)return s.RGBA_INTEGER;if(n===or||n===lr||n===cr||n===hr)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===ba||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Ta||n===Aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Ta)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Ra||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ca)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ur||n===Ha||n===Va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ur)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===Wa||n===Xa||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ur)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Bm extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const km={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(km)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Oe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new hn({vertexShader:Gm,fragmentShader:Hm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wm extends ji{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const x=new Vm,g=e.getContextAttributes();let p=null,S=null;const _=[],v=[],A=new Q;let w=null;const E=new Qe;E.viewport=new be;const R=new Qe;R.viewport=new be;const M=[E,R],y=new Bm;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=_[Y];return st===void 0&&(st=new Qr,_[Y]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=_[Y];return st===void 0&&(st=new Qr,_[Y]=st),st.getGripSpace()},this.getHand=function(Y){let st=_[Y];return st===void 0&&(st=new Qr,_[Y]=st),st.getHandSpace()};function F(Y){const st=v.indexOf(Y.inputSource);if(st===-1)return;const vt=_[st];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",V);for(let Y=0;Y<_.length;Y++){const st=v[Y];st!==null&&(v[Y]=null,_[Y].disconnect(st))}L=null,O=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,S=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new gi(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,vt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?Zi:Vi,vt=g.stencil?$i:mi);const Et={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Et),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new gi(d.textureWidth,d.textureHeight,{format:cn,type:Nn,depthTexture:new Ec(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Nt.setContext(i),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(Y){for(let st=0;st<Y.removed.length;st++){const vt=Y.removed[st],at=v.indexOf(vt);at>=0&&(v[at]=null,_[at].disconnect(vt))}for(let st=0;st<Y.added.length;st++){const vt=Y.added[st];let at=v.indexOf(vt);if(at===-1){for(let Ot=0;Ot<_.length;Ot++)if(Ot>=v.length){v.push(vt),at=Ot;break}else if(v[Ot]===null){v[Ot]=vt,at=Ot;break}if(at===-1)break}const Et=_[at];Et&&Et.connect(vt)}}const k=new P,G=new P;function B(Y,st,vt){k.setFromMatrixPosition(st.matrixWorld),G.setFromMatrixPosition(vt.matrixWorld);const at=k.distanceTo(G),Et=st.projectionMatrix.elements,Ot=vt.projectionMatrix.elements,Ft=Et[14]/(Et[10]-1),$t=Et[14]/(Et[10]+1),j=(Et[9]+1)/Et[5],ht=(Et[9]-1)/Et[5],D=(Et[8]-1)/Et[0],Rt=(Ot[8]+1)/Ot[0],ot=Ft*D,bt=Ft*Rt,lt=at/(-D+Rt),zt=lt*-D;if(st.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(zt),Y.translateZ(lt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const St=Ft+lt,C=$t+lt,b=ot-zt,z=bt+(at-zt),Z=j*$t/C*St,nt=ht*$t/C*St;Y.projectionMatrix.makePerspective(b,z,Z,nt,St,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function tt(Y,st){st===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let st=Y.near,vt=Y.far;x.texture!==null&&(x.depthNear>0&&(st=x.depthNear),x.depthFar>0&&(vt=x.depthFar)),y.near=R.near=E.near=st,y.far=R.far=E.far=vt,(L!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,O=y.far),E.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,y.layers.mask=E.layers.mask|R.layers.mask;const at=Y.parent,Et=y.cameras;tt(y,at);for(let Ot=0;Ot<Et.length;Ot++)tt(Et[Ot],at);Et.length===2?B(y,E,R):y.projectionMatrix.copy(E.projectionMatrix),K(Y,y,at)};function K(Y,st,vt){vt===null?Y.matrix.copy(st.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$a*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let q=null;function rt(Y,st){if(h=st.getViewerPose(c||a),m=st,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let at=!1;vt.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let Ot=0;Ot<vt.length;Ot++){const Ft=vt[Ot];let $t=null;if(f!==null)$t=f.getViewport(Ft);else{const ht=u.getViewSubImage(d,Ft);$t=ht.viewport,Ot===0&&(t.setRenderTargetTextures(S,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(S))}let j=M[Ot];j===void 0&&(j=new Qe,j.layers.enable(Ot),j.viewport=new be,M[Ot]=j),j.matrix.fromArray(Ft.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ft.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set($t.x,$t.y,$t.width,$t.height),Ot===0&&(y.matrix.copy(j.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(j)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Ot=u.getDepthInformation(vt[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,i.renderState)}}for(let vt=0;vt<_.length;vt++){const at=v[vt],Et=_[vt];at!==null&&Et!==void 0&&Et.update(at,st,c||a)}q&&q(Y,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}const Nt=new bc;Nt.setAnimationLoop(rt),this.setAnimationLoop=function(Y){q=Y},this.dispose=function(){}}}const ri=new Ge,Xm=new ne;function qm(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,yc(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,S,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,S,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===He&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===He&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=t.get(p),_=S.envMap,v=S.envMapRotation;_&&(g.envMap.value=_,ri.copy(v),ri.x*=-1,ri.y*=-1,ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),g.envMapRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(ri)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ym(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){const v=_.program;n.uniformBlockBinding(S,v)}function c(S,_){let v=i[S.id];v===void 0&&(m(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",g));const A=_.program;n.updateUBOMapping(S,A);const w=t.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function h(S){const _=u();S.__bindingPointIndex=_;const v=s.createBuffer(),A=S.__size,w=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const _=i[S.id],v=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let w=0,E=v.length;w<E;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,y=R.length;M<y;M++){const L=R[M];if(f(L,w,M,A)===!0){const O=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let V=0;V<F.length;V++){const k=F[V],G=x(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,O+H,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,_,v,A){const w=S.value,E=_+"_"+v;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const R=A[E];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[E]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function m(S){const _=S.uniforms;let v=0;const A=16;for(let E=0,R=_.length;E<R;E++){const M=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,L=M.length;y<L;y++){const O=M[y],F=Array.isArray(O.value)?O.value:[O.value];for(let H=0,V=F.length;H<V;H++){const k=F[H],G=x(k),B=v%A,tt=B%G.boundary,K=B+tt;v+=tt,K!==0&&A-K<G.storage&&(v+=A-K),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=G.storage}}}const w=v%A;return w>0&&(v+=A-w),S.__size=v,S.__cache={},this}function x(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function g(S){const _=S.target;_.removeEventListener("dispose",g);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class $m{constructor(t={}){const{canvas:e=Nh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const S=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=$n,this.toneMappingExposure=1;const v=this;let A=!1,w=0,E=0,R=null,M=-1,y=null;const L=new be,O=new be;let F=null;const H=new ft(0);let V=0,k=e.width,G=e.height,B=1,tt=null,K=null;const q=new be(0,0,k,G),rt=new be(0,0,k,G);let Nt=!1;const Y=new ho;let st=!1,vt=!1;const at=new ne,Et=new ne,Ot=new P,Ft=new be,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function ht(){return R===null?B:1}let D=n;function Rt(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${to}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),D===null){const U="webgl2";if(D=Rt(U,T),D===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ot,bt,lt,zt,St,C,b,z,Z,nt,J,Tt,dt,yt,Kt,ct,At,kt,Gt,Ct,Qt,qt,de,I;function gt(){ot=new Qf(D),ot.init(),qt=new zm(D,ot),bt=new Yf(D,ot,t,qt),lt=new Nm(D,ot),bt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),zt=new np(D),St=new ym,C=new Om(D,ot,lt,St,bt,qt,zt),b=new Zf(v),z=new jf(v),Z=new lu(D),de=new Xf(D,Z),nt=new tp(D,Z,zt,de),J=new sp(D,nt,Z,zt),Gt=new ip(D,bt,C),ct=new $f(St),Tt=new _m(v,b,z,ot,bt,de,ct),dt=new qm(v,St),yt=new Sm,Kt=new Cm(ot),kt=new Wf(v,b,z,lt,J,f,l),At=new Im(v,J,bt),I=new Ym(D,zt,bt,lt),Ct=new qf(D,ot,zt),Qt=new ep(D,ot,zt),zt.programs=Tt.programs,v.capabilities=bt,v.extensions=ot,v.properties=St,v.renderLists=yt,v.shadowMap=At,v.state=lt,v.info=zt}gt();const $=new Wm(v,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(k,G,!1))},this.getSize=function(T){return T.set(k,G)},this.setSize=function(T,U,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,G=U,e.width=Math.floor(T*B),e.height=Math.floor(U*B),W===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(k*B,G*B).floor()},this.setDrawingBufferSize=function(T,U,W){k=T,G=U,B=W,e.width=Math.floor(T*W),e.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(q)},this.setViewport=function(T,U,W,X){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,U,W,X),lt.viewport(L.copy(q).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(rt)},this.setScissor=function(T,U,W,X){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,U,W,X),lt.scissor(O.copy(rt).multiplyScalar(B).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(T){lt.setScissorTest(Nt=T)},this.setOpaqueSort=function(T){tt=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(T=!0,U=!0,W=!0){let X=0;if(T){let N=!1;if(R!==null){const ut=R.texture.format;N=ut===lo||ut===oo||ut===ao}if(N){const ut=R.texture.type,_t=ut===Nn||ut===mi||ut===gs||ut===$i||ut===io||ut===so,Pt=kt.getClearColor(),Lt=kt.getClearAlpha(),Ht=Pt.r,Wt=Pt.g,Dt=Pt.b;_t?(m[0]=Ht,m[1]=Wt,m[2]=Dt,m[3]=Lt,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Ht,x[1]=Wt,x[2]=Dt,x[3]=Lt,D.clearBufferiv(D.COLOR,0,x))}else X|=D.COLOR_BUFFER_BIT}U&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),yt.dispose(),Kt.dispose(),St.dispose(),b.dispose(),z.dispose(),J.dispose(),de.dispose(),I.dispose(),Tt.dispose(),$.dispose(),$.removeEventListener("sessionstart",wo),$.removeEventListener("sessionend",Eo),Qn.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=zt.autoReset,U=At.enabled,W=At.autoUpdate,X=At.needsUpdate,N=At.type;gt(),zt.autoReset=T,At.enabled=U,At.autoUpdate=W,At.needsUpdate=X,At.type=N}function xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vt(T){const U=T.target;U.removeEventListener("dispose",Vt),Me(U)}function Me(T){Le(T),St.remove(T)}function Le(T){const U=St.get(T).programs;U!==void 0&&(U.forEach(function(W){Tt.releaseProgram(W)}),T.isShaderMaterial&&Tt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,X,N,ut){U===null&&(U=$t);const _t=N.isMesh&&N.matrixWorld.determinant()<0,Pt=qc(T,U,W,X,N);lt.setMaterial(X,_t);let Lt=W.index,Ht=1;if(X.wireframe===!0){if(Lt=nt.getWireframeAttribute(W),Lt===void 0)return;Ht=2}const Wt=W.drawRange,Dt=W.attributes.position;let ie=Wt.start*Ht,fe=(Wt.start+Wt.count)*Ht;ut!==null&&(ie=Math.max(ie,ut.start*Ht),fe=Math.min(fe,(ut.start+ut.count)*Ht)),Lt!==null?(ie=Math.max(ie,0),fe=Math.min(fe,Lt.count)):Dt!=null&&(ie=Math.max(ie,0),fe=Math.min(fe,Dt.count));const ge=fe-ie;if(ge<0||ge===1/0)return;de.setup(N,X,Pt,W,Lt);let Ve,ae=Ct;if(Lt!==null&&(Ve=Z.get(Lt),ae=Qt,ae.setIndex(Ve)),N.isMesh)X.wireframe===!0?(lt.setLineWidth(X.wireframeLinewidth*ht()),ae.setMode(D.LINES)):ae.setMode(D.TRIANGLES);else if(N.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),lt.setLineWidth(Ut*ht()),N.isLineSegments?ae.setMode(D.LINES):N.isLineLoop?ae.setMode(D.LINE_LOOP):ae.setMode(D.LINE_STRIP)}else N.isPoints?ae.setMode(D.POINTS):N.isSprite&&ae.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ut=N._multiDrawStarts,Mn=N._multiDrawCounts,oe=N._multiDrawCount,nn=Lt?Z.get(Lt).bytesPerElement:1,_i=St.get(X).currentProgram.getUniforms();for(let Xe=0;Xe<oe;Xe++)_i.setValue(D,"_gl_DrawID",Xe),ae.render(Ut[Xe]/nn,Mn[Xe])}else if(N.isInstancedMesh)ae.renderInstances(ie,ge,N.count);else if(W.isInstancedBufferGeometry){const Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Mn=Math.min(W.instanceCount,Ut);ae.renderInstances(ie,ge,Mn)}else ae.render(ie,ge)};function le(T,U,W){T.transparent===!0&&T.side===_e&&T.forceSinglePass===!1?(T.side=He,T.needsUpdate=!0,ws(T,U,W),T.side=Un,T.needsUpdate=!0,ws(T,U,W),T.side=_e):ws(T,U,W)}this.compile=function(T,U,W=null){W===null&&(W=T),p=Kt.get(W),p.init(U),_.push(p),W.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==W&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const X=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ut=N.material;if(ut)if(Array.isArray(ut))for(let _t=0;_t<ut.length;_t++){const Pt=ut[_t];le(Pt,W,N),X.add(Pt)}else le(ut,W,N),X.add(ut)}),_.pop(),p=null,X},this.compileAsync=function(T,U,W=null){const X=this.compile(T,U,W);return new Promise(N=>{function ut(){if(X.forEach(function(_t){St.get(_t).currentProgram.isReady()&&X.delete(_t)}),X.size===0){N(T);return}setTimeout(ut,10)}ot.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let en=null;function yn(T){en&&en(T)}function wo(){Qn.stop()}function Eo(){Qn.start()}const Qn=new bc;Qn.setAnimationLoop(yn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(T){en=T,$.setAnimationLoop(T),T===null?Qn.stop():Qn.start()},$.addEventListener("sessionstart",wo),$.addEventListener("sessionend",Eo),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,R),p=Kt.get(T,_.length),p.init(U),_.push(p),Et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Et),vt=this.localClippingEnabled,st=ct.init(this.clippingPlanes,vt),g=yt.get(T,S.length),g.init(),S.push(g),$.enabled===!0&&$.isPresenting===!0){const ut=v.xr.getDepthSensingMesh();ut!==null&&br(ut,U,-1/0,v.sortObjects)}br(T,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(tt,K),j=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,j&&kt.addToRenderList(g,T),this.info.render.frame++,st===!0&&ct.beginShadows();const W=p.state.shadowsArray;At.render(W,T,U),st===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){const ut=U.cameras;if(N.length>0)for(let _t=0,Pt=ut.length;_t<Pt;_t++){const Lt=ut[_t];Ao(X,N,T,Lt)}j&&kt.render(T);for(let _t=0,Pt=ut.length;_t<Pt;_t++){const Lt=ut[_t];To(g,T,Lt,Lt.viewport)}}else N.length>0&&Ao(X,N,T,U),j&&kt.render(T),To(g,T,U);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(v,T,U),de.resetDefaultState(),M=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],st===!0&&ct.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function br(T,U,W,X){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){X&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Et);const _t=J.update(T),Pt=T.material;Pt.visible&&g.push(T,_t,Pt,W,Ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const _t=J.update(T),Pt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ft.copy(_t.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(Et)),Array.isArray(Pt)){const Lt=_t.groups;for(let Ht=0,Wt=Lt.length;Ht<Wt;Ht++){const Dt=Lt[Ht],ie=Pt[Dt.materialIndex];ie&&ie.visible&&g.push(T,_t,ie,W,Ft.z,Dt)}}else Pt.visible&&g.push(T,_t,Pt,W,Ft.z,null)}}const ut=T.children;for(let _t=0,Pt=ut.length;_t<Pt;_t++)br(ut[_t],U,W,X)}function To(T,U,W,X){const N=T.opaque,ut=T.transmissive,_t=T.transparent;p.setupLightsView(W),st===!0&&ct.setGlobalState(v.clippingPlanes,W),X&&lt.viewport(L.copy(X)),N.length>0&&bs(N,U,W),ut.length>0&&bs(ut,U,W),_t.length>0&&bs(_t,U,W),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Ao(T,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new gi(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Ms:Nn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const ut=p.state.transmissionRenderTarget[X.id],_t=X.viewport||L;ut.setSize(_t.z,_t.w);const Pt=v.getRenderTarget();v.setRenderTarget(ut),v.getClearColor(H),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),j&&kt.render(W);const Lt=v.toneMapping;v.toneMapping=$n;const Ht=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),st===!0&&ct.setGlobalState(v.clippingPlanes,X),bs(T,W,X),C.updateMultisampleRenderTarget(ut),C.updateRenderTargetMipmap(ut),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Dt=0,ie=U.length;Dt<ie;Dt++){const fe=U[Dt],ge=fe.object,Ve=fe.geometry,ae=fe.material,Ut=fe.group;if(ae.side===_e&&ge.layers.test(X.layers)){const Mn=ae.side;ae.side=He,ae.needsUpdate=!0,Co(ge,W,X,Ve,ae,Ut),ae.side=Mn,ae.needsUpdate=!0,Wt=!0}}Wt===!0&&(C.updateMultisampleRenderTarget(ut),C.updateRenderTargetMipmap(ut))}v.setRenderTarget(Pt),v.setClearColor(H,V),Ht!==void 0&&(X.viewport=Ht),v.toneMapping=Lt}function bs(T,U,W){const X=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ut=T.length;N<ut;N++){const _t=T[N],Pt=_t.object,Lt=_t.geometry,Ht=X===null?_t.material:X,Wt=_t.group;Pt.layers.test(W.layers)&&Co(Pt,U,W,Lt,Ht,Wt)}}function Co(T,U,W,X,N,ut){T.onBeforeRender(v,U,W,X,N,ut),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(v,U,W,X,T,ut),N.transparent===!0&&N.side===_e&&N.forceSinglePass===!1?(N.side=He,N.needsUpdate=!0,v.renderBufferDirect(W,U,X,N,T,ut),N.side=Un,N.needsUpdate=!0,v.renderBufferDirect(W,U,X,N,T,ut),N.side=_e):v.renderBufferDirect(W,U,X,N,T,ut),T.onAfterRender(v,U,W,X,N,ut)}function ws(T,U,W){U.isScene!==!0&&(U=$t);const X=St.get(T),N=p.state.lights,ut=p.state.shadowsArray,_t=N.state.version,Pt=Tt.getParameters(T,N.state,ut,U,W),Lt=Tt.getProgramCacheKey(Pt);let Ht=X.programs;X.environment=T.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(T.isMeshStandardMaterial?z:b).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ht===void 0&&(T.addEventListener("dispose",Vt),Ht=new Map,X.programs=Ht);let Wt=Ht.get(Lt);if(Wt!==void 0){if(X.currentProgram===Wt&&X.lightsStateVersion===_t)return Po(T,Pt),Wt}else Pt.uniforms=Tt.getUniforms(T),T.onBeforeCompile(Pt,v),Wt=Tt.acquireProgram(Pt,Lt),Ht.set(Lt,Wt),X.uniforms=Pt.uniforms;const Dt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=ct.uniform),Po(T,Pt),X.needsLights=$c(T),X.lightsStateVersion=_t,X.needsLights&&(Dt.ambientLightColor.value=N.state.ambient,Dt.lightProbe.value=N.state.probe,Dt.directionalLights.value=N.state.directional,Dt.directionalLightShadows.value=N.state.directionalShadow,Dt.spotLights.value=N.state.spot,Dt.spotLightShadows.value=N.state.spotShadow,Dt.rectAreaLights.value=N.state.rectArea,Dt.ltc_1.value=N.state.rectAreaLTC1,Dt.ltc_2.value=N.state.rectAreaLTC2,Dt.pointLights.value=N.state.point,Dt.pointLightShadows.value=N.state.pointShadow,Dt.hemisphereLights.value=N.state.hemi,Dt.directionalShadowMap.value=N.state.directionalShadowMap,Dt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Dt.spotShadowMap.value=N.state.spotShadowMap,Dt.spotLightMatrix.value=N.state.spotLightMatrix,Dt.spotLightMap.value=N.state.spotLightMap,Dt.pointShadowMap.value=N.state.pointShadowMap,Dt.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=Wt,X.uniformsList=null,Wt}function Ro(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=dr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Po(T,U){const W=St.get(T);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function qc(T,U,W,X,N){U.isScene!==!0&&(U=$t),C.resetTextureUnits();const ut=U.fog,_t=X.isMeshStandardMaterial?U.environment:null,Pt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ki,Lt=(X.isMeshStandardMaterial?z:b).get(X.envMap||_t),Ht=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Dt=!!W.morphAttributes.position,ie=!!W.morphAttributes.normal,fe=!!W.morphAttributes.color;let ge=$n;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ge=v.toneMapping);const Ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=Ve!==void 0?Ve.length:0,Ut=St.get(X),Mn=p.state.lights;if(st===!0&&(vt===!0||T!==y)){const Je=T===y&&X.id===M;ct.setState(X,T,Je)}let oe=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Mn.state.version||Ut.outputColorSpace!==Pt||N.isBatchedMesh&&Ut.batching===!1||!N.isBatchedMesh&&Ut.batching===!0||N.isBatchedMesh&&Ut.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ut.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ut.instancing===!1||!N.isInstancedMesh&&Ut.instancing===!0||N.isSkinnedMesh&&Ut.skinning===!1||!N.isSkinnedMesh&&Ut.skinning===!0||N.isInstancedMesh&&Ut.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ut.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ut.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ut.instancingMorph===!1&&N.morphTexture!==null||Ut.envMap!==Lt||X.fog===!0&&Ut.fog!==ut||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ct.numPlanes||Ut.numIntersection!==ct.numIntersection)||Ut.vertexAlphas!==Ht||Ut.vertexTangents!==Wt||Ut.morphTargets!==Dt||Ut.morphNormals!==ie||Ut.morphColors!==fe||Ut.toneMapping!==ge||Ut.morphTargetsCount!==ae)&&(oe=!0):(oe=!0,Ut.__version=X.version);let nn=Ut.currentProgram;oe===!0&&(nn=ws(X,U,N));let _i=!1,Xe=!1,es=!1;const ve=nn.getUniforms(),un=Ut.uniforms;if(lt.useProgram(nn.program)&&(_i=!0,Xe=!0,es=!0),X.id!==M&&(M=X.id,Xe=!0),_i||y!==T){lt.buffers.depth.getReversed()?(at.copy(T.projectionMatrix),Oh(at),zh(at),ve.setValue(D,"projectionMatrix",at)):ve.setValue(D,"projectionMatrix",T.projectionMatrix),ve.setValue(D,"viewMatrix",T.matrixWorldInverse);const Fn=ve.map.cameraPosition;Fn!==void 0&&Fn.setValue(D,Ot.setFromMatrixPosition(T.matrixWorld)),bt.logarithmicDepthBuffer&&ve.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ve.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Xe=!0,es=!0)}if(N.isSkinnedMesh){ve.setOptional(D,N,"bindMatrix"),ve.setOptional(D,N,"bindMatrixInverse");const Je=N.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ve.setValue(D,"boneTexture",Je.boneTexture,C))}N.isBatchedMesh&&(ve.setOptional(D,N,"batchingTexture"),ve.setValue(D,"batchingTexture",N._matricesTexture,C),ve.setOptional(D,N,"batchingIdTexture"),ve.setValue(D,"batchingIdTexture",N._indirectTexture,C),ve.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&ve.setValue(D,"batchingColorTexture",N._colorsTexture,C));const ns=W.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&Gt.update(N,W,nn),(Xe||Ut.receiveShadow!==N.receiveShadow)&&(Ut.receiveShadow=N.receiveShadow,ve.setValue(D,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(un.envMap.value=Lt,un.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),Xe&&(ve.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&Yc(un,es),ut&&X.fog===!0&&dt.refreshFogUniforms(un,ut),dt.refreshMaterialUniforms(un,X,B,G,p.state.transmissionRenderTarget[T.id]),dr.upload(D,Ro(Ut),un,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(dr.upload(D,Ro(Ut),un,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ve.setValue(D,"center",N.center),ve.setValue(D,"modelViewMatrix",N.modelViewMatrix),ve.setValue(D,"normalMatrix",N.normalMatrix),ve.setValue(D,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Je=X.uniformsGroups;for(let Fn=0,On=Je.length;Fn<On;Fn++){const Lo=Je[Fn];I.update(Lo,nn),I.bind(Lo,nn)}}return nn}function Yc(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function $c(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,U,W){St.get(T.texture).__webglTexture=U,St.get(T.depthTexture).__webglTexture=W;const X=St.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const W=St.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,W=0){R=T,w=U,E=W;let X=!0,N=null,ut=!1,_t=!1;if(T){const Lt=St.get(T);if(Lt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(Lt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Lt.__hasExternalTextures)C.rebindTextures(T,St.get(T.texture).__webglTexture,St.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Dt=T.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&St.has(Dt)&&(T.width!==Dt.image.width||T.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Ht=T.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(_t=!0);const Wt=St.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[U])?N=Wt[U][W]:N=Wt[U],ut=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?N=St.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?N=Wt[W]:N=Wt,L.copy(T.viewport),O.copy(T.scissor),F=T.scissorTest}else L.copy(q).multiplyScalar(B).floor(),O.copy(rt).multiplyScalar(B).floor(),F=Nt;if(lt.bindFramebuffer(D.FRAMEBUFFER,N)&&X&&lt.drawBuffers(T,N),lt.viewport(L),lt.scissor(O),lt.setScissorTest(F),ut){const Lt=St.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt.__webglTexture,W)}else if(_t){const Lt=St.get(T.texture),Ht=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,W||0,Ht)}M=-1},this.readRenderTargetPixels=function(T,U,W,X,N,ut,_t){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(Pt=Pt[_t]),Pt){lt.bindFramebuffer(D.FRAMEBUFFER,Pt);try{const Lt=T.texture,Ht=Lt.format,Wt=Lt.type;if(!bt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-X&&W>=0&&W<=T.height-N&&D.readPixels(U,W,X,N,qt.convert(Ht),qt.convert(Wt),ut)}finally{const Lt=R!==null?St.get(R).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(T,U,W,X,N,ut,_t){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=St.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(Pt=Pt[_t]),Pt){const Lt=T.texture,Ht=Lt.format,Wt=Lt.type;if(!bt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-X&&W>=0&&W<=T.height-N){lt.bindFramebuffer(D.FRAMEBUFFER,Pt);const Dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.bufferData(D.PIXEL_PACK_BUFFER,ut.byteLength,D.STREAM_READ),D.readPixels(U,W,X,N,qt.convert(Ht),qt.convert(Wt),0);const ie=R!==null?St.get(R).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,ie);const fe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Fh(D,fe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ut),D.deleteBuffer(Dt),D.deleteSync(fe),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,W=0){T.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-W),N=Math.floor(T.image.width*X),ut=Math.floor(T.image.height*X),_t=U!==null?U.x:0,Pt=U!==null?U.y:0;C.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,_t,Pt,N,ut),lt.unbindTexture()},this.copyTextureToTexture=function(T,U,W=null,X=null,N=0){T.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],U=arguments[2],N=arguments[3]||0,W=null);let ut,_t,Pt,Lt,Ht,Wt,Dt,ie,fe;const ge=T.isCompressedTexture?T.mipmaps[N]:T.image;W!==null?(ut=W.max.x-W.min.x,_t=W.max.y-W.min.y,Pt=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Ht=W.min.y,Wt=W.isBox3?W.min.z:0):(ut=ge.width,_t=ge.height,Pt=ge.depth||1,Lt=0,Ht=0,Wt=0),X!==null?(Dt=X.x,ie=X.y,fe=X.z):(Dt=0,ie=0,fe=0);const Ve=qt.convert(U.format),ae=qt.convert(U.type);let Ut;U.isData3DTexture?(C.setTexture3D(U,0),Ut=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),Ut=D.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),Ut=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Mn=D.getParameter(D.UNPACK_ROW_LENGTH),oe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),nn=D.getParameter(D.UNPACK_SKIP_PIXELS),_i=D.getParameter(D.UNPACK_SKIP_ROWS),Xe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Lt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Wt);const es=T.isDataArrayTexture||T.isData3DTexture,ve=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const un=St.get(T),ns=St.get(U),Je=St.get(un.__renderTarget),Fn=St.get(ns.__renderTarget);lt.bindFramebuffer(D.READ_FRAMEBUFFER,Je.__webglFramebuffer),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let On=0;On<Pt;On++)es&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(T).__webglTexture,N,Wt+On),T.isDepthTexture?(ve&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(U).__webglTexture,N,fe+On),D.blitFramebuffer(Lt,Ht,ut,_t,Dt,ie,ut,_t,D.DEPTH_BUFFER_BIT,D.NEAREST)):ve?D.copyTexSubImage3D(Ut,N,Dt,ie,fe+On,Lt,Ht,ut,_t):D.copyTexSubImage2D(Ut,N,Dt,ie,fe+On,Lt,Ht,ut,_t);lt.bindFramebuffer(D.READ_FRAMEBUFFER,null),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ve?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ut,N,Dt,ie,fe,ut,_t,Pt,Ve,ae,ge.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ut,N,Dt,ie,fe,ut,_t,Pt,Ve,ge.data):D.texSubImage3D(Ut,N,Dt,ie,fe,ut,_t,Pt,Ve,ae,ge):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,Dt,ie,ut,_t,Ve,ae,ge.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,Dt,ie,ge.width,ge.height,Ve,ge.data):D.texSubImage2D(D.TEXTURE_2D,N,Dt,ie,ut,_t,Ve,ae,ge);D.pixelStorei(D.UNPACK_ROW_LENGTH,Mn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,nn),D.pixelStorei(D.UNPACK_SKIP_ROWS,_i),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe),N===0&&U.generateMipmaps&&D.generateMipmap(Ut),lt.unbindTexture()},this.copyTextureToTexture3D=function(T,U,W=null,X=null,N=0){return T.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],U=arguments[3],N=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,W,X,N)},this.initRenderTarget=function(T){St.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),lt.unbindTexture()},this.resetState=function(){w=0,E=0,R=null,lt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class fo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new fo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zm extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Jm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ya,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new P;class mr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ke extends jn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ui;const os=new P,Ni=new P,Fi=new P,Oi=new Q,ls=new Q,Pc=new ne,qs=new P,cs=new P,Ys=new P,Cl=new Q,ta=new Q,Rl=new Q;class We extends Ae{constructor(t=new ke){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jm(e,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new mr(n,3,0,!1)),Ui.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=Ui,this.material=t,this.center=new Q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ni.setFromMatrixScale(this.matrixWorld),Pc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ni.multiplyScalar(-Fi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;$s(qs.set(-.5,-.5,0),Fi,a,Ni,i,r),$s(cs.set(.5,-.5,0),Fi,a,Ni,i,r),$s(Ys.set(.5,.5,0),Fi,a,Ni,i,r),Cl.set(0,0),ta.set(1,0),Rl.set(1,1);let o=t.ray.intersectTriangle(qs,cs,Ys,!1,os);if(o===null&&($s(cs.set(-.5,.5,0),Fi,a,Ni,i,r),ta.set(0,1),o=t.ray.intersectTriangle(qs,Ys,cs,!1,os),o===null))return;const l=t.ray.origin.distanceTo(os);l<t.near||l>t.far||e.push({distance:l,point:os.clone(),uv:tn.getInterpolation(os,qs,cs,Ys,Cl,ta,Rl,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $s(s,t,e,n,i,r){Oi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ls.x=r*Oi.x-i*Oi.y,ls.y=i*Oi.x+r*Oi.y):ls.copy(Oi),s.copy(t),s.x+=ls.x,s.y+=ls.y,s.applyMatrix4(Pc)}class Km extends Oe{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ze,h=Ze,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pl extends Te{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zi=new ne,Ll=new ne,Zs=[],Dl=new xi,jm=new ne,hs=new It,us=new Qi;class Bi extends It{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),Dl.copy(t.boundingBox).applyMatrix4(zi),this.boundingBox.union(Dl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),us.copy(t.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),t.ray.intersectsSphere(us)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,zi),Ll.multiplyMatrices(n,zi),hs.matrixWorld=Ll,hs.raycast(t,Zs);for(let a=0,o=Zs.length;a<o;a++){const l=Zs[a];l.instanceId=r,l.object=this,e.push(l)}Zs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Km(new Float32Array(i*this.count),i,this.count,ro,vn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Lc extends jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Il=new ne,Ja=new mc,Js=new Qi,Ks=new P;class Dc extends Ae{constructor(t=new xe,e=new Lc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;Il.copy(i).invert(),Ja.copy(t.ray).applyMatrix4(Il);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,x=f;m<x;m++){const g=c.getX(m);Ks.fromBufferAttribute(u,g),Ul(Ks,g,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)Ks.fromBufferAttribute(u,m),Ul(Ks,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ul(s,t,e,n,i,r,a){const o=Ja.distanceSqToPoint(s);if(o<e){const l=new P;Ja.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class po extends Oe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Q:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],a=[],o=new P,l=new ne;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Fe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Fe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class mo extends _n{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Q){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qm extends mo{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function go(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const js=new P,ea=new go,na=new go,ia=new go;class Ka extends _n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(js.subVectors(i[0],i[1]).add(i[0]),c=js);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(js.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=js),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),ea.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),na.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),ia.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),na.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ia.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ea.calc(l),na.calc(l),ia.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Nl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function t0(s,t){const e=1-s;return e*e*t}function e0(s,t){return 2*(1-s)*s*t}function n0(s,t){return s*s*t}function ps(s,t,e,n){return t0(s,t)+e0(s,e)+n0(s,n)}function i0(s,t){const e=1-s;return e*e*e*t}function s0(s,t){const e=1-s;return 3*e*e*s*t}function r0(s,t){return 3*(1-s)*s*s*t}function a0(s,t){return s*s*s*t}function ms(s,t,e,n,i){return i0(s,t)+s0(s,e)+r0(s,n)+a0(s,i)}class Ic extends _n{constructor(t=new Q,e=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Q){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ms(t,i.x,r.x,a.x,o.x),ms(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class o0 extends _n{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ms(t,i.x,r.x,a.x,o.x),ms(t,i.y,r.y,a.y,o.y),ms(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uc extends _n{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l0 extends _n{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nc extends _n{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ps(t,i.x,r.x,a.x),ps(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fc extends _n{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ps(t,i.x,r.x,a.x),ps(t,i.y,r.y,a.y),ps(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oc extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Nl(o,l.x,c.x,h.x,u.x),Nl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Q().fromArray(i))}return this}}var gr=Object.freeze({__proto__:null,ArcCurve:Qm,CatmullRomCurve3:Ka,CubicBezierCurve:Ic,CubicBezierCurve3:o0,EllipseCurve:mo,LineCurve:Uc,LineCurve3:l0,QuadraticBezierCurve:Nc,QuadraticBezierCurve3:Fc,SplineCurve:Oc});class c0 extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new gr[i.type]().fromJSON(i))}return this}}class Fl extends c0{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Uc(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Nc(this.currentPoint.clone(),new Q(t,e),new Q(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Ic(this.currentPoint.clone(),new Q(t,e),new Q(n,i),new Q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Oc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new mo(t,e,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ue extends xe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const x=[],g=n/2;let p=0;S(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function S(){const v=new P,A=new P;let w=0;const E=(e-t)/n;for(let R=0;R<=r;R++){const M=[],y=R/r,L=y*(e-t)+t;for(let O=0;O<=i;O++){const F=O/i,H=F*l+o,V=Math.sin(H),k=Math.cos(H);A.x=L*V,A.y=-y*n+g,A.z=L*k,u.push(A.x,A.y,A.z),v.set(V,E,k).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-y),M.push(m++)}x.push(M)}for(let R=0;R<i;R++)for(let M=0;M<r;M++){const y=x[M][R],L=x[M+1][R],O=x[M+1][R+1],F=x[M][R+1];(t>0||M!==0)&&(h.push(y,L,F),w+=3),(e>0||M!==r-1)&&(h.push(L,O,F),w+=3)}c.addGroup(p,w,0),p+=w}function _(v){const A=m,w=new Q,E=new P;let R=0;const M=v===!0?t:e,y=v===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),m++;const L=m;for(let O=0;O<=i;O++){const H=O/i*l+o,V=Math.cos(H),k=Math.sin(H);E.x=M*k,E.y=g*y,E.z=M*V,u.push(E.x,E.y,E.z),d.push(0,y,0),w.x=V*.5+.5,w.y=k*.5*y+.5,f.push(w.x,w.y),m++}for(let O=0;O<i;O++){const F=A+O,H=L+O;v===!0?h.push(H,H+1,F):h.push(H+1,H,F),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xn extends Ue{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new xn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ss extends xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const _=new P,v=new P,A=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],_),f(e[w+1],v),f(e[w+2],A),l(_,v,A,S)}function l(S,_,v,A){const w=A+1,E=[];for(let R=0;R<=w;R++){E[R]=[];const M=S.clone().lerp(v,R/w),y=_.clone().lerp(v,R/w),L=w-R;for(let O=0;O<=L;O++)O===0&&R===w?E[R][O]=M:E[R][O]=M.clone().lerp(y,O/L)}for(let R=0;R<w;R++)for(let M=0;M<2*(w-R)-1;M++){const y=Math.floor(M/2);M%2===0?(d(E[R][y+1]),d(E[R+1][y]),d(E[R][y])):(d(E[R][y+1]),d(E[R+1][y+1]),d(E[R+1][y]))}}function c(S){const _=new P;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(S),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const S=new P;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];const v=g(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;a.push(v,1-A)}m(),u()}function u(){for(let S=0;S<a.length;S+=6){const _=a[S+0],v=a[S+2],A=a[S+4],w=Math.max(_,v,A),E=Math.min(_,v,A);w>.9&&E<.1&&(_<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,_){const v=S*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function m(){const S=new P,_=new P,v=new P,A=new P,w=new Q,E=new Q,R=new Q;for(let M=0,y=0;M<r.length;M+=9,y+=6){S.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),w.set(a[y+0],a[y+1]),E.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),A.copy(S).add(_).add(v).divideScalar(3);const L=g(A);x(w,y+0,S,L),x(E,y+2,_,L),x(R,y+4,v,L)}}function x(S,_,v,A){A<0&&S.x===1&&(a[_]=S.x-1),v.x===0&&v.z===0&&(a[_]=A/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.vertices,t.indices,t.radius,t.details)}}class vo extends Ss{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vo(t.radius,t.detail)}}class yr extends Fl{constructor(t){super(t),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Fl().fromJSON(i))}return this}}const h0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=zc(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=m0(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let m=e;m<i;m+=e)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return vs(r,a,e,o,l,f,0),a}};function zc(s,t,e,n,i){let r,a;if(i===T0(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Ol(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Ol(r,s[r],s[r+1],a);return a&&Mr(a,a.next)&&(_s(a),a=a.next),a}function vi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Mr(e,e.next)||ye(e.prev,e,e.next)===0)){if(_s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vs(s,t,e,n,i,r,a){if(!s)return;!a&&r&&y0(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?d0(s,n,i,r):u0(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),_s(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=f0(vi(s),t,e),vs(s,t,e,n,i,r,2)):a===2&&p0(s,t,e,n,i,r):vs(vi(s),t,e,n,i,r,1);break}}}function u0(s){const t=s.prev,e=s,n=s.next;if(ye(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Gi(i,o,r,l,a,c,m.x,m.y)&&ye(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function d0(s,t,e,n){const i=s.prev,r=s,a=s.next;if(ye(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=ja(f,m,t,e,n),S=ja(x,g,t,e,n);let _=s.prevZ,v=s.nextZ;for(;_&&_.z>=p&&v&&v.z<=S;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Gi(o,h,l,u,c,d,_.x,_.y)&&ye(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Gi(o,h,l,u,c,d,v.x,v.y)&&ye(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Gi(o,h,l,u,c,d,_.x,_.y)&&ye(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Gi(o,h,l,u,c,d,v.x,v.y)&&ye(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function f0(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Mr(i,r)&&Bc(i,n,n.next,r)&&xs(i,r)&&xs(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),_s(n),_s(n.next),n=s=r),n=n.next}while(n!==s);return vi(n)}function p0(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&b0(a,o)){let l=kc(a,o);a=vi(a,a.next),l=vi(l,l.next),vs(a,t,e,n,i,r,0),vs(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function m0(s,t,e,n){const i=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=zc(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(S0(c));for(i.sort(g0),r=0;r<i.length;r++)e=v0(i[r],e);return e}function g0(s,t){return s.x-t.x}function v0(s,t){const e=x0(s,t);if(!e)return t;const n=kc(e,s);return vi(n,n.next),vi(e,e.next)}function x0(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Gi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),xs(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&_0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function _0(s,t){return ye(s.prev,s,t.prev)<0&&ye(t.next,s,s.next)<0}function y0(s,t,e,n){let i=s;do i.z===0&&(i.z=ja(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,M0(i)}function M0(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function ja(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function S0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Gi(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function b0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!w0(s,t)&&(xs(s,t)&&xs(t,s)&&E0(s,t)&&(ye(s.prev,s,t.prev)||ye(s,t.prev,t))||Mr(s,t)&&ye(s.prev,s,s.next)>0&&ye(t.prev,t,t.next)>0)}function ye(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Mr(s,t){return s.x===t.x&&s.y===t.y}function Bc(s,t,e,n){const i=tr(ye(s,t,e)),r=tr(ye(s,t,n)),a=tr(ye(e,n,s)),o=tr(ye(e,n,t));return!!(i!==r&&a!==o||i===0&&Qs(s,e,t)||r===0&&Qs(s,n,t)||a===0&&Qs(e,s,n)||o===0&&Qs(e,t,n))}function Qs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function tr(s){return s>0?1:s<0?-1:0}function w0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Bc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function xs(s,t){return ye(s.prev,s,s.next)<0?ye(s,t,s.next)>=0&&ye(s,s.prev,t)>=0:ye(s,t,s.prev)<0||ye(s,s.next,t)<0}function E0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function kc(s,t){const e=new Qa(s.i,s.x,s.y),n=new Qa(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ol(s,t,e,n){const i=new Qa(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _s(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Qa(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function T0(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Zn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Zn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];zl(t),Bl(n,t);let a=t.length;e.forEach(zl);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Bl(n,e[l]);const o=h0.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function zl(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Bl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class xo extends xe{constructor(t=new yr([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Jt(i,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:A0;let _,v=!1,A,w,E,R;p&&(_=p.getSpacedPoints(h),v=!0,d=!1,A=p.computeFrenetFrames(h,!1),w=new P,E=new P,R=new P),d||(g=0,f=0,m=0,x=0);const M=o.extractPoints(c);let y=M.shape;const L=M.holes;if(!Zn.isClockWise(y)){y=y.reverse();for(let j=0,ht=L.length;j<ht;j++){const D=L[j];Zn.isClockWise(D)&&(L[j]=D.reverse())}}const F=Zn.triangulateShape(y,L),H=y;for(let j=0,ht=L.length;j<ht;j++){const D=L[j];y=y.concat(D)}function V(j,ht,D){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(ht,D)}const k=y.length,G=F.length;function B(j,ht,D){let Rt,ot,bt;const lt=j.x-ht.x,zt=j.y-ht.y,St=D.x-j.x,C=D.y-j.y,b=lt*lt+zt*zt,z=lt*C-zt*St;if(Math.abs(z)>Number.EPSILON){const Z=Math.sqrt(b),nt=Math.sqrt(St*St+C*C),J=ht.x-zt/Z,Tt=ht.y+lt/Z,dt=D.x-C/nt,yt=D.y+St/nt,Kt=((dt-J)*C-(yt-Tt)*St)/(lt*C-zt*St);Rt=J+lt*Kt-j.x,ot=Tt+zt*Kt-j.y;const ct=Rt*Rt+ot*ot;if(ct<=2)return new Q(Rt,ot);bt=Math.sqrt(ct/2)}else{let Z=!1;lt>Number.EPSILON?St>Number.EPSILON&&(Z=!0):lt<-Number.EPSILON?St<-Number.EPSILON&&(Z=!0):Math.sign(zt)===Math.sign(C)&&(Z=!0),Z?(Rt=-zt,ot=lt,bt=Math.sqrt(b)):(Rt=lt,ot=zt,bt=Math.sqrt(b/2))}return new Q(Rt/bt,ot/bt)}const tt=[];for(let j=0,ht=H.length,D=ht-1,Rt=j+1;j<ht;j++,D++,Rt++)D===ht&&(D=0),Rt===ht&&(Rt=0),tt[j]=B(H[j],H[D],H[Rt]);const K=[];let q,rt=tt.concat();for(let j=0,ht=L.length;j<ht;j++){const D=L[j];q=[];for(let Rt=0,ot=D.length,bt=ot-1,lt=Rt+1;Rt<ot;Rt++,bt++,lt++)bt===ot&&(bt=0),lt===ot&&(lt=0),q[Rt]=B(D[Rt],D[bt],D[lt]);K.push(q),rt=rt.concat(q)}for(let j=0;j<g;j++){const ht=j/g,D=f*Math.cos(ht*Math.PI/2),Rt=m*Math.sin(ht*Math.PI/2)+x;for(let ot=0,bt=H.length;ot<bt;ot++){const lt=V(H[ot],tt[ot],Rt);at(lt.x,lt.y,-D)}for(let ot=0,bt=L.length;ot<bt;ot++){const lt=L[ot];q=K[ot];for(let zt=0,St=lt.length;zt<St;zt++){const C=V(lt[zt],q[zt],Rt);at(C.x,C.y,-D)}}}const Nt=m+x;for(let j=0;j<k;j++){const ht=d?V(y[j],rt[j],Nt):y[j];v?(E.copy(A.normals[0]).multiplyScalar(ht.x),w.copy(A.binormals[0]).multiplyScalar(ht.y),R.copy(_[0]).add(E).add(w),at(R.x,R.y,R.z)):at(ht.x,ht.y,0)}for(let j=1;j<=h;j++)for(let ht=0;ht<k;ht++){const D=d?V(y[ht],rt[ht],Nt):y[ht];v?(E.copy(A.normals[j]).multiplyScalar(D.x),w.copy(A.binormals[j]).multiplyScalar(D.y),R.copy(_[j]).add(E).add(w),at(R.x,R.y,R.z)):at(D.x,D.y,u/h*j)}for(let j=g-1;j>=0;j--){const ht=j/g,D=f*Math.cos(ht*Math.PI/2),Rt=m*Math.sin(ht*Math.PI/2)+x;for(let ot=0,bt=H.length;ot<bt;ot++){const lt=V(H[ot],tt[ot],Rt);at(lt.x,lt.y,u+D)}for(let ot=0,bt=L.length;ot<bt;ot++){const lt=L[ot];q=K[ot];for(let zt=0,St=lt.length;zt<St;zt++){const C=V(lt[zt],q[zt],Rt);v?at(C.x,C.y+_[h-1].y,_[h-1].x+D):at(C.x,C.y,u+D)}}}Y(),st();function Y(){const j=i.length/3;if(d){let ht=0,D=k*ht;for(let Rt=0;Rt<G;Rt++){const ot=F[Rt];Et(ot[2]+D,ot[1]+D,ot[0]+D)}ht=h+g*2,D=k*ht;for(let Rt=0;Rt<G;Rt++){const ot=F[Rt];Et(ot[0]+D,ot[1]+D,ot[2]+D)}}else{for(let ht=0;ht<G;ht++){const D=F[ht];Et(D[2],D[1],D[0])}for(let ht=0;ht<G;ht++){const D=F[ht];Et(D[0]+k*h,D[1]+k*h,D[2]+k*h)}}n.addGroup(j,i.length/3-j,0)}function st(){const j=i.length/3;let ht=0;vt(H,ht),ht+=H.length;for(let D=0,Rt=L.length;D<Rt;D++){const ot=L[D];vt(ot,ht),ht+=ot.length}n.addGroup(j,i.length/3-j,1)}function vt(j,ht){let D=j.length;for(;--D>=0;){const Rt=D;let ot=D-1;ot<0&&(ot=j.length-1);for(let bt=0,lt=h+g*2;bt<lt;bt++){const zt=k*bt,St=k*(bt+1),C=ht+Rt+zt,b=ht+ot+zt,z=ht+ot+St,Z=ht+Rt+St;Ot(C,b,z,Z)}}}function at(j,ht,D){l.push(j),l.push(ht),l.push(D)}function Et(j,ht,D){Ft(j),Ft(ht),Ft(D);const Rt=i.length/3,ot=S.generateTopUV(n,i,Rt-3,Rt-2,Rt-1);$t(ot[0]),$t(ot[1]),$t(ot[2])}function Ot(j,ht,D,Rt){Ft(j),Ft(ht),Ft(Rt),Ft(ht),Ft(D),Ft(Rt);const ot=i.length/3,bt=S.generateSideWallUV(n,i,ot-6,ot-3,ot-2,ot-1);$t(bt[0]),$t(bt[1]),$t(bt[3]),$t(bt[1]),$t(bt[2]),$t(bt[3])}function Ft(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function $t(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return C0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new gr[i.type]().fromJSON(i)),new xo(n,t.options)}}const A0={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Q(r,a),new Q(o,l),new Q(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Q(a,1-l),new Q(c,1-u),new Q(d,1-m),new Q(x,1-p)]:[new Q(o,1-l),new Q(h,1-u),new Q(f,1-m),new Q(g,1-p)]}};function C0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class je extends Ss{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new je(t.radius,t.detail)}}class ys extends Ss{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ys(t.radius,t.detail)}}class pi extends xe{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new P,m=new Q;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){const g=x*(n+1);for(let p=0;p<n;p++){const S=p+g,_=S,v=S+n+1,A=S+n+2,w=S+1;o.push(_,v,w),o.push(v,A,w)}}this.setIndex(o),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class _o extends xe{constructor(t=new yr([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Jt(i,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;Zn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const S=m[g];Zn.isClockWise(S)===!0&&(m[g]=S.reverse())}const x=Zn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const S=m[g];f=f.concat(S)}for(let g=0,p=f.length;g<p;g++){const S=f[g];i.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let g=0,p=x.length;g<p;g++){const S=x[g],_=S[0]+u,v=S[1]+u,A=S[2]+u;n.push(_,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return R0(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new _o(n,t.curveSegments)}}function R0(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class yo extends xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const S=[],_=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const w=A/e;u.x=-t*Math.cos(i+w*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+w*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(w+v,1-_),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const _=h[p][S+1],v=h[p][S],A=h[p+1][S],w=h[p+1][S+1];(p!==0||a>0)&&f.push(_,v,w),(p!==n-1||l<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Sr extends xe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const x=m/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,S=(i+1)*f+m;a.push(x,g,S),a.push(g,p,S)}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Mo extends xe{constructor(t=new Fc(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new Q;let h=new P;const u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function x(){for(let _=0;_<e;_++)g(_);g(r===!1?e:0),S(),p()}function g(_){h=t.getPointAt(_/e,h);const v=a.normals[_],A=a.binormals[_];for(let w=0;w<=i;w++){const E=w/i*Math.PI*2,R=Math.sin(E),M=-Math.cos(E);l.x=M*v.x+R*A.x,l.y=M*v.y+R*A.y,l.z=M*v.z+R*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=i;v++){const A=(i+1)*(_-1)+(v-1),w=(i+1)*_+(v-1),E=(i+1)*_+v,R=(i+1)*(_-1)+v;m.push(A,w,R),m.push(w,E,R)}}function S(){for(let _=0;_<=e;_++)for(let v=0;v<=i;v++)c.x=_/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Mo(new gr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class jt extends jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class P0 extends jn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gc extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class L0 extends Gc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const sa=new ne,kl=new P,Gl=new P;class D0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(kl),Gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gl),e.updateMatrixWorld(),sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class I0 extends D0{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hl extends Gc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new I0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class U0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:to}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=to);const ue=(s,t,e)=>Math.max(t,Math.min(e,s)),qn=(s,t,e)=>s+(t-s)*e,on=(s,t,e)=>{const n=ue((e-s)/(t-s),0,1);return n*n*(3-2*n)},mt=(s,t,e,n)=>qn(s,t,1-Math.exp(-e*n)),Ee=(s=0,t=1)=>s+Math.random()*(t-s),N0=(s,t)=>Math.floor(Ee(s,t+1)),F0=s=>s[Math.floor(Math.random()*s.length)],O0=(s,t)=>{let e=(t-s)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e},Jn=(s,t,e,n)=>s+O0(s,t)*(1-Math.exp(-e*n)),er={outCubic:s=>1-Math.pow(1-s,3),outQuart:s=>1-Math.pow(1-s,4),outBack:s=>1+2.2*Math.pow(s-1,3)+1.2*Math.pow(s-1,2),inOutSine:s=>-(Math.cos(Math.PI*s)-1)/2};function Wl(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const nr=(s,t)=>{const e=Math.sin(s*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)};function z0(s,t){const e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,a=i*i*(3-2*i),o=r*r*(3-2*r),l=nr(e,n),c=nr(e+1,n),h=nr(e,n+1),u=nr(e+1,n+1);return qn(qn(l,c,a),qn(h,u,a),o)}function dn(s,t,e=4,n=2,i=.5){let r=.5,a=1,o=0,l=0;for(let c=0;c<e;c++)o+=z0(s*a,t*a)*r,l+=r,r*=i,a*=n;return o/l}function So(s){const t=document.createElement("canvas");return t.width=t.height=s,[t,t.getContext("2d")]}function $e(s=96,t="rgba(255,255,255,0.95)",e="rgba(255,255,255,0)"){const[n,i]=So(s),r=i.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);r.addColorStop(0,t),r.addColorStop(.35,"rgba(255,255,255,0.55)"),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,s,s);const a=new po(n);return a.colorSpace=Ne,a}function B0(s=256){const[t,e]=So(s);e.clearRect(0,0,s,s);const n=18;for(let r=0;r<n;r++){const a=s*.5+(Math.random()-.5)*s*.62,o=s*.56+(Math.random()-.5)*s*.2,l=s*(.1+Math.random()*.16),c=e.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,"rgba(255,252,245,0.5)"),c.addColorStop(.55,"rgba(255,244,228,0.22)"),c.addColorStop(1,"rgba(255,240,220,0)"),e.fillStyle=c,e.beginPath(),e.arc(a,o,l,0,Math.PI*2),e.fill()}const i=new po(t);return i.colorSpace=Ne,i}function Xl(s=256){const[t,e]=So(s);e.clearRect(0,0,s,s);const n=s/2,i=s/2;e.strokeStyle="rgba(255,220,150,0.85)",e.lineWidth=3,e.beginPath(),e.arc(n,i,s*.38,0,Math.PI*2),e.stroke(),e.lineWidth=1.5,e.beginPath(),e.arc(n,i,s*.31,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(n,i,s*.44,0,Math.PI*2),e.stroke();const r=16;for(let o=0;o<r;o++){const l=o/r*Math.PI*2,c=s*.32,h=s*(o%3===0?.37:.345);e.beginPath(),e.moveTo(n+Math.cos(l)*c,i+Math.sin(l)*c),e.lineTo(n+Math.cos(l)*h,i+Math.sin(l)*h),e.stroke()}const a=new po(t);return a.colorSpace=Ne,a}function se(s,t={}){return new jt({color:s,flatShading:!0,roughness:t.roughness??.78,metalness:t.metalness??.05,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??Un,depthWrite:t.depthWrite??!0})}function k0(s=2.4,t=.65,e=Math.PI*.85,n=26){const i=new xe,r=[],a=[],o=[];for(let l=0;l<n;l++){const c=e*(l/n)-e/2,h=e*((l+1)/n)-e/2,u=[Math.sin(c)*t,0,Math.cos(c)*t],d=[Math.sin(h)*t,0,Math.cos(h)*t],f=[Math.sin(c)*s,Math.sin(l/n*Math.PI)*.5,Math.cos(c)*s],m=[Math.sin(h)*s,Math.sin(l/n*Math.PI)*.5,Math.cos(h)*s];r.push(...u,...f,...m,...u,...m,...d),a.push(0,0,1,1,1,1,0,0,1,1,0,0);for(let x=0;x<6;x++)o.push(1,1,1)}return i.setAttribute("position",new Jt(r,3)),i.setAttribute("uv",new Jt(a,2)),i.setAttribute("color",new Jt(o,3)),i.computeVertexNormals(),i}class G0{constructor(){this.ctx=null,this.enabled=!0,this.ready=!1,this.nextNote=0,this.noteIndex=0,this._beat=0,this._lastStep=0,this.scale=[146.83,174.61,196,220,261.63,293.66,349.23,392]}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.enabled?.85:0;const n=e.createDynamicsCompressor();n.threshold.value=-16,n.knee.value=20,n.ratio.value=6,this.master.connect(n),n.connect(e.destination),this.sfxGain=e.createGain(),this.sfxGain.gain.value=.55,this.sfxGain.connect(this.master),this.musicGain=e.createGain(),this.musicGain.gain.value=.3,this.musicGain.connect(this.master),this.delay=e.createDelay(1),this.delay.delayTime.value=.36;const i=e.createGain();i.gain.value=.28;const r=e.createGain();r.gain.value=.35,this.delay.connect(i),i.connect(this.delay),this.delay.connect(r),r.connect(this.musicGain),this._buildAmbience(),this.ready=!0,this.nextNote=e.currentTime+1.2,this._ambientStarted=e.currentTime}catch(t){console.warn("Audio unavailable",t)}}_buildAmbience(){const t=this.ctx,e=t.createGain();e.gain.value=.055;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=460,n.Q.value=.6,e.connect(n),n.connect(this.musicGain),[73.42,110,146.83].forEach((d,f)=>{const m=t.createOscillator();m.type=f===2?"sine":"triangle",m.frequency.value=d,m.detune.value=(f-1)*6;const x=t.createGain();x.gain.value=f===0?.55:.24;const g=t.createOscillator();g.frequency.value=.045+f*.013;const p=t.createGain();p.gain.value=f===0?.22:.1,g.connect(p),p.connect(x.gain),m.connect(x),x.connect(e),m.start(),g.start()});const r=t.sampleRate*3,a=t.createBuffer(1,r,t.sampleRate),o=a.getChannelData(0);let l=0;for(let d=0;d<r;d++){const f=Math.random()*2-1;l=(l+.02*f)/1.02,o[d]=l*3.2}const c=t.createBufferSource();c.buffer=a,c.loop=!0;const h=t.createBiquadFilter();h.type="bandpass",h.frequency.value=620,h.Q.value=.5;const u=t.createGain();u.gain.value=.09,c.connect(h),h.connect(u),u.connect(this.musicGain),c.start(),this.windGain=u,this.windFilter=h}setEnabled(t){this.enabled=t,this.master&&this.master.gain.setTargetAtTime(t?.85:0,this.ctx.currentTime,.08)}toggle(){return this.setEnabled(!this.enabled),this.enabled}_tone({freq:t=440,freqTo:e=null,type:n="sine",dur:i=.2,gain:r=.2,delay:a=0,filter:o=null,dest:l=null,attack:c=.005}){if(!this.ctx||!this.enabled)return;const h=this.ctx,u=h.currentTime+a,d=h.createOscillator(),f=h.createGain();d.type=n,d.frequency.setValueAtTime(t,u),e&&d.frequency.exponentialRampToValueAtTime(Math.max(20,e),u+i),f.gain.setValueAtTime(1e-4,u),f.gain.exponentialRampToValueAtTime(Math.max(2e-4,r),u+c),f.gain.exponentialRampToValueAtTime(1e-4,u+i);let m=d;if(o){const x=h.createBiquadFilter();x.type=o.type??"lowpass",x.frequency.setValueAtTime(o.freq??1200,u),o.freqTo&&x.frequency.exponentialRampToValueAtTime(o.freqTo,u+i),x.Q.value=o.q??1,m.connect(x),m=x}m.connect(f),f.connect(l||this.sfxGain),d.start(u),d.stop(u+i+.05)}_noise({dur:t=.2,gain:e=.2,delay:n=0,freq:i=1e3,freqTo:r=300,q:a=1,type:o="bandpass"}){if(!this.ctx||!this.enabled)return;const l=this.ctx,c=l.currentTime+n,h=Math.max(1,Math.floor(l.sampleRate*t)),u=l.createBuffer(1,h,l.sampleRate),d=u.getChannelData(0);for(let g=0;g<h;g++)d[g]=(Math.random()*2-1)*(1-g/h);const f=l.createBufferSource();f.buffer=u;const m=l.createBiquadFilter();m.type=o,m.Q.value=a,m.frequency.setValueAtTime(i,c),m.frequency.exponentialRampToValueAtTime(Math.max(40,r),c+t);const x=l.createGain();x.gain.setValueAtTime(e,c),x.gain.exponentialRampToValueAtTime(1e-4,c+t),f.connect(m),m.connect(x),x.connect(this.sfxGain),f.start(c)}swing(t=!1){this._noise({dur:t?.3:.18,gain:t?.3:.2,freq:t?1700:2400,freqTo:340,q:1.4}),t&&this._tone({freq:120,freqTo:60,type:"sine",dur:.24,gain:.2})}hit(t=!1){this._tone({freq:t?210:150,freqTo:46,type:"triangle",dur:.2,gain:t?.5:.32}),this._noise({dur:.14,gain:.28,freq:t?3200:2200,freqTo:240,q:.8}),t&&this._tone({freq:880,freqTo:440,type:"square",dur:.09,gain:.08,delay:.02})}hurt(){this._tone({freq:320,freqTo:90,type:"sawtooth",dur:.3,gain:.2}),this._noise({dur:.24,gain:.18,freq:600,freqTo:140})}dodge(){this._noise({dur:.32,gain:.2,freq:2600,freqTo:500,q:1.6})}jump(){this._tone({freq:300,freqTo:620,type:"triangle",dur:.16,gain:.08})}step(){this._noise({dur:.05,gain:.035,freq:260,freqTo:120,q:.7})}coin(){this._tone({freq:880,type:"triangle",dur:.12,gain:.13}),this._tone({freq:1320,type:"triangle",dur:.18,gain:.1,delay:.07})}ui(){this._tone({freq:660,freqTo:520,type:"sine",dur:.07,gain:.06})}sealThrow(){this._tone({freq:480,freqTo:960,type:"triangle",dur:.2,gain:.12}),this._noise({dur:.16,gain:.08,freq:3e3,freqTo:1200})}sealSuccess(){[392,523.25,659.25,783.99,1046.5].forEach((e,n)=>this._tone({freq:e,type:"triangle",dur:.5,gain:.16,delay:n*.09})),this._tone({freq:130.81,type:"sine",dur:.9,gain:.2})}sealFail(){this._tone({freq:320,freqTo:200,type:"square",dur:.22,gain:.09}),this._tone({freq:240,freqTo:140,type:"square",dur:.3,gain:.08,delay:.16})}levelUp(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,e)=>this._tone({freq:t,type:"triangle",dur:.55,gain:.13,delay:e*.085}))}roar(){this._tone({freq:90,freqTo:46,type:"sawtooth",dur:.8,gain:.3,filter:{freq:500,freqTo:120}}),this._noise({dur:.7,gain:.22,freq:420,freqTo:100,q:.6})}bossSlam(){this._tone({freq:70,freqTo:28,type:"sine",dur:.6,gain:.55}),this._noise({dur:.5,gain:.35,freq:500,freqTo:80,q:.5})}fire(){this._noise({dur:.3,gain:.16,freq:1500,freqTo:400,q:.7})}water(){this._tone({freq:700,freqTo:1300,type:"sine",dur:.18,gain:.07})}spirit(){this._tone({freq:420,freqTo:180,type:"sine",dur:.5,gain:.09}),this._tone({freq:620,freqTo:250,type:"triangle",dur:.4,gain:.05,delay:.04})}update(){if(!this.ctx||!this.enabled)return;const t=this.ctx.currentTime;if(this.nextNote<t+.4){const e=this._beat++%8;if(!(e===3||e===7)){const i=[-2,1,2,0,3,1,2,0][Math.floor(Math.random()*8)];this.noteIndex=ue(this.noteIndex+i,1,this.scale.length-1);const r=this.scale[this.noteIndex]*(e===0?2:1),a=.055+Math.random()*.03;this._tone({freq:r,type:"triangle",dur:1.8,gain:a,delay:Math.max(0,this.nextNote-t),dest:this.musicGain}),this._tone({freq:r*2.002,type:"sine",dur:1.4,gain:a*.4,delay:Math.max(0,this.nextNote-t),dest:this.delay})}this.nextNote+=e===0?1.15:.62}this.windFilter&&(this.windFilter.frequency.value=520+Math.sin(t*.09)*220)}}function ra(s){return Math.round(s).toLocaleString("pt-BR")}function Hc(){return window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window}function ir(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new xe;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=ql(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);const m=ql(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function ql(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Te(a,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const Vc=205,sr=440;new P(0,0,0);const rr=[{id:"stone",name:"Altar do Alicerce",bossName:"Guardião do Alicerce",species:"pedral",pos:new Q(-102,24),color:14262363,region:"Penhascos do Alicerce"},{id:"ember",name:"Altar da Chama",bossName:"Guardião da Chama",species:"brasalume",pos:new Q(34,-118),color:16742981,region:"Braseiro de Cinzas"},{id:"veil",name:"Altar do Véu",bossName:"Guardião do Véu",species:"umbra",pos:new Q(96,96),color:11831295,region:"Bosque de Musgo"}],aa=[{id:"meadow",name:"Clareira do Coração",x:0,z:0,radius:62,color:6262601,map:"#6f9c52"},{id:"ember",name:"Braseiro de Cinzas",x:24,z:-124,radius:82,color:9395260,map:"#a06842"},{id:"aqua",name:"Lagoa do Sussurro",x:118,z:16,radius:72,color:5212782,map:"#568f76"},{id:"stone",name:"Penhascos do Alicerce",x:-120,z:34,radius:82,color:7962735,map:"#7d8474"},{id:"forest",name:"Bosque de Musgo",x:28,z:140,radius:88,color:3894587,map:"#416f3e"}];function Wn(s,t){let e=aa[0],n=0;for(const i of aa){if(i.id==="meadow")continue;const r=Math.hypot(s-i.x,t-i.z),a=Math.exp(-(r*r)/(2*i.radius*i.radius*.55));a>n&&(n=a,e=i)}return n<.38?aa[0]:e}function Zt(s,t){const e=Math.hypot(s,t);let n=(dn(s*.0072+11.3,t*.0072-4.7,4)-.5)*24;n+=(dn(s*.024-3.1,t*.024+8.9,3)-.5)*5.2,n+=Math.sin(s*.021+1.2)*Math.cos(t*.018-.4)*1.8,n+=(dn(s*.075+4.7,t*.075-2.4,2)-.5)*1.1;const i=on(54,22,e);n=qn(n,7.2+(dn(s*.05+3.4,t*.05+7.2,2)-.5)*1.4,i);const r=on(96,8,Math.hypot(s+128,t-38));n=qn(n,13.5+dn(s*.03,t*.03,3)*7,r*.82);const a=on(66,10,Math.hypot(s-120,t-12));n=qn(n,-4.4+Math.hypot(s-120,t-12)*.028,a*.95);const o=on(112,44,Math.hypot(s-34,t-136));n=qn(n,5.4+dn(s*.04,t*.04,2)*3,o*.42);const l=on(150,214,e),c=dn(s*.018+30,t*.018-17,3);return n+=l*(18+c*40),n}function ai(s,t,e=1.4){Zt(s,t);const n=Zt(s+e,t)-Zt(s-e,t),i=Zt(s,t+e)-Zt(s,t-e);return Math.hypot(n,i)/(2*e)}class H0{constructor(t,{mobile:e=!1}={}){this.scene=t,this.mobile=e,this.time=0,this.extras=[],this.crystals=[],this.essences=[],this.shrines=[],this.islands=[],this.birds=[],this.clouds=[],this.runeRings=[],this.fireflies=null,this.leaves=null,this.rng=Wl(20261031),this.group=new Bt,this.group.name="world",t.add(this.group),this.sunDir=new P(-.48,.38,-.79).normalize(),this.buildSky(),this.buildTerrain(),this.buildWater(),this.buildPaths(),this.buildFoliage(),this.buildWorldTree(),this.buildShrines(),this.buildEssences(),this.buildFloatingIslands(),this.buildClouds(),this.buildBirds(),this.buildFireflies(),this.buildMapCanvas()}buildSky(){const t=new yo(560,32,20),e={uZenith:{value:new ft(3235740)},uMid:{value:new ft(9353176)},uHorizon:{value:new ft(16767395)},uSunDir:{value:this.sunDir.clone()},uSunColor:{value:new ft(16773577)}},n=new It(t,new hn({uniforms:e,side:He,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 uZenith;
        uniform vec3 uMid;
        uniform vec3 uHorizon;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        varying vec3 vDir;
        void main() {
          float h = clamp(vDir.y, -0.15, 1.0);
          vec3 low = mix(uHorizon, uMid, smoothstep(-0.03, 0.32, h));
          vec3 col = mix(low, uZenith, smoothstep(0.22, 0.9, h));
          float sunAmt = max(dot(normalize(vDir), normalize(uSunDir)), 0.0);
          col += uSunColor * pow(sunAmt, 700.0) * 2.4;
          col += uSunColor * pow(sunAmt, 10.0) * 0.22;
          col += uSunColor * pow(sunAmt, 3.0) * 0.06;
          gl_FragColor = vec4(col, 1.0);
        }
      `}));n.frustumCulled=!1,this.group.add(n),this.sky=n;const i=$e(128,"rgba(255,255,245,1)","rgba(255,220,150,0)"),r=new We(new ke({map:i,color:16774098,transparent:!0,opacity:.9,blending:pe,depthWrite:!1,fog:!1}));r.scale.setScalar(95),r.position.copy(this.sunDir).multiplyScalar(470),this.group.add(r),this.sunSprite=r}buildTerrain(){const t=this.mobile?118:168;let e=new ln(sr,sr,t,t);e.rotateX(-Math.PI/2);const n=e.attributes.position;for(let p=0;p<n.count;p++)n.setY(p,Zt(n.getX(p),n.getZ(p)));e=e.toNonIndexed(),e.computeVertexNormals();const i=e.attributes.position,r=e.attributes.normal,a=new Float32Array(i.count*3),o=new ft,l=new ft,c=new ft(14204299),h=new ft(8224626),u=new ft(11776416),d=new ft(15328984),f=new P,m={meadow:new ft(6263112),ember:new ft(10117693),aqua:new ft(5541746),stone:new ft(8291700),forest:new ft(4091965)};for(let p=0;p<i.count;p+=3){const S=(i.getX(p)+i.getX(p+1)+i.getX(p+2))/3,_=(i.getZ(p)+i.getZ(p+1)+i.getZ(p+2))/3,v=(i.getY(p)+i.getY(p+1)+i.getY(p+2))/3;f.set(r.getX(p),r.getY(p),r.getZ(p));const A=dn(S*.09+5,_*.09-3,2),w=dn(S*.31-8,_*.31+12,2),E=Wn(S,_);l.copy(m[E.id]||m.meadow),o.copy(m.meadow).lerp(l,.72);const R=(w-.5)*.028;o.offsetHSL(R,(A-.5)*.08,(w-.5)*.09+(A-.5)*.05),v<1.7&&o.lerp(c,on(1.7,-.7,v)*.92),v>15&&o.lerp(h,on(15,26,v)*.72),v>28&&o.lerp(u,on(28,38,v)*.6),v>42&&o.lerp(d,on(42,55,v)*.85);const M=on(.86,.52,f.y);M>0&&o.lerp(h,M*.8),E.id==="ember"&&v>8&&o.offsetHSL(-.01,.02,-.02),E.id==="stone"&&v>10&&o.lerp(h,.25);for(let y=0;y<3;y++)a[(p+y)*3]=o.r,a[(p+y)*3+1]=o.g,a[(p+y)*3+2]=o.b}e.setAttribute("color",new Te(a,3)),e.computeBoundingSphere();const x=new jt({vertexColors:!0,flatShading:!0,roughness:.96,metalness:0}),g=new It(e,x);g.receiveShadow=!0,g.name="terrain",this.group.add(g),this.terrain=g}buildWater(){const t=new ln(1500,1500,1,1);t.rotateX(-Math.PI/2);const e={uTime:{value:0},uDeep:{value:new ft(1527388)},uShallow:{value:new ft(6271917)},uSunDir:{value:this.sunDir.clone()},uSunColor:{value:new ft(16770739)},uFogColor:{value:new ft(15321508)}},n=new hn({uniforms:e,transparent:!0,depthWrite:!1,vertexShader:`
        uniform float uTime;
        varying vec3 vWorld;
        varying vec3 vNormal;
        void main() {
          vec3 p = position;
          float w = sin(p.x * 0.09 + uTime * 0.9) * 0.16 + cos(p.z * 0.13 - uTime * 0.7) * 0.12;
          p.y += w;
          vec4 world = modelMatrix * vec4(p, 1.0);
          vWorld = world.xyz;
          float dx = cos(p.x * 0.09 + uTime * 0.9) * 0.09 * 0.16;
          float dz = -sin(p.z * 0.13 - uTime * 0.7) * 0.13 * 0.12;
          vNormal = normalize(vec3(-dx, 1.0, -dz));
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,fragmentShader:`
        uniform vec3 uDeep;
        uniform vec3 uShallow;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        varying vec3 vWorld;
        varying vec3 vNormal;
        void main() {
          vec3 viewDir = normalize(cameraPosition - vWorld);
          vec3 n = normalize(vNormal);
          float fres = pow(1.0 - clamp(dot(viewDir, n), 0.0, 1.0), 2.2);
          vec3 col = mix(uDeep, uShallow, fres * 0.75 + 0.08);
          vec3 refl = reflect(-normalize(uSunDir), n);
          float spec = pow(max(dot(refl, viewDir), 0.0), 90.0);
          col += uSunColor * spec * 2.2;
          float ripple = sin(vWorld.x * 1.7) * sin(vWorld.z * 1.4) * 0.5 + 0.5;
          col += uShallow * ripple * 0.035;
          float alpha = mix(0.78, 0.94, fres);
          gl_FragColor = vec4(col, alpha);
        }
      `}),i=new It(t,n);i.position.y=-1.15,this.group.add(i),this.water=i,this.waterUniforms=e;const r=$e(128,"rgba(255,255,255,0.22)","rgba(255,255,255,0)"),a=new We(new ke({map:r,color:14087656,transparent:!0,opacity:.25,blending:pe,depthWrite:!1}));a.scale.set(90,90,1),a.rotation.z=0,a.position.set(120,-.7,12),a.material.rotation=0,this.group.add(a)}buildPaths(){const t=[[new Q(6,104),new Q(-4,78),new Q(8,52),new Q(-6,30),new Q(0,15)],[new Q(-4,8),new Q(-26,3),new Q(-52,12),new Q(-74,9),new Q(-96,20)],[new Q(6,-6),new Q(14,-34),new Q(10,-60),new Q(28,-82),new Q(32,-108)],[new Q(8,8),new Q(28,24),new Q(52,34),new Q(72,56),new Q(90,84)]],e=new Bt;for(const n of t){const i=new Ka(n.map(f=>new P(f.x,0,f.y))),r=100,a=3.1,o=[],l=[],c=[new ft(12032878),new ft(12888442),new ft(11111778)];for(let f=0;f<=r;f++){const m=f/r,x=i.getPoint(m),g=i.getTangent(m),p=new P(-g.z,0,g.x).normalize(),S=.72+Math.sin(m*Math.PI)*.28,_=a*S,v=Zt(x.x,x.z),A=new P(x.x+p.x*_,v+.09,x.z+p.z*_),w=new P(x.x-p.x*_,v+.09,x.z-p.z*_);o.push(A.x,A.y,A.z,w.x,w.y,w.z);const E=c[f%3];l.push(E.r,E.g,E.b,E.r*.95,E.g*.95,E.b*.95)}const h=[];for(let f=0;f<r;f++){const m=f*2;h.push(m,m+1,m+2,m+1,m+3,m+2)}const u=new xe;u.setAttribute("position",new Jt(o,3)),u.setAttribute("color",new Jt(l,3)),u.setIndex(h),u.computeVertexNormals();const d=new It(u,new jt({vertexColors:!0,roughness:1,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));d.receiveShadow=!0,e.add(d)}this.group.add(e)}buildFoliage(){const t=this.rng,e=[],n=[],i=(G,B,tt)=>n.some(K=>(K.x-G)**2+(K.z-B)**2<tt*tt),r=(G,B,tt)=>rr.some(K=>Math.hypot(G-K.pos.x,B-K.pos.y)<tt),a=this.mobile?1900:2600;for(let G=0;G<a&&e.length<(this.mobile?300:520);G++){const B=t()*Math.PI*2,tt=26+Math.sqrt(t())*176,K=Math.cos(B)*tt,q=Math.sin(B)*tt,rt=Zt(K,q);if(rt<1||rt>24||ai(K,q,2)>.62||Math.hypot(K,q)<24||Math.hypot(K-2,q-44)<9||r(K,q,14)||i(K,q,5.5)||Math.hypot(K,q)>196)continue;n.push({x:K,z:q});const Nt=Wn(K,q);let Y="oak";Nt.id==="aqua"?Y=t()<.68?"palm":"oak":Nt.id==="stone"?Y=t()<.7?"pine":"oak":Nt.id==="forest"?Y=t()<.5?"pine":"oak":Nt.id==="ember"&&(Y=t()<.72?"oak":"pine"),e.push({x:K,z:q,h:rt,variant:Y,scale:.8+t()*.75,rot:t()*Math.PI*2,reg:Nt})}const o={meadow:[5016126,6727242,4160570,7777873],forest:[3107642,4161605,5214796,2776373],ember:[11034164,12810812,9654575,13733951],stone:[5928274,7046493,5072712,8098152],aqua:[4952422,6531450,4161377,7911819]},l=new Ue(.26,.44,1,5,1);l.translate(0,.5,0);const c=new jt({color:5915182,flatShading:!0,roughness:.95}),h=(()=>{const G=[];return[[0,.2,0,1.9,1.65,1.9],[1.05,-.28,.35,1.15,1,1.15],[-1.02,-.22,-.3,1.3,1.12,1.3],[.2,.75,-.2,1.1,1,1.1]].forEach(([tt,K,q,rt,Nt,Y])=>{const st=new je(1,0);st.scale(rt,Nt,Y),st.translate(tt,K,q),G.push(st)}),ir(G)})(),u=(()=>{const G=[];return[[0,1.4,0,1.9,3.4],[0,3.5,0,1.45,3],[0,5.4,0,.95,2.5]].forEach(([tt,K,q,rt,Nt])=>{const Y=new xn(rt,Nt,7,1);Y.translate(tt,K,q),G.push(Y)}),ir(G)})(),d=(()=>{const G=[];for(let B=0;B<5;B++){const tt=new xn(.5,3.3,4,1);tt.scale(1,1,.36),tt.translate(0,1.6,0),tt.rotateZ(-.75+B*.37),tt.rotateY(B*1.25),G.push(tt)}return ir(G)})(),f={oak:{canopy:h,trunkH:2.9,canopyY:3.7,canopyScale:1.5},pine:{canopy:u,trunkH:3.2,canopyY:2.7,canopyScale:1.2},palm:{canopy:d,trunkH:4.6,canopyY:4.3,canopyScale:1.25}};for(const G of Object.keys(f)){const B=e.filter(at=>at.variant===G);if(!B.length)continue;const tt=f[G],K=new Bi(tt.canopy,new jt({color:16777215,flatShading:!0,roughness:.88}),B.length),q=new Bi(l,c,B.length);K.castShadow=!0,K.receiveShadow=!0,q.castShadow=!0,q.receiveShadow=!0,K.frustumCulled=!1,q.frustumCulled=!1;const rt=new ne,Nt=new mn,Y=new P,st=new P,vt=new ft;B.forEach((at,Et)=>{const Ot=at.scale,Ft=tt.trunkH*Ot;Y.set(at.x,at.h-.2,at.z),Nt.setFromEuler(new Ge(0,at.rot,0)),st.set(Ot*(.85+t()*.2),Ft,Ot*(.85+t()*.2)),rt.compose(Y,Nt,st),q.setMatrixAt(Et,rt),Y.set(at.x,at.h-.2+Ft*.92,at.z),st.setScalar(tt.canopyScale*Ot*(.9+t()*.22)),rt.compose(Y,Nt,st),K.setMatrixAt(Et,rt);const $t=o[at.reg.id]||o.meadow;vt.setHex(F0.call(null,$t)).offsetHSL((t()-.5)*.02,0,(t()-.5)*.06),K.setColorAt(Et,vt)}),K.instanceMatrix.needsUpdate=!0,q.instanceMatrix.needsUpdate=!0,K.instanceColor.needsUpdate=!0,this.group.add(q,K)}const m=this.mobile?160:300,x=new je(1,0),g=new Bi(x,new jt({color:16777215,flatShading:!0,roughness:.9}),m),p=new ne,S=new mn,_=new P,v=new P,A=new ft;let w=0;for(let G=0;G<m*4&&w<m;G++){const B=t()*Math.PI*2,tt=20+Math.sqrt(t())*175,K=Math.cos(B)*tt,q=Math.sin(B)*tt,rt=Zt(K,q);if(rt<1.2||rt>20||ai(K,q)>.62)continue;const Nt=Wn(K,q),Y=.45+t()*.75;v.set(K,rt+Y*.25,q),S.setFromEuler(new Ge(t()*.3,t()*6.28,t()*.2)),_.set(Y*1.3,Y*.75,Y*1.2),p.compose(v,S,_),g.setMatrixAt(w,p);const st=o[Nt.id]||o.meadow;A.setHex(st[Math.floor(t()*st.length)]).offsetHSL(0,.02,-.05),g.setColorAt(w,A),w++}g.count=w,g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0,g.castShadow=!0,g.receiveShadow=!0,this.group.add(g),this.buildGrass(o);const E=this.mobile?360:720,R=new je(1,0),M=new Bi(R,new jt({color:16777215,flatShading:!0,roughness:.7,emissive:2232576,emissiveIntensity:.2}),E),y=new ne,L=new P,O=new mn,F=new P,H=new ft,V=[16767370,16752518,16052176,13084927,9430992];let k=0;for(let G=0;G<E*5&&k<E;G++){const B=t()*Math.PI*2,tt=18+Math.sqrt(t())*172,K=Math.cos(B)*tt,q=Math.sin(B)*tt,rt=Zt(K,q);if(rt<1.5||rt>14||ai(K,q)>.5)continue;const Nt=.055+t()*.06;L.set(K,rt+.35,q),O.identity(),F.set(Nt*1.6,Nt,Nt*1.6),y.compose(L,O,F),M.setMatrixAt(k,y),H.setHex(V[Math.floor(t()*V.length)]),M.setColorAt(k,H),k++}M.count=k,M.instanceMatrix.needsUpdate=!0,M.instanceColor.needsUpdate=!0,this.group.add(M),this.buildRocks()}buildGrass(t){const e=[];for(let x=0;x<5;x++){const g=x/5*Math.PI*2+Math.random()*.4,p=.06+Math.random()*.14,S=.55+Math.random()*.55,_=.045+Math.random()*.03,v=Math.cos(g)*p,A=Math.sin(g)*p,w=.16+Math.random()*.2,E=Math.cos(g)*w,R=Math.sin(g)*w,M=new xe,y=[v-_,0,A,v+_,0,A,v+_*.45+E,S*.55,A+R,v-_*.45+E,S*.55,A+R,v+E*1.75,S,A+R*1.75],L=[0,1,2,0,2,3,3,2,4];M.setAttribute("position",new Jt(y,3)),M.setIndex(L),M.computeVertexNormals(),e.push(M)}const n=ir(e);this.grassUniforms={uTime:{value:0}};const i=new P0({color:16777215,side:_e});i.onBeforeCompile=x=>{x.uniforms.uTime=this.grassUniforms.uTime,x.vertexShader=`uniform float uTime;
`+x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          float ph = instanceMatrix[3][0] * 0.63 + instanceMatrix[3][2] * 0.81;
          float bend = sin(uTime * 1.5 + ph) * 0.55 + sin(uTime * 2.4 + ph * 1.9) * 0.18;
          float hgt = max(transformed.y, 0.0);
          transformed.x += bend * hgt * hgt * 0.16;
          transformed.z += bend * hgt * hgt * 0.1;
        #endif`)},i.customProgramCacheKey=()=>"feralis-grass-sway";const r=this.mobile?2800:6200,a=new Bi(n,i,r);a.frustumCulled=!1;const o=new ne,l=new P,c=new mn,h=new P,u=new ft,d={meadow:[7054666,8174165,6067265,9225826],ember:[11827778,12880459,10249528,13802069],aqua:[6202999,7387530,5215336,9359262],stone:[8295526,9282421,7308635,10268546],forest:[4885574,5938768,4028989,7188828]};let f=0;const m=this.rng;for(let x=0;x<r*2&&f<r;x++){const g=m()*Math.PI*2,p=12+Math.sqrt(m())*186,S=Math.cos(g)*p,_=Math.sin(g)*p,v=Zt(S,_);if(v<.6||v>21||ai(S,_)>.72||Math.hypot(S,_)<17)continue;const A=Wn(S,_);l.set(S,v-.03,_),c.setFromEuler(new Ge(0,m()*Math.PI*2,0));const w=.7+m()*.9;h.set(w,w*(.8+m()*.5),w),o.compose(l,c,h),a.setMatrixAt(f,o);const E=d[A.id]||d.meadow;u.setHex(E[Math.floor(m()*E.length)]).offsetHSL(0,0,(m()-.5)*.06),a.setColorAt(f,u),f++}a.count=f,a.instanceMatrix.needsUpdate=!0,a.instanceColor.needsUpdate=!0,this.group.add(a)}buildRocks(){const t=this.mobile?110:220,e=new vo(1,0),n=new Bi(e,new jt({color:16777215,flatShading:!0,roughness:.95}),t);n.castShadow=!0,n.receiveShadow=!0;const i=this.rng,r=new ne,a=new P,o=new mn,l=new P,c=new ft;let h=0;for(let u=0;u<t*4&&h<t;u++){const d=i()*Math.PI*2,f=24+Math.sqrt(i())*172,m=Math.cos(d)*f,x=Math.sin(d)*f,g=Zt(m,x);if(g<.2||Math.hypot(m,x)<20||rr.some(S=>Math.hypot(m-S.pos.x,x-S.pos.y)<8))continue;const p=.4+Math.pow(i(),2)*2.6;a.set(m,g+p*.24,x),o.setFromEuler(new Ge(i()*3,i()*3,i()*3)),l.set(p*(.8+i()*.5),p*(.6+i()*.4),p*(.8+i()*.5)),r.compose(a,o,l),n.setMatrixAt(h,r),c.setHSL(.16,.06,.4+i()*.15),Wn(m,x).id==="stone"&&c.offsetHSL(.01,.02,.02),n.setColorAt(h,c),h++}n.count=h,n.instanceMatrix.needsUpdate=!0,n.instanceColor.needsUpdate=!0,this.group.add(n)}buildWorldTree(){const t=new Bt,e=Zt(0,0);t.position.set(0,e,0),this.treeBaseY=e;const n=new jt({color:6966584,flatShading:!0,roughness:.95}),i=new jt({color:8149826,flatShading:!0,roughness:.9}),r=new jt({color:5980720,flatShading:!0,roughness:1}),a=new It(new Ue(6.2,10.5,2.2,10,1),new jt({color:5405756,flatShading:!0,roughness:1}));a.position.y=.4,a.receiveShadow=!0,a.castShadow=!0,t.add(a);const o=new It(new Sr(8.6,.32,5,28),new jt({color:9276280,flatShading:!0,roughness:.9}));o.rotation.x=Math.PI/2,o.position.y=.9,t.add(o);let l=.4,c=3.5,h=0,u=0;for(let v=0;v<7;v++){const w=c*.78,E=new It(new Ue(w,c,4.3,8,1),v%2?n:i);E.position.set(h,l+4.3/2,u),E.rotation.y=v*.5,E.rotation.z=Math.sin(v*1.4)*.035,E.castShadow=!0,E.receiveShadow=!0,t.add(E),l+=4.3*.94,c=w*.97,h+=Math.sin(v*1.3)*.28,u+=Math.cos(v*1.7)*.22}for(let v=0;v<10;v++){const A=v/10*Math.PI*2+.2,w=new It(new Ue(.28,.95,8.5,5,1),r);w.position.set(Math.cos(A)*4.4,1.7,Math.sin(A)*4.4),w.rotation.z=Math.cos(A)*1.05,w.rotation.x=-Math.sin(A)*1.05,w.rotation.y=A,w.castShadow=!0,w.receiveShadow=!0,t.add(w)}const d=n;for(let v=0;v<7;v++){const A=v/7*Math.PI*2,w=new It(new Ue(.36,1.05,10,5,1),d);w.position.set(Math.cos(A)*4.2+h,l-4+v*.4,Math.sin(A)*4.2+u),w.rotation.z=Math.cos(A)*.75,w.rotation.x=-Math.sin(A)*.75,w.rotation.y=A,w.castShadow=!0,t.add(w)}const f=[4164195,5218677,6469764,8179608,3506269],m=new Bt;new jt({color:16777215,flatShading:!0,roughness:.82,emissive:735786,emissiveIntensity:.32}),[[0,31,0,9.5],[7,28,2,7],[-7,29,-2,7.5],[4,34,-5,6],[-4,33,6,6.5],[10,25,-4,5.5],[-10,26,3,6],[0,38,0,6.5],[6,37,4,4.6],[-6,36,-4,4.8],[11,31,5,4],[-11,32,-6,4.2],[2,24,8,4.5],[-2,24,-9,4.2]].forEach(([v,A,w,E],R)=>{const M=new jt({color:f[R%f.length],flatShading:!0,roughness:.8,emissive:669222,emissiveIntensity:.34}),y=new It(new je(1,1),M);y.position.set(v,A,w),y.scale.set(E,E*.78,E),y.rotation.set(R*.7,R*1.1,R*.4),y.castShadow=!0,y.receiveShadow=!0,m.add(y)}),t.add(m),this.canopy=m;const g=new We(new ke({map:$e(128,"rgba(150,255,220,0.55)","rgba(60,255,190,0)"),color:10354648,transparent:!0,opacity:.35,blending:pe,depthWrite:!1,fog:!1}));g.scale.set(75,75,1),g.position.y=32,t.add(g),this.treeHalo=g;const p=Xl(512);for(let v=0;v<2;v++){const A=new It(new ln(1,1),new me({map:p,color:v?10485728:16769699,transparent:!0,opacity:.55,blending:pe,depthWrite:!1,side:_e}));A.scale.setScalar(18+v*7),A.rotation.x=-Math.PI/2,A.rotation.z=v*.6,A.position.y=6+v*5,t.add(A),this.runeRings.push({mesh:A,speed:(v?-1:1)*(.09+v*.05),phase:v*1.7})}const S=new je(.5,0);for(let v=0;v<9;v++){const A=new It(S,new jt({color:9369044,emissive:4774064,emissiveIntensity:1.4,flatShading:!0,roughness:.3,metalness:.2})),w=v/9*Math.PI*2,E=7.5+v%3*2.4,R=10+v%5*4;A.position.set(Math.cos(w)*E,R,Math.sin(w)*E),A.scale.setScalar(.8+v%3*.35),t.add(A);const M=new We(new ke({map:$e(64,"rgba(160,255,230,0.6)","rgba(90,255,210,0)"),color:10420186,transparent:!0,opacity:.5,blending:pe,depthWrite:!1,fog:!1}));M.scale.setScalar(4.2),M.position.copy(A.position),t.add(M),this.crystals.push({mesh:A,halo:M,angle:w,radius:E,y:R,speed:.12+v%4*.03,bob:v*1.2})}for(let v=0;v<9;v++){const A=v/9*Math.PI*2+.3,w=8+v%3*2,E=[],R=22+v%4*2;for(let L=0;L<=4;L++){const O=L/4;E.push(new P(Math.cos(A)*(w+Math.sin(O*6)*.6),R-O*(6+v%3*2),Math.sin(A)*(w+Math.cos(O*5)*.6)))}const M=new Ka(E),y=new It(new Mo(M,10,.09,4,!1),new jt({color:3107656,roughness:1}));t.add(y)}const _=new It(new ln(20,20),new me({map:p,color:10485728,transparent:!0,opacity:.4,blending:pe,depthWrite:!1,side:_e}));_.rotation.x=-Math.PI/2,_.position.y=.9,t.add(_);for(let v=0;v<8;v++){const A=v/8*Math.PI*2+.3,w=new It(new Ue(.3,.5,2.9,5),new jt({color:9144950,flatShading:!0,roughness:.9}));w.position.set(Math.cos(A)*12.5,1.5,Math.sin(A)*12.5),w.rotation.z=(Math.random()-.5)*.15,w.castShadow=!0,t.add(w);const E=new We(new ke({map:$e(64,"rgba(255,230,160,0.9)","rgba(255,150,50,0)"),color:16766602,transparent:!0,opacity:.8,blending:pe,depthWrite:!1}));E.scale.setScalar(2.2),E.position.set(w.position.x,3.2,w.position.z),t.add(E),this.extras.push({sprite:E,base:2.2,phase:v*.8})}this.group.add(t),this.tree=t}buildShrines(){const t=Xl(512);for(const e of rr){const n=e.pos.x,i=e.pos.y,r=Zt(n,i),a=new Bt;a.position.set(n,r,i);const o=new It(new Ue(5.4,6.4,.9,8),new jt({color:8356464,flatShading:!0,roughness:.95}));o.position.y=.3,o.receiveShadow=!0,o.castShadow=!0,a.add(o);const l=new It(new Ue(6.6,7.4,.4,8),new jt({color:7106658,flatShading:!0,roughness:1}));l.position.y=.02,l.receiveShadow=!0,a.add(l);for(let S=0;S<6;S++){const _=S/6*Math.PI*2+.15,v=new It(new Ue(.36,.5,3.4,6),new jt({color:9277568,flatShading:!0,roughness:.92}));v.position.set(Math.cos(_)*5,2.1,Math.sin(_)*5),v.rotation.y=_,v.rotation.z=(S%2?1:-1)*.035,v.castShadow=!0,v.receiveShadow=!0,a.add(v);const A=new It(new In(.9,.3,.9),new jt({color:10132876,flatShading:!0}));A.position.set(v.position.x,3.9,v.position.z),a.add(A)}const c=new jt({color:8356724,flatShading:!0,roughness:.95}),h=new It(new In(.8,5,.8),c);h.position.set(-3.2,2.6,0);const u=h.clone();u.position.x=3.2;const d=new It(new In(7.6,.8,.9),c);d.position.set(0,5.1,0),h.castShadow=u.castShadow=!0,a.add(h,u,d);const f=new ft(e.color),m=new It(new ys(1.05,0),new jt({color:f,emissive:f,emissiveIntensity:1.1,flatShading:!0,roughness:.25,metalness:.25}));m.position.y=2.6,a.add(m);const x=new We(new ke({map:$e(128,"rgba(255,255,255,0.7)","rgba(255,255,255,0)"),color:f,transparent:!0,opacity:.7,blending:pe,depthWrite:!1}));x.scale.setScalar(9),x.position.y=2.6,a.add(x);const g=new It(new ln(10,10),new me({map:t,color:f,transparent:!0,opacity:.42,blending:pe,depthWrite:!1,side:_e}));g.rotation.x=-Math.PI/2,g.position.y=.78,a.add(g);const p=new It(new Ue(.16,1.6,26,8,1,!0),new me({color:f,transparent:!0,opacity:.08,blending:pe,depthWrite:!1,side:_e}));p.position.y=13,a.add(p),this.group.add(a),this.shrines.push({...e,group:a,crystal:m,halo:x,rune:g,beam:p,y:r,position:new P(n,r,i),activated:!1,timer:Math.random()*4})}}buildEssences(){const t=Wl(99117),e=[];for(let r=0;r<16;r++)for(let a=0;a<40;a++){const o=t()*Math.PI*2,l=26+t()*150,c=Math.cos(o)*l,h=Math.sin(o)*l,u=Zt(c,h);if(!(u<.8||u>22)&&!(ai(c,h)>.5)&&!e.some(d=>Math.hypot(d.x-c,d.z-h)<18)&&!rr.some(d=>Math.hypot(d.pos.x-c,d.pos.y-h)<10)){e.push({x:c,z:h,y:u});break}}const n=new ys(.36,0),i=$e(64,"rgba(150,255,240,0.8)","rgba(60,220,200,0)");e.forEach((r,a)=>{const o=new It(n,new jt({color:10420192,emissive:3727552,emissiveIntensity:1.6,flatShading:!0,roughness:.2}));o.position.set(r.x,r.y+1.1,r.z),this.group.add(o);const l=new We(new ke({map:i,color:8323040,transparent:!0,opacity:.7,blending:pe,depthWrite:!1}));l.scale.setScalar(3.4),l.position.copy(o.position),this.group.add(l),this.essences.push({mesh:o,halo:l,base:r.y+1.1,phase:a*1.3,taken:!1})})}buildFloatingIslands(){const t=new jt({color:7301720,flatShading:!0,roughness:1}),e=new jt({color:6067269,flatShading:!0,roughness:.95}),n=[{x:-122,y:58,z:-118,s:1.35,ph:.4},{x:132,y:47,z:-64,s:.9,ph:2.1},{x:62,y:66,z:154,s:1.05,ph:4}];for(const i of n){const r=new Bt,a=new It(new xn(11,20,7,2),t);a.rotation.x=Math.PI,a.position.y=-7,r.add(a);const o=new It(new Ue(11.3,10,2,7),e);o.position.y=3.4,r.add(o);const l=new Bt,c=new It(new Ue(.5,.9,6,5),new jt({color:5915182,flatShading:!0}));c.position.y=6,l.add(c);const h=new It(new je(4.6,0),new jt({color:5216850,flatShading:!0,roughness:.9}));h.position.y=9.6,h.scale.y=.8,l.add(h),l.position.set(2,3,0),r.add(l);for(let u=0;u<4;u++){const d=new It(new je(.5,0),new jt({color:10352088,emissive:5494448,emissiveIntensity:1.2,flatShading:!0}));d.position.set(Math.cos(u*1.7)*7,-2-u,Math.sin(u*1.7)*7),r.add(d)}r.position.set(i.x,i.y,i.z),r.scale.setScalar(i.s),this.group.add(r),this.islands.push({group:r,baseY:i.y,phase:i.ph})}}buildClouds(){const t=B0(256),e=this.rng;for(let n=0;n<24;n++){const i=new We(new ke({map:t,color:16773336,transparent:!0,opacity:.28+e()*.24,depthWrite:!1,fog:!1})),r=46+e()*90;i.scale.set(r,r*.42,1),i.position.set((e()-.5)*700,62+e()*45,(e()-.5)*700),this.group.add(i),this.clouds.push({sprite:i,speed:.6+e()*1.2})}}buildBirds(){const t=new me({color:2898746,side:_e,transparent:!0,opacity:.7});for(let e=0;e<7;e++){const n=new Bt,i=new xe;i.setAttribute("position",new Jt([0,0,0,2.4,0,.5,0,0,.9],3)),i.computeVertexNormals();const r=new It(i,t),a=new It(i,t);a.scale.x=-1,n.add(r,a),n.scale.setScalar(.9+Math.random()*.7),this.group.add(n),this.birds.push({group:n,l:r,r:a,radius:55+Math.random()*70,y:34+Math.random()*26,angle:Math.random()*Math.PI*2,speed:.04+Math.random()*.04,centerX:(Math.random()-.5)*100,centerZ:(Math.random()-.5)*100,flap:Math.random()*10})}}buildFireflies(){const t=this.mobile?70:150,e=new xe,n=new Float32Array(t*3),i=[];for(let o=0;o<t;o++){const l=Math.random()*Math.PI*2,c=8+Math.sqrt(Math.random())*45,h=Math.cos(l)*c,u=Math.sin(l)*c,d=this.treeBaseY+1+Math.random()*18;n[o*3]=h,n[o*3+1]=d,n[o*3+2]=u,i.push({x:h,y:d,z:u,phase:Math.random()*10,amp:.6+Math.random()*1.6})}e.setAttribute("position",new Te(n,3));const r=new Lc({map:$e(48,"rgba(255,240,180,0.9)","rgba(255,220,120,0)"),size:.62,transparent:!0,opacity:.85,blending:pe,depthWrite:!1,color:16770728,sizeAttenuation:!0}),a=new Dc(e,r);this.group.add(a),this.fireflies={points:a,base:i,positions:n}}buildMapCanvas(){const e=document.createElement("canvas");e.width=e.height=240;const n=e.getContext("2d"),i=n.createImageData(240,240),r=new ft,a=new ft,o={meadow:new ft(6459209),ember:new ft(10119237),aqua:new ft(5738354),stone:new ft(8159859),forest:new ft(4288318)},l=new ft(2908011),c=new ft(11770480),h=new ft(6974561);for(let u=0;u<240;u++)for(let d=0;d<240;d++){const f=(d/240-.5)*sr,m=(u/240-.5)*sr,x=Zt(f,m),g=Wn(f,m);r.copy(o[g.id]),x<.9?r.lerp(l,on(.9,-1.2,x)):x<2.4&&r.lerp(c,.5),x>22&&r.lerp(h,.6);const p=ai(f,m,2.4);r.offsetHSL(0,0,-p*.12+(dn(f*.2,m*.2,2)-.5)*.08);const S=(u*240+d)*4;a.copy(r),i.data[S]=a.r*255,i.data[S+1]=a.g*255,i.data[S+2]=a.b*255,i.data[S+3]=255}n.putImageData(i,0,0),this.mapCanvas=e}heightAt(t,e){return Zt(t,e)}canWalk(t,e){return Math.hypot(t,e)>Vc-6||Zt(t,e)<-.5?!1:ai(t,e,.9)<.95}isNearShrine(t,e,n=5.5){return this.shrines.find(i=>Math.hypot(i.pos.x-t,i.pos.z-e)<n)}nearestShrine(t,e,n=6){let i=null,r=n;for(const a of this.shrines){const o=Math.hypot(a.pos.x-t,a.pos.z-e);o<r&&(r=o,i=a)}return i}update(t,e,n){if(this.time=e,this.waterUniforms&&(this.waterUniforms.uTime.value=e),this.grassUniforms&&(this.grassUniforms.uTime.value=e),this.runeRings.forEach(i=>{i.mesh.rotation.z+=i.speed*t,i.mesh.material.opacity=.36+Math.sin(e*.8+i.phase)*.16}),this.crystals.forEach(i=>{const r=i.angle+e*i.speed;i.mesh.position.set(Math.cos(r)*i.radius,i.y+Math.sin(e*.7+i.bob)*.7,Math.sin(r)*i.radius),i.mesh.rotation.y+=t*.6,i.mesh.rotation.x+=t*.25,i.halo.position.copy(i.mesh.position),i.halo.material.opacity=.32+Math.sin(e*1.4+i.bob)*.14}),this.treeHalo.material.opacity=.26+Math.sin(e*.6)*.08,this.canopy.rotation.y=Math.sin(e*.05)*.03,this.extras.forEach(i=>{i.sprite.scale.setScalar(i.base+Math.sin(e*2.4+i.phase)*.22),i.sprite.material.opacity=.55+Math.sin(e*3+i.phase)*.2}),this.shrines.forEach((i,r)=>{i.crystal.rotation.y+=t*.7,i.crystal.position.y=2.6+Math.sin(e*1.1+r)*.25,i.halo.position.y=i.crystal.position.y,i.halo.material.opacity=.5+Math.sin(e*1.6+r)*.18,i.rune.rotation.z+=t*.08,i.activated?i.beam.material.opacity=.05+Math.sin(e*2+r)*.02:i.beam.material.opacity=.07+Math.sin(e*1.3+r)*.03}),this.essences.forEach(i=>{i.taken||(i.mesh.position.y=i.base+Math.sin(e*1.6+i.phase)*.28,i.mesh.rotation.y+=t*1.1,i.halo.position.copy(i.mesh.position),i.halo.material.opacity=.45+Math.sin(e*2.2+i.phase)*.2)}),this.islands.forEach(i=>{i.group.position.y=i.baseY+Math.sin(e*.35+i.phase)*2.2,i.group.rotation.y+=t*.012}),this.clouds.forEach(i=>{i.sprite.position.x+=i.speed*t,i.sprite.position.x>380&&(i.sprite.position.x=-380)}),this.birds.forEach(i=>{i.angle+=i.speed*t;const r=i.centerX+Math.cos(i.angle)*i.radius,a=i.centerZ+Math.sin(i.angle)*i.radius;i.group.position.set(r,i.y+Math.sin(i.angle*3)*1.5,a),i.group.rotation.y=-i.angle+Math.PI/2;const o=Math.sin(e*7+i.flap)*.5;i.l.rotation.z=o,i.r.rotation.z=-o}),this.fireflies){const i=this.fireflies.positions;this.fireflies.base.forEach((r,a)=>{i[a*3]=r.x+Math.sin(e*.4+r.phase)*r.amp*2.2,i[a*3+1]=r.y+Math.sin(e*.7+r.phase*1.7)*r.amp,i[a*3+2]=r.z+Math.cos(e*.35+r.phase)*r.amp*2.2}),this.fireflies.points.geometry.attributes.position.needsUpdate=!0}}markShrineActivated(t){const e=this.shrines.find(n=>n.id===t);e&&(e.activated=!0,e.crystal.material.emissiveIntensity=.3,e.rune.material.opacity=.12,e.beam.material.opacity=.02)}}const re=(s=1,t=0)=>new je(s,t),te=(s,t,e)=>new In(s,t,e),Cn=(s,t,e,n=6)=>new Ue(s,t,e,n),Se=(s,t,e=6)=>new xn(s,t,e);function it(s,t,e=0,n=0,i=0){const r=new It(s,t);return r.position.set(e,n,i),r}function Wc(s){s.traverse(t=>{var e;t.isMesh&&!((e=t.material)!=null&&e.blending)&&(t.castShadow=!0,t.receiveShadow=!0)})}function Rn(s,t=1,e=.7){const n=new We(new ke({map:$e(64,"rgba(255,255,255,0.9)","rgba(255,255,255,0)"),color:s,transparent:!0,opacity:e,blending:pe,depthWrite:!1,fog:!1}));return n.scale.setScalar(t),n}function V0(){const s=new Bt;s.name="hunter";const t=se(2846563,{roughness:.9}),e=se(1920839,{roughness:.95}),n=se(7031347,{roughness:.85}),i=se(4599839,{roughness:.9}),r=se(12159570,{roughness:.4,metalness:.7}),a=se(14198908,{roughness:.9}),o=se(14280159,{roughness:.24,metalness:.9,emissive:1929059,emissiveIntensity:.22}),l=new jt({color:10289124,emissive:6291408,emissiveIntensity:1.8,flatShading:!0,roughness:.3}),c=new Bt;c.position.set(-.145,.94,0);const h=it(te(.17,.46,.2),i,0,-.22,0),u=it(te(.145,.44,.18),e,0,-.63,.015),d=it(te(.19,.15,.32),n,0,-.86,.07),f=new Bt;f.position.y=-.44,u.position.y=-.2,d.position.y=-.4,f.add(u,d),c.add(h,f);const m=new Bt;m.position.set(.145,.94,0),m.add(h.clone(),f.clone()),s.add(c,m);const x=it(Cn(.28,.25,.26,7),n,0,.98,0);s.add(x);const g=it(Cn(.3,.3,.09,7),i,0,1.05,0);s.add(g);const p=it(te(.12,.09,.05),r,0,1.05,.29);s.add(p);const S=new Bt;S.position.y=1.28,s.add(S);const _=it(Cn(.31,.26,.62,7),t,0,.14,0);_.scale.z=.82,S.add(_);const v=it(te(.38,.36,.07),e,0,.2,.235);v.rotation.x=-.05,S.add(v);const A=it(te(.035,.2,.02),l,0,.22,.275);S.add(A);const w=it(te(.14,.03,.02),l,0,.32,.275);S.add(w);const E=it(te(.13,.16,.09),n,.22,-.11,.15);E.rotation.z=.1,S.add(E);const R=it(te(.11,.14,.08),n,-.22,-.1,.12);R.rotation.z=-.12,S.add(R);const M=it(Cn(.2,.21,.14,7),se(12868931,{roughness:.95}),0,.46,0);S.add(M);const y=it(te(.12,.34,.03),se(10570293),.11,.29,-.2);y.rotation.x=.4,S.add(y);const L=it(re(.17,0),e,-.34,.31,0);L.scale.set(1,.75,1);const O=L.clone();O.position.x=.34,S.add(L,O);const F=new Bt;F.position.set(0,.42,-.13),S.add(F);const H=it(te(.58,.92,.035),e,0,-.4,-.04);H.rotation.x=-.08,F.add(H);const V=it(te(.6,.06,.045),se(12159570,{emissive:5913104,emissiveIntensity:.4}),0,-.84,-.04);V.rotation.x=-.08,F.add(V);const k=it(te(.16,.16,.012),l,0,-.42,-.065);k.scale.set(1,1,1),k.rotation.z=Math.PI/4,F.add(k);const G=new Bt;G.position.y=.55,S.add(G);const B=it(Cn(.075,.09,.12,6),a,0,.01,0);G.add(B);const tt=it(re(.19,1),a,0,.16,0);tt.scale.set(.92,1.05,.95),G.add(tt);const K=it(new xn(.29,.46,7,1,!0),t,0,.22,-.03);K.scale.z=.95,G.add(K);const q=it(re(.2,0),e,0,.14,-.16);q.scale.set(1.1,.9,.8),G.add(q);const rt=it(te(.23,.1,.06),i,0,.11,.16);G.add(rt);const Nt=new me({color:13238253}),Y=it(te(.045,.025,.02),Nt,-.065,.155,.205),st=it(te(.045,.025,.02),Nt,.065,.155,.205);G.add(Y,st);const vt=new Bt;vt.position.set(-.36,1.62,0),s.add(vt);const at=it(te(.14,.34,.15),t,0,-.16,0);vt.add(at);const Et=new Bt;Et.position.y=-.32,vt.add(Et);const Ot=it(te(.12,.32,.13),e,0,-.15,0),Ft=it(re(.085,0),a,0,-.33,.01);Et.add(Ot,Ft);const $t=it(Cn(.085,.075,.14,6),n,0,-.26,0);Et.add($t);const j=new Bt;j.position.set(.36,1.62,0),s.add(j);const ht=it(te(.14,.34,.15),t,0,-.16,0);j.add(ht);const D=new Bt;D.position.y=-.32,j.add(D);const Rt=it(te(.12,.32,.13),e,0,-.15,0),ot=it(re(.085,0),a,0,-.33,.01);D.add(Rt,ot);const bt=it(Cn(.085,.075,.14,6),n,0,-.26,0);D.add(bt);const lt=new Bt;lt.position.set(0,-.35,.02),D.add(lt);const zt=it(Cn(.032,.036,.24,6),i,0,.06,0);lt.add(zt);const St=it(re(.06,0),r,0,-.07,0);lt.add(St);const C=it(te(.34,.055,.09),r,0,.19,0);lt.add(C);const b=it(Se(.055,.16,4),r,-.19,.22,0);b.rotation.z=-.5;const z=b.clone();z.position.x=.19,z.rotation.z=.5,lt.add(b,z);const Z=new yr;Z.moveTo(-.085,0),Z.lineTo(-.075,.92),Z.lineTo(0,1.16),Z.lineTo(.075,.92),Z.lineTo(.085,0),Z.lineTo(-.085,0);const nt=new xo(Z,{depth:.035,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:1});nt.translate(0,.22,-.0175);const J=new It(nt,o);lt.add(J);const Tt=it(te(.018,.72,.045),l,0,.66,0);Tt.material=new me({color:9371617,transparent:!0,opacity:.55}),lt.add(Tt);const dt=Rn(8323033,1.6,.35);dt.position.set(0,.75,0),lt.add(dt),lt.rotation.x=2.62,lt.rotation.z=.12,D.rotation.x=-.28,j.rotation.z=-.1,vt.rotation.z=.1,Et.rotation.x=.18,Wc(s);const yt=new It(new xe,new me({color:10485744,transparent:!0,opacity:0,side:_e,blending:pe,depthWrite:!1}));return yt.visible=!1,s.add(yt),s.userData.parts={legL:c,legR:m,armL:vt,armR:j,foreL:Et,foreR:D,torso:S,head:G,capePivot:F,sword:lt,blade:J,bladeRune:Tt,swordGlow:dt,scarfTail:y,shinLGroup:c.children[1],shinRGroup:m.children[1]},s.userData.materials={cloth:t,clothDark:e,bladeMat:o,runeMat:l},s.userData.height=1.75,s}const Yl={brasalume:{body:14180923,belly:16766881,accent:16754246,eye:16771488,dark:9189924,type:"BRASA",root:"quad",scale:1,glow:16751181,aura:16739133},aquari:{body:4168364,belly:13169130,accent:6543060,eye:15138811,dark:2450549,type:"AQUA",root:"quad",scale:.95,glow:7333600,aura:4180436},musgo:{body:6720580,belly:11848074,accent:9421934,eye:16053704,dark:3758892,type:"MUSGO",root:"quad",scale:1.15,glow:10410869,aura:7317580},pedral:{body:9077620,belly:11971989,accent:16751701,eye:16765562,dark:5590851,type:"PEDRA",root:"golem",scale:1.2,glow:16754780,aura:13662524},zephyro:{body:8681679,belly:14340863,accent:11115519,eye:15725055,dark:4998025,type:"VENTO",root:"bird",scale:1.05,glow:11970303,aura:9272319},umbra:{body:4865896,belly:9141419,accent:13081855,eye:15127807,dark:2761536,type:"VÉU",root:"wraith",scale:1,glow:13081855,aura:10120703}};function bo(s){return Yl[s]||Yl.brasalume}function W0(s){const t=new Bt,e=se(s.body,{roughness:.88}),n=se(s.belly,{roughness:.9}),i=se(s.accent,{roughness:.7,emissive:s.accent,emissiveIntensity:.12}),r=se(s.dark,{roughness:.92}),a=new me({color:s.eye}),o=new me({color:1514006}),l=new me({color:s.glow}),c=it(re(1,1),e,0,.72,0);c.scale.set(.4,.38,.62),t.add(c);const h=it(re(1,1),n,0,.62,.06);h.scale.set(.31,.24,.47),t.add(h);const u=new Bt;u.position.set(0,.92,.5),t.add(u);const d=it(re(1,1),e,0,0,0);d.scale.set(.29,.27,.3),u.add(d);const f=it(re(1,0),n,0,-.06,.24);f.scale.set(.14,.11,.14),u.add(f);const m=it(re(.045,0),r,0,-.04,.37);u.add(m);const x=it(re(.048,0),a,-.13,.06,.22),g=x.clone();g.position.x=.13,u.add(x,g);const p=it(re(.022,0),o,-.135,.06,.26),S=p.clone();S.position.x=.135,u.add(p,S);const _=it(Se(.1,.32,4),e,-.17,.24,-.02);_.rotation.z=.3;const v=_.clone();v.position.x=.17,v.rotation.z=-.3,u.add(_,v);const A=it(Se(.05,.18,4),i,-.17,.24,.01);A.rotation.z=.3;const w=A.clone();w.position.x=.17,w.rotation.z=-.3,u.add(A,w);const E=[];for(let O=0;O<4;O++){const F=O<2,H=O%2===0?-1:1,V=new Bt;V.position.set(H*.21,.52,F?.38:-.36);const k=it(te(.12,.4,.15),e,0,-.2,0),G=it(te(.14,.12,.19),r,0,-.44,.025);V.add(k,G),t.add(V),E.push(V)}const R=new Bt;R.position.set(0,.84,-.56),t.add(R);let M=it(re(.15,0),e,0,0,0);R.add(M);const y=it(re(.12,0),i,0,.04,-.18);return R.add(y),R.rotation.x=-.5,{root:t,parts:{body:c,head:u,legs:E,tail:R,ears:[_,v]},mats:{fur:e,bellyMat:n,accentMat:i,darkMat:r,eyeMat:a,glowMatC:l}}}function X0(s){const t=new Bt,e=se(s.body,{roughness:.95}),n=se(s.belly,{roughness:.95}),i=se(s.dark,{roughness:1}),r=new jt({color:s.accent,emissive:s.accent,emissiveIntensity:1.7,flatShading:!0}),a=new me({color:s.eye}),o=it(re(.55,0),e,0,.95,0);o.scale.set(1,.65,.8),t.add(o);const l=new Bt;l.position.y=1.35,t.add(l);const c=it(re(.65,0),e,0,.1,0);c.scale.set(.95,.85,.72),l.add(c);const h=it(re(.4,0),n,0,.2,.35);h.scale.set(.9,.6,.4),l.add(h);const u=it(te(.06,.55,.05),r,.18,.15,.48);u.rotation.z=.35;const d=it(te(.04,.35,.05),r,-.16,.08,.5);d.rotation.z=-.5,l.add(u,d);const f=it(re(.15,0),r,0,.15,.45);l.add(f);const m=new Bt;m.position.set(0,.85,.12),l.add(m);const x=it(te(.5,.46,.46),e,0,0,0);m.add(x);const g=it(te(.42,.16,.4),n,0,-.29,.06);m.add(g);const p=it(te(.56,.1,.14),i,0,.13,.22);m.add(p);const S=it(te(.11,.06,.04),a,-.15,.04,.24),_=S.clone();_.position.x=.15,m.add(S,_);const v=[];for(let E=0;E<2;E++){const R=E===0?-1:1,M=new Bt;M.position.set(R*.68,1.6,0);const y=it(re(.28,0),e,R*.05,-.1,0);y.scale.set(.9,1.3,.9);const L=it(re(.32,0),n,R*.08,-.55,0),O=it(Se(.1,.3,4),r,R*.08,-.82,0);O.rotation.z=Math.PI,M.add(y,L,O),M.rotation.z=R*.18,t.add(M),v.push(M)}const A=[];for(let E=0;E<2;E++){const R=E===0?-1:1,M=new Bt;M.position.set(R*.26,.75,0);const y=it(re(.27,0),e,0,-.1,0);y.scale.set(.9,1,.9);const L=it(te(.35,.18,.44),n,0,-.37,.06);M.add(y,L),t.add(M),A.push(M)}const w=[];for(let E=0;E<5;E++){const R=it(te(.03,.14,.03),r,(E-2)*.13,1.9-Math.abs(E-2)*.12,.4);l.add(R),w.push(R)}return{root:t,parts:{body:l,head:m,arms:v,legs:A,heart:f,crack1:u,crack2:d,runes:w},mats:{fur:e,bellyMat:n,accentMat:r,darkMat:i,eyeMat:a}}}function q0(s){const t=new Bt,e=se(s.body,{roughness:.8}),n=se(s.belly,{roughness:.85}),i=se(s.accent,{roughness:.6,emissive:s.accent,emissiveIntensity:.2}),r=se(s.dark,{roughness:.85}),a=new me({color:s.eye}),o=new Bt;o.position.y=1.05,t.add(o);const l=it(re(.38,1),e,0,0,0);l.scale.set(.9,1.1,.85),o.add(l);const c=it(re(.26,1),n,0,-.06,.18);c.scale.set(.9,1,.6),o.add(c);const h=it(Se(.3,.8,5),i,0,-.2,-.55);h.rotation.x=-1.9,o.add(h);const u=new Bt;u.position.set(0,.4,.16),o.add(u);const d=it(re(.24,1),e,0,0,0);u.add(d);const f=it(Se(.09,.26,4),i,0,-.02,.24);f.rotation.x=Math.PI/2,u.add(f);const m=it(re(.04,0),a,-.12,.06,.17),x=m.clone();x.position.x=.12,u.add(m,x);const g=it(Se(.08,.4,4),i,0,.24,-.04);g.rotation.x=-.35,u.add(g);const p=it(Se(.06,.3,4),e,.1,.22,-.08);p.rotation.z=-.5,u.add(p);const S=[];for(let v=0;v<2;v++){const A=v===0?-1:1,w=new Bt;w.position.set(A*.28,1.15,0);const E=new yr;E.moveTo(0,0),E.lineTo(A*1.15,.25),E.lineTo(A*1.35,.05),E.lineTo(A*.95,-.3),E.lineTo(A*.3,-.28),E.lineTo(0,-.1);const R=new _o(E);R.rotateX(-Math.PI/2);const M=se(s.body,{roughness:.85,side:_e}),y=new It(R,M),L=it(Se(.14,.5,4),i,A*1.15,.2,.02);L.rotation.z=A*1.5,w.add(y,L),t.add(w),S.push(w)}const _=[];for(let v=0;v<2;v++){const A=v===0?-1:1,w=new Bt;w.position.set(A*.12,.82,0);const E=it(Cn(.025,.03,.3,4),r,0,-.15,0),R=it(Se(.08,.16,3),i,0,-.31,.04);R.rotation.x=Math.PI/2,w.add(E,R),t.add(w),_.push(w)}return{root:t,parts:{body:o,head:u,wings:S,legs:_,tail:h},mats:{fur:e,bellyMat:n,accentMat:i,darkMat:r,eyeMat:a}}}function Y0(s){const t=new Bt,e=se(s.body,{roughness:.92,side:_e}),n=se(s.belly,{roughness:.9}),i=new jt({color:s.accent,emissive:s.accent,emissiveIntensity:1.2,flatShading:!0}),r=new me({color:s.eye}),a=new Bt;a.position.y=1.05,t.add(a);const o=it(new xn(.58,1.5,8,1,!0),e,0,.08,0);a.add(o);const l=it(re(.3,1),n,0,.25,.08);l.scale.set(.8,1,.6),a.add(l);const c=it(new xn(.36,.6,7,1,!0),e,0,.65,-.02);a.add(c);const h=it(re(.19,1),se(1775408,{roughness:1}),0,.58,.13);h.scale.set(.9,1,.55),a.add(h);const u=it(te(.075,.025,.02),r,-.075,.6,.27),d=u.clone();d.position.x=.075,a.add(u,d);const f=it(te(.1,.018,.02),i,0,.53,.26);a.add(f);const m=it(re(.16,0),e,-.36,.45,0),x=m.clone();x.position.x=.36,a.add(m,x);const g=new Bt;g.position.set(-.4,.42,0);const p=it(Se(.08,.55,5),e,-.06,-.22,0);p.rotation.z=Math.PI,g.add(p);const S=g.clone();S.position.x=.4,S.scale.x=-1,a.add(g,S);const _=[];for(let A=0;A<5;A++){const w=new Bt,E=A/5*Math.PI*2;w.position.set(Math.cos(E)*.28,-.45-A%2*.2,Math.sin(E)*.28);const R=it(new xn(.1,.7,4,1,!0),e,0,-.28,0);R.rotation.x=Math.PI,w.add(R),a.add(w),_.push(w)}const v=[];for(let A=0;A<2;A++){const w=it(re(.08,0),i,A?.6:-.6,.4+A*.2,.1),E=Rn(s.glow,.8,.8);E.position.copy(w.position),a.add(w,E),v.push({orb:w,glow:E,phase:A*2.1})}return{root:t,parts:{body:a,head:a,arms:[g,S],wisps:_,orbs:v,eyeL:u,eyeR:d,mouth:f},mats:{fur:e,bellyMat:n,accentMat:i,eyeMat:r}}}const $l=new jt({color:15320170,metalness:.75,roughness:.3,emissive:7031314,emissiveIntensity:.35});function Xc(s,{boss:t=!1,companion:e=!1}={}){const n=bo(s);let i;n.root==="golem"?i=X0(n):n.root==="bird"?i=q0(n):n.root==="wraith"?i=Y0(n):i=W0(n);const{root:r,parts:a,mats:o}=i;if(s==="brasalume"){const c=new me({color:16757596,transparent:!0,opacity:.9}),h=new Bt;h.position.set(0,.02,-.2);for(let m=0;m<3;m++){const x=it(Se(.16-m*.03,.55+m*.22,5),c,0,.32+m*.18,-.02-m*.05);x.rotation.x=-.2,h.add(x)}const u=Rn(16747068,1.7,.65);u.position.y=.42,h.add(u),a.tail.add(h),a.flame=h,a.flameMat=c;const d=se(n.accent,{emissive:n.accent,emissiveIntensity:.5});for(let m=0;m<3;m++){const x=it(Se(.06,.28-m*.05,4),d,0,.28+(m-1)*.04,-.02-m*.09);x.rotation.x=-.4-m*.12,a.head.add(x)}const f=it(Se(.16,.5,5),c,0,.88,-.5);f.rotation.x=-.6,r.add(f)}if(s==="aquari"){const c=se(n.accent,{roughness:.5,emissive:n.accent,emissiveIntensity:.22,side:_e}),h=it(Se(.12,.55,4),c,0,1.05,-.1);h.rotation.x=-.3,r.add(h);const u=it(Se(.3,.5,4),c,0,.85,-.78);u.rotation.x=Math.PI/2,u.scale.set(1,1,.3),r.add(u);for(let f=0;f<3;f++){const m=it(re(.035,0),new me({color:13238264,transparent:!0,opacity:.8}),(f-1)*.14,1.12+f*.04,.02);m.userData.float=f*1.7,r.add(m),a[`ripple${f}`]=m}const d=Rn(8385775,1.3,.5);d.position.set(0,1.2,.28),r.add(d),a.droplet=d}if(s==="musgo"){const c=se(8235087,{roughness:1});for(let x=0;x<5;x++){const g=it(re(.16+Math.random()*.12,0),c,(Math.random()-.5)*.4,.98+Math.random()*.1,-.25+Math.random()*.45);g.scale.y=.6,r.add(g)}const h=se(15787720,{roughness:.5}),u=it(Se(.045,.3,4),h,-.17,-.06,.34);u.rotation.x=.9;const d=u.clone();d.position.x=.17,a.head.add(u,d);const f=se(n.dark,{roughness:1});for(let x=0;x<4;x++){const g=it(Se(.09,.36,4),f,(x-1.5)*.1,.12+x*.03,-.1);g.rotation.x=-.9,a.head.add(g)}const m=new me({color:10805370,transparent:!0,opacity:.8});for(let x=0;x<4;x++){const g=it(Se(.05,.2,3),m,(Math.random()-.5)*.5,1.1+Math.random()*.2,-.2+Math.random()*.4);g.rotation.z=Math.random()*2,r.add(g),a[`leaf${x}`]=g}}if(s==="pedral"){const c=se(n.dark,{roughness:1});for(let h=0;h<6;h++){const u=it(Se(.12,.4,4),c,(Math.random()-.5)*.8,1.7+Math.random()*.4,-.35+Math.random()*.3);u.rotation.z=Math.random()*.8-.4,u.rotation.x=-.4,r.add(u)}a.heartGlow=Rn(16751704,1.6,.6),a.heartGlow.position.set(0,1.5,.62),r.add(a.heartGlow)}if(s==="zephyro"){for(let c=0;c<3;c++){const h=it(Se(.07,.5,4),se(n.accent,{emissive:n.accent,emissiveIntensity:.3}),0,.1,-.5-c*.16);h.rotation.x=-1.2-c*.12,h.rotation.z=(c-1)*.25,a.body.add(h)}a.gustGlow=Rn(12167423,1.8,.35),a.gustGlow.position.set(0,1.1,0),r.add(a.gustGlow)}if(s==="umbra"){const c=Rn(n.glow,2.4,.28);c.position.y=1.05,r.add(c),a.aura=c}if(t){const c=new Bt;c.position.y=s==="umbra"?.88:s==="pedral"?.9:s==="zephyro"?.68:.36;const h=it(new Sr(.28,.045,4,10),$l,0,0,0);h.rotation.x=Math.PI/2,c.add(h);for(let f=0;f<5;f++){const m=f/5*Math.PI*2,x=it(Se(.05,.22,4),$l,Math.cos(m)*.28,.08,Math.sin(m)*.28);c.add(x)}const u=Rn(16765562,3.4,.3);u.position.y=.1,c.add(u),a.head.add(c),a.crown=c;const d=Rn(n.aura,6.5,.22);d.position.y=1.2,r.add(d),a.bossAura=d}const l=n.scale*(t?2.05:e?.78:1);return r.scale.setScalar(l),r.userData.species=s,r.userData.height=(n.root==="golem"?2.1:n.root==="bird"?1.7:n.root==="wraith"?1.9:1.1)*l,Wc(r),{root:r,parts:a,mats:o,style:n}}const Zl=[{duration:.46,hitStart:.12,hitEnd:.22,damage:12,stamina:7,range:3.4,arc:1.15,knock:2,lunge:2.2},{duration:.48,hitStart:.13,hitEnd:.23,damage:14,stamina:7,range:3.5,arc:1.2,knock:2.2,lunge:2},{duration:.62,hitStart:.19,hitEnd:.29,damage:26,stamina:12,range:3.9,arc:1.5,knock:4.2,lunge:3.2}],$0={duration:.82,hitStart:.3,hitEnd:.42,damage:42,stamina:23,range:4.3,arc:1.7,knock:6.5,lunge:3.4},oa=.42;class Z0{constructor(t,e,n){this.world=e,this.audio=n,this.model=V0(),this.model.rotation.order="YXZ",t.add(this.model),this.position=new P(0,0,34),this.position.y=Zt(0,34),this.spawnPoint=this.position.clone(),this.velocity=new P,this.yaw=Math.PI,this.modelYaw=Math.PI,this.aimYaw=Math.PI,this.level=1,this.xp=0,this.xpToNext=90,this.maxHp=120,this.hp=120,this.maxStamina=100,this.stamina=100,this.staminaDelay=0,this.walkPhase=0,this.idleTime=0,this.sprinting=!1,this.moving=!1,this.dead=!1,this.attack=null,this.attackCooldown=0,this.comboStep=0,this.comboTimer=0,this.comboWindow=0,this.attackBuffer=0,this.heavyBuffer=0,this.dodgeBuffer=0,this.dodgeTimer=0,this.dodgeCooldown=0,this.invuln=0,this.hitstun=0,this.lastHurt=99,this.time=0,this.events={onSlash:null,onHeavy:null,onDodge:null,onHurt:null,onDeath:null,onLevelUp:null,onStep:null,onStaminaFail:null,onCombo:null},this.style={trailColor:10485744},this.model.position.copy(this.position),this.model.rotation.y=this.yaw}get isAttacking(){return!!this.attack}get isDodging(){return this.dodgeTimer>0}get isBusy(){return this.isAttacking||this.isDodging||this.hitstun>0}get forward(){return new P(Math.sin(this.yaw),0,Math.cos(this.yaw))}setAim(t){this.aimYaw=t}tryAttack(t=!1){this.dead||this.isDodging||this.hitstun>0||(t?this.heavyBuffer=.24:this.attackBuffer=.26)}tryDodge(){this.dead||this.hitstun>0||(this.dodgeBuffer=.22)}startDodge(t){var n,i,r,a;if(this.stamina<20){(i=(n=this.events).onStaminaFail)==null||i.call(n,"Vigor insuficiente para esquivar");return}this.stamina-=20,this.staminaDelay=.7,this.dodgeTimer=oa,this.dodgeCooldown=.24,this.invuln=.34,this.attack=null;const e=t.lengthSq()>.05?t.clone().normalize():this.forward;this.dodgeDir=e,this.yaw=Math.atan2(e.x,e.z),(a=(r=this.events).onDodge)==null||a.call(r,this.position.clone(),this.yaw)}startAttack(t){var i,r,a,o;const e=t?$0:Zl[this.comboStep%Zl.length];if(this.stamina<e.stamina*.5){(r=(i=this.events).onStaminaFail)==null||r.call(i,"Vigor insuficiente");return}this.stamina=Math.max(0,this.stamina-e.stamina),this.staminaDelay=.8,this.attack={heavy:t,stage:t?3:this.comboStep,time:0,cfg:e,hitDone:!1,buffered:!1},t||(o=(a=this.events).onCombo)==null||o.call(a,this.comboStep+1);const n=new P(Math.sin(this.aimYaw),0,Math.cos(this.aimYaw));this.yaw=this.aimYaw,this.velocity.add(n.multiplyScalar(e.lunge))}addXp(t){var n,i;this.xp+=t;let e=!1;for(;this.xp>=this.xpToNext;)this.xp-=this.xpToNext,this.level++,this.xpToNext=Math.round(90+this.level*62),this.maxHp=120+(this.level-1)*16,this.maxStamina=100+(this.level-1)*3,this.hp=this.maxHp,this.stamina=this.maxStamina,e=!0;e&&((i=(n=this.events).onLevelUp)==null||i.call(n,this.level))}heal(t){const e=this.hp;return this.hp=Math.min(this.maxHp,this.hp+t),this.hp-e}takeDamage(t,e){var i,r,a,o;if(this.dead||this.invuln>0)return!1;const n=Math.max(1,t*(1-Math.min(.32,(this.level-1)*.035)));return this.hp=Math.max(0,this.hp-n),this.invuln=.62,this.hitstun=.26,this.attack=null,this.lastHurt=0,this.stamina=Math.max(0,this.stamina-8),(r=(i=this.events).onHurt)==null||r.call(i,n,e),this.hp<=0&&(this.dead=!0,(o=(a=this.events).onDeath)==null||o.call(a)),!0}respawn(){this.dead=!1,this.hp=this.maxHp,this.stamina=this.maxStamina,this.position.copy(this.spawnPoint),this.position.y=Zt(this.position.x,this.position.z),this.velocity.set(0,0,0),this.attack=null,this.dodgeTimer=0,this.invuln=2,this.model.position.copy(this.position)}consumeHit(){if(!this.attack||this.attack.hitDone)return null;const{time:t,cfg:e,heavy:n,stage:i}=this.attack;return t>=e.hitStart&&t<=e.hitEnd?(this.attack.hitDone=!0,{position:this.position.clone(),yaw:this.yaw,range:e.range,arc:e.arc,damage:e.damage*(1+(this.level-1)*.085),knock:e.knock,heavy:n,stage:i}):null}update(t,e,n,i){var d,f;if(this.time=n,this.dead){this.updateModel(t,0,i,!1),this.model.position.copy(this.position);return}if(this.attackCooldown=Math.max(0,this.attackCooldown-t),this.dodgeCooldown=Math.max(0,this.dodgeCooldown-t),this.invuln=Math.max(0,this.invuln-t),this.hitstun=Math.max(0,this.hitstun-t),this.attackBuffer=Math.max(0,this.attackBuffer-t),this.heavyBuffer=Math.max(0,this.heavyBuffer-t),this.dodgeBuffer=Math.max(0,this.dodgeBuffer-t),this.comboWindow=Math.max(0,this.comboWindow-t),this.lastHurt+=t,!this.attack&&this.comboWindow<=0&&(this.comboStep=0),this.staminaDelay=Math.max(0,this.staminaDelay-t),this.staminaDelay<=0){const m=this.isDodging||this.sprinting?0:19;this.stamina=Math.min(this.maxStamina,this.stamina+m*t)}this.lastHurt>7&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+1.6*t));const r=e.move||{x:0,y:0},a=new P;if(Math.abs(r.x)>.01||Math.abs(r.y)>.01){const m=new P(Math.sin(e.cameraYaw),0,Math.cos(e.cameraYaw)),x=new P(Math.cos(e.cameraYaw),0,-Math.sin(e.cameraYaw));a.copy(m).multiplyScalar(r.y).add(x.multiplyScalar(r.x)),(a.lengthSq()>1||a.lengthSq()>.001)&&a.normalize()}const o=Math.min(1,Math.hypot(r.x,r.y));if(this.moving=o>.12,e.attackPressed&&(this.attackBuffer=.26),e.heavyPressed&&(this.heavyBuffer=.26),e.dodgePressed&&(this.dodgeBuffer=.22),this.dodgeTimer>0){this.dodgeTimer-=t;const m=1-Math.max(0,this.dodgeTimer)/oa,x=13.5*(1-er.outCubic(m)*.55);this.velocity.x=this.dodgeDir.x*x,this.velocity.z=this.dodgeDir.z*x,this.dodgeTimer<=0&&(this.dodgeTimer=0,this.dodgeBuffer=0)}else if(this.dodgeBuffer>0&&this.dodgeCooldown<=0&&this.hitstun<=0&&!this.attack)this.startDodge(a);else if(!this.attack&&this.hitstun<=0){this.sprinting=e.sprint&&o>.2&&this.stamina>1;const m=this.sprinting?9.6:6.4,x=a.multiplyScalar(m*(this.moving?1:0));if(this.velocity.x=mt(this.velocity.x,x.x,this.moving?12:9,t),this.velocity.z=mt(this.velocity.z,x.z,this.moving?12:9,t),this.sprinting&&this.moving&&(this.stamina=Math.max(0,this.stamina-15*t)),this.moving){const g=Math.atan2(a.x,a.z);this.yaw=Jn(this.yaw,g,13,t)}this.heavyBuffer>0&&this.attackCooldown<=0?(this.heavyBuffer=0,this.startAttack(!0)):this.attackBuffer>0&&this.attackCooldown<=0&&(this.attackBuffer=0,this.startAttack(!1))}else this.attack?(this.velocity.x=mt(this.velocity.x,0,7,t),this.velocity.z=mt(this.velocity.z,0,7,t),this.attackBuffer>0&&this.attack.time>this.attack.cfg.hitStart+.02&&!this.attack.buffered&&(this.attack.buffered=!0)):(this.velocity.x=mt(this.velocity.x,0,10,t),this.velocity.z=mt(this.velocity.z,0,10,t));const l=this.position.x+this.velocity.x*t,c=this.position.z+this.velocity.z*t;this.world.canWalk(l,this.position.z)||this.isDodging?Math.hypot(l,this.position.z)<201&&(this.position.x=l):this.velocity.x*=.2,this.world.canWalk(this.position.x,c)||this.isDodging?Math.hypot(this.position.x,c)<201&&(this.position.z=c):this.velocity.z*=.2;const h=Zt(this.position.x,this.position.z);if(this.position.y=mt(this.position.y,h,18,t),this.attack&&(this.attack.time+=t,this.attack.time>=this.attack.cfg.duration)){const m=this.attack.heavy,x=this.attack.stage,g=this.attack.buffered||this.attackBuffer>0;this.attack=null,this.attackCooldown=m?.24:.09,m?(this.comboStep=0,this.comboWindow=0):x>=2?(this.comboStep=0,this.comboWindow=.32):(this.comboStep=x+1,this.comboWindow=.62),g&&(this.attackBuffer=.16,this.heavyBuffer=0)}const u=Math.hypot(this.velocity.x,this.velocity.z);if(u>.8&&!this.isAttacking){const m=Math.sin(this.walkPhase);this.walkPhase+=t*(this.sprinting?13:9.2);const x=Math.sin(this.walkPhase);m>0&&x<=0&&((f=(d=this.events).onStep)==null||f.call(d))}else this.walkPhase+=t*1.6;this.updateModel(t,o,i,u),this.model.position.copy(this.position),this.model.rotation.y=this.modelYaw}updateModel(t,e,n,i){const r=this.model.userData.parts,a=this.time,o=.1,l=-.1;let c=0,h=o,u=0,d=l,f=.18,m=-.28,x=2.62,g=.12,p=0,S=0,_=0,v=0,A=0,w=0,E=0,R=0,M=0,y=0,L=0,O=1;const F=Math.sin(a*1.8);if(A=.06+Math.sin(a*2.1)*.03,h+=F*.015,y=F*.012,e>.1&&i>.5&&!this.attack&&!this.isDodging){const V=Math.sin(this.walkPhase),k=Math.sin(this.walkPhase+Math.PI),G=Math.min(1,i/6)*(this.sprinting?1.15:.8);w=V*.62*G,E=k*.62*G,R=Math.max(0,k)*-.55*G,M=Math.max(0,V)*-.55*G,c=k*.38*G,u=V*.3*G,_=V*.05*G,p=V*.06*G,y=Math.abs(Math.sin(this.walkPhase))*.045,L=.04+G*.05,A=.15+G*.3+Math.sin(this.walkPhase*2)*.05}if(this.isDodging){const V=1-this.dodgeTimer/oa,k=Math.sin(Math.min(1,V*1.2)*Math.PI);L=.32*k,S=.35*k,h=.5*k,d=-.5*k,m=-1.1*k,x=2.9,w=-.65*k,E=.5*k,R=-.8*k,y=-.18*k,O=1-.06*k}if(this.attack){const V=this.attack,k=V.cfg.duration,G=ue(V.time/k,0,1),B=ue(G/.34,0,1),tt=ue((G-.3)/.32,0,1),K=ue((G-.66)/.34,0,1),q=er.outCubic(tt)*(1-er.inOutSine(K)*.65),rt=er.outCubic(B)*(1-tt*.55);V.heavy?(u=-2*rt+2.5*q,d=-.35*rt+.3*q,m=-1.5*rt+.4*q,x=2*rt+2.1*q,g=.1,p=-.75*rt+.65*q,S=-.22*rt+.3*q,h=.5*rt+.2*q,c=-1.1*rt+.5*q,L=.22*rt+.12*q,y=.18*rt-.1*q,w=-.3*q,E=.35*q,M=-.4*q):V.stage===0?(d=-1.15*rt+1.55*q,u=-.35*rt+1.1*q,m=-1.35*rt+.55*q,x=1.3*rt+.8*q,g=0,p=-.62*rt+.7*q,h=.35*rt-.15*q,c=-.25*q,v=.18*rt-.2*q,L=.04+.12*q):V.stage===1?(d=1.05*rt-1.55*q,u=.95*rt-.35*q,m=.5*rt-1.1*q,x=2-.6*q,p=.55*rt-.75*q,h=-.2*rt+.4*q,v=-.15*rt+.2*q,L=.04+.1*q,w=.25*q):(p=-1.1*rt+1.8*q,d=-1*rt+1.4*q,u=-1.3*rt+1.8*q,m=-1*rt+.3*q,x=2.2,g=.2,h=.7*rt-.35*q,c=-.5*rt+.7*q,L=.1+.15*q,y=.12*rt-.06*q,w=-.4*q,E=.4*q,M=-.5*q),A=.12+.35*q,this.hitstun>0&&(S-=.3)}if(this.hitstun>0){const V=ue(this.hitstun/.26,0,1);L=-.22*V,S=-.22*V,c=-.4*V,u=-.4*V,y=-.03*V,A=.35*V}this.dead&&(L=-1.2,y=-.7,c=.5,u=.5,A=.5);const H=this.isAttacking?26:this.isDodging?20:14;r.armL.rotation.x=mt(r.armL.rotation.x,c,H,t),r.armL.rotation.z=mt(r.armL.rotation.z,h,H,t),r.armR.rotation.x=mt(r.armR.rotation.x,u,H,t),r.armR.rotation.z=mt(r.armR.rotation.z,d,H,t),r.foreL.rotation.x=mt(r.foreL.rotation.x,f,H,t),r.foreR.rotation.x=mt(r.foreR.rotation.x,m,H,t),r.sword.rotation.x=mt(r.sword.rotation.x,x,H,t),r.sword.rotation.z=mt(r.sword.rotation.z,g,H,t),!this.attack||!this.attack.hitDone?r.swordGlow.material.opacity=.2+Math.sin(a*3.1)*.08:r.swordGlow.material.opacity=.55,r.torso.rotation.y=mt(r.torso.rotation.y,p,H,t),r.torso.rotation.x=mt(r.torso.rotation.x,S,H,t),r.torso.rotation.z=mt(r.torso.rotation.z,_,H,t),r.head.rotation.y=mt(r.head.rotation.y,v,H,t),r.head.rotation.x=mt(r.head.rotation.x,this.attack?-.08:0,8,t),r.capePivot.rotation.x=mt(r.capePivot.rotation.x,A,6,t),r.capePivot.rotation.z=mt(r.capePivot.rotation.z,-_*.7+Math.sin(a*1.2)*.02,6,t),r.scarfTail.rotation.x=mt(r.scarfTail.rotation.x,.4+A*1.4,4,t),r.legL.rotation.x=mt(r.legL.rotation.x,w,20,t),r.legR.rotation.x=mt(r.legR.rotation.x,E,20,t),r.shinLGroup&&(r.shinLGroup.rotation.x=mt(r.shinLGroup.rotation.x,R,18,t)),r.shinRGroup&&(r.shinRGroup.rotation.x=mt(r.shinRGroup.rotation.x,M,18,t)),this.model.position.y=this.position.y+y,this.model.scale.y=mt(this.model.scale.y,O,12,t),this.model.rotation.x=mt(this.model.rotation.x,L,10,t),this.isDodging||this.attack||this.hitstun>0?this.modelYaw=Jn(this.modelYaw,this.yaw,24,t):this.modelYaw=Jn(this.modelYaw,this.yaw,12,t),r.bladeRune}get attackProgress(){return this.attack?ue(this.attack.time/this.attack.cfg.duration,0,1):0}}const Jl={brasalume:{name:"Brasalume",type:"BRASA",glyph:"ᚠ",color:"#ff8a5c",hp:74,damage:11,speed:3.5,range:2.2,aggro:11,xp:32,seal:.5,special:"fire",lore:"Uma raposa de brasa que caça nas cinzas."},aquari:{name:"Aquari",type:"AQUA",glyph:"ᚹ",color:"#57c7e3",hp:64,damage:10,speed:3.2,range:9,aggro:12,xp:30,seal:.55,special:"tide",ranged:!0,lore:"Lontra das marés, dispara gotas afiadas."},musgo:{name:"Musgo",type:"FLORA",glyph:"ᛃ",color:"#8fce6d",hp:104,damage:13,speed:2.9,range:2.6,aggro:10,xp:38,seal:.45,special:"charge",lore:"Javali coberto de musgo vivo. Investe sem hesitar."},pedral:{name:"Pedral",type:"PEDRA",glyph:"ᛏ",color:"#d9a05b",hp:128,damage:15,speed:2.4,range:2.9,aggro:9,xp:46,seal:.4,special:"slam",lore:"Golem antigo. Suas rachaduras guardam brasa."},zephyro:{name:"Zephyro",type:"VENTO",glyph:"ᛋ",color:"#a99bff",hp:66,damage:10,speed:4.3,range:8,aggro:14,xp:34,seal:.5,special:"gust",ranged:!0,flying:!0,lore:"Falcão de vento que desenha correntes no céu."},umbra:{name:"Umbra",type:"VÉU",glyph:"ᛟ",color:"#c79cff",hp:78,damage:12,speed:3.7,range:8.5,aggro:13,xp:40,seal:.4,special:"blink",ranged:!0,floating:!0,lore:"Espectro que se desfaz em névoa violeta."}},Kl={meadow:{brasalume:.3,aquari:.14,musgo:.24,pedral:.12,zephyro:.12,umbra:.08},ember:{brasalume:.5,pedral:.2,zephyro:.1,umbra:.12,musgo:.08},aqua:{aquari:.52,musgo:.18,zephyro:.12,umbra:.12,brasalume:.06},stone:{pedral:.5,musgo:.18,zephyro:.16,umbra:.12,brasalume:.04},forest:{musgo:.4,umbra:.26,zephyro:.16,aquari:.1,brasalume:.08}};function J0(s){const t=Kl[s]||Kl.meadow;let e=Math.random();for(const[n,i]of Object.entries(t))if(e-=i,e<=0)return n;return"brasalume"}function Kn(s){return Jl[s]||Jl.brasalume}function K0(){const s=new Bt,t=new It(new ln(1.16,.13),new me({color:528911,transparent:!0,opacity:.72,depthTest:!1,depthWrite:!1})),e=new ln(1.08,.075);e.translate(.54,0,0);const n=new It(e,new me({color:16743004,depthTest:!1,depthWrite:!1}));return n.position.set(-.54,0,.002),s.add(t,n),s.renderOrder=9,t.renderOrder=9,n.renderOrder=10,s.visible=!1,{group:s,fill:n,bg:t}}class ar{constructor(t,e,{level:n=1,position:i,boss:r=!1,elite:a=!1,shrine:o=null}={}){if(this.game=t,this.speciesId=e,this.info=Kn(e),this.style=bo(e),this.boss=r,this.elite=a,this.shrine=o,this.level=n,this.maxHp=Math.round(this.info.hp*(1+(n-1)*.16)*(a?1.7:1)*(r?6.2:1)),this.hp=this.maxHp,this.damage=this.info.damage*(1+(n-1)*.12)*(a?1.25:1)*(r?1.55:1),this.speed=this.info.speed*(r?.8:1)*(a?.95:1),this.xpValue=Math.round(this.info.xp*(1+(n-1)*.3)*(a?2:1)*(r?12:1)),this.container=new Bt,this.container.position.copy(i),this.spawnPosition=i.clone(),this.position=this.container.position,this.yaw=Math.random()*Math.PI*2,this.targetYaw=this.yaw,this.velocity=new P,this.modelData=Xc(e,{boss:r,companion:!1}),this.model=this.modelData.root,this.parts=this.modelData.parts,this.mats=this.modelData.mats,this.container.add(this.model),this.modelHeight=this.model.userData.height,this.baseScale=this.model.scale.x,this.hover=this.info.flying||this.info.floating,a&&!r){this.model.scale.multiplyScalar(1.16),this.modelHeight*=1.16;const l=new We(new ke({map:$e(64,"rgba(255,255,255,0.6)","rgba(255,255,255,0)"),color:this.style.aura,transparent:!0,opacity:.4,blending:pe,depthWrite:!1}));l.scale.setScalar(3.4),l.position.y=.9,this.container.add(l),this.aura=l}this.bar=K0(),this.bar.group.position.y=this.modelHeight+.55,this.container.add(this.bar.group),t.scene.add(this.container),this.state="idle",this.stateTime=0,this.aggro=r,this.attackCd=Ee(.4,1.4),this.specialCd=Ee(3.5,6),this.wanderTarget=null,this.wanderTimer=Ee(1,4),this.walkPhase=Math.random()*10,this.walkAmount=0,this.bobPhase=Math.random()*10,this.phase=1,this.hitFlash=0,this.hitStun=0,this.dying=!1,this.deathTimer=0,this.tamed=!1,this.enraged=0,this.attackAnim=0,this.charging=0,this.chargeTimer=0,this.attackCooldownMod=1,this.time=0,this.velocitySmooth=0,this.name=r?this._bossName():this.info.name,this.alive=!0,this.alertTimer=0,this.stuckTimer=0,this.baseEmissives=[],this.model.traverse(l=>{l.isMesh&&l.material&&l.material.emissive&&this.baseEmissives.push({mat:l.material,color:l.material.emissive.clone(),intensity:l.material.emissiveIntensity})}),r&&(this.modelHeight*=1),this.model.scale.multiplyScalar(.01),this.spawnScale=this.baseScale,this.spawnIn=0,this._applyBarRatio(),r&&(this.aggro=!0),this.bossName=r?this._bossName():null}_bossName(){return this.shrine?this.shrine.bossName:`Guardião ${this.info.name}`}get hpRatio(){return ue(this.hp/this.maxHp,0,1)}get weakened(){return this.hpRatio<=.4&&!this.boss&&!this.tamed&&!this.dying}get sealChance(){if(this.boss)return 0;const t=this.info.seal;return ue(t+(1-this.hpRatio)*.55+(this.level-this.game.player.level)*.015,.15,.97)}_applyBarRatio(){const t=this.hpRatio;this.bar.fill.scale.x=Math.max(.001,t),this.bar.fill.material.color.setHex(t>.55?10477690:t>.25?15778908:16738896)}setAggro(t){var e,n,i,r;this.aggro!==t&&(this.aggro=t,t&&(this.bar.group.visible=!0,!this.boss&&this.alertTimer<=0&&(this.alertTimer=1.2,(n=(e=this.game.audio)==null?void 0:e.roar)==null||n.call(e),(r=(i=this.game.ui)==null?void 0:i.monsterAlert)==null||r.call(i,this))))}takeDamage(t,{crit:e=!1,knock:n=0,source:i="player",heavy:r=!1}={}){var o,l,c,h;if(!this.alive||this.tamed)return 0;const a=Math.round(t);if(this.hp=Math.max(0,this.hp-a),this.hitFlash=.14,this.setAggro(!0),this.bar.group.visible=!0,this._applyBarRatio(),(o=this.game.fx)==null||o.burst(new P(this.position.x,this.position.y+this.modelHeight*.6,this.position.z),this.style.glow,r?22:12,{speed:6,gravity:4,size:.45,life:.55}),(l=this.game.fx)==null||l.damageNumber(new P(this.position.x,this.position.y+this.modelHeight*.5,this.position.z),String(a),e?"crit":""),(h=(c=this.game.audio)==null?void 0:c.hit)==null||h.call(c,e||r),n>0){const u=new P(this.position.x-this.game.player.position.x,0,this.position.z-this.game.player.position.z).normalize();this.velocity.addScaledVector(u,n*2.2),this.hitStun=Math.max(this.hitStun,r?.42:.22)}return this.hp<=0&&this.die(i),a}enrage(t=8){var e,n,i;this.enraged=t,this.speed*=1.25,this.damage*=1.3,this.setAggro(!0),(e=this.game.fx)==null||e.burst(new P(this.position.x,this.position.y+1,this.position.z),16735292,30,{speed:7,size:.55,life:.8,gravity:2}),(i=(n=this.game.audio)==null?void 0:n.roar)==null||i.call(n)}die(t="player"){var n,i,r,a,o,l;if(!this.alive)return;this.alive=!1,this.dying=!0,this.deathTimer=0,this.state="dead",this.hp=0,this.aggro=!1,this.velocity.set(0,0,0),this.bar.group.visible=!1;const e=new P(this.position.x,this.position.y+this.modelHeight*.5,this.position.z);(n=this.game.fx)==null||n.burst(e,this.style.aura,this.boss?80:30,{speed:this.boss?11:7,size:this.boss?.9:.55,life:1.3,gravity:2,upward:1.4}),this.boss&&((i=this.game.fx)==null||i.shockwave(e,16765562,14,1.1),(a=(r=this.game.audio)==null?void 0:r.roar)==null||a.call(r)),(l=(o=this.game).onCreatureDefeated)==null||l.call(o,this,t)}tame(){var e,n,i,r;if(this.tamed)return;this.tamed=!0,this.alive=!1,this.aggro=!1,this.state="tamed",this.bar.group.visible=!1;const t=new P(this.position.x,this.position.y+this.modelHeight*.5,this.position.z);(e=this.game.fx)==null||e.burst(t,this.style.aura,40,{speed:3.5,size:.7,life:1.2,gravity:-1.5,upward:.3}),(n=this.game.fx)==null||n.burst(t,16777215,24,{speed:2.5,size:.5,life:1.4,gravity:-.6}),this.tameTimer=0,(r=(i=this.game.audio)==null?void 0:i.sealSuccess)==null||r.call(i)}update(t,e){if(this.time=e,this.stateTime+=t,this.attackCd=Math.max(0,this.attackCd-t),this.specialCd=Math.max(0,this.specialCd-t),this.hitFlash=Math.max(0,this.hitFlash-t),this.hitStun=Math.max(0,this.hitStun-t),this.enraged=Math.max(0,this.enraged-t),this.alertTimer=Math.max(0,this.alertTimer-t),this.spawnIn=Math.min(1,this.spawnIn+t*2.4),this.hitFlash>0){const r=this.hitFlash/.14;for(const a of this.baseEmissives)a.mat.emissive.setRGB(1,1,1),a.mat.emissiveIntensity=a.intensity+r*1.6}else for(const r of this.baseEmissives)r.mat.emissive.copy(r.color),r.mat.emissiveIntensity=r.intensity;if(this.tamed){this.tameTimer+=t;const r=ue(this.tameTimer/.7,0,1);this.model.scale.setScalar(this.baseScale*(1-r)),this.model.rotation.y+=t*12*(1-r),this.model.position.y=r*1.2,this.container.position.y=this.position.y+r*.5,r>=1&&this.remove();return}if(this.dying){this.deathTimer+=t;const r=ue(this.deathTimer/1,0,1);this.model.rotation.z=r*.9,this.model.position.y=-r*this.modelHeight*.6,this.model.scale.setScalar(this.baseScale*(1-r*.75)),r>.55&&(this.model.visible=!1),r>=1&&this.remove();return}if(this.spawnIn<1){const r=this.spawnIn,a=1+Math.sin(r*Math.PI)*.12;this.model.scale.setScalar(this.baseScale*r*a)}else this.model.scale.x!==this.baseScale&&this.model.scale.setScalar(this.baseScale);if(!this.game.started){this.animate(t,e,0,!1),this.container.rotation.y=this.yaw;return}this.boss?this.updateBoss(t,e):this.updateWild(t,e),this.container.position.x+=this.velocity.x*t,this.container.position.z+=this.velocity.z*t;const n=Zt(this.container.position.x,this.container.position.z),i=this.hover?1.15:0;this.position.y=mt(this.position.y,n+i,10,t),this.container.rotation.y=Jn(this.container.rotation.y,this.targetYaw,8,t),this.walkAmount=mt(this.walkAmount,Math.min(1,Math.hypot(this.velocity.x,this.velocity.z)/Math.max(1,this.speed)),6,t),this.animate(t,e,this.walkAmount,this.aggro),this.updateBar(t)}updateBar(){if(this.boss)return;const t=this.aggro||this.hp<this.maxHp;this.bar.group.visible=t&&!this.tamed&&!this.dying,this.bar.group.visible&&(this.bar.group.quaternion.copy(this.game.camera.quaternion),this.bar.group.position.y=this.modelHeight*(this.hover,1)+.5)}updateWild(t,e){var c,h;const n=this.game.player,i=n.position.x-this.position.x,r=n.position.z-this.position.z,a=Math.hypot(i,r),o=!n.dead;if(this.enraged>0?this.attackCooldownMod=.65:this.attackCooldownMod=1,!this.aggro){if(this.wanderTimer-=t,this.wanderTimer<=0||!this.wanderTarget){this.wanderTimer=Ee(2.5,6);const u=Math.random()*Math.PI*2,d=Ee(2,9);this.wanderTarget=new P(this.spawnPosition.x+Math.cos(u)*d,0,this.spawnPosition.z+Math.sin(u)*d)}if(this.wanderTarget){const u=this.wanderTarget.x-this.position.x,d=this.wanderTarget.z-this.position.z,f=Math.hypot(u,d);if(f>.6){const m=this.speed*.32;this.velocity.x=mt(this.velocity.x,u/f*m,4,t),this.velocity.z=mt(this.velocity.z,d/f*m,4,t),this.targetYaw=Math.atan2(u,d)}else this.velocity.x=mt(this.velocity.x,0,6,t),this.velocity.z=mt(this.velocity.z,0,6,t)}o&&a<this.info.aggro&&Math.abs(n.position.y-this.position.y)<9&&this.setAggro(!0);return}if(!o||a>55||this.game.player.dead){this.setAggro(!1),this.bar.group.visible=!1,this.wanderTarget=this.spawnPosition.clone();return}if(this.targetYaw=Math.atan2(i,r),this.hitStun>0||this.state==="recover"){this.velocity.x=mt(this.velocity.x,0,8,t),this.velocity.z=mt(this.velocity.z,0,8,t),this.stateTime>.55&&this.state==="recover"&&(this.state="chase",this.stateTime=0,this.attackCd=Ee(.7,1.5)*this.attackCooldownMod);return}if(this.charging>0){this.charging-=t;const u=new P(Math.sin(this.targetYaw),0,Math.cos(this.targetYaw));this.velocity.x=u.x*10,this.velocity.z=u.z*10,(c=this.game.fx)==null||c.spawnParticles(this.position.clone().setY(this.position.y+.3),this.style.glow,3,{speed:1,gravity:2,size:.45,life:.5,upward:.5}),a<2.2&&!this.chargeHit&&(this.chargeHit=!0,this.game.damagePlayer(this.damage*1.1,this.position),(h=this.game.fx)==null||h.shockwave(this.position.clone().setY(this.position.y+.2),this.style.glow,3.5,.4)),this.charging<=0&&(this.state="recover",this.stateTime=0,this.attackCd=1.6);return}if(this.state==="special"&&(this.velocity.x=mt(this.velocity.x,0,8,t),this.velocity.z=mt(this.velocity.z,0,8,t),this.updateSpecial(t)))return;if(this.attackAnim>0){const d=(this.info.ranged?.95:.62)-this.attackAnim;this.attackAnim-=t,this.velocity.x=mt(this.velocity.x,0,8,t),this.velocity.z=mt(this.velocity.z,0,8,t),!this.strikeDone&&d>=(this.info.ranged?.46:.28)&&(this.strikeDone=!0,this.performBasicStrike(a)),this.attackAnim<=0&&(this.state="recover",this.stateTime=0,this.attackCd=Ee(.9,1.8)*this.attackCooldownMod);return}if(this.specialCd<=0&&a<18&&this.state!=="windup"){this.castSpecial(a);return}const l=this.info.ranged?this.info.range*.85:this.info.range*.85;if(a>l){const u=this.speed*(this.enraged>0?1.2:1);let d=i/a,f=r/a;if(!this.hover&&!this.game.world.canWalk(this.position.x+d*1.4,this.position.z+f*1.4)){const x=Math.random()<.5?1:-1,g=-f*x,p=d*x;d=g,f=p}this.velocity.x=mt(this.velocity.x,d*u,5,t),this.velocity.z=mt(this.velocity.z,f*u,5,t),this.stuckTimer+=t,this.stuckTimer>1.2&&(this.stuckTimer=0,this.wanderTimer=0)}else this.velocity.x=mt(this.velocity.x,0,8,t),this.velocity.z=mt(this.velocity.z,0,8,t),this.attackCd<=0&&this.hitStun<=0&&this.startAttack(a)}startAttack(t){var e,n,i;this.state="windup",this.stateTime=0,this.attackAnim=this.info.ranged?.95:.62,this.windupKind="basic",this.attackCd=99,this.strikeDone=!1,(n=(e=this.game.audio)==null?void 0:e.swing)==null||n.call(e,!1),this.info.ranged&&((i=this.game.fx)==null||i.burst(new P(this.position.x,this.position.y+this.modelHeight*.6,this.position.z),this.style.glow,8,{speed:2,size:.35,life:.4,gravity:0}))}performBasicStrike(t){var r,a,o,l;const e=this.game.player,n=new P(this.position.x,this.position.y+this.modelHeight*.55,this.position.z),i=new P(e.position.x-this.position.x,0,e.position.z-this.position.z).normalize();if(this.info.ranged){const c=e.position.clone();c.y+=1,(r=this.game.fx)==null||r.spawnProjectile({position:n.clone(),target:c,speed:13,damage:this.damage*.8,color:this.style.glow,radius:.34}),(o=(a=this.game.audio)==null?void 0:a.water)==null||o.call(a)}else Math.hypot(e.position.x-this.position.x,e.position.z-this.position.z)<this.info.range*1.8&&Math.abs(e.position.y-this.position.y)<4&&this.game.damagePlayer(this.damage,this.position),(l=this.game.fx)==null||l.spawnDirectional(n.clone().addScaledVector(i,.6),i,this.style.glow,10,{speed:6,life:.4,size:.4})}castSpecial(t){var n,i,r,a,o,l,c;const e=this.info.special;this.state="special",this.stateTime=0,this.attackAnim=0,this.specialCd=Ee(6,9.5),this.attackCd=99,this.specialTimer=.8,this.specialKind=e,this.chargeHit=!1,e==="charge"?(this.charging=.6,this.attackCd=99,this.attackAnim=0,this.state="charge",(n=this.game.fx)==null||n.burst(new P(this.position.x,this.position.y+.4,this.position.z),this.style.glow,16,{speed:4,size:.4,life:.5,gravity:2}),(r=(i=this.game.audio)==null?void 0:i.roar)==null||r.call(i)):(e==="blink"||e==="slam")&&((o=(a=this.game.audio)==null?void 0:a.roar)==null||o.call(a),(c=(l=this.game.ui)==null?void 0:l.monsterTelegraph)==null||c.call(l,this,e))}blink(){var o,l,c,h;const t=this.game.player,e=Math.random()*Math.PI*2,n=Ee(6,9),i=t.position.x+Math.cos(e)*n,r=t.position.z+Math.sin(e)*n;if(!this.game.world.canWalk(i,r))return;const a=this.position.clone().setY(this.position.y+1);(o=this.game.fx)==null||o.burst(a,this.style.aura,22,{speed:3,size:.5,life:.7,gravity:-1}),this.container.position.set(i,Zt(i,r)+(this.hover?1.15:0),r),this.position.copy(this.container.position),(l=this.game.fx)==null||l.burst(a,16777215,16,{speed:2,size:.4,life:.6}),(h=(c=this.game.audio)==null?void 0:c.spirit)==null||h.call(c),this.targetYaw=Math.atan2(t.position.x-i,t.position.z-r)}updateSpecial(t){var o,l,c,h,u,d,f,m,x,g,p,S;if(this.state!=="special")return!1;if(this.specialTimer-=t,this.specialTimer>0)return!0;const e=this.game.player,n=new P(e.position.x-this.position.x,0,e.position.z-this.position.z).normalize(),i=new P(this.position.x,this.position.y+this.modelHeight*.55,this.position.z),r=e.position.clone().setY(e.position.y+1),a=this.specialKind;if(a==="fire"){for(let _=-1;_<=1;_++){const v=Math.atan2(n.x,n.z)+_*.24,A=new P(Math.sin(v)*12+i.x,i.y,Math.cos(v)*12+i.z);(o=this.game.fx)==null||o.spawnProjectile({position:i.clone(),target:A,speed:11,damage:this.damage*.85,color:16747084,radius:.36})}(c=(l=this.game.audio)==null?void 0:l.fire)==null||c.call(l)}else if(a==="tide"){for(let _=0;_<3;_++){const v=Math.atan2(n.x,n.z)+(_-1)*.2,A=new P(Math.sin(v)*12+i.x,r.y,Math.cos(v)*12+i.z);(h=this.game.fx)==null||h.spawnProjectile({position:i.clone(),target:A,speed:14,damage:this.damage*.7,color:6545382,radius:.3})}(d=(u=this.game.audio)==null?void 0:u.water)==null||d.call(u)}else if(a==="slam")this.slam();else if(a==="gust"){for(let _=-1;_<=1;_++){const v=r.clone();v.x+=_*3,(f=this.game.fx)==null||f.spawnProjectile({position:i.clone(),target:v,speed:16,damage:this.damage*.65,color:12167423,radius:.28})}(x=(m=this.game.audio)==null?void 0:m.spirit)==null||x.call(m)}else if(a==="blink"){this.blink();const _=new P(this.position.x,this.position.y+this.modelHeight*.55,this.position.z),v=e.position.clone().setY(e.position.y+1);for(let A=0;A<3;A++)(g=this.game.fx)==null||g.spawnProjectile({position:_.clone(),target:v.clone(),speed:10+A,damage:this.damage*.65,color:13081855,radius:.36,homing:1.1});(S=(p=this.game.audio)==null?void 0:p.spirit)==null||S.call(p)}return this.state="recover",this.stateTime=0,this.attackCd=Ee(1.2,2.2),!0}slam(){var e,n,i,r;const t=this.position.clone().setY(this.position.y+.2);(e=this.game.fx)==null||e.shockwave(t,this.style.glow,7,.6),(n=this.game.fx)==null||n.burst(t,16756850,26,{speed:7,size:.55,life:.8,gravity:8,upward:.8}),(r=(i=this.game.audio)==null?void 0:i.bossSlam)==null||r.call(i),this.game.player.position.distanceTo(this.position)<7&&this.game.damagePlayer(this.damage*1.2,this.position),this.game.shake(.5,.3)}updateBoss(t,e){var o,l,c,h,u,d,f,m,x,g,p,S,_,v,A;const n=this.game.player,i=n.position.x-this.position.x,r=n.position.z-this.position.z,a=Math.hypot(i,r);if(this.targetYaw=Math.atan2(i,r),this.attackCooldownMod=this.phase===2?.6:1,this.phase===1&&this.hpRatio<=.5&&(this.phase=2,(l=(o=this.game.audio)==null?void 0:o.roar)==null||l.call(o),(h=(c=this.game.ui)==null?void 0:c.bossPhase)==null||h.call(c,this),(u=this.game.fx)==null||u.shockwave(this.position.clone().setY(this.position.y+.3),16738876,12,.8),(d=this.game.fx)==null||d.burst(this.position.clone().setY(this.position.y+1.5),16742972,40,{speed:8,size:.7,life:1.1,gravity:1}),this.game.shake(.7,.4),this.parts.bossAura&&(this.parts.bossAura.material.opacity=.4)),this.charging>0){this.charging-=t;const w=new P(Math.sin(this.targetYaw),0,Math.cos(this.targetYaw));this.velocity.x=w.x*15,this.velocity.z=w.z*15,(f=this.game.fx)==null||f.spawnParticles(this.position.clone().setY(this.position.y+1),this.style.glow,4,{speed:2,gravity:2,size:.7,life:.6,upward:.6}),a<4.2&&!this.chargeHit&&(this.chargeHit=!0,this.game.damagePlayer(this.damage*1.35,this.position),this.game.shake(.45,.2)),this.charging<=0&&(this.state="recover",this.attackCd=1.2*this.attackCooldownMod);return}if(this.attackAnim>0){this.attackAnim-=t,this.velocity.x=mt(this.velocity.x,0,8,t),this.velocity.z=mt(this.velocity.z,0,8,t),this.attackAnim<=0&&(this.state="recover",this.attackCd=Ee(.7,1.4)*this.attackCooldownMod);return}if(!(this.state==="special"&&this.updateSpecial(t))){if(a>7){const w=this.speed*(this.phase===2?1.3:1);let E=i/a,R=r/a;this.game.world.canWalk(this.position.x+E*2,this.position.z+R*2)||(E=-R,R=E),this.velocity.x=mt(this.velocity.x,E*w,4,t),this.velocity.z=mt(this.velocity.z,R*w,4,t),this.specialCd<=0&&(this.specialKind=((m=this.shrine)==null?void 0:m.species)==="umbra"?"blink":((x=this.shrine)==null?void 0:x.species)==="brasalume"?"fire":"slam",this.state="special",this.stateTime=0,this.specialTimer=.75,this.attackAnim=0,this.specialCd=Ee(5.5,8)*this.attackCooldownMod,(p=(g=this.game.audio)==null?void 0:g.roar)==null||p.call(g))}else this.velocity.x=mt(this.velocity.x,0,8,t),this.velocity.z=mt(this.velocity.z,0,8,t),this.attackCd<=0&&(this.attackCd=99,this.attackAnim=1.15,this.strikeDone=!1,this.state="windup",(_=(S=this.game.audio)==null?void 0:S.roar)==null||_.call(S),(A=(v=this.game.ui)==null?void 0:v.bossTelegraph)==null||A.call(v,this));this.state==="windup"&&!this.strikeDone&&1.15-this.attackAnim>.55&&(this.strikeDone=!0,this.slam())}}animate(t,e,n,i){const r=this.parts,a=e+this.bobPhase;this.walkPhase+=t*(5+n*7);const o=Math.sin(this.walkPhase)*n,l=Math.sin(a*1.8)*(i?.02:.04),c=this.hover,h=c?Math.sin(a*2)*.12+.05:l;let u=0;if(this.attackAnim>0){const d=this.windupKind==="basic"?this.info.ranged?.95:.62:.9,f=1-this.attackAnim/d,m=Math.sin(ue(f,0,1)*Math.PI);u=m*.55,r.body&&(r.body.rotation.x=-.25*m),r.head&&(r.head.rotation.x=.3*m)}else r.body&&(r.body.rotation.x=mt(r.body.rotation.x,0,8,t)),r.head&&(r.head.rotation.x=mt(r.head.rotation.x,0,8,t));if(r.legs&&r.legs.forEach((d,f)=>{const m=f%2===0?0:Math.PI,x=f<2?1:-1;d.rotation.x=mt(d.rotation.x,Math.sin(this.walkPhase+m)*.6*n*x+(i?.05:0),12,t)}),r.arms&&r.arms.length&&r.arms.forEach((d,f)=>{const m=(f===0?-1:1)*.18;d.rotation.z=mt(d.rotation.z,m+Math.sin(a*1.6+f)*.04,6,t),d.rotation.x=mt(d.rotation.x,-n*.3+(this.attackAnim>0?.7:0),8,t)}),r.tail&&(r.tail.rotation.z=Math.sin(a*2.4)*.2+o*.15,r.tail.rotation.x=-.5+Math.sin(a*1.7)*.08),r.wings){const d=c||this.hover?Math.sin(a*8)*.45:Math.sin(a*2.4)*.12;r.wings.forEach((f,m)=>{f.rotation.z=(m===0?1:-1)*(.12+d),f.rotation.x=Math.sin(a*2)*.06})}if(r.wisps&&r.wisps.forEach((d,f)=>{d.position.y=-.45-f%2*.2+Math.sin(a*1.6+f)*.1,d.rotation.y+=t*(.5+f*.1)}),r.orbs&&r.orbs.forEach((d,f)=>{const m=a*(.9+f*.3)+d.phase;d.orb.position.set(Math.cos(m)*.65,.45+Math.sin(a*1.4+f)*.15,Math.sin(m)*.4+.1),d.glow.position.copy(d.orb.position),d.glow.material.opacity=.5+Math.sin(a*3+f)*.2}),r.flame){const d=.9+Math.sin(a*9)*.15+Math.sin(a*14.3)*.08;r.flame.scale.set(d,d*1.1,d),r.flameMat&&(r.flameMat.opacity=.7+Math.sin(a*7)*.2)}if(r.droplet&&(r.droplet.material.opacity=.35+Math.sin(a*2.2)*.15),r.gustGlow&&(r.gustGlow.material.opacity=.25+Math.sin(a*1.8)*.12),r.aura&&(r.aura.material.opacity=.2+Math.sin(a*1.4)*.08),r.heartGlow&&(r.heartGlow.material.opacity=.45+Math.sin(a*3.2+1)*.2),r.bossAura&&(r.bossAura.material.opacity=(this.phase===2?.35:.22)+Math.sin(a*1.2)*.06),r.ripple0)for(let d=0;d<3;d++){const f=r[`ripple${d}`];f&&(f.position.y=1.14+Math.sin(a*2+f.userData.float)*.09)}for(let d=0;d<4;d++){const f=r[`leaf${d}`];f&&(f.rotation.z=a*(.4+d*.1)+d)}if(this.enraged>0){const d=.5+Math.sin(a*8)*.3;this.model.traverse(f=>{f.isMesh&&f.material&&f.material.emissive&&f.material!==this.mats.eyeMat&&(f.material.emissiveIntensity=Math.max(f.material.emissiveIntensity,d*.4))})}this.model.position.z=mt(this.model.position.z,u,12,t),this.model.position.y=mt(this.model.position.y,h,8,t),c&&(this.model.position.y+=0),this.state==="windup"?(this.model.rotation.x=mt(this.model.rotation.x,-.14,8,t),this.model.rotation.z=mt(this.model.rotation.z,Math.sin(a*20)*.008,10,t)):(this.model.rotation.x=mt(this.model.rotation.x,0,8,t),this.model.rotation.z=mt(this.model.rotation.z,Math.sin(a*1.2)*.01,4,t))}updateBarRotation(t){this.bar.group.visible&&this.bar.group.quaternion.copy(t.quaternion)}remove(){var t,e;this.removed||(this.removed=!0,this.game.scene.remove(this.container),this.container.traverse(n=>{var i,r,a,o,l,c;n.isMesh&&((r=(i=n.geometry)==null?void 0:i.dispose)==null||r.call(i),Array.isArray(n.material)?n.material.forEach(h=>{var u;return(u=h.dispose)==null?void 0:u.call(h)}):(o=(a=n.material)==null?void 0:a.dispose)==null||o.call(a)),n.isSprite&&((c=(l=n.material)==null?void 0:l.dispose)==null||c.call(l))}),(e=(t=this.game).removeCreature)==null||e.call(t,this))}}class j0{constructor(t,e,n=1){this.game=t,this.speciesId=e,this.info=Kn(e),this.style=bo(e),this.level=n,this.maxBond=100,this.bond=0,this.container=new Bt,this.modelData=Xc(e,{companion:!0}),this.model=this.modelData.root,this.parts=this.modelData.parts,this.container.add(this.model),this.modelHeight=this.model.userData.height,this.scaleBase=this.model.scale.x,this.model.scale.setScalar(.01),this.spawnT=0,t.scene.add(this.container),this.offset=new P(-2.4,0,-2.2),this.velocity=new P,this.position=this.container.position,this.position.copy(t.player.position),this.yaw=0,this.attackCd=1,this.target=null,this.walkPhase=0,this.bobPhase=Math.random()*5,this.hover=this.info.flying||this.info.floating,this.aura=new We(new ke({map:$e(64,"rgba(255,255,255,0.6)","rgba(255,255,255,0)"),color:this.style.aura,transparent:!0,opacity:.35,blending:pe,depthWrite:!1})),this.aura.scale.setScalar(2.8),this.aura.position.y=.8,this.container.add(this.aura),this.container.position.y=t.player.position.y,this.removed=!1}update(t,e){var p,S,_,v,A,w,E,R;if(this.removed)return;const n=this.game.player;this.spawnT=Math.min(1,this.spawnT+t*3);const i=.01+(1-.01)*(1-Math.pow(1-this.spawnT,3));this.model.scale.setScalar(this.scaleBase*i),this.attackCd=Math.max(0,this.attackCd-t),this.bond=Math.min(this.maxBond,this.bond+t*2.6);const r=this.game.creatures.filter(M=>M.alive&&!M.tamed&&M.aggro&&!M.boss);let a=null,o=15;for(const M of r){const y=M.position.distanceTo(n.position);y<o&&(o=y,a=M)}(p=this.game.boss)!=null&&p.alive&&this.game.boss.aggro&&this.game.boss.position.distanceTo(n.position)<18&&(a=this.game.boss),this.target=a;let l;if(a&&this.attackCd>0)l=a.position.clone().add(new P(Math.sin(e*.8)*2.4,0,Math.cos(e*.8)*2.4));else if(a)l=a.position.clone();else{const M=new P(Math.sin(n.yaw),0,Math.cos(n.yaw)),y=new P(Math.cos(n.yaw),0,-Math.sin(n.yaw));l=n.position.clone().addScaledVector(M,1.8).addScaledVector(y,1.6)}const c=l.x-this.position.x,h=l.z-this.position.z,u=Math.hypot(c,h),d=a?7.5:9;if(u>.7){const M=c/u,y=h/u;this.velocity.x=mt(this.velocity.x,M*d,6,t),this.velocity.z=mt(this.velocity.z,y*d,6,t),this.yaw=Jn(this.yaw,Math.atan2(M,y),8,t)}else this.velocity.x=mt(this.velocity.x,0,8,t),this.velocity.z=mt(this.velocity.z,0,8,t),a?this.yaw=Jn(this.yaw,Math.atan2(a.position.x-this.position.x,a.position.z-this.position.z),8,t):this.yaw=Jn(this.yaw,n.yaw,4,t);this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t;const f=Zt(this.position.x,this.position.z);if(this.position.y=mt(this.position.y,f+(this.hover?1.1:0),12,t),this.container.rotation.y=this.yaw,a&&this.attackCd<=0&&u<3.4){this.attackCd=1.35;const M=(6+this.level*2.4)*(this.bond>=this.maxBond?1.8:1);a.takeDamage(M,{crit:this.bond>=this.maxBond,knock:1.2,source:"companion"}),(S=this.game.fx)==null||S.slash(a.position.clone().setY(a.position.y+.8),this.yaw,{color:this.style.glow,scale:.7}),(_=this.game.fx)==null||_.burst(a.position.clone().setY(a.position.y+.7),this.style.glow,12,{speed:5,size:.4,life:.5}),(A=(v=this.game.audio)==null?void 0:v.hit)==null||A.call(v,!1),this.bond>=this.maxBond&&(this.bond=0,(w=this.game.fx)==null||w.shockwave(a.position.clone().setY(a.position.y+.1),this.style.glow,4,.5),(R=(E=this.game.ui)==null?void 0:E.toast)==null||R.call(E,`<b>${this.info.name}</b> liberou Fúria de Vínculo!`,"teal","✧"))}const m=ue(Math.hypot(this.velocity.x,this.velocity.z)/6,0,1);this.walkPhase+=t*(4+m*7);const x=Math.sin(this.walkPhase)*m,g=e+this.bobPhase;if(this.parts.legs&&this.parts.legs.forEach((M,y)=>{M.rotation.x=mt(M.rotation.x,x*.5*(y<2?1:-1),10,t)}),this.parts.wings&&this.parts.wings.forEach((M,y)=>{M.rotation.z=(y===0?1:-1)*(.2+Math.sin(g*9)*.5)}),this.parts.tail&&(this.parts.tail.rotation.z=Math.sin(g*3)*.25),this.parts.aura&&(this.parts.aura.material.opacity=.2+Math.sin(g*2)*.07),this.aura.material.opacity=(this.bond>=this.maxBond?.55:.28)+Math.sin(g*2.4)*.08,this.aura.scale.setScalar(this.bond>=this.maxBond?4:2.8),this.model.position.y=Math.sin(g*2.2)*.06,this.parts.wisps&&this.parts.wisps.forEach((M,y)=>{M.position.y=-.45+Math.sin(g*1.6+y)*.1}),this.parts.flame){const M=.9+Math.sin(g*8)*.15;this.parts.flame.scale.set(M,M,M)}}dismiss(){var t;this.removed=!0,(t=this.game.fx)==null||t.burst(this.position.clone().setY(this.position.y+.8),this.style.glow,20,{speed:3,size:.5,life:.8,gravity:-2}),this.game.scene.remove(this.container),this.container.traverse(e=>{var n,i,r,a,o,l;e.isMesh&&((i=(n=e.geometry)==null?void 0:n.dispose)==null||i.call(n),(a=(r=e.material)==null?void 0:r.dispose)==null||a.call(r)),e.isSprite&&((l=(o=e.material)==null?void 0:o.dispose)==null||l.call(o))})}}const oi=900;class Q0{constructor(t,e){this.scene=t,this.camera=e,this.particles=[],this.rings=[],this.projectiles=[],this.trails=[],this.damageLayer=document.getElementById("damageLayer");const n=new xe,i=new Float32Array(oi*3),r=new Float32Array(oi*3),a=new Float32Array(oi),o=new Float32Array(oi);n.setAttribute("position",new Te(i,3)),n.setAttribute("color",new Te(r,3)),n.setAttribute("size",new Te(a,1)),n.setAttribute("alpha",new Te(o,1)),n.setDrawRange(0,0),this.particleGeo=n,this.particleMat=new hn({uniforms:{uTex:{value:$e(64,"rgba(255,255,255,0.95)","rgba(255,255,255,0)")}},vertexShader:`
        attribute float size;
        attribute float alpha;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = color;
          vAlpha = alpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (260.0 / max(0.1, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform sampler2D uTex;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uTex, gl_PointCoord);
          if (tex.a < 0.01) discard;
          gl_FragColor = vec4(vColor, tex.a * vAlpha);
        }
      `,transparent:!0,depthWrite:!1,blending:pe,vertexColors:!0}),this.points=new Dc(n,this.particleMat),this.points.frustumCulled=!1,t.add(this.points),this.slashGeo=k0(2.5,.5,Math.PI*1,30),this.ringGeo=new pi(.86,1,48),this.ringGeo.rotateX(-Math.PI/2),this.tmp=new P,this.tmp2=new P}spawnParticles(t,e,n=12,i={}){const{speed:r=4,spread:a=1,gravity:o=8,size:l=.4,life:c=.7,upward:h=.6,colorJitter:u=.1}=i,d=new ft(e);for(let f=0;f<n;f++){this.particles.length>=oi&&this.particles.shift();const m=new P((Math.random()-.5)*2*a,Math.random()*h+(h>0?.1:-.5),(Math.random()-.5)*2*a).normalize(),x=r*(.35+Math.random()*.85),g=d.clone().offsetHSL((Math.random()-.5)*u,0,(Math.random()-.5)*u);this.particles.push({pos:new P(t.x+(Math.random()-.5)*.4,t.y+(Math.random()-.5)*.4,t.z+(Math.random()-.5)*.4),vel:m.multiplyScalar(x),color:g,life:c*(.6+Math.random()*.8),maxLife:c,size:l*(.6+Math.random()*.9),gravity:o})}}spawnDirectional(t,e,n,i=8,r={}){const a=new ft(n),o=e.clone().normalize();for(let l=0;l<i;l++){this.particles.length>=oi&&this.particles.shift();const c=new P((Math.random()-.5)*1.6,(Math.random()-.5)*1.6,(Math.random()-.5)*1.6),h=o.clone().add(c).normalize().multiplyScalar((r.speed||7)*(.4+Math.random()));this.particles.push({pos:t.clone(),vel:h,color:a.clone().offsetHSL((Math.random()-.5)*.05,0,(Math.random()-.5)*.1),life:(r.life||.5)*(.6+Math.random()*.7),maxLife:r.life||.5,size:(r.size||.3)*(.7+Math.random()*.8),gravity:r.gravity??4})}}updateParticles(t){const e=this.particleGeo.attributes.position.array,n=this.particleGeo.attributes.color.array,i=this.particleGeo.attributes.size.array,r=this.particleGeo.attributes.alpha.array;let a=0;for(let o=this.particles.length-1;o>=0;o--){const l=this.particles[o];if(l.life-=t,l.life<=0){this.particles.splice(o,1);continue}l.vel.y-=l.gravity*t,l.vel.multiplyScalar(1-1.4*t),l.pos.addScaledVector(l.vel,t),l.pos.y<-1.3&&(l.pos.y=-1.3,l.vel.y*=-.3)}for(const o of this.particles){if(a>=oi)break;e[a*3]=o.pos.x,e[a*3+1]=o.pos.y,e[a*3+2]=o.pos.z,n[a*3]=o.color.r,n[a*3+1]=o.color.g,n[a*3+2]=o.color.b;const l=ue(o.life/o.maxLife,0,1);i[a]=o.size*(.5+l*.7),r[a]=l*l,a++}this.particleGeo.setDrawRange(0,a),this.particleGeo.attributes.position.needsUpdate=!0,this.particleGeo.attributes.color.needsUpdate=!0,this.particleGeo.attributes.size.needsUpdate=!0,this.particleGeo.attributes.alpha.needsUpdate=!0}slash(t,e,{heavy:n=!1,color:i=10485744,scale:r=1}={}){const a=new me({color:i,transparent:!0,opacity:.85,side:_e,blending:pe,depthWrite:!1}),o=new It(this.slashGeo,a);o.position.copy(t),o.position.y+=n?1.35:1.15,o.rotation.y=e,o.rotation.x=n?.85:.15,o.rotation.z=n?0:-.35,o.scale.setScalar(r*(n?1.4:1)),o.renderOrder=4,this.scene.add(o),this.trails.push({mesh:o,life:n?.32:.24,maxLife:n?.32:.24,heavy:n})}updateTrails(t){for(let e=this.trails.length-1;e>=0;e--){const n=this.trails[e];n.life-=t;const i=ue(n.life/n.maxLife,0,1);n.mesh.material.opacity=i*.9,n.mesh.rotation.y+=(n.heavy?-3.2:4.6)*t,n.mesh.scale.multiplyScalar(1+t*1.4),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.material.dispose(),this.trails.splice(e,1))}}shockwave(t,e=16761994,n=6,i=.55){const r=new me({color:e,transparent:!0,opacity:.85,side:_e,blending:pe,depthWrite:!1}),a=new It(this.ringGeo,r);a.position.copy(t),a.position.y+=.12,a.scale.setScalar(.4),this.scene.add(a),this.rings.push({mesh:a,life:i,maxLife:i,maxRadius:n})}updateRings(t){for(let e=this.rings.length-1;e>=0;e--){const n=this.rings[e];n.life-=t;const i=1-ue(n.life/n.maxLife,0,1),r=.4+(n.maxRadius-.4)*(1-Math.pow(1-i,3));n.mesh.scale.setScalar(r),n.mesh.material.opacity=(1-i)*.8,n.life<=0&&(this.scene.remove(n.mesh),n.mesh.material.dispose(),this.rings.splice(e,1))}}spawnProjectile({position:t,target:e,speed:n=12,damage:i=10,color:r=8382207,owner:a="enemy",homing:o=0,radius:l=.42,splash:c=0}){const h=new Bt,u=new It(new je(l,0),new me({color:r})),d=new We(new ke({map:$e(64,"rgba(255,255,255,0.9)","rgba(255,255,255,0)"),color:r,transparent:!0,opacity:.9,blending:pe,depthWrite:!1}));d.scale.setScalar(l*5),h.add(u,d),h.position.copy(t),this.scene.add(h);const f=e.clone().sub(t).normalize(),m={group:h,velocity:f.multiplyScalar(n),life:4.5,damage:i,color:r,owner:a,homing:o,radius:l,splash:c,trailTimer:0};return this.projectiles.push(m),m}updateProjectiles(t,e,n,i){for(let r=this.projectiles.length-1;r>=0;r--){const a=this.projectiles[r];if(a.life-=t,a.homing>0&&a.owner==="enemy"){const c=n.position.clone();c.y+=1.1;const h=c.sub(a.group.position).normalize().multiplyScalar(a.velocity.length());a.velocity.lerp(h,1-Math.exp(-a.homing*t))}a.group.position.addScaledVector(a.velocity,t),a.group.rotation.x+=t*6,a.group.rotation.y+=t*4,a.trailTimer-=t,a.trailTimer<=0&&(a.trailTimer=.045,this.spawnParticles(a.group.position,a.color,2,{speed:.6,gravity:0,size:.32,life:.35,spread:.4,upward:0}));const o=e.heightAt(a.group.position.x,a.group.position.z);let l=!1;if(a.owner==="enemy"){const c=a.group.position.x-n.position.x,h=a.group.position.z-n.position.z,u=a.group.position.y-(n.position.y+1);c*c+h*h<(a.radius+.8)**2&&Math.abs(u)<1.3&&(i==null||i(a),l=!0)}(a.group.position.y<o+.2||a.group.position.y>o+25)&&(l=!0),a.life<=0&&(l=!0),l&&(this.spawnParticles(a.group.position,a.color,16,{speed:5,gravity:6,size:.5,life:.6}),this.scene.remove(a.group),this.projectiles.splice(r,1))}}damageNumber(t,e,n=""){if(!this.damageLayer)return;const i=t.clone();if(i.y+=1.4,i.project(this.camera),i.z>1)return;const r=(i.x*.5+.5)*window.innerWidth,a=(-i.y*.5+.5)*window.innerHeight;if(r<-100||r>window.innerWidth+100||a<-100||a>window.innerHeight+100)return;const o=document.createElement("div");o.className=`dmg ${n}`,o.textContent=e,o.style.left=`${r}px`,o.style.top=`${a}px`,o.style.setProperty("--drift",`${(Math.random()-.5)*40}px`),this.damageLayer.appendChild(o),setTimeout(()=>o.remove(),1e3)}burst(t,e,n=18,i={}){this.spawnParticles(t,e,n,i)}update(t){this.updateParticles(t),this.updateTrails(t),this.updateRings(t)}clear(){for(const t of this.projectiles)this.scene.remove(t.group);this.projectiles.length=0;for(const t of this.trails)this.scene.remove(t.mesh);this.trails.length=0;for(const t of this.rings)this.scene.remove(t.mesh);this.rings.length=0,this.particles.length=0}}function wt(s){return document.getElementById(s)}class tg{constructor(){var t,e,n,i,r;this.dom={hud:wt("hud"),title:wt("titleScreen"),play:wt("playBtn"),hpFill:wt("hpFill"),hpText:wt("hpText"),stFill:wt("stFill"),xpFill:wt("xpFill"),xpText:wt("xpText"),level:wt("levelLabel"),compassDial:wt("compassDial"),compassSpans:[...document.querySelectorAll("#compassDial span")],regionName:wt("regionName"),regionSub:wt("regionSub"),questList:wt("questList"),questCount:wt("questCount"),mobileQuest:wt("mobileQuest"),mqTitle:wt("mqTitle"),mqProgress:wt("mqProgress"),target:wt("targetFrame"),targetName:wt("targetName"),targetType:wt("targetType"),targetLv:wt("targetLv"),targetHp:wt("targetHp"),targetHint:wt("targetHint"),targetSeal:wt("targetSeal"),targetIcon:wt("targetIcon"),boss:wt("bossBar"),bossName:wt("bossName"),bossFill:wt("bossFill"),bossPhase:wt("bossPhase"),companionCard:wt("companionCard"),companionName:wt("companionName"),companionLevel:wt("companionLevel"),companionState:wt("companionState"),companionOrb:wt("companionOrb"),companionGlyph:wt("companionGlyph"),bondFill:wt("bondFill"),roster:wt("roster"),minimap:wt("minimap"),minimapLabel:wt("minimapLabel"),prompt:wt("prompt"),promptKey:wt("promptKey"),promptTitle:wt("promptTitle"),promptSub:wt("promptSub"),toasts:wt("toasts"),combo:wt("combo"),comboNum:wt("comboNum"),capturePanel:wt("capturePanel"),captureFill:wt("captureFill"),captureTitle:wt("captureTitle"),captureSub:wt("captureSub"),pause:wt("pauseScreen"),death:wt("deathScreen"),banner:wt("banner"),bannerTitle:wt("bannerTitle"),bannerSub:wt("bannerSub"),hitFlash:wt("hitFlash"),soundBtn:wt("soundBtn"),pauseTamed:wt("pauseTamed"),pauseLevel:wt("pauseLevel"),pauseBosses:wt("pauseBosses"),deathKills:wt("deathKills"),deathTamed:wt("deathTamed"),titleHint:document.querySelector(".title-hint-mobile")},this.game=null,this.ctx=this.dom.minimap.getContext("2d"),this.questSignature="",this.rosterSignature="",this.regionId="",this.comboValue=0,this.bannerTimer=0,this.comboTimer=0,this.promptVisible=!1,this.targetVisible=!1,this.lastTargetKey="",this.mapAccent="#7fe6c9",this._toastCount=0,(t=this.dom.play)==null||t.addEventListener("click",()=>{var a;return(a=this.game)==null?void 0:a.start()}),(e=wt("resumeBtn"))==null||e.addEventListener("click",()=>{var a;return(a=this.game)==null?void 0:a.resume()}),(n=wt("respawnBtn"))==null||n.addEventListener("click",()=>{var a;return(a=this.game)==null?void 0:a.respawn()}),(i=this.dom.mobileQuest)==null||i.addEventListener("click",()=>{document.body.classList.toggle("journal-open")}),(r=this.dom.soundBtn)==null||r.addEventListener("click",()=>{if(!this.game)return;this.game.audio.unlock();const a=this.game.audio.toggle();this.dom.soundBtn.textContent=`Som: ${a?"ligado":"desligado"}`})}init(t){this.game=t,this.dom.soundBtn.textContent=`Som: ${t.audio.enabled?"ligado":"desligado"}`}hideLoading(){const t=wt("loadingVeil");t&&t.classList.add("done"),setTimeout(()=>t==null?void 0:t.remove(),1200)}hideTitle(){var t,e,n;(t=this.dom.title)==null||t.classList.add("hide"),(e=this.dom.hud)==null||e.classList.remove("is-hidden"),(n=this.dom.hud)==null||n.setAttribute("aria-hidden","false"),requestAnimationFrame(()=>{var i;return(i=this.dom.hud)==null?void 0:i.classList.add("show")})}showPause(t){var e;(e=this.dom.pause)==null||e.classList.toggle("is-hidden",!t),t&&this.game&&(this.dom.pauseTamed.textContent=this.game.roster.length,this.dom.pauseLevel.textContent=this.game.player.level,this.dom.pauseBosses.textContent=`${this.game.bossesDefeated}/3`)}showDeath(t){var e;(e=this.dom.death)==null||e.classList.toggle("is-hidden",!t),t&&this.game&&(this.dom.deathKills.textContent=this.game.kills,this.dom.deathTamed.textContent=this.game.roster.length)}hitFlash(){const t=this.dom.hitFlash;t&&(t.classList.add("on"),clearTimeout(this._flashTimer),this._flashTimer=setTimeout(()=>t.classList.remove("on"),80))}toast(t,e="",n="◆",i=3800){var o,l;if(!this.dom.toasts)return;const r=(o=this.game)!=null&&o.mobile?2:4;for(;this.dom.toasts.children.length>=r;)(l=this.dom.toasts.firstElementChild)==null||l.remove(),this._toastCount=Math.max(0,this._toastCount-1);const a=document.createElement("div");a.className=`toast ${e}`,a.innerHTML=`<span class="t-ico">${n}</span><div>${t}</div>`,this.dom.toasts.appendChild(a),this._toastCount++,setTimeout(()=>{a.classList.add("out"),setTimeout(()=>{a.remove(),this._toastCount=Math.max(0,this._toastCount-1)},420)},i)}banner(t,e="",n=2800){const i=this.dom.banner;i&&(i.classList.remove("is-hidden","out"),this.dom.bannerTitle.textContent=t,this.dom.bannerSub.textContent=e,clearTimeout(this._bannerTimer),this.bannerTimer=n,this._bannerTimer=setTimeout(()=>{i.classList.add("out"),setTimeout(()=>i.classList.add("is-hidden"),650)},n))}setPrompt(t){const e=this.dom.prompt;if(e){if(!t){this.promptVisible&&(e.classList.remove("show"),e.classList.add("is-hidden"),this.promptVisible=!1);return}this.dom.promptKey.textContent=t.key||"F",this.dom.promptTitle.textContent=t.title,this.dom.promptSub.textContent=t.sub||"",this.promptVisible||(e.classList.remove("is-hidden"),requestAnimationFrame(()=>e.classList.add("show")),this.promptVisible=!0)}}monsterAlert(t){if(!t)return;const e=Kn(t.speciesId);this.toast(`<b>${t.name}</b> te desafiou!`,"red",e.glyph)}monsterTelegraph(t,e){t&&(e==="slam"&&this.toast(`<b>${t.name}</b> prepara um impacto no solo. Esquive!`,"red","⚠",2200),e==="blink"&&this.toast(`<b>${t.name}</b> desapareceu na névoa…`,"teal","✧",2200))}bossPhase(t){this.banner("FASE II",`${t.name} liberou o poder do altar`,2400),this.toast(`<b>${t.name}</b> está enfurecido!`,"red","⚠",3e3)}bossTelegraph(t){t&&this.toast(`<b>${t.name}</b> concentra um golpe devastador.`,"red","⚠",2e3)}update(t){const e=this.game;if(!e)return;const n=e.player;if(!n)return;const i=ue(n.hp/n.maxHp,0,1)*100;this.dom.hpFill.style.width=`${i}%`,this.dom.hpFill.parentElement.classList.toggle("low",i<32),this.dom.hpText.textContent=`${Math.ceil(n.hp)} / ${Math.ceil(n.maxHp)}`,this.dom.stFill.style.width=`${ue(n.stamina/n.maxStamina,0,1)*100}%`,this.dom.xpFill.style.width=`${ue(n.xp/n.xpToNext,0,1)*100}%`,this.dom.xpText.textContent=`${ra(n.xp)} / ${ra(n.xpToNext)} XP`,this.dom.level.textContent=`Nv. ${n.level}`;const r=Math.atan2(Math.sin(e.cameraYaw),-Math.cos(e.cameraYaw)),a=62;for(const m of this.dom.compassSpans){let g=Number(m.dataset.b)*Math.PI/180-r;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;const p=106+g*a;m.style.left=`${p}px`,m.style.opacity=Math.abs(g)>1.35?"0":String(.5+(1-Math.abs(g)/1.4)*.5)}const o=Wn(n.position.x,n.position.z);o.id!==this.regionId&&(this.regionId=o.id,this.dom.regionName.textContent=o.name,this.dom.regionSub.textContent=o.id==="meadow"?"Feralis · Mundo Aberto":"Feralis · Território selvagem",this.dom.regionName.style.opacity="0",requestAnimationFrame(()=>{this.dom.regionName.style.opacity="1"}),e.started&&this.toast(`Entrando em <b>${o.name}</b>`,"","◎",2600));const l=e.quests.map(m=>`${m.done?1:0}${m.count||0}${m.target||0}`).join("|");l!==this.questSignature&&(this.questSignature=l,this.renderQuests());const c=e.lockTarget&&e.lockTarget.alive&&!e.lockTarget.tamed?e.lockTarget:e.lastTargetTime>0?e.lastTarget:null;if(this.dom.target)if(!!c&&e.started&&!c.boss&&!(e.boss&&e.boss.alive)){const x=Kn(c.speciesId),g=`${c.speciesId}-${c.level}-${c.boss?1:0}`;g!==this.lastTargetKey&&(this.lastTargetKey=g,this.dom.targetName.textContent=c.name,this.dom.targetType.textContent=c.boss?"GUARDIÃO":x.type,this.dom.targetLv.textContent=`Nv. ${c.level}${c.elite?" · Elite":""}`,this.dom.targetIcon.textContent=x.glyph,this.dom.targetType.style.background=c.boss?"#ff9a6b":x.color,this.dom.targetIcon.style.color=x.color);const p=c.hpRatio;this.dom.targetHp.style.width=`${p*100}%`,this.dom.targetHint.textContent=`HP ${Math.ceil(p*100)}% · ${ra(c.hp)}`,c.boss?(this.dom.targetSeal.textContent="SELO IMUNE",this.dom.targetSeal.classList.remove("ready")):c.weakened?(this.dom.targetSeal.textContent=`SELO PRONTO · ${Math.round(c.sealChance*100)}%`,this.dom.targetSeal.classList.add("ready")):(this.dom.targetSeal.textContent="SELO AOS 40%",this.dom.targetSeal.classList.remove("ready")),this.dom.target.classList.remove("is-hidden"),this.targetVisible=!0}else this.targetVisible&&(this.dom.target.classList.add("is-hidden"),this.targetVisible=!1);const h=e.boss;h&&h.alive&&e.started?(this.dom.boss.classList.remove("is-hidden"),this.dom.bossName.textContent=h.name,this.dom.bossFill.style.width=`${h.hpRatio*100}%`,this.dom.bossPhase.textContent=h.phase===2?"FASE II · FÚRIA":"FASE I",this.dom.boss.classList.toggle("enraged",h.phase===2)):this.dom.boss.classList.contains("is-hidden")||this.dom.boss.classList.add("is-hidden");const u=e.companion;if(u){this.dom.companionCard.classList.remove("is-empty"),this.dom.companionName.textContent=u.info.name,this.dom.companionLevel.textContent=`Nv. ${u.level}`;const m=u.target&&u.target.alive;this.dom.companionState.textContent=m?`Atacando ${u.target.name} · ${Math.round(u.bond)}% vínculo`:u.bond>=u.maxBond?"Fúria de Vínculo pronta!":"Ao seu lado · vínculo crescendo",this.dom.companionGlyph.textContent=u.info.glyph,this.dom.companionOrb.style.color=u.info.color,this.dom.companionOrb.style.borderColor=`${u.info.color}66`,this.dom.companionOrb.style.background=`radial-gradient(circle at 35% 30%, ${u.info.color}55, rgba(8,25,20,0.9))`,this.dom.bondFill.style.width=`${u.bond/u.maxBond*100}%`}else this.dom.companionCard.classList.add("is-empty"),this.dom.companionName.textContent="Nenhuma fera",this.dom.companionLevel.textContent="—",this.dom.companionState.textContent="Sele uma fera selvagem para lutar ao seu lado.",this.dom.companionGlyph.textContent="✧",this.dom.bondFill.style.width="0%";const d=e.roster.map(m=>`${m.species}${m.level}`).join(",")+`#${e.rosterIndex}`;d!==this.rosterSignature&&(this.rosterSignature=d,this.renderRoster()),e.promptInfo?this.setPrompt(e.promptInfo):this.setPrompt(null),e.comboDisplay>=2&&e.comboTimer>0?(this.dom.combo.classList.contains("is-hidden")&&this.dom.combo.classList.remove("is-hidden"),this.dom.combo.classList.add("show"),e.comboDisplay!==this.comboValue&&(this.comboValue=e.comboDisplay,this.dom.comboNum.textContent=e.comboDisplay,this.dom.combo.classList.remove("pop"),this.dom.combo.offsetWidth,this.dom.combo.classList.add("pop"),this.dom.combo.querySelector("span").textContent=e.comboDisplay>=5?"COMBO PERFEITO":"COMBO")):(this.dom.combo.classList.remove("show"),this.comboValue=0);const f=e.captureState;f&&f.active?(this.dom.capturePanel.classList.remove("is-hidden"),this.dom.captureFill.style.setProperty("--p",String(Math.round(f.progress*100))),this.dom.captureTitle.textContent=f.title,this.dom.captureSub.textContent=f.sub):this.dom.capturePanel.classList.contains("is-hidden")||this.dom.capturePanel.classList.add("is-hidden"),this.drawMinimap(e)}renderQuests(){const t=this.game,e=this.dom.questList;if(!e)return;e.innerHTML="";let n=!1;t.quests.forEach(a=>{const o=document.createElement("li"),l=!a.done&&!n;l&&(n=!0),o.className=a.done?"done":l?"active":"";const c=a.target?`${Math.min(a.count||0,a.target)}/${a.target}`:a.done?"✓":"—";o.innerHTML=`<span class="q-dot"></span><div><b>${a.title}</b><small>${a.desc}</small></div><em>${c}</em>`,e.appendChild(o)});const i=t.quests.filter(a=>a.done).length;this.dom.questCount.textContent=`${i}/${t.quests.length}`;const r=t.quests.find(a=>!a.done);this.dom.mqTitle&&(this.dom.mqTitle.textContent=r?r.title:"Lenda de Feralis",this.dom.mqProgress.textContent=r?`${Math.min(r.count||0,r.target||1)}/${r.target||1} · ${i}/${t.quests.length}`:"Mundo dominado · ✓")}renderRoster(){const t=this.game,e=this.dom.roster;if(!e)return;e.innerHTML="";const n=6;for(let i=0;i<n;i++){const r=document.createElement("div"),a=t.roster[i];if(r.className="slot",a){const o=Kn(a.species);r.classList.add("filled"),r.style.background=o.color,r.textContent=o.glyph,r.title=`${o.name} · Nv. ${a.level}`,i===t.rosterIndex&&r.classList.add("active")}else r.textContent="·";e.appendChild(r)}}drawMinimap(t){const e=this.dom.minimap;if(!e)return;const n=this.ctx,i=e.width,r=i/2,a=i*.47,o=t.player,l=i*.36/60,c=t.world.mapCanvas,h=i*.36/60/(c.width/440);n.clearRect(0,0,i,i),n.save(),n.beginPath(),n.arc(r,r,a,0,Math.PI*2),n.clip(),n.fillStyle="#14261f",n.fillRect(0,0,i,i);const u=t.cameraYaw+Math.PI;n.save(),n.translate(r,r),n.rotate(u);const d=(o.position.x/440+.5)*c.width,f=(o.position.z/440+.5)*c.height,m=c.width*h;n.globalAlpha=.95,n.drawImage(c,-d*h,-f*h,m,m),n.globalAlpha=1;const x=(A,w)=>[(A-o.position.x)*l,(w-o.position.z)*l],[g,p]=x(0,0);Math.hypot(g,p)<a*1.3&&(n.fillStyle="#7fe6c9",n.globalAlpha=.85,n.beginPath(),n.arc(g,p,i*.022,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(127,230,201,0.5)",n.lineWidth=2,n.beginPath(),n.arc(g,p,i*.035,0,Math.PI*2),n.stroke(),n.globalAlpha=1);for(const A of t.world.shrines){const[w,E]=x(A.position.x,A.position.z);Math.hypot(w,E)>a*1.15||(n.save(),n.translate(w,E),n.rotate(-u),n.fillStyle=A.activated?"rgba(255,255,255,0.25)":A.color?`#${A.color.toString(16).padStart(6,"0")}`:"#e9c46a",n.globalAlpha=A.activated?.45:.95,n.beginPath(),n.moveTo(0,-i*.018),n.lineTo(i*.014,0),n.lineTo(0,i*.018),n.lineTo(-i*.014,0),n.closePath(),n.fill(),n.globalAlpha=1,n.restore())}for(const A of t.world.essences){if(A.taken)continue;const[w,E]=x(A.mesh.position.x,A.mesh.position.z);Math.hypot(w,E)>a*1.1||(n.fillStyle="#8ff5e3",n.globalAlpha=.8,n.beginPath(),n.arc(w,E,i*.007,0,Math.PI*2),n.fill(),n.globalAlpha=1)}for(const A of t.creatures){if(!A.alive||A.tamed)continue;const[w,E]=x(A.position.x,A.position.z);if(Math.hypot(w,E)>a*1.15)continue;n.fillStyle=A.aggro?"#ff6f5c":"rgba(255,140,100,0.65)";const R=i*(A.boss?.024:A.elite?.013:.009);n.beginPath(),n.arc(w,E,R,0,Math.PI*2),n.fill(),(A.elite||A.boss)&&(n.strokeStyle=A.boss?"#ffca78":"#e9c46a",n.lineWidth=2,n.beginPath(),n.arc(w,E,R+i*.007,0,Math.PI*2),n.stroke())}if(t.companion){const[A,w]=x(t.companion.position.x,t.companion.position.z);Math.hypot(A,w)<a*1.1&&(n.fillStyle="#6fe6c8",n.beginPath(),n.arc(A,w,i*.009,0,Math.PI*2),n.fill())}if(t.boss&&t.boss.alive){const[A,w]=x(t.boss.position.x,t.boss.position.z);Math.hypot(A,w)<a*1.2&&(n.save(),n.translate(A,w),n.rotate(-u),n.fillStyle="#ff8a5c",n.strokeStyle="#ffe3a3",n.lineWidth=2,n.beginPath(),n.moveTo(0,-i*.032),n.lineTo(i*.026,0),n.lineTo(0,i*.032),n.lineTo(-i*.026,0),n.closePath(),n.fill(),n.stroke(),n.restore())}n.restore(),n.save(),n.translate(r,r),n.fillStyle="rgba(127,230,201,0.09)",n.beginPath(),n.moveTo(0,0),n.arc(0,0,a*.85,-Math.PI/2-.5,-Math.PI/2+.5),n.closePath(),n.fill(),n.restore(),n.save(),n.translate(r,r),n.fillStyle="#f6efdc",n.strokeStyle="#2b6f63",n.lineWidth=3,n.beginPath(),n.moveTo(0,-i*.033),n.lineTo(i*.022,i*.024),n.lineTo(0,i*.012),n.lineTo(-i*.022,i*.024),n.closePath(),n.fill(),n.stroke(),n.restore();const S=u-Math.PI/2,_=r+Math.cos(S)*a*.9,v=r+Math.sin(S)*a*.9;n.fillStyle="#e9c46a",n.font=`700 ${Math.round(i*.045)}px Outfit, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText("N",_,v),n.restore(),n.save(),n.strokeStyle="rgba(6,16,12,0.7)",n.lineWidth=i*.05,n.beginPath(),n.arc(r,r,a,0,Math.PI*2),n.stroke(),n.restore()}}const eg={Space:"dodge",KeyE:"seal",KeyQ:"lock",KeyC:"companion",KeyF:"interact",KeyJ:"attack",KeyK:"heavy",Escape:"pause",KeyP:"pause"};class ng{constructor(t){this.canvas=t,this.keys=new Set,this.move={x:0,y:0},this.cameraYaw=Math.PI,this.cameraPitch=.22,this.lookDelta={x:0,y:0},this.zoomDelta=0,this.sprint=!1,this.attackPressed=!1,this.heavyPressed=!1,this.dodgePressed=!1,this.sealPressed=!1,this.lockPressed=!1,this.companionPressed=!1,this.interactPressed=!1,this.pausePressed=!1,this.rosterPressed=0,this.started=!1,this.touch=!1,this.joystick={active:!1,id:null,x:0,y:0},this.pointer={down:!1,id:null,startX:0,startY:0,x:0,y:0,dragged:!1,button:0},this.touchLook={active:!1,id:null,lastX:0,lastY:0},this.gamepadIndex=null,this._bind(),this.setTouchMode(Hc()||window.innerWidth<900),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){this.width=window.innerWidth,this.height=window.innerHeight}setTouchMode(t){this.touch=t,document.body.classList.toggle("touch",t);const e=document.getElementById("touchUI");e&&e.classList.toggle("is-hidden",!t);const n=document.getElementById("hints");n&&(n.style.display=t?"none":"")}_bind(){const t=this.canvas;window.addEventListener("keydown",a=>{if(a.code==="Tab"&&a.preventDefault(),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(a.code)&&a.preventDefault(),a.repeat)return;this.keys.add(a.code),this.sprint=a.code==="ShiftLeft"||a.code==="ShiftRight";const o=eg[a.code];o==="attack"?this.attackPressed=!0:o==="heavy"?this.heavyPressed=!0:o==="dodge"?this.dodgePressed=!0:o==="seal"?this.sealPressed=!0:o==="lock"?this.lockPressed=!0:o==="companion"?this.companionPressed=!0:o==="interact"?this.interactPressed=!0:o==="pause"?this.pausePressed=!0:/^Digit[1-6]$/.test(a.code)&&(this.rosterPressed=Number(a.code.slice(-1)))}),window.addEventListener("keyup",a=>{this.keys.delete(a.code),(a.code==="ShiftLeft"||a.code==="ShiftRight")&&(this.sprint=!1)}),window.addEventListener("blur",()=>{this.keys.clear(),this.sprint=!1}),t.addEventListener("contextmenu",a=>a.preventDefault()),t.addEventListener("pointerdown",a=>{var o,l;if(a.pointerType==="touch"){a.clientX<window.innerWidth*.48?(this.touchLook.active=!0,this.touchLook.id=a.pointerId,this.touchLook.lastX=a.clientX,this.touchLook.lastY=a.clientY):(this.touchLook.active=!0,this.touchLook.id=a.pointerId,this.touchLook.lastX=a.clientX,this.touchLook.lastY=a.clientY),(o=t.setPointerCapture)==null||o.call(t,a.pointerId);return}this.pointer.down=!0,this.pointer.id=a.pointerId,this.pointer.startX=this.pointer.x=a.clientX,this.pointer.startY=this.pointer.y=a.clientY,this.pointer.dragged=!1,this.pointer.button=a.button,(l=t.setPointerCapture)==null||l.call(t,a.pointerId)}),t.addEventListener("pointermove",a=>{if(a.pointerType==="touch"){if(this.touchLook.active&&this.touchLook.id===a.pointerId){const c=a.clientX-this.touchLook.lastX,h=a.clientY-this.touchLook.lastY;this.touchLook.lastX=a.clientX,this.touchLook.lastY=a.clientY,this.lookDelta.x+=c,this.lookDelta.y+=h}return}if(!this.pointer.down||this.pointer.id!==a.pointerId)return;const o=a.clientX-this.pointer.x,l=a.clientY-this.pointer.y;this.pointer.x=a.clientX,this.pointer.y=a.clientY,Math.abs(a.clientX-this.pointer.startX)+Math.abs(a.clientY-this.pointer.startY)>7&&(this.pointer.dragged=!0),this.pointer.button===0&&(this.lookDelta.x+=o,this.lookDelta.y+=l)});const e=a=>{if(a.pointerType==="touch"){this.touchLook.id===a.pointerId&&(this.touchLook.active=!1,this.touchLook.id=null);return}!this.pointer.down||this.pointer.id!==a.pointerId||(this.pointer.down=!1,this.pointer.dragged||(this.pointer.button===0?this.attackPressed=!0:this.pointer.button===2&&(this.heavyPressed=!0)),this.pointer.id=null)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("wheel",a=>{a.preventDefault(),this.zoomDelta+=Math.sign(a.deltaY)*.8},{passive:!1});const n=document.getElementById("joystick"),i=document.getElementById("joyKnob");if(n&&i){const a=(h,u)=>{i.style.transform=`translate(${h}px, ${u}px)`},o=h=>{var u;h.preventDefault(),h.stopPropagation(),this.joystick.active=!0,this.joystick.id=h.pointerId,(u=n.setPointerCapture)==null||u.call(n,h.pointerId),l(h)},l=h=>{if(!this.joystick.active||this.joystick.id!==h.pointerId)return;const u=n.getBoundingClientRect(),d=u.left+u.width/2,f=u.top+u.height/2;let m=h.clientX-d,x=h.clientY-f;const g=u.width*.34,p=Math.hypot(m,x);p>g&&(m=m/p*g,x=x/p*g),a(m,x),this.move.x=ue(m/g,-1,1),this.move.y=ue(-x/g,-1,1),this.sprint=Math.hypot(this.move.x,this.move.y)>.88},c=h=>{this.joystick.id===h.pointerId&&(this.joystick.active=!1,this.joystick.id=null,this.move.x=0,this.move.y=0,this.sprint=!1,a(0,0))};n.addEventListener("pointerdown",o),n.addEventListener("pointermove",l),n.addEventListener("pointerup",c),n.addEventListener("pointercancel",c),n.addEventListener("lostpointercapture",c)}document.querySelectorAll(".tbtn[data-action]").forEach(a=>{const o=a.dataset.action;a.addEventListener("pointerdown",l=>{l.preventDefault(),l.stopPropagation(),this.fire(o)})});const r=document.getElementById("prompt");r==null||r.addEventListener("pointerdown",a=>{a.preventDefault(),this.interactPressed=!0}),window.addEventListener("gamepadconnected",a=>{this.gamepadIndex=a.gamepad.index})}fire(t){t==="attack"?this.attackPressed=!0:t==="heavy"?this.heavyPressed=!0:t==="dodge"?this.dodgePressed=!0:t==="seal"?this.sealPressed=!0:t==="lock"?this.lockPressed=!0:t==="companion"?this.companionPressed=!0:t==="interact"?this.interactPressed=!0:t==="pause"&&(this.pausePressed=!0)}readKeyboardMove(){if(this.joystick.active)return;let t=0,e=0;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),this.move.x=t,this.move.y=e,t!==0&&e!==0){const n=1/Math.SQRT2;this.move.x*=n,this.move.y*=n}this.sprint=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.joystick.active&&Math.hypot(this.move.x,this.move.y)>.88}pollGamepad(){var r,a,o,l,c,h,u,d,f;if(this.gamepadIndex===null)return;const t=(r=navigator.getGamepads)==null?void 0:r.call(navigator)[this.gamepadIndex];if(!t)return;const e=t.axes[0]||0,n=t.axes[1]||0;Math.hypot(e,n)>.18?(this.move.x=e,this.move.y=-n,this.sprint=Math.hypot(e,n)>.85):!this.joystick.active&&!this.keys.size&&(this.move.x=0,this.move.y=0),this.lookDelta.x+=(t.axes[2]||0)*9,this.lookDelta.y+=(t.axes[3]||0)*7;const i=t.buttons;(a=i[0])!=null&&a.pressed&&(this.attackPressed=!0),(o=i[1])!=null&&o.pressed&&(this.dodgePressed=!0),(l=i[2])!=null&&l.pressed&&(this.heavyPressed=!0),(c=i[3])!=null&&c.pressed&&(this.lockPressed=!0),(h=i[4])!=null&&h.pressed&&(this.sealPressed=!0),(u=i[5])!=null&&u.pressed&&(this.companionPressed=!0),(d=i[6])!=null&&d.pressed&&(this.interactPressed=!0),(f=i[9])!=null&&f.pressed&&(this.pausePressed=!0)}update(){this.readKeyboardMove(),this.pollGamepad()}endFrame(){this.attackPressed=!1,this.heavyPressed=!1,this.dodgePressed=!1,this.sealPressed=!1,this.lockPressed=!1,this.companionPressed=!1,this.interactPressed=!1,this.pausePressed=!1,this.rosterPressed=0,this.lookDelta.x=0,this.lookDelta.y=0,this.zoomDelta=0}state(){return{move:this.move,cameraYaw:this.cameraYaw,sprint:this.sprint,attackPressed:this.attackPressed,heavyPressed:this.heavyPressed,dodgePressed:this.dodgePressed,sealPressed:this.sealPressed,lockPressed:this.lockPressed,companionPressed:this.companionPressed,interactPressed:this.interactPressed,pausePressed:this.pausePressed}}}const ig=()=>window.innerWidth<900||Hc();class sg{constructor(){this.canvas=document.getElementById("game"),this.mobile=ig(),this.renderer=new $m({canvas:this.canvas,antialias:!this.mobile,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.mobile?1.4:1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Ne,this.renderer.toneMapping=tc,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ql,this.scene=new Zm,this.scene.fog=new fo(15255460,.0028),this.camera=new Qe(58,window.innerWidth/window.innerHeight,.1,900),this.camera.position.set(0,12,50),this.audio=new G0,this.world=new H0(this.scene,{mobile:this.mobile}),this.player=new Z0(this.scene,this.world,this.audio),this.player.position.set(0,Zt(0,34),34),this.player.spawnPoint.set(0,Zt(0,34),34),this.player.model.position.copy(this.player.position),this.fx=new Q0(this.scene,this.camera),this.ui=new tg,this.ui.init(this),this.input=new ng(this.canvas),this.setupLights(),this.setupCallbacks(),this.started=!1,this.paused=!1,this.over=!1,this.time=0,this.hitstop=0,this.creatures=[],this.drops=[],this.boss=null,this.bossArena=null,this.companion=null,this.roster=[],this.rosterIndex=0,this.lockTarget=null,this.lastTarget=null,this.lastTargetTime=0,this.comboDisplay=0,this.comboTimer=0,this.kills=0,this.tamedCount=0,this.bossesDefeated=0,this.cameraYaw=Math.PI,this.cameraPitch=.28,this.cameraDistance=this.mobile?7.6:6.4,this.cameraLook=new P(0,10,30),this.shakeTime=0,this.shakeAmount=0,this.startBlend=0,this.spawnTimer=1.5,this.promptInfo=null,this.captureState=null,this.sealFx=null,this.staminaToastCd=0,this.introStep=0,this.lastShot=0,this.maxWild=this.mobile?9:14,this.deathTimer=0,this.lockRing=null,this.treeReached=!1,this.audioStarted=!1,this.setupQuests(),this.createLockRing(),this.spawnInitialCreatures(),this.setupDebug(),this.clock=new U0,this.accum=0,this.fpsSamples=[],this.qualityAdjusted=!1,this.bindEvents(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop),setTimeout(()=>this.ui.hideLoading(),500),setTimeout(()=>{this.started||this.ui.toast("Clique em <b>JOGAR</b> para entrar em Feralis","","▶",5200)},1800)}setupLights(){const t=new L0(12376575,5069878,1.15);this.scene.add(t),this.hemi=t;const e=new Hl(16769456,2.5);e.castShadow=!0,e.shadow.mapSize.set(this.mobile?1024:2048,this.mobile?1024:2048),e.shadow.camera.near=1,e.shadow.camera.far=190,e.shadow.camera.left=-46,e.shadow.camera.right=46,e.shadow.camera.top=46,e.shadow.camera.bottom=-46,e.shadow.bias=-8e-4,e.shadow.normalBias=.03,this.scene.add(e),this.scene.add(e.target),this.sun=e;const n=new Hl(9427199,.35);n.position.set(40,30,60),this.scene.add(n)}setupCallbacks(){const t=this.player;t.events.onSlash=null,t.events.onStep=()=>this.audio.step(),t.events.onDodge=(e,n)=>{this.audio.dodge(),this.fx.burst(e.clone().setY(e.y+.2),14214864,14,{speed:3.4,gravity:1.5,size:.35,life:.55,upward:.4}),this.fx.slash(e.clone().setY(e.y+1),n,{color:10479871,scale:.7})},t.events.onHurt=(e,n)=>{var i,r;if(this.ui.hitFlash(),(r=(i=this.ui).damageNumber)==null||r.call(i,this.player.position,`-${Math.round(e)}`,"hurt"),this.fx.damageNumber(this.player.position,`-${Math.round(e)}`,"hurt"),this.audio.hurt(),this.shake(.42,.28),this.comboDisplay=0,this.comboTimer=0,this.ui.toast("Você foi atingido — esquive com <b>ESPAÇO</b>","red","!",1600),n){const a=this.player.position.clone().sub(n).setY(0).normalize();this.player.velocity.addScaledVector(a,5)}},t.events.onDeath=()=>{this.over=!0,this.deathTimer=0,this.audio.spirit(),this.player.velocity.set(0,0,0),setTimeout(()=>{this.over&&this.ui.showDeath(!0)},900)},t.events.onLevelUp=e=>{this.audio.levelUp(),this.ui.banner("NÍVEL "+e,"O vínculo com Feralis se fortalece",2200),this.fx.shockwave(this.player.position.clone().setY(this.player.position.y+.15),16769699,5,.7),this.fx.burst(this.player.position.clone().setY(this.player.position.y+1),16769699,28,{speed:4,size:.4,life:.9,gravity:-2}),this.ui.toast("Vida e vigor restaurados. Dano aumentado.","teal","✧")},t.events.onStaminaFail=e=>{this.staminaToastCd>0||(this.staminaToastCd=2.5,this.ui.toast(e,"red","⏳",1400))}}setupQuests(){this.quests=[{id:"tree",title:"Alcance a Árvore do Coração",desc:"Siga a trilha dourada até o centro do mundo.",done:!1,count:0,target:1},{id:"slay",title:"Domine as feras selvagens",desc:"Enfrente criaturas no território aberto.",done:!1,count:0,target:6},{id:"seal",title:"Sele sua primeira fera",desc:"Reduza o HP e lance o Selo com E.",done:!1,count:0,target:1},{id:"guardians",title:"Restaure os três altares",desc:"Invoque e derrote os Guardiões.",done:!1,count:0,target:3}]}createLockRing(){const t=new pi(1.15,1.28,32);t.rotateX(-Math.PI/2);const e=new me({color:16765562,transparent:!0,opacity:.8,side:_e,blending:pe,depthWrite:!1}),n=new It(t,e);n.visible=!1,n.renderOrder=3,this.scene.add(n),this.lockRing=n;const i=new It(new pi(.6,.65,24).rotateX(-Math.PI/2),e.clone());i.material.opacity=.5,n.add(i),this.lockRingInner=i}spawnInitialCreatures(){const t=[{x:4.5,z:22,species:"brasalume",level:2},{x:-10,z:16,species:"aquari",level:2},{x:13,z:9,species:"zephyro",level:3},{x:-17,z:6,species:"musgo",level:3},{x:22,z:30,species:"brasalume",level:2}];for(const e of t){const n=Zt(e.x,e.z),i=new ar(this,e.species,{level:e.level,position:new P(e.x,n,e.z)});this.creatures.push(i)}}spawnWild(t=null,e=28,n=56){const i=t||this.player.position;for(let r=0;r<24;r++){const a=Math.random()*Math.PI*2,o=Ee(e,n),l=i.x+Math.cos(a)*o,c=i.z+Math.sin(a)*o;if(Math.hypot(l,c)>Vc-10||!this.world.canWalk(l,c)||this.world.nearestShrine(l,c,12))continue;const h=Math.hypot(l,c),u=Wn(l,c),d=J0(u.id),f=ue(1+Math.floor(h/26)+N0(0,1),1,14),m=Math.random()<(h>80?.12:.03),x=new ar(this,d,{level:f,position:new P(l,Zt(l,c),c),elite:m});return this.creatures.push(x),this.fx.burst(new P(l,Zt(l,c)+.6,c),x.style.aura,18,{speed:2.4,size:.45,life:.8,gravity:-1}),x}return null}start(){this.started||(this.audio.unlock(),this.started=!0,this.startBlend=0,this.cameraYaw=this.player.yaw,this.cameraPitch=.26,this.cameraDistance=this.mobile?7.8:6.4,this.player.invuln=1.2,this.ui.hideTitle(),this.audio.ui(),this.ui.toast("Bem-vindo a <b>Feralis</b>, caçador.","","✦",4200),setTimeout(()=>this.ui.toast("Siga a trilha dourada até a <b>Árvore do Coração</b>.","teal","◈",4800),800),setTimeout(()=>this.ui.toast("Ataque com <b>clique</b>. Reduza o HP e pressione <b>E</b> para selar.","","⚔",5200),1800),this.player.addXp(0),this.ui.showPause(!1))}togglePause(t){if(!this.started||this.over)return;const e=typeof t=="boolean"?t:!this.paused;e!==this.paused&&(this.paused=e,this.ui.showPause(e),this.audio.ui(),e&&(this.player.velocity.set(0,0,0),this.input.move.x=0,this.input.move.y=0))}resume(){this.togglePause(!1)}respawn(){this.over=!1,this.deathTimer=0,this.ui.showDeath(!1),this.player.respawn(),this.cameraYaw=Math.PI,this.cameraPitch=.26,this.lockTarget=null,this.boss=null,this.removeBossArena();for(const t of[...this.creatures])t.alive&&(t.setAggro(!1),t.remove());this.creatures=[],this.creaturePlaceholder=null,this.spawnInitialCreatures(),this.companion&&(this.companion.dismiss(),this.companion=null),this.roster.length&&this.summonCompanion(0),this.comboDisplay=0,this.fx.clear(),this.ui.toast("Você despertou no acampamento. A caçada continua.","teal","✧",4200)}resolvePlayerAttack(){const t=this.player.consumeHit();if(!t)return;const e=t.heavy;this.audio.swing(e),this.fx.slash(t.position,t.yaw,{heavy:e,color:e?16765066:10485744,scale:1}),this.shake(e?.5:.22,e?.26:.15),this.audio.hit(e);const n=new P(Math.sin(t.yaw),0,Math.cos(t.yaw));let i=!1;const r=[...this.creatures];this.boss&&this.boss.alive&&r.push(this.boss);const a=new Set;for(const o of r){if(!a.has(o)&&(!o.alive||o.tamed))continue;const l=o.position.clone().sub(this.player.position);l.y=0;const c=o.boss?1.9:o.elite?1:.55,h=l.length()-c;if(h>t.range||h>.001&&l.clone().normalize().dot(n)<Math.cos(t.arc)||Math.abs(o.position.y+o.modelHeight*.4-(this.player.position.y+1))>3.2)continue;a.add(o);const u=Math.random()<.14||t.stage>=2&&Math.random()<.2,d=t.damage*(1+t.stage*.07)*(u?1.7:1);o.takeDamage(d,{crit:u,knock:t.knock,heavy:e});const f=o.position.clone();f.y+=.9+Math.random()*.4,this.fx.burst(f,u?16770720:16774095,u?22:14,{speed:5.5,gravity:6,size:.38,life:.5}),this.fx.spawnDirectional(f,n,o.style.glow,5,{speed:8,life:.35,size:.3,gravity:2}),this.hitstop=Math.max(this.hitstop,e?.075:.038),this.lastTarget=o,this.lastTargetTime=3.4,this.lockTarget=o,i=!0,this.comboDisplay++,this.comboTimer=2.4,this.comboDisplay>1&&this.audio.ui()}if(i)this.fx.shockwave(this.player.position.clone().setY(this.player.position.y+.15),e?16761978:10485744,e?6.5:3,e?.5:.3);else{const o=this.player.position.clone().addScaledVector(n,2.2);o.y=Zt(o.x,o.z)+.2,this.fx.burst(o,13352341,6,{speed:2,gravity:3,size:.25,life:.35})}}damagePlayer(t,e){!this.started||this.paused||this.over||this.player.takeDamage(t,e)}shake(t,e){this.shakeAmount=Math.max(this.shakeAmount,t),this.shakeTime=Math.max(this.shakeTime,e)}toggleLock(){const t=new P(Math.sin(this.cameraYaw),0,Math.cos(this.cameraYaw));if(this.lockTarget&&this.lockTarget.alive){this.lockTarget=null,this.audio.ui();return}const e=[...this.creatures];this.boss&&this.boss.alive&&e.push(this.boss);let n=null,i=1/0;for(const r of e){if(!r.alive||r.tamed)continue;const a=r.position.distanceTo(this.player.position);if(a>34)continue;const l=r.position.clone().sub(this.player.position).setY(0).normalize().dot(t);if(l<.1)continue;const c=a*(1.5-l);c<i&&(i=c,n=r)}if(!n)for(const r of e){if(!r.alive||r.tamed)continue;const a=r.position.distanceTo(this.player.position);a<12&&a<i&&(i=a,n=r)}n?(this.lockTarget=n,this.audio.ui(),n.boss&&this.ui.toast(`<b>${n.name}</b> marcado. Não deixe de esquivar.`,"red","◎",2200)):this.ui.toast("Nenhuma fera ao alcance.","","○",1500)}trySeal(){if(!this.started||this.captureState)return;const t=[...this.creatures];this.boss&&t.push(this.boss);let e=this.lockTarget&&this.lockTarget.alive&&!this.lockTarget.tamed?this.lockTarget:null;if(!e){let c=15;for(const h of t){if(!h.alive||h.tamed||h.boss)continue;const u=h.position.distanceTo(this.player.position);u<c&&(c=u,e=h)}}if(!e){this.ui.toast("Nenhuma fera por perto para selar.","","◈",1800);return}if(e.boss){this.ui.toast("<b>Guardiões</b> não podem ser selados. Derrote-o!","red","⚠",2400),this.audio.sealFail();return}if(e.tamed)return;this.lockTarget=e,this.player.setAim(Math.atan2(e.position.x-this.player.position.x,e.position.z-this.player.position.z)),this.player.yaw=this.player.aimYaw,this.audio.sealThrow();const n=e.sealChance,i=this.player.position.clone();i.y+=1.25;const r=e.position.clone();r.y+=e.modelHeight*.45;const a=new Bt,o=new It(new ys(.22,0),new jt({color:10420192,emissive:4972733,emissiveIntensity:2,flatShading:!0})),l=new We(new ke({map:this.fx.particleMat.uniforms.uTex.value,color:8388592,transparent:!0,opacity:.8,blending:pe,depthWrite:!1}));l.scale.setScalar(1.8),a.add(o,l),a.position.copy(i),this.scene.add(a),this.sealFx={mesh:a,from:i,to:r,target:e,chance:n,t:0,duration:.62,phase:"throw",resolved:!1},this.captureState={active:!0,progress:0,title:"LANÇANDO O SELO",sub:`${e.name} · ${Math.round(n*100)}% de vínculo`},e.hitStun=2.4,e.state="recover",e.velocity.set(0,0,0),e.attackCd=3,this.comboDisplay=0}updateSeal(t){if(!this.sealFx)return;const e=this.sealFx;if(e.phase==="throw"){e.t+=t/e.duration;const n=ue(e.t,0,1),i=e.from.clone().lerp(e.to,n);i.y+=Math.sin(n*Math.PI)*2.4,e.mesh.position.copy(i),e.mesh.rotation.x+=t*10,e.mesh.rotation.y+=t*14,Math.random()<.6&&this.fx.spawnParticles(i,8388592,1,{speed:.4,gravity:0,size:.3,life:.4,spread:.5,upward:0}),n>=1&&(e.phase="hold",e.t=0,this.fx.burst(e.to,10420192,30,{speed:4,size:.55,life:.9,gravity:-1}),this.fx.shockwave(e.to,8388592,3.4,.6),this.audio.sealSuccess(),e.target.alive&&(e.target.hp=Math.max(1,e.target.hp),e.target.bar.group.visible=!0),e.mesh.visible=!1,this.audio.spirit()),this.captureState.progress=n*.55,this.captureState.title="SELANDO…",this.captureState.sub=`${e.target.name} · ${Math.round(e.chance*100)}% de vínculo`}else{if(e.t+=t,this.captureState.progress=.55+ue(e.t/1,0,1)*.45,e.t>.35&&!e.resolved&&Math.random()<.6){const n=e.to.clone();n.x+=Ee(-1.5,1.5),n.z+=Ee(-1.5,1.5),this.fx.spawnParticles(n,10420192,1,{speed:.5,gravity:-1,size:.4,life:.6,spread:.6,upward:.2})}e.t>=1&&(e.resolved=!0,this.resolveCapture(e))}}resolveCapture(t){const e=t.target;e.alive&&Math.random()<t.chance?(this.onTame(e),this.captureState={active:!0,progress:1,title:"VÍNCULO CRIADO",sub:`${e.info.name} agora luta ao seu lado`,done:!0},this.audio.sealSuccess(),this.fx.burst(t.to,16777215,50,{speed:5,size:.6,life:1.2,gravity:-2})):(this.captureState={active:!0,progress:0,title:"O SELO SE PARTIU",sub:"A fera enfureceu. Tente novamente.",failed:!0},this.audio.sealFail(),e.alive&&(e.hitStun=.4,e.enrage(10)),this.ui.toast(`<b>${e.name}</b> resistiu! Enfraqueça-a mais e tente de novo.`,"red","✕",3200),this.fx.burst(t.to,16738892,34,{speed:6,size:.55,life:.9,gravity:3}),this.shake(.4,.25)),clearTimeout(this._captureTimer),this._captureTimer=setTimeout(()=>{this.captureState&&(this.captureState.done||this.captureState.failed)&&(this.captureState=null)},2e3);const i=this.sealFx.mesh;i.visible=!1,this.sealFx=null,setTimeout(()=>{this.scene.remove(i),i.traverse(r=>{r.isMesh&&(r.geometry.dispose(),r.material.dispose()),r.isSprite&&r.material.dispose()})},1200)}onTame(t){t.tame();const e={species:t.speciesId,level:t.level,name:t.info.name};if(this.roster.length>=6){this.ui.toast("Sua matilha está cheia (6). A fera foi libertada.","red","!",3200);return}this.roster.push(e),this.tamedCount++,this.player.addXp(45),this.audio.levelUp(),this.ui.banner("NOVA FERA",`${t.info.name} juntou-se a você`,2600),this.ui.toast(`<b>${t.info.name}</b> selada! Pressione <b>C</b> para invocá-la.`,"teal",t.info.glyph,5200),this.companion||this.summonCompanion(this.roster.length-1);const n=this.quests.find(i=>i.id==="seal");n&&!n.done&&(n.count++,n.count>=n.target&&this.completeQuest(n)),this.fx.burst(t.position.clone().setY(t.position.y+1),t.style.aura,55,{speed:4,size:.7,life:1.4,gravity:-2}),this.spawnDrop(t.position.clone(),10420192,60)}summonCompanion(t){if(!this.roster.length){this.ui.toast("Nenhuma fera selada ainda. Enfraqueça uma e use <b>E</b>.","","◈",2400);return}t=ue(t,0,this.roster.length-1),this.rosterIndex=t;const e=this.roster[t];this.companion&&this.companion.dismiss(),this.companion=new j0(this,e.species,e.level),this.companion.position.copy(this.player.position),this.companion.position.y=Zt(this.player.position.x,this.player.position.z),this.audio.sealSuccess(),this.fx.burst(this.player.position.clone().setY(this.player.position.y+1),Kn(e.species).color,26,{speed:3.5,size:.55,life:.8,gravity:-1}),this.ui.toast(`<b>${Kn(e.species).name}</b> entrou na caçada.`,"teal",Kn(e.species).glyph),this.companion.bond=0}cycleCompanion(){if(!this.roster.length){this.ui.toast("Nenhuma fera selada ainda.","","◈",1600);return}if(this.roster.length===1){this.companion?(this.companion.dismiss(),this.companion=null,this.ui.toast("Sua fera voltou ao selo. Pressione C para invocá-la.","teal","◈",2e3)):this.summonCompanion(0);return}const t=this.companion?(this.rosterIndex+1)%this.roster.length:0;this.summonCompanion(t)}spawnBoss(t){if(this.boss&&this.boss.alive){this.ui.toast("Um Guardião já está em combate!","red","⚠",2e3);return}if(t.activated){this.ui.toast("Este altar já foi restaurado.","teal","✦",2200);return}const e=new P(t.position.x+Ee(-4,4),0,t.position.z+Ee(-4,4));this.world.canWalk(e.x,e.z)||e.set(t.position.x+3,0,t.position.z+3),e.y=Zt(e.x,e.z);const n=new ar(this,t.species,{level:Math.max(4,this.player.level+3),position:e,boss:!0,shrine:t});this.boss=n,this.creatures.push(n),this.lockTarget=n,this.cameraYaw=Math.atan2(n.position.x-this.player.position.x,n.position.z-this.player.position.z),this.player.setAim(this.cameraYaw),this.cameraPitch=.28,this.player.invuln=1,this.createBossArena(t),this.ui.banner("GUARDIÃO DESPERTO",t.bossName,3200),this.ui.toast("Derrote o Guardião para restaurar o altar. <b>Guardiões não podem ser selados.</b>","red","⚠",5200),this.audio.roar(),this.shake(.8,.4),t.activated=!0,t.crystal.material.emissiveIntensity=2.2,this.fx.burst(e.clone().setY(e.y+1.5),t.color,60,{speed:9,size:.8,life:1.2,gravity:1,upward:1.2})}createBossArena(t){this.removeBossArena();const e=new pi(12,12.5,64);e.rotateX(-Math.PI/2);const n=new me({color:t.color,transparent:!0,opacity:.36,side:_e,blending:pe,depthWrite:!1}),i=new It(e,n);i.position.set(t.position.x,Zt(t.position.x,t.position.z)+.35,t.position.z),this.scene.add(i);const r=new pi(10.4,10.9,6);r.rotateX(-Math.PI/2);const a=new It(r,n.clone());a.material.opacity=.25,a.position.y=.4,i.add(a),this.bossArena={ring:i,rune:a,color:t.color},this.fx.shockwave(t.position.clone().setY(t.position.y+.3),t.color,13,1.2)}removeBossArena(){this.bossArena&&(this.scene.remove(this.bossArena.ring),this.bossArena.ring.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())}),this.bossArena=null)}onCreatureDefeated(t,e){var i;if(t.tamed)return;if(t.boss){this.bossesDefeated++,this.removeBossArena();const r=t.shrine;r&&this.world.markShrineActivated(r.id),this.player.addXp(t.xpValue),this.audio.levelUp(),this.ui.banner("GUARDIÃO DERROTADO",`${t.name} retornou ao altar`,3200),this.ui.toast(`<b>${((i=t.shrine)==null?void 0:i.name)||"Altar"}</b> restaurado. +${t.xpValue} XP`,"teal","✦",4800);for(let o=0;o<3;o++){const l=t.position.clone();l.x+=Ee(-3,3),l.z+=Ee(-3,3),this.spawnDrop(l,o===0?16765562:10420192,o===0?120:45)}setTimeout(()=>{this.boss===t&&(this.boss=null)},1300);const a=this.quests.find(o=>o.id==="guardians");a&&!a.done&&(a.count++,a.count>=a.target&&this.completeQuest(a)),this.bossesDefeated>=3&&setTimeout(()=>this.ui.banner("FERALIS RESTAURADA","Os três altares voltaram a brilhar",4200),2200);return}this.kills++,this.player.addXp(t.xpValue),this.comboDisplay++,this.comboTimer=2.6,t.elite&&this.ui.toast(`<b>${t.name} elite</b> derrotada. +${t.xpValue} XP`,"teal","✧",2600),Math.random()<.55&&this.spawnDrop(t.position.clone(),10420192,30);const n=this.quests.find(r=>r.id==="slay");n&&!n.done&&(n.count++,n.count>=n.target&&this.completeQuest(n))}completeQuest(t){t.done=!0,t.count=t.target||1,this.player.addXp(90+t.target*15),this.audio.levelUp(),this.ui.banner("OBJETIVO CONCLUÍDO",t.title,3e3),this.ui.toast(`Recompensa: <b>+${90+(t.target||0)*15} XP</b>`,"teal","✦",3600),this.quests.every(e=>e.done)&&setTimeout(()=>this.ui.banner("LENDA DE FERALIS","Você dominou o mundo aberto",5e3),3600)}spawnDrop(t,e=10420192,n=30){const i=new Bt,r=new It(new je(.22,0),new jt({color:e,emissive:e,emissiveIntensity:1.8,flatShading:!0,roughness:.25})),a=new We(new ke({map:this.fx.particleMat.uniforms.uTex.value,color:e,transparent:!0,opacity:.7,blending:pe,depthWrite:!1}));a.scale.setScalar(2),i.add(r,a);const o=Zt(t.x,t.z)+.8;i.position.set(t.x,o,t.z),this.scene.add(i),this.drops.push({group:i,core:r,halo:a,baseY:o,xp:n,color:e,life:35,phase:Math.random()*10})}updateDrops(t,e){for(let n=this.drops.length-1;n>=0;n--){const i=this.drops[n];if(i.life-=t,i.group.position.y=i.baseY+Math.sin(e*2+i.phase)*.2,i.core.rotation.y+=t*2,i.halo.material.opacity=.45+Math.sin(e*3+i.phase)*.2,i.group.position.distanceTo(this.player.position)<2.6&&!this.player.dead){this.player.addXp(i.xp),this.player.heal(12),this.audio.coin(),this.fx.damageNumber(i.group.position,`+${i.xp} XP`,"heal"),this.fx.burst(i.group.position,i.color,18,{speed:3,size:.45,life:.6,gravity:-2}),this.ui.toast(`+${i.xp} XP · +12 vida`,"teal","✧",1600),this.scene.remove(i.group),this.drops.splice(n,1);continue}i.life<=0&&(this.scene.remove(i.group),this.drops.splice(n,1))}}updateEssences(){for(const t of this.world.essences){if(t.taken)continue;t.mesh.position.distanceTo(this.player.position)<2.8&&(t.taken=!0,t.mesh.visible=!1,t.halo.visible=!1,this.player.addXp(55),this.player.heal(20),this.audio.coin(),this.ui.toast("Essência de Feralis absorvida. <b>+55 XP</b>","teal","◈",2600),this.fx.burst(t.mesh.position,9434595,26,{speed:4,size:.5,life:.9,gravity:-2}),this.fx.damageNumber(t.mesh.position,"+55 XP","heal"))}}updatePrompt(){if(!this.started||this.paused||this.over){this.promptInfo=null,this.ui.setPrompt(null);return}let t=null;const e=this.world.nearestShrine(this.player.position.x,this.player.position.z,6.5);e&&(e.activated?(!this.boss||!this.boss.alive)&&(t={key:"F",title:"Descansar no altar",sub:`${e.name} · restaura vida e vigor`}):(!this.boss||!this.boss.alive)&&(t={key:"F",title:"Invocar Guardião",sub:`${e.name} · ${e.bossName}`}));const n=this.lockTarget&&this.lockTarget.alive&&!this.lockTarget.tamed?this.lockTarget:this.creatures.find(i=>i.alive&&!i.tamed&&i.weakened&&i.position.distanceTo(this.player.position)<14);n&&!n.boss&&n.weakened&&!this.captureState&&(t={key:"E",title:`Lançar Selo · ${Math.round(n.sealChance*100)}%`,sub:`${n.name} está enfraquecida`}),this.captureState&&(t=null),this.promptInfo=t,this.ui.setPrompt(t)}handleInteract(){const t=this.world.nearestShrine(this.player.position.x,this.player.position.z,6.5);if(t){if(t.activated){if(!this.boss||!this.boss.alive){if(this.player.hp>=this.player.maxHp&&this.player.stamina>=this.player.maxStamina){this.ui.toast("Você já está em plena forma.","","✦",1800);return}this.player.heal(999),this.player.stamina=this.player.maxStamina,this.audio.sealSuccess(),this.ui.toast("O altar restaurou sua <b>vida e vigor</b>.","teal","✦",2600),this.fx.shockwave(t.position.clone().setY(t.position.y+.3),t.color,6,.7),this.fx.burst(this.player.position.clone().setY(this.player.position.y+1),10420192,30,{speed:3,size:.45,life:.8,gravity:-2});return}return}this.spawnBoss(t)}}updateLockTarget(t){if(this.lockTarget&&(!this.lockTarget.alive||this.lockTarget.tamed||this.lockTarget.removed)&&(this.lockTarget=null),this.lockTarget){const e=this.lockTarget;this.lockRing.visible=!0,this.lockRing.position.set(e.position.x,e.position.y+.06,e.position.z);const n=e.boss?1.8:e.elite?1.25:1;if(this.lockRing.scale.setScalar(n),this.lockRing.rotation.y+=t*.8,this.lockRingInner.rotation.y-=t*1.4,this.lockRing.material.opacity=.55+Math.sin(this.time*4)*.2,this.lockRing.position.y=e.position.y+(e.hover?.5:.08),Math.abs(this.input.lookDelta.x)<1.5&&!this.player.isAttacking){const i=Math.atan2(e.position.x-this.player.position.x,e.position.z-this.player.position.z);this.cameraYaw=Jn(this.cameraYaw,i,.9,t)}e.position.distanceTo(this.player.position)>42&&!e.boss&&(this.lockTarget=null,this.lockRing.visible=!1)}else this.lockRing.visible=!1;this.lastTargetTime>0&&(this.lastTargetTime-=t,this.lastTarget&&(!this.lastTarget.alive||this.lastTarget.tamed)&&(this.lastTargetTime=Math.min(this.lastTargetTime,.6)))}updateCompanion(t){this.companion&&this.companion.update(t,this.time)}updateCamera(t){const e=this.camera,n=this.player,i=new P;let r;if(!this.started||this.startBlend<1)if(this.started){this.startBlend=Math.min(1,this.startBlend+t*.9);const c=new P(Math.sin(this.cameraYaw),0,Math.cos(this.cameraYaw)),h=this.cameraPitch;r=n.position.clone(),r.y+=1.35+Math.sin(h)*this.cameraDistance,r.addScaledVector(c,-Math.cos(h)*this.cameraDistance),i.copy(n.position),i.y+=1.5,i.addScaledVector(c,1.6)}else{const c=Math.PI+Math.sin(this.time*.07)*.85,h=13.5,u=.15,d=new P(Math.sin(c),0,Math.cos(c)),f=new P(Math.cos(c),0,-Math.sin(c));r=n.position.clone(),r.y+=1+Math.sin(u)*h,r.addScaledVector(d,-Math.cos(u)*h),i.copy(n.position),i.y+=1.7,i.addScaledVector(f,-2.4),i.y+=.3}else{const c=new P(Math.sin(this.cameraYaw),0,Math.cos(this.cameraYaw)),h=this.cameraPitch;r=n.position.clone(),r.y+=1.35+Math.sin(h)*this.cameraDistance,r.addScaledVector(c,-Math.cos(h)*this.cameraDistance),i.copy(n.position),i.y+=1.5,i.addScaledVector(c,1.8)}const a=Zt(r.x,r.z);r.y<a+1&&(r.y=a+1);const o=Math.hypot(r.x,r.z);o>214&&(r.x*=214/o,r.z*=214/o);const l=this.started&&this.startBlend>=1?2.2:5.5;if(e.position.x=mt(e.position.x,r.x,l,t),e.position.y=mt(e.position.y,r.y,l,t),e.position.z=mt(e.position.z,r.z,l,t),this.cameraLook.x=mt(this.cameraLook.x,i.x,4.2,t),this.cameraLook.y=mt(this.cameraLook.y,i.y,4.2,t),this.cameraLook.z=mt(this.cameraLook.z,i.z,4.2,t),this.shakeTime>0){this.shakeTime-=t;const c=this.shakeAmount*Math.max(0,this.shakeTime)*1.4;e.position.x+=(Math.random()-.5)*c,e.position.y+=(Math.random()-.5)*c,e.position.z+=(Math.random()-.5)*c,this.shakeTime<=0&&(this.shakeAmount=0)}e.lookAt(this.cameraLook)}updateSun(){const t=this.player.position;this.sun.position.set(t.x-52,t.y+66,t.z-58),this.sun.target.position.set(t.x,t.y,t.z),this.sun.target.updateMatrixWorld()}loop(){requestAnimationFrame(this.loop);let t=this.clock.getDelta();t>.06&&(t=.06),this.time+=t*(this.paused?0:1),this.accum+=t,this.staminaToastCd=Math.max(0,this.staminaToastCd-t);const e=this.started,n=this.input;if(n.update(),!this.paused&&(e||!e)){const i=this.mobile?.0055:.0042;e&&!this.over&&(this.cameraYaw-=n.lookDelta.x*i,this.cameraPitch=ue(this.cameraPitch+n.lookDelta.y*i*.8,-.02,1.05),n.zoomDelta&&(this.cameraDistance=ue(this.cameraDistance+n.zoomDelta*.6,3.4,11.5)))}if(n.pausePressed&&e&&this.togglePause(),e&&!this.started&&this.start(),e&&!this.paused&&!this.over){let i=t;this.hitstop>0&&(this.hitstop-=t,i=t*.08),this.input.cameraYaw=this.cameraYaw;const r=this.input.state();n.lockPressed&&this.toggleLock(),n.sealPressed&&this.trySeal(),n.companionPressed&&this.cycleCompanion(),n.interactPressed&&this.handleInteract(),n.rosterPressed>0&&this.roster[n.rosterPressed-1]&&this.summonCompanion(n.rosterPressed-1);let a=this.cameraYaw;this.lockTarget&&this.lockTarget.alive&&(a=Math.atan2(this.lockTarget.position.x-this.player.position.x,this.lockTarget.position.z-this.player.position.z)),this.player.setAim(a),this.player.update(i,r,this.time,this.camera),this.resolvePlayerAttack(),this.updateSeal(i),this.updateLockTarget(i),this.updateCompanion(i);for(const o of[...this.creatures])o.removed||o.update(i,this.time);if(this.boss&&this.boss.alive&&this.boss.position.distanceTo(this.player.position)>80){this.ui.toast("O Guardião retorna ao seu altar…","red","◎",2600),this.boss.remove(),this.boss=null,this.removeBossArena();for(const o of this.world.shrines)o.activated&&!this.world.shrines.filter(l=>l.activated).length&&(o.activated=!1);for(const o of this.world.shrines){const l=this.quests.find(c=>c.id==="guardians");o.activated&&this.bossesDefeated<3&&!(l!=null&&l.done)&&this.bossesDefeated}}if(this.fx.updateProjectiles(i,this.world,this.player,o=>{this.damagePlayer(o.damage,o.group.position)}),this.fx.update(i),this.updateDrops(i,this.time),this.updateEssences(),this.updatePrompt(),this.updateSpawner(i),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.comboDisplay=0)),!this.treeReached&&Math.hypot(this.player.position.x,this.player.position.z)<26){this.treeReached=!0;const l=this.quests.find(c=>c.id==="tree");l&&!l.done&&this.completeQuest(l),this.ui.banner("ÁRVORE DO CORAÇÃO","O vínculo de Feralis pulsa sob seus pés",3400),this.fx.shockwave(this.player.position.clone().setY(this.player.position.y+.2),10485728,9,1.1),this.fx.burst(this.player.position.clone().setY(this.player.position.y+1.4),10485728,40,{speed:5,size:.5,life:1.2,gravity:-2}),this.player.addXp(120)}}else if(e)this.paused||this.over&&(this.deathTimer+=t,this.player.update(t,{move:{x:0,y:0},cameraYaw:this.cameraYaw,sprint:!1,attackPressed:!1,heavyPressed:!1,dodgePressed:!1,sealPressed:!1,lockPressed:!1,companionPressed:!1,interactPressed:!1,pausePressed:!1},this.time,this.camera),this.deathTimer>.9&&this.ui.dom.death.classList.contains("is-hidden"));else{this.input.cameraYaw=this.cameraYaw;const i={move:{x:0,y:0},cameraYaw:this.cameraYaw,sprint:!1,attackPressed:!1,heavyPressed:!1,dodgePressed:!1,sealPressed:!1,lockPressed:!1,companionPressed:!1,interactPressed:!1,pausePressed:!1};this.player.update(t,i,this.time,this.camera);for(const r of this.creatures)r.removed||r.update(t,this.time);this.fx.update(t),this.fx.updateProjectiles(t,this.world,this.player,()=>{}),this.updateDrops(t,this.time),this.updatePrompt()}if(!this.paused){this.world.update(t,this.time,this.player.position);const i=this.bossArena;i&&(i.ring.rotation.y+=t*.12,i.rune.rotation.y-=t*.2,i.ring.material.opacity=.22+Math.sin(this.time*1.6)*.08)}this.updateSun(),this.updateCamera(t),this.ui.update(t),this.renderer.render(this.scene,this.camera),n.endFrame()}updateSpawner(t){this.spawnTimer-=t;const e=this.creatures.filter(n=>n.alive&&!n.boss&&!n.tamed);for(const n of[...this.creatures]){if(n.boss||n.removed||!n.alive)continue;const i=n.position.distanceTo(this.player.position);!n.aggro&&i>115&&(n.remove(),this.creatures=this.creatures.filter(r=>r!==n))}this.spawnTimer>0||(this.spawnTimer=2.2,!(e.length>=this.maxWild)&&(this.boss&&this.boss.alive||this.spawnWild()))}requestStart(){this.start()}setupDebug(){window.FERALIS={game:this,start:()=>this.start(),spawn:(t,e,n,i=3,r=!1)=>{const a=new ar(this,t,{level:i,elite:r,position:new P(e,Zt(e,n),n)});return this.creatures.push(a),a},teleport:(t,e)=>{this.player.position.set(t,Zt(t,e),e),this.player.model.position.copy(this.player.position)},lock:()=>this.toggleLock(),attack:()=>this.player.tryAttack(!1),heavy:()=>this.player.tryAttack(!0),seal:()=>this.trySeal(),heal:()=>{this.player.hp=this.player.maxHp},boss:(t=1)=>this.spawnBoss(this.world.shrines[t]||this.world.shrines[0]),tameRandom:()=>{this.lockTarget&&(this.lockTarget.hp=1,this.onTame(this.lockTarget))},state:()=>({started:this.started,paused:this.paused,over:this.over,player:this.player.position.toArray(),hp:this.player.hp,creatures:this.creatures.length,boss:!!this.boss,roster:this.roster.length})}}bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.mobile?1.4:1.75)),this.input.resize()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.started&&!this.paused&&this.togglePause(!0)}),window.addEventListener("pointerdown",()=>{this.audioStarted||(this.audioStarted=!0,this.audio.unlock())},{once:!0}),window.addEventListener("keydown",t=>{!this.started&&(t.code==="Enter"||t.code==="NumpadEnter")&&this.start(),this.started&&this.over&&t.code==="Enter"&&this.respawn()}),setInterval(()=>this.audio.update(),320)}}const rg=new sg;window.game=rg;window.__feralisReady=!0;
