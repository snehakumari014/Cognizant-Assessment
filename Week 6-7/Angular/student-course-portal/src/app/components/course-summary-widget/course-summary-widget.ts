import { Component } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css',
})
export class CourseSummaryWidget {

  totalCourses = 0;

  constructor(private courseService: CourseService) {

    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.totalCourses = courses.length;
      }
    });

  }

}