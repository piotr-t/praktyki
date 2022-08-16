import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { PostRoutingModule } from './post-routing.module';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ], exports: [PostComponent]
})
export class PostModule { }
