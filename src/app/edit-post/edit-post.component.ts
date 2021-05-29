import { Component, OnInit } from '@angular/core';
import { Post } from "../post.model"; 
import { PostService } from "../post.service" ;
import { FormBuilder, FormGroup } from "../../../node_modules/@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  editForm : FormGroup
  
  postRef: any


  constructor(
    private postService:PostService,
    public fb: FormBuilder,
    public router: Router,
    private act: ActivatedRoute ) { 
      this.editForm = this.fb.group({
        title:[""],
        date:[""],
        notes:[""],  
      })
     }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get("id")

    this.postService.getPostDoc(id).subscribe(res => {
      this.postRef = res;
      this.editForm = this.fb.group({
        title:[this.postRef.title],
        date:[this.postRef.date],
        notes:[this.postRef.notes],
      })

    })

  }

  onSubmit(){
    console.log("submitted")
    const id = this.act.snapshot.paramMap.get("id") ; 
    this.postService.updatePost(this.editForm.value, id);
    this.router.navigate(["list-posts"]) ; 
  };

}
