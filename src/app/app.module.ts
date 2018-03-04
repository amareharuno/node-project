import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StudentComponent} from './components/student/student.component';
import {TeacherComponent} from './components/teacher/teacher.component';
import {CourseComponent} from './components/course/course.component';
import {AppRoutingModule} from './app-routing.module';
import {CourseService} from './components/course/course.service';
import {StudentService} from './components/student/student.service';
import {TeacherService} from './components/teacher/teacher.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    CourseComponent
  ],
  providers: [
    CourseService,
    StudentService,
    TeacherService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
