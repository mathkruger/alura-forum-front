import { TopicoListagem } from './../../models/topico';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {

  constructor() { }

  @Input() topic: TopicoListagem;

  ngOnInit() {
  }

}
