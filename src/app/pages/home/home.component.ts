import { PaginationResult } from './../../models/pagination-result';
import { TopicoListagem } from './../../models/topico';
import { BaseService } from './../../services/base/base.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: BaseService) { }

  topicos: TopicoListagem[];

  ngOnInit() {
    this.service.Get<PaginationResult<TopicoListagem>>('topicos')
    .subscribe(item => {
      this.topicos = item.content;
    })
  }

  abrir() {
    
  }

}
