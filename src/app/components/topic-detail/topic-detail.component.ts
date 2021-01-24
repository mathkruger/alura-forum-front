import { RespostaListagem } from './../../models/resposta';
import { Topico } from './../../models/topico';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {

  constructor() { }

  @Input() item: RespostaListagem;

  ngOnInit() {
  }

}
