import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  exports: [
    MatTableModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
