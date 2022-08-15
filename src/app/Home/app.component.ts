import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as  data from '../data';
import { AppService } from './app.service';





export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];















@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{


  constructor(public http: HttpClient, private appService: AppService){}

data;
data1;
dataToComonrnt = [];
  add(): void{






    from(this.data1).pipe(concatMap(x => this.http.delete('http://localhost:3000/test/' + x,
    {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')}))).subscribe();




  }

  ngOnInit(): void{
   // this.appService.setUsers().subscribe(console.log);
    // this.http.get('http://localhost:3000/test').pipe(tap((s: any) => {this.data1 = s.map(({id}) => id); this.data = s; })).subscribe();

  }



}
