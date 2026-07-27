import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from './course';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {

  console.log('Enroll clicked:', courseId);

  if (!this.enrolledCourseIds.includes(courseId)) {
    this.enrolledCourseIds.push(courseId);
  }

  console.log('Current IDs:', this.enrolledCourseIds);
}

  unenroll(courseId: number): void {
    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses() {
  return this.courseService.getCourses();
}

}