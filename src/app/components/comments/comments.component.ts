import {Component, OnInit} from '@angular/core';
import {IComment} from "../../models/iComment";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments:IComment[];

  constructor(private commentsService:CommentsService ) {

      }

  ngOnInit(): void {
        this.commentsService.getAllComments().subscribe(value=> {this.comments=value;
          });

  }

}
