/* empty css                      */(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const n=document.querySelectorAll(".faq-list-item");n.forEach(s=>s.addEventListener("click",l));function l(s){const o=s.currentTarget.closest(".faq-list-item");document.querySelectorAll(".faq-list-item").forEach(e=>{e!==o&&(e.classList.remove("faq-open"),e.querySelector(".faq-bottom-text").classList.remove("is-visible"))});const r=o.querySelector(".faq-bottom-text");r.classList.toggle("is-visible"),r.classList.contains("is-visible")?(o.classList.add("faq-open"),o.querySelector("use")):(o.classList.remove("faq-open"),o.querySelector("use"))}
//# sourceMappingURL=commonHelpers.js.map