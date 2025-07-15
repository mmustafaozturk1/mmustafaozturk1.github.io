export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  fullContent: string;
  powerBiUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  fullContent: string;
}

export enum ContentType {
    Blog = 'blog',
}