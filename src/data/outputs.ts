export type Output = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string;
  type: 'Paper' | 'Software' | 'Dataset' | 'Protocol';
};

// Selected publications by the lab lead and coauthors. They predate Theory Lab
// or were produced independently, so they are not described as lab outputs.
export const outputs: Output[] = [
  {
    title: 'Dual bounded generation: Polynomial, second-order cone and positive semidefinite matrix inequalities',
    authors: 'Khaled Elbassioni',
    venue: 'Discrete Applied Mathematics',
    year: 2025,
    url: 'https://doi.org/10.1016/j.dam.2024.12.020',
    type: 'Paper'
  },
  {
    title: 'Heuristic (S, T) Solutions via an FPTAS for a One-Warehouse Multiretailer Problem',
    authors: 'Waleed Najy, Ali Diabat, Khaled Elbassioni',
    venue: 'Operations Research',
    year: 2025,
    url: 'https://doi.org/10.1287/opre.2024.1177',
    type: 'Paper'
  },
  {
    title: 'Anti Tai mapping for unordered labeled trees',
    authors: 'Mislav Blažević, Stefan Canzar, Khaled Elbassioni, Domagoj Matijević',
    venue: 'Information Processing Letters',
    year: 2024,
    url: 'https://doi.org/10.1016/j.ipl.2023.106454',
    type: 'Paper'
  },
  {
    title: 'Approximations for generalized unsplittable flow on paths with application to power systems optimization',
    authors: 'Areg Karapetyan, Khaled Elbassioni, Majid Khonji, Sid Chi-Kin Chau',
    venue: 'Annals of Operations Research',
    year: 2023,
    url: 'https://doi.org/10.1007/s10479-022-05054-y',
    type: 'Paper'
  },
  {
    title: 'Approximation Algorithms for Cost-Robust Discrete Minimization Problems Based on Their LP-Relaxations',
    authors: 'Khaled Elbassioni',
    venue: 'LATIN 2020: Theoretical Informatics',
    year: 2021,
    url: 'https://doi.org/10.1007/978-3-030-61792-9_3',
    type: 'Paper'
  },
  {
    title: 'Towards More Practical Linear Programming-based Techniques for Algorithmic Mechanism Design',
    authors: 'Khaled Elbassioni, Kurt Mehlhorn, Fahimeh Ramezani',
    venue: 'Theory of Computing Systems',
    year: 2016,
    url: 'https://doi.org/10.1007/s00224-016-9704-2',
    type: 'Paper'
  }
];
