import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { CursosService } from './services/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
