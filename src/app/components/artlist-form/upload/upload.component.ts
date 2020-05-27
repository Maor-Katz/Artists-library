import {Component, Input, Output, EventEmitter, Directive, HostListener} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

@Directive({
  selector: '[appDragDrop]'
})

export class UploadComponent {
  @HostListener('drop', ['$event'])

  @Output() updateFilesEvent = new EventEmitter<Array<File>>();
  @Output() onFileDropped = new EventEmitter<any>();

  private files: Array<File> = [];

  constructor() {
  }

  importFile(event) {
    const {target} = event;
    //case im using drag and drop, event is my files.
    const realFiles = target && target.files || event;

    if (realFiles.length === 0 && realFiles.length > 6) {
      console.log("No file selected or length > 6");
      return;
    }

    for (let i = 0; i < realFiles.length; i++) {
      const currentFile = realFiles[i];
      currentFile.fileId = Math.random();
      this.files.push(currentFile)
    }
    this.updateFilesEvent.emit(this.files);
  }

  remove(file) {
    this.files = this.files.filter(f => f['fileId'] !== file.fileId)
    this.updateFilesEvent.emit(this.files);
  }
}
