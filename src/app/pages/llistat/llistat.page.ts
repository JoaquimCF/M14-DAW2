import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-llistat',
  templateUrl: './llistat.page.html',
  styleUrls: ['./llistat.page.scss'],
})
export class LlistatPage implements OnInit {

  mangas:any = [];



  constructor(public _apiService: ApiService) {
   // this.showManga(); 
    this.getMangas(this.limit,this.offset);
  }

  ngOnInit() {
  }


  // showManga(){
  //   this._apiService.showManga().subscribe((response) => {
  //     this.mangas=response;
  //   });
  // }

  id;

  deleteManga(idmanga){
    alert(idmanga);
    let eliminar = {
      id: idmanga
    }

    console.log(eliminar.id);

    this._apiService.deleteManga(eliminar).subscribe((response) => {
      console.log(response);
     // this.showManga();
    });
  }


  limit = 20;
  offset = 0;

  loadMangas(event) {
    setTimeout(() => {
          console.log('Done');
          this.offset = this.offset + this.limit;
          this.getMangas(this.limit,this.offset);
          event.target.complete();
        }, 500);
  }

  getMangas(limit, offset){
    console.log("asfd");
    console.log("limit: " + limit + " - offset: " + offset);
    var data = new FormData();
    data.append("offset",offset);
    data.append("limit",limit);
    this._apiService.apiManga(data).subscribe((response) =>{
      console.log(response);
      this.mangas = this.mangas.concat(response);
    });
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems()
      event.target.complete();
    }, 500);
  }

  addMoreItems(){
    for(let i=0;i<10;i++){
      this.mangas.push(i);
    }
  }

}
