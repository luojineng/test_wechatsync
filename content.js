!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=677)}({677:function(e,t){function n(){var e={};return e.title=document.body.getAttribute("data-msg_title"),e.content=$("#js_content").html(),e.thumb=document.body.getAttribute("data-msg_cdn_url"),e.desc=document.body.getAttribute("data-msg_desc"),e.link=window.location.href,console.log(e),e}if(setTimeout(function(){var e=document.createElement("script");e.type="text/javascript",e.innerHTML="document.body.setAttribute('data-msg_desc', msg_desc );document.body.setAttribute('data-msg_title', msg_title);document.body.setAttribute('data-msg_cdn_url', msg_cdn_url);",document.head.appendChild(e),document.head.removeChild(e)},50),console.log("accounts",i),window.location.href.indexOf("mp.weixin.qq.com/s")>-1){var a=$("<div class='sync-btn' style='position: fixed; left: 0; right: 0;top: 68px;width: 950px; margin-left: auto;margin-right: auto;'></div>");a.append('<div  data-toggle="modal" data-target="#exampleModalCenter" style=\'    font-size: 14px;border: 1px solid #eee;width: 105px; text-align: center; box-shadow: 0px 0px 1px rgba(0,0,0, 0.1);border-radius: 5px;padding: 5px; cursor: pointer;    background: rgb(0, 123, 255);color: white;\'>同步该文章</div>'),a.click(function(){!function(e){chrome.extension.sendMessage({action:"getAccount"},function(t){o=t,e&&e()})}(()=>{!function(){var e=n(),t="";i=o,o.filter(e=>!e.supportTypes||e.supportTypes.indexOf("html")>-1).forEach((e,n)=>{t+='\n            <div class="form-check mb-1">\n  <input class="form-check-input" type="checkbox" value="'+e.uid+'" name="submit_check" id="defaultCheck'+n+'">\n  <label class="form-check-label" for="defaultCheck'+n+'">\n  <img src="'+(e.icon?e.icon:chrome.extension.getURL("images/wordpress.ico"))+'" class="icon" height="20" style="vertical-align: -3px;height: 20px !important"> \n  '+e.title+"\n  </label>\n</div>\n            "});var a='\n        <div class="media">\n        <img class="align-self-center mr-3" src="'+e.thumb+'" width="150" alt="Generic placeholder image">\n        <div class="media-body">\n          <h5 class="mt-0" style="font-weight:bold">'+e.title+"</h5>\n          <p>"+e.desc+'</p>\n        </div>\n      </div>\n\n      <hr>\n      <h6>账号</h6>\n      <div id="syncd-users">\n      '+t+"\n      </div>\n\n        ";$("#exampleModalCenter .modal-body").html(""),$("#exampleModalCenter .modal-body").append(a),console.log("clicka")}()})}),$("#page-content").append(a)}$("body").append('\n\x3c!-- Modal --\x3e\n<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">\n  <div class="modal-dialog modal-dialog-centered" role="document" style="color: #444;">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="exampleModalLongTitle">同步文章</h5>\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closesyncmodl">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>\n      <div class="modal-body">\n        \n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal" style="font-size: 13px;    line-height: 1.5;">取消</button>\n        <button type="button" class="btn btn-primary" style="font-size: 13px;    line-height: 1.5;">同步</button>\n      </div>\n    </div>\n  </div>\n</div>\n'),chrome.runtime.onMessage.addListener(function(e,t,n){console.log("content.js revice",e);try{console.log("revice",e),"taskUpdate"==e.method&&function(e){var t=$(".alld-pubaccounts").length,n=e.accounts.map(e=>{var n=("uploading"==e.status?' <div class="lds-dual-ring"></div>'+(e.msg?e.msg:"同步中"):"")+("failed"==e.status?"同步失败, 错误内容："+e.error:"")+("done"==e.status&&e.editResp?'同步成功 <a\n                      href="'+e.editResp.draftLink+'"\n                      style="margin-left: 5px"\n                      target="_blank"\n                      >查看草稿</a\n                    >':"");if(t){var a=$("."+e.type+"-message");return a.length&&a.html(n),n}return'<div class="account-item taskStatus">\n                 '+(e.icon?' <img src="'+e.icon+'" class="icon"\n      width="20"\n      height="20"\n      style="vertical-align: -6px;height: 20px !important"\n    />':"")+'<span class="name-block">'+e.title+'</span><span\n                  style="margin-left: 15px"\n                  class="'+e.type+"-message "+e.status+' message"\n                >\n                  '+n+"</span></div>"}),a='\n  <div class="alld-pubaccounts">\n  '+n.join("\n")+"</div>";console.log(n,a),t||$("#syncd-users").html(a)}(e.task)}catch(e){console.log(e)}}),$("#exampleModalCenter .btn-primary").click(function(e){var t=$('input[name="submit_check"]'),a=[];for(let e=0;e<t.length;e++){const n=t[e];if(n.checked){var o=i.filter(e=>e.uid==n.value);console.log(i,n.value),a.push(o[0])}}if(!a.length)return alert("请选择账号"),e.stopPropagation();chrome.extension.sendMessage({action:"addTask",task:{post:n(),accounts:a}},function(e){console.log("addTask return",e)}),$("#syncd-users").html("等待发布...")});var o=[],i=[];if(window.location.href.indexOf("mp.weixin.qq.com/cgi-bin/appmsg")>-1){var s=document.createElement("script");s.type="text/javascript",s.src=chrome.extension.getURL("autoformat.js"),s.setAttribute("data-url",chrome.runtime.getURL("templates.html")),document.head.appendChild(s)}}});