import { Component } from '@angular/core';
import { PostService } from '../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent {
  result: any[] = [];
  name: string = "";

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar
  ) {}

  searchByName(name: string) {
    this.postService.searchByName(name).subscribe(
      (res: any) => {
        this.result = res;
        console.log(this.result);
      },
      error => {
        this.snackBar.open("Something went wrong!", "OK");
      }
    );
  }
}

