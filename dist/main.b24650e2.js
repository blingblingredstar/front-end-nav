parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var n=function(){var n=JSON.parse(localStorage.getItem("state"));return Array.isArray(n)?n:[{logo:{type:"img",content:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268/sign=1e6e214ea31ea8d38a227302af0b30cf/7c1ed21b0ef41bd580fa7e0154da81cb38db3d9d.jpg"},url:"https://www.bilibili.com/",name:"哔哩哔哩"},{logo:{type:"String",content:"知"},url:"https://www.zhihu.com/",name:"知乎"},{logo:{type:"String",content:"B"},url:"https://www.bilibili.com/",name:"bilibili.com"},{logo:{type:"String",content:"B"},url:"https://www.bilibili.com/",name:"bilibili.com"},{logo:{type:"String",content:"B"},url:"https://www.bilibili.com/",name:"bilibili.com"}]},t=function(n){localStorage.setItem("state",JSON.stringify(n)),o(n)},o=function(n){$(".site-list").find("li:not(.site-add)").remove();var t=$(".site-add");n.forEach(function(n,o){$('<li class="site-item" data-index="'.concat(o,'">\n        <a href="').concat(n.url,'">\n          <div class="site-logo">\n            ').concat("String"===n.logo.type?n.logo.content:'<img src="'.concat(n.logo.content,'" alt="').concat(n.name,'" class="site-logo-img"/>'),'\n          </div>\n          <div class="site-name">').concat(n.name,'</div>\n        </a>\n        <div class="site-item-close">\n          <svg\n            t="1572014249855"\n            class="icon"\n            viewBox="0 0 1024 1024"\n            version="1.1"\n            xmlns="http://www.w3.org/2000/svg"\n            p-id="2878"\n       \n          >\n            <path\n              d="M515.236 491.069l-136.96-136.96a17.092 17.092 0 1 0-24.18 24.155l136.961 136.972-136.96 136.972a17.092 17.092 0 1 0 24.167 24.167l136.972-136.96 136.972 136.96a17.092 17.092 0 1 0 24.167-24.156l-136.96-136.983 136.96-136.96a17.092 17.092 0 1 0-24.167-24.168l-136.96 136.96z"\n              p-id="2879"\n            ></path>\n          </svg>\n        </div>\n      </li>')).insertBefore(t)}),$(".site-item-close").on("click",e)},i=function(){var n=$(document).scrollTop();$(document).bind("scroll",function(){$(document).scrollTop(n)}),$(".modal-form"),$(".modal").css("margin-top",window.pageYOffset+"px").removeClass("closed")},l=function(){$(document).unbind("scroll"),$(".modal").addClass("closed")},a=function(){i(),$(".modal-btn").one("click",function(){var o=$(".modal-input-url").val(),i=$(".modal-input-name").val(),a={logo:{type:"String",content:i[0].toLocaleUpperCase()},url:o,name:i},e=n().concat([a]);t(e),$(".modal-input-url").val(""),$(".modal-input-name").val(""),l()}),$(".modal-close").on("click",l)};function e(){var o=$(this).parent().data("index"),i=n();i.splice(o,1),t(i)}$(".site-add").on("click",a),o(n());
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.b24650e2.js.map