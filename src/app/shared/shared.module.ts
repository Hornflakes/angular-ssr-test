import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
