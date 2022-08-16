import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AddSortDirective } from '../add-sort.directive';
import { SortUpComponent } from '../sort-up/sort-up.component';
import { AppComponent } from './app.component';
import { LoginModule } from '../Login/login.module';
import { LoginRoutingModule } from '../login/login-routing.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { AdminModule } from '../admin/admin.module';
import { AdminGuard } from '../admin/admin.guard';
import { EditDirective } from './edit.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostModule } from '../Post/post.module';
import { PostRoutingModule } from '../Post/post-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddSortDirective,
    SortUpComponent,
    EditDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    NgbModule,
    PostRoutingModule,
    PostModule,


    // AdminRoutingModule,
    // AdminModule
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
