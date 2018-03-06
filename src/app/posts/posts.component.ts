import { Component, OnInit } from "@angular/core";
import { IPost } from "../Interfaces/IPost";
import { PostService } from "./posts.service";

@Component({
    selector: 'pm-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
    private _postService: PostService;
    posts: IPost[];
    errorMessage: string;

    constructor(private postService: PostService) {
        this._postService = postService;
    }

    ngOnInit(): void {
        this._postService.getPosts()
        .subscribe(posts => {
            this.posts = posts
            },
            error => this.errorMessage = <any>error);
    }
}