import { CourseCard } from '../../components/course-card/course-card';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {

  isLoading = true;
  constructor(
  private courseService: CourseService,
  private router: Router,
  private route: ActivatedRoute
) {}
  courses: Course[] = [];
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
viewCourse(courseId: number): void {

  console.log('Clicked course:', courseId);

  this.router.navigate(['courses', courseId]);

}
updateSearch(): void {

  this.router.navigate(
    ['courses'],
    {
      queryParams: {
        search: this.searchText
      }
    }
  );

}
ngOnInit(): void {

  this.courses = this.courseService.getCourses();
  this.searchText =
  this.route.snapshot.queryParamMap.get('search') || '';

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