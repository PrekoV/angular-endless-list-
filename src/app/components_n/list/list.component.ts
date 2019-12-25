import { Component, OnInit, Input, OnChanges } from "@angular/core";
import randomNumber from "../../helpers/randomNumber";
import { Item } from "../item/item.component";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit, OnChanges {
  @Input() list: Array<Item>;
  defaultList;
  downloadUrl;
  constructor() {}

  ngOnInit() {
    this.defaultList = this.list || [];
  }
  ngOnChanges(e) {
    console.log(e, this.defaultList);
    if (e.list) {
      this.downloadUrl = "";
    }
  }
  addItem() {
    this.defaultList.push({
      id: randomNumber(),
      name: `item${randomNumber()}`
    });
  }
  setNewList(newList){
    this.defaultList = newList
  }
  // getJSON() {
  //   return JSON.stringify(this.defaultList);
  // }
  // public downloadFile() {
  //   const blob = new Blob([this.getJSON()], {
  //     type: "text/json"
  //   });
  //   const url = window.URL.createObjectURL(blob);
  //   console.log(url);
  //   this.downloadUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  //   // window.open(this.downloadUrl);

  //   var a = window.document.createElement("a");
  //   a.href = url;
  //   a.download="testfile"
  //   // a.setAttribute('download', "testfile");
  //   // a.download = url.substr(url.lastIndexOf("/") + 1);
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   // console.log(this.downloadUrl.changingThisBreaksApplicationSecurity);
  // }
}
