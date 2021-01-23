import { BaseService } from './../../services/base/base.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: BaseService) { }

  topicos: any[];

  ngOnInit() {
    this.service.Get<any>('topicos')
    .subscribe(item => {
      this.topicos = item.content;
    })
  }

  abrir() {
    
  }

}
