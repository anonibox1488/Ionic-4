import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { PeliService } from '../../services/peli.service';
import { Ipelis } from '../../model/IPelis.interface';


@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {
  results: Observable<Ipelis>;
  term = '';
  type = '';

  constructor(private peliService: PeliService) { }

  ngOnInit() {
  }

  searchChanged(): void {
    this.results = this.peliService.search(this.term, this.type);
  }

}
