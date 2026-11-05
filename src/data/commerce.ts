// Add only owner-supplied or independently verified official purchase URLs.
// A null format list means availability has not been confirmed; it does not mean out of print.
export type PurchaseFormat={label:string;isbn?:string;price?:number;currency?:string;ingramPurchaseUrl?:string;retailerPurchaseUrls?:{name:string;url:string}[]};
export type Commerce={availability:'awaiting-verification'|'available';formats:PurchaseFormat[]};
export const commerce:Record<string,Commerce>={
 'white-elephant-gypsies':{availability:'awaiting-verification',formats:[]},
 'melvin-entwistle':{availability:'awaiting-verification',formats:[]},
 'the-curse-of-tecumseh':{availability:'awaiting-verification',formats:[]},
 'sorrows-edge':{availability:'awaiting-verification',formats:[]},
 'curing-marxism':{availability:'awaiting-verification',formats:[]}
};
export function safePurchaseUrl(url?:string){if(!url)return null;try{const u=new URL(url);return u.protocol==='https:'?u.href:null}catch{return null}}
