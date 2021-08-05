import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})

export class EventComponent implements OnInit {

  @Input()
  activityLink?: string;
  date?: string;

  constructor() {
    //
   }

  ngOnInit(): void {
    //
  }

}
