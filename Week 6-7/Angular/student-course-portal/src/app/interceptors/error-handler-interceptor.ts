import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      if (error.status === 401) {
        alert('Unauthorized! Please login.');
      }
      else if (error.status === 500) {
        alert('Server Error! Please try again later.');
      }

      return throwError(() => error);

    })

  );

};