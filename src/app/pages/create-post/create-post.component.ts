import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipGrid, MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit{
  // postby: string = '';
postForm!:FormGroup;
tags:string[]=[];

tagInputControl = new FormControl(); 
    constructor(
      private fb: FormBuilder,
      private router: Router,
      private snackBar: MatSnackBar,
      private postService: PostService
    ) {}
    ngOnInit() {
      this.postForm = this.fb.group({
        name: [null, Validators.required],
        content: [null, [Validators.required, Validators.maxLength(5000)]],
        img: [null, Validators.required],
        dbimg: [null, Validators.required],
        postby: [null, Validators.required],
        tags: [[]] 
      });
      // this.postForm.patchValue({
      //   postBy: "" // Replace with the actual name of the current user
      // });

    }
    
    add(event: MatChipInputEvent): void {
      console.log('Add function called');
      const value = (event.value || '').trim();
      console.log('Tag value:', value);
    
      if (value) {
        this.tags.push(value);
        console.log('Tags array:', this.tags);''
      }
    
      event.chipInput!.clear();
    }
    
  
    remove(tag: string):void {
      const index = this.tags.indexOf(tag);
      if (index >= 0) {
        this.tags.splice(index, 1);
      }
    }
    createPost() {
      const data = this.postForm.value;
      data.tags = this.tags;
      console.log(data.tags);
      console.log(data);
      this.postService.createNewPost(data).subscribe(
        (res) => {
          this.snackBar.open('Post Created successfully !!!', 'ok');
          this.router.navigateByUrl('/');
        },
        (error) => {
          this.snackBar.open('Something Went Wrong!!!', 'ok');
        })
}



// chat gpt

}
