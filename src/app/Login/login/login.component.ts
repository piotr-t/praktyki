import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Home/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new FormControl('ja');
  password = new FormControl('1234');

  constructor(private router: Router, private appService: AppService) { }

  save(): void{



  }

  ngOnInit(): void {
    this.appService.getUser('email@email', '12345').subscribe(console.log); // login, password

  }

}
