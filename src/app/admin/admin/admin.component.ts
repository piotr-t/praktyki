import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, of,  } from 'rxjs';
import { delay , concatMap} from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users').subscribe();

    const myArray = [1, 2, 3, 4];

    from(myArray).pipe(
        concatMap( item => of(item).pipe( delay( 1000 ) ))
    ).subscribe ( timedItem => {
        console.log(timedItem);
    });
  }

}
