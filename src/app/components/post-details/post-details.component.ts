import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {IPost} from "../../models/IPost";
import {CommentsService} from "../../services/comments.service";
import {IComment} from "../../models/IComment";


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {



post:IPost;
comments:IComment[];

  constructor(
    private activatedRoute:ActivatedRoute,
    private postService:PostService,
    private router:Router,
    private commentsService:CommentsService,
  )
  {
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this.postService.getPostById(id).subscribe(value=> this.post  = value)
    // })


    this.activatedRoute.params.subscribe(value => {
      this.post  = this.router.getCurrentNavigation()?.extras.state as IPost;
      this.commentsService.getCommentsByPostId(this.post?.id).subscribe(value=>
      {this.comments=value }
      );
    })

  }

  ngOnInit(): void {


  }

}
