import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsRow1: Project[] = [
    {
      title: 'Budget Eardope',
      category: 'Posters',
      image: 'assets/canvadesigns/eardopeBlackGreen.jpg'
    },
    {
      title: 'Prmium Headphones',
      category: 'Posters',
      image: 'assets/canvadesigns/headphoneRed.jpg'
    },
    {
      title: 'Branded Watch',
      category: 'Posters',
      image: 'assets/canvadesigns/watchKriti.jpg'
    },
    {
      title: 'Gaming Mouse',
      category: 'Posters',
      image: 'assets/canvadesigns/symmMouse.jpg'
    }
  ];

  projectsRow2: Project[] = [
    {
      title: 'Youtube Banner',
      category:'Banners',
      image: 'assets/banners/1.jpg'
    },
    {
      title: 'Yotube',
      category:'Banners',
      image: 'assets/banners/2.jpg'
    },
    {
      title: 'Gym Banner',
      category:'Banners',
      image: 'assets/banners/3.jpg'
    },
    {
      title: 'Social Media Banner',
      category:'Banners',
      image: 'assets/banners/4.jpg'
    }
  ];

  projectsRow3: Project[] = [
    {
      title: 'Travel Blog',
      category: 'Branding',
      image: 'assets/branding/1.jpg'
    },
    {
      title: 'Fitness App',
      category: 'Branding',
      image: 'assets/branding/2.jpg'
    },
    {
      title: 'Product Launch',
      category: 'Branding',
      image: 'assets/branding/3.jpg'
    },
    {
      title: 'Tech Blog',
      category: 'Branding',
      image: 'assets/branding/4.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Duplicate projects for infinite scroll effect
    this.projectsRow1 = [...this.projectsRow1, ...this.projectsRow1];
    this.projectsRow2 = [...this.projectsRow2, ...this.projectsRow2];
    this.projectsRow3 = [...this.projectsRow3, ...this.projectsRow3];
  }
}
