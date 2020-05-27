import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {IntroComponent} from './components/intro/intro.component';
import {Section1Component} from './components/intro/section1/section1.component';
import {Section2Component} from './components/intro/section2/section2.component';
import {Section3Component} from './components/intro/section3/section3.component';
import { ArtlistFormDialogComponent } from './components/dialogs/artlist-form-dialog/artlist-form-dialog.component';
import { ArtlistFormComponent } from './components/artlist-form/artlist-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './components/artlist-form/upload/upload.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ThankyouComponent } from './components/dialogs/thankyou/thankyou.component';
import { DragDropDirective } from './components/artlist-form/upload/dragDropDirective';



@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    ArtlistFormDialogComponent,
    ArtlistFormComponent,
    UploadComponent,
    ThankyouComponent,
    DragDropDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  entryComponents: [ArtlistFormDialogComponent, ThankyouComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
