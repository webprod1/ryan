import Image from 'next/image';
import {assetPath} from '@/data/paths';
import Link from 'next/link';
import {BookCard} from '@/components/Books';
import {books,reviews,origin} from '@/data/books';
export const metadata={alternates:{canonical:'/'}};
export default function Home(){return <>
 <section className="multiverse-hero">
  <div className="hero-atmosphere"><Image src={assetPath('/images/landscape.jpg')} fill priority sizes="100vw" alt="A still lake reflecting mountains beneath a wide evening sky"/></div>
  <div className="opening-meta"><span className="eyebrow">FICTION. HISTORY. THE POSSIBLE.</span><span className="eyebrow">THE COLLECTED WORLDS OF</span></div>
  <div className="opening-copy">
   <p className="hero-author">Ryan L. Robinson.</p>
   <h1 aria-label="Beyond the written world."><span className="hero-line" aria-hidden="true"><span>Beyond the</span></span><span className="hero-line" aria-hidden="true"><span><i>written</i></span></span><span className="hero-line" aria-hidden="true"><span>world.</span></span></h1>
   <p className="opening-label">The Literary Worlds of Ryan L. Robinson</p>
   <p className="opening-note">Stories that look closer.<br/>And venture further.</p>
   <div className="opening-actions"><Link className="button" href="/books">Explore the books <span>↗</span></Link><Link className="text-link" href="/about">Discover the author <span>↗</span></Link></div>
  </div>
  <Link className="hero-volume" href="/books/white-elephant-gypsies/" aria-label="Explore White Elephant Gypsies">
   <span className="volume-meta">WORLD 01 / MEMOIR & MILITARY HISTORY</span>
   <div className="volume-art" data-float><Image src={assetPath(books[0].cover)} alt="White Elephant Gypsies authentic book cover" width={450} height={680} priority sizes="(max-width:700px) 60vw, 28vw"/></div>
   <span className="volume-caption"><span>White Elephant Gypsies</span><span>Enter this world ↗</span></span>
  </Link>
  <div className="opening-bottom"><a href="#author-introduction" className="scroll-note">SCROLL TO DISCOVER <span>↓</span></a><span className="eyebrow">IMAGINATION WITHOUT BOUNDARIES</span></div>
 </section>
 <section id="author-introduction" className="about-feature">
  <div className="portrait-wrap" data-clip><Image src={assetPath('/images/ryan-robinson.jpg')} alt="Ryan L. Robinson, author" width={900} height={1100} sizes="(max-width:700px) 90vw, 38vw"/><span className="image-caption">RYAN L. ROBINSON / THE AUTHOR</span></div>
  <div className="about-copy"><span className="eyebrow">02 / BEHIND THE WORDS</span><h2>A life of precision.<br/><i>A mind of<br/>possibility.</i></h2><p>Electronics. Computer science. A lifetime of asking how things work. For Ryan L. Robinson, curiosity has always been a way of seeing.</p><p>Today, that same instinct finds its home in stories—shaped by a love of history, science and what makes people tick.</p><Link className="text-link" href="/about">Meet the author <span>↗</span></Link></div>
 </section>
 <section id="selected" className="section selected">
  <div className="section-heading"><span className="eyebrow">01 / SELECTED WORKS</span><h2>Different worlds.<br/><i>One curious mind.</i></h2><div><p>From an overlooked chapter of military history to the uncharted reaches of tomorrow.</p><Link className="text-link" href="/books">View the full collection <span>↗</span></Link></div></div>
  <p className="collection-label">Explore the worlds</p>
  <div className="featured-grid">{[books[0],books[3],books[1]].map(b=><BookCard key={b.slug} book={b} index={books.indexOf(b)}/>)}</div>
  <div className="collection-strip">{books.slice(2).map((b,i)=><Link key={b.slug} href={'/books/'+b.slug}><span className="eyebrow">0{i+3}</span><span>{b.title}</span><span>↗</span></Link>)}</div>
 </section>
 <section className="worlds section"><div><span className="eyebrow">03 / A WORLD OF STORIES</span><h2>Where will<br/>a story <i>take you?</i></h2></div><div className="world-list">{[['01','Into the remembered','Memoir & military history','white-elephant-gypsies'],['02','Beyond the familiar','Science fiction','melvin-entwistle'],['03','Across time & possibility','Short stories','the-curse-of-tecumseh'],['04','Inside the argument','Political nonfiction','curing-marxism']].map(([n,title,cat,slug])=><Link key={n} href={'/books/'+slug}><span>{n}</span><div><h3>{title}</h3><p className="eyebrow">{cat}</p></div><span>↗</span></Link>)}</div></section>
 <section className="author-lens section"><span className="eyebrow">ONE AUTHOR. MANY WORLDS.</span><h2>History. Science.<br/><i>Human nature.</i></h2><p>A love of history, science and what makes people tick. The starting point for a lifetime of stories.</p></section>
 <section className="reader-section section"><div className="section-heading"><span className="eyebrow">04 / READERS’ VOICES</span><h2>Words that<br/><i>stay with you.</i></h2><Link className="text-link" href="/reviews">See all reviews <span>↗</span></Link></div><div className="review-previews">{reviews.map(r=><figure key={r.name}><span className="quote-mark">“</span><blockquote>{r.quote}</blockquote><figcaption><span>{r.name}</span><small>{r.credit}</small></figcaption></figure>)}</div></section>
 <section className="home-journal section"><div><span className="eyebrow">JOURNAL / NEWS</span><h2>Between<br/><i>the lines.</i></h2></div><div><p>No journal entries have been published here yet. Future author updates and book announcements will appear in this space.</p><Link className="text-link" href="/journal">Visit the journal <span>↗</span></Link></div></section>
 <section className="closing"><span className="eyebrow">TURN THE PAGE</span><h2>The familiar ends.<br/><i>The story begins.</i></h2><Link className="button" href="/books">Enter the collection <span>↗</span></Link></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Person',name:'Ryan L. Robinson',url:origin,image:origin+'/images/ryan-robinson.jpg',jobTitle:'Author'})}}/>
 </>}
