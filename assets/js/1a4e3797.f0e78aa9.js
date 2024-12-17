"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["485230"],{743115:function(e,t,r){r.d(t,{c:function(){return o}});var s=r(667294),a=r(402933);let l=["zero","one","two","few","many","other"];function n(e){return l.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:n(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,a.Z)();return(0,s.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:n(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);let a=r.select(t);return s[Math.min(r.pluralForms.indexOf(a),s.length-1)]})(r,t,e)}}},995214:function(e,t,r){r.r(t),r.d(t,{default:()=>_});var s=r("785893"),a=r("667294"),l=r("402933"),n=r("326188"),c=r("994819"),o=r("83012"),u=r("96025"),h=r("743115"),i=r("386010"),m=r("616550"),d=r("7227"),p=r("183944");let g=function(){let e=(0,d.Z)(),t=(0,m.k6)(),r=(0,m.TH)(),{siteConfig:{baseUrl:s}}=(0,l.Z)(),a=e?new URLSearchParams(r.search):null,n=a?.get("q")||"",c=a?.get("ctx")||"",o=a?.get("version")||"",u=e=>{let t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:n,searchContext:c&&Array.isArray(p.Kc)&&p.Kc.some(e=>"string"==typeof e?e===c:e.path===c)?c:"",searchVersion:o,updateSearchPath:e=>{let r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{let s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{let t=u(e);return`${s}search?${t.toString()}`}}};var f=r("386562"),x=r("529467"),y=r("917022"),j=r("795260"),S=r("726831"),C=r("88056"),I=r("856252");let w={searchContextInput:"searchContextInput_lpli",searchQueryInput:"searchQueryInput_Nydd",searchResultItem:"searchResultItem_Iw1l",searchResultItemPath:"searchResultItemPath_hEpX",searchResultItemSummary:"searchResultItemSummary__p0n",searchQueryColumn:"searchQueryColumn_l3KK",searchContextColumn:"searchContextColumn_Zyn4"};var v=r("304792");function P(){let{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,l.Z)(),{selectMessage:r}=(0,h.c)(),{searchValue:n,searchContext:o,searchVersion:m,updateSearchPath:d,updateSearchContext:x}=g(),[y,j]=(0,a.useState)(n),[S,I]=(0,a.useState)(),P=`${e}${m}`,_=(0,a.useMemo)(()=>y?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"}),[y]);(0,a.useEffect)(()=>{d(y),y?(async()=>{I(await (0,f.a)(P,o,y))})():I(void 0)},[y,P,o]);let b=(0,a.useCallback)(e=>{j(e.target.value)},[]);(0,a.useEffect)(()=>{n&&n!==y&&j(n)},[n]);let[A,$]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{(async function e(){(!Array.isArray(p.Kc)||o||p.pQ)&&await (0,f.r)(P,o),$(!0)})()},[o,P]),(0,s.jsxs)(a.Fragment,{children:[(0,s.jsxs)(c.Z,{children:[(0,s.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,s.jsx)("title",{children:_})]}),(0,s.jsxs)("div",{className:"container margin-vert--lg",children:[(0,s.jsx)("h1",{children:_}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:(0,i.Z)("col",{[w.searchQueryColumn]:Array.isArray(p.Kc),"col--9":Array.isArray(p.Kc),"col--12":!Array.isArray(p.Kc)}),children:(0,s.jsx)("input",{type:"search",name:"q",className:w.searchQueryInput,"aria-label":"Search",onChange:b,value:y,autoComplete:"off",autoFocus:!0})}),Array.isArray(p.Kc)?(0,s.jsx)("div",{className:(0,i.Z)("col","col--3","padding-left--none",w.searchContextColumn),children:(0,s.jsxs)("select",{name:"search-context",className:w.searchContextInput,id:"context-selector",value:o,onChange:e=>x(e.target.value),children:[p.pQ&&(0,s.jsx)("option",{value:"",children:(0,u.I)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),p.Kc.map(e=>{let{label:r,path:a}=(0,v._)(e,t);return(0,s.jsx)("option",{value:a,children:r},a)})]})}):null]}),!A&&y&&(0,s.jsx)("div",{children:(0,s.jsx)(C.Z,{})}),S&&(S.length>0?(0,s.jsx)("p",{children:r(S.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:S.length}))}):(0,s.jsx)("p",{children:(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,s.jsx)("section",{children:S&&S.map(e=>(0,s.jsx)(R,{searchResult:e},e.document.i))})]})]})}function R(e){let{searchResult:{document:t,type:r,page:a,tokens:l,metadata:n}}=e,c=r===x.P.Title,u=r===x.P.Keywords,h=r===x.P.Description,i=h||u,m=c||i,d=r===x.P.Content,g=(c?t.b:a.b).slice(),f=d||i?t.s:t.t;!m&&g.push(a.t);let C="";if(p.vc&&l.length>0){let e=new URLSearchParams;for(let t of l)e.append("_highlight",t);C=`?${e.toString()}`}return(0,s.jsxs)("article",{className:w.searchResultItem,children:[(0,s.jsx)("h2",{children:(0,s.jsx)(o.Z,{to:t.u+C+(t.h||""),dangerouslySetInnerHTML:{__html:d||i?(0,y.C)(f,l):(0,j.o)(f,(0,S.m)(n,"t"),l,100)}})}),g.length>0&&(0,s.jsx)("p",{className:w.searchResultItemPath,children:(0,I.e)(g)}),(d||h)&&(0,s.jsx)("p",{className:w.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,j.o)(t.t,(0,S.m)(n,"t"),l,100)}})]})}let _=function(){return(0,s.jsx)(n.Z,{children:(0,s.jsx)(P,{})})}}}]);