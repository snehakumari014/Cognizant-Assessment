import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {

  courses = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      duration: '6 Weeks',
      instructor: 'John'
    },
    {
      id: 2,
      name: 'TypeScript Basics',
      duration: '4 Weeks',
      instructor: 'David'
    },
    {
      id: 3,
      name: 'Web Development',
      duration: '8 Weeks',
      instructor: 'Smith'
    },
    {
      id: 4,
      name: 'Java Programming',
      duration: '10 Weeks',
      instructor: 'James'
    }
  ];
  selectedCourse = '';
  searchText = '';
  showCourses = true;

  toggleCourses() {
  this.showCourses = !this.showCourses;
}

enroll(courseName: string) {
  this.selectedCourse = courseName;
  alert('You enrolled in ' + courseName);
}

}