// Add approved, authentic articles only. Drafts remain outside this array.
export type Article={slug:string;title:string;date:string;category:string;excerpt:string;paragraphs:string[]};
import entries from './articles.json';
export const articles:Article[]=entries;
