import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Home/app.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts;
  comments;

  constructor(private appService: AppService) { }

  add(f, i): void{
console.log(f.files[0].name);
// console.log("Type: " + f.files[0].type);
const file = new FormData();
file.append('file', f.files[0], f.files[0].name);
file.append('file1', i.value);
this.appService.sendImage(file).subscribe((a: any) => {this.posts = a; });
  }

  dodajComent(comm, id): void{
    console.log(comm);
    const textt = comm.value;
    this.appService.setComment({postID: id, text: textt, userID: 0  }).subscribe((a: any) => {this.comments = a; });

  }


  ngOnInit(): void {
    this.appService.getComments().subscribe((a: any) => {this.comments = a; console.log(a); });
    this.appService.getPosts().subscribe((a: any) => {this.posts = a; });

  }

}
