!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/public/build",o(o.s=1)}([function(e,t){const o={C:"c",CPP:"cpp",PYTHON:"python",JAVA:"java",JAVASCRIPT:"javascript",CSHARP:"csharp",GOLANG:"golang",RUST:"rust",R:"r",PHP:"php",SWIFT:"swift"},n=o.PYTHON,a={[o.C]:"c_cpp",[o.CPP]:"c_cpp",[o.PYTHON]:"python",[o.JAVA]:"java",[o.JAVASCRIPT]:"javascript",[o.CSHARP]:"csharp",[o.GOLANG]:"golang",[o.RUST]:"rust",[o.R]:"r",[o.PHP]:"php",[o.SWIFT]:"swift"};e.exports={DEFAULT_SHELL:"dash",SUPPORTED_LANGUAGES:o,DEFAULT_LANGUAGE:n,ACE_EDITOR_MODES:a}},function(e,t,o){"use strict";o.r(t);const n="mobile--tabbed-compiler",a="mobile--tabbed--terminal",r='<span class="run-text">\n                                &nbsp;Run&nbsp;\n                              </span>\n';var i=o(0);const s=()=>{const e=(()=>{const e="https://programiz.pro";let t="";return lang===i.SUPPORTED_LANGUAGES.C?t=e+"/learn/master-c-programming":lang===i.SUPPORTED_LANGUAGES.PYTHON?t=e+"/learn/master-python":lang===i.SUPPORTED_LANGUAGES.JAVA?t=e+"/learn/master-java":lang===i.SUPPORTED_LANGUAGES.CPP&&(t=e+"/learn/master-cpp"),t+="?utm_source=compiler&utm_campaign=programiz&utm_medium=referral",t})(),t=$("#root").data("lang"),o=function(e){let t="Coding";switch(e){case i.SUPPORTED_LANGUAGES.C:t="C";break;case i.SUPPORTED_LANGUAGES.CPP:t="C++";break;case i.SUPPORTED_LANGUAGES.JAVA:t="Java";break;case i.SUPPORTED_LANGUAGES.PYTHON:t="Python";break;case i.SUPPORTED_LANGUAGES.SQL:t="SQL"}return t}(t)+" Course, Enhanced by AI",n=`Learn ${t} the right way — solve challenges, build projects, and leverage the power of AI to aid you in handling errors.`;$(".sale-popup #discount-description").html(o),$(".sale-popup .sale-container h5").html(n),$(".sale-popup > a").html("Get Started for Free").attr("title","Get Started for Free").attr("href",e),document.getElementById("sale-popup").style.display="flex"};function l(){let e="https://pages.programiz.pro/summer-challenge-gcp?utm_source=popup-compiler&utm_medium=popup&utm_campaign=summer-challenge-sale__popup-compiler__june";(()=>{const e=new Intl.DateTimeFormat("en",{timeStyle:"long"}).format(new Date).split(" ")[2]||"";return!(!e||!e.length||"GMT+5:30"!=e)})()&&(e="https://pages.programiz.pro/summer-challenge-gc?utm_source=popup-compiler&utm_medium=popup&utm_campaign=summer-challenge-sale__popup-compiler__june");$(".sale-popup").addClass("sale-popup--sale"),$(".sale-popup #discount-description").html('Upskill with <span style="color: #6501E5;">#ProgramizSummerChallenge 😎</span'),$(".sale-popup .sale-container h5").html("With our summer challenge, get a special  certificate, unique digital badges, and a chance to get featured on Programiz PRO."),$(".sale-popup > a").html("Start The Challenge").attr("title","Start The Challenge").attr("href",e),document.getElementById("sale-popup").style.display="flex"}ace.define("ace/mode/programiz_terminal_highlight_rules",(function(e,t,o){var n=e("ace/lib/oop"),a=e("ace/mode/text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:["comment.line.colons.dosbatch"],regex:"(?:^|\\b)gcc($|\\s.*$)",caseInsensitive:!0},{token:["comment.line.colons.dosbatch"],regex:"^(/tmp).*$",caseInsensitive:!0},{token:["comment.line.colons.dosbatch"],regex:/^g\+\+.*$/,caseInsensitive:!0},{token:["comment.line.colons.dosbatch"],regex:/^cat.*$/,caseInsensitive:!0},{token:["comment.line.colons.dosbatch"],regex:/^>/},{token:["comment.line.colons.dosbatch"],regex:"^(java -cp).*$",caseInsensitive:!0},{token:["comment.line.colons.dosbatch"],regex:"^(csc|mono).*$",caseInsensitive:!0},{token:["comment.line.colons.dosbatch"],regex:"^(node).*$",caseInsensitive:!0},{token:["comment.line.colons.dosbatch"],regex:"^(swift).*$",caseInsensitive:!0},{token:["comment.line.colons.dosbatch"],regex:"^(Rscript).*$",caseInsensitive:!0},{token:["comment.line.colons.dosbatch"],regex:"^(go run).*$",caseInsensitive:!0},{token:["comment.line.colons.dosbatch"],regex:"^(php).*$",caseInsensitive:!0}]}};n.inherits(r,a),t.ProgramizTerminalHighlightRules=r})),ace.define("ace/mode/programiz_terminal",(function(e,t,o){var n=e("ace/lib/oop"),a=e("ace/mode/text").Mode,r=e("ace/mode/programiz_terminal_highlight_rules").ProgramizTerminalHighlightRules,i=function(){this.HighlightRules=r};n.inherits(i,a),function(){}.call(i.prototype),t.Mode=i}));const c=ace.edit("editor"),p=ace.edit("terminal");let d=$("#root").data("lang")||i.DEFAULT_LANGUAGE,u=i.ACE_EDITOR_MODES[d];c.setTheme("ace/theme/textmate"),c.getSession().setMode("ace/mode/"+u),p.setTheme("ace/theme/textmate"),p.getSession().setMode("ace/mode/programiz_terminal");const m=()=>{let e=0;(navigator&&navigator.platform?["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform):navigator.userAgent&&-1==navigator.userAgent.toLowerCase().indexOf("iphone"))&&(e=216);const t=($(".wrapper").height()-48-48-e)/22-3;c.setOptions({fontFamily:"droid_sans_monoregular",fontSize:"14px",showGutter:!0,highlightActiveLine:!0,wrap:!0,useWorker:!1,overwrite:!1,tooltipFollowsMouse:!1,maxLines:t,dragEnabled:!1,showPrintMargin:!1}),c.container.style.lineHeight="22px",p.setOptions({fontFamily:"droid_sans_monoregular",fontSize:"14px",showGutter:!1,highlightActiveLine:!1,behavioursEnabled:!1,wrapBehavioursEnabled:!1,wrap:!0,useWorker:!0,overwrite:!1,maxLines:t,dragEnabled:!1,cursorStyle:"slim",showPrintMargin:!1}),p.container.style.lineHeight="22px"};m(),$(window).resize(m);let g=!1;const h=new URLSearchParams(window.location.search).get("ref");let b="";try{const e=localStorage.getItem("playground"),t=JSON.parse(e);t&&h&&t[h]&&t[h].code&&(b=t[h].code,c.setValue(b,1))}catch(e){localStorage.removeItem("playground")}c.commands.addCommand({name:"executeCode",bindKey:{win:"Ctrl-Enter",mac:"Cmd-Enter|Ctrl-Enter"},exec:function(){return k(),!1}}),p.commands.addCommand({name:"backspace",bindKey:{win:"Backspace",mac:"Backspace|Delete"},exec:function(){return!(p.getValue().length>f.length)}}),p.commands.addCommand({name:"executeCode",bindKey:{win:"Ctrl-Enter",mac:"Cmd-Enter|Ctrl-Enter"},exec:function(){return k(),!1}}),window.innerWidth<1e3&&(c.renderer.$cursorLayer.isBlinking=!1,p.renderer.$cursorLayer.isBlinking=!1);let v=null,f=d==i.SUPPORTED_LANGUAGES.PYTHON?"> ":"$ ",w="";p.commands.addCommand({name:"newLine",bindKey:{win:"Enter",mac:"Enter"},exec:()=>(w=p.getValue().slice(f.length),S(),v.emit("evaluate",{code:w}),!1)}),function(e,t){v=io(`${e}/?sessionId=${t}&lang=${d}`,{transports:["websocket"]});const o=()=>{$(".mobile-run-button #loader").replaceWith(r),$(".desktop-run-button #loader").replaceWith(r),$(".mobile-top-bar-run-button").html('<img\n      src="assets/icons/play.svg" alt="run-icon"\n    />'),$(".desktop-run-button").attr("disabled",!1),$(".desktop-run-button").css({cursor:"pointer"})};v.on("output",({output:e})=>{o(),e=e.split(">>>").join(">"),w.length>0&&(e.startsWith(w)?(e=e.slice(w.length),w=""):w.startsWith(e)?(w=w.slice(e.length),e=""):e.startsWith("> ")&&e.replace("> ","").startsWith(w)&&(e=e.slice(w.length+2).trimLeft())),0===w.trim().length&&(e=e.trimLeft());const t=p.getValue()+e;p.setValue(t,1),f=p.getValue(),p.focus()}),v.on("disconnect",(function(){})),v.on("connect",(function(){p.setValue(f,1),Object.values(i.SUPPORTED_LANGUAGES).includes(d)||alert(`This language is not supported, initializing ${i.DEFAULT_LANGUAGE} instead`)})),$(".spinner").hide(),$(".wrapper").css({display:"block"}),$(".mobile-nav-drawer").addClass("show")}("https://"+d+".repl-web.programiz.com",(e=>{for(var t="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=o.length,a=0;a<e;a++)t+=o.charAt(Math.floor(Math.random()*n));return t})(10));const S=()=>{$(".desktop-run-button").attr("disabled",!0),$(".desktop-run-button").css({cursor:"not-allowed"})},k=()=>{f="",w="",A(),S(),p.setValue("");const e=c.getValue();v.emit("run",{code:e}),_(6e3)};Mousetrap.bind(["command+enter","ctrl+enter"],(function(e){return k(),!1})),$("#toggle-expanded-mode-desktop").click(e=>{e.preventDefault(),$(".spinner").show(),$(".wrapper").css({display:"none"}),$(".mobile-nav-drawer").removeClass("show"),function(e=!0){e?($(".container").addClass("maximized"),$(".toggle-expanded-mode-desktop").prop("title","Enter Fullscreen"),g=!0):($(".container").removeClass("maximized"),$(".toggle-expanded-mode-desktop").prop("title","Exit Fullscreen"),g=!1)}(!g),setTimeout(()=>{$(".spinner").hide(),$(".wrapper").css({display:"block"}),$(".mobile-nav-drawer").addClass("show")},0)}),$(".mobile-run-button").click(e=>{k(),y(a)}),$(".mobile-top-bar-run-button").click(e=>{k(),y(a)});const P=()=>{if(console.log("Opening popup"),function(){const e=new Date("Jun 02, 2023 14:45:00 GMT+0545").getTime(),t=new Date("Jun 16, 2023 13:45:00 GMT+0545").getTime(),o=(new Date).getTime();return o>=e&&o<t}())return console.log("Opening sale popup"),void l();console.log("Opening default popup"),s()},A=()=>{$("span.run-text").replaceWith('<svg id="loader" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <circle cx="12" cy="12" r="10" stroke="white" stroke-opacity="0.6" stroke-width="4"/>\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0V4C7.58172 4 4 7.58172 4 12C4 12.3387 4.02104 12.6724 4.06189 13H0.0410728C0.0138702 12.6703 0 12.3368 0 12Z" fill="white"/>\n                      </svg>    \n'),$(".mobile-top-bar-run-button").html('<svg id="mobile-top-bar-run-button-loader" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <circle cx="12" cy="12" r="10" stroke="white" stroke-opacity="0.6" stroke-width="4"/>\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0V4C7.58172 4 4 7.58172 4 12C4 12.3387 4.02104 12.6724 4.06189 13H0.0410728C0.0138702 12.6703 0 12.3368 0 12Z" fill="white"/>\n                      </svg>    \n')},_=e=>{localStorage.getItem("dontShowPopupAgain")||setTimeout(()=>{P()},e)};$(".desktop-run-button").click(e=>{k()}),$(".close-sale-popup").click(e=>{document.getElementById("sale-popup").style.display="none",localStorage.setItem("dontShowPopupAgain",!0)}),$(".close-popup").click(e=>{document.getElementById("get-started-pop-up").style.display="none",localStorage.setItem("dontShowPopupAgain",!0)}),$(".desktop-clear-button").click(e=>{(()=>{const e=d===i.SUPPORTED_LANGUAGES.PYTHON?"> ":"";p.setValue(e,1),f=e,w="",p.focus()})()}),$(".burger-menu-btn").click(e=>{e.preventDefault(),x(!0)}),$(".close-nav-btn").click(e=>{e.preventDefault(),x(!1)});const y=e=>{e===n&&($(".shell-pill").removeClass("active"),$(".compiler-pill").addClass("active"),$(".terminal-wrapper").hide(),$(".editor-wrapper").show(),c.focus(),c.navigateLineEnd()),e===a&&($(".shell-pill").addClass("active"),$(".compiler-pill").removeClass("active"),$(".terminal-wrapper").show(),$(".editor-wrapper").hide(),p.focus())};function E(e=!0){if(e)return c.setTheme("ace/theme/twilight"),p.setTheme("ace/theme/twilight"),$("#logo").attr("src","assets/logos/logo-inverted.svg"),$("#nav-logo").attr("src","assets/logos/logo-inverted.svg"),$(".container").addClass("dark-mode"),void $("#toggle-dark-mode-desktop").prop("title","Toggle light mode");c.setTheme("ace/theme/textmate"),p.setTheme("ace/theme/textmate"),$(".container").removeClass("dark-mode"),$("#logo").attr("src","assets/logos/logo.svg"),$("#nav-logo").attr("src","assets/logos/logo.svg"),$("#toggle-dark-mode-desktop").prop("title","Toggle dark mode")}function T(){const e=localStorage.getItem("playground");if(!e)return d===i.SUPPORTED_LANGUAGES.PYTHON&&(localStorage.setItem("playground",JSON.stringify({darkMode:{status:!0,updatedAt:Date.now()}})),!0);const t=JSON.parse(e);return!!(t&&t.darkMode&&t.darkMode.status)}function x(e=!0){e?$(".mobile-nav-drawer").addClass("visible"):$(".mobile-nav-drawer").removeClass("visible")}$(".shell-pill").click(()=>{y(a)}),$(".compiler-pill").click(()=>{y(n)}),$("#back-button").click(()=>{window.history.back()}),$("#toggle-dark-mode-mobile, #toggle-dark-mode-desktop").click(()=>{const e=JSON.parse(localStorage.getItem("playground"))||{},t=T()?0:1;let o={status:t,updatedAt:Date.now()};const n=Object.assign(e,{darkMode:o});E(t),localStorage.setItem("playground",JSON.stringify(n))}),T()&&E(!0),$("img.svg").each((function(){var e=$(this),t=e.attr("id"),o=e.attr("class"),n=e.attr("src");$.get(n,(function(n){var a=$(n).find("svg");void 0!==t&&(a=a.attr("id",t)),void 0!==o&&(a=a.attr("class",o+" replaced-svg")),a=a.removeAttr("xmlns:a"),e.replaceWith(a)}),"xml")})),$(".desktop-save-button").on("click",()=>{window.confirm("Redirecting you to our new beta compiler that supports saving, sharing and installing packages.")&&window.open("https://programiz.pro/learn/python/online-ide?utm_source=programiz_dot_com_python_compiler_save_button","_blank")})}]);