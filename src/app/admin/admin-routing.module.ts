import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../Login/login/login.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '' , component: AdminComponent, canLoad: [AdminGuard]},
  {path: '**' , component: AdminComponent, canLoad: [AdminGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class AdminRoutingModule { }
