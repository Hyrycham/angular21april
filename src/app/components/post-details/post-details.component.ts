import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {IPost} from "../../models/IPost";


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
post:IPost
  constructor(
    private activatedRoute:ActivatedRoute,
    private postService:PostService,
    private router:Router)
  {
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this.postService.getPostById(id).subscribe(value=> this.post  = value)
    // })


    this.activatedRoute.params.subscribe(value => {
      this.post  = this.router.getCurrentNavigation()?.extras.state as IPost;
    })



  }

  ngOnInit(): void {
  }

}
