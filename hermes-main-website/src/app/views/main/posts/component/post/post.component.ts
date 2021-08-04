import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  private _data?:string
  private _imagine?:string
  private _text?:string

  constructor() { 
    //
  }

  ngOnInit(): void {
    //
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
