import { Component, OnInit } from '@angular/core';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData: FormData = {
    name: '',
    email: '',
    service: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', this.formData);
    // Reset form after submission
    this.formData = {
      name: '',
      email: '',
      service: '',
      message: ''
    };
  }
}
