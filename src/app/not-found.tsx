import Link from 'next/link';
export default function NotFound(){return <section className="not-found"><span className="eyebrow">404 / AN UNWRITTEN PAGE</span><h1>A different<br/><i>turn of the page.</i></h1><p>The page you’re looking for isn’t here. There are other worlds to explore.</p><Link className="button" href="/books">Return to the collection <span>↗</span></Link></section>}
