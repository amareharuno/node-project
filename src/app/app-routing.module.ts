import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CourseComponent} from './components/course/course.component';
import {TeacherComponent} from './components/teacher/teacher.component';
import {StudentComponent} from './components/student/student.component';

const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'courses', component: CourseComponent},
  {path: 'teachers', component: TeacherComponent},
  {path: 'students', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
