import { Component, OnInit } from '@angular/core';
import { Post } from "../post.model";
import { PostService } from "../post.service";


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  Posts : Post[] ;


  constructor(private postService : PostService ) { }

  ngOnInit() {
    this.postService.getPostList().subscribe(res => {
      this.Posts = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as { }
        } as Post

      })
    });
  }

  removePost = post => this.postService.deletePost(post) ;

}
