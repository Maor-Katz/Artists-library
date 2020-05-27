import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-artlist-form',
  templateUrl: './artlist-form.component.html',
  styleUrls: ['./artlist-form.component.scss']
})
export class ArtlistFormComponent implements OnInit {
  public form: FormGroup;
  public checkboxes: FormGroup;
  public files: Array<File>;
  public missingSongsNum: number;
  public warnAboutCheckbox: boolean = false;

  constructor(public dialogRef: MatDialogRef<ArtlistFormComponent>, public _fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      fullname: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      country: ["", Validators.required],
      bio: ["", Validators.required],
      whatdoyoudo: ["", Validators.required],
      portfolio: ["", Validators.required],
      pro: [false],
      fullrights: [false],
      artistsMaterial: [false],
      forUse: [false]
    });
    this.checkboxes = this._fb.group({
      fullrights: false,
      artistsMaterial: false,
      forUse: false
    });
  }

  onSubmit() {
    //check if all checkboxes checked
    if (this.checkboxesNotPassed()) {
      this.warnAboutCheckbox = true;
      return
    }
    console.log(this.form);
    //check if user upload minimum 4 songs
    if (!this.checkMinSongs()) {
      return
    }

    const files = this.files.map((file: any) => {
      return {
        id: file.fileId,
        lastMod: file.lastModified,
        lastMoredudDate: file.lastModifiedDate,
        name: file.name,
        size: file.size,
        type: file.type
      }
    });

    const userDetails = {
      form: this.form.value,
      files,
      checkboxes: this.checkboxes.value
    };
    this.missingSongsNum = 0;// maybe dont need
    if (this.form.valid) {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      this.dialogRef.close();
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({onlySelf: true});
      });
    }
  }

  checkboxesNotPassed() {
    const isValid = Object.values(this.checkboxes.value).includes(false)
    return isValid
  }

  checkMinSongs() {
    if (this.files === undefined) {
      this.missingSongsNum = 4;
      return false
    }
    if (this.files.length < 4) {
      this.missingSongsNum = 4 - this.files.length;
      return false
    }
    return true
  }

  updateFiles(files: Array<File>) {
    this.files = files;
  }

}
