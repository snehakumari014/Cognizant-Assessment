import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';
@Component({
  selector: 'app-enrollment-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentForm {

  constructor(private courseService: CourseService) {}
  studentName = '';
studentEmail = '';
courseId: number | null = null;
preferredSemester = '';
agreeToTerms = false;
submitted = false;

onSubmit(form: NgForm) {

  if (form.valid) {

    const newCourse = {
  name: this.studentName,
  code: 'NEW101',
  credits: 4,
  gradeStatus: 'pending' as const
};

    this.courseService.createCourse(newCourse).subscribe({
      next: (course) => {
        console.log('Course Created:', course);
        alert('Course created successfully!');
        this.submitted = true;
      },
      error: (err) => {
        console.error(err);
        alert('Failed to create course');
      }
    });

  }

}
resetForm(form: NgForm) {
  form.resetForm();
  this.submitted = false;
}
}
