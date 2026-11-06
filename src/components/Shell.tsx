'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useRef,useState} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const links=[['Home','/'],['About the Author','/about'],['The Books','/books'],['Reviews','/reviews'],['Journal','/journal'],['Contact','/contact']];
export function Header(){const path=usePathname();const [open,setOpen]=useState(false);const [scrolled,setScrolled]=useState(false);const button=useRef<HTMLButtonElement>(null);useEffect(()=>{setOpen(false)},[path]);useEffect(()=>{const scroll=()=>setScrolled(window.scrollY>24);scroll();window.addEventListener('scroll',scroll,{passive:true});return()=>window.removeEventListener('scroll',scroll)},[]);return <><a className="skip" href="#main">Skip to content</a><header onKeyDown={e=>{if(e.key==='Escape'&&open){setOpen(false);button.current?.focus()}}} className={`${path==='/'?'home-header':''} ${scrolled?'scrolled':''}`}><Link className="wordmark" href="/" aria-label="Ryan L. Robinson home">RYAN L. ROBINSON<span>AUTHOR & STORYTELLER</span></Link><button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} <span>{open?'−':'+'}</span></button><nav id="primary-nav" className={open?'open':''} aria-label="Primary" onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);button.current?.focus()}}}>{links.map(([label,url])=><Link key={url} href={url} aria-current={(url==='/'?path==='/':path.startsWith(url))?'page':undefined}>{label}</Link>)}<Link className="nav-collection" href="/books">The collection <span>↗</span></Link></nav></header></>}
export function Motion({children}:{children:React.ReactNode}){
 const ref=useRef<HTMLDivElement>(null);const path=usePathname();
 useEffect(()=>{
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   const ctx=gsap.context(()=>{
    const scope=ref.current;
    if(scope?.querySelector('.author-name-hero')){
     gsap.timeline({defaults:{ease:'power3.out'}}).fromTo('.hero-line > span',{yPercent:110},{yPercent:0,duration:1.2,stagger:.15},.1).fromTo('.hero-detail',{opacity:0},{opacity:1,duration:.7},.6);
    }else if(scope?.querySelector('.multiverse-hero')){
     gsap.timeline({defaults:{ease:'power3.out'}})
      .fromTo('.hero-author',{opacity:0,y:10},{opacity:1,y:0,duration:.6},0)
      .fromTo('.hero-line > span',{yPercent:110},{yPercent:0,duration:1.1,stagger:.1},.15)
      .fromTo('.hero-volume',{opacity:0,clipPath:'inset(0 0 15% 0)'},{opacity:1,clipPath:'inset(0% 0 0% 0)',duration:1.2},.25)
      .fromTo('.opening-label,.opening-note,.opening-actions',{opacity:0},{opacity:1,duration:.6,stagger:.08},.6);
    }else{
     const heading=scope?.querySelector('.book-world h1, .page-intro h1, .legal h1');
     if(heading)gsap.fromTo(heading,{clipPath:'inset(0 0 100% 0)',y:10},{clipPath:'inset(0% 0 0% 0)',y:0,duration:.7,ease:'power2.out'});
    }
    gsap.utils.toArray<HTMLElement>('[data-clip],.bio-portrait,.featured-grid .cover-stage').forEach(el=>gsap.fromTo(el,{clipPath:'inset(0 0 10% 0)'},{clipPath:'inset(0% 0 0% 0)',duration:1.15,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
    gsap.utils.toArray<HTMLElement>('.section-heading h2,.about-copy h2,.author-lens h2').forEach(el=>gsap.fromTo(el,{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}}));
    gsap.utils.toArray<HTMLElement>('.world-list>a').forEach(el=>gsap.fromTo(el,{borderBottomColor:'transparent'},{borderBottomColor:'rgba(212,186,138,.4)',duration:.8,scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
    if(window.innerWidth>900){
     gsap.utils.toArray<HTMLElement>('[data-float], .world-cover>img').forEach(el=>gsap.fromTo(el,{y:10},{y:-14,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1}}));
     const stars=scope?.querySelector('[data-world="cosmos"] .world-ambient');
     if(stars)gsap.to(stars,{x:12,y:-10,duration:18,ease:'sine.inOut',repeat:-1,yoyo:true});
    }
   },ref);return()=>ctx.revert();
  });return()=>mm.revert();
 },[path]);
 return <div ref={ref} data-page={path.split('/').filter(Boolean).join('-')||'home'}>{children}</div>;
}
export function Footer(){return <footer><div className="footer-top"><Link href="/" className="footer-name">Ryan L.<br/><i>Robinson.</i></Link><div><p className="eyebrow">A WORLD BETWEEN THE COVERS</p><p>History remembered.<br/>Possibilities imagined.</p><Link className="text-link light" href="/books">Find your next story <span>↗</span></Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ryan L. Robinson</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Get in touch ↗</Link></div><span>BEYOND THE WRITTEN WORLD</span></div></footer>}
