const videos = [
 {id:'g-_M-6UHU90',kind:'Book trailer',title:'White Elephant Gypsies',slug:'white-elephant-gypsies',start:13},
 {id:'U4ioXk9L9fI',kind:'Book trailer',title:'The Curse of Tecumseh',slug:'the-curse-of-tecumseh'},
 {id:'znGajKxXGW0',kind:'Author interview',title:'Unsung Heroes of Vietnam',slug:'interview'},
];

export function Videos({selection}:{selection?:string}){
 const selected=selection?videos.filter(video=>video.slug===selection):videos;
 if(!selected.length)return null;
 return <section className="section video-section" aria-labelledby="videos-heading">
  <div className="section-heading"><span className="eyebrow">WATCH / RYAN L. ROBINSON</span><h2 id="videos-heading">{selection==='interview'?<>Meet the voice<br/><i>behind the stories.</i></>:selection?<>A glimpse<br/><i>into the story.</i></>:<>Stories on screen.<br/><i>The author in conversation.</i></>}</h2></div>
  <div className={'video-grid'+(selection?' video-grid-single':'')}>{selected.map(video=><article className="video-card" key={video.id}>
   <div className="video-player"><iframe src={'https://www.youtube-nocookie.com/embed/'+video.id+(video.start?'?start='+video.start:'')} title={video.kind+': '+video.title+' — Ryan L. Robinson'} loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/></div>
   <div className="video-caption"><span className="eyebrow">{video.kind}</span><h3>{video.title}</h3><a className="text-link" href={'https://www.youtube.com/watch?v='+video.id+(video.start?'&t='+video.start+'s':'')} target="_blank" rel="noopener noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a></div>
  </article>)}</div>
 </section>;
}
