import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from 'src/app/components_n/item/item.component';
import { ListComponent } from 'src/app/components_n/list/list.component';
import { ItemListComponent } from 'src/app/components_n/item-list/item-list.component';

@NgModule({
  declarations: [ItemComponent, ListComponent, ItemListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ItemListComponent
  ]
})
export class ItemListModule { }
