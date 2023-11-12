import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'admin/dashboard', component: DashboardComponent},
  {path: 'admin/dashboard/:id', component: DashboardComponent},
  {path: 'home', component: HomeComponent},

  // ↓ !!! Toujours mettre ces path en dernier (tous les redirectTo)!!!
  {path: '', redirectTo: 'home',pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}, // ** signifie n'importe quel caractère (un ou plusieurs)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
