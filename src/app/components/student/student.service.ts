import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Student} from '../../model/student';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Course} from '../../model/course';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class StudentService {

  private studentUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {
  }

  /** GET students from the server */
  getStudents(): Observable<Student[]> {
    return this.http
      .get<Student[]>(this.studentUrl)
      .pipe(
        catchError(this.handleError('getStudents', []))
      );
  }

  /** GET student by id. Will 404 if id not found */
  getStudent(id: number): Observable<Student> {
    // TODO
    const url = `${this.studentUrl}/${id}`;
    return this.http
      .get<Student>(url)
      .pipe(
        catchError(this.handleError<Student>(`getStudent id=${id}`))
      );
  }

  getStudentCourses(student: Student | number): Observable<Course[]> {
    // TODO
    const id = typeof student === 'number' ? student : student.id;
    const url = `${this.studentUrl}/${id}/courses/`;

    return this.http
      .get<Course[]>(url)
      .pipe(
        catchError(this.handleError(`getStudentCourse id=${id}`, []))
      );
  }

  /** POST: create a new student to the server */
  addStudent(student: Student): Observable<Student> {
    // TODO
    return this.http
      .post<Student>(this.studentUrl, student, httpOptions)
      .pipe(
        catchError(this.handleError<Student>('addStudent'))
      );
  }

  /** DELETE: delete the student from the server */
  deleteStudent(student: Student | number): Observable<Student> {
    const id = typeof student === 'number' ? student : student.id;
    const url = `${this.studentUrl}/${id}`;

    return this.http
      .delete<Student>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Student>('deleteStudent'))
      );
  }

  /** PUT: update the hero on the server */
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http
      .put(`${this.studentUrl}/${id}`, student, httpOptions)
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
