import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  addManga(data){
    return this.http.post('http://localhost/ionic_backend/insert.php', data);
  }

  deleteManga(data){
    return this.http.post('http://localhost/ionic_backend/delete.php', data);
  }

  showManga(){
    return this.http.get('http://localhost/ionic_backend/read.php');
  }

}
