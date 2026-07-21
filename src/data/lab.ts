export type LabTheme = 'signal' | 'cobalt' | 'amber' | 'violet' | 'coral';

export type LabLink = {
  label: string;
  href: string;
};

export type TraceStage = {
  label: string;
  title: string;
  detail: string;
};

export const templateVersion = '1.0.0';

export const lab = {
  slug: 'theory',
  name: 'Theory Lab',
  shortName: 'Theory Lab',
  canonicalUrl: 'https://reqs-theory-lab.vercel.app',
  reqsUrl: 'https://reqs.org',
  repositoryUrl: 'https://github.com/dsvt/reqs-theory-lab',
  theme: 'amber' as LabTheme,
  status: 'forming',
  eyebrow: 'A member lab of REQS Labs',
  statement: 'Algorithms with guarantees for decisions at scale.',
  description:
    'Theory Lab studies the mathematical foundations of efficient decision-making: algorithms, optimization, complexity, and strategic interaction under uncertainty.',
  location: 'Abu Dhabi · Distributed',
  trace: {
    eyebrow: 'Proof trace',
    question: 'What structure makes a difficult decision problem tractable?',
    stages: [
      { label: '01 · Model', title: 'Expose the assumptions', detail: 'Variables, objectives, constraints, uncertainty' },
      { label: '02 · Structure', title: 'Find what can be exploited', detail: 'Convexity, discreteness, sparsity, incentives' },
      { label: '03 · Algorithm', title: 'Turn structure into a method', detail: 'Exact, approximation, online, or robust' },
      { label: '04 · Guarantee', title: 'State what is proved', detail: 'Correctness, quality, complexity, and limits' }
    ] as TraceStage[],
    result: 'A result whose assumptions, bound, algorithm, and limits can be inspected.',
    note: 'Counterexamples and observed limits revise the next model.'
  },
  lead: {
    name: 'Khaled Elbassioni',
    role: 'Lab lead · Professor of Computer Science',
    affiliation: 'Khalifa University',
    profileUrl: 'https://www.ku.ac.ae/college-people/khaled-elbassioni'
  },
  about: [
    'Theory Lab develops algorithms with explicit guarantees for large, discrete, uncertain, and strategic decision problems. Its centre of gravity is theoretical computer science: modelling assumptions precisely, identifying exploitable structure, proving what an algorithm can achieve, and naming where the guarantee stops.',
    'The programme connects continuous and combinatorial optimization with approximation algorithms, robust optimization, algorithmic game theory, and operations research. Applications provide hard questions and test the relevance of the theory; they do not replace the mathematical core.',
    'Within REQS Labs, Theory Lab contributes foundations for reliable decision systems in the agentic era. AI agents may support implementation, experimentation, and systematic comparison, while researchers remain responsible for the model, proof, interpretation, and published claim.',
    'Theory Lab is a member-led virtual research group within REQS Labs. It is not a separately incorporated institute or an employer; members retain their independent institutional affiliations.'
  ],
  work: {
    eyebrow: 'Selected foundations by the lab lead',
    headline: 'Theory measured by the guarantees it makes possible.',
    description:
      'These publications illustrate the research foundations for Theory Lab. They are credited to their original authors and are not presented as outputs produced by the lab.'
  },
  links: [
    { label: 'Khalifa University profile', href: 'https://www.ku.ac.ae/college-people/khaled-elbassioni' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=LxBbwWsAAAAJ&hl=en' },
    { label: 'ORCID', href: 'https://orcid.org/0000-0001-7021-5400' }
  ] as LabLink[]
};

export const principles = [
  {
    number: '01',
    title: 'Make assumptions visible',
    text: 'Every theorem, model, and experiment states the conditions under which its conclusion can be trusted.'
  },
  {
    number: '02',
    title: 'Prove the useful part',
    text: 'Correctness, running time, solution quality, and robustness are made explicit rather than implied.'
  },
  {
    number: '03',
    title: 'Let applications sharpen theory',
    text: 'Power, logistics, learning, and autonomous systems supply constraints that reveal where new mathematics is needed.'
  },
  {
    number: '04',
    title: 'Publish limits with results',
    text: 'Hardness, counterexamples, failed assumptions, and negative results are part of the scientific record.'
  }
];
