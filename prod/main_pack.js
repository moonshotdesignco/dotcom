(()=>{let e=document.getElementById("see"),t=document.getElementById("learn"),s=document.getElementById("reach"),c=document.getElementById("see-content"),n=document.getElementById("learn-content"),l=document.getElementById("reach-content");e.onclick=function(){this.classList.toggle("active"),t.classList.remove("active"),s.classList.remove("active"),c.classList.toggle("expanded"),n.classList.remove("expanded"),l.classList.remove("expanded")},t.onclick=function(){this.classList.toggle("active"),e.classList.remove("active"),s.classList.remove("active"),n.classList.toggle("expanded"),c.classList.remove("expanded"),l.classList.remove("expanded")},s.onclick=function(){this.classList.toggle("active"),e.classList.remove("active"),t.classList.remove("active"),l.classList.toggle("expanded"),c.classList.remove("expanded"),n.classList.remove("expanded")};let o=document.getElementById("stylesheet"),a=document.getElementById("logo"),i=document.getElementById("cres"),m=document.getElementById("btn-light"),d=document.getElementById("btn-dark"),g=document.getElementById("span-light"),r=document.getElementById("span-dark");m.onclick=function(){o.setAttribute("href","/comp.css"),a.setAttribute("src","/img/mdco-logotype.svg"),i.setAttribute("src","/img/crescent.svg"),g.className="current",r.className=""},d.onclick=function(){o.setAttribute("href","/comp-dark.css"),a.setAttribute("src","/img/mdco-logotype_f6.svg"),i.setAttribute("src","/img/crescent_f6.svg"),r.className="current",g.className=""}})();