import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePostComponent } from "./create-post/create-post.component"
import { EditPostComponent } from "./edit-post/edit-post.component"
import { ListPostComponent } from "./list-post/list-post.component"

const routes: Routes = [
  { path: "", redirectTo:"/create" , pathMatch:"full"},
  { path: "create" , component: CreatePostComponent },
  { path: "update-post/:id" , component: EditPostComponent },
  { path: "list-posts" , component: ListPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
