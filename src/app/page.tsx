import {Videos} from '@/components/Videos';
import Image from 'next/image';
import {assetPath} from '@/data/paths';
import Link from 'next/link';
import {BookCard} from '@/components/Books';
import {books,reviews,origin} from '@/data/books';
export const metadata={alternates:{canonical:'/'}};
export default function Home(){return <>
 <section className="hero author-name-hero"><Image className="hero-landscape" data-parallax src={assetPath('/images/landscape.jpg')} fill priority sizes="100vw" alt="A still lake reflecting mountains beneath a wide evening sky"/><div className="hero-shade"/><div className="hero-intro hero-detail"><span className="eyebrow">FICTION. HISTORY. THE POSSIBLE.</span><span className="hero-edition">THE COLLECTED WORLDS OF</span></div><h1><span className="hero-line"><span>Ryan L.</span></span><span className="hero-line second"><span><i>Robinson.</i></span></span></h1><div className="hero-bottom hero-detail"><div><p>Beyond the<br/><em>written world.</em></p><span>Stories that look closer.<br/>And venture further.</span></div><div className="hero-actions"><Link className="button ivory" href="/books">Explore the books <span>↗</span></Link><Link className="quiet-link" href="/about">Discover the author <span>↗</span></Link></div><a className="scroll-note" href="#author-introduction">SCROLL TO DISCOVER <span>↓</span></a></div><span className="hero-side">IMAGINATION WITHOUT BOUNDARIES</span></section>
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
 <Videos/>
 <section className="reader-section section"><div className="section-heading"><span className="eyebrow">04 / READERS’ VOICES</span><h2>Words that<br/><i>stay with you.</i></h2><Link className="text-link" href="/reviews">See all reviews <span>↗</span></Link></div><div className="review-previews">{reviews.map(r=><figure key={r.name}><span className="quote-mark">“</span><blockquote>{r.quote}</blockquote><figcaption><span>{r.name}</span><small>{r.credit}</small></figcaption></figure>)}</div></section>
 <section className="home-journal section"><div><span className="eyebrow">JOURNAL / NEWS</span><h2>Between<br/><i>the lines.</i></h2></div><div><p>No journal entries have been published here yet. Future author updates and book announcements will appear in this space.</p><Link className="text-link" href="/journal">Visit the journal <span>↗</span></Link></div></section>
 <section className="closing"><span className="eyebrow">TURN THE PAGE</span><h2>The familiar ends.<br/><i>The story begins.</i></h2><Link className="button" href="/books">Enter the collection <span>↗</span></Link></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Person',name:'Ryan L. Robinson',url:origin,image:origin+'/images/ryan-robinson.jpg',jobTitle:'Author'})}}/>
 </>}
