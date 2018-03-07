import {Component, OnInit} from '@angular/core';
import {Teacher} from '../../model/teacher';
import {TeacherService} from './teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: [
    './teacher.component.less'
  ]
})
export class TeacherComponent implements OnInit {

  _teachers: Teacher[];
  _showDetailsPanel = false;
  _clickedTeacher: Teacher;

  constructor(private teacherService: TeacherService) {
  }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(): void {
    this.teacherService.getTeachers()
      .subscribe(teachers => this._teachers = teachers);
  }

  showTeacherDetails(selectedTeacher: Teacher): void {
    this._showDetailsPanel = true;
    this._clickedTeacher = selectedTeacher;
  }

}
