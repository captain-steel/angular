import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [AppComponent, SliderComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSliderModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
