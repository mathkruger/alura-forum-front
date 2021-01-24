import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { TopicoDetalheComponent } from './pages/topico-detalhe/topico-detalhe.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenVerificationInterceptorService } from './services/interceptors/token-verification.interceptor';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // Components
    TopicCardComponent,
    NavbarComponent,
    TopicDetailComponent,

    // Pages
    LoginComponent,
    HomeComponent,
    TopicoDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenVerificationInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
