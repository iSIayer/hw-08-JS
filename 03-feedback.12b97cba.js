function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,m=function(){return l.Date.now()};function v(t,e,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,c=e,a=t.apply(i,n)}function x(t){return c=t,u=setTimeout(j,e),l?g(t):a}function S(t){var n=t-f;return void 0===f||n>=e||n<0||s&&t-c>=i}function j(){var t=m();if(S(t))return O(t);u=setTimeout(j,function(t){var n=e-(t-f);return s?p(n,i-(t-c)):n}(t))}function O(t){return u=void 0,v&&o?g(t):(o=r=void 0,a)}function h(){var t=m(),n=S(t);if(o=arguments,r=this,f=t,n){if(void 0===u)return x(f);if(s)return u=setTimeout(j,e),g(f)}return void 0===u&&(u=setTimeout(j,e)),a}return e=b(e)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},h.flush=function(){return void 0===u?a:O(m())},h}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||a.test(t)?u(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(t,e,{leading:o,maxWait:e,trailing:r})};const g={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};function x(){!function(t){const e=JSON.stringify(t);localStorage.setItem("feedback-form-state",e)}({name:g.input.value,comment:g.textarea.value})}g.form.addEventListener("submit",(function(t){t.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),g.form.reset(),g.input.value="",g.textarea.value=""})),g.input.addEventListener("input",t(e)(x,500)),g.textarea.addEventListener("input",t(e)(x,500)),function(){const t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(g.input.value=t.name,g.textarea.value=t.comment)}();
//# sourceMappingURL=03-feedback.12b97cba.js.map
