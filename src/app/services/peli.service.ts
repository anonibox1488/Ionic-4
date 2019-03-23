import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ipelis } from '../model/IPelis.interface';



@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private url = '';
  private apiKey = 'MyApiKey';

  constructor(private http: HttpClient) { }

  search(title: string, type: string) {
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<Ipelis>(this.url).pipe(map(results => results['Search']));
  }

  getDetail(id: string) {
    return this.http.get<Ipelis>(`http://www.omdbapi.com/?i=${id}&plot=full&apiKey=${this.apiKey}`);
  }
}
