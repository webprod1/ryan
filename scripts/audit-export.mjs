import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('out');
const basePath=(process.env.NEXT_PUBLIC_BASE_PATH||'').replace(/\/$/,'');
const unprefix=url=>basePath&&(url===basePath||url.startsWith(basePath+'/'))?url.slice(basePath.length)||'/':url;
const slugs=['white-elephant-gypsies','melvin-entwistle','the-curse-of-tecumseh','sorrows-edge','curing-marxism'];
const routes=['','about','books','reviews','journal','contact','privacy','terms',...slugs.map(s=>'books/'+s)];
const failures=[];let links=0,images=0;
for(const route of routes){
 const file=path.join(root,route,'index.html');
 if(!fs.existsSync(file)){failures.push('Missing route '+route);continue}
 const html=fs.readFileSync(file,'utf8');
 if(/ryanlrobinson\.net/i.test(html))failures.push('Original author domain remains in page: '+route);
 if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)failures.push('Expected one h1: '+route);
 if(!/<link rel="canonical" href="https:\/\//.test(html))failures.push('Missing canonical: '+route);
 if(/<meta name="robots" content="[^\"]*noindex/.test(html))failures.push('Unexpected noindex: '+route);
 for(const match of html.matchAll(/<a\b[^>]*href="([^\"]+)"/g)){
  const url=match[1];if(!url.startsWith('/')||url.startsWith('//'))continue;links++;
  if(basePath&&url!==basePath&&!url.startsWith(basePath+'/'))failures.push('Unprefixed internal URL: '+url);
  const clean=unprefix(url.split(/[?#]/)[0]);const target=path.join(root,decodeURIComponent(clean));
  if(!fs.existsSync(target)&&!fs.existsSync(path.join(target,'index.html')))failures.push(`Broken link ${route} -> ${url}`);
 }
 for(const match of html.matchAll(/<img\b[^>]*>/g)){
  images++;if(!/\balt="[^\"]+"/.test(match[0]))failures.push('Missing image alt: '+route);
  const src=match[0].match(/\bsrc="([^\"]+)"/)?.[1];
  if(src?.startsWith('/')&&!fs.existsSync(path.join(root,unprefix(src))))failures.push('Missing asset: '+src);
 }
 for(const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)){try{JSON.parse(match[1])}catch{failures.push('Invalid JSON-LD: '+route)}}
 if(route.startsWith('books/')&&!html.includes('Purchase links coming soon'))failures.push('Missing purchase availability: '+route);
}
for(const f of ['sitemap.xml','robots.txt','404.html'])if(!fs.existsSync(path.join(root,f)))failures.push('Missing '+f);
if(fs.existsSync(path.join(root,'journal/unpublished/index.html')))failures.push('Placeholder article route exported');
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log(`PASS: ${routes.length} routes, ${links} internal links, ${images} image placements, metadata, JSON-LD and purchase states. No fabricated journal routes.`);
