import Image from 'next/image';
import Link from 'next/link';
import {assetPath} from '@/data/paths';

const press=[
 {slug:'the-curse-of-tecumseh',title:'The Curse of Tecumseh',reviewer:'Mari Carlson',quote:'Wordplay delights, while the surprise endings sustain interest.'},
 {slug:'sorrows-edge',title:'Sorrows’ Edge',reviewer:'Kat Kennedy',quote:'Robinson has a knack for storytelling and world-building.'},
];
const posters=[
 {slug:'melvin-entwistle',title:'The Adventures of Melvin Entwistle',image:'melvin-entwistle-poster.jpg',width:526,height:526},
 {slug:'white-elephant-gypsies',title:'White Elephant Gypsies',image:'white-elephant-gypsies-poster.jpg',width:1247,height:1261},
 {slug:'the-curse-of-tecumseh',title:'The Curse of Tecumseh',image:'tecumseh-poster.jpg',width:1254,height:1254},
];

export function PressReviews({slug}:{slug?:string}){
 const items=press.filter(item=>!slug||item.slug===slug);if(!items.length)return null;
 return <section className="section press-section" aria-labelledby="press-heading"><span className="eyebrow">THE US REVIEW OF BOOKS</span><h2 id="press-heading">A closer look.<br/><i>Independent reviews.</i></h2><div className="press-grid">{items.map(item=><figure key={item.slug}><span className="eyebrow">BOOK REVIEW / {item.title}</span><blockquote>“{item.quote}”</blockquote><figcaption>{item.reviewer}<small>The US Review of Books</small></figcaption><a className="text-link" href={assetPath('/reviews/'+item.slug+'-us-review.pdf')} target="_blank" rel="noopener noreferrer">Read the full review (PDF) <span>↗</span></a></figure>)}</div></section>;
}

export function BookPosters({slug}:{slug?:string}){
 const items=posters.filter(item=>!slug||item.slug===slug);if(!items.length)return null;
 return <section className="section poster-section" aria-labelledby="posters-heading"><span className="eyebrow">FROM THE COLLECTION</span><h2 id="posters-heading">An invitation<br/><i>to another world.</i></h2><div className={'poster-grid'+(slug?' poster-single':'')}>{items.map(item=><figure key={item.slug}><div className={'poster-art poster-'+item.slug}><Image src={assetPath('/images/'+item.image)} alt={item.title+' promotional artwork'} width={item.width} height={item.height} sizes={slug?'(max-width:700px) 88vw, 700px':'(max-width:900px) 88vw, 30vw'}/>{item.slug==='melvin-entwistle'&&<Link className="poster-qr-cover" href={'/books/'+item.slug}>Explore<br/>the book <span>↗</span></Link>}</div><figcaption><h3>{item.title}</h3><Link className="text-link" href={'/books/'+item.slug}>Discover the story <span>↗</span></Link></figcaption></figure>)}</div></section>;
}
