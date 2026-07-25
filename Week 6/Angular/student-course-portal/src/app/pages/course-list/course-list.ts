import { CourseCard } from '../../components/course-card/course-card';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {

  isLoading = true;
  courses = [
    { id: 1, name: 'Angular Fundamentals', code: 'ANG101', credits: 4, gradeStatus: 'passed' },
  { id: 2, name: 'TypeScript Basics', code: 'TS102', credits: 3, gradeStatus: 'failed' },
  { id: 3, name: 'Web Development', code: 'WEB103', credits: 4, gradeStatus: 'pending' },
  { id: 4, name: 'Java Programming', code: 'JAVA104', credits: 5, gradeStatus: 'passed' },
  { id: 5, name: 'Database Management', code: 'DB105', credits: 3, gradeStatus: 'pending' }
  
];
  selectedCourse = '';
  searchText = '';
  showCourses = true;
  selectedCourseId = 0;

  toggleCourses() {
  this.showCourses = !this.showCourses;
}

enroll(courseName: string) {
  this.selectedCourse = courseName;
  alert('You enrolled in ' + courseName);
}
onEnroll(courseId: number) {
  console.log('Enrolling in course: ' + courseId);
  this.selectedCourseId = courseId;
}
ngOnInit(): void {
  setTimeout(() => {
    this.isLoading = false;
  }, 1500);
}
// trackBy improves performance by reusing existing DOM elements
// instead of recreating them when the list changes.
trackByCourseId(index: number, course: any): number {
  return course.id;
}
}