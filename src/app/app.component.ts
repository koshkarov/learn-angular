import { Component } from '@angular/core'
import { ProductService } from './products/product.service';
import { PostService } from './posts/posts.service';

@Component ({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: [ 'app.component.css' ],
  providers: [ ProductService, PostService ]
})

export class AppComponent {
  pageTitle: string = 'Hello world!'
}