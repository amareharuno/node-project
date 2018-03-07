import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from './student.service';
import {Course} from '../../model/course';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: [
    './student.component.less'
  ]
})
export class StudentComponent implements OnInit {

  _students: Student[];
  _showDetailsPanel = false;

  _selectedStudent: Student;
  _selectedStudentCourses: Course[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getStudents();
  }

  showStudentDetails(selectedStudent: Student): void {
    this._showDetailsPanel = true;
    this._selectedStudent = selectedStudent;
    this.getStudentCourses(selectedStudent);
  }

  private getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this._students = students);
  }

  private getStudentCourses(student: Student | number) {
    // todo: uncomment later
    // this.studentService.getStudentCourses(student)
    //   .subscribe(courses => this._selectedStudentCourses = courses);

    // stub todo: remove it when service will be available
    const course: Course = new Course(11, 'CourseName', new Date(), new Date(), 1);
    // this._selectedStudentCourses = [
    //   course, course, course, course, course, course, course, course, course, course, course, course, course, course
    // ];
  }
}
