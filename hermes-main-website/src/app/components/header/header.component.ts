import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  opened = false;

 
  toggleSidebar() {
    this.opened = !this.opened;
  }

  
  constructor() { 
    //
   }

  ngOnInit(): void {
    //
  }

  
}
