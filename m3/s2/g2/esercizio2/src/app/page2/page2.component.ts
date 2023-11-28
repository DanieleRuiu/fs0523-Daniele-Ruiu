import { ɵNgNoValidate } from '@angular/forms';
import { PostServiceTsService } from './../post.service.ts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {

  posts = [];
  constructor(private postService: PostServiceTsService) {}

  ngOnInit() {
    /*this.posts = this.postService.posts;*/
  }
}
