import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { GraphComponent } from './graph/graph.component';
import { CardLayoutComponent } from './card/cardlayout.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [    AppComponent,
    CardComponent,
    GraphComponent,
    CardLayoutComponent,
    LinksComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
