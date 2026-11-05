// Compare a previous production export with the current one after a design-only change.
// Usage: node scripts/audit-preservation.mjs <absolute baseline out directory>
import fs from 'node:fs';
import path from 'node:path';
const baseline=process.argv[2];
if(!baseline)throw Error('Supply a baseline export directory');
const routes=['','about','books','reviews','journal','contact','privacy','terms',...['white-elephant-gypsies','melvin-entwistle','the-curse-of-tecumseh','sorrows-edge','curing-marxism'].map(s=>'books/'+s)];
const decode=s=>s.replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#x27;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&nbsp;',' ');
const count=items=>items.reduce((m,w)=>(m.set(w,(m.get(w)||0)+1),m),new Map());
const text=html=>decode(html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]||'').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ').match(/[\p{L}\p{N}’']+/gu)||[];
const attrs=(html,tag,attr)=>Array.from(html.matchAll(new RegExp(`<${tag}\\b[^>]*\\b${attr}="([^\"]+)"`,'g')),m=>decode(m[1]));
const errors=[];
for(const route of routes){
 const before=fs.readFileSync(path.join(baseline,route,'index.html'),'utf8');
 const after=fs.readFileSync(path.join('out',route,'index.html'),'utf8');
 for(const [word,n] of count(text(before)))if((count(text(after)).get(word)||0)<n)errors.push(`${route}: lost copy token ${word}`);
 for(const [tag,attr] of [['a','href'],['img','src']]){
  const old=count(attrs(before,tag,attr)),now=count(attrs(after,tag,attr));
  for(const [url,n] of old)if(now.get(url)!==n)errors.push(`${route}: changed ${tag} destination ${url}`);
 }
 for(const name of ['description','og:title','og:description']){
  const pattern=new RegExp(`<meta (?:name|property)="${name}" content="([^\"]*)"`);
  if(before.match(pattern)?.[1]!==after.match(pattern)?.[1])errors.push(`${route}: changed ${name}`);
 }
 const canonical=html=>html.match(/<link rel="canonical" href="([^\"]+)"/)?.[1];
 if(canonical(before)!==canonical(after))errors.push(`${route}: canonical changed`);
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`PASS: copy tokens, image placements, link destinations and SEO fields preserved across ${routes.length} pages.`);
