import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components_n/list/list.component';
import { ItemComponent } from './components_n/item/item.component';
import { ItemListModule } from './modules/item-list/item-list.module';
import { ItemListComponent } from './components_n/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
