import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppShellModule } from './components/app-shell/app-shell.module';
import { CommonComponentModule } from './components/common-components/common-component.module';

// HttpClientModule

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppShellModule,
    HttpClientModule,
    CommonComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
