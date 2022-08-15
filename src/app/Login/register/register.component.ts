import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Home/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  login = new FormControl('user1');
  email = new FormControl('user1@gmail.com');
  password = new FormControl('1234');

  constructor(private router: Router, private appService: AppService) { }

  savee(): void{
    this.appService.setUser(this.login.value, this.email.value, this.password.value).subscribe((a: any) => {
      // sessionStorage.setItem('login', login.value);
      // sessionStorage.setItem('token', password.value);
     // this.router.navigate(['admin']);
     console.log(a);
    });
  }

  ngOnInit(): void {
  }

}
