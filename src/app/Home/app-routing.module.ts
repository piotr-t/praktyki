import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../admin/admin.guard';
import { LoginCanActivateGuard } from '../Login/login-can-activate.guard';
import { LoginComponent } from '../Login/login/login.component';
import { PostComponent } from '../Post/post/post.component';

const routes: Routes = [{path: 'admin', canActivate: [AdminGuard ], canLoad: [AdminGuard],
  loadChildren: () => import('./../admin/admin.module').then(m => m.AdminModule)},
  {path: 'login', canActivate: [LoginCanActivateGuard],
  loadChildren: () => import('./../Login/login.module').then(m => m.LoginModule)
},
{path: 'posts' , component: PostComponent},
{path: '**' , component: LoginComponent, canActivate: [LoginCanActivateGuard], canLoad: [LoginCanActivateGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
