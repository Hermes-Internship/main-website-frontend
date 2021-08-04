import { Component, OnInit } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { HermesMainServiceService } from 'src/app/services/hermes-main-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor() {
    //
   }

  ngOnInit(): void {
    //
  }

  public loadPosts(service: HermesMainServiceService){
  let loadmore: any;
  loadmore = document.querySelector('#more-buton');
    let currentItems = 6;
    loadmore.addEventListener('click', (_e: any) => {
        const elementList = service.getPosts;
        for (let i = currentItems; i < currentItems + 3; i++) {
            if (elementList) {
                elementList.style.display = 'inline';
            }
        }
      currentItems += 3;
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    })
  }
}
