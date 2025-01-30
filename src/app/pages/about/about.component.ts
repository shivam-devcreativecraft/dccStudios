import { Component, OnInit } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote: string;
  social: {
    linkedin: string;
    twitter: string;
  };
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  team: TeamMember[] = [
    {
      name: 'John Doe',
      role: 'Creative Director',
      image: 'https://i.pravatar.cc/300?img=68',
      quote: 'Design is not just what it looks like, it\'s how it works.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Jane Smith',
      role: 'Lead Designer',
      image: 'https://i.pravatar.cc/300?img=32',
      quote: 'Simplicity is the ultimate sophistication.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Mike Johnson',
      role: 'Senior Designer',
      image: 'https://i.pravatar.cc/300?img=56',
      quote: 'Good design is good business.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  timeline: TimelineEvent[] = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded with a vision to transform digital experiences'
    },
    {
      year: '2021',
      title: 'Growth Phase',
      description: 'Expanded our team and services portfolio'
    },
    {
      year: '2022',
      title: 'Major Milestones',
      description: 'Reached 100+ successful projects'
    },
    {
      year: '2023',
      title: 'Innovation Hub',
      description: 'Launched our innovation lab for cutting-edge solutions'
    }
  ];

  achievements: Achievement[] = [
    {
      icon: 'fas fa-trophy',
      title: 'Best Design Agency 2023',
      description: 'Awarded by Design Weekly Magazine'
    },
    {
      icon: 'fas fa-award',
      title: 'Top UX Design',
      description: 'Recognition for exceptional user experience'
    },
    {
      icon: 'fas fa-medal',
      title: 'Innovation Award',
      description: 'For groundbreaking digital solutions'
    }
  ];

  values: Value[] = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'Pushing boundaries with creative solutions'
    },
    {
      icon: 'fas fa-heart',
      title: 'Passion',
      description: 'Dedication to excellence in every project'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Integrity',
      description: 'Building trust through honest partnerships'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaboration',
      description: 'Working together to achieve greatness'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize any necessary data or configurations
  }
}
