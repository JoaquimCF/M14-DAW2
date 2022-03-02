import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  constructor(public _apiService: ApiService) {
    // this.loadMangas();
  }

  ngOnInit() {
  }


  // loadData(event) {
  //   setTimeout(() => {
  //     console.log('Done');
  //     this.addMoreItems()
  //     event.target.complete();
  //   }, 500);
  // }

  // addMoreItems(){
  //   for(let i=0;i<10;i++){
  //     this.pokemons.push(i);
  //   }
  // }


}
