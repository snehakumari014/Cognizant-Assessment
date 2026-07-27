import { CourseCard } from '../../components/course-card/course-card';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';
import { Course } from '../../models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course';
@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {

  isLoading = true;
  errorMessage = '';
  constructor(
  private store: Store,
  private courseService: CourseService,
  private router: Router,
  private route: ActivatedRoute
) {
  this.courses$ = this.store.select(selectAllCourses);
}
  courses$: Observable<Course[]>;
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

  this.searchText =
    this.route.snapshot.queryParamMap.get('search') || '';

  this.store.dispatch(loadCourses());
  console.log('Dispatched loadCourses');

this.isLoading = false;

}

// trackBy improves performance by reusing existing DOM elements
// instead of recreating them when the list changes.
trackByCourseId(index: number, course: any): number {
  return course.id;
}

updateFirstCourse() {

  const updatedCourse: Course = {
    id: 1,
    name: 'Angular Advanced',
    code: 'ANG201',
    credits: 5,
    gradeStatus: 'passed'
  };

  this.courseService.updateCourse(1, updatedCourse).subscribe({
    next: () => {
      alert('Course Updated!');
    },
    error: (err: any) => console.error(err)
  });

}

deleteLastCourse() {

  this.courseService.deleteCourse(5).subscribe({
    next: () => {
      alert('Course Deleted!');
    },
    error: (err: any) => console.error(err)
  });

}
}