import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-llistat',
  templateUrl: './llistat.page.html',
  styleUrls: ['./llistat.page.scss'],
})
export class LlistatPage implements OnInit {

  mangas:any = [];

  constructor(
    public _apiService: ApiService
  ) {this.showManga(); }

  ngOnInit() {
  }


  showManga(){
    this._apiService.showManga().subscribe((response) => {
      this.mangas=response;
    });
  }

  id;

  deleteManga(idmanga){
    alert(idmanga);
    let eliminar = {
      id: idmanga
    }

    console.log(eliminar.id);

    this._apiService.deleteManga(eliminar).subscribe((response) => {
      console.log(response);
      this.showManga();
    });
  }

}
