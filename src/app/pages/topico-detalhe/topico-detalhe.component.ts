import { Topico } from './../../models/topico';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from './../../services/base/base.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topico-detalhe',
  templateUrl: './topico-detalhe.component.html',
  styleUrls: ['./topico-detalhe.component.css']
})
export class TopicoDetalheComponent implements OnInit {

  constructor(private service: BaseService, private activatedRoute: ActivatedRoute) { }

  id: number;
  topico: Topico;

  status = {
    'NAO_RESPONDIDO': {
      text: 'Não respondido',
      class: 'is-info'
    },
    'NAO_SOLUCIONADO': {
      text: 'Não solucionado',
      class: 'is-warning'
    },
    'SOLUCIONADO': {
      text: 'Solucionado',
      class: 'is-success'
    },
    'FECHADO': {
      text: 'Fechado',
      class: 'is-danger'
    },
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(item => {
      this.id = item.id;

      this.service.Get<Topico>('topicos/' + this.id)
      .subscribe(item => {
        this.topico = item;
      });
    })
  }

}
