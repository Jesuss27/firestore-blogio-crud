import { Component, OnInit } from '@angular/core';
import { PostService } from "../post.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router" ;
 
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  public postForm:FormGroup

  constructor(
    public postService:PostService ,
    public formBuilder:FormBuilder ,
    private router: Router ,
    private act: ActivatedRoute ,

  ) { 
    this.postForm = this.formBuilder.group({
      title: [""],
      date:[""],
      notes:[""],
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.postService.createPost(this.postForm.value);
    this.router.navigate(["list-posts"])
  }

}
