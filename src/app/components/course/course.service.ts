import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Course} from '../../model/course';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CourseService {

  private courseUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {
  }

  /** GET courses from the server */
  getCourses(): Observable<Course[]> {
    return this.http
      .get<Course[]>(this.courseUrl)
      .pipe(
        catchError(this.handleError('getCourses', []))
      );
  }

  /** GET course by id. Will 404 if id not found */
  getCourse(id: number): Observable<Course> {
    const url = `${this.courseUrl}/${id}`;
    return this.http
      .get<Course>(url)
      .pipe(
        catchError(this.handleError<Course>(`getCourse id=${id}`))
      );
  }

  /** POST: create a new course to the server */
  addCourse(course: Course): Observable<Course> {
    return this.http
      .post<Course>(this.courseUrl, course, httpOptions)
      .pipe(
        catchError(this.handleError<Course>('addCourse'))
      );
  }

  /** DELETE: delete the course from the server */
  deleteCourse(course: Course | number): Observable<Course> {
    const id = typeof course === 'number' ? course : course.id;
    const url = `${this.courseUrl}/${id}`;

    return this.http
      .delete<Course>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Course>('deleteCourse'))
      );
  }

  /** PUT: update the hero on the server */
  updateAddress(course: Course): Observable<Course> {
    return this.http
      .put(this.courseUrl, course, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateCourse'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
