import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // localhost:4200 redirects to localhost:4200/home
  { path: 'home', component: HomeComponent }, // localhost:4200/home
  { path: 'students', component: StudentsComponent }, // localhost:4200/students
  { path: '**', component: NotFoundComponent } // localhost:4200/blabla anything else
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
