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
  _showAddPanel = false;
  _clickedTeacher: Teacher;
  _addedTeacher: Teacher;
  _updatedTeacher: Teacher;

  constructor(private teacherService: TeacherService) {
    this._updatedTeacher = new Teacher();
    this._addedTeacher = new Teacher();
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

  _addTeacher() {
    this.teacherService.addTeacher(this._addedTeacher).subscribe(() => this.getTeachers());
    this._showAddPanel = false;
  }

  _removeItem(teacher: Teacher | number, event: MouseEvent) {
    this.teacherService.deleteTeacher(teacher).subscribe(() => this.getTeachers());
    event.stopPropagation();
  }

  _updateTeacher() {
    this.teacherService.updateTeacher(this._clickedTeacher.id, this._updatedTeacher).subscribe(() => this.getTeachers());
    this._showDetailsPanel = false;
  }
}
