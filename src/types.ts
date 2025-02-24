export interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
  role: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  benefits: string[];
  icon: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}