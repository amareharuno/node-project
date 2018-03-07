import {Component, OnInit} from '@angular/core';
import {CourseService} from './course.service';
import {Course} from '../../model/course';
import {Teacher} from '../../model/teacher';
import {TeacherService} from '../teacher/teacher.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: [
    './course.component.less'
  ]
})
export class CourseComponent implements OnInit {

  _courses: Course[];
  _showDetailsPanel = false;
  _clickedCourse: Course;
  _teachers: Teacher[];

  constructor(private courseService: CourseService, private teacherService: TeacherService) {
  }

  ngOnInit(): void {
    this.getCourses();
    this.getTeachers();
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe(courses => this._courses = courses);
  }

  getTeachers(): void {
    this.teacherService.getTeachers().subscribe(teachers => this._teachers = teachers);
  }

  showCourseDetails(selectedCourse: Course): void {
    this._showDetailsPanel = true;
    this._clickedCourse = selectedCourse;
  }
}
