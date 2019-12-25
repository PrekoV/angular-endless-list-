import { Component, OnInit, Input } from "@angular/core";
import randomNumber from "../../helpers/randomNumber";

export interface Item {
  id: number;
  name: string;
  sublist?: Array<Item>;
}

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.sass"]
})
export class ItemComponent implements OnInit {
  @Input() newItem: Item;
  item: Item = {
    id: 1,
    name: "name",
    sublist: [{ id: randomNumber(),name: `item${randomNumber()}`}]
  };

  constructor() {
  }

  ngOnInit() {
    if (!this.newItem) return;
    this.item = this.newItem;
  }

  addSublist() {
    if(!this.item.sublist){
      this.item.sublist = [{ id: randomNumber(), name: `item${randomNumber()}`}]
      return
    }
    this.item.sublist.push({ id: randomNumber(), name: `item${randomNumber()}`});
    console.log(this.item);
  }
}
