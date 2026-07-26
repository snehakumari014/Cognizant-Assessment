import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  constructor(public enrollmentService: EnrollmentService) {}

  @Input() course!: {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: string;
  
};
@Output() enrollRequested = new EventEmitter<number>();
isExpanded = false;
toggleDetails() {
  this.isExpanded = !this.isExpanded;
}
toggleEnrollment() {

  if (this.enrollmentService.isEnrolled(this.course.id)) {
    this.enrollmentService.unenroll(this.course.id);
  } else {
    this.enrollmentService.enroll(this.course.id);
  }

}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes['course']);
  }
  // Getter keeps the template clean by moving class logic into TypeScript.
get cardClasses() {
  return {
    'card--full': this.course.credits >= 4,
    'expanded': this.isExpanded
  };
}

}
