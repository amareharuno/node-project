import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Teacher} from '../model/teacher';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TeacherService {

  private teacherUrl = 'http://localhost:3000/teacher';

  constructor(private http: HttpClient) {
  }

  /** GET teachers from the server */
  getTeachers(): Observable<Teacher[]> {
    return this.http
      .get<Teacher[]>(this.teacherUrl)
      .pipe(
        catchError(this.handleError('getTeachers', []))
      );
  }

  /** GET teacher by id. Will 404 if id not found */
  getTeacher(id: number): Observable<Teacher> {
    const url = `${this.teacherUrl}/${id}`;
    return this.http
      .get<Teacher>(url)
      .pipe(
        catchError(this.handleError<Teacher>(`getTeacher id=${id}`))
      );
  }

  /** POST: create a new teacher to the server */
  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http
      .post<Teacher>(this.teacherUrl, teacher, httpOptions)
      .pipe(
        catchError(this.handleError<Teacher>('addTeacher'))
      );
  }

  /** DELETE: delete the teacher from the server */
  deleteTeacher(id: number): Observable<Teacher> {
    const url = `${this.teacherUrl}/${id}`;

    return this.http
      .delete<Teacher>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Teacher>('deleteTeacher'))
      );
  }

  /** PUT: update the hero on the server */
  updateAddress(teacher: Teacher): Observable<Teacher> {
    return this.http
      .put(this.teacherUrl, teacher, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateTeacher'))
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
