import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { MahasiswaStartComponent } from './mahasiswa/mahasiswa-start/mahasiswa-start.component'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';

import { MahasiswaListComponent } from "./mahasiswa/mahasiswa-list/mahasiswa-list.component";
import { MahasiswaDetailComponent } from "./mahasiswa/mahasiswa-detail/mahasiswa-detail.component";

import { MahasiswaItemComponent } from "./mahasiswa/mahasiswa-list/mahasiswa-item/mahasiswa-item.component";
import { DropdownDirective } from './shared/dropdown.directive';
import { MahasiswaEditComponent } from './mahasiswa/mahasiswa-edit/mahasiswa-edit.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MahasiswaComponent,
    MahasiswaStartComponent,

    MahasiswaListComponent,
    MahasiswaDetailComponent,

    MahasiswaItemComponent,

    DropdownDirective,
    MahasiswaEditComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
