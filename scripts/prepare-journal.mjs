import fs from 'node:fs';
import path from 'node:path';
const entries=JSON.parse(fs.readFileSync('src/data/articles.json','utf8'));
const seen=new Set();
for(const a of entries){
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.slug)||seen.has(a.slug)||!a.title||!/^\d{4}-\d{2}-\d{2}$/.test(a.date)||!a.category||!a.excerpt||!Array.isArray(a.paragraphs)||!a.paragraphs.length)throw Error('Invalid or duplicate journal entry');
 seen.add(a.slug);
}
const destination=path.resolve('src/app/journal/[slug]/page.tsx');
if(entries.length){fs.mkdirSync(path.dirname(destination),{recursive:true});fs.copyFileSync('templates/journal-article.tsx',destination)}else if(fs.existsSync(destination)){fs.unlinkSync(destination)}
console.log(`Journal: ${entries.length} approved articles; ${entries.length?'article routes enabled':'no article routes published'}.`);
