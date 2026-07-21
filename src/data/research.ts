export type ResearchTheme = {
  slug: string;
  title: string;
  summary: string;
  questions: string[];
};

export const researchThemes: ResearchTheme[] = [
  {
    slug: 'algorithms-complexity',
    title: 'Algorithms and complexity',
    summary:
      'Design and analysis of provably efficient algorithms, with attention to the structural boundary between tractable and intractable problems.',
    questions: [
      'Which structural restrictions turn an intractable problem into a tractable one?',
      'When can enumeration be performed with polynomial delay or incremental efficiency?',
      'Which lower bounds explain the limit of an algorithmic approach?',
      'How should theoretical guarantees guide practical implementation?'
    ]
  },
  {
    slug: 'optimization-uncertainty',
    title: 'Optimization under uncertainty',
    summary:
      'Continuous, discrete, and robust optimization for problems whose data, constraints, or objectives cannot be treated as perfectly known.',
    questions: [
      'Which convex or discrete structure supports algorithms at large scale?',
      'How should uncertainty sets preserve both robustness and computational efficiency?',
      'When do relaxations and rounding retain meaningful guarantees?',
      'What can approximation schemes deliver that general-purpose solvers cannot?'
    ]
  },
  {
    slug: 'games-mechanisms',
    title: 'Games, incentives, and multi-agent decisions',
    summary:
      'Algorithmic study of strategic systems: mechanisms, pricing, stochastic games, and decisions shaped by the behaviour of other agents.',
    questions: [
      'Which equilibria or strategies can be computed efficiently?',
      'How do limited information and uncertainty change strategic guarantees?',
      'Can approximation algorithms support truthful or stable mechanisms?',
      'Where do individual incentives undermine system-level performance?'
    ]
  },
  {
    slug: 'theory-systems',
    title: 'Theory for high-impact systems',
    summary:
      'Mathematical methods for power, logistics, machine learning, and autonomous systems where scale and uncertainty make naive optimization unreliable.',
    questions: [
      'Which domain constraints reveal a new general optimization problem?',
      'How can power-system or logistics models retain physical meaning after relaxation?',
      'What guarantees remain useful when an algorithm meets noisy real-world data?',
      'How should theory, implementation, and empirical evaluation inform one another?'
    ]
  }
];
