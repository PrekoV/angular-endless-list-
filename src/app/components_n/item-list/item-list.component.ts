import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ViewChild
} from "@angular/core";
import { ListComponent } from "../list/list.component";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.sass"]
})
export class ItemListComponent implements OnInit {
  @ViewChild(ListComponent) listComponent: ListComponent;

  constructor() {}

  downloadJSON() {
    this.downloadFile();
  }

  getJSON() {
    return JSON.stringify(this.listComponent.defaultList);
  }

  public downloadFile() {
    const blob = new Blob([this.getJSON()], {
      type: "text/json"
    });
    const url = window.URL.createObjectURL(blob);
    var a = window.document.createElement("a");
    a.href = url;
    a.download = "testfile";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  uploadJSON(e) {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = event =>
      this.listComponent.setNewList(JSON.parse(event.target.result));
  }

  ngOnInit() {}
}
