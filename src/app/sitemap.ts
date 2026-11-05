import {books,origin} from '@/data/books';
import {articles} from '@/data/journal';
export const dynamic='force-static';
export default function sitemap(){return ['','/about','/books','/reviews','/journal','/contact','/privacy','/terms',...books.map(b=>'/books/'+b.slug),...articles.map(a=>'/journal/'+a.slug)].map(p=>({url:origin+p+'/',changeFrequency:'monthly' as const,priority:p===''?1:.7}))}
