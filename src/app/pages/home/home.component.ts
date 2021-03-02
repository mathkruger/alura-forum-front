import { PaginationResult } from './../../models/pagination-result';
import { TopicoListagem } from './../../models/topico';
import { BaseService } from './../../services/base/base.service';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: BaseService) { }

  @ViewChild("novoTopico") botaoNovoTopico: ElementRef<HTMLElement>;

  topicos: TopicoListagem[] = [];
  page = 0;
  totalPages = 0;

  ngOnInit() {
    this.obterTopicos();
  }

  obterTopicos() {
    this.service.Get<PaginationResult<TopicoListagem>>('topicos?page=' + this.page)
      .subscribe(item => {
        this.topicos = this.topicos.concat(item.content);
        this.page = item.number;
        this.totalPages = item.totalPages;
      });
  }

  abrir() {

  }

  @HostListener('window:scroll', ['$event'])
  avancarPagina($event) {
    if(
      this.isScrolledIntoView(this.botaoNovoTopico.nativeElement) &&
      this.page < this.totalPages
    ) {
      this.page++;
      this.obterTopicos();
    }
  }

  isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
  }

}
