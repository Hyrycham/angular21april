import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url= 'https://jsonplaceholder.typicode.com/posts';
  private url2= 'https://jsonplaceholder.typicode.com/comments';
  constructor(private httpClient:HttpClient) { }

  getCommentsByPostId(id:number): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(this.url+'/'+id+'/comments');
  }
  getAllComments(): Observable<IComment[]>{
    return this.httpClient.get<IComment []>(this.url2);
  }

}
