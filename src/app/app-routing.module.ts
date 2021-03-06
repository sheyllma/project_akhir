import { NgModule } from '@angular/core';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { Routes,RouterModule } from '@angular/router';
import { MahasiswaStartComponent } from './mahasiswa/mahasiswa-start/mahasiswa-start.component';
import { MahasiswaDetailComponent } from './mahasiswa/mahasiswa-detail/mahasiswa-detail.component';
import { MahasiswaEditComponent } from './mahasiswa/mahasiswa-edit/mahasiswa-edit.component';
import { HomeComponent } from './home/home.component';
const appRoutes:Routes=[
    { path:'',redirectTo:'home',pathMatch:'full'},
    { path:'home',component:HomeComponent},
    {path: 'mahasiswa', component:MahasiswaComponent,children:[
        { path:'',component:MahasiswaStartComponent},
        { path:'new',component:MahasiswaEditComponent},
        { path:':id',component:MahasiswaDetailComponent},
        { path:':id/edit',component:MahasiswaEditComponent},
    ]},
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}