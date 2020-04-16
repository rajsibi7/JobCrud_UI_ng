import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddjobComponent } from './addjob/addjob.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'createjob', component : AddjobComponent},
  { path: 'createjob/:id', component : AddjobComponent},
  { path: 'dashboard', component : DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
