import { Injectable } from '@angular/core';
import { Mahasiswa } from '../mahasiswa/mahasiswa.model';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {

  mahasiswas:Mahasiswa[]=[
    new Mahasiswa('../src/app/img/pasti.jpg','Sella Rahma Putri','TI','sella2gmail.com','Kediri','3.000.000'),
    new Mahasiswa('../src/app/img/pasti.jpg','Sheyllma Nabila Prayudati','TI','sheyllma@gmail.com','Malang','5.000.000'),
    new Mahasiswa('../src/app/img/pasti.jpg','Diana Permata Sari','Akuntansi','diana@gmail.com','Malang','6.000.000'),
  ];
constructor() { }

setMahasiswas(mahasiswas:Mahasiswa[]){
  this.mahasiswas=mahasiswas;
}

getMahasiswas(){
  return this.mahasiswas.slice();
}

getMahasiswa(index:number){
  return this.mahasiswas[index];
}
}
