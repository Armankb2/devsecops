// Mock data for CollegeConnect platform
// This file contains sample data for years, companies, and placement questions

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'junior' | 'senior';
  year: number;
  avatar?: string;
  bio?: string;
  joinedDate: string;
}

export interface PlacementQuestion {
  id: string;
  question: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  addedBy: string;
  addedDate: string;
  views: number;
  likes: number;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  description: string;
  year: number;
  questionsCount: number;
  questions: PlacementQuestion[];
  addedBy: string;
  addedDate: string;
}

export interface Year {
  id: string;
  year: number;
  companies: Company[];
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Arjun Kumar',
    email: 'arjun@college.edu',
    role: 'junior',
    year: 2026,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    bio: 'Aspiring software engineer | Interested in web development',
    joinedDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    email: 'priya@college.edu',
    role: 'senior',
    year: 2024,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    bio: 'Placed at Google | Full Stack Developer',
    joinedDate: '2023-06-10',
  },
  {
    id: '3',
    name: 'Rahul Singh',
    email: 'rahul@college.edu',
    role: 'senior',
    year: 2024,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
    bio: 'Placed at Microsoft | Cloud Solutions',
    joinedDate: '2023-07-20',
  },
  {
    id: '4',
    name: 'Neha Gupta',
    email: 'neha@college.edu',
    role: 'junior',
    year: 2026,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
    bio: 'Data Science enthusiast | Machine Learning',
    joinedDate: '2024-02-01',
  },
];

// Mock Placement Questions
export const mockQuestions: PlacementQuestion[] = [
  {
    id: 'q1',
    question: 'Reverse a linked list',
    difficulty: 'medium',
    category: 'Data Structures',
    addedBy: 'Priya Sharma',
    addedDate: '2024-10-15',
    views: 342,
    likes: 45,
  },
  {
    id: 'q2',
    question: 'Two Sum Problem',
    difficulty: 'easy',
    category: 'Arrays',
    addedBy: 'Priya Sharma',
    addedDate: '2024-10-10',
    views: 567,
    likes: 89,
  },
  {
    id: 'q3',
    question: 'Design a URL Shortener',
    difficulty: 'hard',
    category: 'System Design',
    addedBy: 'Rahul Singh',
    addedDate: '2024-10-20',
    views: 234,
    likes: 32,
  },
  {
    id: 'q4',
    question: 'Longest Substring Without Repeating Characters',
    difficulty: 'medium',
    category: 'Strings',
    addedBy: 'Priya Sharma',
    addedDate: '2024-10-12',
    views: 456,
    likes: 67,
  },
  {
    id: 'q5',
    question: 'Merge K Sorted Lists',
    difficulty: 'hard',
    category: 'Data Structures',
    addedBy: 'Rahul Singh',
    addedDate: '2024-10-18',
    views: 289,
    likes: 41,
  },
  {
    id: 'q6',
    question: 'Binary Tree Level Order Traversal',
    difficulty: 'medium',
    category: 'Trees',
    addedBy: 'Priya Sharma',
    addedDate: '2024-10-14',
    views: 378,
    likes: 52,
  },
  {
    id: 'q7',
    question: 'Implement LRU Cache',
    difficulty: 'hard',
    category: 'Design',
    addedBy: 'Rahul Singh',
    addedDate: '2024-10-19',
    views: 245,
    likes: 38,
  },
  {
    id: 'q8',
    question: 'Valid Parentheses',
    difficulty: 'easy',
    category: 'Stacks',
    addedBy: 'Priya Sharma',
    addedDate: '2024-10-11',
    views: 612,
    likes: 102,
  },
];

// Mock Companies with Questions
export const mockCompanies: Company[] = [
  {
    id: 'c1',
    name: 'Google',
    description: 'Search and advertising technology company',
    year: 2024,
    questionsCount: 8,
    questions: mockQuestions.slice(0, 3),
    addedBy: 'Priya Sharma',
    addedDate: '2024-09-01',
  },
  {
    id: 'c2',
    name: 'Microsoft',
    description: 'Software and cloud computing leader',
    year: 2024,
    questionsCount: 5,
    questions: mockQuestions.slice(3, 5),
    addedBy: 'Rahul Singh',
    addedDate: '2024-09-05',
  },
  {
    id: 'c3',
    name: 'Amazon',
    description: 'E-commerce and cloud services provider',
    year: 2024,
    questionsCount: 7,
    questions: mockQuestions.slice(5, 7),
    addedBy: 'Priya Sharma',
    addedDate: '2024-09-10',
  },
  {
    id: 'c4',
    name: 'Meta',
    description: 'Social media and metaverse technology',
    year: 2024,
    questionsCount: 4,
    questions: [mockQuestions[7]],
    addedBy: 'Rahul Singh',
    addedDate: '2024-09-15',
  },
  {
    id: 'c5',
    name: 'Apple',
    description: 'Consumer electronics and software',
    year: 2025,
    questionsCount: 3,
    questions: mockQuestions.slice(0, 2),
    addedBy: 'Priya Sharma',
    addedDate: '2024-10-01',
  },
  {
    id: 'c6',
    name: 'Tesla',
    description: 'Electric vehicles and renewable energy',
    year: 2025,
    questionsCount: 2,
    questions: [mockQuestions[2]],
    addedBy: 'Rahul Singh',
    addedDate: '2024-10-05',
  },
];

// Mock Years with Companies
export const mockYears: Year[] = [
  {
    id: 'y1',
    year: 2024,
    companies: mockCompanies.filter((c) => c.year === 2024),
  },
  {
    id: 'y2',
    year: 2025,
    companies: mockCompanies.filter((c) => c.year === 2025),
  },
  {
    id: 'y3',
    year: 2026,
    companies: [],
  },
];

// Current logged-in user (for demo purposes)
export const currentUser: User = mockUsers[0]; // Arjun Kumar (Junior)
