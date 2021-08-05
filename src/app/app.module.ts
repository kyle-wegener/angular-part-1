import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AdoptionFormComponent } from './adoption-form/adoption-form.component';
import { FormTextBoxComponent } from './adoption-form/form-text-box/form-text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    AdoptionFormComponent,
    FormTextBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
