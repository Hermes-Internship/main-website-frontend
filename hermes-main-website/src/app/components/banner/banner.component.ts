import { Component, Input, OnInit } from '@angular/core';
//import { title } from 'process';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {
  
  private _title?:string

  constructor() { 
    //
  }

  ngOnInit(): void {
    //
  }

  @Input()

  public get title() {
    return this._title || '';
  }

  public set title(str:string) {
    this._title=str
  }

}

