import { UnitDetailsComponent } from './components/unit-details/unit-details.component';
import { NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { SigninComponent } from './components/signin/signin.component';
import { UbdateComponent } from './components/ubdate/ubdate.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      { path: 'ubdate', component: UbdateComponent },
      { path: 'add', component: AddComponent },
      { path: 'ubdate/:id', component: UnitDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
