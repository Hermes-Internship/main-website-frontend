import { Component, OnInit, Input } from '@angular/core';
import { HermesMainServiceService } from 'src/app/services/hermes-main-service.service';
import { News } from 'src/assets/interfaces/news';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  private _data?:string
  private _imagine?:string
  private _text?:string
  private newsService: HermesMainServiceService;

  constructor(newsService:HermesMainServiceService) { 
    this.newsService=newsService;
    this.newsService.getPosts().subscribe((abc: News[])=>{console.log(abc)})

  }

  ngOnInit(): void {
    this.newsService.getPosts().subscribe((abc: News[])=>{console.log(abc)})
  }

  public get data() {
    return this._data || '';
  }

  public set data(str:string) {
    this._data=str
  }

  public get imagine() {
    return this._imagine || '';
  }

  public set imagine(str:string) {
    this._imagine=str
  }

  public get text() {
    return this._text || '';
  }

  public set text(str:string) {
    this._text=str
  }

}
