import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Home/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private appService: AppService) { }

  savee(login, email, password): void{
    this.appService.setUser(login.value, email.value, password.value).subscribe((a: any) => {
      // sessionStorage.setItem('login', login.value);
      // sessionStorage.setItem('token', password.value);
     // this.router.navigate(['admin']);
     console.log(a);
    }); // .subscibe();
  }

  ngOnInit(): void {
  }

}
