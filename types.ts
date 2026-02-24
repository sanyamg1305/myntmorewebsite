import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  details?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  metric: string;
  image?: string;
  category: string;
  reportDetails?: {
    challenge: string;
    solution: string;
    result: string;
    stack: string[];
  };
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  content: React.ReactNode;
  author?: string;
}

export interface Playbook {
  id: string;
  title: string;
  description: string;
}
