import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { ColaboradoresService } from './colaboradores.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ColaboradoresModule,
  ],
  providers: [
    ColaboradoresService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
