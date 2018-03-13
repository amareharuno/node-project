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
  _showAddPanel = false;
  _selectedStudent: Student;
  _addedStudent: Student;
  _updatedStudent: Student;
  _selectedStudentCourses: Course[];

  constructor(private studentService: StudentService) {
    this._updatedStudent = new Student();
    this._addedStudent = new Student();
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
    this.studentService.getStudentCourses(student)
      .subscribe(courses => this._selectedStudentCourses = courses);
  }

  _addStudent() {
    this.studentService.addStudent(this._addedStudent).subscribe(() => this.getStudents());
    this._showAddPanel = false;
  }

  _removeItem(student: Student | number, event: MouseEvent) {
    this.studentService.deleteStudent(student).subscribe(() => this.getStudents());
    event.stopPropagation();
  }

  _updateStudent() {
    this.studentService.updateStudent(this._selectedStudent.id, this._updatedStudent).subscribe(() => this.getStudents());
  }
}
