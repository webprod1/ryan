'use client';
import {useState} from 'react';

export default function ContactForm(){
 const [status,setStatus]=useState('');
 const email=process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
 return <form className="contact-panel" onSubmit={e=>{
  e.preventDefault();
  if(!email)return;
  const data=new FormData(e.currentTarget);
  const body=`Name: ${data.get('name')}\nReply to: ${data.get('email')}\n\n${data.get('message')}`;
  window.location.href=`mailto:${email}?subject=${encodeURIComponent('Reader enquiry: '+data.get('subject'))}&body=${encodeURIComponent(body)}`;
  setStatus('Your email app has been requested. Review and send your message there. No message has been sent by this website.');
 }}>
  <span className="eyebrow">A NOTE TO THE AUTHOR</span>
  <h2 style={{marginTop:25}}>Let’s keep<br/><i>in touch.</i></h2>
  {!email&&<p className="status" id="contact-availability">Contact by email will be available soon. This form will open once the author’s email address is confirmed.</p>}
  <fieldset disabled={!email} aria-describedby={!email?'contact-availability':undefined} style={{border:0,padding:0,margin:0,minWidth:0}}>
   <label htmlFor="name">YOUR NAME</label><input id="name" name="name" autoComplete="name" required maxLength={150}/>
   <label htmlFor="email">EMAIL ADDRESS</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254}/>
   <label htmlFor="subject">SUBJECT</label><input id="subject" name="subject" required maxLength={200}/>
   <label htmlFor="message">YOUR MESSAGE</label><textarea id="message" name="message" required maxLength={4000}/>
   {email&&<p>This opens your email app. You can review your note before sending.</p>}
   <button className={email?'button':'button unavailable'} type="submit">{email?<>Compose email <span>↗</span></>:'Contact coming soon'}</button>
  </fieldset>
  {!email&&<p>Message sending is not enabled yet.</p>}
  <p role="status">{status}</p>
 </form>;
}
