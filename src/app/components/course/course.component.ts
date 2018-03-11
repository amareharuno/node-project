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
  _showAddPanel = false;
  _clickedCourse: Course;
  _updatedCourse: Course;
  _addedCourse: Course;
  _teachers: Teacher[];

  constructor(private courseService: CourseService, private teacherService: TeacherService) {
    this._updatedCourse = new Course();
    this._addedCourse = new Course();
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

  _showCourseDetails(selectedCourse: Course): void {
    this._showDetailsPanel = true;
    this._clickedCourse = selectedCourse;
  }

  _addCourse() {
    this.courseService.addCourse(this._addedCourse).subscribe(() => this.getCourses());
    this._showAddPanel = false;
  }

  _removeItem(course: Course | number, event: MouseEvent) {
    this.courseService.deleteCourse(course).subscribe(() => this.getCourses());
    event.stopPropagation();
  }

  _updateCourse() {
    this.courseService.updateCourse(this._clickedCourse.id, this._updatedCourse).subscribe(() => this.getCourses());
    this._showDetailsPanel = false;
  }

}
