import {Component, OnInit} from '@angular/core';
import {IComment} from "../../models/iComment";
// import {CommentsService} from "../../services/comments.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments:IComment[];

  // constructor(private commentsService:CommentsService ) {
  constructor(private  activatedRoute:ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      this.comments=value.waitData
    })
      }

  ngOnInit(): void {
  // this.commentsService.getAllComments().subscribe(value=> {this.comments=value;});
  }

}
