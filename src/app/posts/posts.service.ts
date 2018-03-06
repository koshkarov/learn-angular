import { Injectable } from "@angular/core";
import { IPost } from "../Interfaces/IPost";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostService {

    private _postsUrl: string = 'http://localhost:5000/api/posts';

    getPosts(): Observable<IPost[]> {
        return this._http.get<IPost[]>(this._postsUrl)
        .do(data => console.log('Posts: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    constructor(private _http: HttpClient){

    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}