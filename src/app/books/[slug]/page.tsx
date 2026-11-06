import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {books,origin} from '@/data/books';
import {literaryWorlds} from '@/data/worlds';
import {Purchase} from '@/components/Books';
export function generateStaticParams(){return books.map(b=>({slug:b.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const b=books.find(b=>b.slug===slug);return {title:b?.title||'Book not found',description:b?.description,alternates:{canonical:'/books/'+slug+'/'},openGraph:{title:b?.title,description:b?.description,images:b?[{url:b.cover,alt:b.title+' cover'}]:[]}}}
export default async function Book({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const b=books.find(b=>b.slug===slug);if(!b)notFound();const world=literaryWorlds[slug];
 return <div className="book-world" data-world={world.theme}>
  <section className="book-world-hero">
   <div className="world-ambient" aria-hidden="true"/>
   <div className="world-breadcrumb"><Link href="/books">THE COLLECTION</Link><span> / {b.title.toUpperCase()}</span></div>
   <div className="world-hero-copy"><span className="eyebrow">WORLD {world.number} / {b.category}</span><h1>{b.title}</h1>{b.subtitle&&<p className="book-subtitle"><i>{b.subtitle}</i></p>}<p className="byline">By Ryan L. Robinson</p><p className="world-description">{b.description}</p><a className="text-link" href="#story">Discover the story <span>↓</span></a></div>
   <div className="world-cover" data-clip><span className="world-folio" aria-hidden="true">{world.number}</span><Image src={b.cover} alt={b.title+' original book cover'} width={600} height={900} priority sizes="(max-width:700px) 66vw, 30vw"/><span className="world-cover-label">{world.label}</span></div>
   <div className="world-bottom"><span className="eyebrow">BEYOND THE WRITTEN WORLD</span><span className="eyebrow">RYAN L. ROBINSON / {world.number}</span></div>
  </section>
  <article id="story" className="book-story"><div><span className="eyebrow">INSIDE THE STORY</span><h2>Read beyond<br/><i>the cover.</i></h2><p className="synopsis">{b.synopsis}</p><dl className="book-facts"><div><dt>Author</dt><dd>Ryan L. Robinson</dd></div><div><dt>Shelf</dt><dd>{b.category}</dd></div><div><dt>Editions & publication details</dt><dd>To be confirmed</dd></div></dl></div><Purchase slug={b.slug}/></article>
  <section className="section related"><span className="eyebrow">KEEP EXPLORING</span><h2 style={{marginTop:20}}>Another world <i>awaits.</i></h2><div className="related-links">{books.filter(x=>x.slug!==slug).map(r=><Link key={r.slug} href={'/books/'+r.slug}><span><small>WORLD {literaryWorlds[r.slug].number}</small>{r.title}</span><span>↗</span></Link>)}</div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Book',name:b.title,author:{'@type':'Person',name:'Ryan L. Robinson'},description:b.description,image:origin+b.cover,url:origin+'/books/'+b.slug+'/',genre:b.category,inLanguage:'en'})}}/>
 </div>
}
