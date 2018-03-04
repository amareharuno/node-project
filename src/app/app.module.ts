import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import {CourseComponent} from './course/course.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    CourseComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
