(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const d=async()=>await(await fetch("https://api.unsplash.com/photos/?client_id=IsXpi4qrU506X4jWlSOlgzDhPY8moppbvQ9SkUgNAS4")).json(),l=(t,r)=>{const n=t.map(o=>` 
    <div id=${o.id} class="image-container__image">
    <img src=${o.urls.small} alt=${o.description}>
    </div>
    `);r.innerHTML=n.join("")},m=async t=>(t===""&&(t="dogs"),(await(await fetch(` https://api.unsplash.com/search/photos?query=${t}&client_id=IsXpi4qrU506X4jWlSOlgzDhPY8moppbvQ9SkUgNAS4`)).json()).results),u=document.querySelector(".image-container"),p=document.querySelector("#searchForm"),i=document.querySelector("#searchInput"),f=async()=>{const t=await d();l(t,u)};let c="";i.addEventListener("change",()=>{c=i.value});p.addEventListener("submit",async t=>{t.preventDefault();const r=localStorage.getItem("values"),o=[...r?JSON.parse(r):[],c];localStorage.setItem("values",JSON.stringify(o));const e=await m(c);l(e,u)});f();