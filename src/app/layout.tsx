import type {Metadata,Viewport} from 'next';
import {Header,Footer,Motion} from '@/components/Shell';
import {origin} from '@/data/books';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(origin),title:{default:'Ryan L. Robinson — Beyond the Written World',template:'%s | Ryan L. Robinson'},description:'Explore the books of Ryan L. Robinson. Fiction, science fiction, history and nonfiction, connected by a restless curiosity.',openGraph:{type:'website',siteName:'Ryan L. Robinson',images:[{url:'/images/landscape.jpg',width:2400,height:1600,alt:'A quiet mountain landscape'}]},twitter:{card:'summary_large_image'}};
export const viewport:Viewport={themeColor:'#101C2B'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><Motion><main id="main" tabIndex={-1}>{children}</main></Motion><Footer/></body></html>}
