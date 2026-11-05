import {articles} from '@/data/journal';
import {notFound} from 'next/navigation';
export const dynamicParams=false;
export function generateStaticParams(){return articles.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=articles.find(a=>a.slug===slug);return {title:a?.title||'Article not found',description:a?.excerpt,alternates:{canonical:'/journal/'+slug+'/'}}}
export default async function Article({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=articles.find(a=>a.slug===slug);if(!a)notFound();return <article className="legal"><p className="eyebrow">{a.category} / <time dateTime={a.date}>{a.date}</time></p><h1>{a.title}</h1><p>{a.excerpt}</p>{a.paragraphs.map((p,i)=><p key={i}>{p}</p>)}</article>}
