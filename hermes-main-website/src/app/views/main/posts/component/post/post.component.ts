import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Input()
    data?:string

  @Input()
    imagine?:string

  @Input()
    text?:string

  constructor() { 
    //
  }

  ngOnInit(): void {
    //
  }

}
