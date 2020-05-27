import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../../service/store.service";
import {MatDialog} from "@angular/material/dialog";
import {ArtlistFormDialogComponent} from '../../dialogs/artlist-form-dialog/artlist-form-dialog.component'
import {ThankyouComponent} from '../../dialogs/thankyou/thankyou.component'

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  public localThingsToCheck

  constructor(public _ss: StoreService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.localThingsToCheck = this._ss.getThingsToCheck();
  }

  openDialog() {
    localStorage.removeItem("userDetails");

    const dialogRef = this.dialog.open(ArtlistFormDialogComponent, {
      width: '100%',
      height: '100%',
      panelClass: 'custom-images-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      const userDetails = localStorage.getItem("userDetails");

      if (userDetails) {
        this.dialog.open(ThankyouComponent, {
          width: '100%',
          height: '100%',
          panelClass: 'custom-images-modalbox'
        });
      }
    });
  }
}
