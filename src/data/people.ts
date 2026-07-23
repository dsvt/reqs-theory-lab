import type { ImageMetadata } from 'astro';
import khaledPortrait from '../assets/khaled-elbassioni.jpg';

export type Person = {
  name: string;
  role: string;
  affiliation?: string;
  bio: string;
  url?: string;
  image?: ImageMetadata;
  imageAlt?: string;
};

export const people: Person[] = [
  {
    name: 'Khaled Elbassioni',
    role: 'Lab lead',
    affiliation: 'Department of Computer Science, Khalifa University, Abu Dhabi, UAE',
    bio: 'Khaled Elbassioni studies the design and analysis of algorithms, with a focus on efficient methods for large-scale continuous and combinatorial optimization. His research spans approximation algorithms, robust optimization, algorithmic game theory, operations research, and applications including power systems and machine learning.',
    url: 'https://www.ku.ac.ae/college-people/khaled-elbassioni',
    image: khaledPortrait,
    imageAlt: 'Portrait of Khaled Elbassioni'
  }
];
