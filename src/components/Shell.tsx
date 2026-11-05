'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useRef,useState} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const links=[['Books','/books'],['The Author','/about'],['Reviews','/reviews'],['Journal','/journal'],['Contact','/contact']];

export function Header(){
 const path=usePathname();
 const [open,setOpen]=useState(false);
 const [scrolled,setScrolled]=useState(false);
 const button=useRef<HTMLButtonElement>(null);
 const nav=useRef<HTMLElement>(null);
 useEffect(()=>{setOpen(false)},[path]);
 useEffect(()=>{
  const scroll=()=>setScrolled(window.scrollY>24);
  scroll();window.addEventListener('scroll',scroll,{passive:true});
  return()=>window.removeEventListener('scroll',scroll);
 },[]);
 useEffect(()=>{
  if(!open||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const ctx=gsap.context(()=>gsap.fromTo('a',{y:16,opacity:0},{y:0,opacity:1,stagger:.045,duration:.35,ease:'power2.out'}),nav);
  return()=>ctx.revert();
 },[open]);
 return <>
  <a className="skip" href="#main">Skip to content</a>
  <header className={scrolled?'masthead scrolled':'masthead'} onKeyDown={e=>{if(e.key==='Escape'&&open){setOpen(false);button.current?.focus()}}}>
   <Link className="wordmark" href="/" aria-label="Ryan L. Robinson home"><span className="monogram" aria-hidden="true">R<span>R</span></span><span className="wordmark-name">RYAN L. ROBINSON<span>AUTHOR & STORYTELLER</span></span></Link>
   <button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} <span aria-hidden="true">{open?'−':'+'}</span></button>
   <nav ref={nav} id="primary-nav" className={open?'open':''} aria-label="Primary">
    {links.map(([label,url],i)=><Link key={url} href={url} aria-current={path.startsWith(url)?'page':undefined}><span className="nav-index" aria-hidden="true">0{i+1}</span><span>{label}</span></Link>)}
    <Link className="nav-collection" href="/books">The collection <span aria-hidden="true">↗</span></Link>
   </nav>
  </header>
 </>;
}

export function Motion({children}:{children:React.ReactNode}){
 const ref=useRef<HTMLDivElement>(null);
 const path=usePathname();
 useEffect(()=>{
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   const ctx=gsap.context(()=>{
    const scope=ref.current;
    if(scope?.querySelector('.hero')){
     gsap.timeline({defaults:{ease:'power3.out'}})
      .fromTo('.hero-line > span',{yPercent:105},{yPercent:0,duration:1.15,stagger:.13},.05)
      .fromTo('.hero-plate',{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0% 0 0% 0)',duration:1.25},.2)
      .fromTo('.hero-detail',{opacity:0},{opacity:1,duration:.65,stagger:.07},.5);
    } else {
     const heading=scope?.querySelector('.page-intro h1, .book-detail h1, .legal h1');
     if(heading)gsap.fromTo(heading,{clipPath:'inset(0 0 100% 0)',y:12},{clipPath:'inset(0% 0 0% 0)',y:0,duration:.75,ease:'power2.out'});
    }
    // Images open like pages. Body text stays readable without repeated fade-up effects.
    gsap.utils.toArray<HTMLElement>('[data-clip], .bio-portrait, .detail-cover').forEach(el=>{
     gsap.fromTo(el,{clipPath:'inset(0 0 12% 0)'},{clipPath:'inset(0% 0 0% 0)',duration:1.2,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}});
    });
    gsap.utils.toArray<HTMLElement>('.section-heading h2, .about-copy h2, .closing h2').forEach(el=>{
     gsap.fromTo(el,{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.05,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}});
    });
    if(window.innerWidth>=900){
     gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach(el=>gsap.fromTo(el,{y:12},{y:-16,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1}}));
    }
    const rule=scope?.querySelector('.world-rule');
    if(rule)gsap.fromTo(rule,{scaleY:0},{scaleY:1,ease:'none',scrollTrigger:{trigger:'.worlds',start:'top 65%',end:'bottom 65%',scrub:.6}});
   },ref);
   return()=>ctx.revert();
  });
  return()=>mm.revert();
 },[path]);
 return <div ref={ref} data-page={path.split('/').filter(Boolean).join('-')||'home'}>{children}</div>;
}

export function Footer(){return <footer>
 <div className="footer-top">
  <Link href="/" className="footer-name">Ryan L.<br/><i>Robinson.</i></Link>
  <div><p className="eyebrow">A WORLD BETWEEN THE COVERS</p><p>History remembered.<br/>Possibilities imagined.</p><Link className="text-link light" href="/books">Find your next story <span>↗</span></Link></div>
 </div>
 <div className="footer-bottom"><span>© {new Date().getFullYear()} Ryan L. Robinson</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Get in touch ↗</Link></div><span>BEYOND THE WRITTEN WORLD</span></div>
 </footer>}
