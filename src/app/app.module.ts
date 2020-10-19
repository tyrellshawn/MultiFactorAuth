import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { GenerateCodeComponent } from './auth/generate-code/generate-code.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    GenerateCodeComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
