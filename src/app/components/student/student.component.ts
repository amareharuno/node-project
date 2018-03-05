import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: [
    './student.component.less'
  ]
})
export class StudentComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  showStudentPage(): void {
    // todo
  }

}
