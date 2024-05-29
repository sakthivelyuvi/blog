import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  
  allPosts:any;
  constructor(private postService: PostService,private snackBar:MatSnackBar,private router:Router){}
  ngOnInit(){
    this.getAllPosts();
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe(res=>{
console.log(res);
this.allPosts=res;
console.log(this.allPosts.tags);
    }, error=>{
      this.snackBar.open("Something Went Wrong!!!","ok")
    })
  }
  

}
