import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Course {
  name: string;
  description: string;
  category: string;
  subject: string;
  start_time: string;
  end_time: string;
  number_of_students: number;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private courses: Course[] = [
    {
      name: 'Dev',
      description: 'Dev',
      category: 'Dev',
      subject: 'Dev',
      start_time: '14:00',
      end_time: '18:00',
      number_of_students: 4,
    },
    {
      name: 'Java',
      description: 'Java',
      category: 'Java',
      subject: 'Java',
      start_time: '18:00',
      end_time: '22:00',
      number_of_students: 8,
    },
  ];

  constructor() { }

  

  searchCourse(data: string) {
    const term = data.toLowerCase();

    const filteredCourses = this.courses.filter(course => {
      return (
        course.name.toLowerCase().includes(term) ||
        course.start_time.toLowerCase().includes(term) ||
        course.end_time.toLowerCase().includes(term)
      );
    });

    return (filteredCourses);
  }

  getCourses() {
    return this.courses;
  }
}
