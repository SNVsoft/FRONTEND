import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  title=""
// constructor(private titleservice:Title){
//    this.titleservice.setTitle($localize`${this.title}`)
// }
panelOpenState = false;
}
