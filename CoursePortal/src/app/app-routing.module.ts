import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentEnrollComponent } from './student-enroll/student-enroll.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [{path:"",component: StudentEnrollComponent},
{path:"student",component: StudentEnrollComponent},
{path:"subjects",component: SubjectsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
