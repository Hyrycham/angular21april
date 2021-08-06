import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {IPost} from "../../../models/iPost";

@Component(
  {
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
}
)
export class PostDetailsComponent implements OnInit {

post:IPost;
dataInfo:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private postService:PostService,
    private router:Router,

  )
  {
    if(this.router.getCurrentNavigation()?.extras.state){
  this.activatedRoute.params.subscribe(value => {
    this.post  = this.router.getCurrentNavigation()?.extras.state as IPost;
           this.dataInfo='POST`S  data getting from STATE';
  })
}
else{
  this.activatedRoute.params.subscribe(({id}) => {
    this.postService.getPostById(id).subscribe(value=> {
      this.post = value;
       this.dataInfo='POST`S data getting from API'

    });
  })
}
  }

  ngOnInit(): void {
  }

}
