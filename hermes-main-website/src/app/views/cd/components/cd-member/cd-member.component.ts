import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-member',
  templateUrl: './cd-member.component.html',
  styleUrls: ['./cd-member.component.sass']
})
export class CdMemberComponent implements OnInit {

  @Input()
  role?:string;
  picture?:string;
  name?:string;
  
  constructor() {
    //
   }

  ngOnInit(): void {
    //
  }

}
