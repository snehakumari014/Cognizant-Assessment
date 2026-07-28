import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  map,
  tap,
  retry,
  catchError,
  throwError
} from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(

      // Transform the response
      map(courses => courses.filter(course => course.credits > 0)),

      // Side effect: logging only
      tap(courses =>
        console.log('Courses loaded:', courses.length)
      ),

      // Retry failed request 2 times
      retry(2),

      // Error handling
      catchError(err => {
        console.error(err);

        return throwError(() =>
          new Error('Failed to load courses. Please try again.')
        );
      })

    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}