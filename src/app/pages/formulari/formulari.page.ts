import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.page.html',
  styleUrls: ['./formulari.page.scss'],
})
export class FormulariPage implements OnInit {

  constructor(
    public _apiService: ApiService
  ) { }

  ngOnInit() {
  }

  nom;
  autor;
  categoria;
  volum;
  imatge;

  selectedFile(event){
    this.imatge = event.target.files[0];
  }

  addManga(){
    var data = new FormData();
    data.append("nom", this.nom);
    data.append("autor", this.autor);
    data.append("categoria", this.categoria);
    data.append("volum", this.volum);
    data.append('imatge', this.imatge);

    //console.log(data.nom, data.categoria, data.autor, data.volum,data.imatge);

    this._apiService.addManga(data).subscribe((response) => {
      console.log(response);
    });

  }


}
