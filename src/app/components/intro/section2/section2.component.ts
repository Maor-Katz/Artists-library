import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../../service/store.service";

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {
  public localCategories;
  public localThings;

  constructor(public _ss: StoreService) {

  }

  ngOnInit() {
    this.localCategories = this._ss.getArtists();
    this.localThings = this._ss.getThings();
  }

}
