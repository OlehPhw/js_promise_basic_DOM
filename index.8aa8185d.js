var e=new Promise(function(e,t){document.querySelector(".logo").addEventListener("click",function(t){e()})}),t=new Promise(function(e,t){setTimeout(function(){t(Error("sorry"))},3e3)}),n=function(){var e=document.createElement("div");e.textContent="Promise was resolved!",e.classList.add("message"),document.body.append(e)},o=function(){var e=document.createElement("div");e.textContent="Promise was rejected!",e.classList.add("message","error-message"),document.body.append(e)};e.then(n).catch(o),t.then(n).catch(o);
//# sourceMappingURL=index.8aa8185d.js.map